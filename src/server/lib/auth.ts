import verifyToken from "./verifyToken"


export const isAuthenticated =(req)=>{
    // verifyToken

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')?.[1];
    if (!token) {
      return false
    } 
    return true

}