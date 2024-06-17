document.querySelectorAll('.imagem-clickable').forEach(img => {
    img.addEventListener('click', function() {
        const currentSrc = this.src;
        const newSrc = this.getAttribute('data-alternativa');
        
        this.classList.add('fade-out');

        setTimeout(() => {
            this.src = newSrc;
            this.setAttribute('data-alternativa', currentSrc);
            this.classList.remove('fade-out');
        }, 500); // O tempo deve ser igual ao da transição do CSS
    });
});
