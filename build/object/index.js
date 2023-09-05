"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleBox = exports.Size3D = exports.Position = exports.EXTREME_OBJECT_CLASS = exports.OBJECTEXAMPLE = exports.OBJECT = exports.Z_object = exports.Y_object = exports.X_object = exports.CarType = void 0;
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
// class Model Example
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
exports.OBJECTEXAMPLE = OBJECTEXAMPLE;
class OBJECT {
    constructor({ x, y, z, width, height, depth, background, radius, border }) {
        // class properties are defined
        this.position = { x: 0, y: 0, z: 0 };
        this.size = { width: 0, height: 0, depth: 0 };
        this.body = { background: null, radius: 0, border: null };
        // really private properties 
        this.prevState = Object.assign({}, this.getObject());
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
    setPosition(updateFunc) {
        const updateData = updateFunc(Object.assign({}, this.prevState.position));
        this.position = updateData;
        return this.getObject();
    }
    setSize(updateFunc) {
        const updateData = updateFunc(Object.assign({}, this.prevState.size));
        this.size = updateData;
        return this.getObject();
    }
    setBody(updateFunct) {
        const updateData = updateFunct(Object.assign({}, this.prevState.body));
        this.body = updateData;
        return this.getObject();
    }
}
exports.OBJECT = OBJECT;
class Position {
    constructor({ x, y, z }) {
        this.position = { x: 0, y: 0, z: 0 };
        this.position = { x, y, z };
    }
    getPosition() {
        return this.position;
    }
    setPosition(updateFunc) {
        const updatePosition = updateFunc(this.position);
        this.position = updatePosition;
        return this.getPosition();
    }
}
exports.Position = Position;
class Size3D {
    constructor({ width, height, depth }) {
        this.size = { width: 0, height: 0, depth: 0 };
        this.size = { width, height, depth };
    }
    getSize() {
        return this.size;
    }
    setSize(updateFunc) {
        const updateSize = updateFunc(this.size);
        this.size = updateSize;
        return this.getSize();
    }
}
exports.Size3D = Size3D;
class StyleBox {
    constructor({ background, radius, border }) {
        this.style = { background: '', radius: 0, border: '' };
        this.style = { background, radius, border };
    }
    getStyle() {
        return this.style;
    }
    setStyle(updateFunc) {
        const updateStyle = updateFunc(this.style);
        this.style = updateStyle;
        return this.getStyle();
    }
}
exports.StyleBox = StyleBox;
class EXTREME_OBJECT_CLASS extends Position, Size3D, StyleBox {
}
exports.EXTREME_OBJECT_CLASS = EXTREME_OBJECT_CLASS;
