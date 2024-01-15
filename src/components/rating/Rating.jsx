import FullStar from '../../assets/images/star_full.png';
import EmptyStar from '../../assets/images/star_empty.png';

function Rating ({score}) {
    const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate">
			{stars.map((level) => score >= level ? (
					<img
						key={level.toString()}
						className="rate__star"
						src={FullStar}
						alt="étoile pleine"
					/>
				) : (
					<img
						key={level.toString()}
						className="rate__star"
						src={EmptyStar}
						alt="étoile vide"
					/>
				)
			)}
		</div>
	);
};


export default Rating