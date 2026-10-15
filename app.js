
/* ═══ داده‌ها ═══ */
const DOMAINS = [
  {id:'infra', name:'زیرساخت شبکه و ارتباطات',      color:'#2FD9C4', sub:'بستر فیزیکی و منطقی ارتباط؛ از کابل تا پایداری اینترنت و ارتباط شعب.'},
  {id:'dc',    name:'مرکز داده، سرور و ابر',        color:'#4EA8FF', sub:'قلب پردازش و ذخیره‌سازی سازمان، روی سخت‌افزار خودتان یا روی ابر.'},
  {id:'sec',   name:'امنیت اطلاعات و تداوم کسب‌وکار', color:'#E8455F', sub:'محافظت از داده و سرویس، و اطمینان از بازگشت سریع پس از هر رخداد.'},
  {id:'soft',  name:'نرم‌افزار، وب و اپلیکیشن',      color:'#7B5CFF', sub:'سامانه‌هایی که با فرآیند واقعی مجموعه‌ی شما ساخته می‌شوند، نه قالب آماده.'},
  {id:'ai',    name:'هوش مصنوعی و اتوماسیون',        color:'#FF6FB5', sub:'کارهای تکراری را به ماشین بسپارید و تصمیم را با داده بگیرید.'},
  {id:'fin',   name:'ارز دیجیتال و پرداخت‌های ارزی',  color:'#F2C14E', sub:'دریافت، تسویه و مدیریت پرداخت‌های ارزی و رمزارزی با کنترل امنیتی کامل.'},
  {id:'iot',   name:'هوشمندسازی و اینترنت اشیا',     color:'#5FE39A', sub:'ساختمان، تجهیزات و مصرف انرژی را ببینید، بسنجید و کنترل کنید.'},
  {id:'biz',   name:'تأمین، پشتیبانی و مشاوره',      color:'#FF9F5A', sub:'لایه‌ای که همه‌ی موارد بالا را پایدار نگه می‌دارد و مسیر آینده را می‌چیند.'}
];


