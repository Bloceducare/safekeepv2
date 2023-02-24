import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@server/config";
import { SiweMessage } from "siwe";
import { SignJWT  as sign} from "jose";
import {randomUUID} from "crypto"


declare module "iron-session" { 
  interface IronSessionData { 
    address?: string; 
    nonce?: string; 
  }   
} 

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(handler)

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secretKey = process.env.NEXTAUTH_SECRET as string

  try{

  
    const { message, signature } = req.body;
   
      const siwe = new SiweMessage(message)
      const result = await siwe.verify({
        signature: signature || "",
        domain: req.rawHeaders?.[1],
          // @ts-ignore
        nonce: req.session.nonce,
      })
  
      if (result.success) { 
        const current = Math.round((new Date().getTime()/1000))
        // @ts-ignore
        const token = await new sign(req.session)
        .setProtectedHeader({ alg: 'HS256' })
        .setJti(randomUUID())
        .setIssuedAt(current)
        .setExpirationTime('2h')
        .sign(new TextEncoder().encode(secretKey))         
        res.status(200).json({...req.session, accessToken:token })
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

