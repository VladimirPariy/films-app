import React, {FC, useRef} from "react";

import {useObserver} from "../../Lib/Hooks/useObserver";
import {selectCurrentPage, selectIsLoading, selectTotalPageCount, setCurrentPage} from "../../Store/Slices/FilmsSlice";
import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";

const Observer: FC = () => {
	const dispatch = useAppDispatch();
	const lastElemRef = useRef<HTMLDivElement>(null);
	
	const isLoading = useAppSelector(selectIsLoading);
	const totalPages = useAppSelector(selectTotalPageCount);
	const currentPage = useAppSelector(selectCurrentPage);
	
	useObserver(lastElemRef, currentPage < totalPages, isLoading, () => dispatch(setCurrentPage()));
	
	return (
		<div ref={lastElemRef} style={{height: '20px'}}/>
	);
};

export default Observer;