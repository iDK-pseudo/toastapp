import './App.css';
import { NavBar } from './components/NavBar.jsx';
import BottomNavBar from './components/BottomNavBar.jsx';
import { useState } from 'react';
import Orders from './screens/Orders.jsx';
import PlaceOrder from './components/PlaceOrder.jsx';


function App() {

  const [showOrders, setShowOrders] = useState(false);

  const handleOrdersClick = () =>{
    setShowOrders(true);
  }

  const handleBack = () => {
    setShowOrders(false);
  }

  return (
    <div className="App">
      {!showOrders && <NavBar/>}
      {showOrders && <Orders handleBack={handleBack}/>}
      {!showOrders && <BottomNavBar handleOrdersClick={handleOrdersClick}/>}
      {showOrders && <PlaceOrder/>}
    </div>
  );
}

export default App;
