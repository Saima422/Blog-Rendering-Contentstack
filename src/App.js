import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content-wrap">
        <AppRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
