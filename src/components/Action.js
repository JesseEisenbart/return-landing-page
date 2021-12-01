const Action = ({ text, icon, link, wishlist=false}) => {
    return (
        <section className={wishlist ? "wishlist" : "action"}>
            <h1 className="action-text">{text}</h1>
            <a className="btn" href={link} target="blank"><i className={icon}></i></a>
        </section>    
    )
}

export default Action

