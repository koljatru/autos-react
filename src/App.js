import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Notfound/NotFound";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
