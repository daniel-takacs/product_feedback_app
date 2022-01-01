import './global.css';
import Home from './components/Home/Home';
import CreateFeedback from './components/CrateFeedback/CreateFeedback';
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
