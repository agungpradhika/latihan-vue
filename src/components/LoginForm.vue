<template>
  <form @submit.prevent="submitForm">
    <label>Username : </label>
    <input type="text" required v-model="formUser.username">

    <label>Password : </label>
    <input type="password" required v-model="formUser.password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <div class="submit">
        <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            formUser: {
                username: '',
                password: '',
            },
            passwordError: ''
        }
    },
    methods: {
        submitForm() {
            this.passwordError = this.formUser.password.length > 5 ? '' : 'Password harus lebih dari 6 karakter'
            if (!this.passwordError) {
                console.log('data : ', this.formUser)
            }
        }
    }
}
</script>

<style scoped>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;   
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    button {
        padding: 10px 25px;
        margin-top: 20px;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
    .error {
        color: red;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>
