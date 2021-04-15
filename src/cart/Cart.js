import {useSelector} from "react-redux";
import {selectBasket} from "../features/basket/basketSlice";
function Cart() {
    const basket = useSelector(selectBasket)
    return (
            <div className="cart"><h2>{basket.length}items in the cart</h2></div>
    )
}

export default Cart
