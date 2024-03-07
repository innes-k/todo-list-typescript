import InputBox from "../components/InputBox";
import TodoLists from "../components/TodoLists";

const Home: React.FC = () => {
  return (
    <div>
      <InputBox />
      <TodoLists />
    </div>
  );
};

export default Home;
