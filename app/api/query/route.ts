import { NextResponse } from 'next/server';

export async function GET() {
  const prompt = "What is my win condition when I am playing league of legends with a teamcomp of  - Top: Garen, Jungle: Lee sin, Mid: Lux, ADC: caitlyn, Supp: Lulu against Top: Illaoi, Jungle: Maokai, Mid: Syndra, ADC: Sivir, Supp: Alistar"
  const response = await queryGpt(prompt).catch(console.error);
  console.log(response);

  return NextResponse.json({ response })
}

import { GPT4All } from 'gpt4all';

const queryGpt = async (prompt: string) => {
    // Instantiate GPT4All with default or custom settings
    const gpt4all = new GPT4All('gpt4all-lora-unfiltered-quantized', true); // Default is 'gpt4all-lora-quantized' model
  
    // Initialize and download missing files
    await gpt4all.init();

    // Open the connection with the model
    await gpt4all.open();
    // Generate a response using a prompt
    const response = await gpt4all.prompt(prompt);
    console.log(`Prompt: ${prompt}`);
    console.log(`Response: ${response}`);
  
    // Close the connection when you're done
    gpt4all.close();
    return response;
}