import { useState } from 'react'
import Hero from './components/Hero'
import Title from './components/features/Title'
import { Availability, Colors, Music, SchedulingLinks, Team, Todo} from './components/features/Card'

const features = [
  {
    title: "use your calender as a todo list",
    id: "todo-list",
    card: Todo
  },
  {
    title: "Color your calender to organize",
    id: "colors",
    card: Colors
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availability
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: Music
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
    card: SchedulingLinks
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: Team
  }
]

function App() {

  return (
    <main className='mx-auto max-w-6xl px-4'>
      <Hero /> 
      <div className='h-screen'>

      </div>







      <div className='flex items-start w-full gap-20'>
        <div className='w-full py-[50vh]'>
          <ul>
            {
              features.map((feature) => (
                <li key={feature.id}>
                  <Title id={feature?.id}>{feature.title}</Title>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='sticky top-0 flex h-screen w-full items-center'>
          <div className='relative aspect-square w-full rounded-2xl bg-gray-100'>
            {
              features.map(feature => (
                <feature.card id={feature?.id} key={feature.id}/>
              ))
            }
          </div>
        </div>
      </div>





















      <div className='h-screen'>

      </div>
    </main>
  )
}

export default App
