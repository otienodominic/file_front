export const getAllFiles = async() => {
    try {
        const response = await fetch('https://filebackend-3e82d3066410.herokuapp.com/api/files')
        return response.json()
    } catch {
        throw new Error('Could not fetch files')
    }
}

export const getFile = async(id) => {
    let response = await fetch(`https://filebackend-3e82d3066410.herokuapp.com/api/files/${id}`)
    let data = await response.json()
    return data
}

export const createFile = async(formData) => {
    await fetch('/api/files/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
}

export const editFile = async({formData, id}) => {
    let response = await fetch(`https://filebackend-3e82d3066410.herokuapp.com/api/files/edit/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    let data = await response.json()
    return data
}

export const deleteFile = async(id) => {
   return await fetch(`https://filebackend-3e82d3066410.herokuapp.com/api/files/delete/${id}`, {
        method: 'DELETE'
    })
    
}
