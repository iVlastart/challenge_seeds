import { useEffect, useState } from "react";
import { bgColour, get_seeds, tHeader } from "./data/data";

interface ISeed{
  date: string;
  difficulty: string;
  type: string;
  seed: string;
};

export default function App(){
  const [seeds, setSeeds] = useState<ISeed[]>([]);

  useEffect(()=>{
    //loads all seeds into seeds variable
    const load_seeds = async()=>{
      const data = await get_seeds();
      setSeeds(data);
    }

    load_seeds();
  })
  return(
    <div className="container">
      <header className="w-full flex justify-center pt-1">
        <h1 className="font-bold text-2xl">
          Rayman Legends Challenge Seeds Viewer
        </h1>
      </header>
      <table>
        <thead>
          <tr>
            {tHeader.map((header,key)=>(
              <th key={key}>
                {String(header).charAt(0).toUpperCase() + String(header).slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {seeds.map((seed, key) => (
            <tr key={key} className={bgColour(seed.type)}>
              <td>{seed.date}</td>
              <td>{seed.difficulty}</td>
              <td>{seed.type}</td>
              <td>{seed.seed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}