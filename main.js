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
document.querySelector('#double-d6-roll-1').addEventListener('click', ()=>{
  doubleSixes.push(getRandomNumber(6))
  document.getElementById('double-d6-roll-1').src=`./images/d6/${doubleSixes[doubleSixes.length-1]}.png`
  let doubleSixMean = mean(sixes)
  document.querySelector('#double-d6-rolls-mean').innerHTML = `${doubleSixMeanMean}`
  let doubleSixMedian = median(sortByNumber(sixes))
  document.querySelector('#double-d6-rolls-median').innerHTML= `${doubleSixMedian}`
  let doubleSixMode = mode(sortByNumber(sixes))
  document.querySelector('#double-d6-rolls-mode').innerHTML = `${doubleSixMode}`

})
document.querySelector('#double-d6-roll-2').addEventListener('click', ()=>{
    doubleSixes.push(getRandomNumber(6))
    document.getElementById('double-d6-roll-2').src=`./images/d6/${doubleSixes[doubleSixes.length-1]}.png`
    let doubleSixMean = mean(sixes)
  // document.querySelector('#double-d6-rolls-mean').innerHTML = `${doubleSixMeanMean}`
  // let doubleSixMedian = median(sortByNumber(sixes))
  // document.querySelector('#double-d6-rolls-median').innerHTML= `${doubleSixMedian}`
  // let doubleSixMode = mode(sortByNumber(sixes))
  // document.querySelector('#double-d6-rolls-mode').innerHTML = `${doubleSixMode}`

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
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  }else{
    return arr[arr.length / 2]
  }
}

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