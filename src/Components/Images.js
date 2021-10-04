import React from "react";

const Images = ({ image }) => {
	const { largeImageURL, likes, previewURL, tags } = image;
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<img
					className="card-img-top height-img"
					alt={tags}
					src={previewURL}
				/>
				<div className="card-body">
					<p className="card-text">{likes} Me Gusta</p>
				</div>
				<div className="card-footer">
					<a
						href={largeImageURL}
						target="_blank"
						rel="roopener noreferrer"
						className="btn btn-primary btn-block"
					>
						Ver Imagen
					</a>
				</div>
			</div>
		</div>
	);
};

export default Images;
