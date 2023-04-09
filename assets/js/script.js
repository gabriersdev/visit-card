const html = document.documentElement;

(() => {
  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  const theme = JSON.parse(localStorage.getItem('theme'));
  
  if(theme.page !== undefined){
    switch (theme.page.toLowerCase().trim()) {
      case 'night hydrated light':
      html.classList.value = 'night hydrated light';
      break;
      
      case 'night hydrated':
      case 'null':
      default:
      html.classList.value = 'night hydrated';
      break;
    }
  }else{
    saveTheme();
  }
  
  saveTheme();
})();

function toggleMode() {
  html.classList.toggle("light");
  saveTheme();
}

function saveTheme(){
  try{
    const theme = { page: html.classList.value };
    localStorage.setItem('theme', JSON.stringify(theme));
  }catch(error){
    console.log(error);
  }
}