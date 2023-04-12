"use strict";
// interface = similar to class
Object.defineProperty(exports, "__esModule", { value: true });
var manu = { dbId: 44, email: "manu@gmail.com", userId: 2211,
    startTrail: function () {
        return "trial started";
    },
    getCoupon: function (name) {
        return 10;
    }
};
manu.email = "m@gmail.com";
