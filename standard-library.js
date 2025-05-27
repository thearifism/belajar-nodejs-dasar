import os from "os";

console.info(os.platform());
console.table(os.cpus());

// error karena bukan js modules file
// tidak error ketika di run dengan node v22