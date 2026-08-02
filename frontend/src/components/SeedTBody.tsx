import { bgColour, copyText, getFirstWord, seeds_sort } from "../data/utils"
import { Copy } from "../icons/copy";
import type { ITBody } from "../interfaces/components"

export const SeedTBody = ({seeds, isAscending, dateC, diffC, challengeC}:ITBody)=>{
    const filteredSeeds = seeds.filter(seed => {
      const isSpecial:boolean = seed.date.startsWith("(SPECIAL)");
      return (
        (dateC==='any'||dateC==='special'&&isSpecial||dateC=='date'&&!isSpecial)&&
        (diffC === "any" || seed.difficulty.toLowerCase() === diffC) &&
        (challengeC === "any" || getFirstWord(seed.type).toLowerCase() === challengeC)
      );
  });
    return(
        <>
        {[...new Set(filteredSeeds.map(seed => JSON.stringify(seed)))]
          .map(seed=> JSON.parse(seed))
          .sort((a, b) => seeds_sort(a,b,isAscending))
          .map((seed, key) => (
            <tr key={key} className={`${bgColour(seed.type)}`}>
              <td className="no-copy">{seed.date}</td>
              <td className="no-copy">{seed.difficulty} Challenge</td>
              <td className="no-copy">{seed.type}</td>
              <td className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between md:items-center">
                <p className="">
                  {seed.seed}
                </p>
                <abbr className="cursor-pointer" title="copy seed" 
                      onClick={()=>copyText(seed.seed).then((success:boolean)=>alert(success?'text copied to clipboard': 'failed to copy to clipboard'))}>
                  <Copy/>
                </abbr>
              </td>
            </tr>
          ))}
        </>
    )
}