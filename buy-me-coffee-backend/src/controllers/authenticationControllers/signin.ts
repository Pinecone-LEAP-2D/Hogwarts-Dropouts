import prisma from "../../prismaClient";

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
