import openai from "./openaiConfig.js";

(async function () {
  const res = await openai.files.list({
    purpose: "assistants",
  });
  console.log("Files list:", res);
})();
