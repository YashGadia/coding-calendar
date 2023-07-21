import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path = "/" component = {HomePage} />
    </BrowserRouter>
  );
}

export default App;
