import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Data from './data/data.json';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';

const App = () => {
  const destinationsData = Object.keys(Data.destinations).map(
    data => Data.destinations[Number(data)]
  );

  const crewsData = Object.keys(Data.crew).map(data => Data.crew[Number(data)]);

  const technologiesData = Object.keys(Data.technology).map(
    data => Data.technology[Number(data)]
  );

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination PageData={destinationsData} />}
        />
        <Route path="/crew" element={<Crew PageData={crewsData} />} />
        <Route
          path="/technology"
          element={<Technology PageData={technologiesData} />}
        />
      </Routes>
    </main>
  );
};

export default App;
