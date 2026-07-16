import { bgColour, seeds_sort } from "../data/data"
import type { ITBody } from "../interfaces/components"

export const SeedTBody = ({seeds, isAscending}:ITBody)=>{
    return(
        <>
        {[...new Set(seeds.map(seed => JSON.stringify(seed)))]
          .map(seed=> JSON.parse(seed))
          .sort((a, b) => seeds_sort(a,b,isAscending))
          .map((seed, key) => (
            <tr key={key} className={bgColour(seed.type)}>
              <td className="no-copy">{seed.date}</td>
              <td className="no-copy">{seed.difficulty} Challenge</td>
              <td className="no-copy">{seed.type}</td>
              <td>{seed.seed}</td>
            </tr>
          ))}
        </>
    )
}