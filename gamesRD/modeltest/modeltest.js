var config = {
    engine: 'db' // Ex: rest, db
};
class Model {

    constructor(values) {
        this.values = values;
        this.engine = config.engine;
    }

    toObj() {
        var data = {};
        for (var key in this.values) {
            if (this.values[key] instanceof Model) {
                data[key] = this.values[key].toObj();
            } else if (this.values[key] instanceof Array) {
                data[key] = this.values[key].map(x => x.toObj());
            } else {
                data[key] = this.values[key];
            }
        }
        return data;
    }

    static findByAttribute(attr) {
        return new Promise((resolve, reject) => {
            var query = this._convertObjectToQueriesArray(attr);
            query = query.join(" and ");
            let records = `SELECT * from ${this.getResourceName()} where ${query}`;
            var result = this.run(records);
            // Note: Only support 'equals' and 'and' operator
            if (!result) {
                reject('Could not found records');
            } else {
                var data = [];
                result.forEach(function (record) {
                    data.push(new this(record));
                });
                resolve(data);
            }
        });
    }

    getRelatedRecords(reln) {
        var targetRelationship = this.relationships()[reln];
        if (!targetRelationship) {
            throw new Error("No relationship found.");
        }
        var primaryKey = this._getPrimaryKey();

        var relatedObject = eval(reln);
        var attr = {};
        if (targetRelationship.type == "hasOne") {
            console.log(this.values);
            attr[relatedObject.prototype._getPrimaryKey()] = this.values[targetRelationship.foreignKey];
        } else if (targetRelationship.type == "hasMany") {
            attr[targetRelationship.foreignKey] = this.values[this._getPrimaryKey()];
        }

        relatedObject.findByAttribute(attr).then(function (records) {
            // this.values[reln] = records;
        });
    }

    /**
     * Test function to show what queries are being ran.
     */
    static run(query) {
        console.log(query);
        return [];
    }

    _getPrimaryKey() {
        for (var key in this.attributes()) {
            if (this.attributes()[key].primary) {
                return key;
            }
        }
    }

    /**
     * Convert Object of key value to sql filters
     * 
     * @param  {Object} Ex: {id:1, name: "John"}
     * @return {Array of String} ['id=1', 'name=John']
     */
    static _convertObjectToQueriesArray(attrs) {
        var queryArray = [];
        for (var key in attrs) {
            queryArray.push(key + " = " + attrs[key]);
        }
        return queryArray;
    }

    /**
     * Returns table name or resource name.
     * 
     * @return {String}
     */
    static getResourceName() {
        if (this.resourceName) return this.resourceName();
        if (this.constructor.name == "Model") {
            throw new Error("Model is not initialized");
        }
        return this.constructor.name.toLowerCase();
    }
}

class Customer extends Model {
    attributes() {
        return {
            id: {
                type: 'integer',
                primary: true
            },
            name: {
                type: 'string'
            },
            groupId: {
                type: 'integer'
            },
            status: {
                type: 'string'
            },
            state: {
                type: 'string'
            }
        };
    }

    relationships() {
        return {
            'Group': {
                type: 'hasOne',
                foreignKey: 'groupId'
            }
        };
    }
}

class Group extends Model {
    attributes() {
        return {
            id: {
                type: 'integer',
                primary: true
            },
            title: {
                type: 'string'
            }
        };
    }

    relationships() {
        return {
            'Customer': {
                type: 'hasMany',
                foreignKey: 'groupId'
            }
        };
    }
}

var cust = new Customer({
    id: 1,
    groupId: 3
});
cust.getRelatedRecords('Group');

var group = new Group({
    id: 3,
    title: "Awesome Group"
});
group.getRelatedRecords('Customer');

var groupData = new Group({
    "id": 2,
    "title": "This is Group 2",
    "customers": [new Customer({
            "id": 1,
            "name": "John Doe",
            "groupId": 2,
            "status": "active",
            "state": "good"
        }),
        new Customer({
            "id": 4,
            "name": "Pete Smith",
            "groupId": 2,
            "status": "suspended",
            "state": "bad"
        })
    ]
});

console.log(groupData.toObj());