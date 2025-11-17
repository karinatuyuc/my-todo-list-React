
export function GenerateUniqueID() {
    return {
        id: 'id-' + Date.now() + "-" + Math.floor(Math.random() * 1000),
    
   }
}
