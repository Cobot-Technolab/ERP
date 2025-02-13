import LandingPage from "@/Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import LoginPage from "@/Pages/LoginPage";
import SignupPage from "@/Pages/SignupPage";
import Layout from "@/components/Shared/Layout";
import NotFoundPage from "@/Pages/NotFoundPage";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
