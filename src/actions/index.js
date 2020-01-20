let newId = Date.now();

export const deleteItem = (id) => ({
      type: 'DELETEITEM',
      id
 })

 export const addItem = (payload) => ({
     type: 'ADDITEM',
     id: `item${newId}`,
     payload
 })