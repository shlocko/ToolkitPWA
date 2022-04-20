import React, {useReducer, useState} from 'react'
import { useLocalStorage } from "@mantine/hooks"
import {Button, Checkbox, Input, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material"
import SelectInput from "@mui/material/Select/SelectInput";

type fuelStop = {
    quantity: number,
    mileage: number,
    cost: number,
    topOff: boolean,
    missingPrev: boolean,
    date: number
}
function FuelTracker(){
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [data, setData] = useLocalStorage<Map<string, Array<fuelStop>>>({
        key: "fuelStops",
        defaultValue: new Map<string, Array<fuelStop>>(),
        serialize(value: Map<string, Array<fuelStop>>): string {
            let arr = value.entries()
            let obj = Object.fromEntries(arr)
            return JSON.stringify(obj)
        },
        deserialize(value: string): Map<string, Array<fuelStop>> {
            let obj = JSON.parse(value)
            let map: Map<string, fuelStop[]>;
            if(typeof obj === "object") {
                map = new Map<string, Array<fuelStop>>(Object.entries(obj))
            }else{
                map = new Map<string, Array<fuelStop>>(Object.entries({}))
            }
            return map
        }
    })
    console.log(data)
    const vehicles = Array.from(data.keys())
    
    
    
    const [quantity, setQuantity] = useState("")
    const [mileage, setMileage] = useState("")
    const [cost, setCost] = useState("")
    const [topOff, setTopOff] = useState(true)
    const [missingPrev, setMissingPrev] = useState(false)
    const [vehicle, setVehicle] = useState(vehicles[0] || "new");
    const [newVehicle, setNewVehicle] = useState("")
    

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(quantity === "clear" || mileage === "clear" || cost === "clear") {
            localStorage.setItem("fuelStops", JSON.stringify({}))
            setCost("")
            setMileage("")
            setQuantity("")
            forceUpdate()
            return
        }
        if(!isNaN(+quantity) && !isNaN(+mileage) && !isNaN(+cost)) {
            
            let stop: fuelStop = {
                quantity: +quantity,
                mileage: +mileage,
                cost: +cost,
                topOff: topOff,
                missingPrev: missingPrev,
                date: Date.now()
            }
            let veh: string
            if(vehicle === "new"){
                veh = newVehicle
            }else{
                veh = vehicle
            }
            setData((current) => {
                let stops: Array<fuelStop>
                if(current.has(veh)){
                    stops = current.get(veh)!
                }else{
                    stops = []
                }

                stops.push(stop)
                current.set(veh, stops)
                console.log(current)
                setVehicle(veh)
                setTopOff(true)
                setMissingPrev(false)
                setCost("")
                setMileage("")
                setQuantity("")
                return current
            })
            forceUpdate()
            console.log(data)
        }
    }
    
    let vehicleOptions = vehicles.map((veh) => {
        return <MenuItem value={veh}>{veh}</MenuItem>
    })
    let list;
    if(vehicle!== "new"){
        list = data.get(vehicle)!.map((stop) =>
        <p>Gals: {stop.quantity} - Miles: {stop.mileage} - Cost: {stop.cost}</p>
        )
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p> Select Vehicle: </p><Select value={vehicle} onChange={(e: SelectChangeEvent) => {
                    setVehicle(e.target.value as string)
                }}>
                    {vehicleOptions}
                <MenuItem value="new">New Vehicle</MenuItem>
                </Select>
                {vehicle==="new" ? <TextField value={newVehicle} onChange={(e) => {setNewVehicle(e.target.value)}}/> : <br />}

                <p>Input Quantity in Gallons: </p><TextField value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <p>Input Current Mileage: </p><TextField value={mileage} onChange={(e) => setMileage(e.target.value)} />
                <p>Input Cost/Gallon: </p><TextField value={cost} onChange={(e) => setCost(e.target.value)} />
                <br /><br />Top Off?<Checkbox checked={topOff} onChange={(e) => setTopOff((current) => !current)}/>
                <br /><br />Missing Previous Fillup?<Checkbox checked={missingPrev} onChange={(e) => setMissingPrev((current) => !current)}/>
                <br />
                
                
                <br /><Button type="submit" variant="contained" size="large"> Submit </Button>
            </form>
            {list}
        </div>
    )
}

export default FuelTracker