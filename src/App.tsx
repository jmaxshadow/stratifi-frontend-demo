import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext'; // Adjust the path as needed
import ProtectedRoute from './utils/ProtectedRoute'; // Adjust the path as needed
import LoginForm from './components/LoginForm';
import ClientTable from './components/ClientTable';
import ClientProfile from './components/ClientProfile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoute />}>
            {/* Protected routes nested inside */}
            <Route path="/clients" element={<ClientTable />} />
            <Route path="/clients/:id" element={<ClientProfile />} />
          </Route>
          {/* Redirect non-matching paths to Login, can be adjusted as needed */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;