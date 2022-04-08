import React, { useState } from 'react'





function FuelConverter() {
    
    const [aud, setAud] = useState("")
    const [usd, setUsd] = useState("")
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
            switch (name) {
                case "AUD":
                    setAud(value)
                    if(!isNaN(Number(value)))
                        setUsd((+value * 0.75 * 3.785).toFixed(2).toString())
                    break;
                case "USD":
                    setUsd(value)
                    if(!isNaN(Number(value)))
                        setAud((+value * 1.34 / 3.785).toFixed(2).toString())
                    break;
            }
    }
    return(
        <div>
            <form>
                <p>AUD/Liter: </p><input type="text" name="AUD" value={aud} onChange={handleChange} />
                <p>USD/Gallon: </p><input type="text" name="USD" value={usd} onChange={handleChange} />
            </form>
        </div>
    )
}

export default FuelConverter