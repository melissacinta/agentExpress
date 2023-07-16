import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
