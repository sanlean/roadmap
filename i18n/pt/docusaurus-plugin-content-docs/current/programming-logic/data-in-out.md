---
sidebar_position: 2
---

# Entrada e saída de dados

Bem-vindo ao mundo da programação! Se você já conseguiu configurar o Kotlin no seu computador e até executou um "Hello, World!", você está no caminho certo. Vamos começar pelos fundamentos da programação, que são essenciais para criar qualquer tipo de software. Esta página é dedicada a ensinar **entrada e saída de dados**, **operações matemáticas básicas** e **lógica de decisão**, de forma bem detalhada e com exemplos práticos.

---

## **1. Entrada e Saída de Dados**
### O que são?
- **Entrada de dados** é quando o programa "conversa" com o usuário, pedindo informações como números, palavras ou comandos.
- **Saída de dados** é quando o programa "responde", mostrando informações no terminal.

### Como funciona no Kotlin?
Usamos funções específicas para entrada e saída:
- **Saída:** A função `println()` escreve algo no terminal e pula para a próxima linha.
- **Entrada:** A função `readLine()` permite que o usuário digite algo no teclado.

### Exemplo Prático
Vamos criar um programa que pergunta o nome do usuário e o exibe na tela:

```kotlin
fun main() {
    println("Olá! Qual é o seu nome?")
    val nome = readLine() // Lê o que o usuário digitar
    println("Muito prazer, $nome!")
}
```

### Passo a passo

1. O programa exibe __"Olá! Qual é o seu nome?"__ no terminal.
2. O usuário digita o nome (por exemplo: João).
3. O programa responde __"Muito prazer, João!"__.