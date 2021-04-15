import './Product.css'
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/basket/basketSlice";
function Product({ id, title, image, price}) {
  const dispatch = useDispatch();
  const AddToBasket = () => {
    dispatch(addItem({id, title, price}));
  };

  const removeFromBasket = ()=> {
    dispatch(removeItem({id}))
  }
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="proudct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product__buttonWrapper">
          <button onClick={AddToBasket}>Add to Cart</button>
          <button onClick={removeFromBasket}>Remove From Cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;