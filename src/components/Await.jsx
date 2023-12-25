import React, { useState, useEffect } from "react";
//import axios from "axios";


const fakeData = [
    { id: 1, naam: "Dennis van Willigen", email: "dennis.vanwilligen@gmail.com", lastVisit: "2023-12-21 10:33:18" },
    { id: 2, naam: "Albi Eshuis", email: "albi.eshuis@gmail.com", lastVisit: "2023-11-20 21:34:17" },
    { id: 3, naam: "Kelly Brandsen", email: "kelly@gmail.com", lastVisit: "2023-11-12 21:34:17" },
    { id: 4, naam: "Sander Veldt", email: "sander@gmail.com", lastVisit: "2023-10-11 21:34:17" },
    { id: 5, naam: "Dennis van Benten", email: "dennisvbenten@gmail.com", lastVisit: "2023-11-11 21:34:17" },
    { id: 6, naam: "Estupendo Veldinho", email: "iemand@mail.nl", lastVisit: "2023-10-01 09:34:17" },
]

function Await({ children }) {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const getReponse = async () => {
            setLoading(true);

            // const resp = await axios.get(
            //     "https://jsonplaceholder.typicode.com/posts/"
            // );

            setResponse(fakeData);

            setLoading(false)
        };

        getReponse();
    }, []);

    if (loading) {
        return (<h4>Loading...</h4>);
    } else {
        return response && children(response);
    }
}

export default Await;