import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
