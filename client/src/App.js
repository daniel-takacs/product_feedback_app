import './global.css';
import Home from './Pages/Home/Home';
import CreateFeedback from './Pages/AddFeedback/CreateFeedback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateFeedback />} />
        </Routes>
  
      </Router>
    </div>
  );
}

export default App;
