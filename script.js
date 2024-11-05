function handleSum() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const errorDisplay = document.getElementById("error");
  const resultDisplay = document.getElementById("result");

  errorDisplay.textContent = ""; // Limpiar mensajes de error
  resultDisplay.textContent = ""; // Limpiar resultados

  try {
    // Convertir entradas a números
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);

    // Validar si las entradas son números válidos o contienen 'e'
    if (
      isNaN(value1) ||
      isNaN(value2) ||
      num1.value.includes("e") ||
      num2.value.includes("e")
    ) {
      throw "Por favor ingrese números válidos (sin notación científica).";
    }

    // Validar si los campos están vacíos (esta validación probablemente ya no sea necesaria)
    if (num1.value.trim() === "" || num2.value.trim() === "") {
      throw "Los campos no pueden estar vacíos.";
    }

    // Calcular la suma
    const sum = value1 + value2;

    // Mostrar el resultado
    resultDisplay.textContent = `${value1} + ${value2} = ${sum}`;

    // Limpiar estilos de error
    num1.classList.remove("error");
    num2.classList.remove("error");
  } catch (error) {
    // Manejo de errores
    errorDisplay.textContent = error;

    // Resaltar campos con error
    if (isNaN(parseFloat(num1.value)) || num1.value.includes("e"))
      num1.classList.add("error");
    if (isNaN(parseFloat(num2.value)) || num2.value.includes("e"))
      num2.classList.add("error");
  }
}

// Agregar event listeners para los inputs
document.getElementById("num1").addEventListener("input", handleSum);
document.getElementById("num2").addEventListener("input", handleSum);

// Prevenir el envío del formulario
document.getElementById("sumForm").addEventListener("submit", function (event) {
  event.preventDefault();
});