const ICONS = {
  cable:'<path d="M4 20l6-6M20 4l-6 6"/><rect x="9" y="9" width="6" height="6" rx="1" transform="rotate(45 12 12)"/><path d="M3 21v-3M21 3v3"/>',
  switch:'<rect x="2" y="9" width="20" height="7" rx="2"/><path d="M6 12.5h.01M9 12.5h.01M12 12.5h.01"/><path d="M17 4v5M20 4v5"/>',
  wifi:'<path d="M2.5 9a15 15 0 0119 0"/><path d="M6 12.5a10 10 0 0112 0"/><path d="M9.5 16a5 5 0 015 0"/><circle cx="12" cy="19.5" r="1"/>',
  wan:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  branch:'<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="19" r="2.5"/><path d="M7 7l4 10M17 7l-4 10M7.5 6h9"/>',
  phone:'<path d="M4 5c0 8 7 15 15 15l2-3-4-2-2 2a14 14 0 01-8-8l2-2-2-4-3 2z"/>',
  server:'<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  disk:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  vm:'<rect x="3" y="4" width="12" height="10" rx="2"/><rect x="9" y="10" width="12" height="10" rx="2"/>',
  power:'<path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z"/>',
  cloud:'<path d="M6.5 18a4.5 4.5 0 01-.3-9A6 6 0 0118 9.5a4.25 4.25 0 01-.5 8.5H6.5z"/>',
  ms:'<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/>',
  shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  segment:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4v11h-4" stroke-dasharray="2 2"/>',
  bug:'<rect x="7" y="8" width="10" height="11" rx="5"/><path d="M4 11h3M17 11h3M5 17h2M17 17h2M9 5l1.5 3M15 5l-1.5 3"/>',
  patch:'<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/>',
  backup:'<path d="M20 12a8 8 0 11-2.6-5.9"/><path d="M20 4v5h-5"/><circle cx="12" cy="12" r="2.5"/>',
  cam:'<path d="M3 8l13-3 1.5 5L4.5 13z"/><path d="M6 13v6M6 16h5"/><path d="M18 9l3 1.5-1 3.5-3-1"/>',
  web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  mobile:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18.5h2"/>',
  panel:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11"/>',
  api:'<path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/><path d="M13 5l-2 14"/>',
  db:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/>',
  mail:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3 7l9 6 9-6"/>',
  ai:'<circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>',
  flow:'<rect x="2.5" y="4" width="6" height="5" rx="1.5"/><rect x="15.5" y="4" width="6" height="5" rx="1.5"/><rect x="9" y="15" width="6" height="5" rx="1.5"/><path d="M5.5 9v3h13V9M12 12v3"/>',
  bot:'<rect x="4" y="8" width="16" height="11" rx="3"/><circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/><path d="M12 4v4M8 19v2M16 19v2"/>',
  doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/>',
  chip:'<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  coin:'<circle cx="12" cy="12" r="9"/><path d="M12 6v12M9 9.5h5a2 2 0 010 4H9h5a2 2 0 010 4H9"/>',
  swap:'<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 2.5 15.4 0 18M12 3C9.5 5.6 9.5 18.4 12 21"/>',
  wallet:'<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18"/><circle cx="17" cy="14" r="1.4"/>',
  block:'<path d="M12 2.5l8 4.5v9l-8 4.5-8-4.5v-9z"/><path d="M12 11.5l8-4.5M12 11.5v9M12 11.5L4 7"/>',
  radar:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-4"/>',
  cap:'<path d="M12 4l10 5-10 5L2 9l10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  home:'<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>',
  therm:'<path d="M12 3a2.5 2.5 0 015 0v9a5.5 5.5 0 11-5 0V3z"/><circle cx="14.5" cy="17" r="2"/>',
  bell:'<path d="M6 10a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 004 0"/>',
  dash:'<circle cx="12" cy="12" r="9"/><path d="M12 12l4-3"/><path d="M6 15a7 7 0 0112 0"/>',
  energy:'<path d="M9 3h6l-2 6h4l-7 12 2-8H8z"/>',
  cart:'<path d="M3 4h2l2.5 11h10L20 7H6"/><circle cx="9" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>',
  sla:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  head:'<path d="M4 13v-1a8 8 0 1116 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="2"/><rect x="17.5" y="13" width="4" height="6" rx="2"/>',
  map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
  audit:'<path d="M6 3h9l4 4v14H6z"/><circle cx="12" cy="13" r="3"/><path d="M14.2 15.2L17 18"/>'
};
const SERVICES = [
/* ── زیرساخت شبکه و ارتباطات ── */
{d:'infra',ic:'cable', s:'پسیو',        t:'کابل‌کشی ساخت‌یافته و پسیو',    p:'اجرای استاندارد شبکه‌ی مسی و فیبر نوری، رک ایستاده و دیواری، پچ‌پنل، ترانکینگ و برچسب‌گذاری کامل مسیرها.',c:['Cat6 / Cat6A','فیبر نوری','پچ‌پنل','نقشه‌ی مسیر']},
{d:'infra',ic:'switch',s:'اکتیو',        t:'سوئیچینگ و مسیریابی',           p:'طراحی و پیکربندی سوئیچ‌های مدیریتی و روتر؛ VLAN، ترانک، STP، تجمیع لینک و مسیریابی بین شبکه‌ها.',c:['VLAN','LACP','مسیریابی','QoS']},
{d:'infra',ic:'wifi',  s:'وای‌فای',      t:'شبکه‌ی بی‌سیم سازمانی',         p:'طراحی پوشش بر پایه‌ی نقشه‌ی ساختمان، اکسس‌پوینت مدیریت‌شده، شبکه‌ی مهمان مجزا و احراز هویت کاربران.',c:['Site Survey','کنترلر مرکزی','شبکه‌ی مهمان','رومینگ']},
{d:'infra',ic:'wan',   s:'پایداری نت',   t:'لینک‌های چندگانه و پایداری اینترنت',p:'ترکیب چند لینک اینترنت با توزیع بار و جایگزینی خودکار هنگام قطعی؛ تا هیچ قطعی‌ای کار مجموعه را متوقف نکند.',c:['Multi-WAN','Failover','توزیع بار','پایش لینک']},
{d:'infra',ic:'branch',s:'ارتباط شعب',   t:'ارتباط امن بین شعب و ساختمان‌ها', p:'اتصال رمزنگاری‌شده‌ی شعب به مرکز با تونل سایت‌به‌سایت یا لینک رادیویی اختصاصی و پایش کیفیت مسیر.',c:['VPN سایت‌به‌سایت','لینک رادیویی','SD-WAN','پایش کیفیت']},
{d:'infra',ic:'phone', s:'تلفن شبکه',    t:'تلفن تحت شبکه و مرکز تماس',      p:'راه‌اندازی مرکز تلفن نرم‌افزاری، داخلی‌های تحت شبکه، منشی خودکار، ضبط مکالمه و گزارش تماس‌ها.',c:['VoIP','منشی خودکار','ضبط مکالمه','گزارش تماس']},

/* ── مرکز داده، سرور و ابر ── */
{d:'dc',ic:'server',s:'سرور',        t:'سرور و تجهیزات رک‌مونت',        p:'انتخاب، تأمین و راه‌اندازی سرورهای سازمانی متناسب با بار واقعی؛ همراه با پیکربندی RAID، فریمور و پایش سخت‌افزار.',c:['HP / Dell','RAID','iLO / iDRAC','پایش سخت‌افزار']},
{d:'dc',ic:'disk',  s:'ذخیره‌سازی',  t:'ذخیره‌سازی سازمانی',            p:'طراحی فضای ذخیره‌سازی متمرکز، لایه‌بندی سرعت و ظرفیت، و اتصال پرسرعت به سرورها با قابلیت توسعه.',c:['SAN / NAS','iSCSI','لایه‌بندی','توسعه‌پذیری']},
{d:'dc',ic:'vm',    s:'مجازی‌سازی',  t:'مجازی‌سازی سرور و دسکتاپ',      p:'تجمیع سرورهای پراکنده روی بستر مجازی، کاهش هزینه‌ی سخت‌افزار و برق، و مهاجرت بدون توقف سرویس.',c:['VMware','Proxmox','Hyper-V','VDI']},
{d:'dc',ic:'power', s:'اتاق سرور',   t:'اتاق سرور و تأسیسات',           p:'استانداردسازی اتاق سرور: رک، برق اضطراری، سرمایش، ارت، اطفای حریق و کنترل دسترسی فیزیکی.',c:['UPS','سرمایش','ارتینگ','اطفای حریق']},
{d:'dc',ic:'cloud', s:'ابر',         t:'میزبانی ابری و سرور مجازی',      p:'تأمین سرور ابری داخلی یا بین‌المللی، طراحی معماری ابری و مهاجرت سرویس‌ها با کمترین قطعی.',c:['VPS','ابر خصوصی','مهاجرت','مقیاس‌پذیری']},
{d:'dc',ic:'ms',    s:'سرویس سازمانی',t:'سرویس‌های سازمانی مایکروسافت',  p:'راه‌اندازی دامین و مدیریت متمرکز کاربران، ایمیل سازمانی، بانک اطلاعاتی و سیاست‌های گروهی در کل مجموعه.',c:['Active Directory','Exchange','SQL Server','Group Policy']},

/* ── امنیت اطلاعات و تداوم کسب‌وکار ── */
{d:'sec',ic:'shield', s:'فایروال',    t:'فایروال سازمانی و UTM',        p:'استقرار و پیکربندی فایروال با سیاست‌های نوشته‌شده؛ فیلترینگ محتوا، کنترل پهنای باند و ثبت کامل ترافیک.',c:['OPNsense','FortiGate','IPS','کنترل پهنای باند']},
{d:'sec',ic:'segment',s:'جداسازی',    t:'جداسازی شبکه و کنترل دسترسی',   p:'تفکیک شبکه‌ی مدیریت، کاربران، مهمان و سرورها؛ تعریف سطح دسترسی هر نقش و حذف دسترسی‌های بی‌مورد.',c:['Micro-segmentation','NAC','حداقل دسترسی','احراز دومرحله‌ای']},
{d:'sec',ic:'bug',    s:'تست نفوذ',   t:'تست نفوذ و ممیزی امنیتی',      p:'ارزیابی امنیتی شبکه، سرور و وب‌اپلیکیشن؛ گزارش اولویت‌بندی‌شده‌ی آسیب‌پذیری‌ها و بازآزمایی پس از رفع.',c:['تست نفوذ','ارزیابی وب','گزارش رفع','بازآزمایی']},
{d:'sec',ic:'patch',  s:'سخت‌سازی',   t:'سخت‌سازی و مدیریت به‌روزرسانی',  p:'بستن سرویس‌های بلااستفاده، اصلاح پیکربندی‌های ناامن و برنامه‌ی منظم وصله‌گذاری سیستم‌ها.',c:['Hardening','مدیریت وصله','رمز عبور سیاست‌دار','ممیزی پیکربندی']},
{d:'sec',ic:'backup', s:'بکاپ و DR',  t:'پشتیبان‌گیری و بازیابی از فاجعه',p:'سیاست پشتیبان‌گیری چندلایه، نسخه‌ی خارج از محل، سایت پشتیبان و آزمون دوره‌ای بازیابی.',c:['بکاپ خودکار','نسخه‌ی آفلاین','RTO / RPO','آزمون بازیابی']},
{d:'sec',ic:'radar',  s:'پایش امنیت', t:'پایش امنیت و مدیریت رخداد',     p:'جمع‌آوری متمرکز لاگ‌ها، تعریف هشدار برای رفتار مشکوک و رویه‌ی مشخص برای واکنش به رخداد.',c:['SIEM','مدیریت لاگ','هشدار آنی','رویه‌ی واکنش']},
{d:'sec',ic:'cam',    s:'حفاظتی',     t:'نظارت تصویری و کنترل تردد',     p:'دوربین تحت شبکه، ذخیره‌سازی ایمن تصاویر، کنترل تردد و حضور و غیاب، یکپارچه با سیاست‌های امنیتی سازمان.',c:['دوربین IP','NVR','کنترل تردد','حضور و غیاب']},

/* ── نرم‌افزار، وب و اپلیکیشن ── */
{d:'soft',ic:'web',   s:'وب',          t:'وب‌سایت و پرتال سازمانی',      p:'طراحی و ساخت وب‌سایت شرکتی، پرتال داخلی و فروشگاه؛ با معماری سریع، امن و قابل توسعه.',c:['سایت شرکتی','پرتال داخلی','فروشگاه','سئوی فنی']},
{d:'soft',ic:'mobile',s:'اپلیکیشن',    t:'اپلیکیشن موبایل و مینی‌اپ تلگرام',p:'ساخت اپ اندروید و iOS یا مینی‌اپ تلگرام برای سرویس‌هایی که باید در دست کاربر باشند.',c:['اندروید / iOS','مینی‌اپ تلگرام','PWA','نوتیفیکیشن']},
{d:'soft',ic:'panel', s:'نرم‌افزار',   t:'نرم‌افزار سفارشی و پنل مدیریت', p:'ساخت سامانه‌ی اختصاصی بر اساس فرآیند واقعی مجموعه: انبار، CRM سبک، گردش کار و پنل مدیریت.',c:['سامانه‌ی اختصاصی','پنل مدیریت','گردش کار','گزارش‌گیری']},
{d:'soft',ic:'api',   s:'یکپارچه‌سازی',t:'یکپارچه‌سازی سامانه‌ها و API',  p:'اتصال نرم‌افزارهای موجود به هم؛ نرم‌افزار مالی، انبار، سایت و ربات تلگرام روی یک منبع داده‌ی واحد.',c:['REST API','Webhook','همگام‌سازی','یکپارچگی داده']},
{d:'soft',ic:'db',    s:'بانک داده',   t:'بانک اطلاعاتی و گزارش‌ساز',    p:'طراحی، بهینه‌سازی و نگهداری بانک اطلاعاتی، به‌همراه داشبورد مدیریتی و گزارش‌های تحلیلی.',c:['SQL Server','بهینه‌سازی کوئری','داشبورد','گزارش تحلیلی']},
{d:'soft',ic:'mail',  s:'دامنه و هاست',t:'دامنه، میزبانی و ایمیل سازمانی',p:'ثبت و مدیریت دامنه، میزبانی پایدار، ایمیل با دامنه‌ی اختصاصی و تنظیمات ضدجعل ایمیل.',c:['دامنه','هاست','ایمیل سازمانی','SPF / DKIM']},

/* ── هوش مصنوعی و اتوماسیون ── */
{d:'ai',ic:'ai',   s:'دستیار سازمانی',t:'دستیار هوشمند سازمانی',         p:'دستیاری که روی اسناد و دانش داخلی مجموعه آموزش می‌بیند و به پرسش‌های کارکنان و مشتریان پاسخ می‌دهد.',c:['پرسش از اسناد','پایگاه دانش','چندزبانه','کنترل دسترسی']},
{d:'ai',ic:'chip', s:'مدل داخلی',     t:'استقرار مدل روی سرور داخلی',    p:'اجرای مدل زبانی روی سرور خودتان؛ داده از سازمان خارج نمی‌شود و هزینه‌ی سرویس خارجی حذف می‌شود.',c:['اجرای محلی','بدون خروج داده','GPU','بهینه‌سازی هزینه']},
{d:'ai',ic:'flow', s:'اتوماسیون',     t:'اتوماسیون گردش کار',            p:'خودکارسازی کارهای تکراری بین سامانه‌ها: ثبت سفارش، اطلاع‌رسانی، گزارش دوره‌ای و تأییدیه‌های زنجیره‌ای.',c:['n8n','زمان‌بندی','اتصال سامانه‌ها','هشدار خودکار']},
{d:'ai',ic:'bot',  s:'ربات تلگرام',   t:'ربات تلگرام سازمانی',           p:'ربات اختصاصی برای پشتیبانی، ثبت درخواست، اطلاع‌رسانی داخلی یا فروش، متصل به سامانه‌های شما.',c:['پشتیبانی','ثبت درخواست','اطلاع‌رسانی','پنل مدیریت']},
{d:'ai',ic:'doc',  s:'پردازش اسناد',  t:'پردازش اسناد و بینایی ماشین',   p:'خواندن خودکار فاکتور، قرارداد و فرم، استخراج داده و ورود آن به سامانه؛ به‌همراه پردازش تصویر دوربین‌ها.',c:['OCR فارسی','استخراج داده','دسته‌بندی','بینایی ماشین']},

/* ── ارز دیجیتال و پرداخت‌های ارزی ── */
{d:'fin',ic:'coin',  s:'درگاه رمزارز', t:'درگاه پرداخت رمزارز (پازل‌نت پی)',p:'راه‌اندازی درگاه دریافت رمزارز روی سایت، ربات یا اپ شما؛ با صدور صورتحساب، تأیید خودکار تراکنش و پنل گزارش‌گیری.',c:['USDT / TRX / BTC','تأیید خودکار','صورتحساب','پنل گزارش']},
{d:'fin',ic:'swap',  s:'تسویه',        t:'تسویه و تبدیل رمزارز',           p:'طراحی چرخه‌ی تسویه‌ی امن، تبدیل بین دارایی‌ها و مدیریت نوسان با سیاست‌های تعریف‌شده‌ی مجموعه.',c:['تسویه‌ی دوره‌ای','مدیریت نوسان','چند دارایی','گزارش مالی']},
{d:'fin',ic:'globe', s:'پرداخت ارزی',  t:'پرداخت‌های ارزی و بین‌المللی',   p:'تأمین و مدیریت پرداخت سرویس‌های خارجی مورد نیاز کسب‌وکار — سرور، لایسنس، تبلیغات و ابزارهای ابری.',c:['خرید سرویس خارجی','لایسنس','تبلیغات','صورتحساب ارزی']},
{d:'fin',ic:'wallet',s:'کیف پول',      t:'کیف پول سازمانی و نگهداری کلید', p:'ساختار کیف پول چندامضایی، تفکیک کیف پول گرم و سرد، و رویه‌ی امن نگهداری و بازیابی کلیدها.',c:['Multi-Sig','کیف پول سرد','رویه‌ی بازیابی','تفکیک دسترسی']},
{d:'fin',ic:'block', s:'بلاکچین',      t:'زیرساخت بلاکچین و توکن',        p:'راه‌اندازی نود اختصاصی، طراحی و انتشار توکن، قرارداد هوشمند و باشگاه مشتریان مبتنی بر توکن.',c:['نود اختصاصی','قرارداد هوشمند','توکن سازمانی','باشگاه مشتریان']},
{d:'fin',ic:'radar', s:'رصد تراکنش',   t:'رصد تراکنش و کنترل ریسک',       p:'پایش لحظه‌ای تراکنش‌ها، هشدار برای رفتار غیرعادی و گزارش قابل ارائه به واحد مالی و حسابرسی.',c:['پایش آنی','هشدار ناهنجاری','گزارش حسابرسی','کنترل ریسک']},
{d:'fin',ic:'cap',   s:'آموزش مالی',   t:'مشاوره و آموزش رمزارز سازمانی',  p:'آموزش تیم مالی و مدیریت برای کار امن با دارایی دیجیتال؛ از رویه‌ی نگهداری کلید تا تشخیص کلاهبرداری.',c:['کارگاه تخصصی','رویه‌ی امن','تشخیص کلاهبرداری','مستند داخلی']},

/* ── هوشمندسازی و اینترنت اشیا ── */
{d:'iot',ic:'home',  s:'ساختمان هوشمند',t:'هوشمندسازی ساختمان',          p:'کنترل روشنایی، تهویه، پرده و سناریوهای زمان‌بندی‌شده در ساختمان اداری، از یک پنل واحد.',c:['BMS','روشنایی','تهویه','سناریو']},
{d:'iot',ic:'therm', s:'پایش اتاق سرور',t:'پایش محیطی اتاق سرور',        p:'سنجش دائمی دما، رطوبت، نشتی آب و وضعیت برق اتاق سرور با هشدار پیش از رسیدن به نقطه‌ی بحران.',c:['دما و رطوبت','نشت آب','وضعیت UPS','هشدار پیشگیرانه']},
{d:'iot',ic:'bell',  s:'هشدار',        t:'سنسور و هشدار آنی',            p:'شبکه‌ی سنسور برای دود، حرکت، باز شدن درب و خطاهای تجهیزات، با اعلان فوری در تلگرام و پیامک.',c:['سنسور شبکه‌ای','اعلان تلگرام','ثبت رویداد','یکپارچه با دوربین']},
{d:'iot',ic:'dash',  s:'داشبورد پایش', t:'داشبورد پایش مرکزی',           p:'یک صفحه که وضعیت لحظه‌ای شبکه، سرورها، لینک‌ها و تجهیزات را نشان می‌دهد؛ برای مدیر و برای کارشناس.',c:['Zabbix / Grafana','نمای مدیریتی','تاریخچه','گزارش دوره‌ای']},
{d:'iot',ic:'energy',s:'انرژی',        t:'پایش و کنترل مصرف انرژی',      p:'اندازه‌گیری مصرف برق تجهیزات و ساختمان، شناسایی مصرف‌های پنهان و کاهش هزینه‌ی جاری.',c:['کنتور هوشمند','تحلیل مصرف','کاهش هزینه','گزارش ماهانه']},

/* ── تأمین، پشتیبانی و مشاوره ── */
{d:'biz',ic:'cart', s:'تأمین تجهیزات',t:'تأمین و فروش تجهیزات',          p:'تأمین تجهیزات شبکه، سرور، امنیت و حفاظتی با مشاوره‌ی فنی پیش از خرید و انتخاب بر اساس نیاز واقعی.',c:['مشاوره‌ی خرید','گارانتی','خدمات پس از فروش','قیمت رقابتی']},
{d:'biz',ic:'sla',  s:'پشتیبانی',     t:'قرارداد پشتیبانی و نگهداری',    p:'پشتیبانی با زمان پاسخ و زمان رفع مکتوب، بازدید دوره‌ای، و جانشینی سریع تجهیزات معیوب.',c:['SLA مکتوب','بازدید دوره‌ای','تجهیز جایگزین','اولویت پاسخ']},
{d:'biz',ic:'head', s:'میز خدمت',     t:'پایش ۲۴×۷ و میز خدمت',         p:'پایش دائمی سرویس‌ها، ثبت و پیگیری درخواست‌ها در سامانه‌ی تیکت و گزارش ماهانه‌ی رخدادها به مدیریت.',c:['پایش ۲۴×۷','سامانه‌ی تیکت','گزارش ماهانه','پشتیبانی از راه دور']},
{d:'biz',ic:'map',  s:'مشاوره',       t:'مشاوره و معماری فناوری اطلاعات', p:'تدوین نقشه‌ی راه، برآورد بودجه و اولویت‌بندی پروژه‌ها؛ برای مدیرانی که پیش از هزینه‌کردن تصویر روشن می‌خواهند.',c:['نقشه‌ی راه','برآورد بودجه','اولویت‌بندی','معماری هدف']},
{d:'biz',ic:'audit',s:'ممیزی وضعیت',  t:'ممیزی وضعیت موجود',            p:'بازدید میدانی و فهرست‌برداری کامل از تجهیزات، سرویس‌ها و ریسک‌ها، با گزارش قابل ارائه به هیئت‌مدیره.',c:['بازدید میدانی','فهرست دارایی','ریسک‌ها','گزارش مدیریتی']},
{d:'biz',ic:'cap',  s:'آموزش',        t:'آموزش و انتقال دانش',          p:'آموزش تیم فناوری اطلاعات داخلی و کاربران نهایی، تحویل مستندات فنی و رویه‌های عملیاتی.',c:['آموزش تیم','مستندات فنی','رویه‌ی عملیاتی','کارگاه کاربران']}
];
/* ═══ نسخه‌ی سند ═══ */
const DOC = {ver:'۴٫۲', date:'مرداد ۱۴۰۵', code:'PN-PROP-1405-04'};

