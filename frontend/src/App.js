import { BrowserRouter, Routes, Route } from 'react-router-dom'
//publicly avialable pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList"
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";

//protected admin pages : 
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminCreateProductPage from "./pages/admin/AdminProductsPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage"

//component pages
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


//user components
// import UserChatComponent from './components/user/UserChatComponent';
import RoutesWithUserChatComponent from './utils/ScrollTop';


// import ScrollTop from './utils/ScrollTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route element={<RoutesWithUserChatComponent />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element="nope" />
            </Route>


            <Route element={<ProtectedRouteComponent admin={false} />}>
              <Route path="/user" element={<UserProfilePage />} />
              <Route path="/user/my-orders" element={<UserOrdersPage />} />
              <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
              <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
            </Route>
          

          <Route element={<ProtectedRouteComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
            <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/ordrer-detail" element={<AdminOrderDetailsPage />} />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
