import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../Features/ProductsApi";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { addToCart } from "../Features/CartSlice";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();

    const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product));
    }
    return (
        <div className="container">
            <div className="row my-5">
                {isLoading ? (<p>Loading please wait...</p>) : (error) ? (<p>Error in fetching...</p>) :
                    (
                        <>
                            {data.map((product) => (
                                <div className="col-lg-2 " key={product.id}>
                                    <div className="card p-1">
                                        <img src={product.image} alt={product.title} width={80} height={80} className="card-img-top" />
                                        <div className="card-body">
                                        <h5 className="card-title">
                                            {product.title}
                                        </h5>
                                        <p className="card-text">
                                            ${product.price}
                                        </p>
                                        </div>
                                        <button onClick={()=> handleAddToCart(product)} className="btn btn-sm btn-dark">
                                            <i class="bi bi-cart4" style={{ fontSize: "1rem" }} />
                                        </button>

                                    </div>
                                </div>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Home;