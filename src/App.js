import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar.jsx";
import RegPage from "./component/RegPage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
function App() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<RegPage />} />
        {/* <Route element={<Details />} path="/posts/:id" />
        <Route element={<MySearch />} path="/posts/SearchResult" /> */}
      </Route>
    )
  );
  return <RouterProvider router={routerApp} />;
}

export default App;
