import {useState} from "react"
import Banner from './banner';
import Assets from './assets';
import Transaction from './transaction';

const Dashboard = () => {

  return (
    <div className="w-full flex gap-4 flex-col max-w-[1208px] mx-auto">
      <Banner/>
      <Assets />
      <Transaction />
    </div>
  )
}

export default Dashboard;