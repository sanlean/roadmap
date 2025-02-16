---
sidebar_position: 1
---

# Roadmap Backend

## 1. Lógica de Programação
- Entender o conceito de algoritmo e como resolver problemas com programação
- Tipos de dados básicos (inteiros, flutuantes, booleanos, caracteres)
- Variáveis e constantes
- Operações matemáticas básicas (soma, subtração, multiplicação, divisão, módulo)
- Estruturas de controle:
  - Condicionais (if, else, else if)
  - Operadores lógicos (AND, OR, NOT)
  - Laços de repetição (for, while, do-while)
- Estruturas de dados:
  - Arrays e listas
  - Pilhas e filas
  - Mapas (dicionários ou tabelas hash)
- Funções/métodos:
  - Declaração e invocação de funções
  - Parâmetros e retorno de valores
- Tratamento de exceções (try, catch, throw)
- Recursão

## 2. Kotlin Básico
- Sintaxe básica do Kotlin
- Tipos de dados do Kotlin (Int, String, Boolean, Float, Double, etc.)
- Declaração de variáveis (val vs var)
- Controle de fluxo em Kotlin (if, when, loops)
- Operadores de comparação e lógicos
- Funções em Kotlin (fun, parâmetros, retorno)
- Null safety (usando null, safe calls, elvis operator, etc.)
- Classes e objetos básicos (não entrar em detalhes de OOP ainda)
- Coleções (List, Set, Map)

## 3. Programação Orientada a Objetos (OOP)
- Definição de classes e objetos
- Atributos e métodos
- Encapsulamento
- Herança
- Polimorfismo
- Abstração
- Interfaces
- Classe `data` e quando usá-la
- Coleções e manipulação de dados com OOP
- Trabalhando com construtores e destrutores

## 4. Fundamentos de Backend
- Conceito de servidor e cliente
- Arquitetura cliente-servidor
- Protocolos de comunicação (principalmente HTTP)
- Requisições e respostas HTTP
- Métodos HTTP: GET, POST, PUT, DELETE, PATCH
- Cabeçalhos HTTP
- API RESTful
- Autenticação e autorização (Bearer token, OAuth)
- JSON (formato de dados para APIs)
- API Design (versionamento, documentação)
- Testes de API (Postman, Insomnia)

## 5. Banco de Dados e Persistência de Dados
- Relacional vs NoSQL
- SQL (básico)
  - SELECT, INSERT, UPDATE, DELETE
  - JOINs (INNER JOIN, LEFT JOIN, etc.)
  - Agrupamentos e funções agregadas (COUNT, AVG, MIN, MAX)
  - Subconsultas
- Conceitos de normalização de dados
- Modelagem de banco de dados (ERD)
- Trabalhando com banco de dados MySQL/PostgreSQL
- Introdução ao NoSQL: MongoDB
- Introdução ao ORM (Object-Relational Mapping) com Hibernate/JPA
- Como realizar migrações de banco de dados
- Estratégias de otimização de consultas (indexação)

## 6. Frameworks Backend - Spring Boot
- O que é o Spring Framework e o Spring Boot
- Configuração de um projeto Spring Boot
- Dependências e Gerenciamento de Dependências com Maven/Gradle
- Desenvolvimento de APIs REST com Spring Boot
- Configuração de rotas e controladores (`@RestController`)
- Injeção de dependência
- Configuração de segurança básica com Spring Security
- Validadores de entrada (Bean Validation, @Valid)
- Manipulação de exceções (GlobalExceptionHandler)
- Integração com banco de dados (Spring Data JPA)
- Configuração de propriedades e perfis (application.properties/application.yml)
- Integração com Cache (Spring Cache)
- Monitoramento e logs (Spring Boot Actuator, SLF4J, Logback)
- Testes de APIs com Spring Boot (JUnit, Mockito)

## 7. Redes e Protocolos
- Fundamentos de redes (modelo OSI, TCP/IP)
- Protocolos de comunicação: HTTP, HTTPS, WebSockets
- API RESTful: princípios e boas práticas
- CORS (Cross-Origin Resource Sharing)
- Conceito de servidor web (Tomcat, Nginx, Apache)
- Latência, throughput e escalabilidade
- Balanceamento de carga
- Conceito de DNS, portas e endereçamento IP
- Ferramentas para monitoramento de rede (Wireshark, curl)

## 8. Controle de Versão - Git
- O que é Git e GitHub
- Comandos básicos:
  - `git init`, `git clone`, `git status`, `git add`, `git commit`, `git push`, `git pull`
- Trabalhando com branches (git branch, git checkout, git merge)
- Resolução de conflitos de merge
- Trabalhando com pull requests
- Fluxo de trabalho (GitFlow, trunk-based development)

## 9. Testes
- Importância dos testes no desenvolvimento backend
- Testes unitários com JUnit
- Mocking com Mockito
- Testes de integração
- Testes de API com Postman ou RestAssured
- Testes de performance (JMeter)
- Testes de carga e estresse

## 10. DevOps e Deployment
- O que é DevOps e como ele se aplica ao backend
- Ferramentas de CI/CD (Jenkins, GitLab CI, CircleCI)
- Contêineres e Docker
  - O que é Docker e como criar imagens Docker
  - Docker Compose para orquestrar containers
- Kubernetes (introdução ao gerenciamento de containers em grande escala)
- Deploy em servidores (AWS EC2, DigitalOcean, etc.)
- Introdução ao Heroku, AWS Elastic Beanstalk, ou outros PaaS para deploy
- Monitoramento de aplicações em produção (New Relic, Prometheus, Grafana)

## 11. Conceitos de Cloud e AWS
- O que é Cloud Computing e como ela afeta o backend
- AWS: Fundamentos da plataforma
- Serviços principais da AWS:
  - EC2 (máquinas virtuais)
  - S3 (armazenamento de arquivos)
  - RDS (banco de dados gerenciado)
  - Lambda (funções serverless)
  - IAM (gestão de usuários e permissões)
  - CloudWatch (monitoramento e logs)
  - API Gateway (gerenciamento de APIs)
  - SNS (Notificações)
  - DynamoDB (banco de dados NoSQL)
- Deploy de aplicativos backend na AWS
- Introdução ao Elastic Beanstalk para gerenciar deploy de aplicações web
- Configuração de balanceadores de carga (ELB)
- Estratégias de escalabilidade na AWS

## 12. Práticas de Desenvolvimento e Soft Skills
- Práticas ágeis de desenvolvimento (Scrum, Kanban)
- Revisão de código e boas práticas de código limpo
- Design Patterns (Singleton, Factory, Observer, etc.)
- Arquitetura de software (Monolítico, Microserviços)
- Boas práticas de segurança no backend
  - Proteção contra SQL Injection
  - Proteção contra XSS (Cross-site scripting)
  - Proteção contra CSRF (Cross-Site Request Forgery)
- Documentação de código e APIs (Swagger/OpenAPI)
- Colaboração em equipe e comunicação eficaz

## 13. Projetos Pessoais e Portfólio
- Criar um API REST completa utilizando Spring Boot
- Construir integração com um banco de dados (relacional e/ou NoSQL)
- Implementação de autenticação (JWT)
- Criar um projeto de microserviços simples
- Desenvolver e documentar uma API pública para consumo externo
- Publicar projetos no GitHub
- Criar um portfólio online (usando GitHub Pages, por exemplo)
- Realizar deploy em plataformas como Heroku, AWS ou DigitalOcean