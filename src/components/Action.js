const Action = ({ text, icon, link, wishlist=false}) => {
    return (
        <div className={wishlist ? "wishlist" : "action"}>
            <div className="action-text">{text}</div>
            <a className="btn" href={link} target="blank"><i className={icon}></i></a>
        </div>    
    )
}

export default Action

