import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "@images/Header/hamburger.svg";
import HeaderLogo from "@images/Header/safekeepLogo.svg";
import Link from "next/link";
import { headerNavs } from "@config/navs";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 ">
      <nav className="">       
       <div>
        <Hamburger className="cursor-pointer"  onClick={toggleMenu} />
       </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 , left:-20}}
              animate={{ opacity: 1, height: "auto" , left:0}}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden shadow-lg top-0 absolute  min-h-screen w-full bg-safekeep-white z-50" 
            >
                <div className="flex justify-between p-8">
                    <div>
                        
                    <Link href="/">
            <HeaderLogo className="w-40 h-9 lg:h-11 lg:w-44" />
          </Link>

                        
                        </div>
                    <div>
                    <svg
                    className="cursor-pointer"
                     onClick={toggleMenu} 
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="none" d="M0 0h24v24H0z"/>
  <path stroke="black" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
</svg>

                    </div>
                </div>
         
{
    headerNavs.map((nav)=>(  <div className="py-3 pl-8 flex justify-start" onClick={toggleMenu}>
         {
            nav.href ? <>  <Link  href={nav.href}    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >

            
            {nav.title}
            
             </Link></> :<>
             <span      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                   >
    
                   
                   {nav.title}
                   
                    </span>
             </>
         }
  
                    </div>  ))
}
                          
             
               
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>)
}
