import Nav from "./components/Nav";
import Header from "./components/haeder";
import About from "./components/About";
import Upload from "./components/Upload";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Upload></Upload>
      <Footer></Footer>
    </div>
  );
}

export default App;
