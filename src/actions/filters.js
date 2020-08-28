export const setTextFilter = (filter='') => {
    return {
        type : 'SET_TEXT_FILTER',
        filter
    }
};

export const sortByDate = () => {
    return {
        type : 'SORT_BY_DATE'
    }
};

export const sortByAmount = () => {
   return {
       type : 'SORT_BY_AMOUNT'
   }
};

export const setStartDate = (startDate) => {
   return { 
       type : 'SET_START_DATE',
       startDate
    }
};

export const setEndDate = (endDate) => {
   return { 
       type : 'SET_END_DATE',
       endDate
    }
};