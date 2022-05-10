import React from 'react';
import ProfileImg from '../assets/images/Group 33 (1).png'

export default function Node({tree}) {
  return (
    <>
        {tree.childs && (
            <ul>
                {tree.childs.map((child) => {
                    return (
                        <li>
                            <a href="#" className= {child.isSorted ? "isSorted" : child.isActive ? "isActive" : null}>
                                {/* <img src={ProfileImg}/> */}
                                <div className="arrayBlock">
                                    {child.value.map((num) => {
                                        return(
                                            <span>{num}</span>
                                        )
                                    })}
                                </div>
                                
                                {/* <span>{child.value}</span> */}
                                </a>
                            <Node tree={child}/>
                        </li>
                    )
                })}
            </ul>
        )}
    </>
  )
}
