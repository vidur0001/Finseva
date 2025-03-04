import BankAccounts from '@/components/BankAccounts';
import HeaderBox from 'components/HeaderBox'
import TotalBalanceBox from 'components/TotalBalanceBox';
import { Sidebar } from 'lucide-react';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Vidur",lastName: "Sharma"};
  return (
    <>
    <section className='home m-2'>
      <div className='home-content'>
        <header className='home-header'>
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext= "Access and manage your accont and transactions efficiently"
        />
        <TotalBalanceBox 
        accounts = {[]}
          totalBanks= {1}
          totalCurrentBalance = {125000}
        />
      
          {/* Welcome Vidur, We are here to make your financial life easy */}
        </header>
        <BankAccounts/>
      </div>
    </section>
   
    </>
  )
}

export default Home