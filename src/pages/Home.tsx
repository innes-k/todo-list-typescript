import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <InputBox />
      <TodoLists />
    </div>
  );
};

export default Home;
