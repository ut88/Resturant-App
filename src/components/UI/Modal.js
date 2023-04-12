import classes from "./Modal.module.css"
import {Fragment} from 'react';
import ReactDom from "react-dom"
const Backdrop= props=>{
    
    return(
        <div className={classes.backdrop} />
    )
}

const ModalOverLay= props=>{

    return (<div className={classes.modal}> 
        <div className={classes.content}>{props.children}</div>
        </div>)
}
const portalElement=document.getElementById('modal');
const Modal= props=>{
  return (<Fragment>
      {ReactDom.createPortal(<Backdrop/>,portalElement)} 
     {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
  </Fragment>)
      
}

export default Modal;