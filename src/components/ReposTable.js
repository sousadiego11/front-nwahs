import '../styles/modal.css'
  
export function ReposTable({ repos = [] }) {
    return (
			<table>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>URL</th>
				</tr>
				{
					repos.map(({id, name, html_url}) => (
						<tr>
							<td>{id}</td>
							<td>{name}</td>
							<td><a href={html_url}>{html_url}</a></td>
						</tr>
					))
				}
			</table>
    )
}