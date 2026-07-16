import axios from "axios";
import type { ISeed } from "../interfaces/data";

export const get_seeds = async()=>{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/seeds`);
  return res.data;
}

export const tHeader:Array<string> = ['date', 'difficulty', 'type', 'seed']; //table headers

export const bgColour = (type:string)=>{
    let colour:string = 'white'; //this will set the colour based on the challenge
    const challenge:string = type.substring(0, type.indexOf(' ')).toLowerCase(); //gets the name of the challenge
    switch(challenge){
        case 'pit': colour = 'bg-green-800/50'; break;
        case 'land': colour = 'bg-blue-800/50'; break;
        case 'murfy': colour = 'bg-gray-800/50'; break;
        case 'dojo': colour = 'bg-yellow-500/50'; break;
        case 'tower': colour = 'bg-orange-800/50'; break;
    }
    return colour;
};

export const seeds_sort = (a:ISeed,b:ISeed, isAscending:boolean)=>{
    return isAscending
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
}