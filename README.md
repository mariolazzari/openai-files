# OpenAI API: Working with Files

## Introduction

### Significance

Helps you to handle large files operations.

- Efficency
- Security

### Benefits

- Data handling
- Scalability

#### Use cases

- Training model
- Batch processing for Analytics
- Sensitive datasets
- Historical analysis
- Automatic content generation

## Using Files API

### Developemnt enviroment

```sh
pnpm init
pnpm add openai
pnpm add dotenv
```

```js
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openaiConfig = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openaiConfig;
```

### Uploading file

```js
(async function () {
  const fileName = join(__dirname, "files", "assistant_queries.txt");
  const file = createReadStream(fileName);

  const res = await openai.files.create({
    file,
    purpose: "assistants",
  });

  console.log("Uploaded file:", res);
})();
```
