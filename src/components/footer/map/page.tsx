"use client";
import React, { useEffect } from "react";
import styles from "../footer.module.css";
import { Loader } from "@googlemaps/js-api-loader";
import mapStyle from "./styles.json"
export default function MyMap() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
        const loader= new Loader(
            {
                apiKey:'AIzaSyAupVmeSIJNSqG6VrH-1QFWiFz0I0t5dd4',
                version:'weekly',
            }
        )

        const {Map}=await loader.importLibrary('maps');
        const position={
            lat:33.6055497,
            lng:-112.4547021,
        }
        const mapOptions:google.maps.MapOptions={
            center:position,
            zoom:10,
            mapId:'crystal_rock_map',
            styles:mapStyle
        }

        const map=new Map(mapRef.current as HTMLDivElement,mapOptions);
    };
    initMap();
  }, []);
  return <>
    <div style={{
        height:"200px",
        width:"100%"
    }}
        ref={mapRef}
    ></div>
  </>;
}