import "./Footer.css"

export default function() {
    return(
        <div className="footer">
        <div className="top">
          <div className="footerItem">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="footerItem">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="footerItem">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </span>
          </div>
          <div className="footerItem">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">Shopify</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img className = "footerImg"src="/img/payment.png" alt="" />
          </div>
        </div>
      </div>
    );
  };
    