/* ═══ نمادهای جدول فکری (به ترتیب SERVICES) ═══ */
const SYM = ['پس','اک','وف','پن','شع','تل',
             'سر','ذخ','مج','اس','اب','سز',
             'فا','جد','تن','سخ','بک','پا','حف',
             'وب','اپ','نر','یک','بد','دم',
             'دس','مد','ات','رت','پر',
             'در','تس','پز','کپ','بل','رص','آم',
             'سه','پت','هش','دش','ان',
             'تج','پش','مخ','مش','مو','آز'];

/* ═══ کتاب طلسم‌ها: ۱۰ طلسم، هرکدام شش عنصر یکتا ═══
   بازی هر ۱۰ دقیقه به طلسم بعد می‌رود؛ کل مهلت حل از لحظه‌ی «شروع» ۲۰ دقیقه است. */
const SPELLBOOK = [
  {w:'آلوهومورا',l:'ALOHOMORA',t:'طلسم گشودن قفل‌ها',line:'دری که قفل بود، باز می‌شود',keys:['پسیو','فایروال','دامنه و هاست','درگاه رمزارز','ساختمان هوشمند','مشاوره'],hints:['«سنگِ جادو»، حوالی دقیقه‌ی پنجاه: سه بچه پشتِ دری قفل، پشت سرشان فیلچ در راه. هرمیون پوزخند رون را نادیده می‌گیرد، چوب‌دستی را بالا می‌آورد و در، بی‌صدا باز می‌شود. این طلسم فقط یک معنا دارد: «گشودن».','به معنای طلسم فکر کن، نه به فهرست. گشودنِ امن یعنی اول باید بیرونی‌ترین درها را باز کرد و بعد تا هسته پیش رفت — از پوسته‌ی فیزیکی تا مغزِ تصمیم. تکه‌ها همین سفرِ رو-به-درون‌اند.','رون زیر لب گفت «تو نابغه‌ای». نبوغِ هرمیون در ترتیب بود: از چیزی که پا رویش می‌گذاری تا کسی که آخر سر راهنمایی‌ات می‌کند. لایه به لایه، از زمین تا اندیشه.']},
  {w:'لوموس',l:'LUMOS',t:'طلسم روشنایی',line:'نوری در تاریک‌ترین گلوگاه',keys:['پایش امنیت','داشبورد پایش','مدل داخلی','رصد تراکنش','هشدار','ممیزی وضعیت'],hints:['«محفلِ ققنوس»، دهلیزهای تاریکِ اداره‌ی اسرار: بچه‌ها گم شده‌اند و چیزی در سایه‌ها تکان می‌خورد. نوکِ چند چوب‌دستی هم‌زمان روشن می‌شود. طلسمِ «روشناییِ در تاریکی».','دامبلدور جایی می‌گوید نور همان است که خطرِ پنهان را آشکار می‌کند. این طلسم از جنسِ دیدن است: اول چراغ را روشن کن، بعد آنچه را دیدی معنا کن.','منطقِ ترتیب یک زنجیره‌ی ادراک است: اول ببین، بعد بفهم، بعد وقتی چیزی غلط بود بانگ بزن، و آخر داوری کن. از نگاه تا قضاوت.']},
  {w:'آکسیو',l:'ACCIO',t:'طلسم فراخوانی',line:'هر تکه را به‌سوی خود می‌کشد',keys:['اکتیو','سرور','وب','اتوماسیون','کیف پول','تأمین تجهیزات'],hints:['«جامِ آتش»، میدانِ مقابلِ اژدها: هری در محاصره فریاد می‌زند «آکسیو، جاروی من!» و جارو از آن‌سوی زمین پرواز می‌کند به دستش. طلسمِ «فراخواندنِ از دور».','آکسیو مرزها را برمی‌دارد و چیزها را به‌سوی تو می‌کشد. تکه‌های این طلسم در همه‌ی گروه‌ها پخش‌اند — انگار داری از هر گوشه‌ی نقشه چیزی را احضار می‌کنی.','ترتیب، منطقِ ساختنِ یک سرویس از صفر است: اول بستری که همه‌چیز رویش می‌ایستد، بعد پردازش، بعد چهره‌ای که کاربر می‌بیند، بعد خودکارسازی، بعد پول، و آخر سخت‌افزار. از پی تا بام.']},
  {w:'رپارو',l:'REPARO',t:'طلسم ترمیم',line:'آنچه شکسته بود، دوباره کامل می‌شود',keys:['بکاپ و DR','سخت‌سازی','یکپارچه‌سازی','ابر','پشتیبانی','میز خدمت'],hints:['«تالارِ اسرار»، واگنِ قطار: عینکِ هری می‌شکند، هرمیون خونسرد می‌گوید «رپارو» و شیشه‌ها سرِجایشان می‌نشینند. طلسمِ «ترمیمِ آنچه شکسته».','این طلسم از جنسِ بازگرداندن است: وقتی چیزی از کار افتاد، چطور دوباره سرِ پا می‌شود؟ تکه‌ها همه درباره‌ی بازیابی و استوارسازی‌اند.','ترتیب، همان مسیرِ ترمیم است: از نسخه‌ای که کنار گذاشته‌ای شروع می‌شود و به جایی می‌رسد که آدمِ پشتِ میز دوباره کارِ مردم را راه می‌اندازد. از نسخه تا خدمت.']},
  {w:'پروتگو',l:'PROTEGO',t:'طلسم سپر',line:'دیواری نامرئی گرد داده‌ها',keys:['جداسازی','تست نفوذ','حفاظتی','بلاکچین','پایش اتاق سرور','انرژی'],hints:['«محفلِ ققنوس»، اتاقِ تمرینِ ارتشِ دامبلدور: هری فریاد می‌زند «پروتگو!» و پرده‌ای نامرئی طلسمِ حریف را پس می‌زند. طلسمِ «سپر».','اسنیپ به هری گفت ذهنت را ببند. سپر یعنی جداکردنِ خود از نفوذ. تکه‌های این طلسم از جنسِ مرزکشیدن، آزمودنِ رخنه و محافظت‌اند.','ترتیب یک راهبردِ دفاعی است: اول مرزها را جدا کن، بعد ضعفت را خودت بیازما، بعد فیزیک را حفاظت کن، و تا آخر توانِ حیاتی را نگه دار. از دیوار تا برق.']},
  {w:'نوکس',l:'NOX',t:'طلسم خاموشی',line:'سکوت امن پس از طوفان',keys:['وای‌فای','ذخیره‌سازی','بانک داده','پردازش اسناد','تسویه','آموزش'],hints:['بارها در فیلم‌ها، درست بعد از لوموس: شخصیت زیر لب «نوکس» می‌گوید و نور خاموش می‌شود تا در تاریکی پنهان بماند. طلسمِ «خاموشی و آرامش».','نوکس نقطه‌ی مقابلِ روشنایی است؛ جایی که همه‌چیز آرام می‌گیرد و در سکوت نگهداری می‌شود. تکه‌ها از جنسِ ذخیره، بایگانی و دانشِ ماندگارند.','ترتیب، سفرِ داده به خوابگاهِ امن است: از بستری که خاموش می‌شود تا جایی که برای همیشه ذخیره و مرتب و منتقل می‌شود. از سکوت تا آموختن.']},
  {w:'اکسپکتو پاترونوم',l:'EXPECTO PATRONUM',t:'طلسم نگهبان',line:'محافظی که هرگز خسته نمی‌شود',keys:['ارتباط شعب','اتاق سرور','دستیار سازمانی','پرداخت ارزی','آموزش مالی','پایداری نت'],hints:['«زندانیِ آزکابان»، لبِ دریاچه: دیوانه‌سازها نزدیک می‌شوند، هری چوب‌دستی را بالا می‌برد و از دلِ نور، گوزنی درخشان می‌تازد. طلسمِ «نگهبانِ همیشه‌بیدار».','لوپین گفت پاترونوس از شادترین خاطره جان می‌گیرد و بی‌وقفه محافظت می‌کند. تکه‌های این طلسم از جنسِ پیوندِ پایدار و پشتیبانیِ خستگی‌ناپذیرند.','ترتیب یک حلقه‌ی مراقبت است: از پیوندِ میانِ نقاطِ دور شروع می‌شود و تا لحظه‌ای می‌رود که آن پیوند هرگز قطع نمی‌شود. از اتصال تا پایداری.']},
  {w:'وینگاردیوم لویوسا',l:'WINGARDIUM LEVIOSA',t:'طلسم برخاستن',line:'بار سنگین، سبک بالا می‌رود',keys:['تلفن شبکه','مجازی‌سازی','سرویس سازمانی','اپلیکیشن','ربات تلگرام','درگاه رمزارز'],hints:['«سنگِ جادو»، کلاسِ فلیتویک: هرمیون رون را تصحیح می‌کند «لِویو-سا، نه لِویو-سـار!» و پر آرام از میز بلند می‌شود. همان شب همین طلسم چماقِ غول را در هوا نگه می‌دارد. طلسمِ «برخاستن».','این طلسم بار را سبک می‌کند و بالا می‌برد — بی‌آنکه دستی به آن بخورد. تکه‌ها آن چیزهایی‌اند که کارِ سنگینِ سازمان را خودکار و سبک بلند می‌کنند.','ترتیب، مسیرِ سبک‌شدن است: از صدایی که روی شبکه بلند می‌شود تا ماشینی که خودش کار را بالا نگه می‌دارد، و آخر جایی که پول در هوا جابه‌جا می‌شود. از صدا تا سرمایه.']},
  {w:'فینیته',l:'FINITE',t:'طلسم پایان',line:'هر آشوبی را متوقف می‌کند',keys:['سرور','فایروال','نرم‌افزار','کیف پول','هشدار','مشاوره'],hints:['«محفلِ ققنوس»، وسطِ آشوبِ نبرد: طلسم‌ها از هر سو می‌بارند، دامبلدور آرام «فینیته» می‌گوید و ناگهان همه‌چیز می‌ایستد. طلسمِ «پایان‌دادن به آشوب».','فینیته هر طلسمِ در جریان را خنثی می‌کند. تکه‌های این طلسم آن‌هایی‌اند که وقتی از کار بیفتند، کلِ ماجرا از حرکت می‌ایستد — نقاطِ بحرانی.','ترتیب از قلب شروع می‌شود و به عقل می‌رسد: از جایی که همه‌چیز پردازش می‌شود، عبور از دیواری که نگه‌بان است، تا مشورتی که آشوب را برای همیشه می‌خواباند. از هسته تا تدبیر.']},
  {w:'اکسپلیارموس',l:'EXPELLIARMUS',t:'طلسم خلع‌سلاح',line:'تهدید را از دست دشمن می‌گیرد',keys:['فایروال','تست نفوذ','پایش امنیت','رصد تراکنش','ممیزی وضعیت','بکاپ و DR'],hints:['«تالارِ اسرار»، باشگاهِ دوئل: هری در برابر مالفوی «اکسپلیارموس!» می‌گوید و چوب‌دستیِ حریف از دستش می‌پرد. همان طلسمِ ساده که در نبردِ آخر کار را تمام می‌کند. طلسمِ امضای هری — «خلعِ سلاح».','خلعِ سلاح یعنی گرفتنِ ابزارِ حمله از دستِ دشمن، پیش از آنکه ضربه بزند. تکه‌های این طلسم همه از جنسِ شناختن و بستنِ راهِ مهاجم‌اند.','ترتیب یک عملیاتِ دفاعی است: اول دیوار، بعد آزمودنِ رخنه، بعد پاییدنِ مداوم، بعد ردگیریِ ردِپا، بعد داوری، و آخر نسخه‌ای که اگر همه شکست خورد نجاتت می‌دهد. از سپر تا نسخه‌ی پشتیبان.']}
];

