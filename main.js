/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}



/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/
document.querySelector('#d6-roll').addEventListener('click', ()=>{
  sixes.push(getRandomNumber(6))
  document.getElementById('d6-roll').src=`./images/d6/${sixes[sixes.length-1]}.png`
  let sixMean = mean(sixes)
  document.querySelector('#d6-rolls-mean').innerHTML = `${sixMean}`
  let sixMedian = median(sortByNumber(sixes))
  document.querySelector('#d6-rolls-median').innerHTML= `${sixMedian}`
  let sixMode = mode(sortByNumber(sixes))
  document.querySelector('#d6-rolls-mode').innerHTML = `${sixMode}`
})
const sumdoublesixes = []

document.querySelector('#double-d6-roll-1').addEventListener('click', ()=>{
  doubleSixes.push(getRandomNumber(6), getRandomNumber(6))
  document.getElementById('double-d6-roll-1').src=`./images/d6/${doubleSixes[doubleSixes.length-1]}.png`
  document.getElementById('double-d6-roll-2').src=`./images/d6/${doubleSixes[doubleSixes.length-2]}.png`
  let doubleSixMean = mean(doubleSixes) * 2
  document.querySelector('#double-d6-rolls-mean').innerHTML = `${doubleSixMean}`
  sumdoublesixes.push(doubleSixes[doubleSixes.length-2] + doubleSixes[doubleSixes.length-1])
  let doubleSixMedian = median(sortByNumber(sumdoublesixes))
  document.querySelector('#double-d6-rolls-median').innerHTML= `${doubleSixMedian}`
  let doubleSixMode = mode(sortByNumber(sumdoublesixes))
  document.querySelector('#double-d6-rolls-mode').innerHTML = `${doubleSixMode}`
// console.log(doubleSixes)
// console.log(sumdoublesixes)
})
document.querySelector('#double-d6-roll-2').addEventListener('click', ()=>{
  doubleSixes.push(getRandomNumber(6), getRandomNumber(6))
  document.getElementById('double-d6-roll-1').src=`./images/d6/${doubleSixes[doubleSixes.length-1]}.png`
  document.getElementById('double-d6-roll-2').src=`./images/d6/${doubleSixes[doubleSixes.length-2]}.png`
  let doubleSixMean = mean(doubleSixes) * 2
  document.querySelector('#double-d6-rolls-mean').innerHTML = `${doubleSixMean}`
  sumdoublesixes.push(doubleSixes[doubleSixes.length-2] + doubleSixes[doubleSixes.length-1])
  let doubleSixMedian = median(sortByNumber(sumdoublesixes))
  document.querySelector('#double-d6-rolls-median').innerHTML= `${doubleSixMedian}`
  let doubleSixMode = mode(sortByNumber(sumdoublesixes))
  document.querySelector('#double-d6-rolls-mode').innerHTML = `${doubleSixMode}`
    
  
  })
  
document.querySelector('#d12-roll').addEventListener('click', ()=>{
  twelves.push(getRandomNumber(12))
  document.getElementById('d12-roll').src=`./images/numbers/${twelves[twelves.length-1]}.png`
  let twelveMean = mean(twelves)
  document.querySelector('#d12-rolls-mean').innerHTML = `${twelveMean}`
  let twelveMedian = median(sortByNumber(twelves))
  document.querySelector('#d12-rolls-median').innerHTML= `${twelveMedian}`
  let twelveMode = mode(sortByNumber(twelves))
  document.querySelector('#d12-rolls-mode').innerHTML = `${twelveMode}`
})
document.querySelector('#d20-roll').addEventListener('click', ()=>{
  twenties.push(getRandomNumber(20))
  document.getElementById('d20-roll').src=`./images/numbers/${twenties[twenties.length-1]}.png`
  let twentyMean = mean(twenties)
  document.querySelector('#d20-rolls-mean').innerHTML = `${twentyMean}`
  let twentyMedian = median(sortByNumber(twenties))
  document.querySelector('#d20-rolls-median').innerHTML= `${twentyMedian}`
  let twentyMode = mode(sortByNumber(twenties))
  document.querySelector('#d20-rolls-mode').innerHTML = `${twentyMode}`
})




/******************
 * RESET FUNCTION *
 ******************/

const resetButton = document.querySelector('#reset-button').addEventListener('click', ()=>{
  sixes.length = 0
  doubleSixes.length = 0
  twelves.length = 0
  twenties.length = 0
  sumdoublesixes.length = 0

  document.getElementById('d6-roll').src = './images/start/d6.png'
  document.getElementById('double-d6-roll-1').src = './images/start/d6.png'
  document.getElementById('double-d6-roll-2').src = './images/start/d6.png'
  document.getElementById('d12-roll').src = './images/start/d12.jpeg'
  document.getElementById('d20-roll').src = './images/start/d20.jpg'
  
  document.getElementById('d6-rolls-mean').innerHTML = 'NA'
  document.getElementById('d6-rolls-median').innerHTML = 'NA'
  document.getElementById('d6-rolls-mode').innerHTML = 'NA'
  
  document.getElementById('double-d6-rolls-mean').innerHTML = 'NA'
  document.getElementById('double-d6-rolls-median').innerHTML = 'NA'
  document.getElementById('double-d6-rolls-mode').innerHTML = 'NA'
  
  document.getElementById('d12-rolls-mean').innerHTML = 'NA'
  document.getElementById('d12-rolls-median').innerHTML = 'NA'
  document.getElementById('d12-rolls-mode').innerHTML = 'NA'
  
  document.getElementById('d20-rolls-mean').innerHTML = 'NA'
  document.getElementById('d20-rolls-median').innerHTML = 'NA'
  document.getElementById('d20-rolls-mode').innerHTML = 'NA'
})


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
const mean = function(arr){
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  const average = sum / arr.length
  return average

}

const median = function(arr){
  arr.sort((a, b) => a - b)
  const mid = Math.floor(arr.length / 2)
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2
  }else{
    return arr[mid]
  }
}

// const mode = function(array) {
//    const counts = {};
//   for (const element of array) {
//     if (counts[element]) {
//       counts[element]++;
//     } else {
//       counts[element] = 1;
//     }
//   }
//   let maxCount = 0;
//   let mode;
//   for (const [element, count] of Object.entries(counts)) {
//     if (count > maxCount) {
//       maxCount = count;
//       mode = element;
      
//     }
//   }
//   return mode;
// }
const mode = function(arr){
  const frequencyMap = new Map()
  for (const element of arr) {
    if(!frequencyMap.has(element)){
      frequencyMap.set(element, 0)
    }
    frequencyMap.set(element, frequencyMap.get(element) + 1)
  }
  let mode = null
  let maxFrequency = 0
  for (const [element, frequency] of frequencyMap){
    if(frequency > maxFrequency){
      mode = element
      maxFrequency = frequency
    }
  }
  return mode
} 