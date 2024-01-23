import React from 'react'

function page() {
  return (
    <>
      <div>
        <div className='w-full h-screen px-52 py-24'>
          <div className='flex w-4/12 h-[500px] bg-slate-500 shadow-xl rounded-xl px-8 py-12'>
            <form>
              <div className=''>
                <div className=''>
                  <a className='font-semibold text-white'>Nama</a>
                </div>
                <div>
                  <input type='text' className='w-full h-7'></input>
                </div>
                <div>
                  <div className='pt-2'>
                    <a className='font-semibold text-white'>Email</a>
                  </div>
                  <div>
                    <input type='text' className='w-full h-7'></input>
                  </div>
                  <div className='pt-2'>
                    <a className='font-semibold text-white'>Password</a>
                  </div>
                  <div className=''>
                    <input type='text' className='w-full h-7'></input>
                  </div>
                  <div className='pt-8'>
                    <button className='bg-yellow-400 rounded-xl shadow-xl px-8 py-2 text-xl font-semibold text-white'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div >
    </>
  )
}

export default page
