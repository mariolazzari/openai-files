import openai from "./openaiConfig.js";

(async function () {
  const res = await openai.files.retrieve("file-ULCZv4pMbtvAWMLKgxJatz");
  console.log(res);
})();
