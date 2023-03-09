import {useState} from "react"
import Banner from './banner';
import Assets from './assets';
import Transaction from './transaction';
import Transfer from "@components/Transfer";
import VaultProfile from "@components/VaultProfile";
import TransactionsProfile from "@components/Transaction";

const Dashboard = () => {
   const [section, setSection] = useState('dashboard');
   const [transferType, setTransferType] = useState('');

  return (
      <>
        {
          section === 'dashboard' && (
            <div className="w-full flex gap-4 flex-col max-w-[1208px] mx-auto">
                <Banner setTransferType={setTransferType} setSection={setSection} />
                <Assets setSection={setSection} />
                <Transaction setSection={setSection} />
            </div>
          )
        }
        {
          section === 'transfer' && (
            <div className="w-full">
              <Transfer transferType={transferType} setSection={setSection} />
            </div>
          )
        }
        {
          section === 'vaultProfile' && (
            <div className="w-full">
               <VaultProfile setSection={setSection}/>
            </div>
          )
        }
        {
          section === 'transactions' && (
            <div className="w-full">
               <TransactionsProfile setSection={setSection}/>
            </div>
          )
        }
      </>
  )
}

export default Dashboard;