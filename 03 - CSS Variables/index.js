// Select all the inputs
const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  // declare a variable for dataset for sizing the input and change color
  const suffix = this.dataset.sizing || ''

  // Change the root variables values
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  )
}

// Eventlistener for changing the spacing blur and color inputs
inputs.forEach((input) => input.addEventListener('change', handleUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate))
