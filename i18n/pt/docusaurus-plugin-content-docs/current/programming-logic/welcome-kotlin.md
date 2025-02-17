---
sidebar_position: 1
---

# Kotlin e primeiros passos

Kotlin é uma linguagem de programação moderna e bastante fácil de aprender, especialmente para quem está começando. Ela foi projetada para ser concisa, segura e interoperável com outras linguagens, como o Java. Uma das principais vantagens do Kotlin é que ele permite que você escreva menos código para alcançar os mesmos resultados, o que torna o aprendizado mais simples e o processo de programação mais eficiente.

Aqui, vamos usar Kotlin como linguagem principal, mas o que você aprenderá é aplicável a muitas outras linguagens de programação. Todos os conceitos que vamos explorar, como variáveis, operadores, lógica de decisão e controle de fluxo, são fundamentos essenciais que existem em quase todas as linguagens. Isso significa que, mesmo que no futuro você decida aprender outras linguagens, os princípios que você desenvolverá aqui vão ajudá-lo a se adaptar rapidamente a qualquer novo ambiente de programação.

Eu encorajo você a aproveitar este material, independentemente de sua escolha de linguagem no futuro. Kotlin é uma excelente opção para iniciantes, mas as habilidades e o raciocínio lógico que você vai adquirir aqui podem ser facilmente transferidos para outras linguagens de sua escolha. Então, se você prefere começar com outra linguagem, como `Python` ou `JavaScript`, fique tranquilo! O que vamos abordar aqui vai ajudar você a se tornar um programador mais capaz e confiante, independentemente da linguagem que você escolher usar.

:::tip Configure seu ambiente

Se você já tem o SDK do Kotlin e o VSCode com o plugin de Kotlin configurados corretamente, você está pronto para começar a programar! Vamos passar por algumas etapas simples para criar seu primeiro programa e começar a entender a sintaxe do Kotlin. Caso contrário procure a seção de configuração do ambiente.

:::

## 1. Criando um Diretório para os Exercícios

Antes de começar a programar, é uma boa prática organizar seu código em pastas. Vamos criar uma pasta onde você armazenará seus exercícios.

1. **Crie uma pasta** no seu computador, onde você vai salvar todos os arquivos de código. O nome da pasta pode ser algo como `ExerciciosKotlin`.
   
   _Espaço para imagem de como criar uma pasta no sistema operacional._

2. **Abra o VSCode** e vá até a pasta criada. No VSCode, você pode ir até o menu `File` e selecionar `Open Folder...` para abrir a pasta onde você criou.

   _Espaço para imagem de como abrir uma pasta no VSCode._

## 2. Criando um Arquivo Kotlin

Agora que você tem a pasta configurada e o VSCode aberto, vamos criar seu primeiro arquivo Kotlin. Para cada exercício ou código que você vá criar, crie uma nova pasta para cada. Por exemplo crie uma pasta `Hello` dentro de `ExerciciosKotlin` e depois crie quantas pastas forem necessárias dentro de `ExerciciosKotlin`.

1. No VSCode, clique com o botão direito na barra lateral esquerda, dentro da pasta que você criou, e selecione `New File`.

2. **Crie um novo arquivo** com o nome `Main.kt`. A extensão `.kt` é importante, pois ela indica que o arquivo é um código Kotlin. O nome `Main` é fundamental para o compilador entender que precisa executar este arquivo.

   _Espaço para imagem mostrando como criar um novo arquivo no VSCode._

## 3. Escrevendo o Primeiro Código Kotlin

Em Kotlin, o código começa dentro de uma função chamada `main`. Essa é a função principal que o Kotlin executa quando você roda o seu programa.

1. **Escreva o seguinte código dentro do arquivo `HelloWorld.kt`**:

   ```kotlin
   fun main() {
       println("Olá, mundo!")
   }
   ```

2. **Explicação do código**:
   - `fun` é uma palavra-chave que indica que estamos criando uma função (não entraremos em detalhes sobre o que é uma função agora).
   - `main()` é o nome da função principal, onde o Kotlin começa a executar o programa.
   - `println()` é uma função que imprime o texto que você passa dentro dela no console.

3. Para rodar o programa, você pode usar o terminal do VSCode, indo até a opção de terminal e digitando:

   ```bash
   kotlinc Main.kt -include-runtime -d main.jar
   java -jar main.jar
   ```

   Isso irá compilar e executar o código. Se tudo estiver correto, você verá a mensagem "Olá, mundo!" sendo exibida no console. Porém vamos fazer de uma forma mais fácil 😉.

   No VSCode clique no botão `play` e o seu código irá compilar e executar sem precisar de nenhum comando extra  no terminal.

   _Espaço para imagem do processo de execução no terminal do VSCode._

## 4. Modificando o "Hello, World!"

Agora que você conseguiu rodar o primeiro código, vamos tentar algo simples: modificar a mensagem!

1. **Altere o código para exibir uma nova mensagem**:

   ```kotlin
   fun main() {
       println("Olá, Kotlin!")
   }
   ```

2. **Rode novamente o programa**. Dessa vez, você verá a mensagem "Olá, Kotlin!" no console.

## 5. Exibindo Mais de Uma Frase

Agora, vamos ver como podemos exibir mais de uma mensagem. Você pode usar mais de um comando `println()` para mostrar várias linhas no console.

1. **Alterando o código para imprimir duas frases**:

   ```kotlin
   fun main() {
       println("Primeira frase")
       println("Segunda frase")
   }
   ```

2. **Resultado esperado**: Quando você rodar o programa, as duas frases aparecerão uma embaixo da outra no console:

```plaintext
Primeira frase
Segunda frase
```

## Resumo

Você aprendeu os primeiros conceitos do Kotlin:
- Como criar uma pasta para armazenar seus arquivos de código.
- Como criar um arquivo Kotlin com a extensão `.kt`.
- Como escrever e executar um programa básico que exibe uma mensagem no console.
- Como modificar o código para exibir diferentes mensagens.
- Como usar múltiplos comandos `println` para exibir várias linhas.

Com isso, você já consegue criar e modificar programas simples em Kotlin. O próximo passo é continuar explorando mais sobre a linguagem e os conceitos básicos para escrever programas mais complexos.

_Imagens de exemplos de execução de código podem ser colocadas aqui para ilustrar os passos._
