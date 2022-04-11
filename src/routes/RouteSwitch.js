import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import App from "../App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  );
};
export default RouteSwitch;
