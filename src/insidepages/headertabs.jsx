import { Link } from "react-router-dom";

export function Navtabs(){
    return(
        <>
         <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/Offer' className="nav-link">
            Link
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/stores' className="nav-link">
            Stores
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/wishlist' className="nav-link">
            Wishlist
          </Link>
        </li>
      </ul>

        </>
    )
}