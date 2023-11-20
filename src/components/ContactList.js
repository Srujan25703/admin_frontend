import Axios from "axios";
import { useEffect, useState } from "react";
import ContactListRow from "./ContactListRow";
function ContactList() {
  const [arr1, setArr1] = useState([]);
  useEffect(() => {
    Axios.get("https://platesandpleasure1.onrender.com/contactRoute/")
      .then((res) => {
        if (res.status === 200) setArr1(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);
  const Listitems1 = () => {
    return arr1.map((val, ind) => {
      return <ContactListRow obj={val} />;
    });
  };
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    paddingTop: "20px",
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
  return (
    <div style={{ background: "black", minHeight: "100vh", color: "white" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Subject</th>
            <th style={thStyle}>Message</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>{Listitems1()}</tbody>
      </table>
    </div>
  );
}
export default ContactList;
