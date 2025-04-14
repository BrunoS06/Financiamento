let botao = document.getElementById('calcular')
let aprovado = 'Financiamento Aprovado'
let reprovado = 'Financiamento Reprovado'

botao.addEventListener('click', function() {
    let preco = parseFloat(document.getElementById('valor').value)
    let renda = parseFloat(document.getElementById('renda').value)
    let prazo = parseFloat(document.getElementById('prazo').value)

    let meses = prazo * 12
    let taxaJuros = 0.04
    let jurosTotal = preco * taxaJuros * prazo
    let valorTotal = preco + jurosTotal
    let parcelaComJuros = valorTotal / meses
    let resultadoValorTotal = 'O valor total do seu imóvel será de R$' + valorTotal
    let resultadoParcela = 'O valor de sua parcela será de R$' + parcelaComJuros.toFixed(2) + ' (juros 4%a.a)'
    let maximo = (renda * 30) / 100
    let resultadoMaximo = 'O máximo permitido para sua parcela é de R$' + maximo.toFixed(2) + ' ' + '(30% da renda).'

    function aprovacao() {
        if (parcelaComJuros > maximo) {
            return reprovado
        }
        else {
            return aprovado
        }
    }

    document.getElementById("resultado").innerHTML = resultadoMaximo + '<br>' + '<br>' + resultadoParcela + '<br>'  + resultadoValorTotal + '<br>' + '<br>' + aprovacao()
})


