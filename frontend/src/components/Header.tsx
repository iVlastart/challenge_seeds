import { Sun } from "../icons/sun";

export const Header = ()=>{
    return(
        <header className="relative w-full flex justify-center pt-1 items-center">
            <h1 className="font-bold text-2xl no-copy">
              Rayman Legends Challenge Seeds Viewer
            </h1>
            <div className="absolute right-10 hidden">
                <Sun/>
            </div>
        </header>
    )
};