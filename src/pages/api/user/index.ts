import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connectDB from "@server/config/db";
import userDb from "@server/models/user";
import { ICreateUser } from "interface";


connectDB();

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async(req, res)=>{  
        
    try{
      // @ts-ignore
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
