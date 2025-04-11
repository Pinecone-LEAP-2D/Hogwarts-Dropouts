import { Response, Request } from "express";
import prisma from "../../prismaClient";
type CurrentUser = {
  currentUser: string;
};
export const getCurrentProfile = async (req: Request, res: Response) => {
  const { currentUser } = req.query as unknown as CurrentUser;
  try {
    const user = await prisma.profile.findUnique({
      where: { name: currentUser },
    });
    res.send(user);
  } catch (error) {
    res.send({
      error: true,
      message: `Server error : ${error}`,
    });
  }
};
