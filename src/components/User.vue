<template>

    <div id="User">

         <h2>Usuario <span>  {{name}} </span> Autorizado!</h2>

        <br>
        <button v-on:click="salir" id="cerrar"> Cerrar Sesión </button>
    <br>
    </div>

</template>

<script>
    import axios from 'axios';
    import VueSlideBar from 'vue-slide-bar'
    export default {
        name: 'User',
        data: function (){
        return {
            name: "",
            user: "",
            email: "",
        }
    },
        init:function(){
            this.$router.push ({name:"root"});
            


        },

        created: function(){
            this.name = document.getElementById('username').value
            let self = this
        axios.get('http://127.0.0.1:8000/user/get_name/' + this.name)
            .then((result) => {
                self.name = result.data.name
        })
        .catch((error) => {
            alert("ERROR Servidor");
        })


    },
        
    

    methods:{
        salir:function(){
        this.$router.push ({name:"root"});
        location.reload()
        
        
        



        },
    },


}
</script>

<style>
    #User{
        width: 50%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        width:600px;height:600px;
    }
    #User h2{
        font-size: 50px;
        color: #283747;
       

        }
    #User span{
        color: crimson;
        font-weight: bold;
    }

    #User button{

        color: #000000;
        background: #ffffff;
        border: 1px solid #9b9ea0;
        border-radius: 1px;
        padding: 4px 10px;
        cursor: pointer;
        font:  100% Tahoma;
        margin: 10%;
        display:-moz-box;
        position:relative;
        left:400px;
        top:-200px;
    }
        
    
 
    .iniciar {
        visibility: hidden;
    }


    

</style>
