import type { ChangeEvent } from "react"
import { challengeCategory, dateCategory, diffCategory } from "../data/constants"
import { firstUpperCase } from "../data/utils"
import type { ISearchTHeader } from "../interfaces/components"

export const SearchTHeader = ({setDateC, setDiffC, setChallengeC}:ISearchTHeader)=>{
    
    return(
        <>
            <th>
              <select name="dateCategory" className="no-copy" id="dateCategory" onChange={(e:ChangeEvent<HTMLSelectElement>) => setDateC(e.target.value)}>
                {dateCategory.map((dc, key) => (
                  <option value={dc} key={key}>
                    {firstUpperCase(dc)}
                  </option>
                ))}
              </select>
            </th>
            <th>
              <select name="diffCategory" className="no-copy" id="diffCategory" onChange={(e:ChangeEvent<HTMLSelectElement>) => setDiffC(e.target.value)}>
                {diffCategory.map((dc, key) => (
                  <option value={dc} key={key}>
                    {firstUpperCase(dc)}
                  </option>
                ))}
              </select>
            </th>
            <th>
              <select name="challengeCategory" className="no-copy" id="challengeCategory" onChange={(e:ChangeEvent<HTMLSelectElement>) => setChallengeC(e.target.value)}>
                {challengeCategory.map((cc, key) => (
                  <option value={cc} key={key}>
                    {firstUpperCase(cc)}
                  </option>
                ))}
              </select>
            </th>
            <th className="w-max h-max">

            </th>
        </>
    )
}