import type { ISeed } from "../App";

export interface ITBody{
    seeds: ISeed[],
    isAscending: boolean
}

export interface ISeedTHeader{
    isAscending: boolean,
    setIsAscending: React.Dispatch<React.SetStateAction<boolean>>,
}