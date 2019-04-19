import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import IconButton from "@material-ui/core/IconButton";

const Pagination = ({
  handlePageClick,
  items,
  limit,
  nextDisabled,
  offset,
  previousDisabled
}) => {
  const start = offset + 1;
  const pageItems =
    offset + limit > items.length ? items.length : offset + limit;
  const onNextClick = () =>
    handlePageClick({
      offset: offset + limit,
      limit
    });
  const onPreviousClick = () =>
    handlePageClick({
      offset: offset - limit,
      limit
    });
  return (
    <div>
      <IconButton
        aria-label="Back"
        disabled={previousDisabled}
        onClick={onPreviousClick}
      >
        <ArrowLeftIcon />
      </IconButton>
      <span>
        viewing {start} to {pageItems} of {items.length}
      </span>
      <IconButton
        aria-label="Back"
        disabled={nextDisabled}
        onClick={onNextClick}
      >
        <ArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default Pagination;
