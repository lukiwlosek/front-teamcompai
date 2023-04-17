"use client"

import { useState } from "react";
import Search from "./Search"


export function MyTeam({champions}: any) {
  const rolesSet:any = {
    top: "",
    jungle: "",
    mid: "",
    adc: "",
    support: ""
  }
  const [set, setChamps] = useState(rolesSet);

  function setChamp(role: string, champion: string){
    rolesSet[role] = champion;
    console.log(rolesSet);
  }

  return (
    <div>
      <h1 className= "text-3xl font-bold">My Team</h1>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>TOP</label>
              <Search onData={(val:string)=>setChamp("top", val)} rolesSet={rolesSet} champions={champions}/>
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>JUNGLE</label>
              <Search onData={(val:string) => setChamp("jungle", val)} rolesSet={rolesSet} champions={champions}/>
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>MID</label>
              <Search onData={(val:string) => setChamp("mid", val)} rolesSet={rolesSet} champions={champions}/>
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>ADC</label>
              <Search onData={(val:string) => setChamp("adc", val)} rolesSet={rolesSet} champions={champions}/>
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>SUPPORT</label>
              <Search onData={(val:string) => setChamp("supp", val)} rolesSet={rolesSet} champions={champions}/>
            </div>
            {rolesSet.top}
    </div>
  )


}