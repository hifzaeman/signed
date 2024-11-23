import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Signify. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#000",
    color: "#fff",
    width: "100%",
    borderTop: "1px solid #ccc",
  },
};

export default Footer;
