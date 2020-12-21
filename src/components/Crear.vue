

<template>


    <div id="Crear">



            <form v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <br><label for="nombre" id = "us">Nombre</label><br>
                    <input type="text" class="form-control" id="nombre" placeholder="andres" v-model="form.name">
                </div>
                <div class="form-group">
                    <br><label for="username" id = "us">Usuario</label><br>
                    <input type="text" class="form-control" id="username" placeholder="andres123" v-model="form.user">
                </div>
                
                <div class="form-group">
                    <br><label for="contraseña" id = "pas">Contraseña</label><br>
                    <input type="password" class="form-control" id="password" placeholder="1234"
                        v-model="form.password">
                </div>

                <div class="form-group">
                    <br><label for="email" id = "us">e-mail</label><br>
                    <input type="text" class="form-control" id="email" placeholder="andres123@gmail.com" v-model="form.email">
                </div>


                <div class="form-group ">
                
                    <br><button class="btn btn-primary">Crear</button><br>
                           
               
                </div>
                <div class="form-group">
                    <br><label id="msgout"></label><br>
                    <!-- <input type="text" class="form-control" id="saldo" placeholder="xx" v-model="form.saldo"> -->
                </div> 
           
                
            </form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Autentica',
    data(){
        return{
            
            form: {
                name: '',
                user: '',
                password: '',
                email: '',
                
            }
        }
    },
    methods:{
        submitForm(){
            document.getElementById('msgout').innerHTML 
                            = 'Autenticando, espere porfavor ...'; 

            console.log(this.form)
            axios.put('http://127.0.0.1:8000/user/register/', this.form)
                 .then((res) => {
                     console.log(res.data)//Perform Success Action

                     if (res.data["detail"]=="El usuario ya existe"){
                         salida();
                          
                     }else{
                        var self = this
                                       
                        this.$router.push ({name:"user"});


                     }

                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log('ERROR')
                     salida();
                 }).finally(() => {
                     //Perform action in always
                 });
        },





    }
}

function salida() { 
                            document.getElementById('msgout').innerHTML 
                            = 'El usuario ya existe!'; 
                        }




</script>

<style>
    #Crear{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #msgout{

        color:red;
    }
    #us{
        font: bold 100% Tahoma;

    }

    #pas{
        font: bold 100% Tahoma;

    }




</style>
