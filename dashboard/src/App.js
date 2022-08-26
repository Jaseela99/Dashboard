import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Users from './components/Users';
import Orders from './components/Orders';
import User1 from './components/User1';
import User2 from './components/User2';
import User3 from './components/User3';
import Order1 from './components/Order1';
import Order2 from './components/Order2';
import Order3 from './components/Order3';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
<Route exact path="/users" element={<Users/>}/>
<Route exact path="/orders" element={<Orders/>}/>
<Route exact path="/users/user1" element={<User1/>}/>
<Route exact path="/users/user2" element={<User2/>}/>
<Route exact path="/users/user3" element={<User3/>}/>
<Route exact path="/orders/order1" element={<Order1/>}/>
<Route exact path="/orders/order2" element={<Order2/>}/>
<Route exact path="/orders/order3" element={<Order3/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
