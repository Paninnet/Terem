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



// let x=document.querySelectorAll('.city')
// let select_value = document.querySelector('.city').onchange =function () {
//
//   alert(document.querySelector('.city').value);
// }


// function select(block= document.querySelector('.first'),arrow= document.querySelector('.arrow')) {
//   // block.classList.toggle("open")
//   arrow.classList.toggle('change')
// }
//
// function selectb(block= document.querySelector('.second'),arrow= document.querySelector('.ar2')) {
//   // block.classList.toggle("open")
//   arrow.classList.toggle('change')
// }

// function selectb() {
//   let b =document.querySelector('.second')
//   b.classList.toggle("open")
//   let reverseArrow= document.querySelector('.arrow')
//   reverseArrow.classList.toggle('change')
// }

// var store = {
//   select1: null,
//   select2: null,
//   select3: null,
//   select4: null,
//   select5: null,
//   input1: '',
//   input2: ''
// }
//
// $('.checklist_content_item').click(function () {
//   if ($(this).next('.drop_dowm').hasClass('open')) {
//     $(this).next('.drop_dowm').removeClass('open')
//     $(this).children('.arrow').removeClass('change')
//   } else {
//     $('.drop_dowm.open').removeClass('open')
//     $('.arrow.change').removeClass('change')
//
//     $(this).next('.drop_dowm').addClass('open')
//     $(this).children('.arrow').addClass('change')
//   }
// })
//
// $('.option').click(function () {
//   $(this).siblings('.active').removeClass('active')
//   $(this).addClass('active')
//
//   store[$(this).siblings('.store').text()] = $(this).text()
//
//   console.log(store)
// })
//
// $('.input').on('input', function () {
//   console.log($(this).attr('class'))
//   var name = $(this).attr('class').split(' ')[1]
//
//   store[name] = $(this).val()
//
//   console.log(store)
// })
//
// $('.send').click(function () {
//   //сделать валидацию
//   var data = JSON.stringify(store)
//
//   try {
//     getRequest()
//   } catch (err) {
//     console.log(err)
//   } finally {
//     $('.result').text(data)
//   }
//
// })

// async function getRequest (data) {
//
//     return new Promise(function(resolve, reject) {
//       var xhr = new XMLHttpRequest
//       xhr.onload = function() {
//         resolve(new Response(xhr.responseText, {status: xhr.status}))
//       }
//       xhr.onerror = function() {
//         reject(new TypeError('Local request failed'))
//       }
//       xhr.open('GET', 'file:///C:/Users/Ксения/Desktop/Terem/server.html')
//       xhr.send(null)
//     })
//
// }
