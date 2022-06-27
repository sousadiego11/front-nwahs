import '../styles/modal.css'

const bla = {
    login: "octocat",
    id: 1,
    html_url: "https://github.com/octocat",
    created_at: "2008-01-14T04:33:35Z",
}

const bla2 = [
    {
      "id": 1296269,
      "name": "Hello-World",
      "html_url": "https://github.com/octocat/Hello-World",
    }
  ]

  
export function ModalContent({ user }) {
    const { id, login, html_url, created_at } = bla
    const loginDate = new Date(created_at)

    return (
        <div className="modal-content">
            <div>
                <span><b>Id: </b>{id}</span>
                <span><b>Login: </b>{login}</span>
                <span><b>Profile URL: </b><a href={html_url}>{html_url}</a></span>
                <span><b>Login creation date: </b>{loginDate.toLocaleDateString('pt-BR')}</span>
            </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
                {
                    bla2.map(({id, name, html_url}) => (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td><a href={html_url}>{html_url}</a></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}