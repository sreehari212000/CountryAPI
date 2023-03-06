import '../css/countries.css'
import Country from './Country';
import { useContext } from 'react';
import { AppContext } from '../context';

function Countries(){
    const {countries, loading} = useContext(AppContext)
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    if(countries.status === 404){
        return (
            <h1 className='error'>Oops!, Could not find</h1>
        )
    }
    return (
        <div className="countries">
            <div className="countries-btm">
            {
               countries.map((c, index)=>{
                    const {name, flags, population, region, capital} = c
                    return (
                        <Country key={index} name={name.common || name} flag={flags.png} population={population}
                            region={region} capital={capital}
                        />
                
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Countries