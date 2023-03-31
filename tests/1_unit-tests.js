const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

// ******************* TRANSLATE TO BRITISH TESTS **************************

suite("Unit Tests", () => {
  test("Translate Mangoes are my favorite fruit. to British English", () => {
    const testString = "Mangoes are my favorite fruit.";
    assert.equal(
      translator.translateToBritish(testString),
      `Mangoes are my <span class="highlight">favourite</span> fruit.`
    );
  });

  test("Translate I ate yogurt for breakfast. to British English", () => {
    const testString = "I ate Yogurt for breakfast.";
    assert.equal(
      translator.translateToBritish(testString),
      `I ate <span class="highlight">Yoghurt</span> for breakfast.`
    );
  });

  test("Translate We had a party at my friend's condo. to British English", () => {
    const testString = "We had a party at my friend's condo.";
    assert.equal(
      translator.translateToBritish(testString),
      `We had a party at my friend's <span class="highlight">flat</span>.`
    );
  });

  test("Translate Can you toss this in the trashcan for me? to British English", () => {
    const testStr = "Can you toss this in the trashcan for me?";
    assert.equal(
      translator.translateToBritish(testStr),
      `Can you toss this in the <span class="highlight">bin</span> for me?`
    );
  });

  test("Translate The parking lot was full. to British English", () => {
    const testString = "The parking lot was full.";
    assert.equal(
      translator.translateToBritish(testString),
      `The <span class="highlight">car park</span> was full.`
    );
  });

  test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
    const testString = "Like a high tech Rube Goldberg machine.";
    assert.equal(
      translator.translateToBritish(testString),
      `Like a high tech <span class="highlight">Heath Robinson device</span>.`
    );
  });

  test("Translate To play hooky means to skip class or work. to British English", () => {
    const testString = "To play hooky means to skip class or work.";
    assert.equal(
      translator.translateToBritish(testString),
      `To <span class="highlight">bunk off</span> means to skip class or work.`
    );
  });

  test("Translate No Mr. Bond, I expect you to die. to British English", () => {
    const testString = "No Mr. Bond, I expect you to die.";
    assert.equal(
      translator.translateToBritish(testString),
      `No <span class="highlight">Mr</span> Bond, I expect you to die.`
    );
  });

  test("Translate Dr. Grosh will see you now. to British English", () => {
    const testString = "Dr. Grosh will see you now.";
    assert.equal(
      translator.translateToBritish(testString),
      `<span class="highlight">Dr</span> Grosh will see you now.`
    );
  });

  test("Translate Lunch is at 12:15 today. to British English", () => {
    const testString = "Lunch is at 12:15 today.";
    assert.equal(
      translator.translateToBritish(testString),
      `Lunch is at <span class="highlight">12.15</span> today.`
    );
  });

  // ******************* TRANSLATE TO AMERICAN TESTS **************************

  test("Translate We watched the footie match for a while. to American English", () => {
    const testString = "We watched the footie match for a while.";
    assert.equal(
      translator.translateToAmerican(testString),
      `We watched the <span class="highlight">soccer</span> match for a while.`
    );
  });

  test("Translate Paracetamol takes up to an hour to work. to American English", () => {
    const testString = "Paracetamol takes up to an hour to work.";
    assert.equal(
      translator.translateToAmerican(testString),
      `<span class="highlight">Tylenol</span> takes up to an hour to work.`
    );
  });

  test("Translate First, caramelise the onions. to American English", () => {
    const testString = "First, caramelise the onions.";
    assert.equal(
      translator.translateToAmerican(testString),
      `First, <span class="highlight">caramelize</span> the onions.`
    );
  });

  test("Translate I spent the bank holiday at the funfair. to American English", () => {
    const testString = "I spent the bank holiday at the funfair.";
    assert.equal(
      translator.translateToAmerican(testString),
      `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`
    );
  });

  test("Translate I had a bicky then went to the chippy. to American English", () => {
    const testString = "I had a bicky then went to the chippy.";
    assert.equal(
      translator.translateToAmerican(testString),
      `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`
    );
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
    const testString = "I've just got bits and bobs in my bum bag.";
    assert.equal(
      translator.translateToAmerican(testString),
      `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
    );
  });

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
    const testString = "The car boot sale at Boxted Airfield was called off.";
    assert.equal(
      translator.translateToAmerican(testString),
      `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
    );
  });

  test("Translate Have you met Mrs Kalyani? to American English", () => {
    const testString = "Have you met Mrs Kalyani?";
    assert.equal(
      translator.translateToAmerican(testString),
      `Have you met <span class="highlight">Mrs.</span> Kalyani?`
    );
  });

  test("Translate Prof Joyner of King's College, London. to American English", () => {
    const testString = "Prof Joyner of King's College, London.";
    assert.equal(
      translator.translateToAmerican(testString),
      `<span class="highlight">Prof.</span> Joyner of King's College, London.`
    );
  });

  test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
    const testString = "Tea time is usually around 4 or 4.30.";
    assert.equal(
      translator.translateToAmerican(testString),
      `Tea time is usually around 4 or <span class="highlight">4:30</span>.`
    );
  });

  // ******************* HIGHLIGHT TESTS **************************

  test("Highlight translation in Mangoes are my favorite fruit.", () => {
    const testString = "Mangoes are my favorite fruit.";
    assert.equal(
      translator.translateToBritish(testString),
      `Mangoes are my <span class="highlight">favourite</span> fruit.`
    );
  });

  test("Highlight translation in I ate yogurt for breakfast.", () => {
    const testString = "I ate yogurt for breakfast.";
    assert.equal(
      translator.translateToBritish(testString),
      `I ate <span class="highlight">yoghurt</span> for breakfast.`
    );
  });

  test("Highlight translation in We watched the footie match for a while.", () => {
    const testString = "We watched the footie match for a while.";
    assert.equal(
      translator.translateToAmerican(testString),
      `We watched the <span class="highlight">soccer</span> match for a while.`
    );
  });

  test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
    const testString = "Paracetamol takes up to an hour to work.";
    assert.equal(
      translator.translateToAmerican(testString),
      `<span class="highlight">Tylenol</span> takes up to an hour to work.`
    );
  });
});
