import React, {FC} from "react";


interface Props {
	poster_path: string;
	release_date: string;
	vote_average: number;
	title: string;
}

const FilmCard: FC<Props> = (props) => {
	
	return (
		<div>
			<div>
				<img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt=""/>
			</div>
			<div>
						<span>
							{props.release_date.slice(0, 4)}
						</span>
				<span>
							{props.vote_average}
						</span>
			</div>
			<div>
				{props.title}
			</div>
		</div>
	);
};

export default FilmCard;