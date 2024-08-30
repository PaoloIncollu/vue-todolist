
const { createApp } = Vue;
createApp({
  data() {
    return {
      list:[
        {
          text:'Acqua',
          done: true
        },
        {
          text:'Latte',
          done: false
        },
        {
          text:'Pane',
          done: true
        },
        {
          text:'Carne',
          done: false
        },
        {
          text:'Pesce',
          done: true
        },
        {
          text:'Frutta',
          done: false
        },
      ],
      
        
      newProduct:'',

    }
  },
    methods:{
      //funzione per rimuovere il prodotto
      removeProduct(i){

        this.list.splice(i,1);
      },

      //funzione per aggiungere un prodotto alla lista
      addProduct(){

        const cleanTodo = this.newProduct.trim();
        if(cleanTodo != ''){

          this.list.push({text:cleanTodo, done:false});
          console.log(this.list);
          this.newProduct = '';

        }
      }}
}).mount('#app')