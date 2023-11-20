import { useState } from "react";

function CreateUserForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const arr = [email, password];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div className="container" style={{ maxWidth: "40%", margin: "0px auto" }}>
      <div className="form-group">
        <label htmlFor="name" className="text-white">
          Your email:
        </label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          id="name"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-white">
          password:
        </label>
        <input
          onChange={(event) => setPass(event.target.value)}
          id="email"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>

      <button
        onClick={handleClick}
        className="btn btn-success my-3 d-block mx-auto"
        type="submit"
      >
        Register
      </button>
    </div>
  );
}

export default CreateUserForm;
