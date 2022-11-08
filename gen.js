import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from "fs";

const config = new Configuration({  
    apiKey: "YOUR_API_KEY",
});

const openai = new OpenAIApi(config);

const prompt = "write what you want to generate here";

const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
});

const image = response.data.data[0];
console.log(image);

const imgResult = await fetch(image);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());

writeFileSync("./results/image.png", buffer);
