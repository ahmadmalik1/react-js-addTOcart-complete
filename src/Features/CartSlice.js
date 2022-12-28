import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) :
        [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("Increased product quantity", {
                    position: "top-right",
                    autoClose: 1000

                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} is added`, {
                    position: "top-right",
                    autoClose: 1000

                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`Item removed from cart`, {
                position: "top-right",
                autoClose: 1000
            })
        },
        decreaseCartQTY(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info("Decreased product quantity", {
                    position: "top-right",
                    autoClose: 1000
    
                })
            } 
            // else if (state.cartItems[itemIndex].cartQuantity === 1) {
            //     const nextCartItems = state.cartItems.filter(
            //         cartItem => cartItem.id !== action.payload.id
            //     )
            //     state.cartItems = nextCartItems;
            //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            // }
        },
        clearCart(state, action) {
            state.cartItems = [];
            toast.error(`Cart is cleared`, {
                position: "top-right",
                autoClose: 1000
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getCartSubTotal(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {
                total : 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        }
        
    },
});

export const { addToCart, removeFromCart, decreaseCartQTY, increaseCartQTY, clearCart, getCartSubTotal } = cartSlice.actions;
export default cartSlice.reducer;