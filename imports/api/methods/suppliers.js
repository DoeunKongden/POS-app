import {Meteor} from 'meteor/meteor'
import { Suppliers } from '../collections/collections'

Meteor.methods({    
    'supplier.insert'(doc){
        return  Suppliers.insert(doc) //creating inserting method
    },

    'supplier.find'(){
        return Suppliers.find().fetch() //fetching all of data from collection
    },

    'supplier.delete'(id){
        return Suppliers.remove({_id:id}) //Deleting document by id ,  _id is the id in the mongo database and it comparing the _id with id from the doc
    },

    'supplier.update'(doc){ //creating an update method
        return Suppliers.update({_id:doc._id},{$set:doc}) //we are updating the doc by id , and $set is setting the old doc with the new doc user has updated
    }
})