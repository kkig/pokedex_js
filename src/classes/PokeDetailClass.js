export default class PokeDetail {
    constructor(id, name, orderNr, types, abilities, stats, moves, sprites, speciesURL) {
        this.id = id;
        this.name = name;
        this.orderNr = orderNr;
        this.types = types;
        this.abilities = abilities;
        this.stats = stats;
        this.moves = moves;
        this.sprites = sprites;
        this.speciesURL = speciesURL;
    }
};