/* ═══ وابستگی‌های بین سرویس‌ها (گراف سیناپسی) ═══ */
const X=[
  ['اکتیو','فایروال'],['پسیو','اکتیو'],['وای‌فای','جداسازی'],['پایداری نت','ارتباط شعب'],
  ['ارتباط شعب','فایروال'],['تلفن شبکه','اکتیو'],['سرور','ذخیره‌سازی'],['ذخیره‌سازی','بکاپ و DR'],
  ['مجازی‌سازی','سرور'],['اتاق سرور','پایش اتاق سرور'],['ابر','مجازی‌سازی'],['سرویس سازمانی','جداسازی'],
  ['فایروال','پایش امنیت'],['تست نفوذ','وب'],['سخت‌سازی','سرویس سازمانی'],['بکاپ و DR','ابر'],
  ['پایش امنیت','داشبورد پایش'],['حفاظتی','هشدار'],['وب','دامنه و هاست'],['اپلیکیشن','یکپارچه‌سازی'],
  ['نرم‌افزار','بانک داده'],['یکپارچه‌سازی','ربات تلگرام'],['بانک داده','داشبورد پایش'],
  ['دستیار سازمانی','مدل داخلی'],['مدل داخلی','سرور'],['اتوماسیون','یکپارچه‌سازی'],
  ['ربات تلگرام','درگاه رمزارز'],['پردازش اسناد','بانک داده'],['دستیار سازمانی','پردازش اسناد'],
  ['درگاه رمزارز','تسویه'],['تسویه','کیف پول'],['کیف پول','رصد تراکنش'],['بلاکچین','مدل داخلی'],
  ['پرداخت ارزی','ابر'],['رصد تراکنش','پایش امنیت'],['آموزش مالی','آموزش'],['درگاه رمزارز','وب'],
  ['ساختمان هوشمند','انرژی'],['پایش اتاق سرور','هشدار'],['هشدار','ربات تلگرام'],
  ['داشبورد پایش','میز خدمت'],['انرژی','داشبورد پایش'],
  ['تأمین تجهیزات','سرور'],['تأمین تجهیزات','اکتیو'],['پشتیبانی','میز خدمت'],['مشاوره','ممیزی وضعیت'],
  ['ممیزی وضعیت','تست نفوذ'],['مشاوره','پایداری نت'],['آموزش','دستیار سازمانی'],['میز خدمت','پشتیبانی'],
  ['مشاوره','بلاکچین'],['پشتیبانی','بکاپ و DR']
];
/* ═══════════════ ابزارها ═══════════════ */
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const DMAP = Object.fromEntries(DOMAINS.map(d=>[d.id,d]));
const fa = n => String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const $ = id => document.getElementById(id);

