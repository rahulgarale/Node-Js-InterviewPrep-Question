//given unsorted arrya, find max differance 
//between ssuccesive elements in its sorted form

const maxDiff=(arr)=>{
    let gap=0;
    arr.sort((a,b)=>a-b);
   // console.log(arr);
    let prev=arr[0];
    for(let i=1;i<arr.length;i++){
        let arrDiff=arr[i] - prev;
        if(arrDiff > gap){
            gap = arrDiff;

        }
        //alternative to if
        // gap=Math.max(gap,arrDiff);
        // console.log(gap);
        prev=arr[i];
    }
    return gap;
}
const arr=[20,1,17,,3,16,2,7];

console.log(maxDiff(arr));