import React, { useRef } from 'react'
import '../Components/Invoiceform.css'
import { X } from 'lucide-react';
const Invoiceform = ({onClose}) => {
    const modelref=useRef()
    const closemodal=(e)=>{
        if(modelref.current === e.target){
            onClose()
        }
    }
  return (
    <div className='invoice_main'>
      <div className='inVoice_create'>
      <button className='d-flex justify-content-lg-start ' onClick={closemodal} ><X /></button>
      </div>
    </div>
  )
}

export default Invoiceform
