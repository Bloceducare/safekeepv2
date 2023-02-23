import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connectDB from "@server/config/db";
import userDb from "@server/models/user";
import { createRedisInstance } from "@server/config/redis";
import {generateNonce} from "siwe"

connectDB();

const router = createRouter<NextApiRequest, NextApiResponse>();
const secretKey = process.env.NEXTAUTH_SECRET as string

// create create
router.post(async (req, res) => {
  const redis = createRedisInstance()
  const key = req.body.address
  const cached = await redis.get(key);
  if(!cached){
      const nonce = generateNonce()
      await redis.set(key,nonce);
  }

  try {


    return res.status(200).json({
      accessToken: "token",    
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
});

interface IQuery {
  type?: string | string[] | undefined;
  page?: number | string;
}
router.get(async (req, res) => {
  const { type }: IQuery = req.query;

  try {
    const users = await userDb.find({
      ...(!!type && { type }),
    });

    return res.status(200).json({
      status: true,
      data: users,
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      error: "server error",
    });
  }
});

export default router.handler({
  // @ts-ignore
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
