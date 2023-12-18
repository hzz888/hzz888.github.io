export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen  flex-col items-center justify-start px-12 py-4 bg-black h-screen w-screen">
      <nav className="flex flex-row items-center justify-between w-full max-w-full max-h-[15vh] border-b-2 pb-4 px-2">
        <span className='text-2xl text-white handwritten'>Zachary Huo</span>
        <a className='nav-item' href='https://www.linkedin.com/in/zhengzuo-huo-8ba5a4247/'>LinkedIn</a>
      </nav>
      
      <div className='flex flex-col w-full items-center mt-6'>
        <div className='flex flex-row justify-center items-center'>
            <div className='text-6xl text-white p-2 mb-1'>👋 Hi, my name is </div>
            <div className='text-6xl hero p-2 mb-1'>Zhengzuo Huo</div>
        </div>
        <div className='text-xl text-white break-words'>You can also call me Zachary. I am a software developer in Sydney, Australia.</div>
      </div>
      
    </main>
  )
}
