export const fetchProductById = async productId => {
  const response = await fetch(`http://localhost:3000/products/${productId}`);
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch('http://localhost:3000/categories');
  return await response.json();
};

export const fetchProductsCategoryById = async categoryId => {
  const response = await fetch(`http://localhost:3000/category/${categoryId}`);
  return await response.json();
};

export const fetchFeaturedProducts = async () => {
  const response = await fetch('http://localhost:3000/featuredProducts');
  return await response.json();
};

export const fetchCreateUser = async userData => {
  try {
    const res = await fetch('http://localhost:3000/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchLogInRequest = async credentials => {
  try {
    const res = await fetch('http://localhost:3000/log-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetProfile = async (id, token) => {
  try {
    const response = await fetch(`http://localhost:3000/user-data/${id}`, {
      headers: {
        Authorization: 'BEARER ' + token,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchAddProductToCart = async data => {
  const { productId, token, quantity } = data;
  console.log(quantity);
  try {
    const response = await fetch(
      `http://localhost:3000/addToCart/${productId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'BEARER ' + token,
        },
        body: JSON.stringify({ quantity, productId }),
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchChangeQuantity = async data => {
  const { token, quantity, productId } = data;
  try {
    const result = await fetch(
      `http://localhost:3000/changeQuantity/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'BEARER ' + token,
        },
        body: JSON.stringify({ quantity }),
      }
    );

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchRemoveProduct = async data => {
  const { token, productId } = data;
  try {
    const result = await fetch(
      `http://localhost:3000/removeProduct/${productId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'BEARER ' + token,
        },
      }
    );

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};
