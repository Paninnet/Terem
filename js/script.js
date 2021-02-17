function showHide() {
  let a =document.querySelector('header')
  a.classList.toggle("activee")
}

function changeOrder() {
  let a =document.querySelector('.section_item:first-child')
  a.classList.toggle("changeDir")
}
window.onscroll=function showHeader() {
  let a= document. querySelector('header')
  if(window.pageYOffset > 100){
    a.classList.add('move')
  }
  else {
    a.classList.remove('move')
  }
}
