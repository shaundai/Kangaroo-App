const itemList = [{ id: 1, name: "Scissors", desc: "black scissors", box: 3, location: "here", owner: "Sally", quantity: 4, avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" },  {id: 2, name: "Brush", desc: "hair brushes", box: 'kitch3', location: "here", owner: "Sally", quantity: 1, avatar_url: "../../assets/images/hairbrush.jpg" }, {id: 3, name: "Keurig", desc: "keurig and K cups", box: 'kitch3', location: "garage", owner: "Ben", quantity: 1, uri: "keurig" }]

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