import Skeleton from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <div className="Card">
      <Skeleton height={150} />
      <h1>
      <Skeleton height={20} />
      </h1>
      <p className="Price">
        <Skeleton height={20} />
      </p>
      <Skeleton height={30} />
      <Skeleton height={30} />
    </div>
  );
}

export default CardSkeleton;
