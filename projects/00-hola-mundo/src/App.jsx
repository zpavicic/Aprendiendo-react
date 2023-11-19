// import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'zzzzeljko',
        name: 'zeljko pavicic',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName: 'billgates',
        name: 'Bill Gates',
        isFollowing: false
    },
    {
        userName: 'jeffbezos',
        name: 'Jeff Bezos',
        isFollowing: false
    }
]

export function App() {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName = {userName}
                            initialIsFollowing = {isFollowing}
                        >
                            {name}    
                        </TwitterFollowCard>
                    )
                })
            }
            

        </section>
    )

}