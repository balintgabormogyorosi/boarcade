import Tag from "../Tag/Tag"

import "./TagList.css"


const TagList = ({ tags, onClick }) => {
    const onTagClick = (tag) => {
        if (onClick) onClick(tag)
    }

    console.log(tags)

    return (
        <div className="tag-list">
            {tags && tags.map(tag => {
                if (typeof tag === "string")
                    return <Tag key={tag} label={tag} onClick={() => onTagClick(tag)} />
                else
                    return <Tag key={tag.label} label={tag.label} selected={tag.selected} onClick={() => onTagClick(tag.label)} />
            })}
        </div>
    )
}

export default TagList