
import prisma from "../../prismaClient";
import { Request, Response } from "express";

export const searchDonations = async (req: Request, res: Response) => {
  const { amountFilter, dateRange } = req.query;

  const now = new Date();
  let dateFilter = {};

  
  if (dateRange === "last30") {
    dateFilter = { gte: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) };
  } else if (dateRange === "last90") {
    dateFilter = { gte: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000) };
  }


  let amountCondition = {};

  if (amountFilter === "1" || amountFilter === "3" || amountFilter === "5" || amountFilter === "10") {
    amountCondition = { amount: Number(amountFilter) };
  } else if (amountFilter === "other") {
    amountCondition = { amount: { notIn: [1, 3, 5, 10] } };
  }

  try {
    const donations = await prisma.donations.findMany({
      where: {
        ...amountCondition,
        ...(Object.keys(dateFilter).length > 0 && {
          createdAt: dateFilter,
        }),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).send({
      error: false,
      donations,
    });
  } catch (err) {
    console.error("Donation search error:", err);
    res.status(500).send({
      error: true,
      message: "An error occurred during donation search.",
    });
  } finally {
    await prisma.$disconnect();
  }
};
