
export const FetchFiles = async() => {
    let response = await fetch('https://filebackend-3e82d3066410.herokuapp.com/api/files')
    let files = await response.json()    
    return files
}