export const CreatedBy = async(user_id) => {
    // req.params.id
    try {
        let response = await fetch(`https://filebackend-3e82d3066410.herokuapp.com/api/users/${user_id}`)
        let user = await response.json()        
        return user.name
    } catch (error) {
        alert(error)
    }
}