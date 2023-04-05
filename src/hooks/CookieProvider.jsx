import { useContext} from "react"
import CookieContext from "../context/CookieContext";

export default function CookieProvider(){
    const context = useContext(CookieContext)

    if (context === undefined){
        throw new Error("Não esta no contexto")
    }

    return context;

}