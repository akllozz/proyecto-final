import './App.css'
import Buscador from './components/Buscador.jsx'
import MiApi from './components/MiApi.jsx'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  return (
    <>
    <div className="container">
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="DigiBG">
          <Navbar.Brand></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
      {/*<Buscador />*/}
      <MiApi />
    </div>
    </>
  )
};

export default App
