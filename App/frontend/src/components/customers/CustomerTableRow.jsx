import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ customer, fetchCustomers }) => {
  //Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  // Redirect to edit customers page
  const handleEdit = () => {
    // We can access the id (and query the customer) with useParams() in the UpdateCustomer component
    console.log("In TableRow, ln 11 | customer id", customer);
    navigate("/customers/edit/" + customer.customer_id, { state: { customer } });
  };

  const deleteRow = async () => {
    try {
      console.log("In TableRow, ln 19 | customer", customer.customer_id);
      const URL = import.meta.env.VITE_API_URL + "customers/" + customer.customer_id;
      const response = await axios.delete(URL);
      // Ensure that the customer was deleted successfully
      if (response.status === 204) {
        alert("Customer deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting customer!");
      console.log(err);
    }
    fetchCustomers();
  };

  return (
    <tr key={customer.customer_id}>
      <td>{customer.customerq}</td>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>
        <BiEditAlt onClick={handleEdit} size={25} style={{ cursor: "pointer" }} />
      </td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
