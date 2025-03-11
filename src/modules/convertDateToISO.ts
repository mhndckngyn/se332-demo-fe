export default function convertDateToISO (dateStr: string | undefined) {
  if (!dateStr) return '';
  return dateStr.split('T')[0];
};