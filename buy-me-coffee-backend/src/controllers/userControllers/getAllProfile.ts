import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const getAllProfile = async (req: Request, res: Response) => {
  try {
    const allProfile = await prisma.profile.findMany();
    console.log(allProfile);
    res.send(allProfile);
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: `server error ${error}`,
    });
  }
};
