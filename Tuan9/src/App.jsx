import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lab01 from './pages/Lab01';
import Lab02 from './pages/Lab02';
import Lab03 from './pages/Lab03';
import Lab04 from './pages/Lab04';
import Lab05 from './pages/Lab05';

function App() {
  return (
    <BrowserRouter>
      <main className="w-full bg-gray-50 min-h-screen relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Lab01 />} />
          <Route path="/lab2" element={<Lab02 />} />
          <Route path="/lab3" element={<Lab03 />} />
          <Route path="/lab4" element={<Lab04 />} />
          <Route path="/lab5" element={<Lab05 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
