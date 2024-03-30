import React from 'react';
import { useQuery } from 'react-query';
import { fetchClients } from '../services/ApiService';
import { Client } from '../types/client';
import ClientRow from './ClientRow';

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
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ClientTable;
