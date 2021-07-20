// const addEl = document.querySelector('.to-do');
// const delEl = document.querySelector('.to-do-del');
const butEl = document.querySelectorAll('body button')
let putEl = document.getElementById("input");
const orList = document.querySelector(".list ul")

let el;
let delBtn;
let check = 0; // list에 내용 없음 확인

function todoList() {
  
function add() {
  
  if(putEl.value) {
    el = document.createElement('li');
    // el.setAttribute('id', 'li');
    el.classList.add('list-style');

    delBtn = document.createElement('button');
    delBtn.classList.add('btns');
    delBtn.innerText = "Delete";
    delBtn.setAttribute('id', 'dlt')
    
    el.innerHTML = putEl.value;
    el.appendChild(delBtn);

    orList.appendChild(el);
    // elText = document.createTextNode(display); //createTextNode는 값을 넣을때 사용

    console.log('추가되었습니다.')
    putEl.value = '';

    check++;
    console.log(check);

  } else if (!putEl.value) {
      return console.log('값이 없습니다');
    }
  
    delBtn.onclick = function() {
        orList.removeChild(orList.querySelector('li:nth-child(n)'));
    }
  
}

function del() {
  if(check > 0) {
    orList.removeChild(orList.querySelector('li:last-child'));
    check--;
    console.log('삭제되었습니다.')
    console.log(check);
  } else if(check === 0) {
    return console.log('값이 없습니다');
  }
}


    
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

