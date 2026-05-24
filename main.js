// ⬇️ لما تجهز الصفحة (يعني كل الـ HTML خلص تحميله)
document.addEventListener('DOMContentLoaded', () => {

  // منجيب محتويات السلة من التخزين المحلي، وإذا فاضية منعمل مصفوفة فاضية
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // منجيب العنصر يلي رح نعرض فيه محتويات السلة
  const cartItemsDiv = document.getElementById('cart-items');

  // منجيب زر "إفراغ السلة"
  const clearCartBtn = document.getElementById('clear-cart');

  // 🔔 دالة بتعمل إشعار (Toast) لما نضيف منتج أو نعمل إفراغ للسلة
  function showToast(message) {
    const existingToast = document.getElementById('toast'); // إذا في إشعار موجود، منشيلو
    if (existingToast) existingToast.remove();

    // منعمل عنصر جديد للإشعار
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;

    // منضيف عليه تنسيقات CSS بشكل مباشر
    Object.assign(toast.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0b6e4f',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '600',
      boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
      zIndex: '10000',
      opacity: '0',
      transition: 'opacity 0.4s ease',
      maxWidth: '90%',
      textAlign: 'center',
      pointerEvents: 'none',
      userSelect: 'none',
    });

    // منضيفه لجسم الصفحة
    document.body.appendChild(toast);

    // منشغل الأنميشن (نخليه يبين)
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
    });

    // بعد ٣ ثواني نخفيه ونشيله
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, 3000);
  }

  // 🛒 دالة لإضافة كتاب للسلة
  function addToCart(title, price) {
    cart.push({ title, price }); // منضيفه للمصفوفة
    localStorage.setItem('cart', JSON.stringify(cart)); // ومنحدث التخزين المحلي

    // منعمل حركة "اهتزاز" على أيقونة السلة
    const cartIcon = document.querySelector('a[href="checkout.html"]');
    if (cartIcon) {
      cartIcon.classList.add('shake');
      setTimeout(() => cartIcon.classList.remove('shake'), 500);
    }

    // منعرض إشعار بأنه تمت الإضافة
    showToast(`✅ أُضيف "${title}" إلى السلة! عدد الكتب: ${cart.length}`);

    // منحدث عرض السلة
    renderCart();
  }

  // 💵 دالة لحساب السعر الكلي
  function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0); // منجمع أسعار كل العناصر
  }

  // 📋 دالة لعرض السلة على الصفحة
  function renderCart() {
    if (!cartItemsDiv) return; // إذا ما لاقينا العنصر، نوقف

    cartItemsDiv.innerHTML = ''; // نفضيه بالأول

    // إذا السلة فاضية، نكتب رسالة
    if (cart.length === 0) {
      cartItemsDiv.innerHTML = '<p style="text-align: center; font-size: 18px; color: #555;">السلة فارغة</p>';
      return;
    }

    // منعرض كل منتج موجود بالسلة
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <span>${item.title} - ${item.price}$</span>
        <button class="remove-btn" data-index="${index}">×</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
    });

    // منضيف السعر الكلي
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<strong>المبلغ الإجمالي: ${calculateTotal().toFixed(2)}$</strong>`;
    cartItemsDiv.appendChild(totalDiv);

    // منضيف زر إزالة لكل كتاب
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const i = e.target.getAttribute('data-index'); // نجيب رقم العنصر
        cart.splice(i, 1); // نمسحه من المصفوفة
        localStorage.setItem('cart', JSON.stringify(cart)); // نحدث التخزين
        renderCart(); // نعيد عرض السلة
      });
    });
  }

  // 🛍️ ربط أزرار "اشتري الآن"
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.book-card'); // نجيب العنصر الأب (كرت الكتاب)
      const title = card.querySelector('h3').textContent; // نجيب عنوان الكتاب
      const priceText = card.querySelector('.price').textContent; // نجيب السعر كنص
      const price = parseFloat(priceText.match(/[\d.]+/)[0]); // نطلع السعر كرقم
      addToCart(title, price); // نضيفه للسلة
    });
  });

  // 🗑️ زر "إفراغ السلة" مع تأكيد
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      const modal = document.getElementById('confirmModal');
      const yesBtn = document.getElementById('confirmYes');
      const noBtn = document.getElementById('confirmNo');

      modal.style.display = 'flex'; // منعرض المودال

      yesBtn.onclick = function () {
        cart.length = 0; // منفضي المصفوفة
        localStorage.setItem('cart', JSON.stringify(cart)); // نحدث التخزين
        renderCart(); // نعرض السلة من جديد
        showToast('🗑️ تم إفراغ السلة!'); // إشعار
        modal.style.display = 'none'; // نخفي المودال
      };

      noBtn.onclick = function () {
        modal.style.display = 'none'; // نخفي المودال إذا لغى
      };
    });
  }

  // عند تحميل الصفحة، نعرض السلة مباشرة
  renderCart();

  // زر العودة للأعلى (موجود فقط في الصفحة الرئيسية)
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
