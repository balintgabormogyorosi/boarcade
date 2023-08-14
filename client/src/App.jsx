import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage"
import BoardGamesPage, { loader as boardGamesLoader } from "./pages/BoardGamesPage"
import BoardGamePage, { loader as boardGameLoader } from "./pages/BoardGamePage"
import RootLayout from "./pages/Root"
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage />, },
            { path: 'tarsasjatekok', element: <BoardGamesPage />, loader: boardGamesLoader, },
            { path: 'tarsasjatekok/:slug', element: <BoardGamePage />, loader: boardGameLoader },
        ],
    },
])

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}

export default App