import React, { useState, useEffect } from "react";
import axios from "axios";

// const fakeData = [
//     { id: 1, name: "Dennis van Willigen", email: "dennis.vanwilligen@gmail.com", lastLogin: "2023-12-21 10:33:18" },
//     { id: 2, name: "Albi Eshuis", email: "albi.eshuis@gmail.com", lastLogin: "2023-11-20 21:34:17" },
//     { id: 3, name: "Kelly Brandsen", email: "kelly@gmail.com", lastLogin: "2023-11-12 21:34:17" },
//     { id: 4, name: "Sander Veldt", email: "sander@gmail.com", lastLogin: "2023-10-11 21:34:17" },
//     { id: 5, name: "Dennis van Benten", email: "dennisvbenten@gmail.com", lastLogin: "2023-11-11 21:34:17" },
//     { id: 6, name: "Estupendo Veldinho", email: "iemand@mail.nl", lastLogin: "2023-10-01 09:34:17" },
// ]

const api = axios.create({
    baseURL: "https://127.0.0.1:8000/api"
})

const AwaitGet = ({ url, params, setMessage, children }) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const getReponse = async () => {
            setLoading(true);
            let resp;
            let parameters = "";

            if (params !== undefined) {
                params.map(param => {
                    if (param !== undefined) {
                        parameters += "/" + param;
                    }
                    return null;
                });
            }

            try {
                if (params && parameters.length >= 1) {
                    resp = await api.get(url + parameters);
                } else {
                    resp = await api.get(url);
                }
            } catch (err) {
                resp = err.response;
            }

            if (resp === undefined || resp.status !== 200) {
                setMessage("Er is iets misgegaan bij het ophalen van de data");
            } else {
                setMessage("");
                setResponse(resp.data);
            }

            setLoading(false)
        };

        getReponse();
    }, [params, url, setMessage]);

    if (loading) {
        return (<h4>Loading...</h4>);
    } else {
        return response && children(response);
    }
}

export default AwaitGet;