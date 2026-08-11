const store = {
  name: "炭焼地鶏と旬鮮野菜 とさか - 那覇 居酒屋",
  shortName: "炭焼地鶏と旬鮮野菜 とさか",
  romanizedName: "Sumiyaki Jidori to Shunsen Yasai Tosaka",
  address: "〒900-0013 沖縄県那覇市牧志1丁目13−19",
  phone: "080-1034-0280",
  phoneHref: "tel:08010340280",
  hours: "18:00〜0:00",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%84%BC%E5%9C%B0%E9%B6%8F%E3%81%A8%E6%97%AC%E9%AE%AE%E9%87%8E%E8%8F%9C%20%E3%81%A8%E3%81%95%E3%81%8B%20%E9%82%A3%E8%A6%87",
  reserveUrl: "https://www.hotpepper.jp/strJ001144660/yoyaku/",
  hotpepperUrl: "https://www.hotpepper.jp/strJ001144660/",
  tabelogUrl: "https://tabelog.com/okinawa/A4701/A470101/47015352/",
  instagramUrl: "https://www.instagram.com/naha_tosaka/",
  relatedSiteUrl: "https://subsaku.com/zidoriyasaitosaka/",
};

const menuItems = [
  { title: "おまかせ串5本", price: "1,045円（税込）", note: "香ばしい地鶏焼き鳥を5本で。" },
  { title: "若鶏の半身揚げ", price: "1,100円（税込）", note: "若鶏の半身を豪快に揚げた一品。" },
  { title: "ねぎま", price: "231円（税込）", note: "炭火で一本ずつ焼き上げる定番串。" },
  { title: "つくね", price: "231円（税込）", note: "焼き鳥と一緒に楽しみたい一本。" },
  { title: "手羽", price: "297円（税込）", note: "鶏料理専門店ならではの串。" },
  { title: "ささみ（梅・わさび）", price: "231円（税込）", note: "梅またはわさびでどうぞ。" },
];

