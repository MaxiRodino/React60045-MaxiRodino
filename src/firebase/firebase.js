// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDoc, getDocs, getFirestore, collection, addDoc, updateDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkal0EyAPZGsc4wjgVZIQUcDxPozPf0eQ",
  authDomain: "tiendamov-9eb59.firebaseapp.com",
  projectId: "tiendamov-9eb59",
  storageBucket: "tiendamov-9eb59.appspot.com",
  messagingSenderId: "777713122079",
  appId: "1:777713122079:web:766f60586dc0913f958e2a",
  measurementId: "G-C0WN1SL029"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export async function getSingleProduct(id) {
  const documentRef = doc(db, 'items', id)

  try {
    const snapshot = await getDoc(documentRef)
    return snapshot.data()
  } catch (error) {
    console.log(error)
  }
}

export async function getAllProducts() {

  try{
    const querySnapshot = await getDocs(collection(db, 'items'))
    const productList = querySnapshot.docs.map(doc => {
    return{
      id: doc.id,
      ...doc.data()
    }
  })
  return productList
  }
  catch (error) {
    console.log(error)
  }
  
}

export async function sendOrders(order) {
  const ordersCollection = collection(db, 'orders')

  try {
    const docRef = await addDoc(ordersCollection, order)
    console.log('order generada', docRef.id)

    return docRef.id
  } catch (error) {
    console.log('error al generar la orden', error)
  }
}

export async function updateProduct(id, toUpdate) {
  const itemRef = doc(db, 'items', id)

  try {
    const responseUpdate = await updateDoc(itemRef, toUpdate)
    console.log(responseUpdate)
  } catch (error) {
    console.log("error al actualizar el producto", error)
  }
}