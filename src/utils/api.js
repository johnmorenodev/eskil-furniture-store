export const fetchProductById = async productId => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + `products/${productId}`
  );
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + 'categories'
  );
  return await response.json();
};

export const fetchProductsCategoryById = async categoryId => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}category/${categoryId}`
  );
  return await response.json();
};

export const fetchFeaturedProducts = async () => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + 'featuredProducts'
  );
  return await response.json();
};

export const fetchCreateUser = async userData => {
  try {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'sign-up', {
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
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'log-in', {
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
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}user-data/${id}`,
      {
        headers: {
          Authorization: 'BEARER ' + token,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchAddProductToCart = async data => {
  const { productId, token, quantity } = data;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}addToCart/${productId}`,
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
      `${process.env.REACT_APP_BACKEND_URL}changeQuantity/${productId}`,
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
      `${process.env.REACT_APP_BACKEND_URL}removeProduct/${productId}`,
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

export const checkoutHandler = async token => {
  try {
    const result = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}create-checkout-session/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'BEARER ' + token,
        },
      }
    );
    const url = await result.json();
    window.location.replace(url.url);
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrderDetails = async ({ orderId, token }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}order-details/${orderId}`,
      {
        headers: {
          Authorization: 'BEARER ' + token,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
