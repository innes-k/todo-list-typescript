import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";
import { useAppSelector } from "../redux/config/configStore";

const Home: React.FC = () => {
  const todos = useAppSelector((state) => state.todoReducer);
  return (
    <div>
      <Header />
      <InputBox />
      <TodoLists todos={todos} />
    </div>
  );
};

export default Home;
