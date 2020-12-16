<template>

    <div id="User">

         <h2>Usuario <span>  {{name}} </span> Autorizado!</h2>

        
        <button v-on:click="salir"> Cerrar Sesión </button>


    </div>


              





</template>

<script>
    import axios from 'axios';
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
        axios.get('cuentas-api.herokuapp.com/user/get_name/' + this.name)
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
    }

}
</script>

<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
        
    }
    .iniciar {
        visibility: hidden;
    }


    

</style>
