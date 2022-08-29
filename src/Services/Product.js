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

/*export const getProducts = () => {
  const objData = fetch(`https://fakestoreapi.com/products/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return objData;
};*/

export const FgetById = (id) => {
  const docRef = doc(db, COLLECTION_PRODUCT, id);
  const objData = getDoc(docRef).then((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return objData;
};

FgetById("5aZNVrgdkvWIhkNs5QDq");

export const getById = (id) => {
  const objData = fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return objData;
};

export const getProducByCategory = (category) => {
  const objData = fetch(
    `https://fakestoreapi.com/products/category/${category}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });

  return objData;
};
