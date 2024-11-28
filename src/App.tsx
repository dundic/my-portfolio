import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Posts} from "./layout/sections/posts/Posts";
import {Footer} from "./layout/footer/Footer";
import {Works} from "./layout/sections/works/Works";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";
import './App.css';


function App() {
    return (
            <div className="App">
                <Particle/>
                <Header/>
                <Main/>
                <Posts/>
                <Works/>
                <Footer/>
                <GoTopBtn/>
            </div>
    );
}

export default App;

