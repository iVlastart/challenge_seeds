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
      <div className="max-h-10/12 overflow-y-scroll">
        <table>
          <thead className="sticky top-0 bg-white">
            <tr>
              <SeedTHeader isAscending={isAscending} setIsAscending={setIsAscending}/>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            <SeedTBody seeds={seeds} isAscending={isAscending}/>
          </tbody>
        </table>
      </div>
      <footer className="bg-black">

      </footer>
    </div>
  )
}