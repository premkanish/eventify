var User = require('../models/user.js');
var Event = require('../models/event.js');
var EventUser = require('../models/eventuser.js');

module.exports = {

  getAllEvents: function(req, res) {
    Event
    .fetchAll({})
    .then(function(collection){
      res.json({data: collection.models});
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at fetchAll');
    });
  },

  getEvent: function(req, res){
    var data = req.body;
    Event
    .where({id: data.eventId})
    .fetch({require: true})
    .then(function(event){
      res.json({data: event.attributes});
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at fetchEvent');
    });
  },

  editEvent: function(req, res){
    var data = req.body;
    Event
    .where({id: data.eventId})
    .fetch({require: true})
    .then(function(event){
      return event.save({
        event_name: data.eventName || event.get('event_name'),
        event_date: data.date || event.get('event_date'),
        total_number_of_people_req: data.totalPeople || event.get('total_number_of_people_req'),
        price_per_person: data.pricePerPerson || event.get('price_per_person'),
        description: data.description || event.get('description'),
        image_url: data.image_url || event.get('image_url'),
        event_address_label: data.addressLabel || event.get('event_address_label'),
        event_long: data.long || event.get('event_long'),
        event_lat: data.lat || event.get('event_lat')
      }, {method: 'update'});
    }).then(function(){
      res.sendStatus(200);
    }).catch(function(error){
      console.log(error);
      res.send('Error at editEvent');
    });
  },

  deleteEvent: function(req, res){
    var data = req.body;
    Event
    .where({id: data.eventId})
    .fetch({require: true})
    .then(function(event){
      return event.destroy();
    }).then(function(){
      res.sendStatus(200);
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at deleteEvent');
    });
  },

  addEvent: function(req, res) {
    var data = req.body;
    new Event({
      event_name: data.eventName,
      event_date: data.date,
      total_number_of_people_req: data.totalPeople,
      price_per_person: data.pricePerPerson,
      description: data.description,
      image_url: data.image_url,
      event_address_label: data.addressLabel,
      event_long: data.long,
      event_lat: data.lat,
      creator: data.userId
    }).save()
      .then(function(event){
        User
        .where({id: event.get('creator')})
        .fetch({require: true})
        .then(function(user){
          return event.save({
            creator_first_name: user.get('first_name'),
            creator_last_name: user.get('last_name')
          });
        })
        .then(function(){
          res.json('your data was posted to the database successfully');
        });
      });
  },

  getAllCreatedEvents: function(req, res){
    var data = req.body;
    Event
    .where({creator: data.userId})
    .fetchAll()
    .then(function(collection){
      res.json({data: collection.models});
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at getallcreatedevents');
    });
  },

  joinEvent: function(req, res){
    var data = req.body;
    new EventUser({
      event_id: data.eventId,
      user_id: data.userId
    })
    .save()
    .then(function(){
      Event.where({id: data.eventId})
      .fetch({require: true})
      .then(function(event){
        var total = event.get('num_of_people_joined');
        event.set({num_of_people_joined: total+1});
        event.save();
      }).then(function(){
        res.json('Joined Event successfully');
      });
    });
  },

  unjoinEvent: function(req, res){
    var data = req.body;
    EventUser
    .where({event_id: data.eventId, user_id: data.userId})
    .fetch({require: true})
    .then(function(model){
      return model.destroy();
    })
    .then(function(){
      res.sendStatus(200);
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at deleteuser');
    });
  },

  getAllJoinedEvents: function(req, res){
    var data = req.body;
    User
    .where({id: data.userId})
    .fetch({withRelated: ['events']})
    .then(function(collection){
      res.json({data: collection});
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at getalljoinedevents');
    });
  }

};

