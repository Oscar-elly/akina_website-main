import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { apiHelpers, ContactSubmission, Donation, ProgramParticipant, NewsletterSubscription } from '../lib/api';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  FileText,
  Mail,
  Image,
  Edit,
  Newspaper,
  Settings,
  LogOut,
  Menu,
  Upload,
  Download,
  Plus,
  Eye,
  Trash2,
  TrendingUp,
  Activity,
  Send} from 'lucide-react';

type TabType = 'dashboard' | 'contacts' | 'donations' | 'participants' | 'newsletters' | 'content' | 'images' | 'news' | 'settings';

const AdminDashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedNewsletters, setSelectedNewsletters] = useState<Set<string>>(new Set());
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [participants, setParticipants] = useState<ProgramParticipant[]>([]);
  const [newsletters, setNewsletters] = useState<NewsletterSubscription[]>([]);

  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Statistics
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalDonations: 0,
    totalParticipants: 0,
    totalNewsletters: 0,
    totalDonationAmount: 0
  });

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
        const [contactsData, donationsData, participantsData, newslettersData] = await Promise.all([
          apiHelpers.getContacts(),
          apiHelpers.getDonations(),
          apiHelpers.getParticipants(),
          apiHelpers.getNewsletters()
        ]);

        setContacts(contactsData);
        setDonations(donationsData);
        setParticipants(participantsData);
        setNewsletters(newslettersData);

        // Calculate statistics
        setStats({
          totalContacts: contactsData.length,
          totalDonations: donationsData.length,
          totalParticipants: participantsData.length,
          totalNewsletters: newslettersData.length,
          totalDonationAmount: donationsData.reduce((sum: number, d: Donation) => sum + Number(d.amount), 0)
        });
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoadingData(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const exportData = (data: any[], filename: string) => {
    const csv = [
      Object.keys(data[0] || {}).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSendEmail = async () => {
    if (selectedNewsletters.size === 0) {
      alert('Please select at least one newsletter subscriber');
      return;
    }

    if (!emailSubject.trim() || !emailMessage.trim()) {
      alert('Please fill in both subject and message');
      return;
    }

    setSendingEmail(true);
    try {
      const selectedEmails = newsletters
        .filter(n => selectedNewsletters.has(n.id.toString()))
        .map(n => n.email);

      // Here you would implement the email sending logic
      // For now, we'll just simulate it
      console.log('Sending email to:', selectedEmails);
      console.log('Subject:', emailSubject);
      console.log('Message:', emailMessage);
      console.log('Attachment:', selectedFile?.name);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      alert(`Email sent successfully to ${selectedEmails.length} subscribers!`);
      setShowEmailModal(false);
      setSelectedNewsletters(new Set());
      setEmailSubject('');
      setEmailMessage('');
      setSelectedFile(null);
    } catch (error) {
      alert('Failed to send email. Please try again.');
    } finally {
      setSendingEmail(false);
    }
  };

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, tab: 'dashboard' as TabType },
    { name: 'Contacts', icon: Users, tab: 'contacts' as TabType },
    { name: 'Donations', icon: DollarSign, tab: 'donations' as TabType },
    { name: 'Participants', icon: FileText, tab: 'participants' as TabType },
    { name: 'Newsletters', icon: Mail, tab: 'newsletters' as TabType },
    { name: 'Content', icon: Edit, tab: 'content' as TabType },
    { name: 'Images', icon: Image, tab: 'images' as TabType },
    { name: 'News & Updates', icon: Newspaper, tab: 'news' as TabType },
    { name: 'Settings', icon: Settings, tab: 'settings' as TabType },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalDonationAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Participants</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalParticipants}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Mail className="h-8 w-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Newsletter Subs</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalNewsletters}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="text-sm font-medium">New contact submission</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <Eye className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="text-sm font-medium">Donation received</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="text-sm font-medium">New participant enrolled</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
              <Users className="h-4 w-4 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <Plus className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-blue-600">Add News</p>
            </button>
            <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <Upload className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-green-600">Upload Image</p>
            </button>
            <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <Edit className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-purple-600">Edit Content</p>
            </button>
            <button className="p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <Download className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-600">Export Data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTable = (data: any[], columns: string[], title: string, exportFilename: string) => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={() => exportData(data, exportFilename)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row[col.toLowerCase().replace(/\s+/g, '_')] || 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderNewsletterTable = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Newsletter Subscriptions</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => exportData(newsletters, 'newsletters.csv')}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </button>
          <button
            onClick={() => setShowEmailModal(true)}
            disabled={selectedNewsletters.size === 0}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Email ({selectedNewsletters.size})
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedNewsletters.size === newsletters.length && newsletters.length > 0}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedNewsletters(new Set(newsletters.map(n => n.id.toString())));
                    } else {
                      setSelectedNewsletters(new Set());
                    }
                  }}
                  className="rounded"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscribed At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {newsletters.map((newsletter) => (
              <tr key={newsletter.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedNewsletters.has(newsletter.id.toString())}
                    onChange={(e) => {
                      const newSelected = new Set(selectedNewsletters);
                      if (e.target.checked) {
                        newSelected.add(newsletter.id.toString());
                      } else {
                        newSelected.delete(newsletter.id.toString());
                      }
                      setSelectedNewsletters(newSelected);
                    }}
                    className="rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{newsletter.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{newsletter.name || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(newsletter.subscribed_at).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{newsletter.is_active ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContent = () => {
    if (loadingData) {
      return <div className="text-center py-8">Loading data...</div>;
    }

    if (error) {
      return <div className="text-center py-8 text-red-600">{error}</div>;
    }

    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'contacts':
        return renderTable(
          contacts,
          ['Name', 'Email', 'Phone', 'Type', 'Message', 'Created At'],
          'Contact Submissions',
          'contacts.csv'
        );
      case 'donations':
        return renderTable(
          donations,
          ['Donor Name', 'Email', 'Amount', 'Currency', 'Status', 'Message', 'Created At'],
          'Donations',
          'donations.csv'
        );
      case 'participants':
        return renderTable(
          participants,
          ['Name', 'Age', 'Program Type', 'Location', 'Status', 'Enrolled At'],
          'Program Participants',
          'participants.csv'
        );
      case 'newsletters':
        return renderNewsletterTable();
      case 'content':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Content Management</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">About Section</h4>
                <textarea
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Update about section content..."
                />
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Update
                </button>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Mission Statement</h4>
                <textarea
                  className="w-full p-2 border rounded"
                  rows={3}
                  placeholder="Update mission statement..."
                />
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      case 'images':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Image Management</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Drag and drop images here, or click to select files</p>
              <input type="file" multiple accept="image/*" className="hidden" id="image-upload" />
              <label htmlFor="image-upload" className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
                Select Images
              </label>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-4">Uploaded Images</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Placeholder for uploaded images */}
                <div className="border rounded p-2">
                  <img src="/assets/child1.jpg" alt="Sample" className="w-full h-20 object-cover rounded" />
                  <p className="text-xs mt-1">child1.jpg</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">News & Updates</h3>
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add News
              </button>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Sample News Title</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Sample news content...</p>
                <p className="text-xs text-gray-500">Published: 2024-01-15</p>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Site Title</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="Akina Ties" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Contact Email</label>
                <input type="email" className="w-full p-2 border rounded" defaultValue="enquiry@akinaties.org" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Maintenance Mode</label>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Enable maintenance mode</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Save Settings
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Send Email to Subscribers</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Email subject..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Email message..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Attachment (optional)</label>
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  className="w-full p-2 border rounded"
                />
                {selectedFile && (
                  <p className="text-sm text-gray-600 mt-1">Selected: {selectedFile.name}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={() => setShowEmailModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSendEmail}
                disabled={sendingEmail}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {sendingEmail ? 'Sending...' : 'Send Email'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform">
            <SidebarContent navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:block">
        <div className="flex flex-col h-full bg-white shadow-lg">
          <SidebarContent navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="ml-2 lg:ml-0 text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user.email}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const SidebarContent = ({ navigation, activeTab, setActiveTab }: {
  navigation: any[],
  activeTab: TabType,
  setActiveTab: (tab: TabType) => void
}) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
      <h2 className="text-lg font-semibold text-white">Akina Admin</h2>
    </div>
    <nav className="flex-1 px-4 py-6 space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.tab)}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === item.tab
                ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Icon className="h-5 w-5 mr-3" />
            {item.name}
          </button>
        );
      })}
    </nav>
  </div>
);

export default AdminDashboard;
