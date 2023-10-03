let darkMode = true
const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', event => {
  document.documentElement.classList.toggle('light-mode')

  const mode = darkMode ? 'Light' : 'Dark'

  event.currentTarget.querySelector(
    'span'
  ).textContent = `${mode} Mode ativado!`

  darkMode = !darkMode
})
