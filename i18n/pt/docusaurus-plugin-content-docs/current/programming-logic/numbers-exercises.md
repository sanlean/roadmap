---
sidebar_position: 7
---

# Exercícios - Números

1. Fazer um algoritmo para calcular a área e a circunferência de um círculo. A fórmula para a área é \( \pi \cdot r^2 \), e para a circunferência é \( 2 \cdot \pi \cdot r \).

2. Tente atribuir o valor **1 trilhão** (1_000_000_000_000) a uma variável do tipo `Int`. Observe o erro gerado e corrija o problema utilizando um tipo numérico adequado.

3. Fazer um algoritmo que compare diretamente dois números, um do tipo `Int` e outro do tipo `Double`. Utilize os operadores `==`, `!=`, `<`, `>`, `<=`, `>=`.

4. Fazer um algoritmo que receba um número do tipo `Double` e o converta para `Int`. Em seguida, faça a operação inversa (converter de `Int` para `Double`). Exiba os valores antes e depois das conversões.

5. Fazer um algoritmo para calcular o resultado das seguintes operações:
   - Divisão: `10.0 / 3`, `10 / 3`, `10 / 3.0`
   - Módulo: `10 % 3`, `10.5 % 3`
   
   Compare os resultados e explique as diferenças.

6. Fazer um algoritmo que leia um número inteiro e determine se ele é par ou ímpar.

7. Faça um algoritmo para comparar dois números do tipo `Double` e exibir qual deles é maior ou se são iguais.

8. Faça um algoritmo para solicitar dois números inteiros e calcular a soma, a subtração, o produto e a divisão entre eles.

9. Fazer um algoritmo que solicite um número e calcule sua raiz quadrada. Certifique-se de tratar entradas inválidas, como números negativos.

10. Fazer um algoritmo para converter uma temperatura de Celsius para Fahrenheit. A fórmula é:  
    \( F = C \cdot \frac{9}{5} + 32 \).

11. Fazer um algoritmo que receba um número grande (como 1_000_000_000) utilizando `_` para melhorar a legibilidade e realizar operações matemáticas com ele.

12. Fazer um algoritmo que verifique automaticamente se um número fornecido pode ser armazenado em um `Byte`, `Short`, `Int` ou `Long`.

13. Faça um algoritmo para tentar realizar a operação `10 / 0`. Observe o erro gerado e proteja o código para evitar a divisão por zero.

14. Faça um algoritmo para calcular a soma de todos os números inteiros de 1 até um valor fornecido pelo usuário.

15. Fazer um algoritmo que utilize um número em notação científica (exemplo: `val num = 1.23e3`) e exiba seu valor. Explique a utilidade da notação científica.

16. Fazer um algoritmo que receba dois números e uma operação matemática (`+`, `-`, `*`, `/`, `%`) e realize a operação selecionada. Exiba o resultado.

17. Fazer um algoritmo que verifique se um número inteiro fornecido pelo usuário é um palíndromo (lido da mesma forma de trás para frente).

18. Fazer um algoritmo para calcular os primeiros `n` números da sequência de Fibonacci, onde `n` é fornecido pelo usuário.

19. Faça um algoritmo para calcular o total de minutos que já se passaram no dia, com base em valores fornecidos pelo usuário para horas e minutos.

20. Fazer um algoritmo para converter a idade de uma pessoa (fornecida em anos) para dias. Considere anos bissextos ao calcular.

```kotlin
fun main() {
    println("Digite sua idade em anos:")
    val anos = readLine()!!.toInt()
    val dias = anos * 365 + anos / 4
    println("Sua idade em dias é: $dias")
}
