import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  function handleSideBarToggle() {
    setShowSideBar(!showSideBar);
  }

  useEffect(() => {
    async function fetchImage() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const cachedData = JSON.parse(localStorage.getItem(localKey));
        setApiData(cachedData);
        setLoading(false); 
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        localStorage.setItem(localKey, JSON.stringify(data)); 
        setApiData(data);
      } catch (err) {
        setError(err.message); 
        console.log(err.message);
      } finally {
        setLoading(false); 
      }
    }
    fetchImage();
  }, []);

  return (
    <>
      {loading && (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {!loading && error && (
        <div className="errorState">
          <p>Error: {error}</p>
        </div>
      )}
      {!loading && !error && apiData && <Main apiData={apiData} />}
      {showSideBar && <SideBar handleSideBarToggle={handleSideBarToggle} apiData={apiData} />}
      {!loading && apiData && <Footer handleSideBarToggle={handleSideBarToggle} apiData={apiData} />}
    </>
  );
}

export default App;
