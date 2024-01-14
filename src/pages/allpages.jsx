import { Userprofile } from "./userprofile";


export function Allpages(){
    return(
        <div>
             
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <img
                                        src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                                        alt="Logo"
                                        width={30}
                                        height={24}
                                        className="d-inline-block align-text-top"
                                    />
                                    <span className="text-danger">MYAPP</span>
                                </a>
                            </div>
                            <span >
                        <Userprofile  logged={true} />
                    </span>
                        </nav>
                        </div>
    )
}