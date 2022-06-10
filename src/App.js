import CartContainers from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItem } from './redux/slice';
import { useEffect } from "react";


function App() {

  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  if (isLoading) {
    return <div className="loading">
      <h1>loading...</h1>
    </div>
  }


  return <main>

    {isOpen && <Modal />}
    <Navbar />
    <CartContainers />
  </main>
}
export default App;
