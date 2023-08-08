import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/cake/icecream/icecreamSlice";
import userReducer from "../features/cake/user/userSlice";
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export default store;
