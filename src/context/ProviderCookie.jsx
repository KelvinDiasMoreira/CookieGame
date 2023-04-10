import { useState, useReducer } from "react";
import CookieContext from "./CookieContext";

export default function ProviderCookie({ children }){
    const [contCookie, setCookie] = useState(0)
    const [cookiesPerSecond, setCookiesPerSecond] = useState(0.0);
    const [isClicked, setClicked] = useState(false);

    const reducer = (state, action) =>{
        switch(action.type){
            case "IncrementCursor" :
                return {...state, valueCursor: state.valueCursor + 20};
            case "IncrementMuscle" :
                return {...state, valueMuscle: state.valueMuscle + 60};
            case "IncrementRobot" :
                return {...state, valueRobot: state.valueRobot + 120};
            case "Cursor" :
                return {...state, Cursor: state.Cursor + 1};
            case "Robot" :
                return {...state, Robot: state.Robot + 1};
            case "Muscle" :
                return {...state, Muscle: state.Muscle + 1};
            default : 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        valueCursor: 15,
        valueMuscle: 1100,
        valueRobot: 100,
        Cursor: 0,
        Robot: 0,
        Muscle: 0,
    })


    return(
        <CookieContext.Provider value={{contCookie, setCookie, cookiesPerSecond, setCookiesPerSecond, isClicked, setClicked, state, dispatch }}>
            {children}
        </CookieContext.Provider>
    )
}