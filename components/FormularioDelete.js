// DeleteBusinessForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteBusinessForm = () => {
  const [message, setMessage] = useState('');
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/empresas/controller');
        setCompanies(response.data || []);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleDelete = async () => {
    try {
      if (!selectedCompany) {
        setMessage('Please select a company');
        return;
      }

      const response = await axios.delete(`/api/empresas/controller?id=${selectedCompany}`);
      setMessage(response.data);

      // Refresh the companies list after deletion
      const updatedCompanies = companies.filter((company) => company.id !== selectedCompany);
      setCompanies(updatedCompanies);

      // Reset the selected company
      setSelectedCompany('');
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.error || 'Something went wrong'}`);
    }
  };

  const styles = {
    container: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: 'auto',
      color: 'black',
      border: '1px solid black',
    },
    select: {
      width: '100%',
      padding: '8px',
      margin: '8px 0',
      boxSizing: 'border-box',
      border: '1px solid black',
      borderRadius: '5px',
      backgroundColor: 'white',
      color: 'black',
    },
    button: {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Delete Business</h2>
      <label>
        Select Business:
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          style={styles.select}
        >
          <option value="" disabled>Select a company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete} style={styles.button} disabled={!selectedCompany}>
        Delete Business
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteBusinessForm;