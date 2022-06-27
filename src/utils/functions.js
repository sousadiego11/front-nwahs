const handleFetchData = async (url) => {
    const partialUrl = url ? url : '/users'
    const data = await fetch(`${process.env.REACT_APP_API_URL}${partialUrl}`)
    return data.json()
}

export {
    handleFetchData
}