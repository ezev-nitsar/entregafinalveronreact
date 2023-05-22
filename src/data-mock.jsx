import data from './assets/products.json';

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    });
}

export const getProductById = (productId) => {
    productId = parseInt(productId);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.find(prod => prod.id === productId))
        }, 500);
    });
}

export const getProductsByCategory = (categoryId) => {
    categoryId = parseInt(categoryId);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.filter(prod => prod.category_id === categoryId))
        }, 500);
    });
}