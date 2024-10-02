const steps = document.querySelectorAll('.step');
let currentStep = 0;

// Função para mostrar o passo atual
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.style.display = index === stepIndex ? 'block' : 'none';
    });
}

// Inicializa com o primeiro passo
showStep(currentStep);

// Botões "Próximo"
const nextButtons = document.querySelectorAll('.next');
nextButtons.forEach(button => {
    button.addEventListener('click', function() {
        const currentInputs = steps[currentStep].querySelectorAll('input, textarea, select');
        let allFilled = true;

        // Verifica se todos os campos estão preenchidos
        currentInputs.forEach(input => {
            if (!input.checkValidity()) {
                allFilled = false;
                input.reportValidity();  // Exibe a mensagem padrão de validação do HTML5
            }
        });

        // Se todos os campos estiverem preenchidos, avança para o próximo passo
        if (allFilled && currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }

        // Se chegar no último passo, exibe a mensagem de sucesso
        if (currentStep === steps.length - 1) {
            showSuccessMessage();
        }
    });
});

// Botões "Voltar"
const prevButtons = document.querySelectorAll('.prev');
prevButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

// Função para exibir a mensagem de sucesso e redirecionar
function showSuccessMessage() {
    // Exibe a mensagem de sucesso
    const successStep = steps[steps.length - 1]; // Último step
    successStep.querySelector('p').innerText = "Curso cadastrado com sucesso!";

    // Evita que o formulário seja enviado
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Previne o envio
    });

    // Redireciona após 3 segundos
    setTimeout(() => {
        window.location.href = "editarcurso.html"; // Substitua pelo caminho correto da sua página
    }, 3000); // 3 segundos antes do redirecionamento
}