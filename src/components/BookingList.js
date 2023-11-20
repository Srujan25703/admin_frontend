import React, { useEffect, useState } from "react";
import Axios from "axios";
import BookingListRow from "./BookingListRow";

function BookingList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://platesandpleasure1.onrender.com/bookRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    background: "black", // Set background color to black
    color: "white", // Set font color to white
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#cda45e",
    color: "white",
  };

  const Listitems = () => {
    return arr.map((val, ind) => {
      return <BookingListRow obj={val} key={ind} />;
    });
  };

  return (
    <div style={{ background: "black", minHeight: "100vh", color: "white" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Phone Number</th>
            <th style={thStyle}>No of People</th>
            <th style={thStyle}>time</th>
            <th style={thStyle}>menu</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>{Listitems()}</tbody>
      </table>
    </div>
  );
}

export default BookingList;
