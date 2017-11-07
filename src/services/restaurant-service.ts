import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Restaurant, Table } from './common/restaurant';

class RestaurantService {

    private get db(): Collection<Restaurant> {
        return this.con.db.collection("restaurants")
    }

    constructor(private con: DBConnection) { }

    insert(res: Restaurant) {
        return this.db.insertOne(res);
    }

    insertWithTables(res: Restaurant, numbertables: number) {
        let tables: Table[] = [];
        for (let i = 0; i < numbertables; i++) {
            tables.push({ numero: i + 1, disponible: true })
        }
        res.mesas = tables;
        return this.db.insertOne(res);
    }

    update(id: string, res: Restaurant) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: res });
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    all(skip: number = 0, limit: number = 0) {
        return this.db.find()
            .skip(skip)
            .limit(limit)
            .toArray();
    }

    allByLocation(lon: number, lat: number, km: number = 1) {
        return this.db.find({
            localizacion: {
                $geoWithin: {
                    $centerSphere: [[lon, lat], km / 6378.1]
                }
            }
        })
            .toArray();
    }

    tablesByRestaurant(id: string) {
        return this.db.findOne({ _id: new ObjectID(id) })
            .then(res => {
                return Promise.resolve(res.mesas);
            });
    }

    tablesByAvailable(id: string) {
        return this.db.aggregate([
            { $match: { _id: new ObjectID(id) } },
            { $project: { mesas: 1 } },
            { $unwind: "$mesas" },
            { $match: { "mesas.disponible": true } },
            { $group: { _id: "$_id", mesas: { $push: "$mesas" } } }
        ])
            .toArray()
            .then(res => {
                return Promise.resolve(res[0].mesas)
            });
    }

    tableUpdate(id: string, table: number, available: boolean) {
        return this.db.updateOne({
            _id: new ObjectID(id),
            "mesas.numero": table
        }, {
                $set: {
                    "mesas.$.disponible": available
                }
            });
    }

}

export const restaurantService = new RestaurantService(Con);