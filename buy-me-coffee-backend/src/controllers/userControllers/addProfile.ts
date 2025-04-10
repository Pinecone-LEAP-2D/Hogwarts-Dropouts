import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const addProfile = async (req: Request, res: Response) => {
  const {
    userId,
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;
  try {
    const newProfile = await prisma.profile.create({
      data: {
        userId: userId,
        name: name,
        about: about,
        avatarImage: avatarImage,
        socialMediaURL: socialMediaURL,
        backgroundImage: backgroundImage,
        successMessage: successMessage,
      },
    });
  } catch (error) {}
};
