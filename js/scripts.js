
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
    ]
  }
}}).mount('#app');