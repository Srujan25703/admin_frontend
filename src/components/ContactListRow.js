import Axios from "axios";
function ContactListRow(props) {
  const { _id, name, email, subject, message } = props.obj;

  const handleClick = () => {
    Axios.delete(
      "https://platesandpleasure1.onrender.com/contactRoute/delete-contact/" +
        _id
    ).then((res) => {
      if (res.status === 200) {
        alert("Record deleted");
        window.location.reload();
      } else Promise.reject();
    });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{subject}</td>
      <td>{message}</td>
      <td>
        <button class="btn btn-success">Edit</button>
        <button onClick={handleClick} class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactListRow;
