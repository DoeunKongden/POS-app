import {Meteor} from 'meteor/meteor'
import { Item } from '../collections/collections'

Meteor.methods({
    'item.insert'(doc){
        return Item.insert(doc) 
    },

    'item.find'(){
        return Item.find().fetch()    
    },

    'item.delete'(id){
        return Item.remove({_id:id})
    },

    'item.update'(doc){
        return Item.update({_id:doc._id},{$set:doc})
    }
})