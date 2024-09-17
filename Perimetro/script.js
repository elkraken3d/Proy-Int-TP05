document.getElementById('shape').addEventListener('change', updateInputs);

function updateInputs() {
    const shape = document.getElementById('shape').value;
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = ''; // Limpiar inputs anteriores

    if (shape === 'square') {
        inputsDiv.innerHTML = '<label for="side">Lado:</label><input type="number" id="side" name="side">';
    } else if (shape === 'rectangle') {
        inputsDiv.innerHTML = `
            <label for="width">Ancho:</label><input type="number" id="width" name="width">
            <label for="height">Alto:</label><input type="number" id="height" name="height">
        `;
    } else if (shape === 'triangle') {
        inputsDiv.innerHTML = `
            <label for="side1">Lado 1:</label><input type="number" id="side1" name="side1">
            <label for="side2">Lado 2:</label><input type="number" id="side2" name="side2">
            <label for="side3">Lado 3:</label><input type="number" id="side3" name="side3">
        `;
    } else if (shape === 'circle') {
        inputsDiv.innerHTML = '<label for="radius">Radio:</label><input type="number" id="radius" name="radius">';
    }
}

function calculatePerimeter() {
    const shape = document.getElementById('shape').value;
    let perimeter;

    if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        if (!isNaN(side) && side > 0) {
            perimeter = 4 * side;
        } else {
            alert('Por favor, ingrese un valor válido para el lado.');
            return;
        }
    } else if (shape === 'rectangle') {
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        if (!isNaN(width) && width > 0 && !isNaN(height) && height > 0) {
            perimeter = 2 * (width + height);
        } else {
            alert('Por favor, ingrese valores válidos para el ancho y alto.');
            return;
        }
    } else if (shape === 'triangle') {
        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);
        if (!isNaN(side1) && side1 > 0 && !isNaN(side2) && side2 > 0 && !isNaN(side3) && side3 > 0) {
            perimeter = side1 + side2 + side3;
        } else {
            alert('Por favor, ingrese valores válidos para los lados.');
            return;
        }
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (!isNaN(radius) && radius > 0) {
            perimeter = 2 * Math.PI * radius;
        } else {
            alert('Por favor, ingrese un valor válido para el radio.');
            return;
        }
    }

    document.getElementById('result').textContent = `El perímetro es: ${perimeter.toFixed(2)}`;
}

// Inicializar inputs al cargar la página
updateInputs();
