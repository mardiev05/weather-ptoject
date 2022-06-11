import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Current from "./Current";


export default function Main() {
    const [data, setData] = useState({})
    const [city, setCity] = useState("Nashville")
    const [isTrue, setIsTrue] = useState(false)
    const [fahrenheit, setFahrenheit] = useState("℉")
    const [celsius, setCelsius] = useState("imperial")
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b0f572a4d0aaa69489800bacb6ae51be&units=${celsius}`)
            const res = await data.json()
            setData(res)
        })()
    }, [city, celsius])


    const onSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target.search
        setCity(value)
        navigate("current/" + value)

    }


    const changeCelsius = () => {
        if (isTrue) {
            setCelsius("metric")
            setFahrenheit("°C")
        } else {
            setCelsius("imperial")
            setFahrenheit("℉")
        }
        setIsTrue(!isTrue)

    }



    return <div className="main">
        <div className="form__cont">
            <form onSubmit={onSubmit}>
                <input type="search" name="search" defaultValue={city} placeholder="Enter Your City" />
                <button type="submit">Search</button>
            </form>
        </div>
    </div>;

}
