import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Plate } from './common/plate';

export class PlateService {

    get db(): Collection<Plate> {
        return this.con.db.collection("plates");
    }

    constructor(private con:DBConnection){}

    insert(plate: Plate) {
        return this.db.insertOne(plate);
    }

    update(id: string, plate: Plate) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: plate });
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) });
    }

    allByRestaurant(id: string) {
        return this.db.find({ "restaurante._id": id })
            .toArray();
    }

    allByIngredients(ingredients: string[]) {
        return this.db.find({
            ingredientes: {
                $in: ingredients
            }
        }).toArray();
    }

    deleteAllIngredients(id: string) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: { ingredientes: [] } });
    }

    addIngredient(id: string, ingredient: string) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $push: { ingredientes: ingredient } });
    }

}

export const plateService = new PlateService(Con);
