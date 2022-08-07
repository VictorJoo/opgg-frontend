import React, { FC } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Summoners = loadable(() => import('@pages/Summoners'));

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/summoners" />} />
				<Route path="/summoners" element={<Summoners />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
