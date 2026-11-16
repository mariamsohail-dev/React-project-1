import users from './components/users-data.json'
import UserCard from './components/UserCard.jsx'

function App() {
  return (
    <div className="
      grid
      grid-cols-4
      gap-4
      p-4
      max-[1200px]:grid-cols-3
      max-[950px]:grid-cols-2
      max-[600px]:grid-cols-1
    ">
      {users.map((obj) => {
        return (
          <UserCard
            key={obj.id}
            user={obj}
          />
        )
      })}
    </div>
  )
}

export default App