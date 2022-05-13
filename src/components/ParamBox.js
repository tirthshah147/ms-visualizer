import React from 'react'

export default function ParamBox({value, title}) {
  return (
    <div className="paramBox">
        <div className="paramValue">
            {value}
        </div>
        <div className="paramTitle">
            {title}
        </div>
    </div>
  )
}
