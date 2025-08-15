import openai from "./openaiConfig.js";
import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async function () {
  const fileName = join(__dirname, "files", "assistant_queries.txt");
  const file = createReadStream(fileName);

  const res = await openai.files.create({
    file,
    purpose: "assistants",
  });

  console.log("Uploaded file:", res);
})();
