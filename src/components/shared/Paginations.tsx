import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import * as React from "react";

interface PaginationsProps {
  numOfPage: number;
  _totalProducts?: number;
}

export default function Paginations({ numOfPage }: PaginationsProps) {
  const [searchParams] = useSearchParams();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const params = new URLSearchParams(searchParams);
  const paramValue = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  function onChangeHandler(_: React.ChangeEvent<unknown>, value: number) {
    params.set("page", value.toString());
    navigate(`${pathname}?${params}`);
  }

  return (
    <Pagination
      count={numOfPage}
      page={paramValue}
      defaultPage={6}
      siblingCount={0}
      boundaryCount={2}
      variant="text"
      onChange={onChangeHandler}
    />
  );
}
