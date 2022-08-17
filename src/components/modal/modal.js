import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './styles.css';

const Modal = ({children,style}) => {
  console.log(style)
  // const {children} = props
  const navigate = useNavigate()
  const [show, setshow] = useState(true)
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleClose = ()=>{
    setshow(!show)
    // navigate('/')

  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main" style={{...style}}>
        {children}
        <button type="button" onClick={handleClose} className='btn btn1'> X</button>
      </section>
    </div>
  );
};

export default Modal;

