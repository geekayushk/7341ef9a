import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inbox from './pages/inbox';
import Archive from './pages/archive';
import "./App.css"
import Allcalls from './pages/allcalls';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allcalls />} />
          <Route path="/allcalls" element={<Allcalls />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
