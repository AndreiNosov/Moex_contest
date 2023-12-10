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
import OpenBankFC from "./components/main/broker_bank/OpenBank";
import CalculationFC from "./components/main/broker_bank/calculated/Calculation";
import BrokerPageFC from "./components/main/broker_strategy_type/StrategyPage";

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
				</>,
				children: [
					{
						path: "",
						element: <CalculationFC />
					},
					{
						path: "create-account",
						element: <OpenBankFC/>
					},
					{
						path: "strategy",
						element: <BrokerPageFC/>
					}
				]
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
