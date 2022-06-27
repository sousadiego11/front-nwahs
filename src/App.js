import { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./components/CardWrapper";
import { handleFetchData } from "./utils/functions";
import './styles/app.css'

function App() {
  const [users, setUsers] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [previousUser, setPreviousUser] = useState()

  const handleSetUsers = useCallback(async(url) => {
    const data = await handleFetchData(url)

    if (users.length > 0) setPreviousUser(users[users.length - 1])

    setUsers(data.users)
    setNextUrl(data.nextUrl)
  }, [users])

  useEffect(() => {
    handleSetUsers()
  }, [handleSetUsers])

  return (
    <div className="app">
      <CardWrapper users={users} /> 
      <div className="actions">
        <button onClick={() => handleSetUsers(nextUrl)}>Previous</button>
        <button onClick={() => handleSetUsers(`/users?since=${previousUser?.id}`)}>Next</button>
      </div>
    </div>
  );
}

export default App;
