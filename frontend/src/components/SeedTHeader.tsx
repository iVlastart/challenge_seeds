import { tHeader } from "../data/constants";
import { ArrowDown } from "../icons/arrowDown";
import { ArrowUp } from "../icons/arrowUp";
import type { ISeedTHeader } from "../interfaces/components";

export const SeedTHeader = ({isAscending, setIsAscending}:ISeedTHeader)=>{
    return(
        <>
            {tHeader.map((header,key)=>(
              <th key={key} className={`${header==='date'?'cursor-pointer min-w-81.25':''} no-copy`} onClick={header === 'date' ? () => setIsAscending(prev => !prev) : undefined}>
                <div className="flex items-center justify-center gap-1">
                  {String(header).charAt(0).toUpperCase() + String(header).slice(1)}
                  {header === 'date' && (
                    isAscending ? <ArrowDown/> : <ArrowUp/>
                  )}
                </div>
              </th>
            ))}
        </>
    );
}