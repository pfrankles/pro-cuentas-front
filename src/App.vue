<template>
  <div id="app">
  <div class = "preheader">


  </div>
    <div class ="header">
      <h1> Control de Gastos</h1>
      <nav>
        <button v-on:click="login" class="iniciar"> Iniciar Sesión </button>
        <button v-on:click="init"> Home </button>
      </nav>
    </div>

    <div class = "main-component">
      <router-view></router-view>
      
      
    
    
    </div>

    <div class = "footer">
      <h2> G1M3 - Equipo 6 </h2>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {},
  data: {

  },
  methods:{
    login:function(){
      // let username = localStorage.getItem("username");
      // this.$router.push ({name:"auten", params:{username:username}});
      this.$router.push ({name:"auten"});

    },
    init:function(){
      this.$router.push ({name:"fondo"});
      location.reload()



    }


  },

  beforeCreate: function() {
   if(this.$route.name == "root"){
      this.$router.push ({name:"fondo"})
   }

  }

  
}
</script>

<style>

  body{
    margin: 0 0 0 0;
  }
 .preheader{
    margin: 0%;
    padding: 0%;
    width: 100%;
    height: 1 vh;
    min-height: 20px;
    background-color: #ceb10f ;

  }


  .header{
    margin: 0%;
    padding: 0%;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #ffffff ;
    color:#000000 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
  
    width: 100%;
    text-align: center;
    font: Bold 150% Tahoma;

  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
  }
  .header nav button{
    
    color: #000000;
    background: #ffffff;
    border: 1px solid #9b9ea0;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font:  60% Tahoma;
  }
  .header nav button:hover{
    color: #ffffff;
    background: #4e5862;
    border: 1px solid #181f27;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #ffffff ;
    align-content:center;
    
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #000000;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }



</style>
