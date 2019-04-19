import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import IconButton from "@material-ui/core/IconButton";

const Pagination = () => {
  const [start, pageItems, totalItems] = [1, 5, 7];
  return (
    <div>
      <IconButton aria-label="Back" disabled>
        <ArrowLeftIcon />
      </IconButton>
      <span>
        viewing {start} to {pageItems} of {totalItems}
      </span>
      <IconButton aria-label="Back">
        <ArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default Pagination;
