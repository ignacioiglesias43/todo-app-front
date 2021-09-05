import { useState } from "react";

export const usePagination = (rowsLength: number) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return {
    page,
    handleChangePage,
  };
};
