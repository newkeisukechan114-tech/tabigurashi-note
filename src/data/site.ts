// サイト全体の設定。名前・説明・SNSのURLはここだけ直せば全ページに反映されます。
export const SITE = {
  name: 'たびぐらしノート',
  nameEn: "SUMIMARU'S TRAVEL & LIFE NOTE",
  author: 'すみまる',
  url: 'https://tabigurashi-note.com',
  description:
    '夫婦で世界一周20カ国。路上書道の体験と、海外に行く前の準備を、実際にやった人の言葉で記録しています。',
  sns: {
    x: 'https://x.com/sumimaru_note',
    instagram: 'https://www.instagram.com/sumimaru_note',
    threads: 'https://www.threads.com/@sumimaru_note',
    note: 'https://note.com/sumimaru_note',
  },
  // お問い合わせ（Googleフォームを作ったらURLを入れる）
  contactFormUrl: '',
};

export const CATEGORIES = [
  { id: 'trip', label: '世界一周の記録' },
  { id: 'calligraphy', label: '路上書道' },
  { id: 'prepare', label: '海外の準備' },
] as const;

// 行った国のスタンプ帳。記事が公開されている国だけ色がつきます。
// slug はその国の記事（src/content/articles/〇〇.md の〇〇）。
export const COUNTRIES = [
  { name: 'ベトナム', slug: 'indrive-nepal-danang' },
  { name: 'ラオス', slug: 'cash-card-by-country' },
  { name: 'タイ', slug: 'cash-card-by-country' },
  { name: 'マレーシア', slug: 'cash-card-by-country' },
  { name: 'ネパール', slug: 'indrive-nepal-danang' },
  { name: 'インド', slug: 'cash-card-by-country' },
  { name: 'ウズベキスタン', slug: 'uzbekistan-airport-city' },
  { name: 'アゼルバイジャン', slug: 'sheki-baku-walk' },
  { name: 'ペルー', slug: 'cash-card-by-country' },
  { name: 'ボリビア', slug: 'cash-card-by-country' },
] as const;
export const TOTAL_COUNTRIES = 20;

// 「今日の一枚」。公開済みの記事に使っている写真だけを入れる（顔・ナンバーは隠した写真）。
export const DAILY_PHOTOS = [
  { img: '/images/indrive-taxi-inside.jpg', cap: 'InDriveで呼んだ車の中から見た、カトマンズの街。', slug: 'indrive-nepal-danang' },
  { img: '/images/nepal-airport-night.jpg', cap: '夜中のトリブバン空港の前。中には入れませんでした。', slug: 'indrive-nepal-danang' },
  { img: '/images/uzbek-airport-cat.jpg', cap: 'タシケント空港の中で会った、人懐っこい猫。', slug: 'uzbekistan-airport-city' },
  { img: '/images/uzbek-metro.jpg', cap: 'タシケントの地下鉄の駅。天井や柱に装飾がありました。', slug: 'uzbekistan-airport-city' },
  { img: '/images/cash-nepal-chai.jpg', cap: 'ネパールのローカル食堂で、チャイをいただきました。', slug: 'cash-card-by-country' },
  { img: '/images/cash-vietnam-xoi.jpg', cap: 'ホーチミンのローカル食堂のごはん。とてもおいしかった！', slug: 'cash-card-by-country' },
  { img: '/images/cash-india-rickshaw.jpg', cap: 'インドの道を走る、オートリキシャ。', slug: 'cash-card-by-country' },
  { img: '/images/cash-bolivia-minibus.jpg', cap: 'ボリビア・ラパスのミニブスの車内。', slug: 'cash-card-by-country' },
] as const;

// 猫のすみまるのひとこと。記事に書いた内容から作る。
export const CAT_SAYS = [
  '今日は、どこの国の話を読む？',
  '両替は、手数料込みか聞いてみてね。',
  'ネパールのチャイ、おいしかったよ。',
  'カードの保険は、出発前に条件を確認してね。',
  'InDriveは、アプリの相場の目安が心強かったよ。',
  'タシケントの空港で、猫に会ったよ。',
  '荷物が多い日は、ちょっと大変だよ。',
  '空港の前で夜を明かした日もあったよ。',
] as const;