/* ═══════════════ نسخه‌ی سند ═══════════════ */
$('verBadge').textContent = `نسخه ${DOC.ver} · ${DOC.date}`;
$('footVer').textContent  = `نسخه ${DOC.ver} — ${DOC.date} · شناسه سند ${DOC.code} · تهیه‌شده برای ارائه به هولدینگ‌ها`;

/* ═══════════════ نوار تخصص‌ها ═══════════════ */
(function(){
  const items = SERVICES.map(s=>s.t);
  const html = items.map(t=>`<span>${t}</span>`).join('');
  $('ticker').innerHTML = html + html;
})();

/* ═══════════════ کارت‌های خدمات ═══════════════ */
(function(){
  const grid = $('serviceGrid'), nav = $('domNav'), sel = $('f_need');
  sel.innerHTML = '<option value="">— انتخاب کنید —</option>';
  DOMAINS.forEach(d=>{
    nav.insertAdjacentHTML('beforeend',
      `<button class="dom-btn" data-go="d-${d.id}"><i style="background:${d.color}"></i>${d.name}</button>`);
    sel.insertAdjacentHTML('beforeend', `<option>${d.name}</option>`);

    const blk = document.createElement('div');
    blk.className='dblock'; blk.id='d-'+d.id;
    blk.innerHTML =
      `<div class="dtitle"><span class="dot" style="background:${d.color};box-shadow:0 0 14px ${d.color}"></span>${d.name}<span class="rule"></span></div>
       <p class="dsub">${d.sub}</p>`;
    const row = document.createElement('div'); row.className='services';
    SERVICES.forEach((s,i)=>{
      if(s.d!==d.id) return;
      const el = document.createElement('article');
      el.className='svc card rv'; el.id='svc-'+i; el.style.setProperty('--c',d.color);
      el.innerHTML =
        `<div class="top">
           <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.ic]||ICONS.net||''}</svg></div>
           <h3>${s.t}</h3>
         </div>
         <p>${s.p}</p>
         <div class="chips">${s.c.map(c=>`<span class="chip">${c}</span>`).join('')}</div>`;
      row.appendChild(el);
    });
    blk.appendChild(row); grid.appendChild(blk);
  });
  nav.addEventListener('click',e=>{
    const b=e.target.closest('[data-go]'); if(!b) return;
    document.getElementById(b.dataset.go).scrollIntoView({behavior:'smooth',block:'start'});
  });

  // هاله‌ی زیر نشانگر روی کارت‌ها — فقط کارت زیر نشانگر، با throttle
  let raf=0, last=null;
  grid.addEventListener('mousemove',e=>{
    const c=e.target.closest('.svc'); if(!c) return;
    last={c,x:e.clientX,y:e.clientY};
    if(raf) return;
    raf=requestAnimationFrame(()=>{
      raf=0; if(!last) return;
      const r=last.c.getBoundingClientRect();
      last.c.style.setProperty('--mx',(last.x-r.left)+'px');
      last.c.style.setProperty('--my',(last.y-r.top)+'px');
    });
  },{passive:true});
})();

