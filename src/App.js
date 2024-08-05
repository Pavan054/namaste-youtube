import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import UseMemoExample from './components/UseMemoExample';
import UseRefExample from './components/UseRefExample';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "memo",
        element: <><UseMemoExample /><UseRefExample /></>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={appStore}>
    <div>
      <div className="sticky top-0 bg-white"><Head /></div>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
};

export default App;
