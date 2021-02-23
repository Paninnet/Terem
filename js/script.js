function showHide() {
  let a = document.querySelector('header')
  a.classList.toggle("activee")
}

function changeOrder() {
  let a = document.querySelector('.section_item:first-child')
  a.classList.toggle("changeDir")
}
window.onscroll = function showHeader() {
  let a= document. querySelector('header')
  if(window.pageYOffset > 200){
    a.classList.add('move')
  }
  else {
    a.classList.remove('move')
  }
}

function closeModal() {
  let a = document.querySelector('.modalWind_overlay')
  let b =document.querySelector('body')
  b.classList.toggle("activee")
  a.classList.add('close')
}

// ----------------  Списки


let store={

}

function send() {
  event.preventDefault()

  let a = document.querySelector('.city').value
  let b = document.querySelector('.city2').value
  let c = document.querySelector('.city3').value
  let d = document.querySelector('.city4').value
  let e = document.querySelector('.city5').value
  let f = document.querySelector('.input1').value
  let g = document.querySelector('.input2').value
  let res = document.querySelector('.result')
  if (a==0 || b==0 || c==0 || d==0 || e==0 || f==0 || g==0) {
    alert("Заполните все поля")
    store={}
    res.innerHTML=""

  }
  else {
    store.select1=a
    store.select2=b
    store.select3=c
    store.select4=d
    store.select5=e
    store.name=f
    store.tel=g
    res.innerHTML=JSON.stringify(store)
  }

}
