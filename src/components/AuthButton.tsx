// components/AuthButton.tsx

import React, { useState } from 'react';
import authenticate from '@/lib/api/authentication';

const AuthButton: React.FC = () => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const handleAuthenticate = async () => {
    setIsAuthenticating(true);
    try {
      // Call the authenticate function to authenticate the user
      await authenticate();
      // Authentication successful
      setAuthError(null);
      setIsAuthenticating(false);
      alert('Authentication successful!');
    } catch (error) {
      // Authentication failed
      setAuthError('Authentication failed. Please try again.');
      setIsAuthenticating(false);
      console.error('Authentication error:', error);
    }
  };

  return (
    <button onClick={handleAuthenticate} disabled={isAuthenticating}>
      {isAuthenticating ? 'Authenticating...' : 'Authenticate'}
      {authError && <p>{authError}</p>}
    </button>
  );
};

export default AuthButton;
