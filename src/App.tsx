import "./App.css";
import clockIcon from "./assets/images/icon-clock.svg";
import ethereumIcon from "./assets/images/icon-ethereum.svg";
import viewIcon from "./assets/images/icon-view.svg";
import avatar from "./assets/images/image-avatar.png";
import equilibrium from "./assets/images/image-equilibrium.jpg";
function App() {
  return (
    <div className='bg-vDarkBlueM w-screen h-screen flex items-center justify-center px-6'>
      <div className='p-6 bg-vDarkBlueC rounded-[0.9375rem] max-w-[327px] lg:max-w-[350px] flex flex-col'>
        <div className='relative group'>
          <img src={equilibrium} className='rounded-lg'></img>
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 bg-cyanTransparent w-full h-full rounded-lg flex items-center justify-center'>
            <img src={viewIcon}></img>
          </div>
        </div>
        <span className='text-[1.375rem] font-semibold text-white mt-6 mb-[0.875rem]'>
          Equilibrium #3429
        </span>
        <span className='font-light text-lg text-softblue mb-[0.875rem]'>
          Our Equilibrium collection promotes balance and calm.
        </span>
        <div className='flex justify-between mb-6'>
          <div className='flex gap-2 items-center'>
            <img className='' src={ethereumIcon}></img>
            <span className='text-cyan font-semibold'>0.041 ETH</span>
          </div>
          <div className='flex gap-2 items-center'>
            <img className='h-4' src={clockIcon}></img>
            <span className='text-softblue'>3 days left</span>
          </div>
        </div>
        <hr className='border-vDarkBlueL mb-4' />
        <div className='flex gap-4 items-center'>
          <img className='h-8 border border-white rounded-full' src={avatar}></img>
          <div className='flex'>
            <span className='text-softblue'>Creation of </span>&nbsp;
            <span className='text-white'>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
