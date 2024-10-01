const tasques = [];

const elementLlista = document.getElementById("llista");
const inputNovaTasca = document.getElementById("inputNovaTasca");
const botoAfegirTasca = document.getElementById("botoAfegirTasca");

const renderitzarTasques = () => {
    elementLlista.innerHTML = '';
    tasques.forEach((tasca, index) => {
        const li = document.createElement("li");
        li.textContent = tasca;

        const botoEliminar = document.createElement("button");
        botoEliminar.textContent = "Eliminar";
        botoEliminar.addEventListener("click", () => {
            tasques.splice(index, 1);
            renderitzarTasques();
        });

        li.appendChild(botoEliminar);
        elementLlista.appendChild(li);
    });
};

botoAfegirTasca.addEventListener("click", () => {
    const novaTasca = inputNovaTasca.value.trim();
    if (novaTasca) {
        tasques.push(novaTasca);
        inputNovaTasca.value = '';
        renderitzarTasques();
    }
});