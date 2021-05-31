import React from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { movementsMapper } from "../data/movementsMapper";

// const data = movementsMapper().map((movement) => {
//     [
//         {
//             name: movement.transaction, value: movement.accountPayment ? movement.amount: -movement.amount
//         },
//     ]
// }),

export const balance = () => {

    //console.log(data)


    return (
        <div>
            <AreaChart width={730} height={250} data={null}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            <div>
            {movementsMapper().map((movement) => (
                movement.accountPayment ? console.log(movement.amount): console.log(-movement.amount)
            ))}
            </div>
            
        </div>
    )
}
