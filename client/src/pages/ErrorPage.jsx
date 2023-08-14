import { Link, useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()

    console.log(error)

    return (
        <div className="error-page">
            <strong>{error.status}: {error.data.message}</strong>
            <br />
            <Link to="/">Go back to home page</Link>
        </div>
    )
}

export default ErrorPage