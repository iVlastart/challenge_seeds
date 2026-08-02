import type { ISeed } from "../interfaces/data";

//sets background colour based on the challenge
export const bgColour = (type:string)=>{
    let colour:string = 'white'; //this will set the colour based on the challenge
    const challenge:string = getFirstWord(type).toLowerCase(); //gets the name of the challenge
    switch(challenge){
        case 'pit': colour = 'bg-green-800/50'; break;
        case 'land': colour = 'bg-blue-800/50'; break;
        case 'murfy': colour = 'bg-gray-800/50'; break;
        case 'dojo': colour = 'bg-yellow-500/50'; break;
        case 'tower': colour = 'bg-orange-800/50'; break;
    }
    return colour;
};

//ascending/descending ordering based on the date
export const seeds_sort = (a:ISeed,b:ISeed, isAscending:boolean)=>{
    return isAscending
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
}

//makes the 1st word upper case
export const firstUpperCase = (s:string):string=>{
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}

//gets you the 1st word
export const getFirstWord = (s:string):string=>{
  return s.substring(0, s.indexOf(' '));
};


//puts a string into user's clipboard
export const copyText = async(s:string):Promise<boolean>=>{
    try{
        await navigator.clipboard.writeText(s);
        return true;
    }
    catch(err){
        return false;
    }
};

//inits the theme when page loads
export const initTheme = ()=>{
    const theme = localStorage.getItem('theme') ?? 'light';
    const html = document.documentElement;
    html.dataset.theme = theme;
}
//toggles between light mode and dark mode
export const toggleTheme = (setTheme:React.Dispatch<React.SetStateAction<string>>):void=>{
    const html = document.documentElement;
    const theme:string = (html.dataset.theme==='dark')?'light':'dark';
    localStorage.setItem('theme', theme);
    setTheme(theme);
    html.dataset.theme = theme;
}