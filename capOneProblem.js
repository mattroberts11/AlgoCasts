const records  = [
  "John: 5", "Michael: 3", "Ruby: 5", "Ruby: 3", "Michael: 1"
]

const averageScore = (records) => {

  let result = '';
  let dataArr = [];

  for(let i = 0; i < records.length; i++){

    let recordArr = records[i].split('');

    dataArr.push([recordArr.slice(0, recordArr.length - 3).join(''), parseInt(recordArr[recordArr.length - 1])]);
  }

  let objMap = {};

  for(let j = 0; j < dataArr.length; j++){
    let name = dataArr[j][0];
    let score = dataArr[j][1];
    let divisor = 1;

    if(name in objMap){
      objMap[name].score += score;
      objMap[name].divisor += 1;
      objMap[name].avg = objMap[name].score / objMap[name].divisor;
    }else{
      objMap[name] = {'score': score, 'divisor': divisor, 'avg': score};
    }
  }

  let currentHighest = 0;

  for( const property in objMap){
    if(objMap[property].avg > currentHighest){
      currentHighest = objMap[property].avg;
      result = `${property} had the highest average score of ${currentHighest}`;
    }
  }
  // i think the original problem just wanted a return statement with the name and the average score but I was having fun with it.
  console.log(result);
}

averageScore(records);