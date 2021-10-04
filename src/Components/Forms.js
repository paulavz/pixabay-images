import React, { useState } from "react";
import Error from "./Error";

const Forms = ({ setSearch }) => {
	const [word, setWord] = useState("");
	const [error, setError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (word.trim() === "") {
			setError(true);
			return;
		}
		setError(false);
		setSearch(word);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="form-group col-md-8">
					<input
						placeholder="Busca una imagen para tu página"
						type="text"
						className="form-control form-control-lg"
						onChange={(e) => setWord(e.target.value)}
					/>
				</div>
				<div className="form-group col-md-4">
					<input
						type="submit"
						className="btn btn-lg btn-danger btn-block"
						value="Buscar"
					/>
				</div>
			</div>
			{error ? <Error message="Agrega un término de búsqueda" /> : null}
		</form>
	);
};

export default Forms;
