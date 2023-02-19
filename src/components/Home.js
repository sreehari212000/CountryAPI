import Countries from "./Countries"
import Searchbar from "./Searchbar"

function Home(){
    return(
        <div className="home" style={{maxWidth: '1440px', margin:'0 auto'}}>
            <Searchbar/>
            <Countries />
        </div>
    )
}

export default Home