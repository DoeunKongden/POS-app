import {Mongo} from 'meteor/mongo'

export const Customer = new Mongo.Collection('customers') //creating collection customer
export const Category = new Mongo.Collection('category') //creating collection for category
export const Item = new Mongo.Collection('item') //creating collectionm for item
export const Suppliers = new Mongo.Collection('suppliers') //collection for suppliers
export const Import = new Mongo.Collection('import') // collection for import
export const Purchase = new Mongo.Collection('purchase') //collection for purchase
export const Export = new Mongo.Collection('exports') //collection for exports