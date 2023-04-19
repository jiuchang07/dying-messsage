import { MapSchema } from "@colyseus/schema";
import { Configuration, OpenAIApi } from "openai";
import * as XMLHttpRequest from 'xhr2';
// import * as DyingMessageRoom from "./rooms/DyingMessageRoom";
import * as fs from 'fs';
import fetch from 'node-fetch';


// const DEFAULT_COMPONENTS = new MapSchema<["string"]> ({"motives": ["jealousy", "greed", "revenge", "anger", "love", "hate", "envy", "fear", "desperation", "obsession", "pride", "power", "lust", "betrayal", "self-defense", "insanity", "protection", "accident", "blackmail", "extortion"],
//   "occupations": ["butler", "maid", "gardener", "cook", "guest", "chauffeur", "nanny", "housekeeper", "security guard", "personal assistant", "doctor", "nurse", "lawyer", "accountant", "teacher", "engineer", "scientist", "artist", "musician", "writer"],
//   "weapons": ["knife", "gun", "hammer", "poison", "rope", "candlestick", "wrench", "lead pipe", "revolver", "screwdriver", "axe", "crowbar", "shovel", "bat", "golf club", "tire iron", "chainsaw", "scissors", "letter opener", "fire poker"]});

const DEFAULT_COMPONENTS = {"motives": ["jealousy", "greed", "revenge", "anger", "love", "hate", "envy", "fear", "desperation", "obsession", "pride", "power", "betrayal", "self-defense", "insanity", "protection", "accident", "blackmail", "extortion"],
"occupations": ["butler", "maid", "gardener", "cook", "guest", "chauffeur", "nanny", "housekeeper", "security guard", "personal assistant", "doctor", "nurse", "lawyer", "accountant", "teacher", "engineer", "scientist", "artist", "musician", "writer"],
"weapons": ["knife", "gun", "hammer", "poison", "rope", "candlestick", "wrench", "lead pipe", "revolver", "screwdriver", "axe", "crowbar", "shovel", "bat", "golf club", "tire iron", "chainsaw", "scissors", "letter opener", "fire poker"]};
// const DEFAULT_COMPONENTS = {"motives": ["greed"], "occupations": ["guest"]};

const configuration = new Configuration({
  apiKey: "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",//process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateResponse(DEFAULT_COMPONENTS) {
    try {
        for (let o in DEFAULT_COMPONENTS) {
            for (let i=0;i<DEFAULT_COMPONENTS[o].length;i++) {
                const optionValue = DEFAULT_COMPONENTS[o][i].replace(/\s/g, "");;
                console.log(optionValue);
                if (fs.existsSync('./src/frontend/images/'+optionValue+'.png')) {
                    continue;
                }
                const response = await openai.createImage({
                    prompt: optionValue + " in the Banksy style.",
                    n: 1,
                    size: "1024x1024",
                });
                fetch(response.data.data[0].url).then(res =>
                    res.body.pipe(fs.createWriteStream('./src/frontend/images/'+optionValue+'.png'))
                )
            };
        };
    } catch (error) {
        console.error('Error generating response:', error.response ? error.response.data : error);
        return 'Sorry, I am unable to generate a response at this time.';
    }
}

generateResponse(DEFAULT_COMPONENTS);


