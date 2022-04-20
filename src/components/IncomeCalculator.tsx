import React, { useState, useEffect } from 'react'
import {Input, TextField} from "@mui/material";


function IncomeCalculator(){
    const [hoursShift, setHoursShift] = useState("0")
    const [shiftsWeek, setShiftsWeek] = useState("0")
    const [hourly, setHourly] = useState("15")
    const [otRate, setOtRate] = useState("22.5")
    const [weeklyExtra, setWeeklyExtra] = useState("0")
    const [taxRate, setTaxRate] = useState("30")
    const [weekly, setWeekly] = useState(0)
    const [monthly, setMonthly] = useState(0)
    const [yearly, setYearly] = useState(0)
    const [error, setError] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        switch (name) {
            case "hours":
                setHoursShift(value)
                break;
            case "shifts":
                setShiftsWeek(value)
                break;
            case "hourly":
                setHourly(value)
                break;
            case "ot":
                setOtRate(value)
                break;
            case "weeklyExtra":
                setWeeklyExtra(value)
                break;
            case "tax":
                setTaxRate(value)
                break;
        }
        
    }
    
    useEffect(() => {
        if(!isNaN(Number(hoursShift)) && !isNaN(Number(shiftsWeek)) && !isNaN(Number(hourly)) && !isNaN(Number(otRate)) && !isNaN(Number(weeklyExtra)) && !isNaN(Number(taxRate))){

            let normalHours: string = (+hoursShift > 8) ? "8" : hoursShift
            let otHours: string = +hoursShift > 8 ? (+hoursShift - 8).toString() : "0"

            let shiftIncome = (+normalHours * +hourly) + (+otHours * +otRate)
            let weeklyIncome = ((shiftIncome * +shiftsWeek) * ((100-+taxRate)/100)) + +weeklyExtra
            let yearlyIncome = weeklyIncome * 52
            let monthlyIncome = yearlyIncome / 12
            

            setYearly(+yearlyIncome.toFixed(2))
            setMonthly(+monthlyIncome.toFixed(2))
            setWeekly(+weeklyIncome.toFixed(2))

            setError(false)

        }else{
            setError(true)
        }
    }, [setYearly, setMonthly, setWeekly, otRate, shiftsWeek, hourly, hoursShift, weeklyExtra, taxRate]);
    
    return (
        <div>
            <form>
                <p>Hours Per Shift: </p><TextField name="hours" value={hoursShift} onChange={handleChange} />
                <p>Shifts Per Week: </p><TextField name="shifts" value={shiftsWeek} onChange={handleChange} />
                <p>Hourly Rate: </p><TextField name="hourly" value={hourly} onChange={handleChange} />
                <p>Overtime Rate: </p><TextField name="ot" value={otRate} onChange={handleChange} />
                <p>Extra Income Per Week: </p><TextField name="weeklyExtra" value={weeklyExtra} onChange={handleChange} />
                <p>Tax Percentage: </p><TextField name="tax" value={taxRate} onChange={handleChange} />

            </form>
            <p>Weekly Income: {weekly}</p>
            <p>Monthly Income: {monthly}</p>
            <p>Yearly Income: {yearly}</p>
            <p>{error? "one entry not number":""}</p>
        </div>
    )
}

export default IncomeCalculator