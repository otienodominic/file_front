
export const FetchFiles = async() => {
    let response = await fetch('/api/files')
    let files = await response.json()    
    return files
}