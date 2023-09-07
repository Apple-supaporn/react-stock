import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import './styles.css'
import stocks from '../data'


const Stock = () => {
    // const apiKey = process.env.REACT_APP_API_KEY
    const params = useParams()
    const symbol = params.symbol
    // const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`

    // const [stock, setStock] = useState(null)

    const stock = stocks.find(stock => stock.symbol === symbol)
    
    // useEffect(() => {
    // const getStock = async () => {
    //     const response = await fetch()
    //     const data = await response.json()
    //     setStock(data)
    // }
    // //use api function in useEffect when component mounts
    // // const [update, setUpdate] = useState(0)
    // // useEffect(() => {
    //     getStock()
    //     // setTimeout(()=>{
    //     //     setUpdate(update + 1)
    //     // }, 20000)
    //     // }, [update])
    // },[])

    const loading = () => {
        return <div className='loader'></div>
    }
    const loaded = () => {
        
        return (
            <div className='stock'>
                <h1>Stock</h1>
                <div className='stock-details'>
                    <p>Company Name</p>
                    <p>Price</p>
                    <p>Change</p>
                    <p>High</p>
                    <p>Low</p>
                    <p>Open</p>
                </div>
                    
                <div className='stock-company'>
                    <p>{stock.name} ({stock.symbol})</p>
                    <p>{stock.lastPrice}</p>
                    <p>{stock.change}</p>
                    <p>{stock.high}</p>
                    <p>{stock.low}</p>
                    <p>{stock.open}</p>
                </div>
            </div>
        )
    }
    return stock ? loaded() : loading()
}

export default Stock