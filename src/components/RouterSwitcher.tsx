import { Route, Routes } from "react-router-dom";
import Practice from "./practice";
import ButtonComponent from "./Button";
import NotFound from "./NotFound";

const RouterSwitcher = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Practice />}></Route>

        <Route path="*" element={<NotFound />}></Route>
        <Route path="text-utility" element={<Practice />}></Route>
        <Route path="button" element={<ButtonComponent />}></Route>
      </Routes>
    </>
  );
};
export default RouterSwitcher;
