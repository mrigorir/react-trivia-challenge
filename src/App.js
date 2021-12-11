import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trivia from './components/Trivia';
import Start from './components/Start';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
