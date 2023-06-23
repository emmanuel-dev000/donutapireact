import axios from "axios";
import { useState, useEffect } from "react";
import { Donut } from "../types/Donut";

export default function GetAllDonuts() : Donut[] {
    const [donuts, setDonuts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v2/donuts")
            .then(res => setDonuts(res.data));
    }, []);
    return donuts;
}