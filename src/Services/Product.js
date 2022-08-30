import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const COLLECTION_PRODUCT = "products";
const productCollection = collection(db, COLLECTION_PRODUCT);

export const FgetProducts = () => {
  const objData = getDocs(productCollection)
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  return objData;
};

export const FgetById = (id) => {
  const docRef = doc(db, COLLECTION_PRODUCT, id);
  const objData = getDoc(docRef).then((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return objData;
};

export const FgetProductsByCategory = (category) => {
  const objData = FgetProducts().then((listProduct) => {
    return listProduct.filter((item) => item.category === category);
  });

  return objData;
};
