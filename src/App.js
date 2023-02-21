
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {ThemeProvider} from "./context/ThemeContext";
import Page from './pages/page';
function App() {
  return (
    <div className="App">
       <ThemeProvider >
        <Header />
          <Page />
          <Footer />
       </ThemeProvider>
    </div>
  );
}

export default App;
