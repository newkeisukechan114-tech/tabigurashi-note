// サイト全体の設定。名前・説明・SNSのURLはここだけ直せば全ページに反映されます。
export const SITE = {
  name: 'たびぐらしノート',
  nameEn: "SUMIMARU'S TRAVEL & LIFE NOTE",
  author: 'すみまる',
  url: 'https://tabigurashi-note.com',
  description:
    '夫婦で世界一周20か国。路上書道の体験と、海外に行く前の準備を、実際にやった人の言葉で記録しています。',
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
