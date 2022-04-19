import { Suspense } from "react";
import Routes from "./Routes";
import SpinnerComponent from "./Components/Spinner";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <Suspense fallback={<SpinnerComponent />}>
      <Routes />
    </Suspense>
  );
}
