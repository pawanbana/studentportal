new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: []
  },

  ready: function () {
    this.fetchEvents();
  },

  methods: {

    fetchEvents: function () {
      var events = [];
      this.$http.get('/api/events')
        .success(function (events) {
          this.$set('events', events);

        })
        .error(function (err) {
          console.log(err);
        });
    },

    addEvent: function () {
      if (this.event.title.trim()) {
        this.$http.post('/api/events', this.event)
          .success(function (res) {
            window.location.href = 'http://localhost:8080/'
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },
    placementEvent: function () {
      if (this.event.title.trim()) {
        this.$http.post('/api/placement', this.event)
          .success(function (res) {
            window.location.href = 'http://localhost:8080/placment'
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteEvent: function (id, password) {
      if(password == 123){
        if (confirm('Are you sure you want to delete this event?')) {        
          this.$http.delete('api/events/' + id)
            .success(function (res) {
              window.location.href = 'localhost:8080'
            })
            .error(function (err) {
              console.log(err);
            });
        }
      }
      else{
        alert('you are not admin');
      }
     
    }
  }
});