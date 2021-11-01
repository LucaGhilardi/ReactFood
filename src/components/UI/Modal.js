import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCart}></div> 
}

const Overlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

}



const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays'))}
    </Fragment>
}

export default Modal