import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Logo from './components/Logo';
import Product from './components/Product';
import  {AdminLayout} from "./components/layouts/Admin-layout";
import { AdminUsers } from "./components/layouts/Admin-Users";
import { AdminContacts } from "./components/layouts/Admin-Contacts";
import { AdminLogo } from './components/layouts/Admin-logo';
function App() {
  return (
    <div className="App">
    <BrowserRouter >
     <Nav />
        <Routes>
          <Route  path="/" element={<Product/>}></Route>
          <Route path="/add" element={<h1>Add Poducts Componenets</h1>}></Route>
          <Route path="/update" element={<Logo/>}></Route>
          <Route path="/logout" element={<h1>Logout Componenets</h1>}></Route>
          <Route path="/profile" element={<h1>Proile Componenets</h1>}></Route>
          <Route path="signUp" element={<SignUp/>}></Route>
        
        <Route path="/admin" element=<AdminLayout /> >
        <Route path ="users" element={<AdminUsers />}/>
        <Route path ="contacts" element={<AdminContacts />}/>
        <Route path="logo" element={<AdminLogo/>}/>

        </Route>      
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
