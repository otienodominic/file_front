export function Search({data}, query) {
    const keys = ['patientNumber', 'patientName', 'gender']
    return data.filter((item)=> keys.some((key) => item[key].toLowerCase().includes(query)))
}