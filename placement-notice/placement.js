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
        this.$http.get('/api/placements')
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
            console.log(this.event.password)
            if(this.event.password == 123) {
                this.$http.post('/api/placement', this.event)
            .success(function (res) {
              window.location.href = 'http://localhost:8080/placement'
            })
            .error(function (err) {
              console.log(err);
            });
            }
            else { alert('you need to be admin to add placement activities');}
        }
      },
  
      deleteEvent: function (id, password) {
        if(password == 123){
          if (confirm('Are you sure you want to delete this event?')) {        
            this.$http.delete('api/placement/' + id)
              .success(function (res) {
                window.location.href = 'localhost:8080/placement'
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