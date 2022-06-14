import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Current from "./Current";


export default function Main() {
    const [city, setCity] = useState("Nashville")
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b0f572a4d0aaa69489800bacb6ae51be&units=imperial`)
            const res = await data.json()
        })()
    }, [city])


    const onSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target.search
        setCity(value)
        navigate("current/" + value)

    }
    const navigateTourrent = (e) => {
        e.preventDefault()
        const { value } = e.target.search
        setCity(value)
        navigate("week/" + value)

    }








    return <div className="main">
        <div className="form__cont">
            <form onSubmit={onSubmit}>
                <h2>Current</h2>

                <input type="search" name="search" defaultValue={city} placeholder="Enter Your City" />
                <button type="submit">Search</button>
            </form>
            <form onSubmit={navigateTourrent}>
                <h2>Week</h2>
                <input type="search" name="search" defaultValue={city} placeholder="Enter Your City" />
                <button type="submit">Search</button>
            </form>
        </div>
    </div>;

}
