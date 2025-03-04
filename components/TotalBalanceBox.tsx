'use client'
import { formatAmount } from '@/lib/utils';
import React from 'react'
import { Chart } from 'chart.js';
import CountUp from 'react-countup';
import { useState } from 'react'
import AnimatedCounter from './ui/AnimatedCounter';
import DoughnutChart from './DoughnutChart';
const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  

    // const balance = {currBalance:"$0"}
    const [balance, setBalance]= useState("$0");
    const handleBalance = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setBalance(e.target.value);
    };
    
  return (
    // <a href=""></a>
    <section className='total-balance flex ml-20 mt-13 w-[650px] h-[250px] border border-2 shadow-2xl border-blue-600 rounded-3xl'>
      <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts}/>
        {/* Here is the complete detailsof your BankBalance */}
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className="header-2">
        Bank Accounts
          <span className="text-blue-500 text-2xl">{totalBanks}</span> 
        </h2>
        <div className='flex flex-col gap-2'>
          <p className=' class total-balance-label'>
          Totakl Current Balance <span className='text-orange-500 text-2xl'> {totalCurrentBalance}</span>
          </p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter
            amount ={totalCurrentBalance}
            />
          <CountUp end ={100} />
            Total Balance Amount <span className='text-green-700 text-4xl'>{formatAmount( totalCurrentBalance)}</span>
            </div>
        </div>
      </div>
    </section>
    // <div className='balance-box'>
    //     <h1 className='balance heading'> Current Balance: {balance}</h1>
    //     <button className='border-2 bg-blue-500 h-{80px} w-{50px}'
    //     type='button'
    //     value={balance}
    //     // onClick={handleBalance}
    //     title='Check Balance'
    //     ></button>
    // </div>
  );
};

export default TotalBalanceBox;