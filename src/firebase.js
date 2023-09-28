import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxqUhRpuyr_9r_2ioah0d9n_o48pCYOOA",
  authDomain: "website-design-firebase-db.firebaseapp.com",
  databaseURL: "https://website-design-firebase-db-default-rtdb.firebaseio.com",
  projectId: "website-design-firebase-db",
  storageBucket: "website-design-firebase-db.appspot.com",
  messagingSenderId: "746621432029",
  appId: "1:746621432029:web:e2452d67f366a8cc06eb34"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };