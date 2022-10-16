type CSSModuleType = {
    [index: string]: string;
};

type getClassListType = (refByCSSModule: CSSModuleType,
                         mainClassName: string,
                         firstExtraClassName: string,
                         conditionForUsing: boolean,
                         secondExtraClassName?: string) => string;


export const getClassList: getClassListType = (refByCSSModule,
                                               mainClassName,
                                               firstExtraClassName,
                                               conditionForUsing,
                                               secondExtraClassName?) => {
    if (secondExtraClassName) {
        return `${refByCSSModule[mainClassName]} ${conditionForUsing ? refByCSSModule[firstExtraClassName] : refByCSSModule[secondExtraClassName]}`
    }
    return `${refByCSSModule[mainClassName]} ${conditionForUsing ? refByCSSModule[firstExtraClassName] : ''}`
};