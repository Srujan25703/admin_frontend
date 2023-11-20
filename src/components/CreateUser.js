import { useState } from "react";
import CreateUserForm from "./CreateUserForm";
import Axios from "axios";

function CreateUser() {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = () => {
    const data = {
      email: arr[0],
      password: arr[1],
    };

    Axios.post("https://platesandpleasure1.onrender.com/register", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Record added successfully");
        } else {
          alert("Unexpected status code: " + res.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred while submitting the form");
      });
  };

  return (
    <div className="bg-dark text-white" style={{ height: "94.3vh" }}>
      <form onSubmit={handleSubmit}>
        <h1 class="text-center">Register</h1>
        <CreateUserForm getState={getState} />
      </form>
    </div>
  );
}

export default CreateUser;
