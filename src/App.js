import { Suspense } from "react";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes />
    </Suspense>
  );
}
