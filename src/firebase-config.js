import { initializeApp } from "firebase/app";
import { getFirestore } from  "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASwVgXdi4sKGYFblbJLZVYtUk9vxWzjPc",
    authDomain: "fir-quiz-50282.firebaseapp.com",
    projectId: "fir-quiz-50282",
    storageBucket: "fir-quiz-50282.appspot.com",
    messagingSenderId: "687200458278",
    appId: "1:687200458278:web:4c5dacfa350db02226b8e7",
    measurementId: "G-BHGSX9830H",
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
