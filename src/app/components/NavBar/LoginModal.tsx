import React from 'react';

export default function LoginModal() {
  return (
    <dialog id='login-modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Chào mừng trở lại 🎉</h3>
        <form action='dialog'>
          <div className='mt-[20px] flex flex-col gap-2'>
            <label className='input w-full'>
              <svg
                className='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'>
                  <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                </g>
              </svg>
              <input type='email' placeholder='Email' required />
            </label>
            <label className='input w-full'>
              <svg
                className='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'>
                  <path d='M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z'></path>
                  <circle cx='16.5' cy='7.5' r='.5' fill='currentColor'></circle>
                </g>
              </svg>
              <input type='password' required placeholder='Mật khẩu' />
            </label>
          </div>
          <div className='modal-action'>
            <button className='btn btn-primary'>Đăng nhập</button>
          </div>
        </form>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
