const url = 'http://localhost:3000/api/v1/products'
const fileFormDOM = document.querySelector('.productForm')
const titleInputDOM = document.querySelector('#title')
const descriptionInputDOM = document.querySelector('#description')
const priceInputDOM = document.querySelector('#price')
const stockInputDOM = document.querySelector('#stock')
const imageInputDOM = document.querySelector('#image')

let imageValue;

fileFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const titleValue = titleInputDOM.value;
  const descriptionValue = descriptionInputDOM.value;
  const stockValue = stockInputDOM.value;
  const priceValue = priceInputDOM.value;

  try {
    const product = {
      title: titleValue,
      description: descriptionValue,
      stock: stockValue,
      price: priceValue,
      image: imageValue
    };
    
    await axios.post(url, product);
    alert("Product Uploaded");

    
  } catch (error) {
    console.log(error);
  }
});

imageInputDOM.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append('image', imageFile)
  try {
    const {
      data: {
        image: {
          src
        }
      }
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    imageValue = src
  } catch (error) {
    imageValue = null
    console.log(error);
  }
})


// window.location.href = "product.html";
  