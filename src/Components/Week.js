import React, { useState, useEffect } from "react";
import SunnyImg from "../images/sunny.png"

export default function Week() {
    const [data, setDate] = useState([])

    const filteredData = data?.list?.filter(item => item?.dt_txt?.split(" ")?.[0] > new Date().toISOString().split("T")[0])
    const newDataLists = filteredData?.filter(item => item?.dt_txt?.split(" ")?.[1] === "03:00:00")
    console.log(newDataLists)




    useEffect(() => {
        fetchItems()
    }, [])



    const fetchItems = async () => {
        const items = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${localStorage.getItem("city")}&appid=b0f572a4d0aaa69489800bacb6ae51be&units=imperial`)
        const res = await items.json()
        setDate(res)
    }
    console.log(newDataLists)





    return (
        <div className="week">

            <h1>{localStorage.getItem("city")}</h1>

            <div className="weather__hourly">
                {newDataLists?.map(item => (
                    <div className="hourly__card" key={item.dt}>
                        <p className="hourly__time">{item.dt_txt.split(" ")?.[0]}</p>
                        <img src={SunnyImg} alt="" />
                        <p className="hourly__temp">Temp {data?.list?.[1]?.main?.temp.toFixed()}F</p>
                    </div>
                ))}
            </div>

        </div>);

}
