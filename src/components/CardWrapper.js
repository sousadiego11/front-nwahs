import { Card } from "./Card";

export function CardWrapper({ users }) {
    return (
		users?.map((user) => (
         <Card user={user}/>
      ))
    )
}