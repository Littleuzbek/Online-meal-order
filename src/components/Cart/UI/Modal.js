import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Redux/authSlice';

const BackDrop = () => {
  const dispatch = useDispatch();
  
  const closeHandler =()=>{
    dispatch(authActions.toggleCart(false));
    dispatch(authActions.toggleOrderCart(false))
  }
  return <div className={classes.backDrop} onClick={()=>closeHandler()}/>;
};

const ModalElements = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const portal = document.getElementById('modal');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portal)}
      {ReactDOM.createPortal(
        <ModalElements>{props.children}</ModalElements>,
        portal
      )}
    </Fragment>
  );
};

export default Modal;
