import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Allpages } from "./allpages";

export function Productpage({ currentitems }) {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        const productDetails = response.data;
        setDetails(productDetails);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Allpages />
      {details ? (
        <div className="container">
          <div className="row">
            {/* Moved the col-md-2 and image-container outside of the col-md-6 div */}
            <div className="col-md-2 md-0">
              {/* Added a container div for images with the 'image-container' class */}
              <div className="image-container">
                {Array.isArray(details.images) && details.images.length > 0 ? (
                  details.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      className="card-img-top img-fluid" 
                      // {/* Added img-fluid class */}
                      style={{ marginBottom: "10px" }}
                    />
                  ))
                ) : (
                  []
                )}
              </div>
            </div>
            <div className="col-md-4"> 
            {Array.isArray(details.images) && details.images.length > 0 && (
                <img
                  src={details.images[0]}
                  alt={`Image 1`}
                  className="card-img-top img-fluid"
                  style={{ marginBottom: "10px" }}
                />
              )}
            </div>
            <div className="col-md-6">
              <h1>{details.title}</h1>
              <p>No images available</p>
              <p>{details.description}</p>
              <p>Price: ${details.price}</p>
              <div >
        <Link to='/Addtocart' className="btn btn-warning">Add to cart</Link>
        <Link to='/Buynow' className="btn btn-success">Buy now</Link> 
      </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      
    </>
  );
}
