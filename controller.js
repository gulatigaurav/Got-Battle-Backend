const Battle = require('./model');

async function list(req, res) {
    let response = await Battle.distinct('location');
    return res.json(response);
}

async function getBattle(req, res) {
    let response = await Battle.findById(req.params.id);
    return res.json(response);
}

async function count(req, res) {
    let response = await Battle.aggregate([
        {
            $group: {
                _id: null,
                total_number_of_battles_occured: {$sum: '$battle_number'}
            }
        }
    ]);
    return res.json(response);
}

async function search(req, res) {
    let options = [];
    if (req.query.king) {
        options.push({$or: [{attacker_king: req.query.king}, {defender_king: req.query.king}]});
    }
    if (req.query.location) {
        options.push({location: req.query.location});
    }
    if (req.query.type) {
        options.push({battle_type: req.query.type});
    }
    if (req.query.name) {
        options.push({name: req.query.name});
    }
    if (req.query.year) {
        options.push({year: req.query.year});
    }
    if (req.query.battle_number) {
        options.push({battle_number: req.query.battle_number});
    }
    if (req.query.attacker_outcome) {
        options.push({attacker_outcome: req.query.attacker_outcome});
    }

    let response = options.length ? await Battle.find({$and: options}) : await Battle.find();
    return res.json(response);
}

module.exports = {
    list,
    getBattle,
    count,
    search
};