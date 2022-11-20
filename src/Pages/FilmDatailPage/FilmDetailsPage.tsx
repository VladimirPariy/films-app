import React, {FC, useEffect} from "react";
import {useParams} from "react-router";

import {clearState, loadFilmDetails, selectDetails, selectDetailsError, selectIsLoadingDetails} from "../../Store/Slices/FilmDetailsSlice";
import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {useCleanup} from "../../Lib/Hooks/useCleanup";

import FilmDetails from "../../Components/FilmDetailsLayout/FilmDetails";


const FilmDetailsPage: FC = () => {
	const {id} = useParams();
	const isLoading = useAppSelector(selectIsLoadingDetails);
	const filmDetails = useAppSelector(selectDetails);
	const error = useAppSelector(selectDetailsError)
	
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		if (isLoading === 'loading') return;
		if (id) dispatch(loadFilmDetails({id}));
	}, [id, dispatch])
	
	useCleanup(clearState);
	
	return (
		<>
			{isLoading === 'loading' && <div>Loading...</div>}
			{error && <div>ERROR</div>}
			{Object.keys(filmDetails).length !== 0 && <FilmDetails {...filmDetails}/>}
		</>
	);
};

export default FilmDetailsPage;