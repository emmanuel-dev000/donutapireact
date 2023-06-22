import axios from "axios";

export default function GetAllDonuts() {
    let donuts;
    axios.get("http://localhost:8080/api/v2/donuts")
        .then(res => donuts = res.data);
    return donuts;
}