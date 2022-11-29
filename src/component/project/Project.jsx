import React from 'react'
import { ProjectList } from './ProjectList'

const Project = () => {

  const projectsData = [
    {
      name: 'MERN Stack',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!',
      link: 'https://www.youtube.com/',
      techUsed: [
        {
          techName: 'MongoDb'
        },
        {
          techName: 'Express Js'
        },
        {
          techName: 'React Js'
        },
        {
          techName: 'Node Js'
        },
      ]
    },
    {
      name: 'MERN Stack',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!',
      link: 'https://www.youtube.com/',
      techUsed: [
        {
          techName: 'MongoDb'
        },
        {
          techName: 'Express Js'
        },
        {
          techName: 'React Js'
        },
        {
          techName: 'Node Js'
        },
      ]
    },
    {
      name: 'MERN Stack',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!',
      link: 'https://www.youtube.com/',
      techUsed: [
        {
          techName: 'MongoDb'
        },
        {
          techName: 'Express Js'
        },
        {
          techName: 'React Js'
        },
        {
          techName: 'Node Js'
        },
      ]
    },
    {
      name: 'MERN Stack',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!',
      link: 'https://www.youtube.com/',
      techUsed: [
        {
          techName: 'MongoDb'
        },
        {
          techName: 'Express Js'
        },
        {
          techName: 'React Js'
        },
        {
          techName: 'Node Js'
        },
      ]
    },
    {
      name: 'MERN Stack',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!',
      link: 'https://www.youtube.com/',
      techUsed: [
        {
          techName: 'MongoDb'
        },
        {
          techName: 'Express Js'
        },
        {
          techName: 'React Js'
        },
        {
          techName: 'Node Js'
        },
      ]
    },
    {
      name: 'MERN Stack',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!',
      link: 'https://www.youtube.com/',
      techUsed: [
        {
          techName: 'MongoDb'
        },
        {
          techName: 'Express Js'
        },
        {
          techName: 'React Js'
        },
        {
          techName: 'Node Js'
        },
      ]
    },

  ]
  return (

    <div className='container' >

        <div className="section-title">
            <h4>Projects</h4>
            <span className='line'></span>
        </div>

        <div className="row">


          {projectsData.map((data, index) => {
            return (
              <div className="col-xl-6 col-lg-6 col-md-9 col-sm-12" key={index} id='projects'>
                
                <ProjectList {...data}/>

              </div>
            )
          })};
          

        </div>

    </div>
  )
}

export default Project