import { Button } from '@/components/form/button';
import { FormFieldsContainer } from '@/components/form/form';
import { Input } from '@/components/form/input';
import * as File from 'expo-file-system'
import { ImagePickerButton } from '@/components/imagePickerButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/useApp';
import { setBanho } from '@/redux/reducers/banho-reducer';
import { RootStackParams } from '@/routes/tab-routes';
import { BanhoTS, banhoSchema } from '@/utils/schemas/schema-banho';
import { api } from '@/utils/services/api';
import { useMutationQuery } from '@/utils/services/hooks/useMutationQuery';
import { Ionicons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { VistoriaRouteProp } from '../Vistoria';
import * as C from './styles';

interface PhotosData {
  Fotos: Array<{ uri: string; name: string; type: string }>;
  CodigoFicha: number;
  TipoFicha: number;
}

export default function Banho() {
  const [selectedPhotos, setSelectedPhotos] = useState<{ uri: string; name: string; type: string }[]>([]);
  const route = useRoute<VistoriaRouteProp>();
  const { orderData } = route.params;
  const dispatch = useAppDispatch();
  const banho = useAppSelector((state) => state.banho.banho);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BanhoTS>({
    resolver: yupResolver(banhoSchema),
    defaultValues: banho,
  });

  const { mutate: onCreate, isLoading } = useMutationQuery(
    `/FichaBanho`,
    'post'
  );

  const { mutate: onCreatePhotos } = useMutationQuery(`/Foto`, 'post');

  const handlePhotoSelect = (file: { uri: string; name: string; type: string }) => {
    setSelectedPhotos((prev) => [...prev, file]);
  };

  const uploadPhotos = async (photosData: PhotosData) => {
    const formData = new FormData();
    
    photosData.Fotos.forEach((photo, index) => {
      formData.append('Fotos', {
        uri: photo.uri,
        name: photo.name,
        type: photo.type,
      } as any);
    });
    formData.append('CodigoFicha', photosData.CodigoFicha.toString());
    formData.append('TipoFicha', photosData.TipoFicha.toString());

    console.log('FormData sendo enviado:', {
      Fotos: photosData.Fotos,
      CodigoFicha: photosData.CodigoFicha,
      TipoFicha: photosData.TipoFicha
    });

		await File.uploadAsync('https://rigelsolarapi-dtdjdzdtfcfcdybm.brazilsouth-01.azurewebsites.net/api/Foto', photosData.Fotos[0].uri, {
			httpMethod: 'POST',
			uploadType: File.FileSystemUploadType.MULTIPART,
			fieldName: 'file'
		})

    // return api.post('/Foto', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
  };

  const onSubmit: SubmitHandler<BanhoTS> = async (formData: BanhoTS) => {
		console.log("Vistoria:", orderData.id)
    formData.idVistoria = orderData.id;
    
    onCreate(formData, {
      onSuccess: async (response) => {
        console.log("response:", response);
        
        if (selectedPhotos.length > 0) {
          const photosData: PhotosData = {
            Fotos: selectedPhotos,
            CodigoFicha: 58,
            TipoFicha: 3,
          };
          
          console.log('Fotos selecionadas:', selectedPhotos);
          console.log('Dados das fotos:', photosData);
          
          try {
            await uploadPhotos(photosData);
            Alert.alert('Relatório e fotos enviados com sucesso!');
            dispatch(setBanho({}));
            navigation.goBack();
          } catch (error) {
						console.log(photosData)
            console.error('Erro ao enviar fotos:', error);
            Alert.alert(
              'Parcialmente enviado',
              'O relatório foi salvo, mas houve um erro ao enviar as fotos.'
            );
            dispatch(setBanho(formData));
            navigation.goBack();
          }
        } else {
          Alert.alert('Relatório criado!');
          dispatch(setBanho({}));
          navigation.goBack();
        }
      },
      onError: (error) => {
        Alert.alert(
          'Não foi possível enviar',
          'Sua requisição não foi enviada, mas salvamos seu relatório!'
        );
        dispatch(setBanho(formData));
        console.log('Erro', error);
        navigation.goBack();
      },
    });
  };

  return (
    <C.Container>
      <C.Form
        contentContainerStyle={{
          rowGap: 20,
        }}
      >
        <FormFieldsContainer>
          <C.Label>Base da caixa d'água em relação a laje</C.Label>
          <Controller
            control={control}
            name="baseCaixa"
            render={({ field: { onChange, value } }) => (
              <Input.Root>
                <Input.Input
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={value?.toString()?.toString() || ''}
                  placeholderText="Quantidade em metros. ex.: 3"
                  onChange={onChange}
                />
                <Input.ErrorText ErrorText={errors.baseCaixa?.message} />
              </Input.Root>
            )}
          />
        </FormFieldsContainer>

        <FormFieldsContainer>
          <C.Label>Base do Boiler em relação a laje</C.Label>
          <Controller
            control={control}
            name="baseBoiler"
            render={({ field: { onChange, value } }) => (
              <Input.Root>
                <Input.Input
                  value={value?.toString()?.toString() || ''}
                  placeholderText="Quantidade em metros. ex.: 3"
                  onChange={onChange}
                />
                <Input.ErrorText ErrorText={errors.baseBoiler?.message} />
              </Input.Root>
            )}
          />
        </FormFieldsContainer>

        <FormFieldsContainer>
          <C.Label>
            Distância do boiler para conexão de distribuição de água quente
          </C.Label>
          <Controller
            control={control}
            name="distanciaBoiler"
            render={({ field: { onChange, value } }) => (
              <Input.Root>
                <Input.Input
                  value={value?.toString() || ''}
                  placeholderText="Quantidade em metros. ex.: 3"
                  onChange={onChange}
                />
                <Input.ErrorText ErrorText={errors.distanciaBoiler?.message} />
              </Input.Root>
            )}
          />
        </FormFieldsContainer>

        <FormFieldsContainer>
          <C.Label>
            Registro de 1" na saída da caixa d´água, exclusivo para alimentação
            do Boiler
          </C.Label>
          <Controller
            control={control}
            name="registroCaixa"
            render={({ field: { onChange, value } }) => (
              <Input.Root>
                <Input.Input
                  value={value?.toString() || ''}
                  placeholderText="Quantidade em metros. ex.: 3"
                  onChange={onChange}
                />
                <Input.ErrorText ErrorText={errors.registroCaixa?.message} />
              </Input.Root>
            )}
          />
        </FormFieldsContainer>

        <FormFieldsContainer>
          <C.Label>
            Registro de 1" no barrilete de água quente a + ou - 1,00 metro do
            Boiler
          </C.Label>
          <Controller
            control={control}
            name="registroBarrilete"
            render={({ field: { onChange, value } }) => (
              <Input.Root>
                <Input.Input
                  value={value?.toString() || ''}
                  placeholderText="Quantidade em metros. ex.: 3"
                  onChange={onChange}
                />
                <Input.ErrorText
                  ErrorText={errors.registroBarrilete?.message}
                />
              </Input.Root>
            )}
          />
        </FormFieldsContainer>

        <FormFieldsContainer>
          <C.Label>Disjuntor bipolar de 20A para resistência (Boiler)</C.Label>
          <Controller
            control={control}
            name="disjuntorBipolar"
            render={({ field: { onChange, value } }) => (
              <Input.Root>
                <Input.Input
                  value={value?.toString() || ''}
                  placeholderText="Quantidade em metros. ex.: 3"
                  onChange={onChange}
                />
                <Input.ErrorText ErrorText={errors.disjuntorBipolar?.message} />
              </Input.Root>
            )}
          />
        </FormFieldsContainer>

        <FormFieldsContainer>
          <C.Label>Fotos do local</C.Label>
          <ImagePickerButton
            selectText={`Selecionar fotos ${
              selectedPhotos.length > 0 ? `(${selectedPhotos.length})` : ''
            }`}
            selectedText={`${selectedPhotos.length} fotos selecionadas`}
            allowMultiple={true}
            aspect={[9, 16]}
            resizeWidth={900}
            onImageSelect={handlePhotoSelect}
            buttonStyle={{
              backgroundColor: '#007AFF',
              width: '100%',
            }}
          />
        </FormFieldsContainer>
      </C.Form>

      <C.ButtonArea>
        <Button
          onPress={() => navigation.goBack()}
          icon={<Ionicons name="chevron-back" size={16} color="white" />}
        >
          Voltar
        </Button>
        <Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Salvar'}
        </Button>
      </C.ButtonArea>
    </C.Container>
  );
}