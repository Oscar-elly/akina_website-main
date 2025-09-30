import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'general' | 'volunteer' | 'donation' | 'partnership';
  created_at: string;
}

export interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  amount: number;
  currency: string;
  message?: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  name?: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface ProgramParticipant {
  id: string;
  name: string;
  age: number;
  program_type: string;
  location: string;
  status: 'active' | 'completed' | 'pending';
  enrolled_at: string;
}

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  },
  logout: async () => {
    localStorage.removeItem('token');
  },
  getUser: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Optionally, decode or verify with backend
    return { email: 'admin@example.com' }; // Placeholder
  },
};

export const apiHelpers = {
  postContact: async (data: Omit<ContactSubmission, 'id' | 'created_at'>) => {
    const response = await api.post('/api/contacts', data);
    return response.data;
  },
  postDonation: async (data: Omit<Donation, 'id' | 'created_at'>) => {
    const response = await api.post('/api/donations', data);
    return response.data;
  },
  postNewsletter: async (data: Omit<NewsletterSubscription, 'id' | 'subscribed_at' | 'is_active'>) => {
    const response = await api.post('/api/newsletters', data);
    return response.data;
  },
  postParticipant: async (data: Omit<ProgramParticipant, 'id' | 'enrolled_at'>) => {
    const response = await api.post('/api/participants', data);
    return response.data;
  },
  getContacts: async () => {
    const token = localStorage.getItem('token');
    const response = await api.get('/api/contacts', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  getDonations: async () => {
    const token = localStorage.getItem('token');
    const response = await api.get('/api/donations', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  getParticipants: async () => {
    const token = localStorage.getItem('token');
    const response = await api.get('/api/participants', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  getNewsletters: async () => {
    const token = localStorage.getItem('token');
    const response = await api.get('/api/newsletters', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
};

export const adminHelpers = {
  createAdmin: async (email: string, password: string, role: string = 'admin') => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication required');
    }
    const response = await api.post('/api/admin/create', { email, password, role }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
};
