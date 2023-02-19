import SearchIcon from '@mui/icons-material/Search';
import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context';
import "../css/searchbar.css"
function Searchbar(){
    const searchVal = useRef('')
    const { setSearchTerm} = useContext(AppContext)  
    function searchCountry(){
        setSearchTerm(searchVal.current.value)
    }
    useEffect(()=>{
        searchVal.current.focus()
    }, [])
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <SearchIcon className='search'/>
            <input type="text" placeholder='Search for a country...' ref={searchVal} onChange={searchCountry}/>
        </form>
    )
}

export default Searchbar