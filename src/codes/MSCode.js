import React from 'react';
import styles from './MCode.module.css';

// export default function BSCode({codeColorKey, inputs, handleInputChange}) {
export default function MSCode({state,pos,index}) {

    const highlighted = {
        color: state === "active" ? `rgba(255, 48, 79, 1)` : `rgba(48, 48, 255, 1)`,
        fontWeight: `bold`
    }

    
  return (
    <div className={styles.smallcode}>
        <br/>
        <hr/>
        <br/>
        <div className={styles.block}>Stack Row: {index + 1}</div>
        <br/>
        <pre>
            <p>{"const mergeSort = (array) => {"}</p>  
            <p>{"   if"}<span style={pos === 1 ? highlighted : {}}>{"(array.length <= 1)"}</span>{" {"}</p>  
            <p>{"      "}<span style={pos === 2 ? highlighted : {}}>{"return array"}</span></p>  
            <p>{"   }"}</p>  
            <p>{"   "}<span style={pos === 3 ? highlighted : {}}>{"const midIndex = Math.floor(array.length/2);"}</span></p>
            <p>{"   "}<span style={pos === 4 ? highlighted : {}}>{"const leftArr = array.slice(0,midIndex);"}</span></p>
            <p>{"   "}<span style={pos === 5 ? highlighted : {}}>{"const rightArr = array.slice(midIndex);"}</span></p>
            <p>{"   "}<span style={pos === 6 ? highlighted : {}}>{"return merge("}<span style={pos === 7 ? highlighted : {}}>{"mergeSort(leftArr)"}</span><span style={pos === 8 ? highlighted : {}}>{",mergeSort(rightArr)"}</span>{");"}</span></p>
            <p>{"}"}</p>
        </pre>
    </div>
  )
}

