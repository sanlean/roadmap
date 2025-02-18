---
sidebar_position: 5
---

# Exercícios - Lógica

1. Fazer um algoritmo para calcular a soma entre dois números. 

2. Fazer um algoritmo para calcular a soma entre dois números e multiplicar o resultado pelo primeiro.

3. Fazer um algoritmo para receber um valor em dólar e converter esse valor em real.

4. Fazer um algoritmo para calcular a média final (média aritmética) de um aluno, considerando a realização de quatro avaliações.

```kotlin
fun main() {
    val notas = DoubleArray(4) { 
        println("Digite a nota ${it + 1}:")
        readLine()!!.toDouble()
    }
    val media = notas.average()
    println("A média final é: $media")
}
```

5. Fazer um algoritmo para calcular a área de um quadrado.

6. Fazer um algoritmo para calcular a soma, a diferença, o produto e a divisão de dois números inteiros.

7. Fazer um algoritmo que leia um número inteiro e exiba o seu antecessor e o seu sucessor.

8. Faça um algoritmo que leia dois valores inteiros representando, respectivamente, um valor de hora e um de minutos. Calcule quantos minutos se passaram desde o início do dia.

  ```kotlin
  fun main() {
    println("Digite as horas:")
    val horas = readLine()!!.toInt()
    println("Digite os minutos:")
    val minutos = readLine()!!.toInt()
    val totalMinutos = horas * 60 + minutos
    println("Já se passaram $totalMinutos minutos desde o início do dia.")
  }
  ```

9. Calcular o valor total de um determinado pagamento a ser realizado, incluindo a taxa de juros.

  ```kotlin
  fun main() {
    println("Digite o valor principal:")
    val principal = readLine()!!.toDouble()
    println("Digite a taxa de juros (%):")
    val taxaJuros = readLine()!!.toDouble()
    println("Digite o número de meses:")
    val meses = readLine()!!.toInt()
    val montante = principal * Math.pow(1 + (taxaJuros / 100), meses.toDouble())
    println("O valor total com juros será: R$$montante")
  }
  ```

10. Faça um algoritmo que leia o horário de entrada (hora e minuto) e o horário de saída (hora e minuto) de um empregado e imprima quanto tempo, no formato HORA:MINUTO, o empregado ficou na empresa.

11. Um hectare (10.000 m²) de terra produz 150 toneladas de cana de açúcar. Faça um algoritmo que exiba quantas toneladas de cana serão produzidas em um sítio cuja quantidade de hectares será informada pelo usuário.

12. Modifique o algoritmo anterior sabendo-se que:  
    - Uma tonelada de cana vale R$1.000,00, exiba o total arrecadado com a venda.  
    - O custo de produção é de 60% do valor de venda. Mostre o lucro com a produção.  

13. Faça um algoritmo que leia a distância percorrida e a velocidade média (Km/h) de um veículo e calcule:  
    - O tempo aproximado (em horas) que o veículo gastou para realizar o trajeto.  
    - Considerando que o veículo faz 11 Km por litro, calcule o consumo de combustível.  

14. Fazer um algoritmo para inverter a ordem de determinado número de quatro dígitos.  

    ```kotlin
    fun main() {
        println("Digite um número de quatro dígitos:")
        val numero = readLine()!!
        val numeroInvertido = numero.reversed()
        println("O número invertido é: $numeroInvertido")
    }
    ```  

15. Fazer um algoritmo para transformar uma temperatura dada em graus Fahrenheit em graus Celsius.  
    Fórmula: C = 5 / 9 * (F – 32)  

16. Dado um número inteiro, obter o último algarismo desse número.  

17. Faça um algoritmo que leia dois números inteiros e imprima o resto da divisão de um pelo outro.  

18. Faça um algoritmo que leia os valores representando a quantidade de itens solicitados em um restaurante e imprima o valor total a ser pago, considerando os 10% do garçom.  

    **Tabela de preços**:  

    | Item            | Preço (R$) |
    |------------------|------------|
    | Refeição         | 28,50      |
    | Prato Feito      | 14,00      |
    | Refrigerante     | 6,20       |
    | Cerveja          | 9,00       |
    | Tira-gosto       | 18,50      |
    | Água Mineral     | 3,50       |  

