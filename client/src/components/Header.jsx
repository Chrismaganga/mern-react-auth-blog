import { Link } from 'react-router-dom';


export default function Header() {
 
  return (
    <div className=' h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-white'>LOGO</h1>
        </Link>
        <ul className='flex gap-4 text-bold text-xl text-white uppercase'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/sign in'>
          <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
