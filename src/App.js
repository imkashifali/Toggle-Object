import FormHandling from "./module/students/FormHandling";
import { useSelector,useDispatch } from "react-redux";
import Header from "./components/Header";
import {studentAction} from './redux/actions/studentAction'
import {fetchFollowers} from './redux/actions/githubAction'

function App() {
  const dispatch = useDispatch();
  // const name = useSelector((store) => store.studentReducer.name);
  // console.log("Name From Reduxe Store", name);
  const store = useSelector((store) => store);
  console.log("Name From Reduxe Store", store);


  const cthandler = () => {
    let datapassstore = {
      agNO: "2015-12-14",
      createdAt: new Date(),
    };
    console.log('data in react component', datapassstore)
    //pass this data to action datapassstore
    dispatch(studentAction(datapassstore));
  };
  const cthandler2 = () => {
    let datapasssAction = 'naveed-rana'
    console.log('data in react component', datapasssAction)
    //pass this data to action datapasssAction
    dispatch(fetchFollowers(datapasssAction));
  };
  return (
    <div className="App">
      {/* <h1>{name}</h1> */}
      <Header />
      <button onClick={cthandler2}>fetch github followes</button>
      <button onClick={cthandler}>data send to component</button>
      <FormHandling />
    </div>
  );
}

export default App;
