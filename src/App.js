import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Usercard1 } from './components/Usercard1';
import Usercard2 from './components/Header2';
import { Signup } from './components/Signup';
import{ BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Login } from './components/Login';



function App() {
  return (
    <div className="App">
     
     <Router>
       <Routes>
       <Route path="/"  element={< Header />}></Route>
       <Route path="/card1"  element={<Header/>}></Route>
       <Route path="/card2"  element={< Usercard2 />}></Route>
       <Route path="/login"  element={< Login />}></Route>
       <Route path="/signup"  element={< Signup />}></Route>
       </Routes>
     </Router>
     {/* < Usercard1/> <Usercard2/>*/}
      
     
     {/* <Signup/> <Login/>*/}
    

    </div>
  );
}

export default App;
