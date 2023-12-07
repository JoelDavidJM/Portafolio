document.addEventListener('DOMContentLoaded', function () {
    const changeMode = document.querySelector('#toggleModeBtn')
    const body = document.querySelector('body')
    changeMode.addEventListener('click', function () {
  
      const currentMode = changeMode.textContent.trim()
  
      if (currentMode === 'light_mode') {
        changeMode.textContent = 'dark_mode';
        body.classList.remove('body--dark')
      } else {
        changeMode.textContent = 'light_mode';
        body.classList.add('body--dark')
      }
  
    })
  })
  
  