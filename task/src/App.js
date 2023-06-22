import Form from "./Form";
import UserCard from "./UserCard";

export default function App() {
  return (
    <div className="App">
      <UserCard />
      <Form />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserCard />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}
