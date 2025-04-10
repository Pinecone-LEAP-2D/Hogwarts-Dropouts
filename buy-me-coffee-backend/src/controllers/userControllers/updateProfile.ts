import { Response, Request } from "express";
import prisma from "../../prismaClient";
type ProfileIdType = {
  profileId: number;
  successMessage: string;
  backgroundImage: string;
};
export const updateProfile = async (req: Request, res: Response) => {
  const { profileId, successMessage, backgroundImage } =
    req.body as unknown as ProfileIdType;
  try {
    const updatedProfile = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        successMessage: successMessage,
        backgroundImage: backgroundImage,
      },
    });
    res.send({
      success: true,
      message: updatedProfile,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `server error ${error}`,
    });
  }
};
