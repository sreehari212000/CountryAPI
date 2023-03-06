import { useNavigate } from "react-router-dom"
import "../css/country.css"
function Country({name, flag, population, region, capital}){
    const navigate = useNavigate()
    return (
        <div className="country" onClick={()=>{navigate(`/${name}`)}}>
            <div className="flag-container">
                <img src={flag} alt="" className="flag"/>
            </div>
            <div className="details-container">
                <h4>{name}</h4>
                <p>Population: <span>{population.toLocaleString()}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
    )
}

export default Country