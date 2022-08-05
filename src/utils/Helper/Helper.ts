export function formatRp(num: number, withPrefix = true) {
  var curr = num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return (withPrefix ? 'Rp' : '') + curr?.replace(/,/g, '.');
}
