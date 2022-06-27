const getUsersList = async (url) => {
    const partialUrl = url ? url : '/users'
    const data = await fetch(`http://localhost:5000${partialUrl}`)
    return data.json()
}

export {
    getUsersList
}