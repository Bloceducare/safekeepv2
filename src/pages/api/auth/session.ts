import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@server/config";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(handler)



 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try{
        
      return  res.status(200).json(req.session)

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

