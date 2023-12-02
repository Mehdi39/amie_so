import { useState } from 'react'
import Hero from './components/Hero'

const features = [
  {
    title: "use your calender as a todo list",
    id: "todo-list"
  },
  {
    title: "Color your calender to organize",
    id: "colors"
  },
  {
    title: "Instantly know if someone is available",
    id: "availability"
  },
  {
    title: "Track what you listened to when",
    id: "music"
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links"
  },
  {
    title: "Always know what your team is up to",
    id: "team"
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
                  <p className='py-16 font-heading text-5xl text-gray-300'>{feature.title}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='w-full sticky top-0 h-screen flex items-center'>
          <div className='w-full aspect-square bg-gray-100'>
            div col
          </div>
        </div>
      </div>





















      <div className='h-screen'>

      </div>
    </main>
  )
}

export default App