/* ═══════════════ ظهور، شمارنده، نوار پیشرفت، هاله ═══════════════ */
(function(){
  const io = new IntersectionObserver(es=>{
    es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  },{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));

  document.querySelectorAll('[data-count]').forEach(el=>{
    const io2=new IntersectionObserver(es=>{
      if(!es[0].isIntersecting) return; io2.disconnect();
      const to=+el.dataset.count; let v=0;
      const t=setInterval(()=>{ v+=Math.max(1,Math.round(to/26)); if(v>=to){v=to;clearInterval(t);} el.textContent=fa(v); },28);
    },{threshold:.6});
    io2.observe(el);
  });

  const bar=$('progress'); let pr=0;
  addEventListener('scroll',()=>{
    if(pr) return;
    pr=requestAnimationFrame(()=>{ pr=0;
      const h=document.documentElement;
      bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
    });
  },{passive:true});

  const g=$('glow'); let gr=0,gx=0,gy=0;
  if(matchMedia('(hover:hover)').matches && innerWidth>980){
    addEventListener('mousemove',e=>{ gx=e.clientX; gy=e.clientY; g.style.opacity=1;
      if(gr) return; gr=requestAnimationFrame(()=>{ gr=0; g.style.transform=`translate3d(${gx}px,${gy}px,0)`; });
    },{passive:true});
  }
})();

/* ═══════════════ ذرات پس‌زمینه‌ی هیرو ═══════════════ */
(function(){
  const cv=$('heroCanvas'), ctx=cv.getContext('2d',{alpha:true});
  let W,H,ps=[],run=true,raf=0;
  const DPR=Math.min(devicePixelRatio||1,1.5);
  function size(){
    W=cv.clientWidth;H=cv.clientHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);
    const n=Math.min(46,Math.round(W/26));
    ps=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22}));
  }
  function draw(){
    raf=0; if(!run) return;
    ctx.clearRect(0,0,W,H);
    for(const p of ps){ if(!REDUCE){p.x+=p.vx;p.y+=p.vy;} if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; }
    ctx.lineWidth=.7; ctx.beginPath();
    for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){
      const dx=ps[i].x-ps[j].x,dy=ps[i].y-ps[j].y,d2=dx*dx+dy*dy;
      if(d2<17000){ ctx.moveTo(ps[i].x,ps[i].y); ctx.lineTo(ps[j].x,ps[j].y); }
    }
    ctx.strokeStyle='rgba(123,92,255,.16)'; ctx.stroke();
    ctx.fillStyle='rgba(242,193,78,.45)'; ctx.beginPath();
    for(const p of ps){ ctx.moveTo(p.x+1.3,p.y); ctx.arc(p.x,p.y,1.3,0,6.283); }
    ctx.fill();
    if(!REDUCE) raf=requestAnimationFrame(draw);
  }
  addEventListener('resize',()=>{size();if(!raf)draw();});
  size(); draw();
  new IntersectionObserver(es=>{ run=es[0].isIntersecting && !document.hidden; if(run&&!raf)draw(); })
    .observe(document.querySelector('.hero'));
  addEventListener('visibilitychange',()=>{ run=!document.hidden; if(run&&!raf)draw(); });
})();

