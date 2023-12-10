import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import MainFC from "./components/main/Main";
import SidebarFC from "./components/aside/Sidebar";
import './app.css';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <>
					<SidebarFC />
					<MainFC />
				</>
			},
			{ path: "/catalog" },
			{ path: "/analytics" },
			{ path: "/news" }
		]
	},
]);

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
