const { ref, computed, createApp } = Vue
const vm = createApp({
  setup() {
    const count = ref(0)
    const nome = ref('')
    const visivel = ref(false)
    const tarefas = ref([])
    const categoria = ref('')
    const categorias = ref([
      "Lazer", "Saúde"
    ])
    const tarefasFeitas = computed(() => 
      tarefas.value.filter(t => t.done).length
    )


    function add() {
      tarefas.value.push({
        descricao: nome.value,
        done: false,
        categoria: categoria.value
      })
      nome.value = ""
    }

    return {
      count,
      visivel,
      tarefas,
      tarefasFeitas,
      nome,
      categorias,
      categoria,
      add
    }
  }
}).mount("#app")
