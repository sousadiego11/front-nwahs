import { useCallback, useEffect, useState } from 'react'
import '../styles/modal.css'
import { handleFetchData } from '../utils/functions'
import { ReposTable } from './ReposTable'
  
export function ModalContent({ user }) {
    const [repos, setRepos] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const { id, login, html_url, created_at } = currentUser
    const loginDate = new Date(created_at)


  const handleSetRepos = useCallback(async() => {
    const dataRepos = await handleFetchData(`/users/${user.login}/repos`)
	 const dataUser = await handleFetchData(`/users/${user.login}/details`)

    setRepos(dataRepos)
    setCurrentUser(dataUser)
  }, [user.login])

  useEffect(() => {
    handleSetRepos()
  }, [handleSetRepos])

    return (
        <div className="modal-content">
            <div>
                <span><b>Id: </b>{id}</span>
                <span><b>Login: </b>{login}</span>
                <span><b>Profile URL: </b><a href={html_url}>{html_url}</a></span>
                <span><b>Login creation date: </b>{loginDate.toLocaleDateString('pt-BR')}</span>
            </div>
            <ReposTable repos={repos} />
        </div>
    )
}