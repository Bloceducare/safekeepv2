export interface IChild {
    children: React.ReactNode
} 

export interface IToken   {
    address:string
    iat:number
    exp:number
    nonce:string
  }
export interface ICreateVault {
    vaultName:string
    owner?:string
    vaultAddress:string
    backupName:string
    backupAddress:string


}


export interface ICreateUser {
    address:string
    
}
export interface ISlide {
    id?:number
    title: string;
    description: string;
    image: string;
  }