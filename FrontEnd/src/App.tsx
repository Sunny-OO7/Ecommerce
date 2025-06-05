import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Collections from "./pages/Collections";
import ProductDetails from "./components/Products/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<Collections />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
