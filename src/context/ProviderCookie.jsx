import { useState } from "react";
import CookieContext from "./CookieContext";

export default function ProviderCookie({ children }){
    const [contCookie, setCookie] = useState(5000)
    const [contPerSecond, setPerSecond] = useState(0.0);
    const [isClicked, setClicked] = useState(false);



    return(
        <CookieContext.Provider value={{contCookie, setCookie, contPerSecond, setPerSecond, isClicked, setClicked }}>
            {children}
        </CookieContext.Provider>
    )
}