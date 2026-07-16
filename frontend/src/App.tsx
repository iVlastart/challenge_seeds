import { useEffect, useState } from "react";
import { get_seeds, tHeader } from "./data/data";
import { ArrowDown } from "./icons/arrowDown";
import { ArrowUp } from "./icons/arrowUp";
import { SeedTBody } from "./components/SeedTBody";
import type { ISeed } from "./interfaces/data";
import { SeedTHeader } from "./components/SeedTHeader";

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
            <SeedTHeader isAscending={isAscending} setIsAscending={setIsAscending}/>
          </tr>
        </thead>
        <tbody>
          <SeedTBody seeds={seeds} isAscending={isAscending}/>
        </tbody>
      </table>
    </div>
  )
}