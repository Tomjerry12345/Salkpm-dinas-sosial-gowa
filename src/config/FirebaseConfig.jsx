import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { logged } from "../values/Utilitas";

const firebaseConfig = {
  apiKey: "AIzaSyCuitc5Ajzgl1k9IrIbYPrnzcRNmyReHlY",
  authDomain: "salkpm.firebaseapp.com",
  projectId: "salkpm",
  storageBucket: "salkpm.appspot.com",
  messagingSenderId: "614826363495",
  appId: "1:614826363495:web:fa8e757376c62e65e0e2c2",
  measurementId: "G-9XKKNL2YTE",
};
const FirebaseConfig = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const addData = async (path, data) => {
    try {
      const docRef = await addDoc(collection(db, path), data);
      const id = docRef.id;
      const res = await updateDataSpecifict(path, id, "id", id);
      if (res) {
        return true;
      } else {
        logged(`error add ${res} => terjadi kesalahn`);
        return false;
      }
    } catch (e) {
      logged(`error add => ${e}`);
      return false;
    }
  };

  const getData = async (path) => {
    const col = collection(db, path);
    const snapshot = await getDocs(col);

    // snapshot.forEach((doc) => {
    //   logged(`${doc.id} => ${doc.data()}`);
    // });

    return snapshot;
  };

  const updateDataSpecifict = async (path, child, key, value) => {
    const ref = doc(db, path, child);
    try {
      await updateDoc(ref, {
        [key]: value,
      });
      return true;
    } catch (e) {
      logged(`error update => ${e}`);
      return false;
    }
  };

  return {
    getData,
    addData,
    updateDataSpecifict,
  };
};

export default FirebaseConfig;
