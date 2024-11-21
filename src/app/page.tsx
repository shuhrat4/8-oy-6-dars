"use client";

import { useState } from "react";
import Navbar from "../app/componets/Navbar";
import QuoteCard from "../app/componets/QuoteCard";
import { fetchRandomQuote } from "../api/fetchQuote";

const Home = () => {
  const [quote, setQuote] = useState<{ content: string; author: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    try {
      const data = await fetchRandomQuote();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Random Quotes Generator</h1>
        <button
          className="bg-blue-900 text-white px-4 py-2 rounded shadow"
          onClick={getQuote}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get New Quote"}
        </button>
        {quote && (
          <div className="mt-4">
            <QuoteCard content={quote.content} author={quote.author} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
