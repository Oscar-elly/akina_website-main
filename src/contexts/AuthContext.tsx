import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../lib/api';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const userData = await auth.getUser();
      setUser(userData);
      setLoading(false);
    };

    getInitialSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const data = await auth.login(email, password);
      localStorage.setItem('token', data.access_token);
      setUser({ email });
      return { error: null };
    } catch (error: any) {
      return { error: error.response?.data?.detail || 'Login failed' };
    }
  };

  const signOut = async () => {
    await auth.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
