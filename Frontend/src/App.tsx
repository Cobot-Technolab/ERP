import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import LandingPage from "@/Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
