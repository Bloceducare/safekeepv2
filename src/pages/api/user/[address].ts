import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connectDB from "@server/config/db";
import userDb from "@server/models/user";
import { ICreateUser } from "interface";


connectDB();

const router = createRouter<NextApiRequest, NextApiResponse>();

// create create
router.post(async (req, res) => {

  const address = req.query.address as string

  try {
    const creatingUser = await userDb.findOne({ address:address.toLowerCase() });
    if (creatingUser) {
      return res
        .status(200)
        .send({ status: true, message: "This user already exists" });
    }

    const data:ICreateUser = {
      // owner:owner.toLowerCase(),
      address: address.toLowerCase(),
      // name:name.toLowerCase(),
    };


    const created = new userDb({
      ...data
    })
    await created.save()

    return res.status(200).json({
      status: true,
      message: `user created successfully`,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
});

router.get(async(req, res)=>{
  
  console.log(req.session, "session")
    try{
      const users = await userDb.find({})
      return res.status(200).json(
     {
      data:users,
      status:true
     }
      )
    }
    catch(e){
      return res.status(500).json({
        error:e,
        status:false
      })
    }
})

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
