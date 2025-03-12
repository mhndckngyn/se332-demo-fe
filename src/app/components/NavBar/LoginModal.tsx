import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axiosInstance from '@/modules/axiosInstance';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginModal() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const login = async (data: LoginFormData) => {
  try {
    const response = await axiosInstance.post('http://localhost:5050/login', data);
    const user = response.data;

    localStorage.setItem('user', JSON.stringify(user));
    if (user.vaitro === 0) {
      window.location.href = '/jobs';
    } else {
      window.location.href = '/recruiter';
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Login failed:', error);
    setErrorMessage(error.response?.data?.message || 'Đăng nhập thất bại');
  }
};

  return (
    <dialog id='login-modal' className='modal'>
      <div className='modal-box w-fit'>
        <h3 className='font-bold text-lg'>Chào mừng trở lại 🎉</h3>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit(login)} action='dialog'>
          <div className='mt-[20px] flex flex-col gap-2'>
            <label className='input lg:w-[24rem]'>
              <input
                {...register('email', { required: 'Vui lòng nhập email' })}
                type='email'
                placeholder='Email'
                className="input-field"
              />
            </label>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <label className='input lg:w-[24rem]'>
              <input
                {...register('password', { required: 'Vui lòng nhập mật khẩu' })}
                type='password'
                placeholder='Mật khẩu'
                className="input-field"
              />
            </label>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className='modal-action'>
            <button type="submit" className='btn btn-primary'>Đăng nhập</button>
          </div>
        </form>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
