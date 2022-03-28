import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TermsAndConditionsONG from '../TermsAndConditions/TermsAndConditionsONG';
import './termsAndConditionsModal.css';

const TermsAndConditionsModal = ({setChecked})=>{
  const handle = (e)=>{
    setChecked(e);
  }
  return(
    <Popup 
      className="popup-content"
        trigger={ 
          <span>Acepto<button className="btnConditions">términos y condiciones</button></span>
        }
      modal nested 
    >{ close => ( 
      <div  keyboard={false} className="myModal">
        <button className="close" type="button" onClick={close}> x </button>
        <div className="header"> Términos y condiciones </div>
        <div className="content">
          <TermsAndConditionsONG/>
        </div>
        <div className="actions">
          <button 
            className="button"
            type="button"
            onClick={()=>handle(true, close())} 
          >
            Aceptar
          </button>
          <button 
            className="button"
            type="button"
            onClick={()=>handle(false, close())}
          >
            Cancelar
          </button>
        </div>
      </div>
      )}
    </Popup>
  )
};

export default TermsAndConditionsModal; 