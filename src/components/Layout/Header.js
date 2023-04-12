import classes from "./Header.module.css"
import React,{Fragment} from 'react';
import HeaderCartButton from "./HeaderCartButton";
import MealImage from "../../assets/MealImage.jpg"
const Header= props =>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>FoodHub</h1>
                <HeaderCartButton  onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={ MealImage} alt='A table full of delicious food'/>
            </div>
        </Fragment>
    );
};

export default Header;