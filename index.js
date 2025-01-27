//on recupere toutes les div
const quiz = document.querySelectorAll('.click-event.box');

//on initie le compteur
let repcorrect = 0;

//iteration des elements du quiz
//selection de tous les boutons dans les box
quiz.forEach((box) => {
    const buttons = box.querySelectorAll('button');
    const question = box.querySelector('p');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Vérifier si le bouton cliqué est la bonne réponse
            const isCorrect = button.getAttribute('value') === 'true';

            if (isCorrect) {
                button.style.backgroundColor = 'green'; // Marquer comme correct
                repcorrect++; // Incrémenter le compteur de bonnes réponses
            } else {
                button.style.backgroundColor = 'red'; // Marquer comme incorrect
            }
            // Affichage du compteur
            document.getElementById('result').textContent = `Nombre de bonnes réponses: ${repcorrect}`;
        });
    });
});


