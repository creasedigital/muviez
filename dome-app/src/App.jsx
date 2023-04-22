import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];

const Gallery = ({ links }) => {
	const [linkss, setLinks] = useState(links);
	const removeImage = (id) => {
		const newLinks = linkss.filter((_, i) => i !== id);
		setLinks(newLinks);
	};

	return (
		<div>
			{linkss.map((link, id) => (
				<div className="image" key={id}>
					<img src={link} alt="gallery-image" />
					<button className="remove" onClick={() => removeImage(id)}>
						X
					</button>
				</div>
			))}
		</div>
	);
};

/* class ImageGallery extends React.Component {
	render() {
		return null;
	}
} */

function App() {
	return <Gallery links={links} />;
}

export default App;
