import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import {generateNonce} from "siwe"
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@server/config";

const router = createRouter<NextApiRequest, NextApiResponse>();
router.post(async (req, res) => { 
  const key = req.query.address as string
  let nonce =  generateNonce()   
  // @ts-ignore 
  req.session.address=key
  // @ts-ignore 
  req.session.nonce=nonce

  await req.session.save();
  try {
    return res.status(200).send(nonce);
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
});




 const rt = router.handler({
  // @ts-ignore
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});



export default withIronSessionApiRoute(rt, ironOptions);