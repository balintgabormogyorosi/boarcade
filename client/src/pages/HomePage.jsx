import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const HomePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/tarsasjatekok")
    }, [navigate])


    return (
        <div className="home-page">
        </div>
    )
}

export default HomePage