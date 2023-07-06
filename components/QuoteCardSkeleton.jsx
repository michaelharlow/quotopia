const QuoteCardSkeleton = ({ size }) => {
  return (
    <div className="quote_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="skeleton w-[40px] h-[40px] rounded-full"></div>

          <div className="flex flex-col">
            <div className="skeleton h-[1em] w-[9em]"></div>
            <div className="skeleton h-[0.75em] w-[12em] mt-1"></div>
          </div>
        </div>
      </div>
      <div
        className={"skeleton w-full my-4"}
        style={{ height: `${size}em` }}
      ></div>
      <div className="flex justify-end">
        <div className="skeleton h-[1em] w-[7em] self-end"></div>
      </div>
    </div>
  );
};

export default QuoteCardSkeleton;
