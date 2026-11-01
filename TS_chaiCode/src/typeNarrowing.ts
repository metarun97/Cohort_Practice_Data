//^ Type Narrowing in TS:-

// function getChai(kind: string | number) {
// if (typeof kind === 'string') {
// return `Making ${kind} chai`;
// }
// return `Chai order:${kind}`;
// }

// function serveChai(msg?: string) {
//   if (msg) {
//     return `Serving ${msg} chai`;
//   }
//   return `Serving normal chai`;
// }

//* Isme hume guarentee mil jati ki ha msg me string hi value ayegi or agar nahi ai use krenge hi nahi hum.

// function orderChai(size: 'small' | 'medium' | 'large' | number) {
//   if (size === 'small') {
//     return `small cutting chai`;
//   }
//   if (size === 'medium' || size === 'large') {
//     return `order extra chai`;
//   }
//   return `chai order #${size}`;
// }

//* Exhaustive checks lagaye ja rahe hain.

// class kulhadChai {
//   serve() {
//     return `Kulhad Chai`;
//   }
// }
// class cuttingChai {
//   serve() {
//     return `Cutting Chai`;
//   }
// }

// function serve(chai: kulhadChai | cuttingChai) {
//   if (chai instanceof kulhadChai) {
//     return chai.serve();
//   }
// }

//* Yaha chai.serve se serve method kulhadChai wali class ka hi call ho raha hai.
//* These are our default types instances but typescript hume apne khudke types banane ki superpower deta hai.

type ChaiOrder = {
  type: string;
  suger: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.type === 'string' &&
    typeof obj.suger === 'number'
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `chai type ${item.type} and suger is ${item.suger} spoons.`;
  }
  return `Serve custom chai ${item}`;
}

