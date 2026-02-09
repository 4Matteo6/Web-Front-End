    const addMovieBtn = document.querySelector('header button');
    const addMovieModal = document.getElementById('add-modal');
    const backdrop = document.getElementById('backdrop');
    const cancelBtn = addMovieModal.querySelector('.btn--passive');


    addMovieBtn.addEventListener('click', function() {
    addMovieModal.classList.add('visible');
    backdrop.classList.add('visible');
    });

    cancelBtn.addEventListener('click', function(){
    addMovieModal.classList.remove('visible');
    backdrop.classList.remove('visible');
    });


    backdrop.addEventListener('click', function(){
         addMovieModal.classList.remove('visible');
        backdrop.classList.remove('visible');  
    });