import { z } from "zod";

export const loginSchema = z.object({
  DRT: z.string().nonempty({ message: "O campo usuário é obrigatório" }),
  password: z.string().nonempty({ message: "O campo senha é obrigatório" }),
});
