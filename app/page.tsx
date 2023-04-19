import { MyTeam } from "../components/MyTeam";
import {Configuration, OpenAIApi} from "openai";

export default async function HomePage() {
  const data = await getData()
  const champions = Object.keys(data.data).map(champ => champ)

    return (
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-rows-5 gap-4">
            <MyTeam champions={champions} />
          </div>
          <div><h1 className="text-3xl font-bold">Overview</h1>
          <div>
          What is the best way to win this game?
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            query
          </button>
          </div>
          </div>
          <div><h1 className="text-3xl font-bold">Enemy Team</h1></div>
        </div>
      </div>
    
  );
}

async function queryChatGPT() {
  console.log("OPEN_API_KEY >>", process.env.OPENAI_API_KEY)
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });
  console.log(completion)
  return completion
}

// get champion list
async function getData() {
  const res = await fetch('http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

