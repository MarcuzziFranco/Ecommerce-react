/*export const get = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const data = await response.json();
  return data;
};*/

export const getProducts = () => {
  const objData = fetch(`https://fakestoreapi.com/products/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return objData;
};

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
