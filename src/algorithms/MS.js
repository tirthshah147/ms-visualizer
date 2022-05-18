
const steps = [
    {
        value:null,
        childs:[]
    }

];

const msCodeColorSteps = [[], []];


const stack = [steps[0]];

const mergeSteps = [null,null];
const mergeColorSteps = [null,null];
const mergeCodeColorSteps = [null,null];

const leftIndexes = [null,null];
const rightIndexes = [null,null];


const ms = (array) => {
    console.log('Inside algorithm');
    steps.push(
        {
            value:null,
            childs:[{
                value:array.slice(),
                childs:[]
            }]
        },
    )
    stack.push(steps[1].childs[0]);
    
    mergeSort(array);
    return {steps,mergeSteps,mergeColorSteps, mergeCodeColorSteps, leftIndexes, rightIndexes, msCodeColorSteps};
};



const mergeSort = (array) => {

    // const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
    // if (!lastMSCodeColorStep.length) {
    //     const newMSCodeColorStep = [0];
    //     msCodeColorSteps.push(newMSCodeColorStep);
    // }else{
    //     const newMSCodeColorStep = [...lastMSCodeColorStep];
    //     newMSCodeColorStep[newMSCodeColorStep.length - 1] = 7;
    //     newMSCodeColorStep.push(0);
    //     msCodeColorSteps.push(newMSCodeColorStep);
    // }

    

    if (array.length <= 1) {


        makeHowActive(true);
        // createUpdatePosMSCodeColorStep(1);

        createUpdatePosMSCodeColorStep(1)
        createFalseTreeStep()
        createFalseMergeStep();

        makeSorted();
        createUpdatePosMSCodeColorStep(2);

        stack.pop();
        
        const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
        const newMSCodeColorStep = [...lastMSCodeColorStep];
        newMSCodeColorStep.pop();
        newMSCodeColorStep[newMSCodeColorStep.length - 1] = 0;
        msCodeColorSteps.push(newMSCodeColorStep);
        createFalseTreeStep()
        createFalseMergeStep();

        return array
    }


    const midIndex = Math.floor(array.length/2);
    const leftArr = array.slice(0,midIndex);
    const rightArr = array.slice(midIndex);

    let leftChild = {
        value: leftArr.slice(),
        childs:[]
    }

    let rightChild = {
        value: rightArr.slice(),
        childs:[]
    }

    makeHowActive(true);

    createUpdatePosMSCodeColorStep(1)
    createFalseTreeStep()
    createFalseMergeStep();
    
    

    createStep(leftChild, rightChild);

    return merge(mergeSort(leftArr),mergeSortRight(rightArr));
    
}

const mergeSortRight = (array) => {

    // const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
    // if (!lastMSCodeColorStep.length) {
    //     const newMSCodeColorStep = [0];
    //     msCodeColorSteps.push(newMSCodeColorStep);
    // }else{
    //     const newMSCodeColorStep = [...lastMSCodeColorStep];
    //     newMSCodeColorStep[newMSCodeColorStep.length - 1] = 8;
    //     msCodeColorSteps.push(newMSCodeColorStep);
    // }

    if (array.length <= 1) {
        makeHowActive(true,'right');

        createUpdatePosMSCodeColorStep(1)
        createFalseTreeStep()
        createFalseMergeStep();

        makeSorted();
        createUpdatePosMSCodeColorStep(2);

        stack.pop();

        const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
        const newMSCodeColorStep = [...lastMSCodeColorStep];
        newMSCodeColorStep.pop();
        newMSCodeColorStep[newMSCodeColorStep.length - 1] = 0;
        msCodeColorSteps.push(newMSCodeColorStep);
        createFalseTreeStep()
        createFalseMergeStep();

        return array
    }

    const midIndex = Math.floor(array.length/2);
    const leftArr = array.slice(0,midIndex);
    const rightArr = array.slice(midIndex);

    let leftChild = {
        value: leftArr.slice(),
        childs:[]
    }

    let rightChild = {
        value: rightArr.slice(),
        childs:[]
    }

    makeHowActive(true,'right');

    createUpdatePosMSCodeColorStep(1)
    createFalseTreeStep()
    createFalseMergeStep();

    createStep(leftChild, rightChild);

    return merge(mergeSort(leftArr),mergeSortRight(rightArr));
    
}


