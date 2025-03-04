import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} :{amount: number}) => {
  return (
    <CountUp className='w-full'
    duration={1}
    decimals={2}
    decimal=','
     prefix='IND'
      end = {amount}/>
  )
}

export default AnimatedCounter