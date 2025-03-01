import React from 'react'

const nav = () => {
  return (
    <>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0="></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
  <div className="py-5 px-3 h-full overflow-y-auto">
      <ul className="space-y-2">
          <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Overview</span>
              </a>
          </li>
          <li>
              <button type="button" className="flex items-center p-2 w-full text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="flex-1 ml-3">Pages</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
              </button>
              <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                  <li>
                      <a href="#" className="flex items-center p-2 pl-11 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center p-2 pl-11 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center p-2 pl-11 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
          </li>
      </ul>
  </div>
</aside>
</>

  )
}

export default nav;