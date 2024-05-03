import React, { useState } from 'react'
import '../Components/Invoice.css'
import Invoiceform from './Invoiceform'
const Invoice = () => {
    const [showModal,setShowModal]=useState(false)
  return (
    <div div className='invoice_outer'>
      <div className='invoice_inner'>
        <div className='invoice_header container'>
            <div className=' invoice '>
                <p>INVOICE</p>
            </div>
            <div className=' invoice_search '>
                <button className='invoice_create' onClick={()=>setShowModal(true)}>Create {showModal &&<Invoiceform onClose={()=>setShowModal(false)} />} </button>
                
                <input className='input_search' type="text" />
                <button className='search_btn'>Search</button>
            </div>
            <table className="table">
  <thead >
    <tr className='invoice_thead'>
      <th scope="col " className='invoice_thead'>Invoice No</th>
      <th scope="col" className='invoice_thead'>Date</th>
      <th scope="col" className='invoice_thead'>Customer Name</th>
      <th scope="col" className='invoice_thead'>Total</th>
      <th scope="col" className='invoice_thead'>Tax</th>
      <th scope="col" className='invoice_thead'> Grand Total</th>
    </tr>
  </thead>
  <tbody>
    <tr className='invoice_thead'>
      <th scope="row" >1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
        
      </div>
    </div>
  )
}

export default Invoice
