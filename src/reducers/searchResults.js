let searchResults = [];

const searchResultsReducer = (state = searchResults, action, itemList) => {
    switch (action.type) {
        case 'SEARCH':
            return itemList.filter(item => item.name.includes(action.term) || item.desc.includes(action.term));
        default:
            return state
    }}

export default searchResultsReducer;