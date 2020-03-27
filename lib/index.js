"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const handlebars_1 = require("handlebars");
const pdf = require("html-pdf");
/**
 * Distil base class
 * @class
 * @constructor
 * @public
 */
function Distil(file, variables) {
    return new Promise((resolve, reject) => {
        const text = fs.readFileSync(file, "utf8");
        const template = handlebars_1.default.compile(text);
        const html = template(variables);
        pdf.create(html).toBuffer((err, buffer) => {
            if (err)
                reject(err);
            resolve(buffer);
        });
    });
}
exports.default = Distil;
//# sourceMappingURL=index.js.map