import React, { FC } from "react";

import styles from "components/movie-details-layout/movie-details.module.scss";

import { IProductionCompanies } from "lib/interfaces/movie-details.interface";

interface Props {
  budget: number;
  production_companies: IProductionCompanies[];
  homepage: string | null;
}

const ExtraMovieDetails: FC<Props> = (props) => {
  const { budget, homepage, production_companies } = props;

  const budgetSum = budget
    .toString()
    .split("")
    .reverse()
    .map((number, index) => {
      if (index === 0) return number;
      return index % 3 === 0 ? (number = `${number},`) : number;
    })
    .reverse()
    .join("");

  return (
    <div className={styles.extraPart}>
      <div className={styles.companiesContainer}>
        <span className={styles.titleCompany}>Production companies:</span>
        <span className={styles.companyName}>
          {production_companies.map((company) => company.name).join(", ")}
        </span>
      </div>
      {budget > 0 && (
        <div className={styles.budget}>
          <span className={styles.titleBudget}>Budget: </span>
          <span className={styles.budgetSum}>{budgetSum}$</span>
        </div>
      )}
      {homepage && (
        <div className={styles.homepage}>
          <span className={styles.titleWebsite}>Website:</span>
          <a
            className={styles.website}
            href={homepage}
            target="_blank"
            rel="noreferrer"
          >
            {homepage}
          </a>
        </div>
      )}
    </div>
  );
};

export { ExtraMovieDetails };
