import {Mongo} from 'meteor/mongo'

export const Customer = new Mongo.Collection('customers') //creating collection customer
export const Category = new Mongo.Collection('category') //creating collection for category