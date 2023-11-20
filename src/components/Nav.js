import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Nav() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/Login");
    }
  }, []);

  const styles = {
    navbar: {
      backgroundColor: "#cda45e",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      color: "#fff",
    },
    brand: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "1.5rem",
      margin: 0,
      padding: 0,
    },
    navList: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginLeft: "15px",
    },
    navLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "1rem",
    },
    signOutButton: {
      backgroundColor: "#555",
      color: "#fff",
      padding: "8px 15px",
      borderRadius: "5px",
      textDecoration: "none",
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/booking-list" style={styles.navLink}>
            Booking List
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact-list" style={styles.navLink}>
            Contact-List
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/cancel-list" style={styles.navLink}>
            Cancel List
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/create-user" style={styles.navLink}>
            Create User
          </Link>
        </li>
      </ul>
      <Link to="/" style={styles.brand}>
        <h3>Plates&Pleasure</h3>
      </Link>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link
            to="/"
            style={styles.signOutButton}
            onClick={() => {
              localStorage.clear();
              navigate("/Login");
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
