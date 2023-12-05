import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Product from "./pages/Product";
import Review from "./pages/Review";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Product />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
