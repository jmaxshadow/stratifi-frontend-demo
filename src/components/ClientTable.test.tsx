import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ClientTable from './ClientTable';
import { BrowserRouter } from 'react-router-dom';

// Mock your API service
jest.mock('../services/ApiService', () => ({
  fetchClients: (async ()=>{
    return [
        { id: '1', name: 'Jose Machado', email: 'jose.r.machado.m@example.com', phoneNumber: '123-456-7890', address: '123 Main St, Anytown, USA' },
        { id: '2', name: 'John Doe', email: 'john.doe@example.com', phoneNumber: '222-222-2222', address: '456 Second St, Anothertown, USA' },
        { id: '3', name: 'Jane Doe', email: 'jane.doe@example.com', phoneNumber: '555-555-5555', address: '789 Third St, Finaltown, USA' }
    ];
    }),
  })
);

const queryClient = new QueryClient()

const renderClientTable = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ClientTable />
      </BrowserRouter>
    </QueryClientProvider>,
  );

describe('ClientTable', () => {
  test('displays a list of clients', async () => {
    renderClientTable();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
  
});
