import DarkModeIcon from '@mui/icons-material/DarkMode';
import "../css/navbar.css"
function Navbar(){
    return (
        <nav className='navbar'>
            <h3>where in the world?</h3>
            <div className='nav-right'>
                <DarkModeIcon className='moon'/>
                <p className='mode'>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Navbar