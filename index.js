const resumido = document.getElementsByClassName('texto__resumido')[0]
const completo = document.getElementsByClassName('texto__completo')[0]

document.addEventListener('click', e => {
  const el = e.target;

  if (el.matches('.expandir')) {
    resumido.style.display = 'none';
    completo.style.display = 'block'
  }

  if (el.matches('.resumir')) {
    completo.style.display = 'none';
    resumido.style.display = 'block'
  }
})

document.get