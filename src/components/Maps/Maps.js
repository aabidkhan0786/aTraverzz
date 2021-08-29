import  GoogleMapReact  from 'google-map-react'
import React from 'react'

const Maps = () => {
    const coordinates = {lat:0, lng:0}
    return (
        <>
            Maps
            <GoogleMapReact
            bootstrapURLKeys={{key:''}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >

            </GoogleMapReact>
        </>
    )
}

export default Maps
