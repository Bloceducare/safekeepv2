import { SupportBodyContainer, SupportContainer, SupportHeader } from "@components/Dashboard/support/supportBox"
import DashboardLayout from "@components/Layout/dashboard"
import Button from "@components/primitives/button"
import InputFile from "@components/primitives/file"
import Input from "@components/primitives/input"
import TextArea from "@components/primitives/textarea"
import ReportBug from 'assets/images/support/report-bug.svg';


const ReportABug = ()=>{
    return (
       
        <SupportContainer>  
            <SupportHeader icon={ReportBug} title="Report a Bug" 
            description="Experienced an bug whilst using safekeep? lets help you address it..
                   " />
              <SupportBodyContainer>
               <div className="safe-darky mb-6">
               Where did you find this bug?
               <div className="mt-2">
                <Input name="name" placeholder="suggest a name" className="bg-[#F5F5F5] border-0 placeholder-safekeep-gray-300"  placeholderClassName="placeholder-safekeep-gray-300" />               
               </div>               
               </div>
                 <div className="safe-darky mb-6">
                 How did you find this bug?
               <div className="mt-2">
                <TextArea name="description" 
                className="bg-[#F5F5F5] border-0 placeholder-safekeep-gray-300"
                placeholder="Tell us about the feature, any existing softwares with the feature, and  how you feel its going to help you safekeep your assets...." />                
               </div>               
               </div> 
                    <div className="safe-darky mb-6">
                   
                    Please share a screenshot of the bug if any.
               <div className="mt-2">
                <InputFile name="attachment"  />
               </div>               
               </div>  

               <div className="flex gap-2 "> 
                <Button type="outline" className="w-2/3" >
                    Cancel
                </Button>
                <Button className="w-full">Send</Button>
                </div>  
                </SupportBodyContainer> 
                 
         </SupportContainer> 

      
    )
}



ReportABug.PageLayout = DashboardLayout
export default ReportABug