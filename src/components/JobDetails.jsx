import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../data/data'


export const JobDetails = () => {

 const {position} = useParams()
 const job = jobs.find((job)=>job.position===position)


  return (
    <section>
      <div className='title_details'>
         <h1>{job.position}</h1>
      </div>
      <div className='container'>
        <div className='details__top'>
          <h1>{job.company}</h1>
          <h6>
            {job.postedAt} - {job.contract}
          </h6>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <div className='requirements_title'>
            <h4>{job.requirements.reqTitle}</h4>
          </div>
          <ul className='requeriment__item'>
            {job.requirements.reqItem.map((item,index)=>(
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
          <h1>

          </h1>
        </div>
      </div>
    </section>
  )
}

// entonces el useParams nos sirve para pasar info de algo que apretamos a otra pagina

// ¡Hola! Sí, eso es correcto. useParams es un hook de React Router que nos permite acceder a los parámetros de la URL de la página actual en nuestra aplicación React. Esto es útil cuando queremos pasar información de una página a otra mediante la URL, como por ejemplo en una página de detalles de un producto, donde podríamos pasar el ID del producto en la URL y recuperarlo en la página de detalles utilizando useParams.