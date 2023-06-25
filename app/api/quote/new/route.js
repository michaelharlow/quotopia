import { connectToDatabase } from "@utils/database";
import Quote from "@models/quote";

export const POST = async (req) => {
  const { userId, quote, tag } = await req.json();

  try {
    await connectToDatabase();

    const newQuote = new Quote({
      creator: userId,
      quote,
      tag,
    });

    await newQuote.save();

    return new Response(JSON.stringify(newQuote), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create quote", {
      status: 500,
    });
  }
};
