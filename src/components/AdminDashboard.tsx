import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { apiHelpers, ContactSubmission, Donation, ProgramParticipant, NewsletterSubscription } from '../lib/api';

const AdminDashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'contacts' | 'donations' | 'participants' | 'newsletters'>('contacts');

  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [participants, setParticipants] = useState<ProgramParticipant[]>([]);
  const [newsletters, setNewsletters] = useState<NewsletterSubscription[]>([]);

  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      setError(null);
      try {
        switch (activeTab) {
          case 'contacts':
            const contactsData = await apiHelpers.getContacts();
            setContacts(contactsData);
            break;
          case 'donations':
            const donationsData = await apiHelpers.getDonations();
            setDonations(donationsData);
            break;
          case 'participants':
            const participantsData = await apiHelpers.getParticipants();
            setParticipants(participantsData);
            break;
          case 'newsletters':
            const newslettersData = await apiHelpers.getNewsletters();
            setNewsletters(newslettersData);
            break;
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoadingData(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [activeTab, user]);

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const renderTable = () => {
    if (loadingData) {
      return <div className="text-center py-8">Loading data...</div>;
    }

    if (error) {
      return <div className="text-center py-8 text-red-600">{error}</div>;
    }

    switch (activeTab) {
      case 'contacts':
        return (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="py-2 px-4 border">{contact.name}</td>
                  <td className="py-2 px-4 border">{contact.email}</td>
                  <td className="py-2 px-4 border">{contact.phone || 'N/A'}</td>
                  <td className="py-2 px-4 border">{contact.type}</td>
                  <td className="py-2 px-4 border">{contact.message}</td>
                  <td className="py-2 px-4 border">{new Date(contact.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'donations':
        return (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Donor Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Amount</th>
                <th className="py-2 px-4 border">Currency</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="py-2 px-4 border">{donation.donor_name}</td>
                  <td className="py-2 px-4 border">{donation.donor_email}</td>
                  <td className="py-2 px-4 border">{donation.amount}</td>
                  <td className="py-2 px-4 border">{donation.currency}</td>
                  <td className="py-2 px-4 border">{donation.status}</td>
                  <td className="py-2 px-4 border">{donation.message || 'N/A'}</td>
                  <td className="py-2 px-4 border">{new Date(donation.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'participants':
        return (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Age</th>
                <th className="py-2 px-4 border">Program Type</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Enrolled At</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <td className="py-2 px-4 border">{participant.name}</td>
                  <td className="py-2 px-4 border">{participant.age}</td>
                  <td className="py-2 px-4 border">{participant.program_type}</td>
                  <td className="py-2 px-4 border">{participant.location}</td>
                  <td className="py-2 px-4 border">{participant.status}</td>
                  <td className="py-2 px-4 border">{new Date(participant.enrolled_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'newsletters':
        return (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Subscribed At</th>
                <th className="py-2 px-4 border">Active</th>
              </tr>
            </thead>
            <tbody>
              {newsletters.map((newsletter) => (
                <tr key={newsletter.id}>
                  <td className="py-2 px-4 border">{newsletter.email}</td>
                  <td className="py-2 px-4 border">{newsletter.name || 'N/A'}</td>
                  <td className="py-2 px-4 border">{new Date(newsletter.subscribed_at).toLocaleString()}</td>
                  <td className="py-2 px-4 border">{newsletter.is_active ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </header>
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user.email}</h2>
        <div className="mb-4">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 rounded ${activeTab === 'contacts' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Contacts
            </button>
            <button
              onClick={() => setActiveTab('donations')}
              className={`px-4 py-2 rounded ${activeTab === 'donations' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Donations
            </button>
            <button
              onClick={() => setActiveTab('participants')}
              className={`px-4 py-2 rounded ${activeTab === 'participants' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Participants
            </button>
            <button
              onClick={() => setActiveTab('newsletters')}
              className={`px-4 py-2 rounded ${activeTab === 'newsletters' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Newsletters
            </button>
          </nav>
        </div>
        <div className="overflow-x-auto">
          {renderTable()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
