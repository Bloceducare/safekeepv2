import verifyToken from "@server/lib/verifyToken"

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