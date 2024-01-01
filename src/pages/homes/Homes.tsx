import Home from "../Home";
import Menu from "../Menu";
import About from "../About";
import Product from "../Product";
import Review from "../Review";
import Footer from "../Footer";

const Homes = () => {
  return (
        <>
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
        </>
  );
};

export default Homes;