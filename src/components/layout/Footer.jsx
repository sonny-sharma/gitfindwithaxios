import React from 'react';
const Footer = () => {
  const footerYear = new Date().getFullYear();



  return (
    <div>
    <footer className="footer bg-neutral p-10 text-primary-content footer-center">
    <div className="flex">
    <img src="../../images/SS.png" alt="" width="70" height="70" />
    <p>&copy; Copyright {footerYear} All Right reserved to Sonny Sharma</p>
    </div>
    

    </footer>

    </div>
  )
}

export default Footer