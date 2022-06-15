import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Main() {
    const [city, setCity] = useState("Nashville")
    const navigate = useNavigate()




    const onSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target.search
        setCity(value)
        navigate("current/" + value)
        localStorage.setItem("city", value)
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
