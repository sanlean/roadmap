# Roadmap Coroutines Kotlin (Android/Mobile)

## 1. Fundamentos
- O que são coroutines? Conceitos: suspensão, retomada, continuations.
- `suspend fun`: definição e uso.
- `CoroutineScope` e `Job`.
- Builders principais: `launch`, `async`, `runBlocking`.
- `delay` vs `Thread.sleep`.

---

## 2. Estrutura e Contexto
- `CoroutineContext`: elementos (`Dispatcher`, `Job`, etc).
- Dispatchers: `Default`, `IO`, `Main`, `Unconfined`.
- Mudança de contexto: `withContext`.
- Cancelamento de coroutines: `cancel`, `isActive`, `CancellationException`.

---

## 3. Android Essentials
- `lifecycleScope` e `viewModelScope`.
- Coroutines e ciclo de vida de Activity/Fragment/ViewModel.
- Cancelamento automático com escopos AndroidX.
- Uso correto em UI: atualização de views, evitar leaks.

---

## 4. Comunicação e Concorrência
- `Channel`, `Flow`, `SharedFlow`, `StateFlow`.
- Producers/Consumers com coroutines.
- `Mutex`, `Semaphore`, `withLock` para sincronização.
- Exception handling: `CoroutineExceptionHandler`, propagação de erros.

---

## 5. Patterns e Boas Práticas
- Structured concurrency: escopos filhos, supervisão.
- Exception supervision: `SupervisorJob`, `supervisorScope`.
- Testes com coroutines: `runBlockingTest`, `TestCoroutineDispatcher`.
- Timeout e retry: `withTimeout`, `retry` (com Flow).

---

## 6. Avançado/Internals
- Como coroutines funcionam por baixo dos panos (continuations, state machine).
- Custom dispatchers e thread pools.
- Custom `CoroutineScope` e context elements.
- Performance tuning: benchmarks, profiling, avoiding leaks.
- Interop com callbacks/legacy async: `suspendCoroutine`, `suspendCancellableCoroutine`.

---

## 7. Mobile Patterns e Integrações
- Coroutines + Room, Retrofit, WorkManager, DataStore.
- Integrando com LiveData, StateFlow, Compose.
- Patterns para ViewModel, Repository, UseCase com coroutines.
- Cancelamento cooperativo em chains complexas.

---

## 8. Escalabilidade e Arquitetura
- Coroutines em apps grandes: modularização, isolamento de escopos.
- Error boundaries, retry policies, circuit breaker com coroutines.
- Debugging avançado: stacktraces, Thread dumps, tools.
- Guidelines para times: code review, padrões, pitfalls.

---

## 9. Futuro e Tendências
- Novidades do Kotlin coroutines (1.7+): Structured concurrency improvements, Flow APIs.
- Coroutines multiplataforma (Kotlin Multiplatform Mobile).
- Interop com Compose e novas APIs Android.

---

> **Dica:** Estude cada tópico com exemplos práticos, leia a [documentação oficial](https://kotlinlang.org/docs/coroutines-overview.html), e volte aqui para dúvidas ou aprofundar qualquer item!
