// const t1 = document.getElementById('tab1');
// const t2 = document.getElementById('tab2');
// const t3 = document.getElementById('tab3');
// const tb1 = document.querySelector('.tab1');
// const tb2 = document.querySelector('.tab2');
// const tb3 = document.querySelector('.tab3');

// t1.onclick = function () {
//   tb1.style.display = "block";
//   tb2.style.display = "none";
//   tb3.style.display = "none";
//   t1.style.backgroundColor = "#fb5849";
//   t2.style.backgroundColor = "rgba(251, 88, 73, .4)";
//   t3.style.backgroundColor = "rgba(251, 88, 73, .4)";
// }
// t2.onclick = function () {
//   tb1.style.display = "none";
//   tb2.style.display = "block";
//   tb3.style.display = "none";
//   t1.style.backgroundColor = "rgba(251, 88, 73, .4)";
//   t2.style.backgroundColor = "#fb5849";
//   t3.style.backgroundColor = "rgba(251, 88, 73, .4)";
// }
// t3.onclick = function () {
//   tb2.style.display ="none";
//   tb3.style.display = "block";
//   t1.style.backgroundColor = "rgba(251, 88, 73, .4)";
//   t2.style.backgroundColor = "rgba(251, 88, 73, .4)";
//   t3.style.backgroundColor = "#fb5849";
// }

// --------------------------------------------------------------

// const tabMem = document.querySelectorAll('.tab-menu');
// const tb1 = document.querySelector('.tab1');
// const tb2 = document.querySelector('.tab2');
// const tb3 = document.querySelector('.tab3');

// for(i = 0; i < tabMem.length; i++) {
//   tabMem[i].addEventListener('click', function (e) {
//     const idEl = e.target.id;
//     console.log(idEl);
//     switch (idEl) {

//       case 'tab1':
//         tb1.style.display = "block";
//         tb2.style.display = "none";
//         tb3.style.display = "none";
//         tabMem[0].style.backgroundColor = "#fb5849";
//         tabMem[1].style.backgroundColor = "rgba(251, 88, 73, .4)";
//         tabMem[2].style.backgroundColor = "rgba(251, 88, 73, .4)";
//         break;

//       case 'tab2':
//         tb1.style.display = "none";
//         tb2.style.display = "block";
//         tb3.style.display = "none";
//         tabMem[0].style.backgroundColor = "rgba(251, 88, 73, .4)";
//         tabMem[1].style.backgroundColor = "#fb5849";
//         tabMem[2].style.backgroundColor = "rgba(251, 88, 73, .4)";
//         break;

//       case 'tab3':
//         tb2.style.display ="none";
//         tb3.style.display = "block";
//         tabMem[0].style.backgroundColor = "rgba(251, 88, 73, .4)";
//         tabMem[1].style.backgroundColor = "rgba(251, 88, 73, .4)";
//         tabMem[2].style.backgroundColor = "#fb5849";
//         break;    

//     }
//   })
// }

// -------------------------------------------------------------------------

const tabMem = document.querySelectorAll('.tab-menu');
const tb1 = document.querySelector('.tab1');
const tb2 = document.querySelector('.tab2');
const tb3 = document.querySelector('.tab3');

tabMem.forEach(tab => {
  tab.addEventListener('click', function (e) {
    const idEl = e.target.id;
    console.log(idEl);
    switch (idEl) {

      case 'tab1':
        tb1.style.display = "block";
        tb2.style.display = "none";
        tb3.style.display = "none";
        tabMem[0].style.backgroundColor = "#fb5849";
        tabMem[1].style.backgroundColor = "rgba(251, 88, 73, .4)";
        tabMem[2].style.backgroundColor = "rgba(251, 88, 73, .4)";
        break;

      case 'tab2':
        tb1.style.display = "none";
        tb2.style.display = "block";
        tb3.style.display = "none";
        tabMem[0].style.backgroundColor = "rgba(251, 88, 73, .4)";
        tabMem[1].style.backgroundColor = "#fb5849";
        tabMem[2].style.backgroundColor = "rgba(251, 88, 73, .4)";
        break;

      case 'tab3':
        tb2.style.display ="none";
        tb3.style.display = "block";
        tabMem[0].style.backgroundColor = "rgba(251, 88, 73, .4)";
        tabMem[1].style.backgroundColor = "rgba(251, 88, 73, .4)";
        tabMem[2].style.backgroundColor = "#fb5849";
        break;    

    }
  })
})

// -------------------------------------------------------------------------

const tabEl = document.querySelectorAll('.tab_menu .list li');
for(let i = 0; i < tabEl.length; i++) {
  tabEl[i].querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
   for(let j = 0; j < tabEl.length; j++) {
    tabEl[j].classList.remove('is_on');
   }
   this.parentNode.classList.add('is_on');
   console.log(this);
  })
}