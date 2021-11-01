import { useContext } from "react"
import CartIcon from "../cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context"

const HeaderCartButton = props => {
    const CartCtx = useContext(CartContext)
    const numbercartItems = CartCtx.items.reduce((curNum, item)=>{
        return curNum + item.amount
    },0)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numbercartItems}</span>
    </button>

}

export default HeaderCartButton