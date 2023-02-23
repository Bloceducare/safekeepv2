export interface IChild {
    children: React.ReactNode
} 


export interface ICreateVault {
    name:string
    owner:string
    address:string

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