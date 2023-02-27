import verifyToken from "@server/lib/verifyToken"
import axios from "axios"
import { store } from "store";
import { login, logout } from "store/auth";
import { SiweMessage } from "siwe";


export const isAuthenticated =async (req)=>{
  const authHeader = req.headers['authorization'];
  const tok = authHeader && authHeader.split(' ')?.[1];
    const token =  tok ?? req.headers.get("authorization")  
    if (!token) {
      return {
        status:false,
        reason:"authentication failed, No token provided",
        data:null
      }
    } 

      try{
            
    const payload =   verifyToken(token)
 
 
    return   {
        status:true,
        reason:"",
        data:payload
      }
      }
      catch(e){
       
        return   {
          status:false,
          reason:"authentication failed, " + e.message,
          data:null
        }
      }

}

let currentAddress;
export async function getNonce() {
  // @ts-ignore
 currentAddress = window?.ethereum?.selectedAddress 
 
 // @ts-ignore
 window.ethereum.on('accountsChanged', function (accounts) {      
         currentAddress = accounts?.[0]
 });  
 
 const {data} = await axios.post(`/api/nonce/${currentAddress}`)
 
 return data
}


export async function getSession () {
  try{
   const res = await (await fetch("/api/auth/session")).json();  
  
   return res?.address ? res : null;
  }
  catch(e){
   console.log("Error Session", e)
  }
}

export async function signOut ()  {
  store.dispatch(logout())
  return fetch("/api/auth/logout").then(res => res.ok)
}

export function createMessage ({ nonce, address, chainId }: { nonce: string; address: string; chainId: any })  {
  return new SiweMessage({
    version: "1",
    domain: window.location.host,
    uri: window.location.origin,
    address,
    chainId,
    nonce,
    statement: "Sign in With Ethereum."
  }).prepareMessage()
}


export async function verifyMessage ({ message, signature }: { message: string; signature: string }) {   
  
  const verify = await axios.post("/api/auth/verify", {
    message, signature
  })

   store.dispatch(login(verify.data))
  return verify?.status === 200;
}