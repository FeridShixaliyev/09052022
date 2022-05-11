// Array func-lar

//Array-deki elementlerin ortalamsini qaytaran func
function avgArrElement(numArr){
    let sum=0;
    for (let i = 0; i < numArr.length; i++) {
        sum+=numArr[i];
    }
    return sum/numArr.length;
}
console.log(avgArrElement([1,2,3,4,5,6,7,7]))
//-------------------------------------

//Parameter olaraq integer array variable-i ve bir integer value qebul eden ve hemin integer value-nu integer array-e yeni element kimi elave eden metod.

function addElementToArr(arr,addEl){
    arr.push(addEl);
    return arr;
}
console.log(addElementToArr([1,2,34,4],8))
//-----------------------------

//Arr daxilinde min-max araliginda olan elementleri qaytaran func
function getRange(arr,min,max){
    for (let i = 0; i < arr.length; i++) {
         let newArr=arr.filter(e=>e>=min&&e<=max)
         return newArr;
    }
}
console.log(getRange([1,2,3,4,5,6,7,8,9],3,8))
//---------------------------------------------------


//String func-lar

//Gonderilen sozun icinde en az 1 boyuk 1 kicik char olamasini yoxlayan func
function checkWord(word){
    let isUpper=false;
    let isLower=false;
    
        for (let i = 0; i < word.length; i++) {
            if(word[i]==word[i].toUpperCase()){
                isUpper=true;
            }

            else if(word[i]==word[i].toLowerCase()){
                isLower=true;
            }

            if(isUpper && isLower){

                return true;
            }
        }
    return false
    
}


console.log(checkWord("Ferid"))
//---------------------------------------

//Gonderilen sozde nece eded n herfi var funksiyasi

function chrCount(word,chr){
    let count=0;
    for (let i = 0; i < word.length; i++) {
        if(word[i]==chr){
            count++;
        }
    }
    return count;
}
console.log(chrCount("Hello World","l"))


