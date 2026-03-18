import React, { useState, useEffect } from 'react';

const  SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialState);
  const [formErr, setFormErr] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // CAPTCHA states using OTP function logic
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // OTP function reused here to generate random numeric string (captcha)
  function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }

  // Generate & set captcha on component mount or when refresh clicked
  useEffect(() => {
    setCaptcha(generateOTP());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateOTP());
    setUserCaptcha('');
    setCaptchaError('');
  };


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
    setFormErr({
      ...formErr,
      [name]: ""
    });
  };

  // Validate form + captcha
  const validate = () => {
    const errors = {};
    if (!formValue.name.trim()) errors.name = "Name is required";
    if (!formValue.email.trim()) errors.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValue.email)) errors.email = "Email is invalid";
    if (!formValue.contact.trim()) errors.contact = "Contact is required";
    else if (!/^\d{10}$/.test(formValue.contact)) errors.contact = "Contact must be 10 digits";
    if (!formValue.address.trim()) errors.address = "Address is required";
    if (!formValue.password) errors.password = "Password is required";
    else if (formValue.password.length < 6) errors.password = "Password must be at least 6 characters";

    if (!userCaptcha.trim()) {
      errors.captcha = "Please enter CAPTCHA";
    } else if (userCaptcha !== captcha) {
      errors.captcha = "CAPTCHA does not match";
    }
    return errors;
  }

  // Form submit handler checks captcha correctness
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
      setFormValue(initialState);
      refreshCaptcha();
    } else {
      setFormErr(errors);
    }
  };

  return (
    <>
      <br /><br />
      <div className="container" style={{ height: 'calc(100vh - 140px)', overflow: 'auto' }}>
        <div className="row justify-content-center">
          <div className="col-lg-5">

            <h4 className="text-center sign">Registration till 31st March only...</h4>
            <br /><br />
            <div className="card p-3">
              <form onSubmit={handleSubmit}>

                <div className="mb-3 p-3">
                  <label className="form-label">Name: </label>
                  <input type="text" name="name" value={formValue.name} onChange={handleFormChange} className="form-control" />
                  {formErr.name && <small className="text-danger">{formErr.name}</small>}
                </div>

                <div className="mb-3 p-3">
                  <label className="form-label">Contact: </label>
                  <input type="text" name="contact" value={formValue.contact} onChange={handleFormChange} className="form-control" />
                  {formErr.contact && <small className="text-danger">{formErr.contact}</small>}
                </div>

                <div className="mb-3 p-3">
                  <label className="form-label">Address: </label>
                  <input type="text" name="address" value={formValue.address} onChange={handleFormChange} className="form-control" />
                  {formErr.address && <small className="text-danger">{formErr.address}</small>}
                </div>

                <div className="mb-3 p-3">
                  <label className="form-label">Email: </label>
                  <input type="text" name="email" value={formValue.email} onChange={handleFormChange} className="form-control" />
                  {formErr.email && <small className="text-danger">{formErr.email}</small>}
                </div>

                <div className="mb-3 p-3">
                  <label className="form-label">Password:</label>
                  <div className="input-group">
                    <input type={showPassword ? "text" : "password"} name="password" value={formValue.password} onChange={handleFormChange} className="form-control" />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                       {showPassword ? (
      <i className="bi bi-eye-slash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg></i>  // password hidden icon
    ) : (
      <i className="bi bi-eye"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg></i>        // password visible icon
    )}
    
                 </button>
                  </div>
                  {formErr.password && <small className="text-danger">{formErr.password}</small>}
                </div>

                {/* CAPTCHA Section */}
                <div className="mb-3 p-3 d-flex align-items-center gap-3">
                  <div style={{ userSelect: 'none', fontWeight: 'bold', fontSize: '1.5rem', padding: '5px 15px', backgroundColor: '#eee', borderRadius: '5px' }}>
                    {captcha}
                  </div>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={refreshCaptcha}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg></button>
                </div>
                <div className="mb-3 p-3">
                  <input type="text" value={userCaptcha} onChange={(e) => setUserCaptcha(e.target.value)} placeholder="Enter CAPTCHA" className="form-control" />
                  {(formErr.captcha) && <small className="text-danger">{formErr.captcha}</small>}
                </div>

<br></br>

<div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
      </div>
      </div>
      
      <br></br>

                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">SignUp Now</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      
      <br></br><br></br>
      
    </>
  );
};

export default SignUp;


