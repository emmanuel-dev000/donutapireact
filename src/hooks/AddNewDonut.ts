import axios from "axios";
import { Donut } from "../types/Donut";

export default async function AddNewDonut(donut: Donut) {
    const { data } =
        // await axios.post("https://donutapiv2-production.up.railway.app/api/v2/donuts", {
        await axios.post("http://localhost:8080/api/v2/donuts", {
            id: donut.id,
            name: donut.name,
            description: donut.description,
            imageUrl: donut.imageUrl,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    return data;
}