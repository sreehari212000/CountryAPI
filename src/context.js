import {createContext, useEffect, useState} from 'react'
import localdata from "./data.json"
const AppContext = createContext()


const AppProvider = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')    
    const [countries, setCountries] = useState([])

    const fetchFromAPI = async ()=>{
        setLoading(true)
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
            const data = await response.json()
            if(data.message === 'Page Not Found'){
                setCountries(localdata)
                setLoading(false)

            }
            else{
            setLoading(false)
            setCountries(data)
            }
            
        } catch (error) {
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        fetchFromAPI()
    }, [searchTerm])
    return (
        <AppContext.Provider value={{
            loading, setSearchTerm, countries
            }}>
            {children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider}