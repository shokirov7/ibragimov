import React from 'react'
import './Courses.css'

function Courses() {
  return (
    <div className='courses'>
      <div className="courses_container">
        <h1 className="courses_title">Это для тебя если ты:</h1>
        <p className="courses_block">
            <h1 className="courses_block_title">Новичок</h1>
            <div className="courses_block_par">
                Хочешь начать с нуля, но не знаешь, какой стабилизатор выбрать, как развивать насмотренность, креатив, где брать идеи, а также как перебороть страх общения с клиентами.
            </div>
            <div className="courses_block_number">1</div>
        </p>
        <div className="courses_or">либо</div>
        <p className="courses_block">
            <h1 className="courses_block_title">Профессионал</h1>
            <div className="courses_block_par">
            У тебя хороший опыт, крутые знания в монтаже, но хочешь прокачать свои навыки в новых приложениях, цветокоррекции, саунд дизайне, а также хочешь изучить новые направления, такие как статика и создании мини фильмов.
            </div>
            <div className="courses_block_number">2</div>
        </p>
      </div>
    </div>
  )
}

export default Courses
