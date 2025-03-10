import { JobDetailData } from '@/app/types/data';
import { JobInfoProps } from '@/app/types/props';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function JobInfoModal({ initialJob }: JobInfoProps) {
  const { register, handleSubmit, setValue, reset } = useForm<JobDetailData>();

  useEffect(() => {
    reset({
      tenvieclam: initialJob ? initialJob.tenvieclam : '',
      diachi: initialJob ? initialJob.diachi : '',
      luongthapnhat: initialJob ? initialJob.luongthapnhat : null,
      luongcaonhat: initialJob ? initialJob.luongcaonhat : null,
      applyBefore: initialJob ? convertDateToISO(initialJob?.applyBefore) : '',
      responsibilities: initialJob ? initialJob.responsibilities : [''],
      whoAreYou: initialJob ? initialJob.whoAreYou : [''],
    });
  }, [initialJob, reset]);

  const onSubmit = (data: JobDetailData) => {
    console.log('Form Data:', data);
  };

  const handleClose = () => {
    const form = document.getElementById('job-info-form');
    if (form instanceof HTMLDialogElement) {
      form.close();
    }
  };

  const convertDateToISO = (dateStr: string | undefined) => {
    if (!dateStr) return '';
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <dialog id='job-info-form' className='modal'>
      <div className='modal-box max-h-[80vh]'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-lg'>
          {initialJob ? 'Thông tin việc làm' : 'Đăng việc làm mới'}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
          <div className='mt-3 flex flex-col gap-2'>
            <input
              type='text'
              className='input w-full'
              disabled
              value={initialJob ? initialJob.tencongty : "Tên công ty"}
            />

            <label className='input w-full'>
              <span className='label'>Việc làm</span>
              <input
                type='text'
                placeholder='Nhập tên việc làm'
                {...register('name')}
              />
            </label>

            <label className='input w-full'>
              <span className='label'>Địa điểm</span>
              <input
                type='text'
                placeholder='Nhập địa điểm làm việc'
                {...register('location')}
              />
            </label>

            <label className='input w-full'>
              <span className='label'>Ứng tuyển trước</span>
              <input type='date' {...register('applyBefore')} />
            </label>

            <div className='flex gap-2'>
              <label className='input'>
                <span className='label'>Min</span>
                <input
                  type='number'
                  placeholder='Lương tối thiểu'
                  {...register('minSalary')}
                />
                <span className='label'>tr. VNĐ</span>
              </label>
              <label className='input'>
                <span className='label'>Max</span>
                <input
                  type='number'
                  placeholder='Lương tối đa'
                  {...register('maxSalary')}
                />
                <span className='label'>tr. VNĐ</span>
              </label>
            </div>

            <textarea
              className='textarea w-full'
              placeholder='Trách nhiệm công việc'
              {...register('responsibilities')}
            />

            <textarea
              className='textarea w-full'
              placeholder='Yêu cầu ứng viên'
              {...register('whoAreYou')}
            />
          </div>

          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={handleClose}>
              Hủy
            </button>
            <button type='submit' className='btn btn-primary'>
              {initialJob ? 'Lưu' : 'Tạo'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
