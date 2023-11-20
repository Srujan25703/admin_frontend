import React, { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import BookingList from "./components/BookingList";
import CancelList from "./components/CancelList";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";

function App() {
  // Initialize isLoggedIn state with value from localStorage
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // useEffect to update localStorage when isLoggedIn changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Implement your login logic here
    // For now, let's simulate a successful login
    setLoggedIn(true);
  };

  return (
    <div>
      <HashRouter>
        {isLoggedIn && <Nav />}
        <Routes>
          {!isLoggedIn && (
            <Route
              path="/"
              element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
            />
          )}
          {isLoggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/booking-list" element={<BookingList />} />
              <Route path="/contact-list" element={<ContactList />} />
              <Route path="/cancel-list" element={<CancelList />} />
              <Route path="/create-user" element={<CreateUser />} />
            </>
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
