function Card ({image,title}){

    return (
        <article className="card">
            <img src={image} alt={title} className="card__img"/>
            <div className="card__layer">
                <h2 className="card__title">{title}</h2>
            </div>
        </article>
    );

}

export default Card