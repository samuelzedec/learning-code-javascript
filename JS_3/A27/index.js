document.getElementById('sessionBtn').addEventListener('click', function() {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function() {
  const info = sessionStorage.getItem('info')
  alert(info)
})

document.getElementById('localBtn').addEventListener('click', function() {
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
  const text = localStorage.getItem('text')
  alert(text)
})

document.getElementById('cookieBtn').addEventListener('click', function() {
  const input = document.getElementById('cookie')
  //cookieName = value; expires = UTCStringDate; path =/
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2024, 9, 17) + ';'
  const path = 'path=/;'

  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function() {
  const input = document.getElementById('cookie2')
  //cookieName = value; expires = UTCStringDate; path =/
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2024, 5, 17) + ';'
  const path = 'path=/;'
  
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})