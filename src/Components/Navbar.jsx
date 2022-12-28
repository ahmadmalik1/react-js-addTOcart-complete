import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const cart = useSelector((state) => state.cart);
    console.log(cart.cartItems.length);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" style={{padding: "10px 15px" ,boxShadow: "0px 0px 2px #3C4048"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">SHOPE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <NavLink className="nav-link active" aria-current="page" to="/cart">
                        <i className="bi bi-cart4" style={{fontSize: "1.5rem"}}>
                        <sup><small className="badge bg-success"> {cart.cartItems.length} </small></sup>
                        </i>

                        </NavLink>                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;