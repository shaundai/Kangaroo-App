const itemList = [{ id: 1, name: "scissors", desc: "the scissors", box: 3, location: "here", owner: "sally", quantity: 4 },  {id: 2, name: "brush", desc: "the softest brush", box: 3, location: "here", owner: "sally", quantity: 1 }]

const itemListReducer = (state = itemList, action) => {
    switch (action.type) {
        default:
            return state
    }}

export default itemListReducer;