import React from 'react';
export function Testimonials(props){
      return(
            <div className='flex w-96 h-60 bg-slate-500 flex-col p-10 m-3 justify-around rounded-lg'   >
                  <p>"{props.content}"</p>
                  <h3>{props.name}</h3>
            </div>
      )
}