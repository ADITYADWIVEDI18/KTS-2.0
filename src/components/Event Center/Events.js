import React from 'react'
import frame from "../../assets/Frame event.png";
const Events = () => {
  return (
    <div>
    <div className='m-16'>
        <div className='text-[8vh] text-white '>Our <span className='text-red-500 '>Events</span></div>
        <p className='w-[50vw] text-white'>Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов.</p>
    </div>
   <div className='my-8 w-full'><img src={frame}/></div>

    </div>
    
  )
}

export default Events