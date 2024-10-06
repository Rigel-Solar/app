import { z } from "zod";

export const schemaLogin = z.object({
	email: z
		.string()
		.min(1, { message: "Informe o email." })
		.email("O email não é válido."),
	password: z
		.string()
		// .min(8, {
		// 	message: "Senha inválida. A senha deve ter pelo menos 8 caracteres.",
		// })
		// .max(32, { message: "A senha deve conter no máximo 32 caracteres" })
		// .regex(
		// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
		// 	"A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
		// ),
});
