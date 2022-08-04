import React from "react";

const Footer = () => {
  let today = new Date();
  return (
    <footer>
      <h3>Ayomide Salami Copyright &copy; {today.getFullYear()}</h3>
    </footer>
  );
};

export default Footer;
