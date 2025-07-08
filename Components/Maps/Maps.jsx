import { headers } from 'next/headers';
import React from 'react'

const Maps = () => {
    const lat = 1234567;
    const long = 1234567;
    const fetchData = await axios.get("/api")
    {
        try {
            const Data = response.data;
            console.log("The data is ", Data);
            headers: {
                authorization: ""
            }
        }
        catch (err) {
            console.log("The error is ", err);
        }
    }
    return (
        <div>

        </div>
    )
}

export default Maps
