"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.object = exports.obj = exports.Z_object = exports.Y_object = exports.X_object = exports.CarType = void 0;
var CarType;
(function (CarType) {
    CarType["Renault"] = "Renault";
    CarType["Ford"] = "Ford";
    CarType["Wolswagen"] = "Wolswagen";
    CarType["Toyota"] = "Toyota";
    CarType["Audi"] = "Audi";
    CarType["Bmw"] = "Bmw";
    CarType["Mercedes"] = "Mercedes";
})(CarType || (exports.CarType = CarType = {}));
exports.X_object = { x: 0, y: 0, z: 0, width: 0, height: 0, depth: 0 };
exports.Y_object = { type: 'renault', model: 'megane', year: 2007 };
exports.Z_object = {
    position: { x: 0, y: 0, z: 0 },
    size: { width: 0, height: 0, depth: 0 },
    body: {
        background: null,
        radius: 0,
        border: null
    }
};
// class Model Exmple
class OBJECTEXAMPLE {
    constructor({ x, y, z, width, height, depth }) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.width = 0;
        this.height = 0;
        this.depth = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
    getObject() {
        return { x: this.x, y: this.y, z: this.z, width: this.width, height: this.height, depth: this.depth };
    }
    setPosition({ x, y, z }) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this.getObject;
    }
}
class OBJECT {
    constructor({ x, y, z, width, height, depth, background, radius, border }) {
        this.position = { x: 0, y: 0, z: 0 };
        this.size = { width: 0, height: 0, depth: 0 };
        this.body = { background: null, radius: 0, border: null };
        this.position = { x, y, z };
        this.size = { width, height, depth };
        this.body = {
            background: background ? this.body.background = background : null,
            radius: radius ? this.body.radius = radius : 0,
            border: border ? this.body.border = border : null
        };
    }
    getObject() {
        return {
            position: Object.assign({}, this.position),
            size: Object.assign({}, this.size),
            body: Object.assign({}, this.body)
        };
    }
    setPosition({ x, y, z }) {
        this.position = { x, y, z };
        return this.getObject();
    }
}
const exampleObjectModel = {
    x: 10,
    y: 5,
    z: 10,
    width: 100,
    height: 100,
    depth: 100
};
exports.obj = new OBJECTEXAMPLE(Object.assign({}, exampleObjectModel));
exports.object = new OBJECT(Object.assign({}, exampleObjectModel));
