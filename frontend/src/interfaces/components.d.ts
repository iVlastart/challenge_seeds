import type { ISeed } from "../App";

export interface ITBody{
    seeds: ISeed[];
    isAscending: boolean;
    dateC: string;
    diffC: string;
    challengeC: string;
}

export interface ISeedTHeader{
    isAscending: boolean;
    setIsAscending: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchTHeader{
    setDateC: React.Dispatch<React.SetStateAction<string>>;
    setDiffC: React.Dispatch<React.SetStateAction<string>>;
    setChallengeC: React.Dispatch<React.SetStateAction<string>>;
}