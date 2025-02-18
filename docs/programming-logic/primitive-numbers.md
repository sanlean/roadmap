---
sidebar_position: 6
---

# Números em Kotlin

## Introdução

Quando programamos, frequentemente lidamos com variáveis que armazenam diferentes tipos de dados. Entre os mais comuns, temos os números, que são representados por tipos primitivos. Em Kotlin, existem diversos tipos de números, e vamos explorá-los em detalhes.

Embora Kotlin seja uma linguagem moderna e permita que as variáveis sejam declaradas sem especificar explicitamente seus tipos (graças à inferência de tipos), é importante entender os diferentes tipos primitivos numéricos para utilizá-los de forma eficiente e evitar erros. Existem outros tipos primitivos em Kotlin, como `Char` e `Boolean`, mas, por enquanto, focaremos exclusivamente nos números.

Exemplo básico de inferência de tipos:

```kotlin
val numero = 42 // Kotlin infere que "numero" é do tipo Int
val decimal = 3.14 // Kotlin infere que "decimal" é do tipo Double
```

## Tipos Numéricos em Kotlin

Em Kotlin, os tipos numéricos são divididos em inteiros e de ponto flutuante:

### Tipos Inteiros

- **Byte**: Representa números inteiros pequenos, ocupando 8 bits (1 byte). Intervalo: -128 a 127.
- **Short**: Inteiros de tamanho médio, ocupando 16 bits (2 bytes). Intervalo: -32,768 a 32,767.
- **Int**: O tipo inteiro mais comum, ocupando 32 bits (4 bytes). Intervalo: -2³¹ a 2³¹-1.
- **Long**: Inteiros grandes, ocupando 64 bits (8 bytes). Intervalo: -2⁶³ a 2⁶³-1.

### Tipos de Ponto Flutuante

- **Float**: Números com ponto decimal, ocupando 32 bits. Precisa ser seguido de `F` ou `f` para ser diferenciado de um `Double`.
- **Double**: O padrão para números com ponto decimal, ocupando 64 bits e oferecendo maior precisão.

### Comparação com Conjuntos Numéricos da Matemática

Os tipos inteiros correspondem ao conjunto dos números inteiros, enquanto os tipos de ponto flutuante correspondem ao conjunto dos números reais (representados de forma aproximada).

## Diferenças e Exemplos

### Diferenças entre os Tipos Numéricos

Os tipos numéricos variam principalmente em:

- **Tamanho**: O número de bits usados para armazenar o valor.
- **Intervalo**: O intervalo de valores que podem representar.
- **Precisão**: Float e Double possuem precisão decimal, mas Double é mais preciso.

Exemplo:

```kotlin
val byteValue: Byte = 127
val shortValue: Short = 32_767
val intValue: Int = 2_147_483_647
val longValue: Long = 9_223_372_036_854_775_807L

val floatValue: Float = 3.14F
val doubleValue: Double = 3.14159265359
```

Saída esperada:

```
byteValue: 127
shortValue: 32767
intValue: 2147483647
longValue: 9223372036854775807
floatValue: 3.14
doubleValue: 3.14159265359
```

### Notação e Convenções

- **`F` no Float**: Diferencia valores de ponto flutuante do tipo `Float` de `Double`.
- **Underscores (`_`)**: Facilitam a leitura de números grandes, como em `1_000_000`.

## Operações Matemáticas

As operações matemáticas básicas podem ser realizadas com todos os tipos numéricos. Contudo, é importante entender como os tipos influenciam o resultado:

### Exemplos de Operações

#### Soma e Subtração

```kotlin
val a: Int = 10
val b: Double = 2.5
println(a + b) // Resultado: 12.5
println(b - a) // Resultado: -7.5
```

#### Multiplicação

```kotlin
val x: Float = 3.5F
val y: Int = 2
println(x * y) // Resultado: 7.0
```

#### Divisão

```kotlin
val intA: Int = 7
val intB: Int = 2
println(intA / intB) // Resultado: 3 (divisão inteira)

val doubleA: Double = 7.0
val doubleB: Double = 2.0
println(doubleA / doubleB) // Resultado: 3.5

println(doubleA / intB) // Resultado: 3.5
```

#### Módulo (Resto da Divisão)

```kotlin
val modResult = 7 % 3
println(modResult) // Resultado: 1
```

### Comportamento das Operações

- A divisão entre inteiros resulta em um inteiro, truncando o valor decimal.
- Operações entre tipos diferentes promovem os operandos ao tipo mais abrangente (`Int` para `Double`, por exemplo, resulta em `Double`).

## Conversões de Tipos

As conversões precisam ser feitas explicitamente para evitar erros.

```kotlin
val intVal: Int = 100
val doubleVal: Double = intVal.toDouble() // Conversão explícita
println(doubleVal) // Resultado: 100.0

val longVal: Long = 3000000000 // OK
val shortVal: Short = longVal.toShort() // Risco de perda de dados
println(shortVal) // Resultado: -7936 (exemplo de estouro)
```

Explicação:

- **`toDouble`, `toFloat`, `toInt`**: Métodos para conversão explícita.
- Valores fora do intervalo do tipo resultam em comportamento imprevisível, como "estouro".

## Conclusão

Compreender os tipos numéricos em Kotlin é essencial para evitar erros e escrever código eficiente. Pratique operações matemáticas e conversões para dominar o uso desses tipos e suas peculiaridades.