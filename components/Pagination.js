import Link from "next/link";

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === "2"
      ? "/novosti"
      : `/novosti/stranica/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/novosti/stranica/${parseInt(currentPage, 10) + 1}`;

  return (
    <div className="w-full flex flex-row justify-between">
      <div>
        {prevDisabled && (
          <span className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-medium-gray text-medium-gray text-xs font-semibold cursor-auto shadow-2xl">
            Prethodna
          </span>
        )}
        {!prevDisabled && (
          <Link href={prevPageUrl} passHref>
            <a className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-krapinjon-orange hover:border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold cursor-pointer shadow-2xl transition duration-200 ease-in-out">
              Prethodna
            </a>
          </Link>
        )}
      </div>
      <div>
        <span className="text-white text-xs font-semibold">
          Stranica {currentPage} od {totalPages}
        </span>
      </div>
      <div>
        {nextDisabled && (
          <span className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-medium-gray text-medium-gray text-xs font-semibold cursor-auto shadow-2xl">
            Sljedeća
          </span>
        )}
        {!nextDisabled && (
          <Link href={nextPageUrl} passHref>
            <a className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-krapinjon-orange hover:border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold cursor-pointer shadow-2xl transition duration-200 ease-in-out">
              Sljedeća
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
