const handleFetchData = async (url) => {
    const partialUrl = url ? url : '/users'
    const data = await fetch(`http://localhost:5001${partialUrl}`)
    return data.json()
}

export {
    handleFetchData
}