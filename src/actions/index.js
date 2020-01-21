let newId = Date.now();
//TODO change this to a better identifier

export const deleteItem = (id) => ({
      type: 'DELETEITEM',
      id
 })

 export const addItem = (payload) => ({
     type: 'ADDITEM',
     id: `item${newId}`,
     payload
 })