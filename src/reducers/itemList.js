const love = 'https://i.picsum.photos/id/514/200/300.jpg'
const scis = require('../../assets/images/scissors.jpeg')

const itemList = [{
            id: 1, name: "Scissors", desc: "black scissors", box: 3, location: "here", owner: "Sally", quantity: 4, avatar_url: require('../../assets/images/scissors.jpeg')
        },
        {
            id: 2, name: "Brush", desc: "hair brushes", box: 'kitch3', location: "here", owner: "Sally", quantity: 1, avatar_url: require('../../assets/images/hairbrush.jpg')
        },
        {
            id: 3, name: "Keurig", desc: "keurig and K cups", box: 'kitch3', location: "garage", owner: "Ben", quantity: 1, avatar_url: require('../../assets/images/keurig.jpeg')
        }]

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