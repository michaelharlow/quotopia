import Quote from "@models/quote";
import { connectToDatabase } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();

    const quotes = await Quote.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(quotes), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all quotes", { status: 500 });
  }
};
