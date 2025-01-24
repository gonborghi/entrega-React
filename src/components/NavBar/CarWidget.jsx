import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext)

  let quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
      <PiShoppingCartBold size={30} color='red'className="icon-cartwidget" />
      <p color = 'red' className="number-cartwidget"> { quantity !== 0 && quantity } </p>
    </Link>
  )
}
export default CartWidget