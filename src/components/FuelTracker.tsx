import React, {useState} from 'react'
import { useLocalStorage } from "@mantine/hooks"
import { Input } from "@mui/material"

type fuelStop = {
    quantity: number,
    mileage: number,
    cost: number,
    topOff: boolean,
    missingPrev: boolean,
    date: number
}
function FuelTracker(){
    
    const [quantity, setQuantity] = useState("")
    const [mileage, setMileage] = useState("")
    const [cost, setCost] = useState("")
    const [topOff, setTopOff] = useState(true)
    const [missingPrev, setMissingPrev] = useState(false)
    
    const [data, setData] = useLocalStorage<Array<fuelStop>>({
        key: "fuelStops",
        defaultValue: []
    })

    console.log(data)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!isNaN(+quantity) && !isNaN(+mileage) && !isNaN(+cost)) {
            let stop: fuelStop = {
                quantity: +quantity,
                mileage: +mileage,
                cost: +cost,
                topOff: topOff,
                missingPrev: missingPrev,
                date: Date.now()
            }
            setData((current) => {
                current.push(stop)
                return current
            })
        }
    }
     const list = data.map((stop) =>{
        return <p>Fuel Quantity: {stop.quantity} Gallon - Mileage: {stop.mileage} - Cost: ${stop.cost}</p>
})
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <p>Input Quantity in Gallons: </p><Input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <p>Input Current Mileage: </p><Input type="text" value={mileage} onChange={(e) => setMileage(e.target.value)} />
                <p>Input Cost/Gallon: </p><Input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
                <br /><br />Top Off?<input type="checkbox" checked={topOff} onChange={(e) => setTopOff((current) => !current)}/>
                <br /><br />Missing Previous Fillup?<input type="checkbox" checked={missingPrev} onChange={(e) => setMissingPrev((current) => !current)}/>
                <br />
                <Input type="submit" value="Submit" />
            </form>
            {list}
        </div>
    )
}

export default FuelTracker