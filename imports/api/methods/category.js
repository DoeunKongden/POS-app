import {Meteor} from 'meteor/meteor'
import { Category } from '../collections/collections'

Meteor.methods({  //creating meteor method
    'category.insert'(doc){
        return  Category.insert(doc) //creating inserting method
    },

    'category.find'(){
        return Category.find().fetch() //fetching all of data from collection
    },

    'category.delete'(id){
        return Category.remove({_id:id}) //Deleting document by id ,  _id is the id in the mongo database and it comparing the _id with id from the doc
    },

    'category.update'(doc){ //creating an update method
        return Category.update({_id:doc._id},{$set:doc}) //we are updating the doc by id , and $set is setting the old doc with the new doc user has updated
    }
})