import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {

  return (
      <div>
            <BrowserRouter>

              <Routes>
                <Route index element={<Home />} />
              </Routes>
            </BrowserRouter>

              {/* FOOTER */}
      <footer className="w-full bg-white text-black text-center py-6">
        <p className="text-lg tracking-wide regular">© 2025 scme</p>
      </footer>
      </div>
  );
};

export default App;