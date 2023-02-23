import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@server/config";
import { SiweMessage } from "siwe";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(handler)

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try{
  
    const { message, signature } = req.body;
      const siwe = new SiweMessage(message)
      const result = await siwe.verify({
        signature: signature || "",
        domain: "localhost:3000",
        nonce: req.session.nonce,
      })
      
      if (result.success) {       
        res.status(200).json(req.session)
      }
      return null

  }
  catch(e:any){
    console.log(e, "server error")
   return res.status(500).json({
      error:e,
      message:"Server Error"
    })
  }
}



const rt = router.handler({
    // @ts-ignore
    onError: (err, req, res, next) => {
      console.error(err.stack, "Error broke", err);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  });
  
  
export default withIronSessionApiRoute(rt, ironOptions);

