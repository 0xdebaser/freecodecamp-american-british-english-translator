const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translateToBritish(text) {
    let translatedText = text;

    // handle times
    const timesArray = [...translatedText.matchAll(/\d{1,2}:\d{2}/g)];
    timesArray.forEach((time) => {
      translatedText = translatedText.replace(
        time[0],
        `<span class="highlight">${time[0].replace(":", ".")}</span>`
      );
    });

    // handle titles
    translatedText = translatedText.replaceAll(
      "Mr. ",
      `<span class="highlight">Mr</span> `
    );
    translatedText = translatedText.replaceAll(
      "Mrs. ",
      `<span class="highlight">Mrs</span> `
    );
    translatedText = translatedText.replaceAll(
      "Ms. ",
      `<span class="highlight">Ms</span> `
    );
    translatedText = translatedText.replaceAll(
      "Mx. ",
      `<span class="highlight">Mx</span> `
    );
    translatedText = translatedText.replaceAll(
      "Dr. ",
      `<span class="highlight">Dr</span> `
    );
    translatedText = translatedText.replaceAll(
      "Prof. ",
      `<span class="highlight">Prof</span> `
    );

    // handle translated terms
    const americanTermsToTranslate = Object.keys(americanOnly);
    americanTermsToTranslate.forEach((term) => {
      const matchedTerms = [...translatedText.matchAll(new RegExp(term, "ig"))];
      for (let i = 0; i < matchedTerms.length; i++) {
        const capitalized = /[A-Z]/.test(matchedTerms[i][0]);
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]} `,
          `<span class="highlight">${
            capitalized
              ? americanOnly[term].slice(0, 1).toUpperCase() +
                americanOnly[term].slice(1)
              : americanOnly[term]
          }</span> `
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}.`,
          `<span class="highlight">${
            capitalized
              ? americanOnly[term].slice(0, 1).toUpperCase() +
                americanOnly[term].slice(1)
              : americanOnly[term]
          }</span>.`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]},`,
          `<span class="highlight">${
            capitalized
              ? americanOnly[term].slice(0, 1).toUpperCase() +
                americanOnly[term].slice(1)
              : americanOnly[term]
          }</span>,`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}?`,
          `<span class="highlight">${
            capitalized
              ? americanOnly[term].slice(0, 1).toUpperCase() +
                americanOnly[term].slice(1)
              : americanOnly[term]
          }</span>?`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}!`,
          `<span class="highlight">${
            capitalized
              ? americanOnly[term].slice(0, 1).toUpperCase() +
                americanOnly[term].slice(1)
              : americanOnly[term]
          }</span>!`
        );
      }
    });

    // handle spellings
    const americanTermsToRespell = Object.keys(americanToBritishSpelling);
    americanTermsToRespell.forEach((term) => {
      const matchedTerms = [...translatedText.matchAll(new RegExp(term, "ig"))];
      for (let i = 0; i < matchedTerms.length; i++) {
        const capitalized = /[A-Z]/.test(matchedTerms[i][0]);
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]} `,
          `<span class="highlight">${
            capitalized
              ? americanToBritishSpelling[term].slice(0, 1).toUpperCase() +
                americanToBritishSpelling[term].slice(1)
              : americanToBritishSpelling[term]
          }</span> `
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}.`,
          `<span class="highlight">${
            capitalized
              ? americanToBritishSpelling[term].slice(0, 1).toUpperCase() +
                americanToBritishSpelling[term].slice(1)
              : americanToBritishSpelling[term]
          }</span>.`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]},`,
          `<span class="highlight">${
            capitalized
              ? americanToBritishSpelling[term].slice(0, 1).toUpperCase() +
                americanToBritishSpelling[term].slice(1)
              : americanToBritishSpelling[term]
          }</span>,`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}?`,
          `<span class="highlight">${
            capitalized
              ? americanToBritishSpelling[term].slice(0, 1).toUpperCase() +
                americanToBritishSpelling[term].slice(1)
              : americanToBritishSpelling[term]
          }</span>?`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}!`,
          `<span class="highlight">${
            capitalized
              ? americanToBritishSpelling[term].slice(0, 1).toUpperCase() +
                americanToBritishSpelling[term].slice(1)
              : americanToBritishSpelling[term]
          }</span>!`
        );
      }
    });

    return translatedText;
  }

  translateToAmerican(text) {
    let translatedText = text;

    // handle times
    const timesArray = [...translatedText.matchAll(/\d{1,2}.\d{2}/g)];
    timesArray.forEach((time) => {
      translatedText = translatedText.replace(
        time[0],
        `<span class="highlight">${time[0].replace(".", ":")}</span>`
      );
    });

    // handle titles
    translatedText = translatedText.replaceAll(
      "Mr ",
      `<span class="highlight">Mr.</span> `
    );
    translatedText = translatedText.replaceAll(
      "Mrs ",
      `<span class="highlight">Mrs.</span> `
    );
    translatedText = translatedText.replaceAll(
      "Ms ",
      `<span class="highlight">Ms.</span> `
    );
    translatedText = translatedText.replaceAll(
      "Mx ",
      `<span class="highlight">Mx.</span> `
    );
    translatedText = translatedText.replaceAll(
      "Dr ",
      `<span class="highlight">Dr.</span> `
    );
    translatedText = translatedText.replaceAll(
      "Prof ",
      `<span class="highlight">Prof.</span> `
    );

    // handle translated terms
    const britishTermsToTranslate = Object.keys(britishOnly);
    britishTermsToTranslate.forEach((term) => {
      const matchedTerms = [...translatedText.matchAll(new RegExp(term, "ig"))];
      for (let i = 0; i < matchedTerms.length; i++) {
        const capitalized = /[A-Z]/.test(matchedTerms[i][0]);
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]} `,
          `<span class="highlight">${
            capitalized
              ? britishOnly[term].slice(0, 1).toUpperCase() +
                britishOnly[term].slice(1)
              : britishOnly[term]
          }</span> `
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}.`,
          `<span class="highlight">${
            capitalized
              ? britishOnly[term].slice(0, 1).toUpperCase() +
                britishOnly[term].slice(1)
              : britishOnly[term]
          }</span>.`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]},`,
          `<span class="highlight">${
            capitalized
              ? britishOnly[term].slice(0, 1).toUpperCase() +
                britishOnly[term].slice(1)
              : britishOnly[term]
          }</span>,`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}?`,
          `<span class="highlight">${
            capitalized
              ? britishOnly[term].slice(0, 1).toUpperCase() +
                britishOnly[term].slice(1)
              : britishOnly[term]
          }</span>?`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}!`,
          `<span class="highlight">${
            capitalized
              ? britishOnly[term].slice(0, 1).toUpperCase() +
                britishOnly[term].slice(1)
              : britishOnly[term]
          }</span>!`
        );
      }
    });

    // handle spellings
    const americanSpellings = Object.keys(americanToBritishSpelling);
    const britishSpellings = [];
    americanSpellings.forEach((key) => {
      britishSpellings.push(americanToBritishSpelling[key]);
    });
    britishSpellings.forEach((term, index) => {
      const matchedTerms = [...translatedText.matchAll(new RegExp(term, "ig"))];
      for (let i = 0; i < matchedTerms.length; i++) {
        const capitalized = /[A-Z]/.test(matchedTerms[i][0]);
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]} `,
          `<span class="highlight">${
            capitalized
              ? americanSpellings[index].slice(0, 1).toUpperCase() +
                americanSpellings[index].slice(1)
              : americanSpellings[index]
          }</span> `
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}.`,
          `<span class="highlight">${
            capitalized
              ? americanSpellings[index].slice(0, 1).toUpperCase() +
                americanSpellings[index].slice(1)
              : americanSpellings[index]
          }</span>.`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]},`,
          `<span class="highlight">${
            capitalized
              ? americanSpellings[index].slice(0, 1).toUpperCase() +
                americanSpellings[index].slice(1)
              : americanSpellings[index]
          }</span>,`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}?`,
          `<span class="highlight">${
            capitalized
              ? americanSpellings[index].slice(0, 1).toUpperCase() +
                americanSpellings[index].slice(1)
              : americanSpellings[index]
          }</span>?`
        );
        translatedText = translatedText.replaceAll(
          `${matchedTerms[i][0]}!`,
          `<span class="highlight">${
            capitalized
              ? americanSpellings[index].slice(0, 1).toUpperCase() +
                americanSpellings[index].slice(1)
              : americanSpellings[index]
          }</span>!`
        );
      }
    });

    return translatedText;
  }
}

module.exports = Translator;
