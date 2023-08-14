import "./Tag.css"


const Tag = ({ label, onClick, selected }) => {
    return (
        <span className="tag" style={{ backgroundColor: selected ? 'cornflowerblue' : '' }} onClick={onClick}>{label}</span>
    )
}

export default Tag