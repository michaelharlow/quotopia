import Quote from "@models/quote";
import { connectToDatabase } from "@utils/database";

export const dynamic = "force-dynamic";
export const GET = async (req) => {
  try {
    await connectToDatabase();

    const quotes = await Quote.find({}).populate("creator");

    const response = new Response(JSON.stringify(quotes), { status: 200 });

    return response;
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all quotes", { status: 500 });
  }
};
