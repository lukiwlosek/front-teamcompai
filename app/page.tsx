import Search from "../components/Search";

export default async function HomePage() {
  const data = await getData()
  const champions = Object.keys(data.data).map(champ => champ)
  const rolesSet = {
    top: "",
    jungle: "",
    mid: "",
    adc: "",
    support: ""
  }

    return (
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-rows-5 gap-4">
            <h1 className= "text-3xl font-bold">Blue Team</h1>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>TOP</label>
              <Search champions={champions}/>
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
              <label>JUNGLE</label>
              <Search champions={champions}/>
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
               <input className="enabled:hover:border-gray-400 disabled:opacity-75 ..." />
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">
 
            </div>
            <div className="box-border h-16 w-64 p-1 border-4">

            </div>
          </div>
          <div><h1 className="text-3xl font-bold">Overview</h1></div>
          <div><h1 className="text-3xl font-bold">Red Team</h1></div>
        </div>
      </div>
    
  );
}

// get champion list
async function getData() {
  const res = await fetch('http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