const merge = (leftArr, rightArr) => {


    leftIndexes.push(null);
    rightIndexes.push(null);
    let leftIndex = 0;
    let rightIndex = 0;

    const leftArrColorStepSample = new Array(leftArr.length).fill(0);
    const rightArrColorStepSample = new Array(rightArr.length).fill(0);

    let parentLength = leftArr.length + rightArr.length;

    const outputArr = new Array(parentLength).fill(null);

    const outputArrColorStepSample = new Array(parentLength).fill(0);

    const mergeCodeColorStepSample = new Array(13).fill(0);

    let count = 0;

    mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample], [...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    createFalseTreeStep();
    createUpdatePosMSCodeColorStep(6);

    //Add step to make leftindeex,rightIndex = 0;
    mergeCodeColorStepSample[0] = 1;
    mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample], [...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    leftIndexes.push(leftIndex);
    rightIndexes.push(rightIndex);
    createFalseTreeStep();
    createFalseMSCodeColorStep();

    mergeCodeColorStepSample[0] = 0;
    //Add step to initialize outputArr & highlight that code;
    mergeCodeColorStepSample[1] = 1;
    mergeColorSteps.push([new Array(outputArrColorStepSample.length).fill(4), [...leftArrColorStepSample], [...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    leftIndexes.push(leftIndex);
    rightIndexes.push(rightIndex);
    createFalseTreeStep();
    createFalseMSCodeColorStep();

    mergeCodeColorStepSample[1] = 0;

    mergeCodeColorStepSample[2] = 1;
    mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample], [...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    leftIndexes.push(leftIndex);
    rightIndexes.push(rightIndex);
    createFalseTreeStep();
    createFalseMSCodeColorStep();

    mergeCodeColorStepSample[2] = 0;



    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
       const leftElement = leftArr[leftIndex];
       const rightElement = rightArr[rightIndex];

       leftArrColorStepSample[leftIndex] = 1;
       rightArrColorStepSample[rightIndex] = 1;
       mergeCodeColorStepSample[3] = 1;

       mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
       mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
       mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
       leftIndexes.push(leftIndex);
       rightIndexes.push(rightIndex);
       createFalseTreeStep();
       createFalseMSCodeColorStep();


       if (leftElement < rightElement) {
           leftArrColorStepSample[leftIndex] = 2;
           rightArrColorStepSample[rightIndex] = 1;

           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
           leftIndexes.push(leftIndex);
           rightIndexes.push(rightIndex);
           createFalseTreeStep();
           createFalseMSCodeColorStep();

           outputArr[count] = leftElement;

           leftArrColorStepSample[leftIndex] = 3;
           mergeCodeColorStepSample[3] = 0;
           mergeCodeColorStepSample[4] = 1;
           
           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
           leftIndexes.push(leftIndex);
           rightIndexes.push(rightIndex);
           createFalseTreeStep();
           createFalseMSCodeColorStep();
           
           mergeCodeColorStepSample[4] = 0;
           
           leftIndex++

           leftArrColorStepSample[leftIndex] = 1;
           mergeCodeColorStepSample[5] = 1;
           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
           leftIndexes.push(leftIndex);
           rightIndexes.push(rightIndex);
           createFalseTreeStep();
           createFalseMSCodeColorStep();

           mergeCodeColorStepSample[5] = 0;


       }else{
           leftArrColorStepSample[leftIndex] = 1;
           rightArrColorStepSample[rightIndex] = 2;

           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
           leftIndexes.push(leftIndex);
           rightIndexes.push(rightIndex);
           createFalseTreeStep();
           createFalseMSCodeColorStep();

           outputArr[count] = rightElement;

           rightArrColorStepSample[rightIndex] = 3;
           mergeCodeColorStepSample[3] = 0;
           mergeCodeColorStepSample[6] = 1;

           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
           leftIndexes.push(leftIndex);
           rightIndexes.push(rightIndex);
           createFalseTreeStep();
           createFalseMSCodeColorStep();

           mergeCodeColorStepSample[6] = 0;

           rightIndex++

           mergeCodeColorStepSample[7] = 1;
           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
           leftIndexes.push(leftIndex);
           rightIndexes.push(rightIndex);
           createFalseTreeStep();
           createFalseMSCodeColorStep();

           mergeCodeColorStepSample[7] = 0;

       }

       count++


       mergeCodeColorStepSample[2] = 1;
       mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
       mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
       mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
       leftIndexes.push(leftIndex);
       rightIndexes.push(rightIndex);
       createFalseTreeStep();
       createFalseMSCodeColorStep();

       mergeCodeColorStepSample[2] = 0;


    }


    mergeCodeColorStepSample[8] = 1;
    mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    leftIndexes.push(leftIndex);
    rightIndexes.push(rightIndex);
    createFalseTreeStep();
    createFalseMSCodeColorStep();
    
    

    for (let j = leftIndex; j < leftArr.length; j++) {
        
        leftArrColorStepSample[j] = 2;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]]);
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
        mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
        leftIndexes.push(leftIndex);
        rightIndexes.push(rightIndex);
        createFalseTreeStep();
        createFalseMSCodeColorStep();

        outputArr[count] = leftArr[j] ;

        mergeCodeColorStepSample[8] = 0;

        mergeCodeColorStepSample[9] = 1;
        leftArrColorStepSample[j] = 3;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
        mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
        leftIndexes.push(leftIndex);
        rightIndexes.push(rightIndex);
        createFalseTreeStep();
        createFalseMSCodeColorStep();

        mergeCodeColorStepSample[9] = 0;

        mergeCodeColorStepSample[8] = 1;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
        mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
        leftIndexes.push(leftIndex);
        rightIndexes.push(rightIndex);
        createFalseTreeStep();
        createFalseMSCodeColorStep();

        count++
    }

    mergeCodeColorStepSample[8] = 0;

    mergeCodeColorStepSample[10] = 1;
    mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    leftIndexes.push(leftIndex);
    rightIndexes.push(rightIndex);
    createFalseTreeStep();
    createFalseMSCodeColorStep();

    

    for (let j = rightIndex; j < rightArr.length; j++) {
        rightArrColorStepSample[j] = 2;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
        mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
        leftIndexes.push(leftIndex);
        rightIndexes.push(rightIndex);
        createFalseTreeStep();
        createFalseMSCodeColorStep();

        outputArr[count] = rightArr[j];

        mergeCodeColorStepSample[10] = 0;

        mergeCodeColorStepSample[11] = 1;
        rightArrColorStepSample[j] = 3;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
        mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
        leftIndexes.push(leftIndex);
        rightIndexes.push(rightIndex);
        createFalseTreeStep();
        createFalseMSCodeColorStep();

        mergeCodeColorStepSample[11] = 0;

        mergeCodeColorStepSample[10] = 1;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
        mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
        leftIndexes.push(leftIndex);
        rightIndexes.push(rightIndex);
        createFalseTreeStep();
        createFalseMSCodeColorStep();

        count++ 
    }

    mergeCodeColorStepSample[10] = 0;

    mergeCodeColorStepSample[12] = 1;
    mergeColorSteps.push([new Array(outputArrColorStepSample.length).fill(2), [...leftArrColorStepSample],[...rightArrColorStepSample]])
    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    mergeCodeColorSteps.push([...mergeCodeColorStepSample]);
    leftIndexes.push(leftIndex);
    rightIndexes.push(rightIndex);
    createFalseTreeStep();
    createFalseMSCodeColorStep();

    

    // let sortedArr = [...outputArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
    createBackwardStep(outputArr);
    stack.pop();
    return [...outputArr]

}


