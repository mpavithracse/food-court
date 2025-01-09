import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Header from './HeaderComp/Header';
import Footer from './FooterComp/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
