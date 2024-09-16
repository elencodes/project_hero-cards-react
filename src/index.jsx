import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const cardsContainer = ReactDOM.createRoot(
	document.getElementById("cardsContainer")
);
cardsContainer.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
