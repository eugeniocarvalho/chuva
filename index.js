const resumido = document.getElementsByClassName('texto__resumido')[0];
const completo = document.getElementsByClassName('texto__completo')[0];
const discussao = document.getElementsByClassName('assunto__conteudo')[0];
const discussaoCompleta = document.getElementsByClassName('assunto__conteudo__completo')[0];
const discussoes = document.getElementsByClassName('discussoes__criar__topico')[0];
const criarTopico = document.getElementsByClassName('criar__topico__botao')[0];
const discussaoForm = document.getElementsByClassName('discussoes__form')[0];
const conteudoNovoTopico = document.getElementsByClassName('conteudo__novo__topico')[0];

document.addEventListener('click', e => {
  const el = e.target.className;

  if (el.includes('expandir')) {
    resumido.style.display = 'none';
    completo.style.display = 'block';
  }

  if (el.includes('resumir')) {
    completo.style.display = 'none';
    resumido.style.display = 'block';
  }

  if (el.includes('assunto__conteudo') || el.includes('caixa__conteudo')){
    discussao.style.display = 'none'
    discussaoCompleta.style.display = 'block'
  }

  if (el.includes('caixa__conteudo') || el.includes('discussao__lista') || el.includes('discussao__card') || el.includes('discussao__autor')) {
    discussaoCompleta.style.display = 'none'
    discussao.style.display = 'block'
  }

  if (el.includes('criar__topico')) {
    discussaoForm.style.display = 'flex';
    discussoes.style.display = 'none';
    criarTopico.style.display = 'none';
  }

  if (el.includes('enviar__topico')) {
    discussaoForm.style.display = 'none';
    conteudoNovoTopico.style.display = 'block';
  }
})