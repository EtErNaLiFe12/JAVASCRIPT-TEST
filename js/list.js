const toDoForm = document.querySelector(".js-toDoForm");
const putEl = toDoForm.querySelector("input");
const butEl = document.querySelectorAll('button');
const orList = document.querySelector(".list ul");

let check = 0; // list에 내용 없음 확인

const TODOS_LS = 'toDos';

let toDos = [];

//----------------------------------------------------------

function dlt(event) {
  const btn = event.target;
  const li = btn.parentNode;
  orList.removeChild(li);
  check--;
  console.log(check);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//----------------------------------------------------------

function add(text) {
    // el.setAttribute('id', newId);
    const el = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText = "Delete";
    delBtn.addEventListener('click', dlt);
    delBtn.classList.add('btns');
    span.innerText = text;
    el.appendChild(span);
    el.appendChild(delBtn);
    el.id = newId;
    el.classList.add('list-style');
    orList.appendChild(el);
    // elText = document.createTextNode(display); //createTextNode는 값을 넣을때 사용

    console.log('추가되었습니다.')
 
    putEl.value = '';

    check++;
    console.log(check);
    
    const toDoObj = {
      text: text,
      id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

//----------------------------------------------------------


function handleSubmit(event) {
  event.preventDefault();
  const currentValue = putEl.value;
  add(currentValue);
  putEl.value = "";
}
function loadToDos() {
 const loadedToDos = localStorage.getItem(TODOS_LS);
 if(loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      add(toDo.text);
   })
 } 
}
function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}
init();

//----------------------------------------------------------

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
// butEl.forEach(function(btn) {
//   btn.addEventListener('click', () => {
//     switch(btn.dataset.type) {
//         case 'add':
//           add()
//           break;
//         case 'del':
//           del()
//           break;
//           // default:
//         }
//      })
//   })


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

