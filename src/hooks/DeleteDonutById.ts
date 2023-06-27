import axios from "axios";

export default async function DeleteDonutById(id: string) {
    const { data } = await
            axios.delete(`https://donutapiv2-production.up.railway.app/api/v2/donuts/${ id }`)
            // axios.delete(`http://localhost:8080/api/v2/donuts/${ id }`)
    return data;
}