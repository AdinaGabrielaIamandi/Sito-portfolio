import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FirstPart } from "./components/FirstPart";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="containerAllPage">
      <FirstPart />
    </Container>
  );
}

export default App;
