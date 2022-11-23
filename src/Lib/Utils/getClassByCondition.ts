interface CSSModuleType {
	[index: string]: string;
}

type getClassListType = (CSSModule: CSSModuleType, mainClass: string, extraClass: string, condition: boolean) => string;


export const getClassListByCondition: getClassListType = (CSSModule, mainClass, extraClass, condition) => {
	return `${CSSModule[mainClass]} ${condition ? CSSModule[extraClass] : ''}`;
};