import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Posts} from "./layout/sections/posts/Posts";
import {Works} from "./layout/sections/works/Works";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
            <div className="App">
                <Header/>
                <Main/>
                <Posts/>
                <Works/>
                <Footer/>
            </div>
    );
}

export default App;

