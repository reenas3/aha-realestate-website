import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  tag: string;
}

export default function AdminNews() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [newItem, setNewItem] = useState({
    title: '',
    content: '',
    tag: 'Announcement'
  });
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Load news items from localStorage
    const savedNews = localStorage.getItem('newsItems');
    if (savedNews) {
      setNewsItems(JSON.parse(savedNews));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection (you should use a more secure method in production)
    if (password === 'admin123') { // You should change this to a secure password
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNewsItem: NewsItem = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      ...newItem
    };

    const updatedNews = [newNewsItem, ...newsItems];
    setNewsItems(updatedNews);
    localStorage.setItem('newsItems', JSON.stringify(updatedNews));
    setNewItem({ title: '', content: '', tag: 'Announcement' });
  };

  const handleDelete = (id: number) => {
    const updatedNews = newsItems.filter(item => item.id !== id);
    setNewsItems(updatedNews);
    localStorage.setItem('newsItems', JSON.stringify(updatedNews));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage News</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
          >
            Back to Site
          </button>
        </div>

        {/* Add New News Item Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New News Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                value={newItem.content}
                onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
                Tag
              </label>
              <select
                id="tag"
                value={newItem.tag}
                onChange={(e) => setNewItem({ ...newItem, tag: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Announcement</option>
                <option>Project Update</option>
                <option>Partnership</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add News Item
            </button>
          </form>
        </div>

        {/* News Items List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Current News Items</h2>
          <div className="space-y-4">
            {newsItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mt-2">
                      {item.tag}
                    </span>
                    <p className="mt-2 text-gray-600">{item.content}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 