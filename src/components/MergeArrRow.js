import React from 'react'

export default function MergeArrRow({children,arr, colorCodes}) {
    const colors = [
		'rgba(255, 255, 255, 1)',
        'rgba(255, 240, 31, 0.7)',
		'rgba(131, 232, 90, 0.7)',
		'rgba(180,180,180,1)',
		'rgba(25,255,255,0.7)',

	];

  return (
    <li>
      <a>
          <div className="arrayBlock">
              {arr.map((num,index) => {
                  return (
                    <div>
                      <span style={{backgroundColor:colors[colorCodes[index]]}}>{num}</span>
                      <br/>
                      <div className="indexBox">{index}</div>
                    </div>

                  
                  )
              })}
          </div>
      </a>

     {children ? (
       <ul>
         {children}
       </ul>
     ) : null}
  </li>
  )
}
