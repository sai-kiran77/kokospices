import React from 'react';
import './FormComponent.css';
import pepperPlaceholder from '../assets/pepper-placeholder.svg';
import productPlaceholder from '../assets/product-thumb3.svg'; 

function FormComponent() {
  return (
    <div className="container mt-5 text-center">
    <img src={pepperPlaceholder} className="pepper-image" />
    <img src={productPlaceholder} className="product-image" />
    <h1 className='mb-5' style={{color: "black", fontWeight: "bold"}}> Contact us </h1>
      <div className="card" style={{ width: '500px', margin: 'auto', padding: '20px', borderRadius: '10px' , borderColor: '#757575'}}>
        <div className="card-body">
          <form>
            <div className="form-outer-group" >
              <label htmlFor="name" className="custom-label">Name</label>
              <input type="text" className="form-control" id="name"  />
            </div>
            <div className="form-outer-group">
              <label htmlFor="email" className="custom-label">Email</label>
              <input type="email" className="form-control" id="email"  />
            </div>
            <div className="form-outer-group">
              <label htmlFor="contact" className="custom-label">Contact Number</label>
              <input type="text" className="form-control" id="contact"  />
            </div>
            <div className="form-outer-group">
              <label htmlFor="product" className="custom-label">Pick a product</label>
              <input type="text" className="form-control" id="product" />
            </div>
            <div className="form-outer-group">
              <label htmlFor="message" className="custom-label">Drop a message</label>
              <input type="text" className="form-control message" />
            </div>
            <div class="d-grid gap-2 col-12 mx-auto">
              <button class="btn btn-success btn-clr" type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <p className='mt-3' style={{color: "black", fontSize: "16px"}}>We are open from Monday to Friday 9.00am to 6.00pm</p>
    </div>
  );
}

export default FormComponent;
