import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TopBarHead from "./components/TopBarHead";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Login from "./screen/Login";
import Home from "./layout/Home";
import Footer from "./components/Footer";
import AllProductsPage from "./layout/AllProductsPage";
import AccountPage from "./layout/User/AccountPage";

// Layout component
const Layout = ({ children }) => {
  const location = useLocation();

  const noBannerRoutes = ["/login", "/register", "/all", "/account"];
  const shouldShowBanner = !noBannerRoutes.includes(location.pathname);

  return (
    <div>
      <TopBarHead />
      <TopHeader />
      <Header />
      {shouldShowBanner && <Banner />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
const ProtectedRoute = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
              <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Layout>
                <AccountPage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all"
          element={
            <Layout>
              <AllProductsPage />
            </Layout>
          }
        />
        {/* Thêm các Route khác */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
