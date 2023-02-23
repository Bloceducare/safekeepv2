import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@server/config";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(handler)

type Data = {
  id?: string
  error?:any
  message?:string
  ok?:boolean
}

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try{

     req.session.destroy();
        
     res.send({ ok: true });

  }
  catch(e:any){
    res.status(500).json({
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

