import React, { useEffect, useState } from "react";
import "../Components/Invoice.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FormLabel from "react-bootstrap/FormLabel";
import { Col, Row } from "react-bootstrap";

const Invoice = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentDate, setCurrentDate] = useState("");
  const [invoiceData, setInvoiceData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [inputs, setInputs] = useState({
    itemId: "",
    customerName: "",
    itemName: "",
    price: "",
    tax: "",
    totalprice: "",
  });

  const getInputs = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs({ ...inputs, [name]: value });
  };
  const handleSave = () => {
    const newData = {
      itemId: inputs.itemId,
      customerName: inputs.customerName,
      itemName: inputs.itemName,
      price: parseFloat(inputs.price),
      tax: parseFloat(inputs.tax),
      totalprice: parseFloat(inputs.price) + parseFloat(inputs.tax),
    };

    const updatedInvoiceData = [...invoiceData, newData];
    setInvoiceData(updatedInvoiceData);

    // Calculate new totals
    let newTotalPrice = 0;
    let newTotalTax = 0;

    updatedInvoiceData.forEach((item) => {
      newTotalPrice += item.price;
      newTotalTax += item.tax;
    });

    setTotalPrice(newTotalPrice);
    setTotalTax(newTotalTax);
    setGrandTotal(newTotalPrice + newTotalTax);

    // Clear input fields after saving
    setInputs({
      itemId: "",
      customerName: "",
      itemName: "",
      price: "",
      tax: "",
      totalprice: "",
    });

    handleClose();
  };
  //search item
  const handleSearch = (e) => {
    const { value } = e.target;
    const filteredData = invoiceData.filter((item) =>
      item.customerName.toLowerCase().includes(value.toLowerCase())
    );
    setInvoiceData(filteredData);
  };
  //Current Date
  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div div className="invoice_outer">
      <div className="invoice_inner">
        <div className="invoice_header container">
          <div className=" invoice ">
            <p>INVOICE</p>
          </div>
          <div className=" invoice_search ">
            <button className="invoice_create" onClick={handleShow}>
              CREATE
            </button>

            {/* popup invoice form */}
            <Modal show={show} onHide={handleClose} className="create_invoice">
              <Modal.Header className="form_header">
                <Modal.Title>Create Invoice</Modal.Title>
              </Modal.Header>
              <Modal.Header className="invoice_date">
                <FormLabel>Invoice No</FormLabel>
                <button className="invoice_btn">1001</button>
                <FormLabel>Date</FormLabel>
                <button className="date_btn">{currentDate}</button>
                <div>
                  <button className="add_btn">ADD</button>
                </div>
              </Modal.Header>

              <Modal.Body className="form_body">
                <table className="table ">
                  <thead className="invoice_table">
                    <tr className="invoice_thead">
                      <th scope="col " className="invoice_thead">
                        Item ID
                      </th>
                      <th scope="col" className="invoice_thead">
                        Customer Name
                      </th>
                      <th scope="col" className="invoice_thead">
                        Item Name
                      </th>
                      <th scope="col" className="invoice_thead">
                        Price
                      </th>
                      <th scope="col" className="invoice_thead">
                        Tax
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody className="invoice_table">
                    <tr className="invoice_thead">
                      <td scope="row">
                        {" "}
                        <Form.Control
                          name="itemId"
                          onChange={(e) => getInputs(e)}
                          placeholder="Item ID"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          name="customerName"
                          onChange={(e) => getInputs(e)}
                          placeholder="Customer Name"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          name="itemName"
                          onChange={(e) => getInputs(e)}
                          placeholder="Item Name"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          name="price"
                          onChange={(e) => getInputs(e)}
                          placeholder="Price"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          name="tax"
                          onChange={(e) => getInputs(e)}
                          placeholder="Tax"
                        />
                      </td>
                    
                    </tr>
                  </tbody>
                </table>
                <Form className="invoice_addform">
                  <Row>
                    <Col>Total Price</Col>
                    <Col>
                      <Form.Control 
                        placeholder="Total Price"
                        value={totalPrice}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>Total Tax</Col>
                    <Col>
                      <Form.Control placeholder="Total Tax" value={totalTax} />
                    </Col>
                  </Row>
                  <Row>
                    <Col> Grand Total </Col>
                    <Col>
                      <Form.Control
                        placeholder="Grand Total"
                        value={grandTotal}
                      />
                    </Col>
                  </Row>
                </Form>
                <button className="save_btn" onClick={handleSave}>
                  Save
                </button>
              </Modal.Body>
            </Modal>
            {/* Search item */}
            <input
              className="input_search"
              type="text"
              placeholder="Search by Item Name"
              onChange={handleSearch}
            />
            <button className="search_btn">Search</button>
          </div>
          {/* Invoice List */}
          <table className="table">
            <thead>
              <tr className="invoice_row">
                <th scope="col " className="invoice_thead">
                  Invoice No
                </th>
                <th scope="col" className="invoice_thead">
                  Date
                </th>
                <th scope="col" className="invoice_thead">
                  Customer Name
                </th>
                
                <th scope="col" className="invoice_thead">
                  Total
                </th>
                <th scope="col" className="invoice_thead">
                  Tax
                </th>
                <th scope="col" className="invoice_thead">
                  {" "}
                  Grand Total
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((data, index) => (
                <tr key={index}>
                  <td>{data.itemId}</td>
                  <td>{currentDate}</td>
                  <td>{data.customerName}</td>
                 
                  <td>{data.price}</td>
                  <td>{data.tax}</td>
                  <td>{data.totalprice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
