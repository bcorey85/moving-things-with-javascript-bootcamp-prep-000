const app = "I don't do much."

var dodger = document.getElementById('dodger')

function styleDodger(){
  dodger.style.backgroundColor = '#FF69B4'
}
styleDodger()

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})



function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

