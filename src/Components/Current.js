import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SunnyImg from "../images/sunny.png"



export default function Current() {
    let { citYY } = useParams()
    const [data, setData] = useState({})
    const [city, setCity] = useState(citYY)
    const [isTrue, setIsTrue] = useState(false)
    const [fahrenheit, setFahrenheit] = useState("℉")
    const [celsius, setCelsius] = useState("imperial")

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b0f572a4d0aaa69489800bacb6ae51be&units=${celsius}`)
            const res = await data.json()
            setData(res)
        })()
    }, [city, celsius])







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


    return (
        <div className="current">

            <div className="ball__row">
                <div className={isTrue ? "bal bal__true" : "ball bal__false"} onClick={changeCelsius}></div>
            </div>

            <div className="weather__row">

                <div className="weather__title">
                    <h2>{data?.city?.name + "," + data?.city?.country}</h2>
                    <p>{new Date(data?.list?.[0]?.dt_txt).toDateString()}</p>
                </div>

                <div className="weather__detailes">
                    <div className="detailes__temp">
                        <div className="temp__icon">
                            <img src={SunnyImg} alt="" />
                        </div>
                        <div className="temp__num">
                            <h1>{data?.list?.[0]?.main?.temp.toFixed()}{fahrenheit}</h1>
                            <p>{data?.list?.[0]?.weather?.[0]?.main}</p>
                        </div>
                    </div>

                    <div className="detailes__row">

                        <div className="detailes__card">
                            <p>{data?.list?.[0]?.main?.feels_like.toFixed()}</p>
                            <p>Feels Like</p>
                        </div>

                        <div className="detailes__card">
                            <p>{data?.list?.[0]?.main?.humidity}</p>
                            <p>Humidity</p>
                        </div>

                        <div className="detailes__card">
                            <p>{data?.list?.[0]?.wind?.speed.toFixed()} MPH</p>
                            <p>Wind Speed</p>
                        </div>

                        <div className="detailes__card">
                            <p>23</p>
                            <p>High</p>
                        </div>

                        <div className="detailes__card">
                            <p>23</p>
                            <p>High</p>
                        </div>

                        <div className="detailes__card">
                            <p>23</p>
                            <p>High</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="weather__hourly">

                <div className="hourly__card">
                    <p className="hourly__time">{new Date(data?.list?.[1]?.dt_txt).getHours()}</p>
                    <img src={SunnyImg} alt="" />
                    <p className="hourly__temp">Temp {data?.list?.[1]?.main?.temp.toFixed()}{fahrenheit}</p>
                </div>

                <div className="hourly__card">
                    <p className="hourly__time">{new Date(data?.list?.[2]?.dt_txt).getHours()}</p>
                    <img src={SunnyImg} alt="" />
                    <p className="hourly__temp">Temp {data?.list?.[2]?.main?.temp.toFixed()}{fahrenheit}</p>
                </div>

                <div className="hourly__card">
                    <p className="hourly__time">{new Date(data?.list?.[3]?.dt_txt).getHours()}</p>
                    <img src={SunnyImg} alt="" />
                    <p className="hourly__temp">Temp {data?.list?.[3]?.main?.temp.toFixed()}{fahrenheit}</p>
                </div>

                <div className="hourly__card">
                    <p className="hourly__time">{new Date(data?.list?.[4]?.dt_txt).getHours()}</p>
                    <img src={SunnyImg} alt="" />
                    <p className="hourly__temp">Temp {data?.list?.[4]?.main?.temp.toFixed()}{fahrenheit}</p>
                </div>

                <div className="hourly__card">
                    <p className="hourly__time">{new Date(data?.list?.[5]?.dt_txt).getHours()}</p>
                    <img src={SunnyImg} alt="" />
                    <p className="hourly__temp">Temp {data?.list?.[5]?.main?.temp.toFixed()}{fahrenheit}</p>
                </div>

            </div>

        </div>
    )


}

