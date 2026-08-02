import { useState } from "react";
import { toggleTheme } from "../data/utils";
import { Sun } from "../icons/sun";
import { Moon } from "../icons/moon";

export const Header = ()=>{
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme')??'light');
    return(
        <header className="relative w-full flex justify-center pt-1 items-center">
            <h1 className="font-bold text-2xl no-copy max-sm:text-xl">
              Rayman Legends Challenge Seeds Viewer
            </h1>
            <abbr className="absolute right-10 hover:scale-110 transition-all duration-200 cursor-pointer" 
                        onClick={()=>toggleTheme(setTheme)} title={theme==='dark'?'light mode':'dark mode'}>
                {
                    theme==='dark'
                        ? <Sun/>
                        : <Moon/>
                }
            </abbr>
        </header>
    )
};