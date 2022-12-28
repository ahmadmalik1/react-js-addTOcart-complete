import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCartQTY, getCartSubTotal, removeFromCart } from "../Features/CartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCartSubTotal());
    }, [cart])
    const handleDecreaseCartQTY = (item)=>{
        dispatch(decreaseCartQTY(item))
    }
    const handleIncreaseCartQTY = (item)=>{
        dispatch(addToCart(item))
    }
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const handleRemoveCartItem = (item)=>{
        dispatch(removeFromCart(item));
    }
    return (
        <>
            {cart.cartItems.length === 0 ? (
                <h2 className="my-5">
                    Bag is empty
                </h2>
            ) : (
                <>
                    <h2>Shopping Bag</h2>
                    <div className="my-3 fw-bold d-flex">
                        <div className="col-lg-3">Products</div>
                        <div className="col-lg-2">Name</div>
                        <div className="col-lg-1">Price</div>
                        <div className="col-lg-2">Quantity</div>
                        <div className="col-lg-2">Total</div>
                        <div className="col-lg-1">Action</div>
                    </div>
                    {cart.cartItems.map((item, index) => (
                        <div className="my-2 d-flex" key={index}>
                            <div className="col-lg-3">
                                <img src={item.image} alt={item.title} width={50} />
                            </div>
                            <div className="col-lg-2"><small>{item.title}</small></div>
                            <div className="col-lg-1">${item.price}</div>
                            <div className="col-lg-2">
                                <button className='itemCounterbtn' onClick={()=>handleDecreaseCartQTY(item)}>
                                    <i className="bi bi-dash"></i>
                                </button>
                                <span className='mx-3'>{item.cartQuantity}</span>
                                <button className='itemCounterbtn' onClick={()=>handleIncreaseCartQTY(item)}>
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                            <div className="col-lg-2">$
                            {(Math.round((item.price * item.cartQuantity) * 100) / 100).toFixed(2)}
                            </div>
                            <div className="col-lg-1">
                                <i className="bi bi-trash text-danger removeCartItemBtn" onClick={() => handleRemoveCartItem(item)}></i>
                            </div>
                        </div>

                    ))}
                </>
            )}
            {/* for going back to shopping side */}
            <div className="container cart-bottom d-flex justify-content-between my-5" >
                <div className="cart-clear">
                    {cart.cartItems.length === 0 ? 
                    <button className="btn btn-danger" disabled>
                        <i class="bi bi-trash3-fill"></i>
                        &nbsp;  Clear bag</button> : 
                    <button className="btn btn-outline-danger" onClick={()=> handleClearCart()}>
                        <i class="bi bi-trash3-fill"></i>
                        &nbsp;  Clear bag</button> }
                    
                </div>
                <div className="cart-bill">
                    <h4 className="d-flex justify-content-between">
                        <span>Subtotal:</span> 
                        <small> $    
                            {(Math.round(cart.cartTotalAmount * 100) / 100).toFixed(2)}
                        </small>
                    </h4>
                    <span className="d-block">Taxes are applicable on all products</span>
                    <Link className="badge bg-success continue-shopping-btn" to="/">
                        <i className="bi bi-arrow-left"></i>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Cart;