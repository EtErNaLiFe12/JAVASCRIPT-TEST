// const addEl = document.querySelector('.to-do');
// const delEl = document.querySelector('.to-do-del');
const butEl = document.querySelectorAll('button')
let putEl = document.getElementById("input");
const orList = document.querySelector(".list ol")

let el;

// function list() {
//   for(let i = 0; i < listEl.length; i++) {
//     return listEl[i];
//   }
// }
// list();
function todoList() {

function add() {
  if(putEl.value) {
    el = document.createElement('li');
    el.innerHTML = putEl.value;
    orList.appendChild(el);
    // elText = document.createTextNode(display); //createTextNode는 값을 넣을때 사용
    console.log('추가되었습니다.')
    putEl.value = '';
  } 
}

function del() { 
  // let liEl = document.querySelector('li');
  orList.removeChild(orList.querySelector('li:last-child'));
  console.log('삭제되었습니다.')

}; 
    
//--------------------------------------------------
// forEach문과 switch문으로 조건에 따른 결과값 실행
// butEl.forEach(btn => {
butEl.forEach(function(btn) {
  btn.addEventListener('click', () => {
    switch(btn.dataset.type) {
      case 'add':
        add()
        break;
      case 'del':
        del()
        break;
      
        // default:
     }
   })
  })
}
todoList();

//---------------------------------------------------
// for문과 switch문으로 조건에 따른 결과값 실행
/* function btn() {
  for(let i = 0; i < butEl.length; i++) {
    butEl[i].addEventListener('click', () => {
      switch(butEl[i].dataset.type) {
        case 'add':
          add()
          break;
        case 'del':
          del()
          break;
      }
    })
  }
}
btn(); */

//---------------------------------------------------
// for문과 if문으로 조건에 따른 결과값 리턴
/* function btn() {
  for(let i = 0; i < butEl.length; i++) {
    butEl[i].addEventListener('click', () => {
      if (butEl[i].dataset.type === 'add') {
          return add()
      } else {
          return del()
      }
    })
  }
}
btn(); */

