import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from '../redux/modalSlice';
import { clearCart } from '../redux/slice';

function Modal() {

    const dispatch = useDispatch();

    return <>
        <div className="modal-container">
            <div className="modal">
                <h4>Remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button type="button" className="confirm-btn" onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }}>CONFIRM</button>
                    <button type="button" className="clear-btn" onClick={() => dispatch(closeModal())}>CANCEL</button>
                </div>
            </div>
        </div>
    </>
}

export default Modal;