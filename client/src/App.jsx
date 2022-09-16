import { Routes, Route } from "react-router-dom";
import ItemDetails from './pages/ItemDetails';
import ItemPage from "./pages/ItemPage";
import EditItem from "./components/EditItem";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ItemPage />} />
        <Route path="/product_details" element={<ItemDetails />} />
        <Route path="/edit_product" element={<EditItem />} />
      </Routes>
    </div>
  );
}

export default App;
