import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import    {useContext,useEffect,useState} from 'react';

const HeaderCartButton= props=>{
 const cartCtx= useContext(CartContext);
 const [btnHighlighted,setBtnIsHighlighted]=useState(false);
 const {items}=cartCtx;
 const numberOfCartItems=items.reduce((curNumber,item)=>{

  return curNumber+item.amount;
 },0);
 


 const btnClasses=`${classes.button} ${btnHighlighted?classes.bump:''}`

 useEffect(()=>{
    if(items.length===0){
       return
    }
    setBtnIsHighlighted(true);
  const timer= setTimeout(()=>{
   setBtnIsHighlighted(false);
},300) 

return()=>{
    clearTimeout(timer);
}
 },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems} </span>
        </button>
    )
}

export default HeaderCartButton;