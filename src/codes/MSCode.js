import React from 'react';
import styles from './MSCode.module.css';

// export default function BSCode({codeColorKey, inputs, handleInputChange}) {
export default function MSCode({mergeCodeColorKey}) {

    const highlighted = {
        color: `rgba(255, 48, 79, 1)`,
        fontWeight: `bold`
    }

    
  return (
    <div className={styles.code}>
        <pre>
      
            <p>{"const merge = (leftArr, rightArr) => {"}</p>
            <p><span style={mergeCodeColorKey[0] === 1 ? highlighted : {}}>{"   let leftIndex, rightIndex = 0;"}</span></p>
            <p><span style={mergeCodeColorKey[1] === 1 ? highlighted : {}}>{"   const outputArr = []"}</span></p>
            <p>{"   while("}<span style={mergeCodeColorKey[2] === 1 ? highlighted : {}}>{"leftIndex < leftArr.length && rightIndex < rightArr.length"}</span>{"){"}</p>
            <p>{"      if ("}<span style={mergeCodeColorKey[3] === 1 ? highlighted : {}}>{"leftElement < rightElement"}</span>{") {"}</p>
            <p><span style={mergeCodeColorKey[4] === 1 ? highlighted : {}}>{"         outputArr.push(leftElement);"}</span></p>
            <p><span style={mergeCodeColorKey[5] === 1 ? highlighted : {}}>{"         leftIndex++;"}</span></p>
            <p>{"      }else{"}</p>
            <p><span style={mergeCodeColorKey[6] === 1 ? highlighted : {}}>{"         outputArr.push(rightElement);"}</span></p>
            <p><span style={mergeCodeColorKey[7] === 1 ? highlighted : {}}>{"         rightIndex++;"}</span></p>
            <p>{"      }"}</p>         
            <p>{"   }"}</p>         
            <p>{"   for"}<span style={mergeCodeColorKey[8] === 1 ? highlighted : {}}>{"(let j = leftIndex; j < leftArr.length; j++"}</span>{") {"}</p>         
            <p><span style={mergeCodeColorKey[9] === 1 ? highlighted : {}}>{"      outputArr.push(leftArr[j]);"}</span></p>         
            <p>{"   }"}</p>         
            <p>{"   for"} <span style={mergeCodeColorKey[10] === 1 ? highlighted : {}}>{"(let j = rightIndex; j < rightArr.length; j++"}</span>{") {"}</p>         
            <p><span style={mergeCodeColorKey[11] === 1 ? highlighted : {}}>{"      outputArr.push(rightArr[j]);"}</span></p>       
            <p>{"   }"}</p>       
            <p><span style={mergeCodeColorKey[12] === 1 ? highlighted : {}}>{"   return [...outputArr];"}</span></p>       
            <p>{"}"}</p>       
            {/* <p>{"const merge = (leftArr, rightArr) => {"}</p>
            <p><span style={mergeCodeColorKey[0] === 1 ? highlighted : {}}>{"   let leftIndex, rightIndex = 0; //0"}</span></p>
            <p><span style={mergeCodeColorKey[1] === 1 ? highlighted : {}}>{"   const outputArr = []; //1"}</span></p>
            <p>{"   while("}<span style={mergeCodeColorKey[2] === 1 ? highlighted : {}}>{"leftIndex < leftArr.length && rightIndex < rightArr.length //2"}</span>{"){"}</p>
            <p>{"      if ("}<span style={mergeCodeColorKey[3] === 1 ? highlighted : {}}>{"leftElement < rightElement //3"}</span>{") {"}</p>
            <p><span style={mergeCodeColorKey[4] === 1 ? highlighted : {}}>{"         outputArr.push(leftElement); //4"}</span></p>
            <p><span style={mergeCodeColorKey[5] === 1 ? highlighted : {}}>{"         leftIndex++; //5"}</span></p>
            <p>{"      }else{"}</p>
            <p><span style={mergeCodeColorKey[6] === 1 ? highlighted : {}}>{"         outputArr.push(rightElement); //6"}</span></p>
            <p><span style={mergeCodeColorKey[7] === 1 ? highlighted : {}}>{"         rightIndex++; //7"}</span></p>
            <p>{"      }"}</p>         
            <p>{"   }"}</p>         
            <p>{"   for"}<span style={mergeCodeColorKey[8] === 1 ? highlighted : {}}>{"(let j = leftIndex; j < leftArr.length; j++ //8"}</span>{") {"}</p>         
            <p><span style={mergeCodeColorKey[9] === 1 ? highlighted : {}}>{"      outputArr.push(leftArr[j]); //9"}</span></p>         
            <p>{"   }"}</p>         
            <p>{"   for"} <span style={mergeCodeColorKey[10] === 1 ? highlighted : {}}>{"(let j = rightIndex; j < rightArr.length; j++ //10"}</span>{") {"}</p>         
            <p><span style={mergeCodeColorKey[11] === 1 ? highlighted : {}}>{"      outputArr.push(rightArr[j]); //11"}</span></p>       
            <p>{"   }"}</p>       
            <p><span style={mergeCodeColorKey[12] === 1 ? highlighted : {}}>{"   return [...outputArr]; //12"}</span></p>       
            <p>{"}"}</p>        */}
        </pre>
    </div>
  )
}
