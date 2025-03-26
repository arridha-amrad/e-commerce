function ProductPaginatedButton() {
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center gap-2 border border-black/10 rounded-xl h-10 px-6">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663"
            stroke="black"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Previous
      </button>
      {[...Array(10)].map((_, i) => (
        <button className="bg-[#f0f0f0] size-10 rounded-xl" key={i}>
          {i + 1}
        </button>
      ))}
      <button className="flex items-center gap-2 border border-black/10 rounded-xl h-10 px-6">
        Next
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1665 6.99996H12.8332M12.8332 6.99996L6.99984 1.16663M12.8332 6.99996L6.99984 12.8333"
            stroke="black"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductPaginatedButton;
