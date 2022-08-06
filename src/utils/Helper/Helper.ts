export function formatRp(num: number, withPrefix = true) {
  var curr = num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return (withPrefix ? 'Rp' : '') + curr?.replace(/,/g, '.');
}

export const getMonthName = (index: number) => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];
  index = index >= 0 && index < 12 ? index : 0;
  return months[index];
};

export const formatDate = (dateString: string) => {
  let result: string = '';
  if (dateString) {
    const split = dateString.split(' ');
    const date = new Date(split[0]);
    result = date.getDate() + ' ' + getMonthName(date.getMonth()) + ' ' + date.getFullYear();
  }
  return result;
};
