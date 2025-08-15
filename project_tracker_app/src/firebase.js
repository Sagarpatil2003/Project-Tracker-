import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBgdqZOLOlHQgkRkJ74nIlyveaGWaFuuO4",
  authDomain: "user-auth-65e51.firebaseapp.com",
  databaseURL: "https://user-auth-65e51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "user-auth-65e51",
  storageBucket: "user-auth-65e51.firebasestorage.app",
  messagingSenderId: "348520662986",
  appId: "1:348520662986:web:1e45ab15c9ff3c2138b133",
  measurementId: "G-L3DEGV1B5K"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
