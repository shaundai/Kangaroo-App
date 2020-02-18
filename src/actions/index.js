let newId = 3;
//TODO change this to a better identifier

export const deleteItem = (id) => ({
      type: 'DELETEITEM',
      id
 })

 export const addItem = (payload) => ({
     type: 'ADDITEM',
     id: newId++,
     payload
 })

 export const search = (term) => ({
     type: 'SEARCH',
     term
 })