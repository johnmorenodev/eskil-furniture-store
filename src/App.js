import './App.css';
import Home from './pages/Home';
import Header from './components/shared/Header';

function App() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Home />
      </div>
    </>
  );
}

export default App;
