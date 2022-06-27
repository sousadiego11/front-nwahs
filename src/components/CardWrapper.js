import { Card } from "./Card";

export function CardWrapper({ users }) {
    return (
		<div className="card-wrapper">
			{users?.map((user) => (
				<Card user={user}/>
			))}
		</div>
    )
}