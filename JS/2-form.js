// Об'єкт для збереження стану форми
const formData = {
    email: "",
    message: "",
  };
  
  // Ключ для локального сховища
  const STORAGE_KEY = "feedback-form-state";
  
  const form = document.querySelector(".feedback-form");
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  // Функція для запису даних у локальне сховище
  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };
  
  // Функція для відновлення даних із локального сховища
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
  
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  };
 
  form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveToLocalStorage();
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Перевірка заповненості полів
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
  
    console.log(formData);
  
    // Очищення сховища, об'єкта та полів форми
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
  });
  
  // Виклик функції для відновлення стану форми при завантаженні сторінки
  loadFromLocalStorage();
  