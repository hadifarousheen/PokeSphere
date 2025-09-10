const Pagination = ({ start, end, currentPage, setCurrentPage, noOfPages }) => {
  const handleChange = (n) => {
    setCurrentPage(n);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="text-center">
      <button
        disabled={currentPage == 0}
        onClick={() => {
          goToPrevPage();
        }}
        className="hover:bg-blue-300 py-1 px-1 rounded-md cursor-pointer"
      >
        ◀
      </button>
      {[...Array(noOfPages).keys()].map((n) => {
        return (
          <span
            onClick={() => {
              handleChange(n);
            }}
            className={`rounded-md shadow-2xl hover:bg-white font-bold mx-2 px-2 py-1 bg-blue-300 cursor-pointer ${
              currentPage === n && "bg-blue-600 text-white"
            }`}
            key={n}
          >
            {n}
          </span>
        );
      })}
      <button
        disabled={currentPage == noOfPages - 1}
        onClick={() => {
          goToNextPage();
        }}
        className="hover:bg-blue-300 py-1 px-1 rounded-md cursor-pointer"
      >
        {" "}
        ▶
      </button>
    </div>
  );
};

export default Pagination;
