import React, {FC} from "react";

import styles from "./MovieDetails.module.scss";

import {IProductionCompanies} from "../../Lib/Interfaces/FilmDetails.interface";

interface Props {
	budget: number;
	production_companies: IProductionCompanies[];
	homepage: string | null;
}

const ExtraMovieDetails: FC<Props> = (props) => {
	
	const budgetSum = props.budget.toString()
		.split('')
		.reverse()
		.map((item, index) => {
			if (index === 0) return item;
			return (index % 3 === 0) ? item = `${item},` : item;
		})
		.reverse()
		.join('');
	
	return (
		<div className={styles.extraPart}>
			<div className={styles.companiesContainer}>
				<span className={styles.titleCompany}>Production companies:</span>
				<span className={styles.companyName}>
					{props.production_companies.map(company => company.name).join(', ')}
				</span>
			</div>
			{props.budget > 0 &&
				<div className={styles.budget}>
					<span className={styles.titleBudget}>Budget: </span>
					<span className={styles.budgetSum}>{budgetSum}$</span>
				</div>
			}
			{props.homepage &&
				<div className={styles.homepage}>
					<span className={styles.titleWebsite}>Website:</span>
					<a className={styles.website}
						 href={props.homepage}
						 target='_blank'
						 rel="noreferrer">
						{props.homepage}
					</a>
				</div>
			}
		</div>
	);
};

export default ExtraMovieDetails;