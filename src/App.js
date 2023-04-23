
import './App.css';
import NewsHome from './Pages/NewsHome';
import { Routes, Route } from 'react-router-dom';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NewsHome />} />
        <Route path='/:details' element={<NewsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
