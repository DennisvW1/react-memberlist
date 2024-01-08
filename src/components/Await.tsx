import React, { useState, useEffect } from "react";
//import axios from "axios";

const fakeData: any = [
    { id: 1, name: "Dennis van Willigen", email: "dennis.vanwilligen@gmail.com", lastLogin: "2023-12-21 10:33:18" },
    { id: 2, name: "Albi Eshuis", email: "albi.eshuis@gmail.com", lastLogin: "2023-11-20 21:34:17" },
    { id: 3, name: "Kelly Brandsen", email: "kelly@gmail.com", lastLogin: "2023-11-12 21:34:17" },
    { id: 4, name: "Sander Veldt", email: "sander@gmail.com", lastLogin: "2023-10-11 21:34:17" },
    { id: 5, name: "Dennis van Benten", email: "dennisvbenten@gmail.com", lastLogin: "2023-11-11 21:34:17" },
    { id: 6, name: "Estupendo Veldinho", email: "iemand@mail.nl", lastLogin: "2023-10-01 09:34:17" },
]

const Await = ({ children}: any) => {
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