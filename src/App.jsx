import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithToken } from "./store/actions/clientAction";
import { useEffect } from "react";
import Spinner from "./components/others/Spinner";

function App() {
  const loading = useSelector((state) => state.client.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithToken());
  }, [dispatch]);

  if (loading) {
    return (
      <Spinner
        svgCss="w-16 h-16"
        divCss="flex justify-center items-center min-h-screen"
      />
    );
  }

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
