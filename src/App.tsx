import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './components/Loader';
import GetUsers from './components/GetUsers';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>

      <div className="App">
        {loading ? <Loader /> :
          <GetUsers />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
