<template>

    <div id="User">

         <h2>Usuario <span>  {{name}} </span> Autorizado!</h2>

        <button v-on:click="salir" id="cerrar"> Cerrar Sesión </button>
    <br>
    <br>
    <iframe width="700" height="660" frameborder="0" scrolling="no" src="https://livejaverianaedu-my.sharepoint.com/personal/francisco_gonzalez_javeriana_edu_co/_layouts/15/Doc.aspx?sourcedoc={17b18a2e-a996-4e96-be82-b4ff7b805d2b}&action=embedview&AllowTyping=True&ActiveCell='Dashboard'!S33&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True"
    border="0" cellspacing="0"
        style="border-style: none;width: 99%; height: 660px;"></iframe>

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
        display: flex;
        justify-content: center;
        align-items: center;
        width:1900px;height:350px;
        position:relative;
        left:-600px;
        top:200px;
    }
    #User h2{
        font-size: 20px;
        color: #283747;
        position:relative;
        left:1530px;
        top:-370px;
       
      

       

        }
    #User span{
        color: crimson;
        font-weight: bold;
        position:relative;
        left:0;
        top:0;
        margin: 10%;
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
        position:relative;
        left:1050px;
        top:-370px;
    }
        
    
 
    .iniciar {
        visibility: hidden;
    }


    

</style>
