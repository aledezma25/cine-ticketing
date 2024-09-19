
// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8xzQsmMoyrmc-Q4afRVhvcU1TIpuTFQs",
    authDomain: "cine-ticketing.firebaseapp.com",
    projectId: "cine-ticketing",
    storageBucket: "cine-ticketing.appspot.com",
    messagingSenderId: "914356596536",
    appId: "1:914356596536:web:3b6268b68c1e118c1e9bcd"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Función para agregar una venta
export const addSale = async (saleData) => {
  try {
    await addDoc(collection(db, 'sales'), saleData);
    console.log('Sale added successfully');
  } catch (error) {
    console.error('Error adding sale:', error);
  }
};
