import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext()


const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("INR")
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {
        if(currency==="INR") setSymbol("₹")
        if(currency==="USD") setSymbol("$")
        else if(currency==="EUR") setSymbol("ē")
    }, [currency])

    return (
        <Crypto.Provider value={{currency,symbol,setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext

export const CryptoState = ()=>{
    return useContext(Crypto)
}