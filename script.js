let musica = document.querySelector('audio');

// Eventos
document.querySelector('.start').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

// Funções
function tocarMusica(){
    musica.play();	
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.start').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.start').style.display = 'block';
}

function atualizarBarra(){
    
}

