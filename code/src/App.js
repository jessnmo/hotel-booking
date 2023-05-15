import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeDisplay from './pages/HomeDisplay';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/display" element={<HomeDisplay />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
