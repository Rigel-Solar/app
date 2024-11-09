import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ImagePickerButtonProps {
  onImageSelect?: (uri: string) => void;
  buttonStyle?: object;
  textStyle?: object;
  selectText?: string;
  selectedText?: string;
  resizeWidth?: number;
  allowMultiple?: boolean;
  aspect?: [number, number];
}

export const ImagePickerButton: React.FC<ImagePickerButtonProps> = ({
  onImageSelect,
  buttonStyle,
  textStyle,
  selectText = "Selecionar foto",
  selectedText = "Imagem selecionada",
  resizeWidth = 900,
  allowMultiple = true,
  aspect = [9, 16]
}) => {
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);

  const handleSelectImage = async () => {
    try {
      // Solicita permissão para acessar a galeria
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== ImagePicker.PermissionStatus.GRANTED) {
        return Alert.alert('Permissão necessária', 
          'É necessário conceder permissão para acessar seu álbum!');
      }

      // Abre a galeria para seleção
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: allowMultiple,
        aspect: aspect,
        quality: 1,
      });

      if (response.canceled) {
        return;
      }

      // Manipula a imagem selecionada
      if (response.assets && response.assets.length > 0) {
        const imgManipulated = await ImageManipulator.manipulateAsync(
          response.assets[0].uri,
          [{ resize: { width: resizeWidth } }],
          {
            compress: 1,
            format: ImageManipulator.SaveFormat.JPEG,
            base64: true,
          }
        );

        setSelectedImageUri(imgManipulated.uri);
        onImageSelect?.(imgManipulated.uri);
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem');
    }
  };

  return (
    <TouchableOpacity 
      onPress={handleSelectImage}
      style={[styles.button, buttonStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>
        {selectedImageUri ? selectedText : selectText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});