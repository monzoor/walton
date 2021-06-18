import { Link } from 'react-router-dom';

import { Logo } from '@components';

import contact from 'assets/images/contact.jpg';
import payment from 'assets/images/payment.jpg';

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <Logo />
              <p className="text-muted small lh-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, odit dolores. Maiores hic saepe, iure quos quae
                cupiditate, ratione voluptas repellat animi.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube text-muted fs-4 bg-light rounded-circle p-3"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-muted fs-4 bg-light rounded-circle p-3"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-muted fs-4 bg-light rounded-circle p-3"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook text-muted fs-4 bg-light rounded-circle p-3"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin text-muted fs-4 bg-light rounded-circle p-3"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <p className="lean fw-bold">QUICK LINKS</p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  About us
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Contact Us
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Products
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Login
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Sign-Up
                </Link>
              </p>
            </div>
            <div className="col-6">
              <p className="lean fw-bold">CUSTOM AREA</p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  My Account
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Orders
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Tracking List
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Term
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  Privacy Policy
                </Link>
              </p>
              <p className="mb-2">
                <Link to="/" className="small link-muted">
                  My Cart
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <p className="lean fw-bold">CONTACT INFO</p>
          <div className="row">
            <div className="col-12">
              <p className="text-muted small lh-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, odit dolores. Maiores hic saepe, iure quos quae
                cupiditate, ratione voluptas repellat animi.
              </p>
            </div>
            <div className="col-12">
              <img src={contact} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between align-items-center my-5">
        <div className="col-auto small">
          <span>© 2015 - {new Date().getFullYear()}</span>
          <span className="mx-1 text-primary">Jusako.</span>
          <span>All Rights Reserved.</span>
        </div>
        <div className="col-auto">
          <span className="small">Payment</span>
          <img
            src={payment}
            className="img-fluid ms-2"
            style={{ width: '230px' }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
