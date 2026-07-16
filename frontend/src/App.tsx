import { useEffect, useState } from "react";
import { get_seeds } from "./data/data";
import { SeedTBody } from "./components/SeedTBody";
import type { ISeed } from "./interfaces/data";
import { SeedTHeader } from "./components/SeedTHeader";
import { Header } from "./components/Header";

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
      <Header/>
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