import React from "react";
import { MdCall, MdHome, MdLink, MdMail } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
  AiOutlineGoogle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-center shadow text-lg-start bg-light text-muted border border-info mx-1 mb-5">
      <section className="d-flex justify-content-center align-items-center justify-content-lg-between py-3 px-4 border-bottom border-info">
        <span className="text-secondary fw-bold">This is Social Media App</span>
        <div className="d-flex">
          <div className="mx-2 text-dark fs-5">
            <AiFillMail />
          </div>
          <div className="mx-2 text-dark fs-5">
            <AiOutlineGoogle />
          </div>
          <div className="mx-2 text-dark fs-5">
            <AiFillInstagram />
          </div>
          <div className="mx-2 text-dark fs-5">
            <AiFillTwitterCircle />
          </div>
        </div>
      </section>
      <section className="border-bottom border-info pb-3">
        <div className="container text-center text-md-start mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="text-center text-muted text-md-start">
                <div className="py-2 fs-5 fw-bold"> Company Name</div>
                <div className="w-75">
                  Lorem ipsum dolor sit Iste optio, magnam tempora qui vitae
                  animi ut commodi dolores rem illum nihil consequuntur dolore!
                  Facere, a.
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center text-muted text-md-start">
                <div className="py-2 fs-5 fw-bold"> Products</div>
                <div className="w-75 row">
                  <div className="py-1">React</div>
                  <div className="py-1">Angular</div>
                  <div className="py-1">Node</div>
                  <div className="py-1">MySql</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center text-muted text-md-start">
                <div className="py-2 fs-5 fw-bold"> Usefull Links</div>
                <div className="w-75 row">
                  <div className="py-1">Detail</div>
                  <div className="py-1">Setting</div>
                  <div className="py-1">Help</div>
                  <div className="py-1">About</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center text-muted text-md-start">
                <div className="py-2 fs-5 fw-bold"> Contact</div>
                <div className="w-75 row">
                  <div className="py-1">
                    <MdHome />
                    <span className="ps-1">Ahmedabad, Gujrat, 380025</span>
                  </div>
                  <div className="py-1">
                    <MdMail />
                    <span className="ps-1">example@gmail.com</span>
                  </div>
                  <div className="py-1">
                    <MdCall />
                    <span className="ps-1">+9584545115415</span>
                  </div>
                  <div className="py-1">
                    <MdLink />
                    <span className="ps-1">OfficialWeb.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-top align-items-center">
        <div className="container pb-2 pt-3 text-center text-secondary">
          <span className="text-center">
            @Copyright: <span className="fw-bold">Sid@gmail.com</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
