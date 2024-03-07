import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams().id;
  console.log("params", params);
  return <>detail</>;
};

export default Detail;
