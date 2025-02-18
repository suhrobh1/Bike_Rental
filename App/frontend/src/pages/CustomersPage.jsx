import { Routes, Route, Link } from "react-router-dom";

import CustomersTable from "../components/customers/CustomersTable";
import UpdateCustomer from "../components/customers/UpdateCustomer";

function CustomersPage() {
  return (
    <div>
      <h1>Customer Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/customers">Customer table</Link>
          </li>
          <li>
            <Link to="/customer/add">Add BSG Person</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CustomersTable />} />
      
        <Route path="/edit/:id" element={<UpdateCustomer />} /> 
      </Routes>
    </div>
  );
}

export default CustomersPage;
