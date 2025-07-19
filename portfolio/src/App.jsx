import { AnimatedPinDemo } from './components/AnimatedPinDemo'
import { DotBackgroundDemo } from './components/DotBackgroundDemo'
import { TimelineDemo } from './components/TimelineDemo'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision'

function App() {

  return (
   <>
    <div>
      <DotBackgroundDemo>
        <div className="flex gap-8 items-center justify-center">
          <AnimatedPinDemo
            title="iShout"
            description="A collaborative web app for real-time live class broadcasts in online education."
            stack={["React", "Node.js", "DaisyUI","PostgreSQL"]}
            link="https://github.com/Efti001/iShout"
            linkLabel="Source Code"
          />
          <AnimatedPinDemo
            title="Task Manager Inventory"
            description="A full-stack CRUD app for inventory and task tracking."
            stack={["React", "Tailwind", "Node.js","PostgreSQL"]}
            link="https://github.com/Efti001/task-manager-inventory"
            linkLabel="Source Code"
          />
          <AnimatedPinDemo
            title="JobCord"
            description="A Discord bot that sends job application reminders directly in chat."
            stack={["Discord API", "Node.js", "MongoDB"]}
            link="https://github.com/Efti001/jobcord"
            linkLabel="Source Code"
          />
        </div>
      </DotBackgroundDemo>
    <TimelineDemo/>
    </div>
   </>
     
  )
}

export default App