const jpKeywords = [
  "炭焼地鶏と旬鮮野菜 とさか", "とさか 那覇", "とさか 牧志", "とさか 美栄橋", "那覇 居酒屋", "牧志 居酒屋", "美栄橋 居酒屋", "久茂地 居酒屋", "那覇 焼き鳥", "牧志 焼き鳥", "美栄橋 焼き鳥", "那覇 鳥料理", "那覇 地鶏", "那覇 炭火焼き", "那覇 炭火焼き鳥", "牧志 炭火焼き鳥", "美栄橋 炭火焼き鳥", "沖縄 焼き鳥", "沖縄 地鶏料理", "沖縄 居酒屋", "那覇 県産野菜", "牧志 旬野菜", "旬鮮野菜 居酒屋", "地鶏と野菜", "焼き鳥と日本酒", "那覇 日本酒", "牧志 日本酒", "美栄橋 日本酒", "那覇 焼酎", "那覇 ワイン 居酒屋", "若鶏 半身揚げ 那覇", "おまかせ串 那覇", "ねぎま 那覇", "つくね 那覇", "手羽 那覇", "ささみ串 那覇", "希少部位 焼き鳥 那覇", "石垣黒鶏 那覇", "朝引き若鶏 那覇", "炭の香り 焼き鳥", "一本ずつ焼く 焼き鳥", "那覇 ディナー", "牧志 ディナー", "美栄橋 ディナー", "那覇 夜ごはん", "那覇 夕食", "牧志 夕食", "那覇 予約 居酒屋", "那覇 ネット予約", "とさか 予約", "とさか 電話", "とさか 営業時間", "とさか 住所", "とさか アクセス", "とさか メニュー", "とさか 焼き鳥", "とさか 地鶏", "とさか 半身揚げ", "とさか 日本酒", "美栄橋駅 徒歩", "美栄橋駅 近く 居酒屋", "美栄橋駅 近く 焼き鳥", "久茂地橋 近く 居酒屋", "久茂地橋交差点 居酒屋", "松尾交差点 居酒屋", "沖縄海邦銀行本店 近く", "牧志1丁目 居酒屋", "牧志1-13-19", "那覇市牧志 グルメ", "那覇市牧志 レストラン", "国際通り 周辺 居酒屋", "県庁前 周辺 居酒屋", "国際通り 周辺 焼き鳥", "那覇 カウンター 居酒屋", "那覇 掘りごたつ", "那覇 半個室 居酒屋", "那覇 貸切 居酒屋", "那覇 30席 居酒屋", "牧志 カウンター 焼き鳥", "美栄橋 カウンター 焼き鳥", "那覇 クレジットカード 居酒屋", "那覇 全席喫煙可", "那覇 喫煙可能 居酒屋", "那覇 駐車場なし 居酒屋", "那覇 コインパーキング 近く", "那覇 宴会 居酒屋", "牧志 宴会", "美栄橋 宴会", "那覇 飲み放題", "牧志 飲み放題", "美栄橋 飲み放題", "那覇 コース予約", "牧志 コース予約", "那覇 当日予約", "那覇 18時 営業", "那覇 深夜0時まで", "美栄橋 18時 開店", "那覇 料理ラストオーダー23時", "那覇 ドリンクラストオーダー23時30分", "沖縄県 那覇市 牧志 居酒屋", "那覇 単独店 居酒屋", "沖縄のとさか", "那覇 地元食材 居酒屋", "沖縄県産若鶏", "沖縄県産野菜 居酒屋", "旬の食材 那覇", "炭火串焼き 牧志", "地鶏串焼き 美栄橋", "鶏料理専門居酒屋", "焼き鳥専門居酒屋 那覇", "那覇 グルメ予約", "牧志 グルメ予約", "美栄橋 グルメ予約", "那覇 ホットペッパー予約", "那覇 食べログ予約", "那覇 Googleマップ 居酒屋", "とさか Instagram", "naha tosaka", "炭焼地鶏 とさか 沖縄", "旬鮮野菜 とさか 那覇", "炭焼地鶏 牧志", "焼き鳥 牧志1丁目", "那覇 夕方から 居酒屋", "那覇 夜営業 焼き鳥", "美栄橋 夜営業 居酒屋", "牧志 夜営業 居酒屋", "那覇 お酒と焼き鳥", "那覇 鶏料理と野菜", "沖縄旅行 那覇 居酒屋", "那覇 観光 夕食", "美栄橋 観光 夕食", "那覇市中心部 焼き鳥", "牧志 久茂地橋 グルメ", "美栄橋駅 306m", "久茂地橋 徒歩1分", "松尾交差点 徒歩4分", "沖縄海邦銀行本店 徒歩2分", "とさか 電子マネー不可", "とさか QR決済不可", "とさか クレジットカード", "とさか カウンター席", "とさか 掘りごたつ", "とさか 半個室", "とさか 貸切", "とさか 喫煙", "とさか 駐車場", "とさか 料金", "とさか 予算", "とさか コース", "とさか 飲み放題", "とさか 若鶏", "とさか 石垣黒鶏", "とさか 希少部位", "とさか 県産野菜", "とさか 旬野菜", "とさか ワイン", "とさか 焼酎", "とさか 日本酒", "那覇 焼き鳥 予約", "牧志 焼き鳥 予約", "美栄橋 焼き鳥 予約", "沖縄 焼き鳥 予約", "那覇 居酒屋 電話予約", "那覇 居酒屋 ネット予約", "牧志 居酒屋 ネット予約", "美栄橋 居酒屋 ネット予約", "那覇 ひとり 焼き鳥", "那覇 カウンター席", "那覇 テーブル席", "那覇 掘りごたつ席", "那覇 半個室 最大10名", "那覇 グループ 居酒屋", "那覇 炭火の焼き鳥", "那覇 串焼き セット", "那覇 鶏の半身揚げ", "那覇 プレミアムモルツ", "那覇 サワー カクテル", "那覇 泡盛 焼酎", "那覇 晩ごはん 焼き鳥", "那覇 牧志 18時", "那覇 牧志 0時まで", "那覇 美栄橋 予約", "那覇 久茂地橋 焼き鳥", "牧志 地鶏専門居酒屋", "美栄橋 地鶏専門居酒屋", "沖縄 地鶏専門居酒屋", "那覇 焼き鳥 店舗情報", "那覇 居酒屋 店舗情報", "那覇 焼き鳥 営業時間", "那覇 居酒屋 営業時間", "那覇 焼き鳥 アクセス", "那覇 居酒屋 アクセス", "那覇 焼き鳥 メニュー", "那覇 居酒屋 メニュー", "那覇 焼き鳥 電話番号", "牧志 居酒屋 電話番号", "美栄橋 焼き鳥 電話番号", "とさか 沖縄県那覇市", "炭焼地鶏と旬鮮野菜とさか", "炭焼地鶏と旬鮮野菜　とさか", "那覇市 とさか", "牧志 とさか", "美栄橋 とさか", "沖縄 とさか 居酒屋", "沖縄 とさか 焼き鳥", "那覇 居酒屋 とさか", "那覇 焼き鳥 とさか",
];

