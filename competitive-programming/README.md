# AtCoder Rating

グラフの上端は現在のRating + 400を基本とし、過去最高値も収まる高さにします。「上位%」はAlgorithmの公開プロフィールから取得した割合を表示します。週次更新時にRatingと一緒に取得し、取得できない場合は「—」を表示します。

`atcoder-config.json` の `userId` を変更すると取得対象を変更できます。Algorithm / Heuristicのタブで、各部門のRated履歴・Rating・上位割合を切り替えます。初期表示はAlgorithmです。更新処理は両部門を取得し、両方の履歴の取得成功後にまとめて保存します。未参加の部門は参加履歴がない旨を表示します。

手元で更新するには、プロジェクトのルートで `python scripts/update-atcoder.py` を実行します。成功時のみ `atcoder-rating.json` を置き換え、失敗時は以前のデータを残します。ページはHTTPサーバー経由で開いてください。

## 自動更新の有効化

1. 変更をGitHubのmainブランチへpushします。
2. リポジトリのSettings → Pages → Build and deployment → Sourceを「GitHub Actions」にします。
3. Actionsの「Update rating and deploy Pages」からRun workflowを実行すると、初回公開できます。

毎週日曜01:00（日本時間、UTCでは土曜16:00）に取得・データのコミット・サイト公開を行います。mainへのpush時と手動実行時にも取得・公開します。取得失敗時はワークフローが失敗し、公開済みサイトは維持されます。ブランチ保護でbotのpushを制限している場合は設定の調整が必要です。

GitHub Actionsのスケジュールは混雑で遅れることがあります。また公開リポジトリで60日間活動がないと定期実行が無効になる場合があり、その場合はActionsで再度有効化してください。PCの起動は不要です。

データ取得元：https://atcoder.jp/users/chokudai/history/json
AtCoderの内部JSONは将来仕様変更される可能性があります。閲覧時にはAtCoderへアクセスせず、保存したJSONを利用します。
