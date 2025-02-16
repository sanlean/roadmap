---
sidebar_position: 3
---

# Operações Matemáticas Básicas

### O que são?

Programas podem realizar cálculos matemáticos como soma, subtração, multiplicação e divisão. Além disso, temos uma operação especial chamada **módulo**, que explicaremos a seguir.

---

### Operadores Matemáticos no Kotlin

| Operador | Operação       | Exemplo  | Resultado |
| -------- | -------------- | -------- | --------- |
| `+`      | Soma           | `5 + 3`  | `8`       |
| `-`      | Subtração      | `10 - 7` | `3`       |
| `*`      | Multiplicação  | `4 * 2`  | `8`       |
| `/`      | Divisão        | `20 / 4` | `5`       |
| `%`      | Módulo (resto) | `7 % 3`  | `1`       |

---

### **Módulo**

Dê bastante atenção a esta operação, ela não é comum no dia a dia nem no ensino da matemática básica. Módulo é a conta que calcula o **resto da divisão entre dois números inteiros**. O operador `%` é utilizado para representar módulo. Para um computador é muito importante e eficiente que esta operação exista, e em alguns dos exercícios a seguir exigem o conhecimento desta operação.

Vamos revisar a seguir como funciona a divisão entre números inteiros e dar exemplos de como aplicar o módulo.

#### Exemplo:

- Quando você divide **7 por 3**, o quociente (quantas vezes o divisor cabe no número) é **2**.
- Porém, **2 vezes 3 é 6**, o que significa que sobra **1**. Este número que sobra é chamado de **resto**.
- Portanto, **7 % 3 = 1**. Isso se lê que o módulo de **7** por **3** é **1**.

:::tip Dica

Lembre-se que estamos tratando **apenas de números inteiros**. O módulo não existe quando falamos de números com parte decimal como 7,5 ou 8,3. A divisão de números inteiros na programação despreza o resto. Isso significa que `9 / 2 = 4` e não **4,5**.

:::

### Exemplo no Código

Vamos ver como isso funciona no Kotlin:

```kotlin
fun main() {
    val numero = 7
    val divisor = 3
    val resto = numero % divisor
    val divisao = numero / divisor
    println("O resto de $numero dividido por $divisor é $resto e a divisão é $divisao")
}
```

#### Saída:

```plaintext
O resto de 7 dividido por 3 é 1 e a divisão é 2
```

---

### Exemplo Prático: Calculadora Simples
Vamos criar um programa que faz operações matemáticas básicas com dois números fornecidos pelo usuário:

```kotlin
fun main() {
    println("Digite o primeiro número:")
    val num1 = readLine()!!.toInt() // Lê e converte para inteiro

    println("Digite o segundo número:")
    val num2 = readLine()!!.toInt() // Lê e converte para inteiro

    println("Soma: ${num1 + num2}")
    println("Subtração: ${num1 - num2}")
    println("Multiplicação: ${num1 * num2}")
    println("Divisão: ${num1 / num2}")
    println("Módulo (resto): ${num1 % num2}")
}
```

---

### Passo a Passo do Exemplo:
1. O programa pede ao usuário dois números inteiros.
2. Ele realiza as operações:
   - Soma, subtração, multiplicação, divisão e módulo.
3. Por fim, exibe os resultados de cada operação.

#### Saída Exemplo:
Se o usuário digitar `10` e `3`, a saída será:

```plaintext
Soma: 13
Subtração: 7
Multiplicação: 30
Divisão: 3
Módulo (resto): 1
```

Agora que você conhece as operações básicas, experimente criar seus próprios exemplos e pratique bastante! 🚀