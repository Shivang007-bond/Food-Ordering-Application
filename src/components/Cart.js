import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-8 m-6">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-9/12 m-auto">
        <ItemList items={cartItems} />
      </div>
      <button
        className="bg-black text-white rounded-md p-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
