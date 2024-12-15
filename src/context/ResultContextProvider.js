import React, { createContext, useContext, useState} from 'react';
const ResultContext = createContext();
const baseURL = "https://google-search72.p.rapidapi.com";


export const ResultContextProvider =({children}) => {
    const [results, setresults] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [searcTerm, setSearchTerm] = useState("Elon Musk");

    const getResults = async(type) => {
        setIsLoading(true);

        const response  = await fetch(`${baseURL}${type}`,{
            method: 'GET',
            headers: {
                'x-rapidapi-key': '08067d18aemsh8d6c78695436bffp148cedjsn3a874fabbb43',
                'x-rapidapi-host': 'google-search72.p.rapidapi.com'
            }})

        const data = await response.json();
        console.log(data);
        setresults(data);
        setIsLoading(false);
    }

    return(
        <ResultContext.Provider value={{getResults,results, searcTerm, setSearchTerm, isLoading}}>
        {children}

        </ResultContext.Provider>
    );

}

export const useResultContext = () => useContext(ResultContext);