const enKeywords = [
  "Sumiyaki Jidori to Shunsen Yasai Tosaka", "Tosaka Naha", "Tosaka Makishi", "Tosaka Miebashi", "Tosaka Okinawa", "Naha izakaya", "Makishi izakaya", "Miebashi izakaya", "Kumoji izakaya", "Naha yakitori", "Makishi yakitori", "Miebashi yakitori", "Okinawa yakitori", "Naha chicken restaurant", "Naha charcoal grilled chicken", "Makishi charcoal grilled chicken", "Miebashi charcoal grilled chicken", "Naha jidori chicken", "Okinawa local chicken", "Naha seasonal vegetables", "Okinawa vegetables restaurant", "yakitori and vegetables Naha", "Japanese izakaya Naha", "Japanese restaurant Makishi", "Japanese restaurant Miebashi", "local dining Naha", "local dining Makishi", "Naha dinner restaurant", "Makishi dinner", "Miebashi dinner", "Naha evening dining", "Naha nightlife restaurant", "Naha restaurant reservation", "Makishi restaurant reservation", "Miebashi restaurant reservation", "Tosaka reservation", "Tosaka phone number", "Tosaka opening hours", "Tosaka address", "Tosaka directions", "Tosaka menu", "Tosaka yakitori", "Tosaka chicken", "Tosaka seasonal vegetables", "Tosaka Japanese sake", "Tosaka shochu", "Tosaka wine", "restaurant near Miebashi Station", "izakaya near Miebashi Station", "yakitori near Miebashi Station", "Miebashi Station dinner", "restaurant near Kumoji Bridge", "Kumoji Bridge izakaya", "Makishi 1 chome restaurant", "restaurant 1-13-19 Makishi", "Naha city center izakaya", "Naha city center yakitori", "restaurant near Kokusai Dori", "izakaya near Kokusai Dori", "yakitori near Kokusai Dori", "restaurant near Kenchomae", "Naha counter seat izakaya", "Naha counter seat yakitori", "Naha table seating izakaya", "Naha semi private room", "Naha horigotatsu seating", "Naha group dining", "Naha party izakaya", "Naha course reservation", "Naha all you can drink", "Makishi all you can drink", "Miebashi all you can drink", "Naha Japanese sake bar", "Makishi Japanese sake", "Miebashi Japanese sake", "Naha shochu restaurant", "Naha wine izakaya", "Naha assorted yakitori", "five yakitori skewers", "half fried chicken Naha", "chicken wing yakitori", "negima skewer Naha", "tsukune skewer Naha", "sasami skewer Naha", "rare chicken cuts Naha", "Ishigaki black chicken", "Okinawa fresh chicken", "charcoal aroma yakitori", "hand grilled yakitori", "Naha restaurant open 6 pm", "Naha restaurant until midnight", "Makishi restaurant until midnight", "Miebashi restaurant open late", "Naha food last order 11 pm", "Naha drink last order 11 30 pm", "Naha credit card restaurant", "Naha smoking izakaya", "smoking permitted restaurant Naha", "Naha adult only izakaya", "Naha no parking restaurant", "coin parking near Tosaka", "Naha dinner booking", "Makishi dinner booking", "Miebashi dinner booking", "Naha online reservation", "Makishi online reservation", "Miebashi online reservation", "Naha phone reservation", "Tosaka Hot Pepper", "Tosaka Tabelog", "Tosaka Instagram", "naha tosaka Instagram", "Tosaka Google Maps", "charcoal grilled jidori Naha", "seasonal fresh vegetables Naha", "yakitori specialty izakaya", "chicken specialty izakaya Naha", "Okinawa izakaya reservation", "Okinawa yakitori reservation", "Naha local ingredients", "Okinawa local produce dining", "seasonal ingredients Naha", "Naha sake and yakitori", "Naha chicken and vegetables", "Makishi local dining", "Miebashi local dining", "Okinawa travel dinner Naha", "Naha visitor dinner", "Miebashi visitor dinner", "Naha evening izakaya", "Makishi evening izakaya", "Miebashi evening izakaya", "Naha affordable dinner", "Naha yakitori menu", "Makishi izakaya menu", "Miebashi yakitori menu", "Tosaka price range", "Tosaka dining information", "Tosaka access guide", "Tosaka booking guide", "Naha restaurant directions", "Makishi restaurant directions", "Miebashi restaurant directions", "one minute from Kumoji Bridge", "four minutes from Matsuo intersection", "two minutes from Kaiho Bank", "306 meters from Miebashi Station", "Naha Okinawa 900-0013", "Makishi Naha Okinawa restaurant", "Tosaka Naha Okinawa Japan", "Sumiyaki chicken Naha", "Jidori yakitori Okinawa", "shunsen yasai restaurant", "Tosaka charcoal chicken", "Tosaka fried half chicken", "Tosaka assorted skewers", "Tosaka negima", "Tosaka tsukune", "Tosaka chicken wings", "Tosaka sasami", "Tosaka sake selection", "Tosaka course menu", "Tosaka drink menu", "Tosaka seating", "Tosaka counter seating", "Tosaka semi private seating", "Tosaka smoking policy", "Tosaka parking information", "Tosaka payment methods", "Naha Japanese dinner", "Makishi Japanese dinner", "Miebashi Japanese dinner", "Okinawa Japanese dining", "Naha local izakaya", "Makishi local izakaya", "Miebashi local izakaya", "Naha charcoal skewer restaurant", "Makishi charcoal skewer restaurant", "Miebashi charcoal skewer restaurant", "Naha poultry cuisine", "Makishi chicken cuisine", "Miebashi chicken cuisine", "Naha seasonal food", "Makishi seasonal food", "Okinawa vegetable dishes", "Naha dinner with sake", "Naha dinner with shochu", "Naha dinner with wine", "Naha group reservation", "Makishi group reservation", "Miebashi group reservation", "Naha restaurant for adults", "Naha central restaurant", "Makishi nightlife dining", "Miebashi nightlife dining", "Tosaka Naha hours", "Tosaka Naha location", "Tosaka Naha contact", "Tosaka Naha booking", "Tosaka Naha dining", "Tosaka Naha restaurant", "Tosaka Naha izakaya", "Tosaka Naha yakitori", "Tosaka Okinawa hours", "Tosaka Okinawa address", "Tosaka Okinawa reservation", "Tosaka Makishi restaurant", "Tosaka Miebashi restaurant", "Naha dining near monorail", "restaurant near Yui Rail Miebashi", "yakitori near Yui Rail", "Naha station area izakaya", "Naha chicken dinner", "Naha grilled chicken dinner", "Okinawa charcoal dining", "Naha izakaya opening hours", "Naha izakaya address", "Naha izakaya phone", "Naha yakitori opening hours", "Naha yakitori address", "Naha yakitori phone", "Makishi yakitori reservation", "Miebashi yakitori reservation", "restaurant map Naha", "Tosaka restaurant map", "directions to Tosaka", "book Tosaka Naha", "call Tosaka Naha", "dinner at Tosaka", "yakitori at Tosaka", "Japanese sake at Tosaka", "seasonal vegetables at Tosaka", "charcoal chicken at Tosaka", "Okinawa Tosaka izakaya", "Naha Tosaka restaurant", "Makishi Tosaka izakaya", "Miebashi Tosaka yakitori",
];

