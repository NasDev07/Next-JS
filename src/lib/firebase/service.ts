import { getDocs, getFirestore, collection } from "firebase/firestore";
import app from "./init";

const firebase = getFirestore(app);

export async function resrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firebase, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
