import { FilterProps } from "../types";

export default function Filter({ title, items }: FilterProps) {
  return (
    <div className='border border-gray-300 collapse collapse-arrow'>
      <input type='checkbox' className='' defaultChecked />
      <div className='collapse-title font-semibold'>{title}</div>
      <div className='collapse-content '>
        {items.map((item) => (
          <div className='form-control'>
            <label className='label cursor-pointer gap-2.5'>
              <input type='checkbox' defaultChecked className='checkbox checkbox-primary' />
              <span className=''>{item}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
