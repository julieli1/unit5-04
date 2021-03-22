document.getElementById('change-image').addEventListener('click', image)

document.getElementById('change-text').addEventListener('click', text)

document.getElementById('hide').addEventListener('click', hide)

document.getElementById('show').addEventListener('click', show)

document.getElementById('background-color').addEventListener('click', background)

function image () {
  document.getElementById('cookies').src = './images/sunset.jpeg'
}

function text () {
  document.getElementById('text').innerHTML = 'Here is a picture of a sunset that I took. I think it looks nice.'
  document.getElementById('text').style.color = '#6e1a2c'
}

function hide () {
  document.getElementById('text').style.display = 'none'
}

function show () {
  document.getElementById('text').style.display = 'block'
}

function background () {
  document.body.style.backgroundColor = '#7070db'
}