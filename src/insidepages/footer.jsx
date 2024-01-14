import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";
// import {FOOTER_DATA} from "../insidepages"
 export function Setter() {
    // const [footer,setFooter]=useState('');
  
    // const Footerlist=
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // height: "100vh", // Set the height of the container to 100% of the viewport height
            }}>
                <div className="card-header">Featured</div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
                 <div className="card-footer text-body-secondary">2 days ago</div>
            </div>
        </>
    )
}
