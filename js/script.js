const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            message: "Hello Vue!!",
            image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        };

    }
}).mount('#app');