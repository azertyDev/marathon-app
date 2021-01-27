import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Header title="This is title" descr="This is Description!" />
      <Layout id={1} title="This is title" descr="This is Description!" />
      <Layout id={2} title="This is title" descr="This is Description!" />
      <Layout id={3} title="This is title" descr="This is Description!" />
      <Footer />
    </div>
  );
}

export default App;
