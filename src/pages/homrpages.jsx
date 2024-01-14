import { Link, useParams } from "react-router-dom"; // Importing useParams
import { Allpages } from "./allpages";
import { useEffect, useState } from "react";
import axios from "axios";
import Setter, { Footersize } from "../insidepages/footer";
import { Navtabs } from "../insidepages/headertabs";

export function Homepage2() {
  const [products, setProducts] = useState([]);
  const [searchList, setSearchList] = useState("");
  const { id } = useParams(); // Using useParams

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => console.error(error));

    console.log("useEffect mounting phase");
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchList.toLowerCase())
  );

  return (
    <>
      <Allpages />
      <Navtabs />
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
        />

        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="card-img-top"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <Link to={`/product/${product.id}`}> {/* Use template literal */}
                    <img
                      src={product.images[0]}
                      alt="listing"
                      style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                    {product.title}
                  </Link>
                  <button className="btn btn-primary fs-7">Add to cart+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footersize/> */}
    </>
  );
}
