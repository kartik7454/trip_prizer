import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import MainLayout from './layouts/MainLayout';
import Results from './pages/results.jsx';
// Pages and components


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>{/*nested in layout route */}
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;