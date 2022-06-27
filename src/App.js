import { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./components/CardWrapper";
import { handleFetchData } from "./utils/functions";
import './styles/app.css'

function App() {
  const [data, setData] = useState()

  const handleSetUsers = useCallback(async(url) => {
    const response = await handleFetchData(url)
    setData(response)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleSetUsers()
  }, [handleSetUsers])

  return (
    <div className="app">
      <CardWrapper users={data?.users ?? []} /> 
      <div className="actions">
        <button onClick={() => handleSetUsers(data?.nextUrl)}>Next</button>
      </div>
    </div>
  );
}

export default App;
