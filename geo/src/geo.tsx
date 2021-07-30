import { render } from "@testing-library/react";
import { useState,useEffect } from "react";



const Geolocation = ()  => {

    const [latitude, setLatitude] = useState<Number | null>(null)
    const [longitude, setLongitude] = useState <Number | null>(null)



    useEffect(() => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleSuccess)
        }
        }, [])


    const handleSuccess = ({
        coords: {
        latitude,
        longitude
        }
        }: { coords: { latitude: number; longitude: number }}) => {
        setLatitude(latitude)
        setLongitude(longitude)
        }




        return(
            <div>
                <h1>Geolocation</h1>
                <div>Latitude: {latitude}</div>
                <div>Longitude:{longitude}</div>
            </div>
        )
      
        


}


export default Geolocation