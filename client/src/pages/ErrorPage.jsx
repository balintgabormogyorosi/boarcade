import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()

    console.log(error)

    return (
        <div className="error-page">
            <strong>{error.status}: {error.data.message}</strong>
        </div>
    )
}

export default ErrorPage