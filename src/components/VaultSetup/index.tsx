import {useState} from "react"
import MetaMask from "assets/images/ConnectWallet/metamask.svg";
import Cancel from "assets/images/Faq/close-circle.svg"
import Form from "./form";

const VaultSetUp = () => {
    const [createVault, setCreateVault] = useState(false);
  return (
       <>
   {
    createVault ? (
        <><Form setCreateVault={setCreateVault}/></>
    ) : (
         <div className="flex flex-col">
         <div className="p-8 max-w-[835px] flex flex-col items-center w-full bg-safekeep-transparent rounded-[18px]">
            <div className="flex flex-col w-full lg:flex-row  gap-6 lg:gap-3 justify-between">
                <p className="leading-10 text-2xl order-2 lg:order-1 font-paralucentMedium text-[#011A91] tracking-tighter">Create Safevault 🚀</p>
                <div className="flex justify-between order-1 lg:order-2 w-full lg:w-auto">
                    <div className="flex h-[50px] w-[50px] bg-[#E6F1FF] rounded-lg lg:bg-transparent items-center justify-center lg:h-auto lg:w-auto">
                        <div className="flex justify-center items-center w-7 h-7 rounded-full bg-[#000]">
                            <MetaMask height="20px" width="20px" />
                        </div>
                        <div className="flex -ml-3 justify-center items-center w-7 h-7 rounded-full bg-white">
                            <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M113 58C113 88.3757 88.3757 113 58 113C27.6243 113 3 88.3757 3 58C3 27.6243 27.6243 3 58 3C88.3757 3 113 27.6243 113 58Z" fill="#FEFFFF"/>
                                <path d="M107.5 58C107.5 85.3381 85.3381 107.5 58 107.5C30.6619 107.5 8.5 85.3381 8.5 58C8.5 30.6619 30.6619 8.5 58 8.5C85.3381 8.5 107.5 30.6619 107.5 58ZM58 114.5C89.2041 114.5 114.5 89.2041 114.5 58C114.5 26.7959 89.2041 1.5 58 1.5C26.7959 1.5 1.5 26.7959 1.5 58C1.5 89.2041 26.7959 114.5 58 114.5Z" fill="url(#paint0_linear_2074_39151)" stroke="white" stroke-width="3"/>
                                <path d="M57.0547 91.4867L56.142 90.9247C50.2622 87.2562 45.2961 82.1886 41.6486 76.1351C38.0012 70.0817 35.7757 63.2138 35.1537 56.0916V56.0357C35.0334 54.5941 34.6924 44.9599 34.6523 43.8604L34.6055 42.4955L56.9611 34.0796L80.0656 43.047L79.0627 54.6639C78.6542 62.0487 76.5171 69.2161 72.8387 75.538C69.1603 81.8598 64.0528 87.1431 57.9641 90.9247L57.0547 91.4867ZM38.7209 55.7669C39.2773 62.1097 41.2194 68.2348 44.3977 73.6713C47.576 79.1078 51.906 83.711 57.0547 87.1269C62.3971 83.5944 66.8561 78.7832 70.062 73.0921C73.2678 67.4009 75.1282 60.9939 75.4888 54.4021V54.3497L76.2444 45.5498L56.9344 38.0554L38.2896 45.0891C38.4167 48.6216 38.6507 54.7861 38.7343 55.7146L38.7209 55.7669Z" fill="#001268"/>
                                <path d="M84.2478 67.9739L83.7363 67.6737L71.7243 60.5179C72.5493 57.4893 72.4852 54.2719 71.5405 51.2817L83.4253 43.7279L83.9101 43.4138C84.589 42.8879 85.0611 42.1217 85.2381 41.2586C85.4152 40.3956 85.285 39.4947 84.872 38.7246C84.4589 37.9545 83.7913 37.3679 82.994 37.0745C82.1968 36.7811 81.3244 36.8011 80.5402 37.1306L79.6108 37.7206L67.9098 45.1626C65.9494 43.1298 63.4862 41.7061 60.7956 41.0506V26.0688C60.8268 25.139 60.5153 24.2321 59.9252 23.535C59.3351 22.8379 58.5114 22.4036 57.6238 22.3217C56.7362 22.2398 55.8524 22.5165 55.1543 23.0948C54.4563 23.6731 53.9973 24.5089 53.8719 25.43V41.0751C51.0696 41.7861 48.5251 43.3309 46.5471 45.5221L34.2978 38.2197L33.8097 37.93C33.0362 37.55 32.1559 37.4805 31.3365 37.7347C30.5172 37.9889 29.816 38.5491 29.3669 39.3085C28.9177 40.0678 28.7519 40.9732 28.9011 41.852C29.0502 42.7308 29.5039 43.5216 30.1757 44.0735L31.0817 44.6181L43.117 51.7739C42.2701 54.7464 42.2934 57.9154 43.1839 60.874L31.4059 68.3649L30.5033 68.9408C29.8707 69.5179 29.4594 70.3143 29.3452 71.1832C29.231 72.0521 29.4216 72.9348 29.8819 73.6685C30.3422 74.4021 31.041 74.9372 31.8496 75.175C32.6581 75.4128 33.5217 75.3372 34.2811 74.9622L34.7792 74.6411L46.6808 67.0733C48.6347 69.1752 51.1186 70.6565 53.8452 71.3459V86.7606C54.0014 87.6519 54.4709 88.4502 55.1617 88.9988C55.8525 89.5474 56.7147 89.8067 57.5791 89.7258C58.4435 89.645 59.2478 89.2298 59.8342 88.5617C60.4206 87.8937 60.7468 87.021 60.7488 86.1148V71.3703C63.6446 70.6643 66.2722 69.0707 68.2942 66.7941L80.0722 73.8103L81.0082 74.3653C81.8044 74.6846 82.6852 74.6876 83.4834 74.3736C84.2815 74.0595 84.9414 73.4504 85.3378 72.6619C85.7341 71.8734 85.8394 70.9603 85.6335 70.0961C85.4277 69.2319 84.925 68.4767 84.221 67.9739H84.2478ZM57.3889 66.5463C55.4109 66.5421 53.4785 65.9262 51.8355 64.7762C50.1926 63.6263 48.9128 61.9938 48.1577 60.085C47.4026 58.1762 47.206 56.0766 47.5929 54.0513C47.9798 52.0259 48.9326 50.1657 50.3313 48.7053C51.7299 47.245 53.5116 46.2501 55.4513 45.8462C57.3911 45.4422 59.402 45.6474 61.2301 46.4358C63.0583 47.2243 64.6217 48.5605 65.7231 50.276C66.8245 51.9914 67.4144 54.0091 67.4183 56.0743C67.4183 58.8517 66.3617 61.5152 64.4808 63.4791C62.5999 65.443 60.0489 66.5463 57.3889 66.5463Z" fill="url(#paint1_linear_2074_39151)"/>
                                <defs>
                                <linearGradient id="paint1_linear_2074_39151" x1="79.3701" y1="79.1405" x2="33.319" y2="35.0318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#001FF6"/>
                                <stop offset="1" stop-color="#00A9FF"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Cancel />
                    </div>
                </div>
            </div>
            <p className="pt-2 lg:pt-4 text-[#01A0FF] font-polySansTrial leading-4 text-[12px] lg:leading-8 lg:text-lg font-light">
                Your safevault is fast, safest, most secure crypto vault to explore web3 without the risks it posses!.
            </p>
            <div className="pt-6 lg:pt-16 flex flex-col lg:flex-row justify-between gap-4 w-full">
            <div className="w-full lg:max-w-[50%]">
                <div className="relative flex flex-col justify-between bg-safekeep-green-100 w-full h-[215px] lg:h-[336px] py-6 px-8 rounded-lg">
                    <div className="h-10 w-10 lg:h-[60px] lg:w-[60px] bg-[#FEFFFF] rounded-lg flex items-center justify-center">
                        <p>hi</p>
                    </div>
                    <div>
                        <p className="text-[#090909] font-paralucentMedium text-xl lg:text-2xl lg:leading-8">Already got a vault</p>
                        <p className="font-dmSans text-[10px] leading-3 lg:leading-5 lg:text-sm pt-1">Import your existing vault  using your safevualt address.</p>
                    </div>
                    <button className="block lg:hidden font-paralucentMedium rounded-lg text-sm leading-[14px] w-full py-2.5 border border-solid border-[#01A0FF] text-[#01A0FF]">
                        Import Existing Vault
                    </button>
                </div>
                <button className="hidden lg:block font-paralucentMedium rounded-lg mt-10 text-sm leading-[14px] w-full py-4 border border-solid border-[#01A0FF] text-[#01A0FF]">
                        Import Existing Vault
                </button>
            </div>
                <div className="w-full lg:max-w-[50%]">
                <div className="relative flex flex-col justify-between bg-safekeep-blue-100 w-full h-[215px] lg:h-[336px] py-6 px-8 rounded-lg">
                    <div className="h-10 w-10 lg:h-[60px] lg:w-[60px] bg-[#FEFFFF] rounded-lg flex items-center justify-center">
                        <p>hi</p>
                    </div>
                    <div>
                        <p className=" font-paralucentMedium text-xl lg:text-2xl lg:leading-8 text-safekeep-blue">Create a Safevault</p>
                        <p className="font-dmSans text-[10px] leading-3 lg:leading-5 lg:text-sm pt-1">We would walk you through creating your Vault and through Safeguarding your assets.</p>
                    </div>
                    <button onClick={(e)=>{setCreateVault(true)}} className="block lg:hidden font-paralucentMedium rounded-lg text-sm leading-[14px] w-full py-2.5 bg-[#01A0FF] text-safekeep-white">
                        Create New Vault
                    </button>
                </div>
                <button onClick={(e)=>{setCreateVault(true)}} className="hidden lg:block font-paralucentMedium rounded-lg mt-10 text-sm leading-[14px] w-full py-4 bg-[#01A0FF] text-safekeep-white">
                        Create New Vault
                </button>
            </div>
            </div>
         </div>
         <button className="mt-14 w-full lg:max-w-[428px] mx-auto font-paralucentMedium py-3 text-safekeep-white text-[11px] lg:text-sm leading-4 bg-[#55A0FE] lg:bg-safekeep-blue-700 rounded-lg">
                Your Vault is Built and Secured on Ethereum
         </button>
         </div>
    )
   }
   </>
  )
}

export default VaultSetUp;