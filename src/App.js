import { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./components/CardWrapper";
import { handleFetchData } from "./utils/functions";
import './styles/app.css'
import { Spin } from "./components/Spin";

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const handleSetUsers = useCallback(async(url) => {
	try {
		setLoading(true)
		const response = await handleFetchData(url)
		setData(response)
	} catch (e) {
		console.error(e)
	} finally {
		setLoading(false)
	}
  }, [])

  useEffect(() => {
    handleSetUsers()
  }, [handleSetUsers])

  return (
    <div className="app">
      {loading ? <Spin /> : <CardWrapper users={data?.users ?? []} /> }
      <div className="actions">
        <button onClick={() => handleSetUsers(data?.nextUrl)}>Next</button>
      </div>
    </div>
  );
}

export default App;
