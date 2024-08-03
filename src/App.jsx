import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithToken } from "./store/actions/clientAction";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.client.userInfo.token);
  const loading = useSelector((state) => state.client.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithToken(token));
  }, [dispatch]);

  console.log("loading: ", loading);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader">Loading...</div>
        </div>
      </>
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
