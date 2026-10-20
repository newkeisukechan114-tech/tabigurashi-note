# たびぐらしノート

Astro で作ったサイトです。公開先は Cloudflare Pages。

## 記事の追加
`src/content/articles/` に Markdown ファイルを1つ置くだけで、記事ページと一覧に反映されます。
先頭の `draft: true` の間は公開されません。公開するときは `draft: false` にします。
アフィリエイトリンクを貼る記事は `pr: true` にしてください（記事の先頭に「PR」が出ます）。

## 設定
サイト名・SNSのURL・お問い合わせフォームのURLは `src/data/site.ts` で変更します。

## Cloudflare Pages の設定値
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js のバージョンは `.node-version`（20）が使われます。
