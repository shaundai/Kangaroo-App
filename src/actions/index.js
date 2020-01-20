let newId = Date.now();

export const deleteItem = (id) => ({
      type: 'DELETEITEM',
      id
 })

 export const addItem = () => ({
     id: newId,
 })