(() => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
})();

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag img
  // const img = document.querySelector("#profile img")
  
  // //substituir a imagem 
  // if(html.classList.contains('light')) {
  //   //se estiver light mode, addicionar a imagem light
  //   img.setAttribute('src', '/.assets/avatar-light.jng')
  // }else{
  //     //se estiver sem light mode, manter imagem normal
  //   img.setAttribute('src', '/.assets/avatar.jng')
  // }
  
}