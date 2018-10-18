var app = new Vue({
  el: '#app',
  data: {
    userData:{
      name: '',
      mobile: '',
      email: '',
      gender: '',
      birthday: ''
    }
  },
  methods:{
    checkForm: function(){
      this.userData.name = this.$refs.name.value;
      this.userData.mobile = this.$refs.mobile.value;
      this.userData.email = this.$refs.email.value;
      this.userData.gender = this.$refs.gender.value;
      this.userData.birthday= this.$refs.birthday.value;
    }
  },
  computed:{
  
  }
})