function makeHowActive(bool,direction="left"){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isActive = bool;

    createFalseMergeStep();

    const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
    if (!lastMSCodeColorStep.length) {
        const newMSCodeColorStep = [0];
        msCodeColorSteps.push(newMSCodeColorStep);
    }else{
        const newMSCodeColorStep = [...lastMSCodeColorStep];
        newMSCodeColorStep[newMSCodeColorStep.length - 1] = direction === "left" ? 7 : 8;
        newMSCodeColorStep.push(0);
        msCodeColorSteps.push(newMSCodeColorStep);
    }
}

function makeSorted(){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isSorted = true;

    createFalseMergeStep();
}

function createStep(leftChild, rightChild){
    // makeHowActive(false);
    
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isActive = false;
    stack[stack.length - 1].childs.push(leftChild);
    createFalseMergeStep();
    createUpdatePosMSCodeColorStep(4);

    

    let newStep2 = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep2);
    stack[stack.length - 1].childs.push(rightChild);
    createFalseMergeStep();
    createUpdatePosMSCodeColorStep(5);

    stack.push(rightChild);
    stack.push(leftChild);
}

function createBackwardStep(sortedArr){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].value = sortedArr;
    
    createFalseMergeStep();
    createFalseMSCodeColorStep();

    makeSorted();

    const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
    const newMSCodeColorStep = [...lastMSCodeColorStep];
    newMSCodeColorStep.pop();
    newMSCodeColorStep[newMSCodeColorStep.length - 1] = 0;
    msCodeColorSteps.push(newMSCodeColorStep);

}


function createFalseTreeStep(){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
}

function createFalseMergeStep(){
    mergeSteps.push(null);
    mergeColorSteps.push(null);
    mergeCodeColorSteps.push(null);
    leftIndexes.push(null);
    rightIndexes.push(null);
}

function createFalseMSCodeColorStep(){
    let newStep = JSON.parse(JSON.stringify(msCodeColorSteps[msCodeColorSteps.length - 1]));
    msCodeColorSteps.push(newStep);
}

function createUpdatePosMSCodeColorStep(pos){
    const lastMSCodeColorStep = msCodeColorSteps[msCodeColorSteps.length - 1];
    const newMSCodeColorStep = [...lastMSCodeColorStep];
    newMSCodeColorStep[newMSCodeColorStep.length - 1] = pos;
    msCodeColorSteps.push(newMSCodeColorStep);
}



export default ms;



// const merge = (leftArr, rightArr) => {
    
//     let leftIndex = 0;
//     let rightIndex = 0;

//     const outputArr = [];

//     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
//        if (leftElement < rightElement) {
//            outputArr.push(leftElement);
//            leftIndex++

//        }else{
//            outputArr.push(rightElement);
//            rightIndex++
//        }

//     }

//     for (let j = leftIndex; j < leftArr.length; j++) {
//         outputArr.push(leftArr[j]) 
//     }

//     for (let j = rightIndex; j < rightArr.length; j++) {
//         outputArr.push(rightArr[j]);
//     }
//     return [...outputArr]

// }