// Funcao  do delete

const del = () =>{
    let valor = document.getElementById('screen').value;
    document.getElementById('screen').value = valor.substr(0,valor.length-1);
}

// Funcao  do delete end

// primeira opcao de calculadora

let one = document.getElementById('one');
one.addEventListener('click', () => {
    let body=document.querySelector('body');
	let toggle=document.getElementById('theme__circulo');
	body.classList.remove('active_1');
	body.classList.remove('active_2');
	toggle.style.left='0';
});

// segunda opcao de calculadora


let two=document.getElementById('two');
two.addEventListener('click', () =>{
    let body=document.querySelector('body');
	let toggle=document.getElementById('theme__circulo');
	body.classList.add('active_1');
	body.classList.remove('active_2');
	toggle.style.left= "36%";
});	

// terceira opcao de calculadora

let three = document.getElementById('three');
three.addEventListener('click', () => {
    let body=document.querySelector('body');
    let toggle=document.getElementById('theme__circulo');
    body.classList.add('active_2');
    body.classList.remove('active_1');
    toggle.style.left='65%';
});