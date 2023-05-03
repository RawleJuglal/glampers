// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, getDocs, getDoc, query, where } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmtej2YyC4qjGnHleDU9EDgkSCaXmXCpg",
  authDomain: "glamp-4140a.firebaseapp.com",
  projectId: "glamp-4140a",
  storageBucket: "glamp-4140a.appspot.com",
  messagingSenderId: "101370735072",
  appId: "1:101370735072:web:f9e189e3999a4863746385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const tentsCollectionRef = collection(db, "tents")
const userCollectionRef = collection(db, 'user')

export async function getTents(){
    const querySnapshot = await getDocs(tentsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))

    return dataArr
}

export async function getTent(id){
  const docRef = doc(db, 'tents', id)
  const tentSnapShot = await getDoc(docRef)
  return {
    ...tentSnapShot.data(),
    id:tentSnapShot.id
  }
}

export async function loginUser(creds){
  const querySnapshot = await getDocs(userCollectionRef)
  const dataArr = querySnapshot.docs.map(doc =>({
    ...doc.data(),
    id:doc.id
  }))

  const matched = dataArr.find(item => item.email === creds.email && item.password === creds.password)
  if(matched === undefined){
    throw {
        message: 'email or password did not match',
    }
  }
  return matched
}