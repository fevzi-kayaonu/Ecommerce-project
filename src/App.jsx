import "./index.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      {/* <Header /> */}
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
