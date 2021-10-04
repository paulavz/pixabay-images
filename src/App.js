import React, { useState, useEffect } from "react";
import Forms from "./Components/Forms";
import ListImages from "./Components/ListImages";
import right from "./Icons/right.svg";
import left from "./Icons/left.svg";
import "./app.css";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualpages, setActualPages] = useState(1);
  const [totalpages, setTotalPages] = useState(3);

  useEffect(() => {
    const callAPI = async () => {
      if (search === "") return;
      const KEY = process.env.REACT_APP_API_PIXABAY_KEY;
      const imageForPages = 20;
      const url = `https://pixabay.com/api/?key=${KEY}&q=${search}&per_page=${imageForPages}&page=${actualpages}`;
      const request = await fetch(url);
      const resp = await request.json();
      setImages(resp.hits);
      const calculateTotalPages = Math.ceil(resp.totalHits / imageForPages);
      setTotalPages(calculateTotalPages);
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    callAPI();
  }, [search, actualpages]);
  const beforePage = () => {
    const newActualPage = actualpages - 1;
    if (newActualPage === 0) return;
    setActualPages(newActualPage);
  };
  const nextPage = () => {
    const newActualPage = actualpages + 1;
    if (newActualPage > totalpages) return;
    setActualPages(newActualPage);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Forms setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
        {actualpages === 1 ? null : (
          <button
            type="button"
            onClick={beforePage}
            className="d-flex align-items-center btn btn-info"
          >
            <img className="left" src={left} alt="Left" />
            Anterior
          </button>
        )}
        {actualpages === totalpages ? null : (
          <button
            type="button"
            onClick={nextPage}
            className="d-flex align-items-center btn btn-info ml-2"
          >
            Siguiente
            <img className="right" src={right} alt="Right" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
