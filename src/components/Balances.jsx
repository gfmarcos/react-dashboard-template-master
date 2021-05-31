import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { movementsMapper } from "../data/movementsMapper";

// Colores Material UI

import { pink } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

export const Balances = ({ complete }) => {
  const colorPink = pink[500];
  const datas = movementsMapper().map((movement) => ({
    name: movement.transaction,
    value: movement.accountPayment ? movement.amount : -movement.amount,
    type: movement.accountType,
  }));

  const datas_1 = datas.filter((data) => data.type === "1");
  const datas_2 = datas.filter((data) => data.type === "2");
  return !complete ? (
    <div>
      {/**Balance general */}
      <Typography variant="h5" component="h1" >
        Balance general
      </Typography>
      <AreaChart
        width={400}
        height={180}
        data={datas}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colorPink} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colorPink} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" fontSize={'50%'}/>
        <YAxis tickSize={1} fontSize={'50%'}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={colorPink}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  ) : (
    <div>
      <Typography variant="h5" component="h1" >
        Balance general
      </Typography>
      <AreaChart
        width={730}
        height={250}
        data={datas}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colorPink} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colorPink} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis tickSize={1}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={colorPink}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
      <Typography variant="h5" component="h1" >
        Balance cuenta ahorro
      </Typography>
      <AreaChart
        width={730}
        height={250}
        data={datas_1}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colorPink} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colorPink} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={colorPink}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
      <Typography variant="h5" component="h1" >
        Balance tarjeta
      </Typography>
      <AreaChart
        width={730}
        height={250}
        data={datas_2}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colorPink} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colorPink} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={colorPink}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};
