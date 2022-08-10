import { Export, Purchase } from "../collections/collections";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "invoice.number"() {
    return Export.find().count() + 1; //find every data in export and then count how many document are in the export collection
  },

  "invoice.insert"(doc) {
    doc.items.forEach((item) => {
      let purchaseDoc = Purchase.findOne({ itemId: item._id });
      purchaseDoc.quantity = purchaseDoc.quantity - item.qty;
      Purchase.update({ _id: purchaseDoc._id }, { $set: purchaseDoc });
    });
    return Export.insert(doc);
  },
});
