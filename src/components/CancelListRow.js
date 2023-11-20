import Axios from "axios";
function CancelListRow(props) {
  const { _id, name, email, phoneNumber, reason } = props.obj;

  const handleClick = () => {
    Axios.delete(
      "https://platesandpleasure1.onrender.com/cancelRoute/delete-cancel/" + _id
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
      <td>{phoneNumber}</td>
      <td>{reason}</td>
      <td>
        <button class="btn btn-success">Edit</button>
        <button onClick={handleClick} class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CancelListRow;
