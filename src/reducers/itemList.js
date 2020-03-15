const itemList = [{ id: 1, name: "Scissors", desc: "the scissors", box: 3, location: "here", owner: "Sally", quantity: 4 },  {id: 2, name: "Brush", desc: "the softest brush", box: 3, location: "here", owner: "Sally", quantity: 1 }]

const itemListReducer = (state = itemList, action) => {
    switch (action.type) {
        case 'DELETEITEM':
            return state.filter(item => action.id !== item.id);
        case 'ADDITEM':
            return [
                ...state,
                {
                    id: action.id,
                    ...action.payload
                }         
            ];
        default:
            return state
    }}

export default itemListReducer;