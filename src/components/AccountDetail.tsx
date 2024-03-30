import React from 'react';
import { Account } from '../types/account';

// Define the AccountDetail component
const AccountDetail: React.FC<{ account: Account }> = ({ account }) => {
  return (
    <li>
      <strong>{account.name}</strong> (#{account.number}) - Value: ${account.value.toFixed(2)}
    </li>
  );
};

export default AccountDetail;
