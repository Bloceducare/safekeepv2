import { SiweMessage } from "siwe";
import axios from "axios"


let currentAddress;
export const siweConfig = {

  getNonce: async () => {
     // @ts-ignore
    currentAddress = window?.ethereum?.selectedAddress 
    
    // @ts-ignore
    window.ethereum.on('accountsChanged', function (accounts) {      
            currentAddress = accounts?.[0]
    });
   
    
    const {data} = await axios.post(`/api/nonce/${currentAddress}`)
    
    return data
  },
  createMessage: ({ nonce, address, chainId }: { nonce: string; address: string; chainId: any }) => {
    return new SiweMessage({
      version: "1",
      domain: window.location.host,
      uri: window.location.origin,
      address,
      chainId,
      nonce,
      statement: "Sign in With Ethereum."
    }).prepareMessage()
  },
  verifyMessage: async ({ message, signature }: { message: string; signature: string }) => {
   
    const verify = await axios.post("/api/auth/verify", {
      message, signature
    })
    return verify?.status === 200;
  },

  getSession: async () => {
     try{
      const res = await (await fetch("/api/auth/session")).json();  
     
      return res?.address ? res : null;
     }
     catch(e){
      console.log("Error Session", e)
     }
  },
  signOut: async () => fetch("/api/auth/logout").then(res => res.ok)
};
