import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import SearchResults from './pages/SearchResults';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/search" element={<SearchResults />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
