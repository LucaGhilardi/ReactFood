import { Fragment } from 'react'
import classes from './Header.module.css'
import Image from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={Image} alt="A table full of food" srcset="" />
            </div>
        </Fragment>
    )

}

export default Header