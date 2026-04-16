document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('scroll-btn')){
        return window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
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
});

document.querySelectorAll('.box-btns .btns').forEach((btn) => {
    btn.addEventListener('mouseenter', function() {
        document.querySelectorAll('.box-btns .btns').forEach(b => b.classList.remove('active'));
        
        this.classList.add('active');
    });
});