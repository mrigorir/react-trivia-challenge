import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Trivia from './components/Trivia';
import Start from './components/Start';
import './styles/styles.css';

library.add(fas);

function App() {
  return (
    <>
      <Container fluid className="bg-dark">
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
