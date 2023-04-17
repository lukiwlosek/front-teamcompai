import { MyTeam } from "../components/MyTeam";

export default async function HomePage() {
  const data = await getData()
  const champions = Object.keys(data.data).map(champ => champ)

    return (
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-rows-5 gap-4">
            <MyTeam champions={champions} />
          </div>
          <div><h1 className="text-3xl font-bold">Overview</h1></div>
          <div><h1 className="text-3xl font-bold">Enemy Team</h1></div>
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

