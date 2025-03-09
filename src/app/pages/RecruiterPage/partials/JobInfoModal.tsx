import { useEffect, useState } from 'react';
import { JobInfoProps } from '@/app/types/props';

export default function JobInfoModal({ initialJob }: JobInfoProps) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    company: '',
    minSalary: null as number | null,
    maxSalary: null as number | null,
  });

  useEffect(() => {
    if (initialJob) {
      setFormData({
        name: initialJob.name,
        location: initialJob.location,
        company: initialJob.company,
        minSalary: initialJob.minSalary,
        maxSalary: initialJob.maxSalary,
      });
    } else {
      setFormData({
        name: '',
        location: '',
        company: '',
        minSalary: null as number | null,
        maxSalary: null as number | null,
      });
    }
  }, [initialJob]);

  const handleClose = () => {
    const form = document.getElementById('job-info-form');
    if (form instanceof HTMLDialogElement) {
      form.close();
    }
  };

  return (
    <dialog id='job-info-form' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>
          {initialJob ? 'Thông tin việc làm' : 'Đăng việc làm mới'}
        </h3>
        <form method='dialog'>
          <div className='mt-3 flex flex-col gap-2'>
            <input
              type='text'
              className='input w-full'
              disabled
              value={'Tên công ty'}
            />
            <label className='input w-full'>
              <span className='label'>Việc làm</span>
              <input
                type='text'
                placeholder='Nhập tên việc làm'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </label>
            <label className='input w-full'>
              <span className='label'>Địa chỉ</span>
              <input
                type='text'
                placeholder='Nhập địa chỉ làm việc'
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </label>
            <div className='flex gap-2'>
              <label className='input'>
                <span className='label'>Min</span>
                <input
                  type='number'
                  placeholder='Lương tối thiểu'
                  value={formData.minSalary ? formData.minSalary : ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      minSalary: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                />
              </label>
              <label className='input'>
                <span className='label'>Max</span>
                <input
                  type='number'
                  placeholder='Lương tối đa'
                  value={formData.maxSalary ? formData.maxSalary : ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      maxSalary: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                />
              </label>
            </div>
          </div>
          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={handleClose}>
              Hủy
            </button>
            <button className='btn btn-primary'>
              {initialJob ? 'Lưu' : 'Tạo'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