/* ═══════════════ شبکه‌ی عصبی ═══════════════ */
(function(){
  const cv=$('netCanvas'), ctx=cv.getContext('2d',{alpha:true});
  const tip=$('netTip'), hudInfo=$('hudInfo'), hudMode=$('hudMode'), hudNodes=$('hudNodes');
  const DPR=Math.min(devicePixelRatio||1,1.5);
  let W=0,H=0,nodes=[],edges=[],buckets={},deps=[],pulses=[],fires=[];
  let hover=-1, pinned=-1, mapMode=false, focusMode=false, mix=0, target=0;
  let s=1, ox=0, oy=0, dragging=false, dragged=false, lx=0, ly=0;
  let run=true, raf=0, frame=0, fam='Tahoma', fontOK=false, labelAll=false;
  const sprites={};

  const hexA=(hex,a)=>{const h=hex.replace('#',''),v=h.length===3?h.split('').map(c=>c+c).join(''):h,n=parseInt(v,16);
    return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;};
  function sprite(color){
    if(sprites[color]) return sprites[color];
    const S=48,c=document.createElement('canvas'); c.width=c.height=S;
    const g=c.getContext('2d'), rg=g.createRadialGradient(S/2,S/2,0,S/2,S/2,S/2);
    rg.addColorStop(0,hexA(color,.9)); rg.addColorStop(.35,hexA(color,.28)); rg.addColorStop(1,hexA(color,0));
    g.fillStyle=rg; g.fillRect(0,0,S,S);
    return sprites[color]=c;
  }
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

  function build(){
    W=cv.clientWidth; H=cv.clientHeight;
    if(!W||!H){ requestAnimationFrame(build); return; }
    cv.width=W*DPR; cv.height=H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
    const cx=W/2, cy=H/2, small=W<820, M=Math.min(W,H);
    const R1=M*(small?.245:.235), R2=M*(small?.185:.215);
    labelAll = W>=980;

    const keep = nodes.length ? nodes.map(n=>({x:n.x,y:n.y})) : null;
    nodes=[];
    nodes.push({type:'hub',label:'پازل‌نت',tag:'هسته‌ی شبکه',color:'#FFFFFF',glow:'#7B5CFF',
      rad:small?24:31,bx:cx,by:cy,
      desc:'نقطه‌ی اتصال همه‌ی سرویس‌ها؛ یک تیم، یک معماری و یک مسئول پاسخ‌گو برای کل زیرساخت.'});
    const base=-Math.PI/2-Math.PI/8;
    DOMAINS.forEach((d,i)=>{
      const a=base+i*(Math.PI*2/DOMAINS.length);
      nodes.push({type:'domain',label:d.name,tag:'حوزه‌ی تخصصی',color:d.color,glow:d.color,dom:d.id,ang:a,
        rad:small?12:15,bx:cx+Math.cos(a)*R1,by:cy+Math.sin(a)*R1,desc:d.sub});
    });
    SERVICES.forEach((sv,idx)=>{
      const di=DOMAINS.findIndex(d=>d.id===sv.d), dn=nodes[1+di];
      const list=SERVICES.filter(x=>x.d===sv.d), k=list.indexOf(sv);
      const spread=Math.PI*(list.length>5?.8:.66);
      const a=dn.ang-spread/2+(list.length>1?(k/(list.length-1))*spread:0);
      const wob=(k%2?.15:-.05)*R2;
      nodes.push({type:'service',label:sv.s,full:sv.t,desc:sv.p,tag:DMAP[sv.d].name,svc:idx,parent:1+di,
        color:DMAP[sv.d].color,glow:DMAP[sv.d].color,rad:small?6:8,ang:a,
        bx:dn.bx+Math.cos(a)*(R2+wob), by:dn.by+Math.sin(a)*(R2+wob)});
    });

    // چیدمان نقشه: ۸ ستون راست‌به‌چپ
    const colW=152, rowH=72, cols=DOMAINS.length;
    const gW=cols*colW, right=cx+gW/2, top=cy-H*0.30;
    nodes[0].mx=cx; nodes[0].my=top-96;
    DOMAINS.forEach((d,i)=>{
      const n=nodes[1+i]; n.mx=right-i*colW-colW/2; n.my=top;
    });
    nodes.forEach(n=>{
      if(n.type!=='service') return;
      const p=nodes[n.parent], list=SERVICES.filter(x=>x.d===SERVICES[n.svc].d);
      const k=list.indexOf(SERVICES[n.svc]);
      n.mx=p.mx; n.my=p.my+76+k*rowH;
    });
    nodes.forEach((n,i)=>{ n.x=keep&&keep[i]?keep[i].x:n.bx; n.y=keep&&keep[i]?keep[i].y:n.by; n.e=0; });

    // یال‌ها
    edges=[]; 
    for(let i=1;i<=DOMAINS.length;i++) edges.push([0,i,1.6,nodes[i].color]);
    nodes.forEach((n,i)=>{ if(n.type==='service') edges.push([n.parent,i,1,n.color]); });
    const idxOf=l=>nodes.findIndex(n=>n.type==='service'&&n.label===l);
    deps=nodes.map(()=>[]);
    X.forEach(([a,b])=>{
      const ia=idxOf(a), ib=idxOf(b);
      if(ia<0||ib<0||ia===ib) return;
      if(deps[ia].includes(ib)) return;
      edges.push([ia,ib,.8,nodes[ib].color]);
      deps[ia].push(ib); deps[ib].push(ia);
    });
    buckets={};
    edges.forEach((e,i)=>{ (buckets[e[3]]=buckets[e[3]]||[]).push(i); });
    pulses = edges.filter((_,i)=>i%2===0).slice(0,56).map((_,k)=>({e:k*2,t:Math.random(),sp:.0018+Math.random()*.0032}));
    hudNodes.textContent=fa(nodes.length);
    fitMap(true);
  }

  function fitMap(silent){
    if(!mapMode){ s=1; ox=0; oy=0; return; }
    const pad=60, gW=DOMAINS.length*152, gH=8*72+120;
    s=Math.min((W-pad)/gW,(H-pad)/gH,1.05);
    ox=W/2-(W/2)*s; oy=H/2-(H/2)*s - H*0.02;
  }
  const toWorld=(mx,my)=>({x:(mx-ox)/s, y:(my-oy)/s});

  function nodeAt(mx,my){
    const w=toWorld(mx,my);
    for(let i=nodes.length-1;i>=0;i--){
      const n=nodes[i], r=n.rad+(mapMode?9:11);
      if((n.x-w.x)**2+(n.y-w.y)**2 < r*r) return i;
    }
    return -1;
  }

  function related(i){
    if(i<0) return null;
    const set=new Set([i]);
    edges.forEach(([a,b])=>{ if(a===i)set.add(b); if(b===i)set.add(a); });
    return set;
  }

  function draw(){
    raf=0; if(!run) return;
    frame++;
    if(Math.abs(mix-target)>.001){ mix+=(target-mix)*.08; } else mix=target;
    const e=ease(mix);
    nodes.forEach(n=>{ n.x=n.bx+(n.mx-n.bx)*e; n.y=n.by+(n.my-n.by)*e; });

    ctx.clearRect(0,0,W,H);
    ctx.save(); ctx.translate(ox,oy); ctx.scale(s,s);

    const act = pinned>-1?pinned:hover;
    const rel = related(act);
    const dimA = focusMode? .035 : .07;

    // یال‌ها — دسته‌بندی‌شده بر اساس رنگ (کم‌ترین تعداد فراخوانی)
    for(const color in buckets){
      ctx.beginPath();
      buckets[color].forEach(ei=>{
        const [a,b]=edges[ei];
        if(act>-1 && (a===act||b===act)) return;
        ctx.moveTo(nodes[a].x,nodes[a].y); ctx.lineTo(nodes[b].x,nodes[b].y);
      });
      ctx.strokeStyle=hexA(color, act>-1?dimA:.3);
      ctx.lineWidth=(act>-1?.7:1)/Math.max(s,.6);
      ctx.stroke();
    }
    if(act>-1){
      ctx.beginPath();
      edges.forEach(([a,b])=>{ if(a===act||b===act){ ctx.moveTo(nodes[a].x,nodes[a].y); ctx.lineTo(nodes[b].x,nodes[b].y);} });
      ctx.strokeStyle=hexA(nodes[act].color,.85); ctx.lineWidth=1.8/Math.max(s,.6);
      ctx.shadowBlur=0; ctx.stroke();
    }

    // سیگنال‌ها
    if(!REDUCE){
      pulses.forEach(p=>{
        const ed=edges[p.e]; if(!ed) return;
        const A=nodes[ed[0]], B=nodes[ed[1]];
        p.t+=p.sp*(mapMode?.6:1); if(p.t>1)p.t=0;
        const on = act===-1 || ed[0]===act || ed[1]===act;
        if(act>-1 && !on) return;
        const x=A.x+(B.x-A.x)*p.t, y=A.y+(B.y-A.y)*p.t, r=on?3.2:2.2;
        ctx.drawImage(sprite(ed[3]), x-r*2.6, y-r*2.6, r*5.2, r*5.2);
      });
    }

    // شلیک عصبی (انتشار موج فکری)
    if(!REDUCE && !mapMode && frame%150===0 && fires.length<3){
      const cand=nodes.map((n,i)=>i).filter(i=>nodes[i].type==='service');
      fires.push({i:cand[Math.floor(Math.random()*cand.length)],t:0});
    }
    fires=fires.filter(f=>{
      f.t+=.016; const n=nodes[f.i];
      if(f.t<.5) n.e=Math.max(n.e,1-f.t*2);
      else if(f.t<1){ const p=nodes[n.parent]; p.e=Math.max(p.e,1-(f.t-.5)*2); }
      else if(f.t<1.5){ nodes[0].e=Math.max(nodes[0].e,1-(f.t-1)*2); }
      return f.t<1.5;
    });

    // گره‌ها
    nodes.forEach((n,i)=>{
      const on = act===-1 || (rel&&rel.has(i));
      const pl = REDUCE?0:Math.sin(frame*.03+i)*(n.type==='service'?.6:1.3);
      const r  = n.rad + pl + (i===act?4:0) + n.e*5;
      const a  = on?1:(focusMode?.14:.3);
      const gs = (r+12)*2;
      ctx.globalAlpha = a*(.55+n.e*.45);
      ctx.drawImage(sprite(n.glow), n.x-gs/2, n.y-gs/2, gs, gs);
      ctx.globalAlpha = a;
      ctx.beginPath(); ctx.arc(n.x,n.y,r,0,6.283);
      ctx.fillStyle = n.type==='hub' ? '#0B1024' : hexA(n.color,.92);
      ctx.fill();
      ctx.lineWidth = (n.type==='hub'?2:1.1)/Math.max(s,.7);
      ctx.strokeStyle = hexA(n.type==='hub'?'#F2C14E':'#FFFFFF',.7);
      ctx.stroke();
      ctx.globalAlpha = 1;
      n.e*=.92;

      if(!fontOK) return;
      const showLbl = n.type!=='service' || mapMode || labelAll || i===act || (rel&&rel.has(i));
      if(!showLbl) return;
      ctx.direction='rtl'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.globalAlpha = on?1:.25;
      if(n.type==='hub'){ ctx.font=`700 ${mapMode?14:15}px ${fam}`; ctx.fillStyle='#FFF';
        ctx.fillText(n.label,n.x,n.y); }
      else if(n.type==='domain'){ ctx.font=`700 12.5px ${fam}`; ctx.fillStyle=hexA(n.color,1);
        ctx.fillText(n.label,n.x,n.y-n.rad-13); }
      else { ctx.font=`400 11px ${fam}`; ctx.fillStyle='#D7DDF5';
        const p=nodes[n.parent];
        const dy = mapMode? 0 : (n.y>p.y? n.rad+12 : -(n.rad+12));
        if(mapMode) ctx.fillText(n.label,n.x,n.y+n.rad+11);
        else ctx.fillText(n.label,n.x,n.y+dy);
      }
      ctx.globalAlpha=1;
    });

    ctx.restore();
    raf=requestAnimationFrame(draw);
  }

  /* ── تعامل ── */
  function showTip(i,mx,my){
    if(i<0){ tip.classList.remove('show'); return; }
    const n=nodes[i];
    tip.querySelector('b').textContent = n.full||n.label;
    const tg=tip.querySelector('.tg');
    tg.textContent = n.tag; tg.style.color = n.type==='hub'?'#F2C14E':n.color;
    tip.querySelector('p').textContent = n.desc;
    const dh=tip.querySelector('.dep-h'), dv=tip.querySelector('.deps');
    if(n.type==='service' && deps[i] && deps[i].length){
      dh.textContent = `وابستگی‌های احتمالی (${fa(deps[i].length)} سرویس):`;
      dv.innerHTML = deps[i].map(j=>`<i style="color:${nodes[j].color}"><span style="color:var(--muted)">${nodes[j].full}</span></i>`).join('');
    } else if(n.type==='domain'){
      const kids=nodes.filter(x=>x.type==='service'&&nodes[x.parent].label===n.label);
      dh.textContent=`سرویس‌های این حوزه (${fa(kids.length)}):`;
      dv.innerHTML=kids.map(k=>`<i style="color:${k.color}"><span style="color:var(--muted)">${k.label}</span></i>`).join('');
    } else { dh.textContent='همه‌ی حوزه‌ها به این هسته وصل‌اند'; dv.innerHTML=''; }
    tip.classList.add('show');
    const w=290, hh=tip.offsetHeight||190;
    let L=mx-w-16; if(L<8) L=mx+16; L=Math.min(Math.max(L,8),W-w-8);
    let T=Math.min(Math.max(my-40,8),Math.max(8,H-hh-8));
    tip.style.left=L+'px'; tip.style.top=T+'px';
  }
  function setHud(i){
    if(i<0){ hudInfo.textContent = mapMode?'نقشه‌ی کامل خدمات':'در حال پردازش سیگنال…'; return; }
    const n=nodes[i];
    hudInfo.textContent = n.type==='service'
      ? `${n.full} — ${fa((deps[i]||[]).length)} وابستگی`
      : n.label;
  }

  cv.addEventListener('mousemove',e=>{
    const b=cv.getBoundingClientRect(), mx=e.clientX-b.left, my=e.clientY-b.top;
    if(dragging){
      dragged=true; ox+=mx-lx; oy+=my-ly; lx=mx; ly=my; return;
    }
    const i=nodeAt(mx,my);
    if(i!==hover){ hover=i; setHud(pinned>-1?pinned:i); }
    cv.style.cursor = i>-1?'pointer':(mapMode?'grab':'crosshair');
    if(pinned<0) showTip(i,mx,my); 
  },{passive:true});
  cv.addEventListener('mouseleave',()=>{ hover=-1; if(pinned<0){showTip(-1);setHud(-1);} });

  cv.addEventListener('mousedown',e=>{
    if(!mapMode) return;
    const b=cv.getBoundingClientRect(); lx=e.clientX-b.left; ly=e.clientY-b.top;
    dragging=true; dragged=false; cv.classList.add('drag');
  });
  addEventListener('mouseup',()=>{ dragging=false; cv.classList.remove('drag'); });

  cv.addEventListener('click',e=>{
    if(dragged){ dragged=false; return; }
    const b=cv.getBoundingClientRect(), mx=e.clientX-b.left, my=e.clientY-b.top;
    const i=nodeAt(mx,my);
    if(i<0){ pinned=-1; showTip(-1); setHud(-1); return; }
    pinned = (pinned===i)? -1 : i;
    showTip(pinned>-1?pinned:-1,mx,my); setHud(pinned);
  });
  cv.addEventListener('dblclick',e=>{
    const b=cv.getBoundingClientRect();
    const i=nodeAt(e.clientX-b.left,e.clientY-b.top);
    if(i<0||nodes[i].type!=='service') return;
    const card=$('svc-'+nodes[i].svc);
    card.scrollIntoView({behavior:'smooth',block:'center'});
    card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash');
  });
  cv.addEventListener('wheel',e=>{
    if(!mapMode) return;
    e.preventDefault();
    const b=cv.getBoundingClientRect(), mx=e.clientX-b.left, my=e.clientY-b.top;
    const k=e.deltaY<0?1.12:1/1.12, ns=Math.min(2.6,Math.max(.35,s*k));
    ox=mx-(mx-ox)*(ns/s); oy=my-(my-oy)*(ns/s); s=ns;
  },{passive:false});

  // لمسی
  let tStart=null;
  cv.addEventListener('touchstart',e=>{
    const b=cv.getBoundingClientRect(), t=e.touches[0];
    tStart={x:t.clientX-b.left,y:t.clientY-b.top};
    lx=tStart.x; ly=tStart.y;
  },{passive:true});
  cv.addEventListener('touchmove',e=>{
    if(!mapMode||!tStart) return;
    const b=cv.getBoundingClientRect(), t=e.touches[0];
    const x=t.clientX-b.left, y=t.clientY-b.top;
    ox+=x-lx; oy+=y-ly; lx=x; ly=y; dragged=true;
  },{passive:true});
  cv.addEventListener('touchend',e=>{
    if(!tStart||dragged){ tStart=null; dragged=false; return; }
    const i=nodeAt(tStart.x,tStart.y);
    pinned = i>-1 ? i : -1;
    showTip(pinned,tStart.x,tStart.y); setHud(pinned); tStart=null;
  });

  /* ── دکمه‌ها ── */
  const btnMap=$('btnMap'), btnFocus=$('btnFocus'), zoomer=$('zoomer');
  btnMap.addEventListener('click',()=>{
    mapMode=!mapMode; target=mapMode?1:0;
    btnMap.classList.toggle('on',mapMode);
    btnMap.textContent = mapMode?'🧠 حالت مغز':'🗺️ حالت نقشه';
    hudMode.textContent = mapMode?'حالت نقشه':'حالت مغز';
    zoomer.style.display = mapMode?'flex':'none';
    pinned=-1; showTip(-1); setHud(-1);
    if(mapMode) fitMap(); else { s=1; ox=0; oy=0; }
    if(!raf) draw();
  });
  btnFocus.addEventListener('click',()=>{
    focusMode=!focusMode; btnFocus.classList.toggle('on',focusMode);
    btnFocus.textContent = focusMode?'✨ تمرکز فعال است':'✨ تمرکز روی وابستگی‌ها';
  });
  const zoom=k=>{ const ns=Math.min(2.6,Math.max(.35,s*k)); ox=W/2-(W/2-ox)*(ns/s); oy=H/2-(H/2-oy)*(ns/s); s=ns; };
  $('zIn').onclick =()=>zoom(1.18);
  $('zOut').onclick=()=>zoom(1/1.18);
  $('zRst').onclick=()=>fitMap();

  /* ── چرخه‌ی رندر ── */
  addEventListener('resize',()=>{ build(); if(!raf)draw(); });
  build();
  const fontApply=()=>{ fam=getComputedStyle(document.body).fontFamily; fontOK=true; };
  fontApply(); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(fontApply);
  setTimeout(fontApply,1200);
  new IntersectionObserver(es=>{ run=es[0].isIntersecting&&!document.hidden; if(run&&!raf)draw(); },{threshold:.02})
    .observe(cv);
  addEventListener('visibilitychange',()=>{ run=!document.hidden; if(run&&!raf)draw(); });
  draw();
})();

/* ═══════════════ افسانه‌ی رنگ‌ها ═══════════════ */
(function(){
  const lg=$('netLegend');
  lg.innerHTML = DOMAINS.map(d=>`<span class="lg" data-go="d-${d.id}"><i style="background:${d.color};box-shadow:0 0 10px ${d.color}"></i>${d.name}</span>`).join('');
  lg.addEventListener('click',e=>{
    const b=e.target.closest('[data-go]'); if(!b) return;
    $(b.dataset.go).scrollIntoView({behavior:'smooth',block:'start'});
  });
})();
