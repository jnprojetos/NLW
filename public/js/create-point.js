function popularUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}`
        }
    })
}

popularUFs();




function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
  

    //Pega o id do UF selecionado no select de UF
    const ufValue = event.target.value

    //Pega o index do select de UF e depois pega o valor de texto do option ou seja o nome da UF
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    //URL da API do IBGE
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
 
    //Limpar o select das cidades para iniciar o carregamento na troca de estados.
    citySelect.innerHTML = "<option value>Selecione a Cidade </option>"
    citySelect.disabled = true
    
    //Faz o consumo da API dos municipios por UF passando como parametro o id da UF
    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for( const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}`
        }
        citySelect.disabled = false
    })


}

document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Itens de coleta
// pegar todos os li's

//variável que pega o valor e preenche o input itens
const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itensToCollect) {
    item.addEventListener("click", handlerSelectedItem)
}

const collectecItens = document.querySelector("input[name=itens]")

let selectedItens = []


function handlerSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id


    //verificar se existem itens selecionados, se sim pegar os itens selecionados

    const alreadySelected = selectedItens.findIndex( item => {
        const itemFound = item == itemId // retorna true ou false
        return itemFound
    })

    // se ja estiver selecionado
    if(alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItens.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        selectedItens = filteredItems   
    }else {
        //se não estiver selecionado
        // adicionar a seleção
        selectedItens.push(itemId)
    }
    
    //atualizar o campo escondido com os itens selecionados
    collectecItens.value = selectedItens
}
