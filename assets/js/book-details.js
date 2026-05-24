const BOOK_DATA = {
  'fath-al-majid': {
    title: 'فتح المجيد شرح كتاب التوحيد',
    author: 'عبد الرحمن بن حسن آل الشيخ',
    category: 'العقيدة',
    era: 'القرن 13 هـ',
    image: 'assets/images/فتح المجيد لشرح كتاب التوحيد - مجلد.png',
    price: 13,
    description: 'شرح موسع لكتاب التوحيد يركز على تقرير مسائل التوحيد وتحرير أدلتها مع شرح الأبواب الحديثية.',
    highlights: ['بيان أنواع التوحيد', 'شرح نصوص أبواب كتاب التوحيد', 'تنبيهات على مسائل الشرك'],
    source: 'https://ar.wikipedia.org/wiki/كتاب_التوحيد'
  },
  'kitab-al-tawhid': {
    title: 'كتاب التوحيد - محمد بن عبدالوهاب',
    author: 'محمد بن عبد الوهاب',
    category: 'العقيدة',
    era: 'القرن 12 هـ',
    image: 'assets/images/محمد.jpg',
    price: 9,
    description: 'متن عقدي مشهور في تقرير حق الله في العبادة وجمع الأدلة من القرآن والسنة على أبواب التوحيد.',
    highlights: ['أبواب عملية في التوحيد', 'أدلة نصية مختصرة', 'عناية بواقع العبادة والدعاء'],
    source: 'https://ar.wikipedia.org/wiki/كتاب_التوحيد'
  },
  'al-wasitiyyah': {
    title: 'العقيدة الواسطية',
    author: 'ابن تيمية',
    category: 'العقيدة',
    era: 'سنة 698 هـ تقريبا',
    image: 'assets/images/الواسطية.jpg',
    price: 8,
    description: 'رسالة موجزة جمعت أصول معتقد أهل السنة في الأسماء والصفات والإيمان واليوم الآخر وغيرها.',
    highlights: ['أصول الاعتقاد الكلية', 'منهج أهل السنة في الصفات', 'مادة تعليمية للمبتدئ والمتوسط'],
    source: 'https://ar.wikipedia.org/wiki/العقيدة_الواسطية'
  },
  'sharh-al-tahawiyyah': {
    title: 'شرح العقيدة الطحاوية',
    author: 'المتن لأبي جعفر الطحاوي',
    category: 'العقيدة',
    era: 'القرن 4 هـ (المتن)',
    image: 'assets/images/طحاوية.webp',
    price: 11,
    description: 'شرح لمتن الطحاوية الذي يعد من أشهر متون الاعتقاد، ويتناول مسائل أصول الدين بأسلوب تعليمي.',
    highlights: ['عرض منهجي لمسائل الاعتقاد', 'مكانة واسعة بين طلاب العلم', 'كثرة الشروح والاختصارات'],
    source: 'https://ar.wikipedia.org/wiki/العقيدة_الطحاوية_(كتاب)'
  },
  'al-qawl-al-sadid': {
    title: 'القول السديد في شرح كتاب التوحيد',
    author: 'عبد الرحمن السعدي',
    category: 'العقيدة',
    era: 'القرن 14 هـ',
    image: 'assets/images/القول.webp',
    price: 10,
    description: 'شرح مختصر سهل العبارة لكتاب التوحيد، يمتاز بوضوح التقسيم وقوة الربط بين النصوص والمعاني.',
    highlights: ['أسلوب واضح للمبتدئين', 'تحرير مختصر للمسائل', 'ربط تربوي بواقع المسلم'],
    source: 'https://ar.wikipedia.org/wiki/كتاب_التوحيد'
  },
  'al-safariniah': {
    title: 'العقيدة السفارينية',
    author: 'محمد بن أحمد السفاريني',
    category: 'العقيدة',
    era: 'القرن 12 هـ',
    image: 'assets/images/السفارينية.jpg',
    price: 10,
    description: 'منظومة عقدية تعليمية تجمع أبوابا من أصول الاعتقاد، ولها شروح عدة في المعاهد الشرعية.',
    highlights: ['صياغة منظومة تسهل الحفظ', 'جمع قضايا عقدية متعددة', 'مادة مناسبة للدراسة المتدرجة'],
    source: 'https://ar.wikipedia.org/wiki/أهل_السنة_والجماعة'
  },
  'sharh-lumat-al-itiqad': {
    title: 'شرح لمعة الاعتقاد',
    author: 'المتن لابن قدامة',
    category: 'العقيدة',
    era: 'القرن 7 هـ (المتن)',
    image: 'assets/images/لمعة.gif',
    price: 8,
    description: 'متن موجز في مسائل الاعتقاد السني اعتنى به الشراح، ويتميز بالترتيب والعبارة المختصرة.',
    highlights: ['متن مختصر', 'محاور الاعتقاد الأساسية', 'سهل للمراجعة والتعليم'],
    source: 'https://ar.wikipedia.org/wiki/ابن_قدامة'
  },
  'al-wajiz-fiqh': {
    title: 'الوجيز في فقه السنة والكتاب',
    author: 'عبد العظيم بدوي',
    category: 'الفقه',
    era: 'معاصر',
    image: 'assets/images/الوجيز2.jpg',
    price: 14,
    description: 'مرجع فقهي معاصر يعرض أبواب العبادات والمعاملات مع عناية بالاستدلال والترتيب.',
    highlights: ['عرض فقهي منظم', 'لغة مباشرة', 'مفيد في الدراسة الفردية'],
    source: 'https://www.goodreads.com/book/show/12679546'
  },
  'fiqh-al-ibadat': {
    title: 'فقه العبادات',
    author: 'دراسات فقهية معاصرة',
    category: 'الفقه',
    era: 'معاصر',
    image: 'assets/images/فقه العبادات.jpg',
    price: 11,
    description: 'كتاب تعليمي يركز على فقه الطهارة والصلاة والزكاة والصيام والحج مع تبسيط المسائل.',
    highlights: ['مناسب للمبتدئ', 'تقسيم واضح للعبادات', 'لغة تعليمية'],
    source: 'https://ar.wikipedia.org/wiki/فقه_إسلامي'
  },
  'al-sharh-al-mumti': {
    title: 'الشرح الممتع على زاد المستقنع',
    author: 'محمد بن صالح العثيمين',
    category: 'الفقه',
    era: 'معاصر',
    image: 'assets/images/الشرح.webp',
    price: 18,
    description: 'شرح فقهي مطول على متن زاد المستقنع، يجمع بين التحقيق الفقهي والتطبيق العملي.',
    highlights: ['شرح موسوعي', 'تحليل الأدلة والخلاف', 'مرجع متقدم لطلاب الفقه'],
    source: 'https://ar.wikipedia.org/wiki/محمد_بن_صالح_العثيمين'
  },
  'al-mughni': {
    title: 'المغني لابن قدامة',
    author: 'ابن قدامة المقدسي',
    category: 'الفقه',
    era: 'القرن 7 هـ',
    image: 'assets/images/المغني.jpg',
    price: 18,
    description: 'من أكبر كتب الفقه المقارن، ويعد مرجعا رئيسيا في المذهب الحنبلي مع عرض واسع للخلاف الفقهي.',
    highlights: ['فقه مقارن', 'تحرير أدلة الأقوال', 'مرجع أكاديمي متين'],
    source: 'https://ar.wikipedia.org/wiki/المغني_(كتاب)'
  },
  'fiqh-al-sunnah': {
    title: 'فقه السنة',
    author: 'سيد سابق',
    category: 'الفقه',
    era: 'القرن 20 م',
    image: 'assets/images/فقه السنة.jpg',
    price: 14,
    description: 'كتاب فقهي معاصر مشهور يجمع مسائل الأحكام العملية بأسلوب واضح مع أدلتها.',
    highlights: ['تبويب سهل', 'تركيز على الدليل', 'انتشار واسع بين القراء'],
    source: 'https://ar.wikipedia.org/wiki/فقه_السنة'
  },
  'riyad-al-salihin': {
    title: 'رياض الصالحين',
    author: 'الإمام النووي',
    category: 'الحديث',
    era: 'القرن 7 هـ',
    image: 'assets/images/رياض.jpg',
    price: 15,
    description: 'مختارات حديثية في تهذيب النفس والسلوك والآداب، رتبها النووي على أبواب تربوية.',
    highlights: ['1900+ حديث تقريبا', 'ترتيب موضوعي للأبواب', 'تركيز على الأخلاق والعبادة'],
    source: 'https://ar.wikipedia.org/wiki/رياض_الصالحين'
  },
  'sahih-al-bukhari': {
    title: 'صحيح البخاري',
    author: 'الإمام محمد بن إسماعيل البخاري',
    category: 'الحديث',
    era: 'القرن 3 هـ',
    image: 'assets/images/صحيح البخاري.jpg',
    price: 25,
    description: 'الجامع الصحيح من أشهر كتب الحديث، رتبه الإمام البخاري وفق منهج دقيق في الانتقاء والتبويب.',
    highlights: ['مكانة علمية رفيعة', 'تبويب فقهي حديثي', 'عناية كبيرة بالشروح'],
    source: 'https://ar.wikipedia.org/wiki/صحيح_البخاري'
  },
  'sahih-muslim': {
    title: 'صحيح مسلم',
    author: 'الإمام مسلم بن الحجاج',
    category: 'الحديث',
    era: 'القرن 3 هـ',
    image: 'assets/images/صحيح مسلم.jpg',
    price: 23,
    description: 'كتاب حديثي أصيل من كتب الصحيح، تميز بجودة الترتيب وجمع طرق الحديث في الموضع الواحد.',
    highlights: ['دقة في ترتيب الروايات', 'شرح واسع عبر العصور', 'مرجع أساسي في السنة'],
    source: 'https://ar.wikipedia.org/wiki/صحيح_مسلم'
  },
  'sunan-abi-dawud': {
    title: 'سنن أبي داود',
    author: 'أبو داود السجستاني',
    category: 'الحديث',
    era: 'القرن 3 هـ',
    image: 'assets/images/سنن ابي داوود.webp',
    price: 18,
    description: 'من كتب السنن الكبرى، جمع أحاديث الأحكام الفقهية مرتبة على أبواب الفقه.',
    highlights: ['تركيز على أحاديث الأحكام', 'ترتيب فقهي للأبواب', 'مرجع مهم للفقه والحديث'],
    source: 'https://ar.wikipedia.org/wiki/سنن_أبي_داود'
  },
  'al-jami-al-saghir': {
    title: 'الجامع الصغير',
    author: 'جلال الدين السيوطي',
    category: 'الحديث',
    era: 'القرن 10 هـ',
    image: 'assets/images/الجامع.jpg',
    price: 20,
    description: 'جامع حديثي مختصر رتب مادته ليسهل الوصول إلى النصوص في موضوعات متنوعة.',
    highlights: ['مختصر موسوعي', 'ترتيب يفيد الباحث', 'انتشار في المكتبات التراثية'],
    source: 'https://ar.wikipedia.org/wiki/الجامع_الصغير_(السيوطي)'
  },
  'tafsir-al-qurtubi': {
    title: 'تفسير القرطبي',
    author: 'القرطبي',
    category: 'التفسير',
    era: 'القرن 7 هـ',
    image: 'assets/images/تفسير القرطبي.jpeg',
    price: 15,
    description: 'تفسير جامع اهتم بالمعاني واللغة وأحكام القرآن، ويعد من أهم التفاسير الفقهية.',
    highlights: ['عناية بآيات الأحكام', 'تحرير لغوي وإعرابي', 'نقل أقوال السلف مع مناقشة'],
    source: 'https://ar.wikipedia.org/wiki/تفسير_القرطبي'
  },
  'tafsir-al-jalalayn': {
    title: 'تفسير الجلالين',
    author: 'جلال الدين المحلي وجلال الدين السيوطي',
    category: 'التفسير',
    era: 'القرن 9 هـ',
    image: 'assets/images/الجلالين.webp',
    price: 12,
    description: 'تفسير مختصر للقرآن يمتاز بالإيجاز والوضوح، ولذلك انتشر في التعليم والمدارسة.',
    highlights: ['اختصار شديد', 'لغة واضحة', 'من أكثر التفاسير تداولا'],
    source: 'https://ar.wikipedia.org/wiki/تفسير_الجلالين'
  },
  'tafsir-ibn-uthaymin': {
    title: 'تفسير ابن عثيمين',
    author: 'محمد بن صالح العثيمين',
    category: 'التفسير',
    era: 'معاصر',
    image: 'assets/images/ابن.jpg',
    price: 18,
    description: 'دروس تفسيرية معاصرة تعتني ببيان المعنى الإجمالي والفوائد العقدية والفقهية والتربوية.',
    highlights: ['أسلوب تدريسي واضح', 'فوائد عملية', 'تحرير مختصر للمسائل'],
    source: 'https://ar.wikipedia.org/wiki/محمد_بن_صالح_العثيمين'
  },
  'tafsir-al-tabari': {
    title: 'تفسير الطبري',
    author: 'محمد بن جرير الطبري',
    category: 'التفسير',
    era: 'القرن 3 هـ',
    image: 'assets/images/الطبري.jpg',
    price: 20,
    description: 'جامع البيان من أمهات كتب التفسير بالمأثور، وهو مرجع كبير في الرواية والدراية.',
    highlights: ['تفسير بالأثر', 'تحليل لغوي وقراءات', 'أصل لكثير من التفاسير اللاحقة'],
    source: 'https://ar.wikipedia.org/wiki/تفسير_الطبري'
  },
  'tafsir-al-nasafi': {
    title: 'تفسير النسفي',
    author: 'عبد الله النسفي',
    category: 'التفسير',
    era: 'القرن 7 هـ',
    image: 'assets/images/النفسي.jpg',
    price: 14,
    description: 'مدارك التنزيل تفسير متوسط يجمع بين الإيجاز وجودة العبارة مع عناية لغوية وعقدية.',
    highlights: ['تفسير متوسط الحجم', 'وضوح في عرض المعنى', 'مادة مناسبة للدراسة'],
    source: 'https://ar.wikipedia.org/wiki/مدارك_التنزيل_وحقائق_التأويل'
  },
  'tafsir-al-razi': {
    title: 'تفسير الرازي',
    author: 'فخر الدين الرازي',
    category: 'التفسير',
    era: 'القرن 6 هـ',
    image: 'assets/images/الرازي.jpg',
    price: 22,
    description: 'مفاتيح الغيب تفسير موسوعي واسع يجمع التفسير مع مباحث عقلية ولغوية وأصولية.',
    highlights: ['موسوعي وعميق', 'اهتمام بالاستدلال العقلي', 'تحليلات لغوية وبلاغية'],
    source: 'https://ar.wikipedia.org/wiki/مفاتيح_الغيب'
  },
  'tafsir-ibn-kathir': {
    title: 'تفسير ابن كثير',
    author: 'ابن كثير الدمشقي',
    category: 'التفسير',
    era: 'القرن 8 هـ',
    image: 'assets/images/كثير.jpeg',
    price: 12,
    description: 'من أشهر التفاسير بالمأثور، يمتاز بجمع الروايات وبيان المعاني مع نقد الأسانيد.',
    highlights: ['اعتماد واسع على الأثر', 'ترتيب واضح للآيات', 'مناسب للمطالعة المنتظمة'],
    source: 'https://ar.wikipedia.org/wiki/تفسير_ابن_كثير'
  }
};

