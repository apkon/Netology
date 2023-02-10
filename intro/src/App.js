import UserProfile from "./components/UserProfile";

function App() {
    const user = {
        name: 'Konstantin',
        status: 'React Developer',
        online: true,
        avatar: '/img/logo.svg',
        interests: ['JS', 'React', 'Frontend']
    }

  return (
      <div>
        <UserProfile user={user} />
      </div>
  );
}

export default App;
