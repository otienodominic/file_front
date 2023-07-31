export const FetchCountries = async() => {
    try {
        let res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        let data = await res.json()
    return data
    } catch (error) {
        alert(error)
    }
}