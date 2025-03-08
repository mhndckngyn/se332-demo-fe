export default function ApplyJobModal() {
  const handleClose = () => {
    const modal = document.getElementById('job-apply-form');
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  }

  return (
    <dialog id='job-apply-form' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>
          Ứng tuyển
        </h3>
        <form method='dialog'>
          <div className='mt-3 flex flex-col gap-2'>
            <input
              type='text'
              className='input w-full'
              disabled
              value={'Tên công ty'}
            />
          </div>
          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={handleClose}>
              Hủy
            </button>
            <button className='btn btn-primary'>
              Ứng tuyển
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
