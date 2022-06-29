import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Layout/Container';
import Routes from './routes/routes';
function App() {
    return (
        <Container>
            <Router>
                <Routes />
            </Router>
        </Container>
    );
}

export default App;
