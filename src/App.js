import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Trivia from './components/Trivia';
import Start from './components/Start';
import './styles/styles.css';

function App() {
  return (
    <>
      <Container fluid className="bg-dark vh-100">
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
