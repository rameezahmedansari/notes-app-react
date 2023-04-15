import "./styles.css";
import Home from "./Home";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import NoteDetail from "./NoteDetail";
import Create from "./Create";
import Edit from "./Edit";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Notes App</h1>
        <Link to="/home">Home</Link>
        <Link to="/create">Create</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home list={list} setList={setList} />} />
        <Route
          path="/create"
          element={<Create list={list} setList={setList} />}
        />
        <Route
          path="/item/:id"
          element={<NoteDetail list={list} setList={setList} />}
        />

        <Route
          path="/edit/item/:id"
          element={<Edit list={list} setList={setList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
