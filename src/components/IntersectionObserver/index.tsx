import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollProps {
  fetchMoreData: (pageNumber: number) => void;
}

const IntersectionObserver = ({ fetchMoreData }: InfiniteScrollProps) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchMoreData(pageNumber);
    }
  }, [inView, fetchMoreData, pageNumber]);
  return <div ref={ref} />;
};

export default IntersectionObserver;
