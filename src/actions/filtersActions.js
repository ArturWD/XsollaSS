export const setFilter = (field, value) => ({
    type: 'SET_FILTER',
    field,
    value
});
export const setSort = (newSort, prevSort) => {
    const sortBy = newSort == prevSort ? '' : newSort;
    return {
        type: 'SET_SORT',
        sortBy
    }
};