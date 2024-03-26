import deepl from 'deepl-node'

const authKey = "9448fea6-f6a0-42df-b5e4-86c9c1d63e96:fx"; // Replace with your key
const translator = new deepl.Translator(authKey);

export default async function translate(textToTranslate, laguage) {
  try {
    const result = await translator.translateText(
      textToTranslate,
      null,
      laguage
    );
    return await result;
  } catch (error) {
    console.error(`Wystąpił problem. Sprawdź połączenie z internetem`);
  }
};
