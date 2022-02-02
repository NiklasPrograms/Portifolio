import './App.css';
import { Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        Niklas Aavad
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;