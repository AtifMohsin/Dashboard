import React from 'react'

const Topsection = () => {
  return (
    <div className='container  bg-white'>
<form class="max-w-md ml-auto mr-2 mt-8 mb-8 text-right">
    <label for="default-search" class="sr-only">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-white placeholder-white border-none rounded-sm bg-[#0090D4] focus:outline-none" placeholder="Search your project here..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-4 py-2">Search</button>
    </div>
</form>



    </div>
  )
}

export default Topsection