import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuitc5Ajzgl1k9IrIbYPrnzcRNmyReHlY",
  authDomain: "salkpm.firebaseapp.com",
  projectId: "salkpm",
  storageBucket: "salkpm.appspot.com",
  messagingSenderId: "614826363495",
  appId: "1:614826363495:web:fa8e757376c62e65e0e2c2",
  measurementId: "G-9XKKNL2YTE",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA3pAkri3p6xe0OwTzbhhyVrLLdOVstSLA",
//   authDomain: "salkpm-599eb.firebaseapp.com",
//   projectId: "salkpm-599eb",
//   storageBucket: "salkpm-599eb.appspot.com",
//   messagingSenderId: "822511874100",
//   appId: "1:822511874100:web:c6eba82940f6b0e0875a61",
//   measurementId: "G-8KRK0SR5NW",
// };

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
        return false;
      }
    } catch (e) {
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
      return false;
    }
  };

  const searching = async (path, key, value) => {
    const col = collection(db, path);
    const q = query(col, where(key, "==", value));
    const querySnapshot = await getDocs(q);

    return querySnapshot;
  };

  const multipleSearching = async (path, key1, key2, value1, value2) => {
    const col = collection(db, path);
    const q = query(col, where(key1, "==", value1), where(key2, "==", value2));

    const querySnapshot = await getDocs(q);

    return querySnapshot;
  };

  const deleteAllData = async (path) => {
    const allData = await getData(path);
    const promise = allData.docs.forEach((obj, i) => {
      setTimeout(async () => {
        // await deleteDoc(doc(db, path, obj.id));

        if (i >= allData.docs.length - 1) {
          const test = await true;
          return test;
        }
      }, 1000);
    });

    // const test = await promise;
    // logged(`test 1 => ${test}`);

    // if (allData.empty) {
    //   logged(`kosong`);
    // } else {
    //   logged(`terisi`);
    // }
    // allData.docs.forEach(async (obj) =>
    //   logged(`id => ${JSON.stringify(obj.id)}`)
    // );
  };

  return {
    getData,
    addData,
    updateDataSpecifict,
    searching,
    multipleSearching,
    deleteAllData,
  };
};

export default FirebaseConfig;
