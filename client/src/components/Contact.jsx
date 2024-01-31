import Navbar from "./Navbar";
import { useState } from "react";
import video from "../assets/video2.mp4";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cel: "",
    me: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5173/send-email", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop id="myVideo" className="fullscreen-video">
        <source src={video} type="video/mp4" />
      </video>
      <Navbar />

      <section className="section-contact section-padding position ">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <form
                method="POST"
                encType="multipart/form-data"
                action=""
                id="contact_form"
                acceptCharset="UTF-8"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row ">
                  <div className="col-sm-4 col-md-4 ">
                    <div className="sidebar-contact">
                      <h1 className="font-weight-bold">Contact</h1>
                      <br />
                      <div className="sidebar-item">
                        <h3 className="font-weight-bold">Address</h3>
                        <a
                          className="a"
                          href="https://www.google.com/maps/place/Kristal+Center/@41.314337,19.802764,17z/data=!3m1!4b1!4m6!3m5!1s0x13503057202ce1d9:0xdf172acddb9e2093!8m2!3d41.314337!4d19.802764!16s%2Fg%2F1td44n35?entry=ttu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Kristal Center, Tirane, Shqiperi
                        </a>
                      </div>
                      <div className="sidebar-item">
                        <h3 className="font-weight-bold">E-mail</h3>
                        <a className="a" href="mailto:evamecollari1@gmail.com">
                          evamecollari1@gmail.com
                        </a>
                      </div>
                      <div className="sidebar-item">
                        <h3 className="font-weight-bold">Phone</h3>
                        <a className="a" href="tel:+355 69 33 33 333">
                          +355 69 33 33 333
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h2 className="font-weight-bold">Online Doctor Assists</h2>
                    <p>
                      Feel free to write us your analysis for your problems to
                      advise you on our natural treatments !
                    </p>
                    <br />
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="ContactFormName"
                            name="name"
                            placeholder="* Name"
                            autoComplete="words"
                            required
                            className="form-control"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            id="ContactFormPhone"
                            name="cel"
                            placeholder="Phone"
                            pattern="[0-9\-]*"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="form-group"
                          style={{ marginBottom: "8px" }}
                        >
                          <input
                            type="email"
                            id="ContactFormEmail"
                            name="email"
                            placeholder="* E-mail"
                            required
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span>
                            Attach photos of your illness, blood test results,
                            etc..
                          </span>
                          <input
                            type="file"
                            name="attach[]"
                            multiple
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <textarea
                            rows="6"
                            id="ContactFormMessage"
                            name="me"
                            placeholder="* Description of your problem"
                            required
                            className="form-control"
                          />
                          <br />
                          <a target="_blank" rel="noopener noreferrer" className="btn-dark btn-lg active font-weight-bold" href="mailto:evamecollari1@gmail.com">Submit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
