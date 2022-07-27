<template>
  <form @submit.prevent="submitForm">
    <label>First Name : </label>
    <input type="text" required v-model="formUser.first_name">

    <label>Last Name : </label>
    <input type="text" required v-model="formUser.last_name">

    <div class="submit">
        <button class="btn btn-primary">Submit</button>
    </div>
  </form>

  <div>
    <b-table striped hover :items="items"></b-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        formUser: {
          first_name: '',
          last_name: '',
        },
        items: [
          
        ]
      }
    },
    methods: {
      submitForm() {
        this.items.push({
          first_name: this.formUser.first_name, last_name: this.formUser.last_name
        })
      }
    }
  }
</script>

<style>
    .table {
        margin-top: 20px;
    }
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
        margin-top: 20px;
        text-align: center;
    }
    .error {
        color: red;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>