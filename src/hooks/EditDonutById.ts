import axios from "axios";
import { Donut } from "../types/Donut";

export default async function EditDonutById(id: string, updatedDonut: Donut) {
    const { data } = await
    axios.patch(`https://donutapiv2-production.up.railway.app/api/v2/donuts/${ id }`, {
        // axios.patch(`http://localhost:8080/api/v2/donuts/${ id }`, {
            name: updatedDonut.name,
            description: updatedDonut.description,
            imageUrl: updatedDonut.imageUrl,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    return data;
}