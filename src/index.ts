import * as fs from "fs";
import Handlebars from "handlebars";
import * as pdf from "html-pdf";

/**
 * Distil base class
 * @class
 * @constructor
 * @public
 */
export default function Distil(file: string, variables: any) {
  return new Promise((resolve, reject) => {
    const text = fs.readFileSync(file, "utf8");
    const template = Handlebars.compile(text);
    const html = template(variables);

    pdf.create(html).toBuffer((err, buffer) => {
      if (err) reject(err);

      resolve(buffer);
    });
  });
}
