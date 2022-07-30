import {Meteor} from 'meteor/meteor'
import { Customer } from '../collections/collections' //import collection from collection file


Meteor.methods({  //creating meteor method
    'customer.insert'(doc){
        return  Customer.insert(doc) //creating inserting method
    },

    'customer.find'(){
        return Customer.find().fetch() //fetching all of data from collection
    },

    'customer.delete'(id){
        return Customer.remove({_id:id}) //Deleting document by id ,  _id is the id in the mongo database and it comparing the _id with id from the doc
    },

    'customer.update'(doc){ //creating an update method
        return Customer.update({_id:doc._id},{$set:doc}) //we are updating the doc by id , and $set is setting the old doc with the new doc user has updated
    }
})