19. Fazer um algoritmo para ler o ano de nascimento de uma pessoa e imprimir que idade terá no ano corrente.  

20. Fazer um algoritmo para calcular a área de um triângulo retângulo.  

21. Faça um algoritmo que leia o valor de uma mercadoria e o percentual de desconto. O algoritmo deve exibir o novo valor da mercadoria com desconto.  

22. Considerando duas variáveis inteiras quaisquer, após a entrada de dados, fazer a troca do conteúdo de uma pelo conteúdo da outra.  
    Exemplo:  
    - Antes da execução: A = 25 e B = 4  
    - Após a execução: A = 4 e B = 25  

    ```kotlin
    fun main() {
        println("Digite o valor de A:")
        var a = readLine()!!.toInt()
        println("Digite o valor de B:")
        var b = readLine()!!.toInt()
        
        val temp = a
        a = b
        b = temp

        println("Após a troca, A = $a e B = $b")
    }
    ```  

23. Fazer um algoritmo para calcular o volume de uma esfera de raio R.  
    Fórmula: Volume = (4/3) * PI * (R³), com PI = 3,1416.  

24. Fazer um algoritmo que leia três valores inteiros, determine e imprima o menor deles.  

25. Dados três valores A, B e C, verificar se eles podem ser os comprimentos dos lados de um triângulo. Se forem, verificar se compõem um triângulo:  
    - Equilátero  
    - Isósceles  
    - Escaleno  

26. Faça um algoritmo que leia dois números inteiros e imprima uma mensagem se são iguais ou diferentes.  

27. Faça um algoritmo que leia um número inteiro e imprima uma mensagem dizendo se é par ou ímpar.  

28. Faça um algoritmo que leia dois números inteiros e informe qual é o maior e o menor, ou se são iguais.  

29. Faça um algoritmo que leia 3 números inteiros e os imprima em ordem crescente.  

30. Fazer um algoritmo para calcular as raízes de uma equação do 2º grau.  

31. Numa loja de smartphones Samsung, o vendedor recebe, mensalmente, um salário fixo mais comissão. Essa comissão é calculada em relação ao tipo e ao número de celulares vendidos por mês, obedecendo à tabela abaixo:  

| Tipo de Smartphone      | Número de Celulares Vendidos | Comissão por Celular (R$) |
|--------------------------|-----------------------------|---------------------------|
| **Samsung Galaxy A**    | Menor que 10                | 40,00                     |
| **Samsung Galaxy A**    | Maior ou igual a 10         | 45,00                     |
| **Samsung Galaxy S**    | Menor que 5                 | 65,00                     |
| **Samsung Galaxy S**    | Maior ou igual a 5          | 80,00                     |

Além disso:  
- O vendedor tem um desconto de 8% sobre o salário fixo para o INSS.  

Faça um algoritmo para ler o nome, o salário fixo do funcionário e o número de celulares Samsung de cada tipo. Calcule o salário final do funcionário e apresente o resultado no formato:  

**Exemplo de Saída:**  
```plaintext
Nome: Fulano de Tal  
Nr de Galaxy A vendidos: X  
Nr de Galaxy S vendidos: Y  
Salário Bruto: R$ .....................  
Salário Líquido: R$ ..................  
```

32. Fazer um algoritmo que leia dois valores A e B, representando os valores de uma reta dada pela equação `y = Ax + B`, e determine três pontos quaisquer, representando as coordenadas `(x, y)`.  
    Formato de saída:  
    ```plaintext
    Para x = w: P(x, y)
    ```

33. Escreva um algoritmo que receba uma quantia em reais (acima de R$50,00) e determine o número de cédulas de 50, 10 e 2.  
    - Utilizar sempre cédulas de maior valor possível.  
    - Não considerar centavos.  
    - Se o valor for ímpar, informe que não será possível contabilizar cédulas para o valor ímpar.  

