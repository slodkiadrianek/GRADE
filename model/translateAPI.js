const deepl = require("deepl-node");

const authKey = "9448fea6-f6a0-42df-b5e4-86c9c1d63e96:fx"; // Replace with your key
const translator = new deepl.Translator(authKey);

module.exports = async function translate(textToTranslate, laguage) {
  const result = await translator.translateText(textToTranslate, null, laguage);
  return await result;
};
