import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <Home />
                <About />
                <Experience />
                <Skills />
                <ContactMe />
            </main>
        </div>
    );
}

export default App;
