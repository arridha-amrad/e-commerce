interface Props {
  totalPages: number;
  currentPage: number;
}

function ProductPaginatedButton({ totalPages, currentPage }: Props) {
  const renderPageNumbers = () => {
    let pageNumbers: (number | string)[] = [];
    const firstThree: number[] = [];
    const lastThree: number[] = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 1) {
        if (currentPage >= totalPages - 2) {
          firstThree.push(1, 2, 3);
        } else {
          firstThree.push(currentPage - 1, currentPage, currentPage + 1);
        }
      } else {
        firstThree.push(1, 2, 3);
      }

      if (totalPages > 6) {
        pageNumbers.push("...");
      }

      if (totalPages > 6) {
        lastThree.push(totalPages - 2, totalPages - 1, totalPages);
      }

      pageNumbers = [...firstThree, ...pageNumbers, ...lastThree];
    }

    const unique = new Set(pageNumbers);
    return Array.from(unique);
  };
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center justify-center gap-2 border border-black/10 rounded-xl h-10 aspect-square md:aspect-auto md:px-6">
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
        <span className="lg:block hidden">Previous</span>
      </button>
      <div>
        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`size-10 rounded-xl ${
              currentPage === page ? "bg-[#f0f0f0] text-black" : "text-black/40"
            }`}
            disabled={typeof page !== "number"}
          >
            {page}
          </button>
        ))}
      </div>
      <button className="flex items-center justify-center gap-2 border border-black/10 rounded-xl h-10 aspect-square md:aspect-auto md:px-6">
        <span className="lg:block hidden">Next</span>
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
