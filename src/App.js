import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id/Detail" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import Topbar from "./components/Topbar/Topbar";

// function App() {
//   return (
//     <div className="App">
//       <Topbar />
//       <header className="App-header">
//         <h1>Hello world</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