const faq = [
  {
    q: "住所はどこですか？",
    a: `${store.address}です。久茂地橋交差点から徒歩約1分、美栄橋駅から約306mです。`,
  },
  {
    q: "営業時間は何時ですか？",
    a: `Googleビジネスプロフィールの現行表示は各日${store.hours}です。料理ラストオーダー23:00、ドリンクラストオーダー23:30。祝日などは変更される場合があるため、来店前に最新情報をご確認ください。`,
  },
  {
    q: "予約できますか？",
    a: "予約できます。ネット予約または電話で受け付けています。所在地が沖縄県那覇市の店舗であることをご確認ください。",
  },
  {
    q: "どのような料理がありますか？",
    a: "炭火焼き鳥、若鶏の半身揚げ、地鶏料理、旬の県産野菜を使った料理などがあります。仕入れ状況により内容が変わる場合があります。",
  },
  {
    q: "席や喫煙条件を教えてください。",
    a: "30席で、カウンター、テーブル、掘りごたつの半個室があります。全席喫煙可のため未成年の方は入店できません。",
  },
  {
    q: "駐車場はありますか？",
    a: "専用駐車場はありません。近隣のコインパーキングをご利用ください。",
  },
];

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  alternateName: [store.shortName, store.romanizedName],
  description:
    "那覇市牧志で炭火焼き鳥、地鶏料理、県産の旬野菜を提供する居酒屋。",
  url: "https://tosaka-naha-izakaya.vercel.app/",
  telephone: store.phone,
  address: {
    "@type": "PostalAddress",
    postalCode: "900-0013",
    addressRegion: "沖縄県",
    addressLocality: "那覇市",
    streetAddress: "牧志1丁目13−19",
    addressCountry: "JP",
  },
  servesCuisine: ["居酒屋", "焼き鳥", "鳥料理", "Japanese", "Yakitori"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:00",
      closes: "00:00",
    },
  ],
  hasMap: store.mapUrl,
  acceptsReservations: store.reserveUrl,
  sameAs: [store.hotpepperUrl, store.tabelogUrl, store.instagramUrl, store.relatedSiteUrl],
  smokingAllowed: true,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="ページ上部へ">
          <span className="brandMark">と</span>
          <span>とさか</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#features">特徴</a>
          <a href="#menu">料理</a>
          <a href="#information">店舗情報</a>
          <a href="#english">English</a>
        </nav>
        <a className="headerCta" href={store.reserveUrl} target="_blank" rel="noopener noreferrer">
          席を予約 <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroTexture" aria-hidden="true" />
          <div className="heroContent">
            <p className="eyebrow">NAHA · MAKISHI · YAKITORI</p>
            <h1>
              <span>炭焼地鶏と旬鮮野菜</span>
              <strong>とさか</strong>
              <small>那覇 居酒屋</small>
            </h1>
            <p className="heroLead">
              炭の高火力で一本ずつ焼き上げる地鶏の串。
              <br />県産の旬野菜と、全国から選ぶ日本酒を那覇・牧志で。
            </p>
            <div className="heroActions">
              <a className="primaryButton" href={store.reserveUrl} target="_blank" rel="noopener noreferrer">
                ネットで予約する <Arrow />
              </a>
              <a className="textButton" href={store.phoneHref}>電話する {store.phone}</a>
            </div>
          </div>
          <div className="heroSide" aria-label="営業案内">
            <div className="verticalWord">火と旬</div>
            <div className="openCard">
              <span>OPEN</span>
              <strong>18:00</strong>
              <span>— 0:00</span>
              <small>Hours may vary on holidays.</small>
            </div>
          </div>
        </section>

        <section className="quickFacts" aria-label="基本案内">
          <div><span>場所</span><strong>那覇市牧志</strong><small>美栄橋駅から約306m</small></div>
          <div><span>営業時間</span><strong>{store.hours}</strong><small>祝日等は変更の場合あり</small></div>
          <div><span>料理</span><strong>焼き鳥・鳥料理</strong><small>地鶏と県産の旬野菜</small></div>
          <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">Google マップ <Arrow /></a>
        </section>

        <section className="intro section" id="features">
          <div className="sectionLabel"><span>01</span> ABOUT TOSAKA</div>
          <div className="introGrid">
            <h2>炭火が引き出す、<br />鶏と野菜の輪郭。</h2>
            <div className="introCopy">
              <p>
                「炭焼地鶏と旬鮮野菜 とさか」は、沖縄県那覇市牧志にある焼き鳥・鳥料理の居酒屋です。県産の朝引き若鶏や石垣黒鶏、季節の食材を扱い、炭の香りをまとわせて丁寧に仕上げます。
              </p>
              <p>
                美栄橋駅から約306m。久茂地橋交差点から徒歩約1分の場所で、カウンター席、テーブル席、掘りごたつの半個室をご用意しています。
              </p>
            </div>
          </div>
          <div className="featureCards">
            <article><b>01</b><h3>炭火焼き鳥</h3><p>高火力の炭で、香りを入れながら一本ずつ焼き上げます。</p></article>
            <article><b>02</b><h3>県産の旬野菜</h3><p>素材の味を生かす調理で、季節の野菜を楽しめます。</p></article>
            <article><b>03</b><h3>鶏料理と日本酒</h3><p>若鶏の半身揚げや希少部位、各地の日本酒も取り揃えています。</p></article>
          </div>
        </section>

        <section className="menuSection section" id="menu">
          <div className="sectionLabel light"><span>02</span> FOOD &amp; DRINK</div>
          <div className="menuHeading">
            <h2>まずは、<br />炭の一本から。</h2>
            <p>掲載価格は確認時点のものです。仕入れや季節により、料理・価格は変更される場合があります。</p>
          </div>
          <div className="menuList">
            {menuItems.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.note}</p></div>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>
          <div className="menuLinks">
            <a href={`${store.hotpepperUrl}food/`} target="_blank" rel="noopener noreferrer">料理メニューを見る <Arrow /></a>
            <a href={`${store.hotpepperUrl}course/`} target="_blank" rel="noopener noreferrer">コースを見る <Arrow /></a>
            <a href={`${store.hotpepperUrl}drink/`} target="_blank" rel="noopener noreferrer">ドリンクを見る <Arrow /></a>
          </div>
        </section>

        <section className="infoSection section" id="information">
          <div className="sectionLabel"><span>03</span> INFORMATION</div>
          <div className="infoGrid">
            <div>
              <h2>店舗情報</h2>
              <p className="infoIntro">ご予約・お問い合わせの際は、沖縄県那覇市牧志の店舗であることをご確認ください。</p>
              <dl className="facts">
                <div><dt>店名</dt><dd>{store.name}</dd></div>
                <div><dt>住所</dt><dd>{store.address}</dd></div>
                <div><dt>電話</dt><dd><a href={store.phoneHref}>{store.phone}</a></dd></div>
                <div><dt>営業時間</dt><dd>{store.hours}<small>料理L.O. 23:00／ドリンクL.O. 23:30<br />祝日等は変更の場合があります。</small></dd></div>
                <div><dt>ジャンル</dt><dd>居酒屋、焼き鳥、鳥料理</dd></div>
                <div><dt>席</dt><dd>30席（カウンター、テーブル、掘りごたつの半個室）</dd></div>
                <div><dt>支払い</dt><dd>クレジットカード可／電子マネー・QRコード決済不可</dd></div>
                <div><dt>喫煙</dt><dd>全席喫煙可<small>未成年の方は入店できません。</small></dd></div>
                <div><dt>駐車場</dt><dd>専用駐車場なし<small>近隣にコインパーキングあり。</small></dd></div>
              </dl>
            </div>
            <aside className="accessCard" id="access">
              <span className="stamp">牧志</span>
              <p className="eyebrow">ACCESS</p>
              <h3>美栄橋駅から<br />歩いて約5分。</h3>
              <ul>
                <li>久茂地橋交差点から徒歩約1分</li>
                <li>松尾交差点から徒歩約4分</li>
                <li>沖縄海邦銀行本店から徒歩約2分</li>
                <li>美栄橋駅から約306m</li>
              </ul>
              <a className="primaryButton" href={store.mapUrl} target="_blank" rel="noopener noreferrer">Google マップで開く <Arrow /></a>
            </aside>
          </div>
        </section>

        <section className="faqSection section" id="faq">
          <div className="sectionLabel"><span>04</span> FAQ</div>
          <div className="faqGrid">
            <h2>よくあるご質問</h2>
            <div>
              {faq.map((item) => (
                <details key={item.q}>
                  <summary><span>{item.q}</span><i aria-hidden="true">＋</i></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="englishSection section" id="english" lang="en">
          <div className="sectionLabel light"><span>05</span> ENGLISH GUIDE</div>
          <div className="englishGrid">
            <div>
              <p className="eyebrow">NAHA, OKINAWA</p>
              <h2>Charcoal fire.<br />Seasonal flavor.<br />One skewer at a time.</h2>
            </div>
            <div className="englishCopy">
              <h3>{store.romanizedName}</h3>
              <p>
                Tosaka is a Japanese izakaya specializing in charcoal-grilled yakitori, chicken dishes and seasonal Okinawan vegetables in Makishi, Naha. The restaurant is about 306 meters from Miebashi Station and one minute on foot from the Kumoji Bridge intersection.
              </p>
              <dl>
                <div><dt>Address</dt><dd>1-13-19 Makishi, Naha, Okinawa 900-0013, Japan</dd></div>
                <div><dt>Hours</dt><dd>6:00 PM–12:00 AM. Holiday hours may vary.</dd></div>
                <div><dt>Reservations</dt><dd>Online or by phone: <a href={store.phoneHref}>{store.phone}</a></dd></div>
                <div><dt>Dining notes</dt><dd>Smoking is permitted throughout the restaurant, so minors cannot enter. There is no private parking.</dd></div>
              </dl>
              <div className="englishActions">
                <a href={store.reserveUrl} target="_blank" rel="noopener noreferrer">Reserve online <Arrow /></a>
                <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">Open Google Maps <Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="linksSection section">
          <div className="sectionLabel"><span>06</span> LINKS</div>
          <h2>予約・公式情報</h2>
          <div className="linkGrid">
            <a href={store.hotpepperUrl} target="_blank" rel="noopener noreferrer"><span>予約・メニュー</span><strong>HOT PEPPER Gourmet</strong><Arrow /></a>
            <a href={store.instagramUrl} target="_blank" rel="noopener noreferrer"><span>公式SNS</span><strong>Instagram</strong><Arrow /></a>
            <a href={store.tabelogUrl} target="_blank" rel="noopener noreferrer"><span>店舗情報・予約</span><strong>食べログ</strong><Arrow /></a>
            <a href={store.relatedSiteUrl} target="_blank" rel="noopener noreferrer"><span>関連ページ</span><strong>店舗案内</strong><Arrow /></a>
          </div>
        </section>

        <section className="searchTerms section" aria-label="関連検索語">
          <details>
            <summary>関連する日本語の検索語 <span>{jpKeywords.length} terms</span></summary>
            <p>{jpKeywords.join(" ／ ")}</p>
          </details>
          <details lang="en">
            <summary>Related search terms in English <span>{enKeywords.length} terms</span></summary>
            <p>{enKeywords.join(" · ")}</p>
          </details>
        </section>

        <section className="finalCta">
          <p className="eyebrow">炭焼地鶏と旬鮮野菜 とさか</p>
          <h2>今夜は、炭火のそばへ。</h2>
          <p>{store.address}</p>
          <div>
            <a className="primaryButton" href={store.reserveUrl} target="_blank" rel="noopener noreferrer">席を予約する <Arrow /></a>
            <a className="outlineButton" href={store.mapUrl} target="_blank" rel="noopener noreferrer">地図を見る <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerBrand"><span className="brandMark">と</span><strong>炭焼地鶏と旬鮮野菜 とさか - 那覇 居酒屋</strong></div>
        <p>{store.address}<br /><a href={store.phoneHref}>{store.phone}</a></p>
        <p className="copyright">© {new Date().getFullYear()} 炭焼地鶏と旬鮮野菜 とさか</p>
      </footer>
    </>
  );
}
