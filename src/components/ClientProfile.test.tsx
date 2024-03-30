import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ClientProfile from './ClientProfile';
import { wait } from '@testing-library/user-event/dist/types/utils';

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
}));

// Mock your API service
jest.mock('../services/ApiService', () => ({
  fetchClient: (async ()=>{
    return {
      id: '1', name: 'Jose Machado', email: 'jose.r.machado.m@example.com', phoneNumber: '123-456-7890', address: '123 Main St, Anytown, USA'
    };
  }),
  fetchClientAccounts: (async ()=>{
    return [
      { id: '1', clientId: '1', name: 'Savings Account', number: '12345678', value: 1000.00 },
      { id: '2', clientId: '1', name: 'Savings Account', number: '11111111', value: 2000.00 },
      { id: '3', clientId: '1', name: 'Checking Account', number: '22222222', value: 3000.00 },
      // Add more mock accounts as needed
    ];
  }),
}));

const queryClient = new QueryClient();

const renderClientProfile = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/clients/1']}>
        <Routes> {/* Wrap Route inside Routes */}
          <Route path="/clients/:id" element={<ClientProfile />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );

describe('ClientProfile', () => {
  it('displays client details and accounts', async () => {
    renderClientProfile();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Jose Machado')).toBeInTheDocument();
    });

    await waitFor(() => {
      // There must be 2 Savings Accounts
      expect(screen.getAllByText('Savings Account')).toHaveLength(2);
    });
    
    // Add more assertions as needed
  });

  // Add more tests as needed
});
