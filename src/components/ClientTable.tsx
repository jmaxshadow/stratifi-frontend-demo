import React from 'react';
import { useQuery } from 'react-query';
import { fetchClients } from '../services/ApiService'; // Adjust the path as needed
import { Client } from '../types/client'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const ClientTable: React.FC = () => {
    const { data: clients, isLoading } = useQuery<Client[]>('clients', fetchClients);
    if (isLoading) return <div>Loading...</div>;
    if (!clients) return <div>No data</div>;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              <td>
                <Link to={`/clients/${client.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ClientTable;
