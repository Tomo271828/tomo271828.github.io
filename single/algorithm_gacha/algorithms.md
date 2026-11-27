# アルゴリズムガチャ 選出テーブル

アルゴリズム・データ構造に加え、その土台となる基本概念も含む学習テーマ集です。問題は AtCoder・Library Checker の出題例、資料は解説記事・教科書・公式ドキュメント・参考実装です。網羅的な一覧ではありません。出題例は唯一の解法を示すものではありません。

このファイルの次の表をページが直接読み込みます。1行につき1テーマ、各行を同じ確率で独立に抽選します。

| テーマ | 分野 | 概要 | 出題例 | 資料 |
| --- | --- | --- | --- | --- |
| Union-Find（DSU） | データ構造 | 集合の併合と、同じ集合に属するかの判定を効率よく行う。 | [ACL Practice A — Disjoint Set Union](https://atcoder.jp/contests/practice2/tasks/practice2_a) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/union-find.hpp) |
| Fenwick Tree（BIT） | データ構造 | 一点への加算と区間和を、対数時間で処理する。 | [ACL Practice B — Fenwick Tree](https://atcoder.jp/contests/practice2/tasks/practice2_b) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/binary-indexed-tree.hpp) |
| floor_sum | 数学 | 一次式を割って切り捨てた値の総和を、ユークリッドの互除法に似た縮約で求める。 | [ACL Practice C — Floor Sum](https://atcoder.jp/contests/practice2/tasks/practice2_c) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/floor-sum.hpp) |
| 最大流 | グラフ | 辺の容量制約のもとで、始点から終点へ流せる量を最大化する。 | [ACL Practice D — Maxflow](https://atcoder.jp/contests/practice2/tasks/practice2_d) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/flow/dinic.hpp) |
| 最小費用流 | グラフ | 各辺の容量と費用を考慮し、必要な流量を最小の費用で流す。 | [ACL Practice E — MinCostFlow](https://atcoder.jp/contests/practice2/tasks/practice2_e) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/flow/primal-dual.hpp) |
| NTT（高速数論変換） | 数学 | 有限体上の変換を使い、多項式の畳み込みを高速に計算する。 | [ACL Practice F — Convolution](https://atcoder.jp/contests/practice2/tasks/practice2_f) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/ntt/ntt.hpp) |
| 強連結成分分解（SCC） | グラフ | 有向グラフを、互いに行き来できる頂点のまとまりへ分解する。 | [ACL Practice G — SCC](https://atcoder.jp/contests/practice2/tasks/practice2_g) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/connected-components/strongly-connected-components.hpp) |
| 2-SAT | グラフ | 2つのリテラルからなる節の論理式を、含意グラフと強連結成分で解く。 | [ACL Practice H — Two SAT](https://atcoder.jp/contests/practice2/tasks/practice2_h) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/two-sat.hpp) |
| 接尾辞配列・LCP配列 | 文字列 | 接尾辞を辞書順に並べ、隣り合う接尾辞の共通接頭辞長を利用する。 | [ACL Practice I — Number of Substrings](https://atcoder.jp/contests/practice2/tasks/practice2_i) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/string/lcp-array.hpp) |
| セグメント木 | データ構造 | 区間の情報を木で管理し、一点更新や区間の集約を対数時間で処理する。 | [ACL Practice J — Segment Tree](https://atcoder.jp/contests/practice2/tasks/practice2_j) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/segment-tree/segment-tree.hpp) |
| 遅延評価セグメント木 | データ構造 | 区間への更新を必要な時点まで遅らせ、区間更新と区間集約を効率化する。 | [ACL Practice K — Range Affine Range Sum](https://atcoder.jp/contests/practice2/tasks/practice2_k) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/segment-tree/lazy-segment-tree.hpp) |
| 動的計画法（DP） | 動的計画法 | 状態ごとの答えを保存し、小さな部分問題から全体の答えを組み立てる。 | [EDPC A — Frog 1](https://atcoder.jp/contests/dp/tasks/dp_a) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/dynamic-programming/) |
| ナップサックDP | 動的計画法 | 品物を順に処理し、重さや価値を状態として選択の最適値を求める。 | [EDPC D — Knapsack 1](https://atcoder.jp/contests/dp/tasks/dp_d) | [北海道大学競プロサークル（EDPC日本語解説）](https://hcpc-hokudai.github.io/archive/dynamic_programming_edpc_001.pdf) |
| 最長共通部分列（LCS） | 文字列 | 2つの列の接頭辞を状態にして、共通する部分列の最長の長さを求める。 | [EDPC F — LCS](https://atcoder.jp/contests/dp/tasks/dp_f) | [kyopro_friends（LCSの日本語解説）](https://kyopro-friends.hatenablog.com/entry/2019/01/12/231000) |
| トポロジカルソート・DAG DP | グラフ | 有向非巡回グラフを依存関係の順に処理し、経路などの情報を更新する。 | [EDPC G — Longest Path](https://atcoder.jp/contests/dp/tasks/dp_g) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/others/topological-sort.hpp) |
| 確率DP | 動的計画法 | 各状態に到達する確率を持ち、遷移確率を掛けて次の状態へ配る。 | [EDPC I — Coins](https://atcoder.jp/contests/dp/tasks/dp_i) | [埼玉大学Maximum（確率DP・期待値DP）](https://blog.maximum.vc/blog/2023/intro-course/8/) |
| 期待値DP | 動的計画法 | 状態ごとに残りの操作回数などの期待値を置き、期待値の方程式を解く。 | [EDPC J — Sushi](https://atcoder.jp/contests/dp/tasks/dp_j) | [埼玉大学Maximum（確率DP・期待値DP）](https://blog.maximum.vc/blog/2023/intro-course/8/) |
| 区間DP | 動的計画法 | 連続区間を状態にし、分割位置や両端の選択から答えを求める。 | [EDPC N — Slimes](https://atcoder.jp/contests/dp/tasks/dp_n) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/range-dp/) |
| bit DP（部分集合DP） | 動的計画法 | 選んだ要素の集合をビット列で表し、部分集合間の遷移を計算する。 | [EDPC O — Matching](https://atcoder.jp/contests/dp/tasks/dp_o) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/bit-dp/) |
| 木DP | 動的計画法 | 木の子から親へ部分木の情報をまとめ、木全体の答えを求める。 | [EDPC P — Independent Set](https://atcoder.jp/contests/dp/tasks/dp_p) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/tree-dp/) |
| 全方位木DP | 動的計画法 | 親側と子側の情報を受け渡し、すべての頂点を根とした答えを求める。 | [EDPC V — Subtree](https://atcoder.jp/contests/dp/tasks/dp_v) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/tree-dp/) |
| 桁DP | 動的計画法 | 上限との大小関係や条件に必要な情報を持ち、数を桁ごとに数え上げる。 | [EDPC S — Digit Sum](https://atcoder.jp/contests/dp/tasks/dp_s) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/digit-dp/) |
| 行列累乗 | 数学 | 線形な遷移を行列で表し、二乗法で多数回の遷移をまとめて計算する。 | [EDPC R — Walk](https://atcoder.jp/contests/dp/tasks/dp_r) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/matrix.hpp) |
| 答えで二分探索 | 探索 | 答えの候補に対する可否判定が単調になることを利用し、境界を探す。 | [典型90 001 — Yokan Party](https://atcoder.jp/contests/typical90/tasks/typical90_a) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/binary-search/) |
| 幅優先探索（BFS） | グラフ | 始点から近い順に頂点を訪れ、重みのないグラフの最短距離を求める。 | [典型90 054 — Takahashi Number](https://atcoder.jp/contests/typical90/tasks/typical90_bb) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/shortest-path/bfs-restore.hpp) |
| 深さ優先探索（DFS）・バックトラック | 探索 | 進める先を深く探索し、状態を戻しながら経路や選択を列挙する。 | [典型90 072 — Loop Railway Plan](https://atcoder.jp/contests/typical90/tasks/typical90_bt) | [Algorithms 日本語訳（バックトラッキング）](https://inzkyk.xyz/algorithms/backtracking/) |
| 累積和 | データ構造 | 先頭からの和を前計算し、区間和を2つの累積値の差で求める。 | [典型90 010 — Score Sum Queries](https://atcoder.jp/contests/typical90/tasks/typical90_j) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/dp/cumulative-sum.hpp) |
| ダイクストラ法 | グラフ | 辺の重みが非負のグラフで、最短距離が小さい頂点から順に確定する。 | [典型90 013 — Passing](https://atcoder.jp/contests/typical90/tasks/typical90_m) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/shortest-path/dijkstra.hpp) |
| 貪欲法 | 最適化 | 選択の正当性を考えながら、その時点で最善となる選択を積み重ねる。 | [典型90 014 — We Used to Sing a Song Together](https://atcoder.jp/contests/typical90/tasks/typical90_n) | [Algorithms 日本語訳（貪欲アルゴリズム）](https://inzkyk.xyz/algorithms/greedy_algorithm/) |
| ユークリッドの互除法 | 数学 | 余りを使って問題を縮め、2つ以上の整数の最大公約数を求める。 | [典型90 022 — Cubic Cake](https://atcoder.jp/contests/typical90/tasks/typical90_v) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/euclidean-algolithm/) |
| 二次元いもす法 | データ構造 | 長方形の四隅に差分を記録し、二次元の累積和で各点への加算を復元する。 | [典型90 028 — Cluttered Paper](https://atcoder.jp/contests/typical90/tasks/typical90_ab) | [いもす研（考案者による日本語解説）](https://imoz.jp/algorithms/imos_method.html) |
| エラトステネスの篩 | 数学 | 素数の倍数を順に処理し、素数判定や異なる素因数の個数を前計算する。 | [典型90 030 — K Factors](https://atcoder.jp/contests/typical90/tasks/typical90_ad) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/prime/prime-sieve.hpp) |
| Grundy数 | ゲーム | 到達先の値のmexを求め、独立した不偏ゲームをXORで組み合わせる。 | [典型90 031 — VS AtCoder](https://atcoder.jp/contests/typical90/tasks/typical90_ae) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/grundy-number.hpp) |
| しゃくとり法 | 探索 | 区間の両端を単調に動かし、条件を満たす区間を効率よく調べる。 | [典型90 034 — There are few types of elements](https://atcoder.jp/contests/typical90/tasks/typical90_ah) | [Qiita / drken（しゃくとり法）](https://qiita.com/drken/items/ecd1a472d3a0e7db8dce) |
| 最近共通祖先（LCA）・ダブリング | グラフ | 2の累乗個先の祖先を前計算し、木の祖先や頂点間の距離を高速に求める。 | [典型90 035 — Preserve Connectivity](https://atcoder.jp/contests/typical90/tasks/typical90_ai) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/lca/) |
| クラスカル法（最小全域木） | グラフ | 辺を重みの小さい順に見て、閉路を作らない辺を採用する。 | [典型90 049 — Flip Digits 2](https://atcoder.jp/contests/typical90/tasks/typical90_aw) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/kruskal-mst/) |
| 半分全列挙 | 探索 | 要素を2組に分けてそれぞれ列挙し、条件に合う組み合わせを探索する。 | [典型90 051 — Typical Shop](https://atcoder.jp/contests/typical90/tasks/typical90_ay) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/split-and-list/) |
| 掃き出し法（GF(2)） | 数学 | XORを行基本変形として使い、二元体上の連立一次方程式やランクを求める。 | [典型90 057 — Flip Flap](https://atcoder.jp/contests/typical90/tasks/typical90_be) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/sweep.hpp) |
| 最長増加部分列（LIS） | 列・文字列 | 各長さの増加部分列の末尾の最小値を管理し、二分探索で更新する。 | [典型90 060 — Chimera](https://atcoder.jp/contests/typical90/tasks/typical90_bh) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/dp/longest-increasing-sequence.hpp) |
| 両端キュー（Deque） | データ構造 | 列の先頭と末尾の両方で、要素の追加や取り出しを効率よく行う。 | [典型90 061 — Deck](https://atcoder.jp/contests/typical90/tasks/typical90_bi) | [Python公式日本語ドキュメント](https://docs.python.org/ja/3/library/collections.html#collections.deque) |
| 重み付きUnion-Find | データ構造 | 頂点間のポテンシャル差を管理しながら集合を併合する。 | [Library Checker — Unionfind with Potential](https://judge.yosupo.jp/problem/unionfind_with_potential) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/union-find-with-potential.hpp) |
| 永続Union-Find | データ構造 | 過去の版を保ったまま集合の併合と連結判定を行う。 | [Library Checker — Persistent Unionfind](https://judge.yosupo.jp/problem/persistent_unionfind) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/persistent-union-find.hpp) |
| Sparse Table | データ構造 | 静的な配列の区間最小値などを、冪等な演算の前計算で高速に求める。 | [Library Checker — Static RMQ](https://judge.yosupo.jp/problem/staticrmq) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/sparse-table.hpp) |
| Wavelet Matrix | データ構造 | 値のビットごとに列を分割し、区間内の順位や出現回数を求める。 | [Library Checker — Range Kth Smallest](https://judge.yosupo.jp/problem/range_kth_smallest) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure-2d/wavelet-matrix.hpp) |
| Segment Tree Beats | データ構造 | 区間の最大値・次の最大値などを管理し、条件付きの区間更新を効率化する。 | [Library Checker — Range Chmin Chmax Add Range Sum](https://judge.yosupo.jp/problem/range_chmin_chmax_add_range_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/segment-tree/segment-tree-beats.hpp) |
| Li Chao Tree | データ構造 | 直線の集合を管理し、指定した座標における最小値を求める。 | [Library Checker — Line Add Get Min](https://judge.yosupo.jp/problem/line_add_get_min) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/segment-tree/li-chao-tree.hpp) |
| SWAG（Sliding Window Aggregation） | データ構造 | 2つのスタックなどでキュー全体のモノイド積を償却定数時間で管理する。 | [Library Checker — Queue Operate All Composite](https://judge.yosupo.jp/problem/queue_operate_all_composite) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/slide-window-aggregation.hpp) |
| Implicit Treap | データ構造 | 位置を暗黙のキーとする平衡二分木で、列の挿入・削除・反転を扱う。 | [Library Checker — Dynamic Sequence Range Affine Range Sum](https://judge.yosupo.jp/problem/dynamic_sequence_range_affine_range_sum) | [Qiita / hamamu（Implicit Treapの日本語解説）](https://qiita.com/hamamu/items/570e7c36bf73913cbeb8) |
| Binary Trie | データ構造 | 整数をビット列の木に格納し、XORが最小になる要素などを探索する。 | [Library Checker — Set Xor-Min](https://judge.yosupo.jp/problem/set_xor_min) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/binary-trie.hpp) |
| 永続キュー | データ構造 | 過去の状態を残しながら、キューの追加・取り出しを行う。 | [Library Checker — Persistent Queue](https://judge.yosupo.jp/problem/persistent_queue) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/persistent-queue.hpp) |
| Lowlink・橋検出 | グラフ | DFSの訪問順と到達可能な祖先を使い、橋や二辺連結成分を求める。 | [Library Checker — Two-Edge-Connected Components](https://judge.yosupo.jp/problem/two_edge_connected_components) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/bridge-lowlink/) |
| 関節点・二重連結成分分解 | グラフ | DFSとLowlinkを使い、頂点を取り除いたときの分断を調べる。 | [Library Checker — Biconnected Components](https://judge.yosupo.jp/problem/biconnected_components) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/articulation-points/) |
| Hierholzer法（オイラー路） | グラフ | 辺を一度ずつ使う閉路をつなぎ合わせて、オイラー路を構築する。 | [Library Checker — Eulerian Trail Directed](https://judge.yosupo.jp/problem/eulerian_trail_directed) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/others/eulerian-trail.hpp) |
| Hopcroft–Karp法（二部マッチング） | グラフ | 最短の増加路をまとめて探索し、二部グラフの最大マッチングを求める。 | [Library Checker — Bipartite Matching](https://judge.yosupo.jp/problem/bipartitematching) | [電気通信大学（Hopcroft–Karp法の講義資料）](https://dopal.cs.uec.ac.jp/okamotoy/lect/2020/matching/lect03.pdf) |
| Blossom法（一般グラフのマッチング） | グラフ | 奇閉路を縮約し、一般グラフ上で増加路を探索する。 | [Library Checker — General Matching](https://judge.yosupo.jp/problem/general_matching) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/flow/gabow-edmonds.hpp) |
| ハンガリアン法 | グラフ | 二部グラフの割当問題を、ポテンシャルと増加路を用いて解く。 | [Library Checker — Assignment Problem](https://judge.yosupo.jp/problem/assignment) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/flow/hungarian.hpp) |
| Chu–Liu/Edmonds法（最小有向全域木） | グラフ | 各頂点への最小入辺を選び、できた閉路を縮約して最適な有向木を求める。 | [Library Checker — Directed MST](https://judge.yosupo.jp/problem/directedmst) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/mst/directed-mst.hpp) |
| Dominator Tree | グラフ | 始点からある頂点へ向かうすべての経路が必ず通る頂点を木で表す。 | [Library Checker — Dominator Tree](https://judge.yosupo.jp/problem/dominatortree) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/others/dominator-tree.hpp) |
| 補グラフの連結成分探索 | グラフ | 未訪問頂点を管理し、元のグラフに存在しない辺を効率よく探索する。 | [Library Checker — Connected Components of Complement Graph](https://judge.yosupo.jp/problem/connected_components_of_complement_graph) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/shortest-path/complement-shotest-path.hpp) |
| 彩色数の部分集合DP | グラフ | 独立集合による頂点集合の分割を考え、必要な色数の最小値を求める。 | [Library Checker — Chromatic Number](https://judge.yosupo.jp/problem/chromatic_number) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/others/chromatic-number.hpp) |
| Heavy-Light Decomposition（HLD） | 木 | 木を重い辺のパスへ分解し、パスクエリを少数の区間クエリに変換する。 | [Library Checker — Vertex Add Path Sum](https://judge.yosupo.jp/problem/vertex_add_path_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/tree/heavy-light-decomposition.hpp) |
| Euler Tour（部分木の区間化） | 木 | DFSの入退出順で木を配列に写し、部分木への操作を区間操作として扱う。 | [Library Checker — Vertex Add Subtree Sum](https://judge.yosupo.jp/problem/vertex_add_subtree_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/tree/euler-tour.hpp) |
| Link-Cut Tree | 木 | 木をパスに分解して管理し、辺の接続・切断とパス上の集約を処理する。 | [Library Checker — Dynamic Tree Vertex Add Path Sum](https://judge.yosupo.jp/problem/dynamic_tree_vertex_add_path_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/lct/link-cut-tree.hpp) |
| 重心分解 | 木 | 木の重心で再帰的に分割し、頂点間距離などの問題を部分問題に分ける。 | [Library Checker — Frequency Table of Tree Distance](https://judge.yosupo.jp/problem/frequency_table_of_tree_distance) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/tree/centroid-decomposition.hpp) |
| Cartesian Tree | 木 | 配列の添字順とヒープ順を同時に満たす木を、単調スタックなどで構築する。 | [Library Checker — Cartesian Tree](https://judge.yosupo.jp/problem/cartesian_tree) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/tree/cartesian-tree.hpp) |
| Miller–Rabin素数判定 | 数学 | 冪剰余による判定を複数の底で行い、整数が素数かを調べる。 | [Library Checker — Primality Test](https://judge.yosupo.jp/problem/primality_test) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/prime/miller-rabin.hpp) |
| Pollard's rho法 | 数学 | 擬似乱数的な数列と最大公約数を利用し、大きな整数の因数を探す。 | [Library Checker — Factorize](https://judge.yosupo.jp/problem/factorize) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/prime/fast-factorize.hpp) |
| Tonelli–Shanks法 | 数学 | 奇素数を法とする平方根を、乗法群の構造を使って計算する。 | [Library Checker — Square Root (Mod)](https://judge.yosupo.jp/problem/sqrt_mod) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/modulo/mod-sqrt.hpp) |
| Baby-step Giant-step法 | 数学 | 指数を小さな部分と大きな部分に分け、離散対数を探索する。一般の法では事前処理も必要。 | [Library Checker — Discrete Logarithm](https://judge.yosupo.jp/problem/discrete_logarithm_mod) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/modulo/mod-log.hpp) |
| 原始根探索 | 数学 | 素数から1を引いた数を素因数分解し、位数を確認して原始根を見つける。 | [Library Checker — Primitive Root](https://judge.yosupo.jp/problem/primitive_root) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/primitive-root-ll.hpp) |
| 商列挙（整数除算の区間分割） | 数学 | 整数除算の商が等しい区間をまとめ、異なる商を少ない回数で列挙する。 | [Library Checker — Enumerate Quotients](https://judge.yosupo.jp/problem/enumerate_quotients) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/enumerate-quotient.hpp) |
| 杜教篩（数論関数の総和） | 数学 | ディリクレ畳み込みの関係式と商ごとのメモ化で、数論関数の総和を求める。 | [Library Checker — Sum of Totient Function](https://judge.yosupo.jp/problem/sum_of_totient_function) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/multiplicative-function/sum-of-totient.hpp) |
| 複数NTT・中国剰余定理による畳み込み | 数学 | 複数の素数を法として畳み込み、剰余を復元して別の法での結果を求める。 | [Library Checker — Convolution (Mod 1000000007)](https://judge.yosupo.jp/problem/convolution_mod_1000000007) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/ntt/arbitrary-ntt.hpp) |
| Walsh–Hadamard変換 | 数学 | XORに対応する変換を使い、添字のXORによる畳み込みを高速に求める。 | [Library Checker — Bitwise XOR Convolution](https://judge.yosupo.jp/problem/bitwise_xor_convolution) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/set-function/walsh-hadamard-transform.hpp) |
| 高速ゼータ変換・メビウス変換 | 数学 | 部分集合や上位集合に関する総和と逆変換を行い、AND畳み込みなどを求める。 | [Library Checker — Bitwise AND Convolution](https://judge.yosupo.jp/problem/bitwise_and_convolution) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/set-function/zeta-mobius-transform.hpp) |
| 形式的冪級数の逆元 | 多項式 | 定数項が可逆な級数に対し、Newton法で精度を倍増しながら逆元を求める。 | [Library Checker — Inverse of Formal Power Series](https://judge.yosupo.jp/problem/inv_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/formal-power-series.hpp) |
| 形式的冪級数の指数関数 | 多項式 | 定数項が0の級数に対し、微分・積分やNewton法を用いて指数関数を求める。 | [Library Checker — Exp of Formal Power Series](https://judge.yosupo.jp/problem/exp_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/formal-power-series.hpp) |
| 形式的冪級数の対数 | 多項式 | 定数項が1の級数について、微分と逆元の積を積分して対数を求める。 | [Library Checker — Log of Formal Power Series](https://judge.yosupo.jp/problem/log_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/formal-power-series.hpp) |
| 形式的冪級数の冪乗 | 多項式 | 先頭の非零項を分離し、対数と指数関数などを使って整数乗を求める。 | [Library Checker — Pow of Formal Power Series](https://judge.yosupo.jp/problem/pow_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/formal-power-series.hpp) |
| 形式的冪級数の平方根 | 多項式 | 先頭項の平方根とNewton法を使い、級数の平方根を求める。 | [Library Checker — Sqrt of Formal Power Series](https://judge.yosupo.jp/problem/sqrt_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/fps-sqrt.hpp) |
| 多点評価 | 多項式 | 評価点をまとめた積の木と多項式の剰余を使い、多数の点で値を求める。 | [Library Checker — Multipoint Evaluation](https://judge.yosupo.jp/problem/multipoint_evaluation) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/multipoint-evaluation.hpp) |
| 多項式補間 | 多項式 | 相異なる評価点での値から、積の木や微分を利用して多項式を復元する。 | [Library Checker — Polynomial Interpolation](https://judge.yosupo.jp/problem/polynomial_interpolation) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/polynomial-interpolation.hpp) |
| Taylor Shift | 多項式 | 階乗による係数変換と畳み込みを使い、変数を定数だけずらした多項式を求める。 | [Library Checker — Polynomial Taylor Shift](https://judge.yosupo.jp/problem/polynomial_taylor_shift) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/taylor-shift.hpp) |
| Berlekamp–Massey法 | 数学 | 数列の有限個の項から、それらを満たす最短の線形漸化式を見つける。 | [Library Checker — Find Linear Recurrence](https://judge.yosupo.jp/problem/find_linear_recurrence) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/berlekamp-massey.hpp) |
| Bostan–Mori法 | 多項式 | 有理型母関数の係数抽出を偶奇で縮約し、線形漸化式の遠い項を求める。 | [Library Checker — K-th Term of Linearly Recurrent Sequence](https://judge.yosupo.jp/problem/kth_term_of_linearly_recurrent_sequence) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/nth-term.hpp) |
| Gauss–Jordan法（連立一次方程式） | 線形代数 | 行基本変形で係数行列を簡約し、解の存在と自由度を調べる。 | [Library Checker — System of Linear Equations](https://judge.yosupo.jp/problem/system_of_linear_equations) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/gauss-elimination.hpp) |
| 行列式の消去法 | 線形代数 | ピボットを選んで行列を三角化し、行交換の符号と対角成分から行列式を求める。 | [Library Checker — Matrix Determinant](https://judge.yosupo.jp/problem/matrix_det) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/gauss-elimination.hpp) |
| 逆行列の掃き出し法 | 線形代数 | 単位行列を併記して行基本変形を行い、正則な行列の逆行列を求める。 | [Library Checker — Inverse Matrix](https://judge.yosupo.jp/problem/inverse_matrix) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/inverse-matrix.hpp) |
| Hessenberg化による固有多項式計算 | 線形代数 | 相似変換で行列をHessenberg形へ変換し、漸化式で固有多項式を求める。 | [Library Checker — Characteristic Polynomial](https://judge.yosupo.jp/problem/characteristic_polynomial) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/characteristric-polynomial.hpp) |
| Z-algorithm | 文字列 | 文字列の各位置から始まる接尾辞と、文字列全体との共通接頭辞長を線形時間で求める。 | [Library Checker — Z Algorithm](https://judge.yosupo.jp/problem/zalgorithm) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/string/z-algorithm.hpp) |
| Manacher法 | 文字列 | 既知の回文の対称性を使い、各中心から広がる回文の長さを線形時間で求める。 | [Library Checker — Enumerate Palindromes](https://judge.yosupo.jp/problem/enumerate_palindromes) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/string/manacher.hpp) |
| 回文木（Eertree） | 文字列 | 異なる回文を頂点として管理し、文字追加に伴う回文の変化を扱う。 | [Library Checker — Eertree](https://judge.yosupo.jp/problem/eertree) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/string/palindromic-tree.hpp) |
| Lyndon分解（Duval法） | 文字列 | 文字列を辞書順で非増加なLyndon語の列へ線形時間で分解する。 | [Library Checker — Lyndon Factorization](https://judge.yosupo.jp/problem/lyndon_factorization) | [CP-Algorithms（解説）](https://cp-algorithms.com/string/lyndon_factorization.html) |
| Run列挙 | 文字列 | 文字列中の極大な周期的区間を、周期やLCPの情報を利用して列挙する。 | [Library Checker — Run Enumerate](https://judge.yosupo.jp/problem/runenumerate) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/string/run-enumerate.hpp) |
| 凸包（Andrewの単調鎖法） | 計算幾何 | 点を座標順に並べ、外積で向きを判定しながら上下の凸包を構築する。 | [Library Checker — Static Convex Hull](https://judge.yosupo.jp/problem/static_convex_hull) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/geometry/convex_hull.hpp) |
| 最近点対の分割統治 | 計算幾何 | 点集合を分割し、分割線近くの候補だけを比較して最短距離の点対を求める。 | [Library Checker — Closest Pair](https://judge.yosupo.jp/problem/closest_pair) | [libalgo（最近点対の日本語解説）](https://tubo28.me/compprog/algorithm/closest-pair/) |
| 回転キャリパー法 | 計算幾何 | 凸多角形の対向点を単調に動かし、最遠点対などを効率よく求める。 | [Library Checker — Furthest Pair](https://judge.yosupo.jp/problem/furthest_pair) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/geometry/convex_polygon_diameter.hpp) |
| 偏角ソート | 計算幾何 | ベクトルの半平面と外積の符号を使い、角度順に並べる。 | [Library Checker — Sort Points by Argument](https://judge.yosupo.jp/problem/sort_points_by_argument) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/geometry/integer-geometry.hpp) |
| 平面走査（長方形の和集合面積） | 計算幾何 | 長方形の端をイベントとして走査し、被覆される長さを木で管理して面積を積算する。 | [Library Checker — Area of Union of Rectangles](https://judge.yosupo.jp/problem/area_of_union_of_rectangles) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/other/area-of-union-of-rectangles.hpp) |
| Manhattan MST | 計算幾何 | 座標変換と走査で候補辺を絞り、マンハッタン距離の最小全域木を求める。 | [Library Checker — Manhattan MST](https://judge.yosupo.jp/problem/manhattanmst) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/mst/manhattan-mst.hpp) |
| ハッシュテーブル | データ構造 | キーのハッシュ値から格納場所を決め、連想配列の検索や更新を行う。 | [Library Checker — 連想配列](https://judge.yosupo.jp/problem/associative_array) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/hashmap/hashmap.hpp) |
| Treap（順序付き集合） | データ構造 | キーの順序と乱数の優先度を組み合わせ、挿入・削除・順位検索を処理する。 | [Library Checker — 順序付き集合](https://judge.yosupo.jp/problem/ordered_set) | [Qiita / hamamu（Treapの日本語解説）](https://qiita.com/hamamu/items/570e7c36bf73913cbeb8) |
| Interval Heap | データ構造 | 各ノードに最小側と最大側の値を持たせ、両端優先度付きキューを実装する。 | [Library Checker — 両端優先度付きキュー](https://judge.yosupo.jp/problem/double_ended_priority_queue) | [natsugiri（Interval Heapの日本語解説）](https://natsugiri.hatenablog.com/entry/2016/10/10/035445) |
| 非可換群上の重み付きUnion-Find | データ構造 | 群の演算順序を保ちながら、頂点間の相対的な変換を管理する。 | [Library Checker — 非可換群のポテンシャル](https://judge.yosupo.jp/problem/unionfind_with_potential_non_commutative_group) | [Library Checker（公式参考実装）](https://github.com/yosupo06/library-checker-problems/tree/master/data_structure/unionfind_with_potential_non_commutative_group/sol) |
| 区間並列Union-Find | データ構造 | 対応する区間の要素をまとめて併合し、同じ区間の処理を再利用する。 | [Library Checker — 区間並列の集合併合](https://judge.yosupo.jp/problem/range_parallel_unionfind) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/parallel-union-find.hpp) |
| 永続セグメント木 | データ構造 | 更新経路だけをコピーして、過去の版を保持した区間更新・集約を実現する。 | [Library Checker — 永続的な区間更新](https://judge.yosupo.jp/problem/persistent_range_affine_range_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/segment-tree/persistent-segment-tree.hpp) |
| Mo's algorithm | オフライン処理 | 静的な区間クエリを並べ替え、区間の両端の移動量を抑えて処理する。 | [Library Checker — 区間最頻値](https://judge.yosupo.jp/problem/static_range_mode_query) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/misc/mo.hpp) |
| 最終出現位置によるオフライン区間処理 | オフライン処理 | 右端を走査し、各値の最終出現位置だけを有効にして区間の異なる値を数える。 | [Library Checker — 区間内の異なる値の個数](https://judge.yosupo.jp/problem/static_range_count_distinct) | [AtCoder公式日本語解説（ABC174 F）](https://img.atcoder.jp/abc174/editorial.pdf) |
| 二次元Fenwick Tree | データ構造 | 二次元の添字にBITを構成し、点への加算と長方形内の和を処理する。 | [Library Checker — 点加算・長方形和](https://judge.yosupo.jp/problem/point_add_rectangle_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure-2d/2d-binary-indexed-tree.hpp) |
| Range Tree | データ構造 | 座標ごとの探索木を階層的に組み合わせ、長方形内の点の情報を集約する。 | [Library Checker — 長方形和](https://judge.yosupo.jp/problem/rectangle_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure-2d/abstract-range-tree.hpp) |
| マージソートによる転倒数計算 | 分割統治 | 左右の整列済み列を併合する際に、要素の大小関係が逆転する組を数える。 | [Library Checker — 区間転倒数](https://judge.yosupo.jp/problem/static_range_inversions_query) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/dp/inversion-counting.hpp) |
| 平方分割 | データ構造 | 配列を小さなブロックに分け、ブロック単位の情報と端の直接処理を組み合わせる。 | [Library Checker — 点更新・区間頻度](https://judge.yosupo.jp/problem/point_set_range_frequency) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/square-root-decomposition.hpp) |
| Euler Tour Tree | 木 | 木の巡回列を平衡二分木で管理し、辺の接続・切断と部分木の集約を扱う。 | [Library Checker — 動的木の部分木和](https://judge.yosupo.jp/problem/dynamic_tree_vertex_add_subtree_sum) | [Qiita / hotman78（Euler Tour Treeの日本語解説）](https://qiita.com/hotman78/items/78cd3aa50b05a57738d4) |
| 木の直径（最遠点探索） | 木 | 任意の頂点から最遠点を探し、そこから再度探索して木の最長経路を求める。 | [Library Checker — 木の直径](https://judge.yosupo.jp/problem/tree_diameter) | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/tree-diameter/) |
| AHU法（根付き木の同型判定） | 木 | 子の部分木の型をソートしてまとめ、根付き木の同型類を下から分類する。 | [Library Checker — 根付き木の同型分類](https://judge.yosupo.jp/problem/rooted_tree_isomorphism_classification) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/tree/tree-isomorphism.hpp) |
| 次数順の辺の向き付けによる三角形列挙 | グラフ | 次数と頂点番号で辺を向き付け、共通の隣接頂点から三角形を列挙する。 | [Library Checker — 三角形列挙](https://judge.yosupo.jp/problem/enumerate_triangles) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/others/enumerate-triangles.hpp) |
| Bron–Kerbosch法 | グラフ | 現在のクリークと追加可能な頂点集合を管理し、極大クリークを再帰的に列挙する。 | [Library Checker — クリーク列挙](https://judge.yosupo.jp/problem/enumerate_cliques) | [Library Checker（公式参考実装）](https://github.com/yosupo06/library-checker-problems/tree/master/graph/enumerate_cliques/sol) |
| 次数による分割を使った4閉路計数 | グラフ | 高次数頂点と低次数頂点の処理を分け、共通隣接点の組から4閉路を数える。 | [Library Checker — 4閉路の個数](https://judge.yosupo.jp/problem/counting_c4) | [Library Checker（公式参考実装）](https://github.com/yosupo06/library-checker-problems/tree/master/graph/counting_c4/sol) |
| 行列木定理（Kirchhoffの定理） | グラフ | グラフのラプラシアン行列の小行列式から、全域木の個数を求める。 | [Library Checker — 無向全域木の個数](https://judge.yosupo.jp/problem/counting_spanning_tree_undirected) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/matrix-tree.hpp) |
| BEST定理 | グラフ | 有向全域木の個数と各頂点の次数の階乗を使い、オイラー閉路を数える。 | [Library Checker — オイラー閉路の個数](https://judge.yosupo.jp/problem/counting_eulerian_circuits) | [potato167（BEST定理の日本語解説・実装）](https://potato167.hatenablog.com/entry/2024/02/21/100000) |
| 二部グラフの辺彩色 | グラフ | マッチングへの分解などを使い、同じ頂点に接する辺の色が異なるように彩色する。 | [Library Checker — 二部グラフ辺彩色](https://judge.yosupo.jp/problem/bipartite_edge_coloring) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/others/bipartite-graph-edge-coloring.hpp) |
| Maximum Cardinality Search | グラフ | 選択済みの隣接頂点数が最大の頂点を順に選び、弦グラフの認識に利用する。 | [Library Checker — 弦グラフの認識](https://judge.yosupo.jp/problem/chordal_graph_recognition) | [sotanishy（弦グラフ認識の日本語解説・実装）](https://sotanishy.github.io/cp-library-cpp/graph/chordal_graph_recognition.hpp) |
| st-numbering | グラフ | 指定した両端以外の頂点が前後に隣接点を持つよう、二重連結グラフを順序付ける。 | [Library Checker — st順序付け](https://judge.yosupo.jp/problem/st_numbering) | [Library Checker（公式参考実装）](https://github.com/yosupo06/library-checker-problems/tree/master/graph/st_numbering/sol) |
| GCD畳み込み | 数学 | 倍数方向のゼータ変換と逆変換を使い、添字の最大公約数ごとの積和を求める。 | [Library Checker — GCD畳み込み](https://judge.yosupo.jp/problem/gcd_convolution) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/multiplicative-function/gcd-convolution.hpp) |
| LCM畳み込み | 数学 | 約数方向のゼータ変換と逆変換を使い、添字の最小公倍数ごとの積和を求める。 | [Library Checker — LCM畳み込み](https://judge.yosupo.jp/problem/lcm_convolution) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/multiplicative-function/divisor-multiple-transform.hpp) |
| 高速部分集合畳み込み | 数学 | 集合の大きさごとにゼータ変換し、互いに素な部分集合への分割をまとめて計算する。 | [Library Checker — 部分集合畳み込み](https://judge.yosupo.jp/problem/subset_convolution) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/set-function/subset-convolution.hpp) |
| Monotone Minima | 最適化 | 各行の最小位置が単調になる性質を使い、分割統治で探索範囲を狭める。 | [Library Checker — 凸列と任意列のmin-plus畳み込み](https://judge.yosupo.jp/problem/min_plus_convolution_convex_arbitrary) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/dp/monotone-minima.hpp) |
| Min_25篩 | 数学 | 素数に関する総和と最小素因数による分解を利用し、積性関数の総和を求める。 | [Library Checker — 積性関数の総和](https://judge.yosupo.jp/problem/sum_of_multiplicative_function_large) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/multiplicative-function/sum-of-multiplicative-function.hpp) |
| 整数k乗根の二分探索 | 数学 | 整数の累乗をオーバーフローに注意して比較し、k乗が上限以下となる最大値を探す。 | [Library Checker — 整数k乗根](https://judge.yosupo.jp/problem/kth_root_integer) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/kth-root-integral.hpp) |
| 拡張Eulerの定理による冪塔計算 | 数学 | 指数の大きさと互いに素でない場合の補正を管理し、冪塔の剰余を再帰的に求める。 | [Library Checker — テトレーションの剰余](https://judge.yosupo.jp/problem/tetration_mod) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/modulo/tetration.hpp) |
| ガウス整数上のユークリッドの互除法 | 数学 | 複素平面上の整数に対して商を丸め、ノルムを減らしながら最大公約数を求める。 | [Library Checker — ガウス整数の最大公約数](https://judge.yosupo.jp/problem/gcd_of_gaussian_integers) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/gaussian-integer.hpp) |
| Cornacchia法 | 数学 | 平方剰余の解とユークリッドの互除法を利用し、平方和表示の候補を求める。 | [Library Checker — 二平方和](https://judge.yosupo.jp/problem/two_square_sum) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/two-square.hpp) |
| Nim積 | ゲーム | Nimberの体における乗算を、ビットの分割と再帰的な演算で計算する。 | [Library Checker — 64bit Nim積](https://judge.yosupo.jp/problem/nim_product_64) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/nimber.hpp) |
| Stern–Brocot木 | 数学 | 隣り合う分数の分子・分母を足して、正の有理数を二分木として管理する。 | [Library Checker — Stern–Brocot木](https://judge.yosupo.jp/problem/stern_brocot_tree) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/stern-brocot-tree.hpp) |
| メビウス関数による平方因子除外 | 数学 | メビウス関数の重み付き和を使い、平方因子を持たない整数の個数を求める。 | [Library Checker — 平方因子を持たない整数](https://judge.yosupo.jp/problem/counting_squarefrees) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/multiplicative-function/count-square-free.hpp) |
| Lucasの定理 | 組合せ | nとkを素数進法の各桁へ分解し、二項係数の素数を法とする値を求める。 | [Library Checker — 素数modの二項係数](https://judge.yosupo.jp/problem/binomial_coefficient_prime_mod) | [アルゴリズムロジック（Lucasの定理）](https://algo-logic.info/binomial-coefficient-lucas/) |
| 素数冪分解・CRTによる二項係数 | 組合せ | 法を素数冪に分け、素因数の指数を管理して計算した剰余を中国剰余定理で統合する。 | [Library Checker — 任意modの二項係数](https://judge.yosupo.jp/problem/binomial_coefficient) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/modulo/arbitrary-mod-binomial.hpp) |
| 五角数定理による分割数計算 | 組合せ | 一般五角数を使った漸化式で、整数を和に分ける方法の個数を求める。 | [Library Checker — 分割数](https://judge.yosupo.jp/problem/partition_function) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/math/combinatorics/partition-table.hpp) |
| 第一種Stirling数 | 組合せ | 置換を巡回置換に分ける個数を、上昇階乗の多項式の係数として計算する。 | [Library Checker — 第一種Stirling数](https://judge.yosupo.jp/problem/stirling_number_of_the_first_kind) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/math/fps/stirling-first.hpp) |
| 第二種Stirling数 | 組合せ | 区別できる要素を空でない集合に分ける個数を、包除原理や畳み込みで求める。 | [Library Checker — 第二種Stirling数](https://judge.yosupo.jp/problem/stirling_number_of_the_second_kind) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/math/fps/stirling-second.hpp) |
| Bell数・指数型母関数 | 組合せ | 集合の分割を指数型母関数で表し、その係数から分割の総数を求める。 | [Library Checker — Bell数](https://judge.yosupo.jp/problem/bell_number) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/math/fps/bell.hpp) |
| 完全順列の包除原理 | 組合せ | 固定点を持つ置換を包除原理で取り除き、固定点のない置換を数える。 | [Library Checker — 完全順列](https://judge.yosupo.jp/problem/montmort_number_mod) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/math/combinatorics/montmort.hpp) |
| 形式的冪級数の合成 | 多項式 | 冪の計算をブロック化するなどして、級数に別の級数を代入した係数を求める。 | [Library Checker — 冪級数の合成](https://judge.yosupo.jp/problem/composition_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/fps-composition.hpp) |
| 形式的冪級数の合成逆関数 | 多項式 | Newton法などで、合成すると変数そのものになる級数を復元する。 | [Library Checker — 冪級数の合成逆関数](https://judge.yosupo.jp/problem/compositional_inverse_of_formal_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/fps-compositional-inverse.hpp) |
| 逆順多項式による高速除算 | 多項式 | 係数の順序を反転し、級数の逆元と畳み込みから商と余りを求める。 | [Library Checker — 多項式の除算](https://judge.yosupo.jp/problem/division_of_polynomials) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/formal-power-series.hpp) |
| 多項式の拡張ユークリッド法 | 多項式 | 多項式の除算を繰り返し、指定した多項式を法とする逆元を求める。 | [Library Checker — 多項式の逆元](https://judge.yosupo.jp/problem/inv_of_polynomials) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/polynomial-gcd.hpp) |
| Cantor–Zassenhaus法 | 多項式 | 有限体上の多項式を次数ごとに分け、乱択的な剰余計算とGCDで因数分解する。 | [Library Checker — 多項式の因数分解](https://judge.yosupo.jp/problem/factorization_of_polynomials) | [神戸大学（Cantor–Zassenhaus法の講義資料）](https://asir.math.kobe-u.ac.jp/Asir/ca.pdf) |
| 集合冪級数の指数関数 | 多項式 | 部分集合畳み込みを乗算とする級数の指数関数を、集合の分割と対応付けて計算する。 | [Library Checker — 集合冪級数の指数関数](https://judge.yosupo.jp/problem/exp_of_set_power_series) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/set-function/exp-of-set-power-series.hpp) |
| Chirp Z変換 | 多項式 | 等比数列上での多項式の評価を、指数の変形によって畳み込みに帰着する。 | [Library Checker — 等比数列上の多点評価](https://judge.yosupo.jp/problem/multipoint_evaluation_on_geometric_sequence) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/ntt/chirp-z.hpp) |
| 連続評価点のシフト | 多項式 | 連続する点での多項式の値から、補間と畳み込みで別の連続区間の値を求める。 | [Library Checker — 多項式の標本点シフト](https://judge.yosupo.jp/problem/shift_of_sampling_points_of_polynomial) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/fps/sample-point-shift.hpp) |
| Newton基底への変換 | 多項式 | 指定した点に対応する積の多項式を使い、単項式基底の係数をNewton基底へ変換する。 | [Library Checker — 多項式の基底変換](https://judge.yosupo.jp/problem/conversion_from_monomial_basis_to_newton_basis) | [noshi91（Newton基底への変換の日本語解説）](https://noshi91.hatenablog.com/entry/2023/05/01/022946) |
| Wiedemann法 | 線形代数 | 疎行列とベクトルの積から数列を生成し、線形漸化式を使って行列の情報を求める。 | [Library Checker — 疎行列の行列式](https://judge.yosupo.jp/problem/sparse_matrix_det) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/black-box-linear-algebra.hpp) |
| 任意mod行列式（互除法による消去） | 線形代数 | 逆元による除算の代わりに整数の互除法で行を消去し、合成数の法でも行列式を求める。 | [Library Checker — 任意modの行列式](https://judge.yosupo.jp/problem/matrix_det_arbitrary_mod) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/matrix/determinant-arbitrary-mod.hpp) |
| XOR基底による部分空間の交差 | 線形代数 | ビット列を二元体上のベクトルとして消去し、2つの空間に共通する基底を求める。 | [Library Checker — 二元体の部分空間の共通部分](https://judge.yosupo.jp/problem/intersection_of_f2_vector_spaces) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/math/matrix/binary-basis.hpp) |
| 畳み込みによるワイルドカード照合 | 文字列 | 不一致を検出する式を複数の畳み込みに分け、ワイルドカードを含む照合を処理する。 | [Library Checker — ワイルドカード照合](https://judge.yosupo.jp/problem/wildcard_pattern_matching) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/string/wildcard-pattern-matching.hpp) |
| Suffix Automaton | 文字列 | 部分文字列を認識するオートマトンを構築し、別の文字列を走査して共通部分文字列を求める。 | [Library Checker — 最長共通部分文字列](https://judge.yosupo.jp/problem/longest_common_substring) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/string/suffix-automaton.hpp) |
| 凸包剥離（Convex Layers） | 計算幾何 | 外側の凸包を取り除いていき、点集合を入れ子になった層へ分解する。 | [Library Checker — 凸包の層分解](https://judge.yosupo.jp/problem/convex_layers) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/geometry/convex-layers.hpp) |
| Karatsuba法 | 多倍長整数 | 整数を上下に分割し、4回の部分積を3回に減らす分割統治で乗算する。 | [Library Checker — 多倍長整数の乗算](https://judge.yosupo.jp/problem/multiplication_of_big_integers) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/ntt/karatsuba.hpp) |
| Newton法による多倍長整数除算 | 多倍長整数 | 除数の逆数近似の精度を倍増し、乗算と補正から商と余りを求める。 | [Library Checker — 多倍長整数の除算](https://judge.yosupo.jp/problem/division_of_big_integers) | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/math/bigint.hpp) |
| Königの定理による最小頂点被覆 | グラフ | 二部グラフの最大マッチングから交互路を探索し、最小頂点被覆を構成する。 | [Library Checker — 二部マッチングと頂点被覆](https://judge.yosupo.jp/problem/bipartitematching) | [Luzhiled's Library（解説・実装）](https://ei1333.github.io/library/graph/flow/bipartite-flow.hpp) |
| 時間計算量・Big O記法 | 基本概念 | 入力の大きさに対する処理回数の増え方を評価する。 | - | [Algorithms 日本語訳（アルゴリズムの解析）](https://inzkyk.xyz/algorithms/introduction/analyzing_algorithms/) |
| 空間計算量 | 基本概念 | 入力の大きさに応じて必要となる記憶領域の増え方を評価する。 | - | [Okada NoteBook（空間計算量・再帰・正当性）](https://s-okada.org/learn/algorithms/complexity-recursion) |
| 償却解析 | 基本概念 | 一連の操作にかかる総コストを考え、まれに重い操作があるデータ構造を評価する。 | - | [LayerX Research（償却解析）](https://scrapbox.io/layerx/%E5%84%9F%E5%8D%B4%E8%A7%A3%E6%9E%90) |
| ループ不変条件 | 基本概念 | 反復の前後で保たれる条件を明確にして、初期化・維持・終了から正しさを説明する。 | - | [小村ソフト（ループ不変条件）](https://cn.comcomponent.com/knowledge/loop-invariant/) |
| 数学的帰納法 | 基本概念 | 基底の場合と次の段階への推論を示し、すべての段階で性質が成り立つことを証明する。 | - | [電気通信大学（数学的帰納法の講義資料）](https://dopal.cs.uec.ac.jp/okamotoy/lect/2015/discretemath/handout14.pdf) |
| 再帰・基底条件 | 基本概念 | 問題を小さな同型の問題へ分け、必ず停止する基底条件とともに定義する。 | - | [Algorithms 日本語訳（再帰）](https://inzkyk.xyz/algorithms/recursion/) |
| 半開区間 | 基本概念 | 左端を含み右端を含まない区間で、長さや空区間、分割の扱いを統一する。 | - | [Python公式日本語（シーケンスのスライス）](https://docs.python.org/ja/3/library/stdtypes.html#common-sequence-operations) |
| 0-indexedと1-indexed | 基本概念 | 添字の起点と変換を区別し、配列の境界や範囲のずれを防ぐ。 | - | [Python公式日本語（リストと添字）](https://docs.python.org/ja/3/tutorial/datastructures.html) |
| 短絡評価 | 基本概念 | 論理式の結果が確定したら残りを評価しない性質を使い、条件や境界を安全に判定する。 | - | [Python公式日本語（論理演算）](https://docs.python.org/ja/3/library/stdtypes.html#boolean-operations-and-or-not) |
| 床関数・天井関数 | 基本概念 | 実数を下側・上側の整数へ丸め、負数を含む除算の丸め方を区別する。 | - | [Python公式日本語（floor・ceil）](https://docs.python.org/ja/3/library/math.html) |
| 整数オーバーフロー | 基本概念 | 中間計算も含めて型の表現範囲を確認し、値があふれた場合の挙動を理解する。 | - | [Microsoft Learn（オーバーフロー）](https://learn.microsoft.com/ja-jp/dotnet/csharp/language-reference/statements/checked-and-unchecked) |
| 浮動小数点の丸め誤差 | 基本概念 | 有限の二進数で表現できない値の誤差を理解し、比較や計算順序を考える。 | - | [Python公式日本語（浮動小数点）](https://docs.python.org/ja/3/tutorial/floatingpoint.html) |
| 辞書順 | 基本概念 | 先頭から最初に異なる要素を比較し、文字列や列の順序を定める。 | - | [Python公式日本語（シーケンスの比較）](https://docs.python.org/ja/3/tutorial/datastructures.html#comparing-sequences-and-other-types) |
| 安定ソート | 基本概念 | キーが等しい要素の相対順序を維持し、複数の条件による並べ替えに利用する。 | - | [Python公式日本語（ソートの安定性）](https://docs.python.org/ja/3/howto/sorting.html#sort-stability-and-complex-sorts) |
| 座標圧縮 | 基本概念 | 値の大小関係を保って連続した添字へ置き換え、配列や木で扱いやすくする。 | - | [Nyaan's Library（座標圧縮の実装）](https://nyaannyaan.github.io/library/misc/compress.hpp) |
| 連長圧縮（RLE） | 基本概念 | 連続する同じ値を、値と出現回数の組にまとめる。 | - | [Nyaan's Library（連長圧縮）](https://nyaannyaan.github.io/library/string/run-length-encoding.hpp) |
| ビットマスクによる集合表現 | 基本概念 | 要素の有無を整数の各ビットに対応させ、集合演算をビット演算として扱う。 | - | [アルゴリズムロジック（ビット全探索）](https://algo-logic.info/rec-bit-search/) |
| 部分マスク列挙 | 基本概念 | ビットマスクに含まれる部分集合を、減算とAND演算などで列挙する。 | - | [Tick Tack Tech（部分集合・部分マスク列挙）](https://fuyuki-connect.net/posts/atcoder-serial-37-submask-supermask-enumeration) |
| 合同式・剰余演算 | 基本概念 | 法が等しい剰余に着目して整数を扱い、加減乗算や逆元による除算を区別する。 | - | [AtCoder Library（modint）](https://atcoder.github.io/ac-library/production/document_ja/modint.html) |
| モノイド | 基本概念 | 結合的な二項演算と単位元を持つ集合として、区間の集約を抽象化する。 | - | [AtCoder Library（モノイドの定義）](https://atcoder.github.io/ac-library/production/document_ja/segtree.html) |
| 結合法則 | 基本概念 | 演算の括弧の位置を変えても結果が変わらない性質を、区間の分割・結合に利用する。 | - | [AtCoder Library（結合的な演算）](https://atcoder.github.io/ac-library/production/document_ja/segtree.html) |
| 単位元 | 基本概念 | 演算の左右どちらに置いても相手を変えない要素を使い、空区間などの初期値を定める。 | - | [AtCoder Library（単位元）](https://atcoder.github.io/ac-library/production/document_ja/segtree.html) |
| メモ化 | 基本概念 | 同じ引数の計算結果を保存し、再帰などで生じる重複計算を避ける。 | - | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/dynamic-programming/) |
| 直積・多重ループによる列挙 | 基本概念 | 各集合から要素を1つずつ選ぶすべての組を列挙し、候補数を積で見積もる。 | - | [Python公式日本語（直積）](https://docs.python.org/ja/3/library/itertools.html#itertools.product) |
| 順列列挙 | 基本概念 | 要素の順序を区別した並びを列挙し、階乗で増える候補数に注意する。 | - | [Python公式日本語（順列）](https://docs.python.org/ja/3/library/itertools.html#itertools.permutations) |
| 組合せ列挙 | 基本概念 | 順序を区別せずに要素を選び、重複を避けて候補を列挙する。 | - | [Python公式日本語（組合せ）](https://docs.python.org/ja/3/library/itertools.html#itertools.combinations) |
| 頻度表・カウンタ | 基本概念 | 値ごとの出現回数を記録し、数え上げや多重集合の処理に利用する。 | - | [Python公式日本語（Counter）](https://docs.python.org/ja/3/library/collections.html#collections.Counter) |
| スタック（LIFO） | 基本概念 | 後から追加した要素を先に取り出す順序でデータを管理する。 | - | [Python公式日本語（スタック）](https://docs.python.org/ja/3/tutorial/datastructures.html#using-lists-as-stacks) |
| キュー（FIFO） | 基本概念 | 先に追加した要素を先に取り出す順序でデータを管理する。 | - | [Python公式日本語（キュー）](https://docs.python.org/ja/3/tutorial/datastructures.html#using-lists-as-queues) |
| lower_bound・upper_bound | 基本概念 | ソート済み列で、指定値以上・指定値より大きい要素が始まる境界を区別する。 | - | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/binary-search/) |
| 繰り返し二乗法 | 数学 | 指数を二進数に分解し、二乗と必要な積を組み合わせて累乗を計算する。 | - | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/calc-pow/) |
| 拡張ユークリッドの互除法 | 数学 | 最大公約数とともに、2つの整数の一次結合でその値を表す係数を求める。 | - | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/euclidean-algolithm/) |
| 一次不定方程式 | 数学 | 最大公約数による可解性の判定と特殊解から、整数係数の一次方程式の整数解を表す。 | - | [数学通信（一次不定方程式）](https://math.or.jp/assets/pdf/publications/tushin/backnumber/1002/kaji.pdf) |
| Fibonacci数の高速ダブリング | 数学 | 添字を倍にする恒等式を利用し、隣り合うFibonacci数を対で高速に計算する。 | - | [Algorithms 日本語訳（高速Fibonacci数）](https://inzkyk.xyz/algorithms/dynamicprogramming/aside_even_faster_fibonacci_numbers/) |
| 線形篩 | 数学 | 各合成数を最小素因数に対応する処理で一度だけ生成し、素数と最小素因数を列挙する。 | - | [AtCoder公式講座（素数篩）](https://info.atcoder.jp/entry/algorithm_lectures/prime_sieve) |
| Eulerのトーシェント関数 | 数学 | 指定した整数と互いに素な正整数の個数を、素因数分解などから求める。 | - | [AtCoder公式講座（素数篩と乗法的関数）](https://info.atcoder.jp/entry/algorithm_lectures/prime_sieve) |
| 素因数分解による約数個数・約数和 | 数学 | 素因数の指数の選び方を独立に考え、約数の個数や総和を積の形で計算する。 | - | [AtCoder公式講座（素数篩と乗法的関数）](https://info.atcoder.jp/entry/algorithm_lectures/prime_sieve) |
| モジュラ逆元 | 数学 | 法と互いに素な値について、掛けると剰余が1になる値を求める。 | - | [アルゴリズムロジック（逆元）](https://algo-logic.info/combination/) |
| 一次合同方程式 | 数学 | 係数と法の最大公約数を調べ、合同式を満たす整数の解を求める。 | - | [数学通信（一次合同式の講義資料）](https://math.or.jp/assets/pdf/publications/tushin/backnumber/1002/kaji.pdf) |
| 中国剰余定理 | 数学 | 複数の法に対する剰余の条件を統合し、共通する整数の合同類を求める。 | - | [AtCoder公式講座（中国剰余定理）](https://info.atcoder.jp/entry/algorithm_lectures/chinese_remainder_theorem) |
| Garner法 | 数学 | 互いに素な法の剰余を混合基数表現に変換し、大きな整数や別の法での値を復元する。 | - | [AtCoder公式講座（Garner法）](https://info.atcoder.jp/entry/algorithm_lectures/chinese_remainder_theorem) |
| 素数因子を除いた階乗の剰余 | 数学 | 階乗の積から指定した素数の因子を取り除き、残った積をその素数を法として計算する。 | - | [いかたこのたこつぼ（素数因子を除いた階乗）](https://ikatakos.com/pot/programming_algorithm/number_theory/mod_combination) |
| Montgomery乗算 | 数学 | 法と互いに素な基数に合わせて値を変換し、剰余乗算の除算コストを抑える。 | - | [herumi（Montgomery乗算の日本語解説）](https://zenn.dev/herumi/articles/finite-field-04-mul) |
| 平衡三進法 | 基本概念 | 各桁に負・零・正の値を使い、正負の整数を対称的な三進表現で表す。 | - | [Zenn / osyun（平衡三進法）](https://zenn.dev/osyun/scraps/4644e9f4f3a560) |
| Gray符号 | 基本概念 | 隣り合う符号で変わるビットを1つに抑え、集合や状態を順に列挙する。 | - | [新潟大学（Gray符号の講義資料）](https://radio.eng.niigata-u.ac.jp/lectures/%E3%83%87%E3%82%A3%E3%82%B8%E3%82%BF%E3%83%AB%E5%9B%9E%E8%B7%AFpart1.pdf) |
| FFT（高速フーリエ変換） | 数学 | 多項式の評価と補間を再帰的に分割し、複素数上の畳み込みを高速に計算する。 | - | [Qiita / ageprocpp（FFTの日本語解説）](https://qiita.com/ageprocpp/items/0d63d4ed80de4a35fe79) |
| 連分数・近似分数 | 数学 | 整数部と逆数への変換を繰り返し、有理数の表現や精度のよい近似分数を求める。 | - | [Qiita / wataru86（連分数展開）](https://qiita.com/wataru86/items/7ee2ffecc98fe175520e) |
| 最小値スタック・最小値キュー | データ構造 | 各要素とともに最小値の情報を保持し、追加・削除に対応しながら全体の最小値を取得する。 | - | [Nyaan's Library（2スタックによる集約の日本語解説）](https://nyaannyaan.github.io/library/data-structure/slide-window-aggregation.hpp) |
| Randomized Meldable Heap | データ構造 | 左右の子への再帰を乱択し、ヒープの併合を期待対数時間で処理する。 | - | [traP / noshi91（日本語解説）](https://trap.jp/post/1050/) |
| 分割統治DP最適化 | 動的計画法 | 最適な遷移元の単調性を利用し、分割統治で遷移候補の探索範囲を絞る。 | - | [Luzhiled's Library（分割統治DPの日本語解説・実装）](https://ei1333.github.io/library/dp/divide-and-conquer-optimization.hpp) |
| Knuth最適化 | 動的計画法 | 条件を満たす区間DPで最適分割位置の単調性を利用し、遷移の探索を高速化する。 | - | [Qiita / kudojp（Knuth最適化）](https://qiita.com/kudojp/items/5811b6d6444c866780a5) |
| 輪郭DP（Profile DP） | 動的計画法 | 格子を走査した境界の状態だけを保存し、敷き詰めなどの数え上げを処理する。 | - | [matsu7874（輪郭線DPの日本語説明・参考実装）](https://github.com/matsu7874/polyomino) |
| Rolling Hash | 文字列 | 文字列を多項式の値として保持し、部分文字列の比較などを確率的に高速化する。 | - | [Nyaan's Library（Rolling Hashの日本語解説・実装）](https://nyaannyaan.github.io/library/string/rolling-hash.hpp) |
| Rabin–Karp法 | 文字列 | 文字列上でハッシュを更新しながら、パターンと一致する位置の候補を探す。 | - | [ア辞典（Rabin–Karp法の日本語解説）](https://noshi91.github.io/algorithm-encyclopedia/rabin-karp#noredirect) |
| KMP法・接頭辞関数 | 文字列 | 一致済み接頭辞の情報から比較を再開する位置を決め、文字列照合を線形時間で行う。 | - | [Qiita / t_fuki（KMP法）](https://qiita.com/t_fuki/items/f32406da0233ed51ec86) |
| Aho–Corasick法 | 文字列 | 複数パターンのTrieに失敗遷移を加え、テキスト中の出現をまとめて検出する。 | - | [競プロ勉強メモ（Aho–Corasick法）](https://kntychance.hatenablog.jp/entry/2024/07/28/144203) |
| 接尾辞木・Ukkonen法 | 文字列 | 文字列の接尾辞を圧縮Trieとして管理し、文字を追加しながら木を構築する。 | - | [東京大学・渋谷研究室（接尾辞木とUkkonen法）](https://www.hgc.jp/~tshibuya/classes/seq2021_4MA_ST.pdf) |
| 演算子スタックによる式解析 | 文字列 | 演算子の優先順位と結合規則を管理し、括弧を含む数式を解析・評価する。 | - | [木暮仁（スタックと逆ポーランド記法）](https://www.kogures.com/hitoshi/webtext/hs-data-stack/index.html) |
| 行列の階数・線形独立 | 線形代数 | 独立な行や列の最大数を調べ、線形写像や方程式の自由度を理解する。 | - | [emthrm（掃き出し法の日本語解説・実装）](https://emthrm.github.io/cp-library/include/emthrm/math/matrix/gauss_jordan.hpp) |
| Catalan数 | 組合せ | 括弧列や二分木などに現れる数列を、分割の漸化式や二項係数で計算する。 | - | [emthrm（カタラン数の日本語解説・実装）](https://emthrm.github.io/cp-library/include/emthrm/math/catalan_number.hpp) |
| 包除原理 | 組合せ | 条件を満たす集合の重なりを交互に加減し、重複を補正して数え上げる。 | - | [千葉商科大学（包除原理）](https://www3.cuc.ac.jp/~miyata/mathprg/comb/pie.html) |
| Burnsideの補題・Pólyaの数え上げ | 組合せ | 対称変換で同一視される配置を、各変換で変わらない配置の個数などから数える。 | - | [名古屋大学（Burnsideの補題の講義資料）](https://www.math.nagoya-u.ac.jp/~yanagida/edu/21S/20210618.pdf) |
| 仕切り法（Stars and Bars） | 組合せ | 区別しない要素を複数の場所へ配る方法を、要素と仕切りの配置に帰着する。 | - | [アルゴリズムロジック（写像12相・重複組合せ）](https://algo-logic.info/the_twelvefold_way/) |
| 三分探索 | 探索 | 単峰性を持つ関数について2点の値を比較し、極値を含む区間を狭める。 | - | [Baby Stepsなブログ（三分探索）](https://pione.hatenablog.com/entry/2021/02/07/223219) |
| Newton法（数値計算） | 数値計算 | 関数の接線を用いて根の近似値を更新し、方程式の数値解を探す。 | - | [明治大学・金子研究室（Newton法）](https://datachemeng.com/newtonraphson/) |
| 焼きなまし法 | 最適化 | 温度に応じて悪化する遷移も確率的に許し、局所解から抜け出しながら解を探索する。 | - | [Nyaan's Library（焼きなまし法の日本語解説・実装）](https://nyaannyaan.github.io/library/marathon/simulated-annealing.hpp) |
| Simpson法 | 数値計算 | 関数を小区間ごとに二次式で近似し、定積分を数値的に求める。 | - | [東京都立大学（Simpson法の講義資料）](https://shintani.fpark.tmu.ac.jp/classes/information_processing_2/integration_2/simpson.html) |
| 内積 | 基本概念 | ベクトルの成分の積和を使い、角度・直交性・射影などを扱う。 | - | [AtCoder公式講座（内積・外積）](https://info.atcoder.jp/entry/algorithm_lectures/dot_cross_product_2d) |
| 外積・二次元の向き判定 | 基本概念 | ベクトルの外積の符号や大きさを使い、回転方向や面積を判定する。 | - | [AtCoder公式講座（内積・外積）](https://info.atcoder.jp/entry/algorithm_lectures/dot_cross_product_2d) |
| 直線の交点 | 計算幾何 | 直線の方程式を連立し、平行・一致の場合を区別しながら交点を計算する。 | - | [gihyo.jp / 浜本階生（直線の交点）](https://gihyo.jp/dev/serial/01/geometry/0001) |
| 線分交差判定 | 計算幾何 | 端点の向きと範囲の重なりを調べ、接触や同一直線上の場合も含めて交差を判定する。 | - | [gihyo.jp / 浜本階生（線分の交差判定）](https://gihyo.jp/dev/serial/01/geometry/0007) |
| 円と直線の交点 | 計算幾何 | 円の中心から直線への距離と射影を使い、交点の有無と座標を求める。 | - | [Shogo Computing Laboratory（直線と円の交点）](https://shogo82148.github.io/homepage/memo/geometry/line-circle.html) |
| 二円の交点 | 計算幾何 | 円の方程式の差から直線を導き、円と直線の交点問題へ帰着する。 | - | [Shogo Computing Laboratory（二円の交点）](https://shogo82148.github.io/homepage/memo/geometry/circle-cross.html) |
| 二円の共通接線 | 計算幾何 | 円の中心と半径の関係から、両方の円に接する直線を求める。 | - | [emthrm（計算幾何・共通接線の日本語解説・実装）](https://emthrm.github.io/cp-library/include/emthrm/geometry/geometry.hpp) |
| 靴紐公式（多角形の面積） | 計算幾何 | 順に並んだ頂点間の外積を足し合わせ、単純多角形の面積を求める。 | - | [emthrm（計算幾何・面積の日本語解説・実装）](https://emthrm.github.io/cp-library/include/emthrm/geometry/geometry.hpp) |
| 凸多角形の内外判定 | 計算幾何 | 基準頂点から見た方向を二分探索し、調べる三角形を絞って点の位置を判定する。 | - | [miscalculation53（凸多角形の内外判定の日本語解説・実装）](https://miscalculation53.github.io/library/geometry/polygon.hpp) |
| Pickの定理 | 計算幾何 | 格子多角形の内部と境界上の格子点数から、面積との関係を求める。 | - | [東邦大学・土屋研究室（Pickの定理）](https://www.lab2.toho-u.ac.jp/sci/is/tsuchiya/teaching/classG/lecture/G-5.html) |
| Minkowski和 | 計算幾何 | 2つの図形から選んだ点の和の集合を考え、凸多角形では辺の方向順に構築する。 | - | [miscalculation53（Minkowski和の日本語解説・実装）](https://miscalculation53.github.io/library/geometry/minkowski_sum.hpp) |
| 半平面共通部分 | 計算幾何 | 直線の片側という制約を角度順に処理し、すべての制約を満たす領域を求める。 | - | [miscalculation53（半平面共通部分の日本語解説・実装）](https://miscalculation53.github.io/library/convex/halfplane_intersection.hpp) |
| Prim法 | グラフ | 構築済みの木と外側をつなぐ最小重みの辺を順に選び、最小全域木を求める。 | - | [アルゴリズムロジック（日本語解説）](https://algo-logic.info/prim-mst/) |
| Borůvka法 | グラフ | 各連結成分から外へ出る最小重みの辺をまとめて採用し、成分を繰り返し併合する。 | - | [Algorithms 日本語訳（Borůvka法）](https://inzkyk.xyz/algorithms/minimum_spanning_trees/boruvka_algorithms/) |
| Bellman–Ford法 | グラフ | 全辺の緩和を繰り返し、負の重みを含む最短路や到達可能な負閉路を調べる。 | - | [アルゴリズムロジック（Bellman–Ford法）](https://algo-logic.info/bellman-ford/) |
| 0-1 BFS | グラフ | 重みが0か1の辺に応じて両端キューの前後へ追加し、最短距離を求める。 | - | [AtCoder公式日本語解説（0-1 BFS）](https://atcoder.jp/contests/abc213/editorial/2397) |
| Floyd–Warshall法 | グラフ | 経由してよい頂点を順に増やし、すべての頂点対の最短距離を更新する。 | - | [アルゴリズムロジック（Floyd–Warshall法）](https://algo-logic.info/warshall-floyd/) |
| Stoer–Wagner法 | グラフ | 無向グラフの頂点を段階的に選んで縮約し、グラフ全体の最小カットを求める。 | - | [natsugiri（Stoer–Wagner法の日本語解説）](https://natsugiri.hatenablog.com/entry/2021/05/02/215442) |
| Prüfer符号 | 木 | ラベル付き木から葉を順に取り除いて列に変換し、木と符号列を相互に対応付ける。 | - | [AtCoder公式講座（Prüfer符号）](https://info.atcoder.jp/entry/algorithm_lectures/prufer_code) |
| Floydの循環検出法 | 探索 | 進む速度が異なる2つのポインタを使い、数列や連結リストの周期と入口を探す。 | - | [Qiita / vulptex（Floydの循環検出法）](https://qiita.com/vulptex/items/090e66477e2333564807) |
| mex（最小除外数） | 基本概念 | 集合に含まれない最小の非負整数を求め、頻度や存在判定の情報で管理する。 | - | [AtCoder公式講座（mex・基本用語）](https://info.atcoder.jp/entry/algorithm_lectures/basic_terms) |
| Slope Trick | 最適化 | 区分線形な凸関数の傾きの変化点を管理し、関数の加算や最小化を処理する。 | - | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/slope-trick.hpp) |
| Rollback Union-Find | データ構造 | 併合による変更履歴を保存し、経路圧縮を避けて過去の状態へ巻き戻せるようにする。 | - | [Nyaan's Library（解説・実装）](https://nyaannyaan.github.io/library/data-structure/rollback-union-find.hpp) |

## 出典

- [AtCoder Library Practice Contest 問題一覧](https://atcoder.jp/contests/practice2/tasks)
- [Educational DP Contest 問題一覧](https://atcoder.jp/contests/dp/tasks)
- [競プロ典型90問 問題一覧](https://atcoder.jp/contests/typical90/tasks)
- [競プロ典型90問 公式教材・解説への案内](https://atcoder.jp/contests/typical90)
- [Library Checker](https://judge.yosupo.jp/)
- [Library Checker 公式問題一覧データ](https://github.com/yosupo06/library-checker-problems/blob/master/categories.toml)
- [CP-Algorithms](https://cp-algorithms.com/)
- [Nyaan's Library](https://nyaannyaan.github.io/library/)
- [Luzhiled's Library](https://ei1333.github.io/library/)
- [USACO Guide](https://usaco.guide/)
- [Open Data Structures](https://opendatastructures.org/)
- [Algorithms / Jeff Erickson](https://jeffe.cs.illinois.edu/teaching/algorithms/)
- [Algorithms 日本語訳](https://inzkyk.xyz/algorithms/)
- [AtCoder公式アルゴリズム講座（日本語）](https://info.atcoder.jp/entry/algorithm_lectures/index)
- [アルゴリズムロジック（日本語）](https://algo-logic.info/)
- [Python公式日本語ドキュメント](https://docs.python.org/ja/3/)
- 基本概念は各行に記載した公式ドキュメント・大学講義ノートも参照しています。

概要はこのページ用に記述したものです。問題文・解説本文は転載していません。

## 編集方法

- 表の見出しと5列（テーマ・分野・概要・出題例・資料）は維持してください。
- 候補を追加・削除する場合は、上の表の行を編集してください。別のMarkdownファイルを作る必要はありません。
- テーマ・分野・概要は必須です。問題や資料がない場合は、そのセルに `-` を記載してください。問題と資料の少なくとも一方が必要です。
- テーマ名の重複やセル内の縦棒、URL内の未エンコードの空白を避けてください。
- 出題例は `[表示名](https://atcoder.jp/contests/コンテストID/tasks/問題ID)` または `[表示名](https://judge.yosupo.jp/problem/問題ID)` の形式で記載してください。
- 資料は `[表示名](https://資料のURL)` の形式です。複数のリンクは ` ; `（前後に半角スペース）で区切ってください。問題の複数指定も同じ形式です。
- 資料にはテーマに直接関係するページを登録し、解説・教科書・参考実装を表示名で区別してください。問題だけ・資料だけの候補も同じ確率で抽選されます。
- テーマに対応する日本語資料がある場合は、日本語版の公式ドキュメント・日本語解説・日本語訳を優先してください。日本語資料を確認できない場合は、英語解説や公式参考実装を掲載できます。
- データの読み込みにはHTTP配信が必要です。サイトへの配置、またはリポジトリ直下で `python -m http.server 8000` を実行し、`http://localhost:8000/single/algorithm_gacha/` にアクセスしてください。
