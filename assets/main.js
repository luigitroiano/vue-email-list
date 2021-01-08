let app = new Vue({
  el: "#root",
  data: {
    emails: [],

  },
  mounted: function() {
    for (let i = 0; i < 9; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((respo) => {
        const email = respo.data.response;
        this.emails.push(email);
      });
    }
  },
});