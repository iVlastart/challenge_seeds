import { useEffect, useState } from "react";
import { bgColour, get_seeds, seeds_sort, tHeader } from "./data/data";
import { ArrowDown } from "./icons/arrowDown";
import { ArrowUp } from "./icons/arrowUp";

export interface ISeed{
  date: string;
  difficulty: string;
  type: string;
  seed: string;
};

export default function App(){
  const [seeds, setSeeds] = useState<ISeed[]>([]);
  const [isAscending, setIsAscending] = useState<boolean>(false);

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
        <h1 className="font-bold text-2xl no-copy">
          Rayman Legends Challenge Seeds Viewer
        </h1>
      </header>
      <table>
        <thead>
          <tr>
            {tHeader.map((header,key)=>(
              <th key={key} className={`${header==='date'?'cursor-pointer':''} no-copy`} onClick={header === 'date' ? () => setIsAscending(prev => !prev) : undefined}>
                <div className="flex items-center justify-center gap-1">
                  {String(header).charAt(0).toUpperCase() + String(header).slice(1)}
                  {header === 'date' && (
                    isAscending ? <ArrowUp/> : <ArrowDown/>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...seeds]
          .sort((a, b) => seeds_sort(a,b,isAscending))
          .map((seed, key) => (
            <tr key={key} className={bgColour(seed.type)}>
              <td className="no-copy">{seed.date}</td>
              <td className="no-copy">{seed.difficulty}</td>
              <td className="no-copy">{seed.type}</td>
              <td>{seed.seed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}