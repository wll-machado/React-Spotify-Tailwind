import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){
    return(
        <>
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white/50'> <HomeIcon/> Home</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white/50'> <Search /> Search</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white/50'> <Library /> Your Library</a>
          </nav>

          <nav className="flex flex-col mt-6 pt-10 border-t border-green-800 gap-3">
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>
                Hot Hit Brasil
              </a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>
                Never Repeat
              </a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>
                My Playlist
              </a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>
                Top Brasil
              </a>
          </nav>
        </aside>
        </>
    )
}