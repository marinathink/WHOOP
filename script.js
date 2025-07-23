function nextStep(step) {
    const currentStep = document.querySelector('.step:not([style*="display: none"])');
    currentStep.style.display = 'none';
    document.getElementById('step' + step).style.display = 'block';
    if (step === 8) {
        document.getElementById('obstacleText').innerText = document.getElementById('obstacle').value;
        document.getElementById('actionText').innerText = document.getElementById('action').value;
    }
    if (step === 9) {
        document.getElementById('obstacleTextRepeat').innerText = document.getElementById('obstacle').value;
        document.getElementById('actionTextRepeat').innerText = document.getElementById('action').value;
    }
}

function prevStep(step) {
    const currentStep = document.querySelector('.step:not([style*="display: none"])');
    currentStep.style.display = 'none';
    document.getElementById('step' + step).style.display = 'block';
}

function showResult() {
    document.getElementById('step10').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultWish').innerText = document.getElementById('wish').value;
    document.getElementById('resultOutcome').innerText = document.getElementById('outcome').value;
    document.getElementById('resultObstacle').innerText = document.getElementById('obstacle').value;
    document.getElementById('resultObstacleRepeat').innerText = document.getElementById('obstacle').value;
    document.getElementById('resultActionRepeat').innerText = document.getElementById('action').value;
}

function restart() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('wish').value = '';
    document.getElementById('outcome').value = '';
    document.getElementById('obstacle').value = '';
    document.getElementById('action').value = '';
}
