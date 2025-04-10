import prisma from "../../prismaClient";
import { Response, Request } from "express";
type User = {
  username: string;
  password: string;
  email: string;
};

export const signin = async (req: Request, res: Response) => {
  const { username, password, email } = req.body as unknown as User;
  try {
    const users = await prisma.user.findMany();
  } catch (error) {
  } finally {
    // prisma.$disconnect();
  }
};
