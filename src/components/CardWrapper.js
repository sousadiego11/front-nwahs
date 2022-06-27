import { Card } from "./Card";

const bla = [
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    },
    {
        id: 1,
        login: 'sousadiego11',
        avatar_url: 'https://avatars.githubusercontent.com/sousadiego11'
    }
]

export function CardWrapper({ users }) {
    return (
        bla?.map((user) => (
                <Card user={user}/>
            ))
    )
}