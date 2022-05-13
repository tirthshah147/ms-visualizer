import React from 'react'
import MergeArrRow from './MergeArrRow'


export default function MergeDisplay({currentStep, currentColorStep}) {

  return (
    <div className="tree mergeTree">
        <ul>
            <MergeArrRow arr={currentStep[0]} colorCodes={currentColorStep[0]}>
                <MergeArrRow arr={currentStep[1]} colorCodes={currentColorStep[1]}/>
                <MergeArrRow arr={currentStep[2]} colorCodes={currentColorStep[2]}/>
            </MergeArrRow>
            {/* <li>
                <a>
                    <div className="arrayBlock">
                        {currentStep[0].map((num,index) => {
                            return <span style={{backgroundColor:colors[currentColorStep[0][index]]}}>{num}</span>
                        })}
                    </div>
                </a>
                <ul>
                    <li>
                        <a>
                            <div className="arrayBlock">
                                {currentStep[1].map((num,index) => {
                                    return <span style={{backgroundColor:colors[currentColorStep[1][index]]}}>{num}</span>
                                })}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className="arrayBlock">
                                {currentStep[2].map((num,index) => {
                                    return <span style={{backgroundColor:colors[currentColorStep[2][index]]}}>{num}</span>
                                })}
                            </div>
                        </a>
                    </li>
                </ul>


            </li> */}
        </ul>
    </div>
  )
}
