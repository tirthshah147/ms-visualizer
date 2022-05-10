
const steps = [
    {
        value:null,
        childs:[]
    }

];


const stack = [steps[0]];

const mergeSteps = [null,null];
const mergeColorSteps = [null,null];


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
    return {steps,mergeSteps,mergeColorSteps};
};



const mergeSort = (array) => {

    if (array.length <= 1) {
        makeHowActive(true);
        makeSorted();

        stack.pop();
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
    

    // makeHowActive(false);

    createStep(leftChild, rightChild);

    return merge(mergeSort(leftArr),mergeSort(rightArr));
    
}


const merge = (leftArr, rightArr) => {
    
    let leftIndex = 0;
    let rightIndex = 0;

    const leftArrColorStepSample = new Array(leftArr.length).fill(0);
    const rightArrColorStepSample = new Array(rightArr.length).fill(0);

    let parentLength = leftArr.length + rightArr.length;

    const outputArr = new Array(parentLength).fill(null);


    const outputArrColorStepSample = new Array(parentLength).fill(0);


    mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
    // console.log("mergeSteps", mergeSteps);
    mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample], [...rightArrColorStepSample]])

    createFalseTreeStep();

    

    let count = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
       const leftElement = leftArr[leftIndex];
       const rightElement = rightArr[rightIndex];

       leftArrColorStepSample[leftIndex] = 1;
       rightArrColorStepSample[rightIndex] = 1;

       mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
       mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

       createFalseTreeStep();

       if (leftElement < rightElement) {
           leftArrColorStepSample[leftIndex] = 2;
           rightArrColorStepSample[rightIndex] = 1;

           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

           createFalseTreeStep();

           outputArr[count] = leftElement;

           leftArrColorStepSample[leftIndex] = 3;
           
           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);
           
           createFalseTreeStep();
           

           leftIndex++

       }else{
           leftArrColorStepSample[leftIndex] = 1;
           rightArrColorStepSample[rightIndex] = 2;

           

           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

           createFalseTreeStep();

           outputArr[count] = rightElement;

           rightArrColorStepSample[rightIndex] = 3;

           mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
           mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

           createFalseTreeStep();

           rightIndex++
       }


       count++

    }

    for (let j = leftIndex; j < leftArr.length; j++) {
        leftArrColorStepSample[j] = 2;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

        createFalseTreeStep();

        outputArr[count] = leftArr[j] 

        leftArrColorStepSample[j] = 3;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

        createFalseTreeStep();

        count++
    }

    for (let j = rightIndex; j < rightArr.length; j++) {
        rightArrColorStepSample[j] = 2;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

        createFalseTreeStep();

        outputArr[count] = rightArr[j];

        rightArrColorStepSample[j] = 3;
        mergeColorSteps.push([[...outputArrColorStepSample], [...leftArrColorStepSample],[...rightArrColorStepSample]])
        mergeSteps.push([[...outputArr], [...leftArr], [...rightArr]]);

        createFalseTreeStep();
        
        count++ 
    }


    

    // let sortedArr = [...outputArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
    createBackwardStep(outputArr);
    stack.pop();
    return [...outputArr]

}


function makeHowActive(bool){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isActive = bool;

    createFalseMergeStep();
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


    let newStep2 = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep2);
    stack[stack.length - 1].childs.push(rightChild);

    createFalseMergeStep();

    stack.push(rightChild);
    stack.push(leftChild);
}

function createBackwardStep(sortedArr){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].value = sortedArr;
    
    createFalseMergeStep();

    makeSorted();

}


function createFalseTreeStep(){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
}

function createFalseMergeStep(){
    mergeSteps.push(null);
    mergeColorSteps.push(null);
}

export default ms;