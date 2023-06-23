import GetAllDonuts from "../hooks/GetAllDonuts";

export default function Try() {
    const donuts = GetAllDonuts();
    return (
        <>
            <ul>
                {
                    donuts.map(donut => {
                        return (
                            <li key={donut.id}>
                                {donut.name}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}