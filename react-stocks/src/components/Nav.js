import { Link } from "react-router-dom"
import './styles.css'

const Nav = () => {
    return (
        <div className="nav">
            {/* tell link where to go */}
            <Link to='/'>
                <div>iStocks</div>
            </Link>
            <Link to='/stocks'>
                <div>Stocks</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
        </div>
    )
} 
export default Nav
