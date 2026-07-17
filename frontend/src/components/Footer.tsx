import { GitHub } from "../icons/GitHub"

export const Footer = ()=>{
    return(
        <footer className="bg-white h-20 text-black flex flex-row  justify-start items-center px-5">
          <a href="https://github.com/iVlastart/challenge_seeds" target="_blank" className="flex gap-x-2 items-center">
            <GitHub/> Repo
          </a>
        </footer>
    )
}