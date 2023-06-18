import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';

import SearchResults from './pages/SearchResults';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/search" element={<SearchResults />}></Route>
				<Route path="/search/:id" element={<Hotel />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
