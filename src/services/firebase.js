import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAfQmG5y9J0BnHs2PBYLlCjZKjF3-ov26I",
    authDomain: "gb-react-17261.firebaseapp.com",
    projectId: "gb-react-17261",
    storageBucket: "gb-react-17261.appspot.com",
    messagingSenderId: "706931008230",
    appId: "1:706931008230:web:306534ca49d4d8b3181127",
    measurementId: "G-H1FB04VE02"
};  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
// export const chatsRef = ref(db, "chats");
// export const msgsRef = ref(db, "messages");
// export const getChatRefById = (id) => ref(db, `chats/${id}`);
// export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
// export const getMsgsListRefById = (chatId) =>
//   ref(db, `messages/${chatId}/messageList`);