const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BattleSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    year: {
        type: Number
    },
    battle_number: {
        type: Number,
    },
    attacker_king: {
        type: String
    },
    defender_king: {
        type: String
    },
    location: {
        type: String
    },
    battle_type: {
        type: String
    },
    attacker_outcome: {
        type: String
    }
}, {
    versionKey: false
});


module.exports = mongoose.model('Battle', BattleSchema);
