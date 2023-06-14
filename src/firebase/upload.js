import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import { collection, addDoc} from 'firebase/firestore'
import { db } from  './config.js'

MOCK_DATA.forEach((el) => delete el.id)

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((el) => {
    addDoc(productosRef, el)
})