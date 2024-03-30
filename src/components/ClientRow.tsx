import React from 'react';
import { Client } from '../types/client';
import { Link } from 'react-router-dom';

// Define the ClientRow component
const ClientRow: React.FC<{client:Client}> = ({ client }) => {
  return (
    <tr key={client.id}>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phoneNumber}</td>
        <td>{client.address}</td>
        <td>
        <Link to={`/clients/${client.id}`}>View</Link>
        </td>
    </tr>
  );
};

export default ClientRow;
