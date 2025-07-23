import { AnimatedPinDemo } from './components/AnimatedPinDemo'
import { DotBackgroundDemo } from './components/DotBackgroundDemo'
import { SparklesPreview } from './components/SparklesPreview';
import { TimelineDemo } from './components/TimelineDemo'

function App() {
  return (
    <>
      <SparklesPreview/>
      <DotBackgroundDemo>
        <div className="min-h-screen flex flex-col w-full">
          <div className="flex flex-col items-center flex-grow gap-4 md:gap-6 px-2 md:px-0">
        <header className="w-full flex flex-col items-center justify-center pt-2 pb-2">
        </header>
          <div className="w-full flex justify-center mt-4">
            <TimelineDemo />
          </div>
          <div className="flex flex-col items-center w-full mt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">Projects</h2>
            <div className="flex flex-col md:flex-row gap-0 md:-space-x-4 items-center justify-center w-full">
              <AnimatedPinDemo
                title="Portfolio"
                description="A personal portfolio showcasing my projects and skills."
                stack={["React", "Tailwind CSS", "Motion"]}
                link="https://github.com/Efti001/portfolio-v2"
                linkLabel="Source Code"
              />
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
          </div>
        </div>
        <footer className="w-full text-center py-6 text-sm text-slate-600 dark:text-slate-400 mt-12 border-t border-slate-200 dark:border-slate-700">
          <p>© 2025 Reserved by <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Morshed Ahmed</span></p>
        </footer>
      </div>
    </DotBackgroundDemo>
    </>
  );
}


export default App
