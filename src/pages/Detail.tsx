import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams().id;
  return <div>Detail</div>;
};

export default Detail;
