import React, {useEffect, useState} from 'react'

export default function Ticker(){
  const [price, setPrice] = useState(0.0423)
  const [change, setChange] = useState(2.4)

  useEffect(()=>{
    const id = setInterval(()=>{
      // small random walk mock
      setPrice(p => Math.max(0.0001, +(p * (1 + (Math.random()-0.48)/100)).toFixed(6)))
      setChange(c => +( (Math.random()-0.5)*4 ).toFixed(2))
    }, 2500)
    return ()=>clearInterval(id)
  },[])

  return (
    <div className="rounded-lg soft-card p-4 purple-glow">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500">Ticker</div>
          <div className="text-2xl font-semibold text-bobanad">$BOBANAD</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-mono">${price}</div>
          <div className={`text-sm ${change>=0? 'text-green-500':'text-red-400'}`}>{change}%</div>
        </div>
      </div>
    </div>
  )
}
