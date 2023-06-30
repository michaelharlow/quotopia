import Quote from "@models/quote";
import { connectToDatabase } from "@utils/database";

// GET

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();

    const quote = await Quote.findById(params.id).populate("creator");

    if (!quote) {
      return new Response("Quote not found", { status: 404 });
    }

    return new Response(JSON.stringify(quote), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all quotes", { status: 500 });
  }
};

// PATCH

export const PATCH = async (req, { params }) => {
  const { quote, author } = await req.json();

  try {
    await connectToDatabase();

    const existingQuote = await Quote.findById(params.id);

    if (!existingQuote) {
      return new Response("Quote not found", { status: 404 });
    }

    existingQuote.quote = quote;
    existingQuote.author = author;

    await existingQuote.save();

    return new Response("Successfully updated the Quotes", { status: 200 });
  } catch (error) {
    return new Response("Failed to update quote", { status: 500 });
  }
};

// DELETE

export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();

    await Quote.findByIdAndRemove(params.id);

    return new Response("Quote deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete quote", { status: 500 });
  }
};
