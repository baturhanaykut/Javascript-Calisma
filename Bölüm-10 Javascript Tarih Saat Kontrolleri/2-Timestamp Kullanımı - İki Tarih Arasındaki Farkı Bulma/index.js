const startDate = new Date('07/13/1988 9:45:00');
const now = new Date();
console.log(startDate);

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);
console.log(`Doğum Tarihim Dakika Cinsinden ${mins} geçti`);
console.log(`Doğum Tarihim Saat Cinsinden ${hours} geçti`);
console.log(`Doğum Tarihim Gün Cinsinden ${days} geçti`);
console.log(`Doğum Tarihim Yıl Cinsinden ${years} geçti`);

const timestamp=1124695392204;
console.log(new Date(timestamp));
