
export function generateUniqueID(text) {
    return {
        id: 'id-' + Date.now() + "-" + Math.floor(Math.random() * 1000),
        text: text.trim()
    }
}