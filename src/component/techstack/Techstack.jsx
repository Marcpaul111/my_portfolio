import React, { useState } from 'react'
import './techstack.css'

const Techstack = () => {

    const stacks = [
        {
            name: 'Fullstack developer'
        },
        {
            name: 'React Js'
        },
        {
            name: 'Node Js'
        },
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'Typescript'
        },
        {
            name: 'Express Js'
        },
        {
            name: 'mySQL'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'Bootstrap'
        },
        {
            name: 'tailwind CSS'
        },
        {
            name: 'MongoDB'
        },
    ]

    const colors = [
        '#EA047E',
        '#FF6D28',
        '#FCE700',
        '#00F5FF',
        '#2E0249',
        '#570A57',
        '#A91079',
        '#F806CC',
        '#77D970',
        '#562B08',
        '#647E68',
        '#3A3845'
    ]

const [loadMoreItems, setLoadMoreItems] = useState(9)

const loadMore = () => [
    setLoadMoreItems((prev) => prev + 3)
]

  return (
    <div className='container techstack-section' id='tech-stack'>
        
        <div className="section-title">
            <h4>Tech Stack</h4>
            <span className='line'></span>
        </div>
        
        <div className="row">
            {stacks.slice(0, loadMoreItems).map((stack, index) => {
                return (
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                       
                        <div className='stack-container'>
                        <span className='number' style={{backgroundColor: colors[index]}}>
                            {index + 1}
                        </span>
                            <p>{stack.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>

            {loadMoreItems >= stacks.length ? null : (<span className='load-more' onClick={loadMore}>Load more...</span>)}

        

    </div>
  )
}

export default Techstack