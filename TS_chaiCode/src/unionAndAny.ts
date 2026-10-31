//^ Union and Any:-

// let subs: number | string = 100; // ✅
// subs = '1M';                     // ✅


// let apiStatusResponse: 'pending' | 'success' | 'failed';
// apiStatusResponse = "success";   // ✅
// apiStatusResponse = "failed";    // ✅
// apiStatusResponse = "done";      // ❎


// let trainSeat: 'aile' | 'window' | 'middle' = 'aile';
// trainSeat = 'aile';

// let orders = ['20', '12', '34'];

// let currentOrder: string | undefined;

// for (let order of orders) {
//   if (order === '12') {
//     currentOrder = order;
//     break;
//   }
// }
// console.log(currentOrder);

//* Any use krna bad practice hai to yaha currentOrder me y to string data ayega or agar data pass nahi hua to undefined rahega isiliye union use hua yaha.
