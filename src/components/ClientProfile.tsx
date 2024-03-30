import React from 'react';
import { useParams, redirect } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchClient, fetchClientAccounts } from '../services/ApiService'; // Adjust import paths as needed

const ClientProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    // Redirect to the clients page if the client ID is not provided
    redirect('/clients');
  }
  
  // Fetch client details
  const {
    data: client,
    isLoading: isLoadingClient,
    isError: isErrorClient,
  } = useQuery(['client', id], () => fetchClient(id ?? ''));

  // Fetch client's accounts
  const {
    data: accounts,
    isLoading: isLoadingAccounts,
    isError: isErrorAccounts,
  } = useQuery(['accounts', id], () => fetchClientAccounts(id ?? ''), {
    // This line ensures the query only runs if `id` is not undefined.
    enabled: !!id,
  });

  if (isLoadingClient || isLoadingAccounts) return <div>Loading...</div>;
  if (isErrorClient || isErrorAccounts) return <div>Error fetching data</div>;

  // Render client profile and accounts
  return (
    <div>
      {client && (
        <section>
          <h2>Client Profile</h2>
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone Number:</strong> {client.phoneNumber}</p>
          <p><strong>Address:</strong> {client.address}</p>
        </section>
      )}
      <section>
        <h2>Accounts</h2>
        {!accounts ? (
          <p>Loading...</p>
        ) :
        accounts.length > 0 ? (
          <ul>
            {accounts.map((account) => (
              <li key={account.id}>
                <strong>{account.name}</strong> (#{account.number}) - Value: ${account.value.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No accounts found.</p>          
        )}
      </section>
    </div>
  );
};

export default ClientProfile;