import useAuth from '@/hooks/useAuth';
import LoginModal from './LoginModal';

interface User {
  email: string
  idcongty: string,
  idnguoidung: string,
  sodienthoai: string,
  ten: string,
  tencongty: string
}


export default function NavBar() {
  const user : User | null  = useAuth();
  const handleLoginOpen = () => {
    const modal = document.getElementById('login-modal');
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'
  };

  return (
    <>
      <div className='navbar bg-base-100 gap-4 px-[100px] sticky top-0 z-30'>
        <a className='flex justify-start flex-0 btn btn-ghost px-2' href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='none'>
            <path
              fill='#FCD53F'
              d='m28.979 17.003-3.108.214c-.834.06-1.178 1.079-.542 1.608l2.388 1.955c.521.428 1.314.204 1.523-.428l.709-2.127c.219-.632-.292-1.273-.97-1.222M21.75 2.691l-.72 2.9c-.2.78.66 1.41 1.34.98l2.54-1.58c.55-.34.58-1.14.05-1.52l-1.78-1.29a.912.912 0 0 0-1.43.51M6.43 4.995l2.53 1.58c.68.43 1.54-.19 1.35-.98l-.72-2.9a.92.92 0 0 0-1.43-.52l-1.78 1.29c-.53.4-.5 1.19.05 1.53M4.185 20.713l2.29-1.92c.62-.52.29-1.53-.51-1.58l-2.98-.21a.92.92 0 0 0-.94 1.2l.68 2.09c.2.62.97.84 1.46.42M17.795 28.005l-1.12-2.77c-.3-.75-1.36-.75-1.66 0l-1.12 2.77c-.24.6.2 1.26.85 1.26h2.2a.92.92 0 0 0 .85-1.26'
            />
            <path
              fill='#FCD53F'
              d='m17.565 3.324 1.726 3.72c.326.694.967 1.18 1.717 1.29l4.056.624c1.835.278 2.575 2.53 1.293 3.859L23.268 16a2.28 2.28 0 0 0-.612 1.964l.71 4.374c.307 1.885-1.687 3.293-3.354 2.37l-3.405-1.894a2.25 2.25 0 0 0-2.21 0l-3.404 1.895c-1.668.922-3.661-.486-3.355-2.37l.71-4.375A2.28 2.28 0 0 0 7.736 16l-3.088-3.184c-1.293-1.34-.543-3.581 1.293-3.859l4.055-.625a2.3 2.3 0 0 0 1.717-1.29l1.727-3.719c.819-1.765 3.306-1.765 4.124 0'
            />
          </svg>
          <span className='font-title inline-flex text-lg md:text-2xl'>
            Jobly
          </span>
        </a>
        <div className='flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='/jobs'>Việc làm</a>
            </li>
            <li>
              <a href='/companies'>Công ty</a>
            </li>
          </ul>
        </div>
        <div className='flex-1'></div>
        <div className='flex gap-2 items-center'>
          {user ? (
            <>
              <p className='font-bold text-primary'>Xin chào, {user.ten} 👋</p>
              <button className='btn btn-primary' onClick={handleLogout}>
               Đăng Xuất
              </button>
            </>
          ) : (
            <button className='btn btn-primary' onClick={handleLoginOpen}>
              Đăng nhập
            </button>
          )}
        </div>
      </div>
      <LoginModal />
    </>
  );
}
