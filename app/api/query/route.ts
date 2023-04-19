import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

export async function GET() {
  console.log("OPEN_API_KEY >>", process.env.OPENAI_API_KEY)
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });
  console.log(completion)

  return NextResponse.json({ completion })
}