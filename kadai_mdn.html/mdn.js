const today = new Date("2024.10.12");

const [month,day,year]= [
   today.getMonth()+1,
   today.getDate(),
   today.getFullYear(),
];

console.log (year + '年' + month + '月' + day + '日');