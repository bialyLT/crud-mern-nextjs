export default function Page() {

  return (
    <>
      <div className="m-5">
        <h1 className="text-xl">Crud in React, Next js, Node js, MongoDB, Mongoose, Express js</h1>
      </div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

          <form action={process.env.REACT_APP_SERVER_URL} method="POST">
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                      <input id="username" type="text" name="username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Name</label>
                      <input id="name" type="name" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="lastname">Lastname</label>
                      <input id="lastname" type="lastname" name="lastname" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="age">Age</label>
                      <input id="age" type="age" name="age" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>
              </div>

              <div className="flex justify-end mt-6">
                  <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add User</button>
              </div>
          </form>
      </section>
    </>
  )
}