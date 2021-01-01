import React from "react";
import "./App.css";
import Template from "./component/Templates/Template";

const App: React.FC<AppProps> = () => {
	return (
		<div className='App'>
			<Template />
		</div>
	);
};

export default App;

interface AppProps {}
