"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    try {
      const { text, locale } = req.body;
      if (text === undefined || locale === undefined)
        throw new Error("Required field(s) missing");
      if (!text) throw new Error("No text to translate");
      if (locale !== "american-to-british" && locale !== "british-to-american")
        throw new Error("Invalid value for locale field");
      const translation =
        locale === "american-to-british"
          ? translator.translateToBritish(text)
          : translator.translateToAmerican(text);
      res.send({
        text,
        translation:
          translation === text ? "Everything looks good to me!" : translation,
      });
    } catch (error) {
      res.send({ error: error.message });
    }
  });
};
