import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from 'next/image';

export function Footer(){
    return(
        <>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src="/boyce.jpg" width={56} height={56} alt="playing" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Anchor</strong>
            <span className='text-xs text-zinc-400'>Boyce Avenue</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-4'>
            <Shuffle />
            <SkipBack />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white">
                <Play fill='bg-black'/>
              </button>

              <SkipForward />
              <Repeat />
          </div>
          <div className="flex items-center gap-2">
              <span className='text-xs text-zinc-400'>0:32</span>
              <div className="h-1 rounded-full bg-zinc-600 w-96">
                <div className="h-1 bg-zinc-200 w-80 rounded-full"></div>
              </div>
              <span className='text-xs text-zinc-400'>2:12</span>
          </div>
        </div>
        
        <div className='flex items-center gap-2'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className="h-1 rounded-full bg-zinc-600 w-24">
                <div className="h-1 bg-zinc-200 w-20 rounded-full"></div>
              </div>
          </div>
          <Maximize2 size={18}/>
        </div>
      </footer>
        </>
    )
}