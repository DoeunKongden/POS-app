import {Import,Item,Purchase} from '../collections/collections'
import {Meteor} from 'meteor/meteor'


Meteor.methods({
    'purchase.add'(doc){
        let oldPurchase = Purchase.findOne({itemId:doc.itemId})
        let importDoc = Object.assign({},doc);

        if(!oldPurchase){
            importDoc.remain = 0 //creating remain field for import doc
            Import.insert(importDoc)
            Purchase.insert(doc)
            
            return Purchase.insert(doc);
        }else{
            importDoc.remain = oldPurchase.quantity
            Import.insert(importDoc);

            oldPurchase.quantity+=doc.quantity
            oldPurchase.cost = doc.cost
            oldPurchase.price = doc.price
            oldPurchase.date = doc.date
            oldPurchase.supplierId = doc.supplierId

            return Purchase.update({_id:oldPurchase._id},{$set:oldPurchase})
        }
    },

    'purchase.find'(){
        let data = []
        Purchase.find().forEach((doc)=>{
            doc.name=Item.findOne({_id:doc.itemId})?.name //if we find item id we can .name it
            data.push(doc)
        })

        return data
    }
})
