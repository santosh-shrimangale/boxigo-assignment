// src/App.js
import './index.css';
import Sidebar from './components/SideBar';
import Details from './components/Details';
import { useEffect, useState } from 'react';
import { fetchData } from './services/API';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <img className='spinner' src='./Spinner.svg'/>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const { Customer_Estimate_Flow } = data
  return (
    <div className='container grid grid-flow-col'>
      <Sidebar />
      <Details myMoves={Customer_Estimate_Flow} />
    </div>
  );
}

export default App;
