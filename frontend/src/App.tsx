import { useState } from "react";
import { seedsArr } from "./data/seeds";
import { SeedTBody } from "./components/SeedTBody";
import type { ISeed } from "./interfaces/data";
import { SeedTHeader } from "./components/SeedTHeader";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchTHeader } from "./components/searchTHeader";

export default function App(){
  const [isAscending, setIsAscending] = useState<boolean>(false);
  const seeds:ISeed[] = seedsArr;
  const [dateC, setDateC] = useState<string>('any');
  const [diffC, setDiffC] = useState<string>('any');
  const [challengeC, setChallengeC] = useState<string>('any');

  return(
    <div className="container">
      <Header/>
      <div className="flex-1 overflow-y-auto">
        <table>
          <thead className="sticky top-0 bg-base-100">
            <tr>
              <SearchTHeader setDateC={setDateC} setDiffC={setDiffC} setChallengeC={setChallengeC} />
            </tr>
            <tr>
              <SeedTHeader isAscending={isAscending} setIsAscending={setIsAscending}/>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            <SeedTBody seeds={seeds} isAscending={isAscending} dateC={dateC} diffC={diffC} challengeC={challengeC} />
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  )
}