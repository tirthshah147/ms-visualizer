
const steps = [
    {
        value:null,
        childs:[]
    }

];

const stack = [steps[0]];

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
    return steps;
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
    const outputArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
       const leftElement = leftArr[leftIndex];
       const rightElement = rightArr[rightIndex];

       if (leftElement < rightElement) {
           outputArr.push(leftElement);
           leftIndex++
       }else{
           outputArr.push(rightElement);
           rightIndex++
       }

    }

    let sortedArr = [...outputArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
    createBackwardStep(sortedArr);
    stack.pop();
    return sortedArr

}


function makeHowActive(bool){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isActive = bool;

}

function makeSorted(){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isSorted = true;
}

function createStep(leftChild, rightChild){
    // makeHowActive(false);
    
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].isActive = false;
    stack[stack.length - 1].childs.push(leftChild);

    let newStep2 = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep2);
    stack[stack.length - 1].childs.push(rightChild);

    stack.push(rightChild);
    stack.push(leftChild);
}

function createBackwardStep(sortedArr){
    let newStep = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    steps.splice(steps.length - 1, 0, newStep);
    stack[stack.length - 1].value = sortedArr;
    makeSorted();
}

export default ms;