import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import {Search , Home as HomeIcon, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-zinc-800">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black p-1" ><ChevronLeft/></button>
            <button className="rounded-full bg-black p-1" ><ChevronRight/></button>
          </div>

          <h1 className='mt-10 font-semibold text-3xl'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/10 overflow-hidden group rounded transition-colors flex items-center gap-4 hover:bg-white/20 relative">
              <Image src="/boyce.jpg" width={104} height={104} alt="album"/>
              <strong>Acoustic Session</strong>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute right-4">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className="bg-white/10 overflow-hidden group rounded transition-colors flex items-center gap-4 hover:bg-white/20 relative">
              <Image src="/foofigthers.jpg" width={104} height={104} alt="album"/>
              <strong>Greats Hits</strong>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute right-4">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className="bg-white/10 overflow-hidden group rounded transition-colors flex items-center gap-4 hover:bg-white/20 relative">
              <Image src="/linkinpark.jpg" width={104} height={104} alt="album"/>
              <strong>Hybrid Theory</strong>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center m-auto w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute right-4">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className="bg-white/10 overflow-hidden group rounded transition-colors flex items-center gap-4 hover:bg-white/20 relative">
              <Image src="/soldiers.jpg" width={104} height={104} alt="album"/>
              <strong>Down The Rabbit Hole</strong>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute right-4">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className="bg-white/10 overflow-hidden group rounded transition-colors flex items-center gap-4 hover:bg-white/20 relative">
              <Image src="/20.jpg" width={104} height={104} alt="album"/>
              <strong>North</strong>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute right-4">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className="bg-white/10 overflow-hidden group rounded transition-colors flex items-center gap-4 hover:bg-white/20 relative">
              <Image src="/imagine.jpg" width={104} height={104} alt="album"/>
              <strong>Continued Silence</strong>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute right-4">
                <Play fill='bg-black'/>
              </button>
            </a>
    
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made By Wellington Machado </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="flex flex-col gap-2 bg-white/5 p-3 hover:bg-white/10 rounded relative group">
              <Image src="/daily-1.jpg" className='w-full' width={120} height={120}  alt="album"/>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute inset-y-1/2 right-1">
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Your daily mix to category</span>
            </a>
            <a className="flex flex-col gap-2 bg-white/5 p-3 hover:bg-white/10 rounded relative group">
              <Image src="/daily-2.jpg" className='w-full' width={120} height={120}  alt="album"/>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute inset-y-1/2 right-1">
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Your daily mix to category</span>
            </a>
            <a className="flex flex-col gap-2 bg-white/5 p-3 hover:bg-white/10 rounded relative group">
              <Image src="/daily-3.jpg" className='w-full' width={120} height={120}  alt="album"/>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute inset-y-1/2 right-1">
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>Your daily mix to category</span>
            </a>
            <a className="flex flex-col gap-2 bg-white/5 p-3 hover:bg-white/10 rounded relative group">
              <Image src="/daily-4.jpg" className='w-full' width={120} height={120}  alt="album"/>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute inset-y-1/2 right-1">
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>Your daily mix to category</span>
            </a>
            <a className="flex flex-col gap-2 bg-white/5 p-3 hover:bg-white/10 rounded relative group">
              <Image src="/daily-5.jpg" className='w-full' width={120} height={120}  alt="album"/>
              <button className="p-2 rounded-full bg-green-400 text-black flex items-center justify-center  w-12 h-12 pr-1 invisible group-hover:visible transition-all absolute inset-y-1/2 right-1">
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500'>Your daily mix to category</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
