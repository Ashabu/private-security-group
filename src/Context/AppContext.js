import React, { createContext, useState } from "react";

const state = {
    lang: 'ka',
    AppLangs: {},
    setLang: ()=> {},
    setAppLangs: () => {}
};


export const AppContext = createContext(state);

const AppProvider = ({ children }) => {
    const [activeLang, setActiveLang] = useState(state.lang);
    const [Langs, setLangs] = useState(state.AppLangs);
    
   
    const setLang = (value) => {
        setActiveLang(value);
    };
    const setAppLangs = (data) => {
        setLangs({...data});
        
    }
    console.log("Context ==>", Langs)

    return (
        <AppContext.Provider value={{ activeLang, setLang, Langs, setAppLangs }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;