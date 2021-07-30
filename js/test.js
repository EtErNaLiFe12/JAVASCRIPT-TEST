// const now = new Date();
// const year = now.getFullYear();
// console.log("연도:", now);

// const a = [1, 2, 3, 50];

// function test() {
//   console.log(a.sort((a,b) => (b - a) - (a - b)).join()); // sort() 오름차순 내림차순
  
//   console.log(a.splice(1,3));

// }
// test();


// function work(callback) {
//   setTimeout(() => {
//     const start = Date.now();
//     for(let i = 0; i < 1000000000; i++) {

//     }
//     const end = Date.now();
//     console.log(end - start + 'ms');
//     callback(end - start)
//   } , 0)
// }

// console.log('작업 시작!');
// work((ms) => {
//   console.log('작업이 끝났어요!');
//   console.log(ms + 'ms 걸렸다고 해요.')
// });
// console.log('다음 작업')


// ----------------------------------------------
// 콜백지옥
// function increaseAndPrint(n, callback) {
//   setTimeout(() => {
//     const increased = n + 1;
//     console.log(increased);
//     if (callback) {
//       callback(increased)
//     }
//   }, 1000)
// }

// increaseAndPrint(0, n => {
//   increaseAndPrint(n, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           console.log('작업 끝!')
//         })
//       })
//     })
//   });
// });

// ----------------------------------------------------
// promise - 비동기 처리 

// resolve
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('result');
//   }, 1000)
// })

// myPromise.then(result => {
//   console.log(result);
// })

// ----------------------------------------------------
// reject
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error());
//   }, 1000)
// });

// myPromise.then(result => {
//   console.log(result);
// }).catch(e => {
//   console.log(e);
// })

// ----------------------------------------------------
// function increaseAndPrint(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const value = n + 1;
//       if(value === 5) {
//         const error = new Error();
//         error.name = 'ValueIsFiveError';
//         reject(error);
//         return;
//       }
//       console.log(value);
//       resolve(value);
//     }, 1000);
//   })
// }

// increaseAndPrint(0).then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .catch(e => {
//   console.error(e);
// })

// ----------------------------------------------------

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function makeError() {
//   await sleep(1000);
//   const error = new Error();
//   throw error;
// }

// async function process() {
//   try { // async await에서 에러를 잡아낼때는 try catch문을 사용할 것
//     await makeError();
//   } catch (e) {
//     console.error(e);
//   }
// }

// process();

// async function process() {
//   console.log('안녕하세요!');
//   await sleep(1000);
//   console.log('반갑습니다!');
//   return true;
// }

// process().then(value => {
//   console.log(value);
// });


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
}

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
}
