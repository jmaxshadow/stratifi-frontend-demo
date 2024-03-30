import { Client } from '../types/client';
import { Account } from '../types/account';

// Dummy data arrays
const clients: Client[] = [
  { id: '1', name: 'Jose Machado', email: 'jose.r.machado.m@example.com', phoneNumber: '123-456-7890', address: '123 Main St, Anytown, USA' },
  { id: '2', name: 'John Doe', email: 'john.doe@example.com', phoneNumber: '222-222-2222', address: '456 Second St, Anothertown, USA' },
  { id: '3', name: 'Jane Doe', email: 'jane.doe@example.com', phoneNumber: '555-555-5555', address: '789 Third St, Finaltown, USA' },
  // Add more clients...
];

const accounts: Account[] = [
  { id: '1', clientId: '1', name: 'Savings Account', number: '12345678', value: 1000.00 },
  { id: '2', clientId: '1', name: 'Savings Account', number: '11111111', value: 2000.00 },
  { id: '3', clientId: '1', name: 'Checking Account', number: '22222222', value: 3000.00 },
  { id: '4', clientId: '2', name: 'Checking Account', number: '33333333', value: 4000.00 },
  { id: '5', clientId: '2', name: 'Checking Account', number: '44444444', value: 5000.00 },
  { id: '6', clientId: '3', name: 'Savings Account', number: '55555555', value: 6000.00 },
  { id: '7', clientId: '3', name: 'Savings Account', number: '66666666', value: 7000.00 },
  { id: '8', clientId: '3', name: 'Savings Account', number: '77777777', value: 8000.00 }
  // Add more accounts linked to clients...
];

export const fetchClients = async (): Promise<Client[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(clients), 1000);
  });
};

export const fetchClient = async (clientId: string): Promise<Client> => {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const client = clients.find(client => client.id === clientId);
      if (client) {
        resolve(client);
      } else {
        reject(new Error('Client not found'));
      }
    }, 1000);
  });
};

export const fetchClientAccounts = async (clientId: string): Promise<Account[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(accounts.filter(account => account.clientId === clientId)), 1000);
  });
};
