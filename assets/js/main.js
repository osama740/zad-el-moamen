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

  // ربط كل كتاب بصفحة التفاصيل الديناميكية
  const BOOK_SLUG_BY_TITLE = {
    'فتح المجيد شرح كتاب التوحيد': 'fath-al-majid',
    'كتاب التوحيد - محمد بن عبدالوهاب': 'kitab-al-tawhid',
    'العقيدة الواسطية': 'al-wasitiyyah',
    'شرح العقيدة الطحاوية': 'sharh-al-tahawiyyah',
    'القول السديد في شرح كتاب التوحيد': 'al-qawl-al-sadid',
    'العقيدة السفارينية': 'al-safariniah',
    'شرح لمعة الاعتقاد': 'sharh-lumat-al-itiqad',
    'الوجيز في فقه السنة والكتاب': 'al-wajiz-fiqh',
    'فقه العبادات': 'fiqh-al-ibadat',
    'الشرح الممتع على زاد المستقنع': 'al-sharh-al-mumti',
    'المغني لابن قدامة': 'al-mughni',
    'فقه السنة': 'fiqh-al-sunnah',
    'رياض الصالحين': 'riyad-al-salihin',
    'صحيح البخاري': 'sahih-al-bukhari',
    'صحيح مسلم': 'sahih-muslim',
    'سنن أبي داود': 'sunan-abi-dawud',
    'الجامع الصغير': 'al-jami-al-saghir',
    'تفسير القرطبي': 'tafsir-al-qurtubi',
    'تفسير الجلالين': 'tafsir-al-jalalayn',
    'تفسير ابن عثيمين': 'tafsir-ibn-uthaymin',
    'تفسير الطبري': 'tafsir-al-tabari',
    'تفسير النسفي': 'tafsir-al-nasafi',
    'تفسير الرازي': 'tafsir-al-razi',
    'تفسير ابن كثير': 'tafsir-ibn-kathir'
  };

  function attachDetailsLinks() {
    document.querySelectorAll('.book-card').forEach((card) => {
      const titleEl = card.querySelector('h3');
      if (!titleEl || card.querySelector('.details-btn')) return;

      const slug = BOOK_SLUG_BY_TITLE[titleEl.textContent.trim()];
      if (!slug) return;

      const detailsLink = document.createElement('a');
      detailsLink.className = 'details-btn';
      detailsLink.href = `book-details.html?book=${encodeURIComponent(slug)}`;
      detailsLink.textContent = 'تفاصيل الكتاب';

      let actions = card.querySelector('.card-actions');
      const buyBtn = card.querySelector('.buy-btn');

      if (!actions && buyBtn) {
        actions = document.createElement('div');
        actions.className = 'card-actions';
        buyBtn.insertAdjacentElement('afterend', actions);
        actions.appendChild(buyBtn);
      }

      if (actions) {
        actions.appendChild(detailsLink);
      } else {
        card.appendChild(detailsLink);
      }
    });
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

  // زر تفاصيل الكتاب لكل بطاقة
  attachDetailsLinks();

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