const CATEGORY_LINKS = {
  'العقيدة': 'aqeedah.html',
  'الفقه': 'fiqh.html',
  'الحديث': 'hadith.html',
  'التفسير': 'tafsir.html'
};

function getBookSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('book');
}

function renderBookDetails() {
  const slug = getBookSlug();
  const book = BOOK_DATA[slug];

  if (!book) {
    document.getElementById('bookTitle').textContent = 'الكتاب غير موجود';
    document.getElementById('bookSubtitle').textContent = 'لم يتم العثور على بيانات لهذا العنوان.';
    document.querySelector('.details-grid').style.display = 'none';
    return;
  }

  document.title = `${book.title} - زاد المؤمن`;
  document.getElementById('bookTitle').textContent = book.title;
  document.getElementById('bookSubtitle').textContent = `بطاقة تعريفية مختصرة عن ${book.title}`;

  const imageEl = document.getElementById('bookImage');
  imageEl.src = book.image;
  imageEl.alt = book.title;

  document.getElementById('bookAuthor').textContent = book.author;
  document.getElementById('bookCategory').textContent = book.category;
  document.getElementById('bookEra').textContent = book.era;
  document.getElementById('bookDescription').textContent = book.description;
  document.getElementById('bookPrice').textContent = `السعر في المتجر: ${book.price}$ دولار`;

  const highlightsEl = document.getElementById('bookHighlights');
  highlightsEl.innerHTML = '';
  book.highlights.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    highlightsEl.appendChild(li);
  });

  const sourceEl = document.getElementById('bookSource');
  sourceEl.href = book.source;

  const categoryLink = document.getElementById('categoryLink');
  categoryLink.href = CATEGORY_LINKS[book.category] || 'index.html';
  categoryLink.textContent = `العودة إلى قسم ${book.category}`;

  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ title: book.title, price: book.price });
    localStorage.setItem('cart', JSON.stringify(cart));
    addToCartBtn.textContent = 'تمت الإضافة إلى السلة';
    setTimeout(() => {
      addToCartBtn.textContent = 'أضف إلى السلة';
    }, 1800);
  });
}

document.addEventListener('DOMContentLoaded', renderBookDetails);
