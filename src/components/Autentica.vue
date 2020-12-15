<template>
    <div id="Autentica">

            <form v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <br><label for="username" id = "us">Usuario</label><br>
                    <input type="text" class="form-control" id="username" placeholder="" v-model="form.user">
                </div>
                <div class="form-group">
                    <br><label for="username" id = "pas">Contraseña</label><br>
                    <input type="password" class="form-control" id="password" placeholder=""
                        v-model="form.password">
                </div>
                <div class="form-group">
                    <br><button class="btn btn-primary">Ingresar</button><br>
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
                user: '',
                password: '',
                
            }
        }
    },
    methods:{
        submitForm(){

            console.log(this.form)
            axios.post('http://127.0.0.1:8000/user/auth/', this.form)
                 .then((res) => {
                     console.log(res.data)//Perform Success Action

                     if (res.data["Autenticado"]==true){
                          this.$router.push ({name:"user"});
                     }
                     if (res.data["Autenticado"]==false){
                         salida();
                          
                     }

                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log('ERROR')
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    }
}

function salida() { 
                            document.getElementById('msgout').innerHTML 
                            = 'Usuario no encontrado!'; 
                        }

</script>

<style>
    #Autentica{
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