34. Faça um algoritmo que leia três números inteiros e exiba uma (e apenas uma) das seguintes mensagens:  
    - Todos os números são iguais  
    - Todos os números são diferentes  
    - Apenas dois números são iguais  

35. Dado um número de três algarismos, construir outro número de quatro algarismos de acordo com a seguinte regra:  
    - Os três primeiros algarismos, contados da esquerda para a direita, são iguais aos do número dado.  
    - O quarto algarismo é um dígito de controle calculado da seguinte forma:  
      ```plaintext
      [(N1 + N2) * 3 + N3 * 5]
      ```
      O dígito de controle é igual ao resto da divisão dessa soma por 7.  

36. Faça um algoritmo que leia um horário no sistema de 24 horas e imprima este horário no sistema de 12 horas.  
    Exemplo:  
    ```plaintext
    22:32 → 10:32 PM  
    09:10 → 09:10 AM  
    00:00 → 12:00 AM  
    12:00 → 12:00 PM
    ```

37. Elabore um algoritmo que leia o nome e o número de horas trabalhadas de um operário e calcule o seu salário, sabendo-se que:  
    - Hora trabalhada: R$25,20  
    - Quando o número de horas exceder 44, a hora excedente vale R$38,40.  

38. Construa um algoritmo para calcular o peso ideal de uma pessoa (IMC).  
    **Dados de entrada:** Altura em centímetros e sexo.  
    **Fórmulas para cálculo:**  
    - Peso Ideal (Homem): `(72,7 * Altura) – 58`  
    - Peso Ideal (Mulher): `(62,1 * Altura) – 44,7`  

39. Construa um algoritmo que receba o ano de nascimento do usuário e verifique se ele tem mais de 18 anos.  

40. Faça um algoritmo que leia três notas de um aluno, calcule a média aritmética e imprima uma mensagem dizendo a situação final do aluno, de acordo com os critérios abaixo:  
    - **Média < 5:** INSUFICIENTE  
    - **Média >= 5 e Média < 7:** REGULAR  
    - **Média >= 7 e Média < 9:** BOM  
    - **Média >= 9:** EXCELENTE  

41. Faça um algoritmo que leia a idade de uma pessoa e informe sua classe eleitoral, conforme a regra abaixo:  
    - **Não Eleitor:** menor de 16 anos  
    - **Eleitor Obrigatório:** de 18 a 65 anos  
    - **Eleitor Facultativo:** entre 16 e 18 anos ou acima de 65 anos  

42. Construa um algoritmo que receba o código de um produto e o classifique de acordo com a tabela abaixo:  

| **Código** | **Classificação**              |
|------------|--------------------------------|
| 1          | Alimento não perecível        |
| 2          | Alimento perecível            |
| 3          | Vestuário                     |
| 4          | Higiene pessoal               |
| 5          | Limpeza                       |

Se o código não for nenhum dos listados, exibir que o código é inválido.  

43. Fazer um algoritmo que leia um número inteiro e imprima o seu valor absoluto (sem sinal).  

44. Um certo tipo de aço é classificado de acordo com o resultado de 3 testes, que devem verificar se o mesmo satisfaz às seguintes especificações:  
    - **Teste 1** – Conteúdo de carbono abaixo de 7%.  
    - **Teste 2** – Dureza maior que 50.  
    - **Teste 3** – Resistência à tração maior que 10.000.  

    **Classificação do Aço:**  
    - Grau 10: Passa nos 3 testes.  
    - Grau 9: Passa nos testes 1 e 2.  
    - Grau 8: Passa no teste 1.  
    - Grau 7: Não passa no teste 1 (os outros testes não precisam ser realizados).  

    **Requisitos de entrada:**  
    - Número da amostra.  
    - Conteúdo de carbono (em %).  
    - Dureza.  
    - Resistência à tração.  

    **Saída:**  
    Escrever o número da amostra e o grau obtido.
