'use client';
import './CustomersPage.scss';
import search from '@/assets/icons/search.svg';
import { Table } from '@/components/ui/Table/Table';
import { CUSTOMERS } from '@/constants';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            color: '#808080',
            fontWeight: '500'
          },
          '& .MuiPaginationItem-outlined': {
            color: '#404B52',
            backgroundColor: '#F5F5F5',
            borderColor: '#EEEEEE !important'
          },
          '& .MuiPaginationItem-ellipsis': {
            color: '#404B52',
            backgroundColor: '#ffffff',
            borderColor: '#5932EA'
          },
          '& .Mui-selected': {
            color: '#ffffff !important',
            backgroundColor: '#5932EA !important'
          }
        }
      }
    }
  }
});

export const CustomersPage = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(CUSTOMERS);

  useEffect(() => {
    const filtered = CUSTOMERS.filter((customer) =>
      Object.values(customer).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredCustomers(filtered);
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage - 1);
  };
  return (
    <div className="customers-page">
      <div className="customers-header">
        <div className="customers-description">
          <h1>All Customers</h1>
          <p>Active Members</p>
        </div>
        <div className="customers-search">
          <div className="input">
            <input
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img className="icon" src={search}></img>
          </div>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <div className="customers-table">
          <Table
            data={filteredCustomers}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
          />
        </div>
      </ThemeProvider>
    </div>
  );
};
