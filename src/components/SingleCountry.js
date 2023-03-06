import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../css/singlecountry.css"

function SingleCountry(){
    const {countryName} = useParams()
    const [loading, setLoading] = useState(true)
    const [country, setCountry] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response)=>response.json())
        .then((data)=>{
            setCountry(data)
            setLoading(false)
        }).catch((e)=>{
            setLoading(false)
            alert(e)
            navigate('/')
        })
    }, [countryName])
    
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    // if(country == null)return;  

    const {name, flags, population, region, subregion, tld, capital, unMember, timezones, startOfWeek} = country[0]
    return(
        <div className="singlecountry">
            <button className="btn" onClick={()=>{navigate('/')}}>Back Home</button>
            <div className="singlecountry-details"> 
                <div className="single-flag"><img src={flags.png} alt="" /></div>
                <div className="detail-container">
                    <h2>{name.common}</h2>
                    <div className="subdetails">
                        <div className="det detail-left">
                            <p>Native Name: <span></span></p>
                            <p>Population: <span>{parseInt(population).toLocaleString()}</span></p>
                            <p>Region: <span>{region}</span></p>
                            <p>sub Region: <span>{subregion}</span></p>
                            <p>Capital: <span>{capital}</span></p>
                        </div>
                        <div className="det detail-right">
                            <p>Top Level Domain: <span>{tld.join(',')}</span></p>
                            <p>Time Zone: <span>{timezones[0]}</span></p>
                            <p>UN Memeber: <span>{unMember ? "Yes" : 'No'}</span></p>
                            <p>Start Of week: <span>{startOfWeek}</span></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SingleCountry