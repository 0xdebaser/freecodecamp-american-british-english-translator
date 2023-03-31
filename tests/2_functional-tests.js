const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  const url = "/api/translate";

  test("Translation with text and locale fields: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post(url)
      .set("content-type", "application/json")
      .send({
        text: "Do you like checkers?",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {
          text: "Do you like checkers?",
          translation: `Do you like <span class="highlight">draughts</span>?`,
        });
      });
    done();
  });

  test("Translation with text and invalid locale field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post(url)
      .set("content-type", "application/json")
      .send({
        text: "Do you like checkers?",
        locale: "invalid",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {
          error: "Invalid value for locale field",
        });
      });
    done();
  });

  test("Translation with missing text field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post(url)
      .set("content-type", "application/json")
      .send({
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {
          error: "Required field(s) missing",
        });
      });
    done();
  });

  test("Translation with missing locale field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post(url)
      .set("content-type", "application/json")
      .send({
        text: "Do you like checkers?",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {
          error: "Required field(s) missing",
        });
      });
    done();
  });

  test("Translation with empty text: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post(url)
      .set("content-type", "application/json")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {
          error: "No text to translate",
        });
      });
    done();
  });

  test("Translation with text that needs no translation: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post(url)
      .set("content-type", "application/json")
      .send({
        text: "This doesn't need translating.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {
          text: "This doesn't need translating.",
          translation: "Everything looks good to me!",
        });
      });
    done();
  });
});
