import data from "../data"
import { Link } from "react-router-dom"
import './styles.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
        <h1>Most Active Stocks</h1>
            <div className="dashboard-title">
                <p>Company Name</p>
                <p>Price</p>
                <p>Change</p>
            </div>
                
            {data.map((stock, i) => {
            const {name, symbol, lastPrice, change} = stock
                return (
                    <Link key={i} to={`/stocks/${symbol}`}>
                        <div className='dashboard-name'>{name} ({stock.symbol})</div>
                        <div className='dashboard-lastprice'>{lastPrice}</div>
                        <div className='dashboard-change'>{change}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Dashboard