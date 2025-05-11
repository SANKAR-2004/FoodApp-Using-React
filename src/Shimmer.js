const Shimmer = () => {
  //console.log("Inside Shimmer");
  return (
    <div className="ShimmerDiv">
      {Array(10)
        .fill(" ")
        .map((e, index) => {
         return <div className="ShimmerCard" key={index}></div>;
        })}
    </div>
  );
}

export default Shimmer;