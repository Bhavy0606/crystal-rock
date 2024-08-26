"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";
import mapStyle from "./styles.json";
export default function MyMap() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader(
                {
                    apiKey: 'AIzaSyAupVmeSIJNSqG6VrH-1QFWiFz0I0t5dd4',
                    version: 'weekly',
                }
            )

            const { Map } = await loader.importLibrary('maps');
            const position = {
                lat: 33.6055497,
                lng: -112.4547021,
            }
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 10,

                styles: mapStyle as any,
            }
            // mapId:'crystal_rock_map',
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        };
        initMap();
    }, []);
    return <>
        <div style={{
            height: "250px",
            width: "100%",
            outline: "none"
        }}
            ref={mapRef}
        ></div>
    </>;
}