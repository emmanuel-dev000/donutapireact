import axios from "axios";
import { Donut } from "../types/Donut";

export default async function GetDonutById(id: string) : Promise<Donut> {
    const { data } = 
        // axios.get(`https://donutapiv2-production.up.railway.app/api/v2/donuts/${ id }`)
        await axios.get(`http://localhost:8080/api/v2/donuts/${ id }`);
    return data;
}