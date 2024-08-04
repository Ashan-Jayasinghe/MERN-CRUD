import "./App.css";
import User from "./getuser/User";
import AddUser from "./adduser/AddUser";
import Update from "./updateuser/Update";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  // const route = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <User />,
  //   },
  //   {
  //     path: "/add",
  //     element: <AddUser />,
  //   },
  // ]);
  return (
    <div className="App">
      {/*<RouterProvider router={route}></RouterProvider>*/}

      <Router>
        <Routes>
          <Route path="/" Component={User} />
          <Route path="/add" Component={AddUser} />
          <Route path="/update/:id" Component={Update} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
