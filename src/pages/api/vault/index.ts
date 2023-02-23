import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connectDB  from "@server/config/db";
import vaultDb from "@server/models/vault";
import { ICreateVault } from "interface";

connectDB();

const router = createRouter<NextApiRequest, NextApiResponse>();

// create vault 
router.post(async (req, res) => {
  const {
   name,
   owner,
   address,  
  } = req.body;

  try {
    const creatingVault = await vaultDb.findOne({ address });
    if (creatingVault) {
      return res
        .status(423)
        .send({ status: false, message: "This vault already exists" });
    }

    const data:ICreateVault = {    
      owner:owner.toLowerCase(),
      address:address.toLowerCase(),
      name:name.toLowerCase(),
    };

   const created = new vaultDb({
    ...data
   })
    await created.save()   
   
    return res.status(200).json({
      status: true,     
      message: `vault created successfully`,
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
    const users = await vaultDb.find({
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
