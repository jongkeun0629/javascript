const curry = (fn) => (a) => (b) => fn(a, b);

function logger(level, msg) {
  console.log(`[${level.toUpperCase()}] ${msg}`);
}

const info = curry(logger)("info");
const error = curry(logger)("error");

info("Server Started"); // [INFO] Server Started
error("Unexpected error"); // [ERROR] Unexpected error

// fn에 logger, a에 info, b에 텍스트. logger(info, start)
