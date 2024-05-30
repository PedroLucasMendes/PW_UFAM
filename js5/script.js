function drawChart() {
    const heightsInput1 = document.getElementById('heights1').value;
    const heightsInput2 = document.getElementById('heights2').value;
    const heightsInput3 = document.getElementById('heights3').value;
    const heightsInput4 = document.getElementById('heights4').value;
    const heightsInput5 = document.getElementById('heights5').value;
    const barWidth = document.getElementById('width').value;

    const heights = [heightsInput1, heightsInput2, heightsInput3, heightsInput4, heightsInput5].map(Number);
    const chartDiv = document.getElementById('chart');

    // Limpar gráfico existente
    chartDiv.innerHTML = '';

    // Criar novas barras
    heights.forEach(height => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = height + 'px';
        bar.style.width = barWidth + 'px';
        chartDiv.appendChild(bar);
    });
}
