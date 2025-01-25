const lista = document.getElementById("listaAmigos")
let array = []

function adicionarAmigo() {
    let inputName = document.getElementById('amigo').value
    if (inputName == "") {
        alert("Campo de nome está vazio")
    } else {
        array.push(inputName)
        document.getElementById("amigo").value = ""
        lista.innerHTML = ""
        array.forEach(listAmigos => {
            lista.innerHTML += 
            `
                <li>
                    <p>
                        ${listAmigos}
                    </p>
                </li>

            `
        })

    }
}
