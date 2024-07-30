import { Customer } from "@/constants/Customers";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Table.scss";

interface TableProps {
  data: Customer[];
  rowsPerPage: number;
  page: number;
  handleChangePage: (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => void;
}
export const Table: React.FC<TableProps> = ({
  data,
  rowsPerPage,
  page,
  handleChangePage,
}) => {
  const startIndex = page * rowsPerPage;
  const selectedData = data.slice(startIndex, startIndex + rowsPerPage);
  const endIndex = startIndex + selectedData.length;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {selectedData.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerName}</td>
              <td>{customer.company}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              {customer.status === "Active" ? (
                <td className="status_active">
                  <p>{customer.status}</p>
                </td>
              ) : (
                <td className="status_inactive">
                  <p>{customer.status}</p>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination_info_container">
        <span>
          Showing data {startIndex + 1} to {endIndex} of {data.length} entries
        </span>

        <Stack spacing={2} className="pagination">
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page + 1}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};
