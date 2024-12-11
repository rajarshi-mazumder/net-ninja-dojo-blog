import logo from "./logo.svg";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import HomeLayout from "./HomeLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Switch,
  createRoutesFromElements,
} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

import { action as blogCreateAction } from "./Create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index={true} element={<Home />} />
      <Route path="blogs/:id" element={<BlogDetails />} />
      <Route path="create" element={<Create />} action={blogCreateAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
