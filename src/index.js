import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);


// import './styles/style.css'
import './app.css';
//
createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
