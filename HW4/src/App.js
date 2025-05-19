import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
  { field: 'email', headerName: 'Email', width: 200 }
];

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const transformed = data.map((item, index) => ({
          id: item.id,
          name: item.name,
          age: 20 + index, 
          email: item.email
        }));
        setRows(transformed);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>React DataGrid 表格作業</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default App;