import './App.css'
import StudentCard from './Components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentCard name="Abdelrahman Osman 💪🏻🙆🏻‍♂️" id="202253120" department="ICS"/>
          <StudentCard name="Abo Hendawi " id="202274080" department="COE"/>
        </div>
      </main>
    </div>
  )
}

export default App
