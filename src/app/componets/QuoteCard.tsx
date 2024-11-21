interface QuoteCardProps {
  content: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ content, author }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md text-center">
      <p className="text-lg italic mb-2">"{content}"</p>
      <p className="text-sm font-semibold">- {author}</p>
    </div>
  );
};

export default QuoteCard;
