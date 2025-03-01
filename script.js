function startForm() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('form-section').classList.remove('hidden');
}

document.getElementById('staff-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
