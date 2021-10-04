import React from "react";
import Images from "./Images";

const ListImages = ({ images }) => {
	return (
		<div className="col-12 p-5 row">
			{images.map((image) => {
				return <Images key={image.id} image={image} />;
			})}
		</div>
	);
};

export default ListImages;
