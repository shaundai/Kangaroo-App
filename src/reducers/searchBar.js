const term = [''];

const searchReducer = (state = term, action) => {
    switch (action.type) {
        case 'DELETEITEM':
            return state.filter(item => action.id !== item.id);
        case 'ADDTERM':
            return [
                ...term,
                {
                    id: action.id,
                    ...action.payload
                }         
            ];
        case 'SEARCH':
            return [
                {
                    results: state.filter(item => item.name.includes(term) || item.desc.includes(term))
                }
            ];
        default:
            return state
    }}

export default searchReducer;