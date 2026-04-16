document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('scroll-btn')){
        alert('scroll')
    }
});

document.addEventListener('submit', (e) => {
    e.preventDefault();

    const allInput = document.querySelectorAll('input');
    let emptyField = false

    for(input of allInput){
        if(!input.value){
            emptyField = true;
        }
    }

    if(emptyField){
        return alert('Por Favor, Preencha todos os campos!')
    }

    alert('E-mail enviado com sucesso para Upscende!');
    return window.location.reload();
})