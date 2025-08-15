import openai from "./openaiConfig.js";

(async function () {
  const res = await openai.files.delete("file-ULCZv4pMbtvAWMLKgxJatz");
  console.log("File deleted:", res);
})();
