import { useState } from "react";
import { seedsArr } from "./data/seeds";
import { SeedTBody } from "./components/SeedTBody";
import type { ISeed } from "./interfaces/data";
import { SeedTHeader } from "./components/SeedTHeader";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App(){
  const [isAscending, setIsAscending] = useState<boolean>(false);
  const seeds:ISeed[] = seedsArr;

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
      <Footer/>
    </div>
  )
}