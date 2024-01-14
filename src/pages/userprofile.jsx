// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export function Userprofile({ logged, args }) {

    function Clicklogin(e) {
      e.stopPropagation();
    }
  
    console.log(logged);
  
    if (logged) {
      return (
        <>
          <div style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignContent: "stretch",
            justifyContent: "flex-start"
          }}>
            
            <Link  to="/Login" className='btn btn-outline-primary'onClick={Clicklogin}>
              Login
            </Link>
            <button className='btn btn-outline-secondary'>
              Signup
            </button>
          </div>
        </>
      );
    }
  
    return (
      <>
        <button className="btn btn-outline-success">
          Himugesh
        </button>
      </>
    );
  }
  
  Userprofile.defaultProps = {
    logged: false,
  };
