import React from 'react'
import './Courses.css'

function Courses() {
  return (
    <div className='courses'>
      <div className="courses_container">
        <h1 className="courses_title">Это для тебя если ты:</h1>
        <span className="courses_block">
            <h1 className="courses_block_title">Новичок</h1>
            <div className="courses_block_par">
                Хочешь начать с нуля, но не знаешь, какой стабилизатор выбрать, как развивать насмотренность, креатив, где брать идеи, а также как перебороть страх общения с клиентами.
            </div>
            <div className="courses_block_number">1</div>
        </span>
        <div className="courses_or">либо</div>
        <span className="courses_block">
            <h1 className="courses_block_title">Профессионал</h1>
            <div className="courses_block_par">
            У тебя хороший опыт, крутые знания в монтаже, но хочешь прокачать свои навыки в новых приложениях, цветокоррекции, саунд дизайне, а также научиться делать спидрамп в Blurrr как в After Effects.
            </div>
            <div className="courses_block_number">2</div>
        </span>
      </div>
    </div>
  )
}

export default Courses
