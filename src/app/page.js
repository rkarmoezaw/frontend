import styles from './page.module.css';
import Profile, { Another } from '@/app/components/Profile';
import JsxDemo from '@/app/components/JsxDemo';
import Greeting from '@/app/components/Greeting';
import Border from '@/app/components/Border';
import NestedComponent from '@/app/components/NestedComponent';
import Container from '@/app/components/Container';
import Conditional from '@/app/components/conditional_render/Conditional';
import ItemList from '@/app/components/list/ItemList';
import TodoListDemo from '@/app/components/list/TodoListDemo';
import CustomButtonDemo from './components/CustomButtonDemo';
import UserAccount from './components/conditional_render/UserAccount';
import PropagationDemo from './components/Propagation_Demo';
import Counter from './components/Counter';
import TabDemo from './components/Tab/TabDemo';
import StateProblem1 from './components/state/StateProblem1';
import UpdateObject from './components/state/UpdateObject';
import ItemLists from './components/ItemLists';
import Reconsilation from './components/reconsilation/Reconsilation';
import SameRoot from './components/reconsilation/SameRoot';
import DifferentRoot from './components/reconsilation/DifferentRoot';
import Differentkeys from './components/reconsilation/Differentkeys';
import Counterwithreducer from './components/reducer/Counterwithreducer';
import ToDoListWithReducer from './components/reducer/ToDoListWithreducer';
import WhyContext from './components/context/WhyContext';
import ContextDemo from './components/context/ ContextDemo';
import ToDoReducerWithContext from './components/context/ToDoReducerWithContext';
import FilterableProduct from './components/product/FilterableProduct';
import FilterableProductTable from './components/product/FilterableProductTable';
import WhyRef from './components/product/ref/WhyRef';
import RefDemo from './components/product/ref/RefDemo';
import FocusInput from './components/product/ref/FocusInput';
import WhyEffect from './components/effect/WhyEffect';
import EffectDemo from './components/effect/EffectDemo';

export default function Home() {
  //console.log("Home page profile ",Profile());
  let profile1 = {
    name: 'Jhon',
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
  };
  let profile2 = {
    name: 'Another',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  };
  return (
    <div className={styles.page}>
      <h1>Hello World</h1>
      {/* <Profile profile={profile1} />

      <Another />
      <Profile profile={profile2} /> */}
      {/* <JsxDemo /> */}
      {/* <Greeting name={'Aung Aung'} />
      <Greeting name='Jhon Wick' /> */}
      {/* <Border>
        <Profile profile={profile2} size={50} />
      </Border>
      <Border>
        <h1>Hello World</h1>
        Hi
      </Border> */}
      {/* <NestedComponent
        style={{
          backgroundColor: 'blue',
          color: 'black',
        }}
        label='Some message'
        size={100}
      /> */}
      {/* <Container
        style={{
          backgroundColor: 'blue',
          color: 'black',
        }}
      >
        Customize container
      </Container> */}
      {/* <UserAccount role={'admin'} /> */}
      {/* <Conditional role={'admin'} /> */}
      {/* <ItemList items={['Apple', 'Orange', 'Banna']} /> */}
      {/* <TodoListDemo /> */}
      {/* <CustomButtonDemo /> */}
      {/* <PropagationDemo /> */}
      {/* <Counter /> */}
      {/* <Counter /> */}

      {/* <TabDemo /> */}
      {/* <StateProblem1 /> */}
      {/* <UpdateObject /> */}
      {/* <ItemLists /> */}
      {/* <Reconsilation /> */}
      {/* <SameRoot /> */}
      {/* <DifferentRoot /> */}
      {/* <Differentkeys /> */}
      {/* {<Counterwithreducer />} */}
      {/* <ToDoListWithReducer /> */}
      {/* <WhyContext /> */}
      {/* <ContextDemo /> */}
      {/* <ToDoReducerWithContext /> */}
      {/* <FilterableProduct /> */}
      {/* <WhyRef /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <WhyEffect /> */}
      <EffectDemo />
    </div>
  );
}
