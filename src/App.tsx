import Navbar from "./pages/Navbar";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";

const App = () => {
  return (
        <div>
            <RouterProvider router={routers} />
        </div>
  );
};

export default App;
