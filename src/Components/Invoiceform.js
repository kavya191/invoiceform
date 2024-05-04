// import '../Components/Invoiceform.css'

// import Modal from 'react-bootstrap/Modal';
// import Form from "react-bootstrap/Form";

// import FormLabel from "react-bootstrap/FormLabel";
// import { Col, Row } from "react-bootstrap";
// import { useState } from 'react';
// const Invoiceform = ({onHide}) => {
    
//   const handleClose = () => setShow(false);
 
//     const [currentDate, setCurrentDate] = useState("");
//     const [invoiceData, setInvoiceData] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [totalTax, setTotalTax] = useState(0);
//     const [grandTotal, setGrandTotal] = useState(0);
  
//     const [inputs, setInputs] = useState({
//       itemId: "",
//       customerName: "",
//       itemName: "",
//       price: "",
//       tax: "",
//       totalprice: "",
//     });
  
//     const getInputs = (e) => {
//       const { name, value } = e.target;
//       console.log(name, value);
//       setInputs({ ...inputs, [name]: value });
//     };
//     const handleSave = () => {
//       const newData = {
//         itemId: inputs.itemId,
//         customerName: inputs.customerName,
//         itemName: inputs.itemName,
//         price: parseFloat(inputs.price),
//         tax: parseFloat(inputs.tax),
//         totalprice: parseFloat(inputs.price) + parseFloat(inputs.tax),
//       };
  
//       const updatedInvoiceData = [...invoiceData, newData];
//       setInvoiceData(updatedInvoiceData);
  
//       // Calculate new totals
//       let newTotalPrice = 0;
//       let newTotalTax = 0;
  
//       updatedInvoiceData.forEach((item) => {
//         newTotalPrice += item.price;
//         newTotalTax += item.tax;
//       });
  
//       setTotalPrice(newTotalPrice);
//       setTotalTax(newTotalTax);
//       setGrandTotal(newTotalPrice + newTotalTax);
  
//       // Clear input fields after saving
//       setInputs({
//         itemId: "",
//         customerName: "",
//         itemName: "",
//         price: "",
//         tax: "",
//         totalprice: "",
//       });
//       onHide()
//       handleClose();
//     };
    
//   return (
//     <Modal show={show} onHide={handleClose} className="create_invoice">
//     <Modal.Header className="form_header">
//       <Modal.Title>Create Invoice</Modal.Title>
//     </Modal.Header>
//     <Modal.Header className="invoice_date">
//       <FormLabel>Invoice No</FormLabel>
//       <button className="invoice_btn">1001</button>
//       <FormLabel>Date</FormLabel>
//       <button className="date_btn">{currentDate}</button>
//       <div>
//         <button className="add_btn">ADD</button>
//       </div>
//     </Modal.Header>

//     <Modal.Body className="form_body">
//       <table className="table ">
//         <thead className="invoice_table">
//           <tr className="invoice_thead">
//             <th scope="col " className="invoice_thead">
//               Item ID
//             </th>
//             <th scope="col" className="invoice_thead">
//               Customer Name
//             </th>
//             <th scope="col" className="invoice_thead">
//               Item Name
//             </th>
//             <th scope="col" className="invoice_thead">
//               Price
//             </th>
//             <th scope="col" className="invoice_thead">
//               Tax
//             </th>
//             <th scope="col" className="invoice_thead">
//               Sub Total
//             </th>
//           </tr>
//         </thead>
//         <tbody className="invoice_table">
//           <tr className="invoice_thead">
//             <td scope="row">
//               {" "}
//               <Form.Control
//                 name="itemId"
//                 onChange={(e) => getInputs(e)}
//                 placeholder="Item ID"
//               />
//             </td>
//             <td>
//               {" "}
//               <Form.Control
//                 name="customerName"
//                 onChange={(e) => getInputs(e)}
//                 placeholder="Customer Name"
//               />
//             </td>
//             <td>
//               {" "}
//               <Form.Control
//                 name="itemName"
//                 onChange={(e) => getInputs(e)}
//                 placeholder="Item Name"
//               />
//             </td>
//             <td>
//               {" "}
//               <Form.Control
//                 name="price"
//                 onChange={(e) => getInputs(e)}
//                 placeholder="Price"
//               />
//             </td>
//             <td>
//               {" "}
//               <Form.Control
//                 name="tax"
//                 onChange={(e) => getInputs(e)}
//                 placeholder="Tax"
//               />
//             </td>
//             <td>
//               <Form.Control
//                 name="totalprice"
//                 onChange={(e) => getInputs(e)}
//                 placeholder="Total Price"
//               />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <Form className="invoice_addform">
//         <Row>
//           <Col>Total Price</Col>
//           <Col>
//             <Form.Control
//               placeholder="Total Price"
//               value={totalPrice}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>Total Tax</Col>
//           <Col>
//             <Form.Control placeholder="Total Tax" value={totalTax} />
//           </Col>
//         </Row>
//         <Row>
//           <Col> Grand Total </Col>
//           <Col>
//             <Form.Control
//               placeholder="Grand Total"
//               value={grandTotal}
//             />
//           </Col>
//         </Row>
//       </Form>
//       <button className="save_btn" onClick={handleSave}>
//         Save
//       </button>
//     </Modal.Body>
//   </Modal>
//   )
// }

// export default Invoiceform
