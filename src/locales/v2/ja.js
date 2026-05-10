export default {
  help_v3: {
    support: {
      heading: 'さらにサポートが必要ですか？',
      default_description: '追加の質問、特殊ケース、またはアプリ外に続く導線については、Source Combatives の DojoMate ヘルプ掲示板をご利用ください。',
      default_button: 'DojoMate ヘルプ掲示板を開く'
    },
    layout: {
      badge: 'ヘルプ v3',
      intro: '現在の DojoMate のダッシュボードと役割に合わせて整理したワークフローガイドです。',
      open_v2: 'ヘルプ v2 を開く',
      search_placeholder: 'ヘルプ v3 を検索',
      search_no_results: '結果が見つかりません',
      nav: {
        start_here: 'ここから開始',
        home: 'ヘルプ v3 ホーム',
        member_home: '受講者ガイド',
        admin_home: '管理ガイド',
        owner_home: 'オーナーガイド',
        account_home: 'アカウントガイド',
        member: '受講者',
        admin: '管理 / スタッフ',
        owner: 'オーナー / 運営',
        account: 'アカウント / 設定',
        join_academy: '道場に参加する',
        memberships: '会員資格',
        member_cards: 'カード',
        card_disputes: 'カード異議申し立て',
        booking: '予約',
        attendance_records: '出席記録',
        system_alerts: 'システム通知',
        broadcasts: 'Broadcast',
        online_learning: 'オンライン学習',
        events: 'イベント',
        academy_context: '道場コンテキスト',
        admin_members: 'メンバー管理',
        admin_cards: 'カード管理',
        session_debt: 'セッション負債',
        lessons: 'レッスンテンプレート',
        schedule: 'スケジュール',
        admin_booking: '代理予約',
        admin_broadcasts: 'Broadcast 発行',
        alerts_qr: '通知と QR ツール',
        create_academy: '道場を作成する',
        onboarding: 'オンボーディング',
        business_management: 'ビジネス管理',
        instructors: 'インストラクター',
        access: 'アクセス権',
        operations_analytics: '運営分析',
        timesheets_salaries: '勤怠と給与',
        oversight: '監督レビュー',
        owner_tools: 'ツール',
        sign_in: 'サインイン',
        create_account: 'アカウント作成',
        reset_password: 'パスワード再設定',
        change_password: 'パスワード変更',
        profile: 'プロフィール',
        child_accounts: '子どもアカウント',
        privacy_progression: 'プライバシーと進捗',
        preferences: '設定',
        delete_account: 'アカウント削除',
        logout: 'ログアウト'
      }
    },
    welcome: {
      badge: 'ヘルプ v3',
      title: '現在のワークフローガイド',
      intro: '現在の DojoMate の役割とダッシュボードに沿って手順を確認したいときは、ヘルプ v3 を使ってください。',
      areas_title: '自分の作業に合う領域を選ぶ',
      member_title: '受講者',
      member_body: '道場参加、カード、予約、通知、Broadcast、オンライン学習、イベント。',
      member_link: '受講者ガイドを開く',
      admin_title: '管理 / スタッフ',
      admin_body: 'メンバー、カード、スケジュール、代理予約、Broadcast、日常運営。',
      admin_link: '管理ガイドを開く',
      owner_title: 'オーナー / 運営',
      owner_body: '道場作成、オンボーディング、オーナー専用設定、アクセス管理、運営ワークフロー。',
      owner_link: 'オーナーガイドを開く',
      account_title: 'アカウント / 設定',
      account_body: 'サインイン、パスワード補助、プロフィール、プライバシー、設定、ログアウト。',
      account_link: 'アカウントガイドを開く',
      note_title: 'v3 の違い',
      note_body: 'v3 は現在の製品内の役割とダッシュボード責務に合わせて整理されており、混在しやすい v2 より探しやすく、今後のアシスタント抽出にも向いています。',
      note_button: 'ヘルプ v2 を見る'
    },
    member: {
      home: {
        badge: '受講者',
        title: '受講者ガイド',
        intro: '道場でトレーニングしていて、参加、会員資格、カード、予約、通知、Broadcast、オンライン学習、イベントで案内が必要なときはこのガイドを使ってください。',
        areas_title: '受講者トピック',
        links: [
          {
            title: '道場参加と会員資格',
            body: '正しい道場に参加し、現在選択中の道場コンテキストを確認します。',
            links: [
              { label: '道場に参加する', to: '/help-v3/member/join-academy' },
              { label: '会員資格', to: '/help-v3/member/memberships' }
            ]
          },
          {
            title: 'カードとクラス',
            body: 'カード確認、異議申し立て、予約、出席記録の確認を行います。',
            links: [
              { label: 'カード', to: '/help-v3/member/cards' },
              { label: 'カード異議申し立て', to: '/help-v3/member/card-disputes' },
              { label: '予約', to: '/help-v3/member/booking' },
              { label: '出席記録', to: '/help-v3/member/attendance-records' }
            ]
          },
          {
            title: '道場からの更新',
            body: 'システム通知、Broadcast、オンライン学習、イベント情報を確認します。',
            links: [
              { label: 'システム通知', to: '/help-v3/member/system-alerts' },
              { label: 'Broadcast', to: '/help-v3/member/broadcasts' },
              { label: 'オンライン学習', to: '/help-v3/member/online-learning' },
              { label: 'イベント', to: '/help-v3/member/events' }
            ]
          }
        ]
      },
      join_academy: {
        badge: '受講者',
        title: '道場に参加する',
        intro: 'DojoMate を使っている道場にアカウントを接続したいときに使います。',
        what_title: 'できること',
        what_items: [
          'Discover で道場を閲覧する。',
          '道場名で検索する。',
          '道場から渡された QR コードを読み取る。',
          '参加を決める前に道場詳細を開く。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '複数の道場を比較したい場合は Discover Academy を使います。',
          'すでに道場がわかっている場合や QR を読みたい場合は Academy Search を使います。',
          'まず道場詳細で本当に正しい道場か確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '参加申請後も、道場側で承認が必要な場合があります。',
          '保護者管理アカウントや子どもアカウント連携では追加手順が必要になることがあります。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、その道場が academy list または pending 状態に現れます。',
          'まだ承認されていない場合、以後の受講者機能は一部制限されたままになることがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '会員資格', to: '/help-v3/member/memberships' },
          { label: 'カード', to: '/help-v3/member/cards' }
        ]
      },
      memberships: {
        badge: '受講者',
        title: '会員資格と道場コンテキストを管理する',
        intro: '一つまたは複数の道場に所属していて、現在どの道場が有効なのか確認したいときに使います。',
        what_title: 'できること',
        what_items: [
          '自分のアカウントに紐づいた道場を確認する。',
          'カード、予約、Broadcast を使う前に選択中の道場を切り替える。',
          '何かが見当たらないとき、まず正しい道場にいるか確認する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '参加済み academy list と受講者側の academy context 画面を使います。',
          'カードやクラスがないと決めつける前に、現在選択中の道場を再確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '道場選択が違うと、カード、スケジュール、Broadcast が存在しないように見えることがあります。',
          '会員資格状態は、道場承認や子どもアカウント連携の影響も受けます。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '正しい道場を選ぶと、以後の受講者画面はその道場データを読み込みます。',
          '間違った道場のままだと、予約やカード関連が引き続き不一致に見えます。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'カード', to: '/help-v3/member/cards' },
          { label: '予約', to: '/help-v3/member/booking' }
        ]
      },
      cards: {
        badge: '受講者',
        title: 'カードと保留中の支払いを確認する',
        intro: '現在使えるカード、保留中のカード支払い、または予約できない理由がカードにあるかを確認したいときに使います。',
        what_title: 'できること',
        what_items: [
          '現在選択中の道場で使えるカードを確認する。',
          '保留中の支払いカードがあるか確認する。',
          '予約失敗が本当にカード原因かを先に切り分ける。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '受講者側のカード画面と保留中カード支払いフローを使います。',
          '予約画面で利用可能カードがないと言われたら、先にここへ戻って確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '受講者カードは現在選択中の道場に紐づきます。',
          'ここはオーナーや管理側の監査レビュー画面ではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '保留中支払いが成功すると、カードが利用可能状態に変わることがあります。',
          '支払いや発行更新の後でもカード表示がおかしい場合は、異議申し立てフローを使ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'カード異議申し立て', to: '/help-v3/member/card-disputes' },
          { label: '予約', to: '/help-v3/member/booking' }
        ]
      },
      booking: {
        badge: '受講者',
        title: 'クラスを予約する / 予約を取り消す',
        intro: '道場のスケジュールを開き、クラス詳細を確認し、使えるカードを選んで参加枠を確定したいときに使います。',
        steps_title: 'よくある手順',
        steps_items: [
          '現在選択中の道場のスケジュールを開く。',
          '予定されているクラスを選び、詳細を見る。',
          'カード選択を開き、使えるカードを選び、必要ならメンバー向け名簿で匿名にするか決める。',
          '予約または予約取消を確定する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Academy Schedule、Academy Booking、Academy Card Selection を使います。',
          'クラスやカードが違って見える場合は、まず選択中の道場を確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '予約は現在の scheduled-lesson 予約フローを使い、一般的なレッスン編集ではありません。',
          'カード適格性と予約ガードはバックエンドで判定されます。',
          '匿名予約は他のメンバーにだけ身元を隠し、道場スタッフには実名のまま見えます。',
          '予約アクションがブロックされても、キャンセル済みや処理済みのクラス詳細は読めるまま残ることがあります。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると予約状態と表示名簿が更新されます。',
          '想定どおりのガード失敗では、予約締切や開始済みなど、なぜブロックされたかが表示されます。',
          '処理できたか確認できない失敗では、リロードして再確認が必要になることがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '出席記録', to: '/help-v3/member/attendance-records' },
          { label: 'システム通知', to: '/help-v3/member/system-alerts' }
        ]
      },
      attendance_records: {
        badge: '受講者',
        title: '出席記録を確認する',
        intro: '過去のクラスが期待どおりに記録されたか確認したいときは、出席記録を使います。',
        what_title: 'できること',
        what_items: [
          '現在選択中の道場で過去の出席履歴を確認する。',
          '特定のクラスが自分の履歴にあるか確かめる。',
          '予約や受講後の確認として記録を使う。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '受講者側の出席画面や academy records 画面を使います。',
          '以前の予約や来館結果を確認したいときは、まずここから始めてください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '出席記録は確認用であり、受講者側から編集するものではありません。',
          '記録が間違っている場合は道場側で修正が必要です。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '正常な記録があれば、そのクラスが登録済みであることを確認できます。',
          '記録が欠けている、または間違っている場合は、自己修正ではなく道場側フォローに進んでください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '予約', to: '/help-v3/member/booking' },
          { label: 'カード異議申し立て', to: '/help-v3/member/card-disputes' }
        ]
      },
      system_alerts: {
        badge: '受講者',
        title: 'システム通知を確認する',
        intro: 'アカウント、道場、または関連する受講者フローに関する重要な更新を確認したいときに使います。',
        what_title: 'できること',
        what_items: [
          'システム生成の重要なアカウント更新や道場更新を読む。',
          'プッシュ通知が正確な画面へ移動できないときの安全なフォールバックとして使う。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Academy Alerts などの受講者通知画面を使います。',
          '通知タップで特定画面へ進めない場合、アプリはまずここへ遷移することがあります。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'システム通知はチャットではありません。',
          'すべての通知タイプに完全なディープリンクがあるわけではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '読了すると既読状態が更新されることがあります。',
          '通知が別のフローを指している場合は、通知一覧に留まらずそのフローへ進んでください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'Broadcast', to: '/help-v3/member/broadcasts' },
          { label: '予約', to: '/help-v3/member/booking' }
        ]
      },
      broadcasts: {
        badge: '受講者',
        title: '道場の Broadcast を読む',
        intro: 'Broadcast を使って、現在選択中の道場の投稿を読みます。受講者側のフィードは読み取り専用で、道場からの更新やトレーニング投稿を見るためのものです。',
        what_title: 'できること',
        what_items: [
          'Updates と Training の切り替え。',
          '文章、画像、道場からの Broadcast 投稿を読む。',
          '画像を大きく開いて見ながら、受講者ダッシュボード内で内容を確認する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '現在選択中の道場に紐づく受講者側 Broadcast 画面を使います。',
          '違うフィードが見えるときは、まず道場選択を確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '受講者側 Broadcast は読み取り専用です。',
          'コメント、返信、いいね、受講者投稿はありません。',
          '空フィードでも壊れているとは限らず、単に公開中の投稿がない場合があります。',
          'Broadcast の内容は道場スタッフまたはオーナー側が作成します。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '正常に読み込めば、現在選択中の道場のフィードが表示されます。',
          'アカウント状態やシステム状態を見たい場合は System Alerts を使ってください。',
          '道場にオンライン学習権限があっても、Broadcast と Online は別の面です。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'システム通知', to: '/help-v3/member/system-alerts' },
          { label: 'オンライン学習', to: '/help-v3/member/online-learning' }
        ]
      },
      card_disputes: {
        badge: '受講者',
        title: 'カード異議申し立てを行う',
        intro: 'カード、削除、またはカード関連変更が受講者側から見ておかしく、道場側の追跡対応が必要なときに使います。',
        what_title: 'できること',
        what_items: [
          '気づいたカード問題に紐づく異議申し立て記録を作成する。',
          '受講者側から見て何がおかしいか説明する。',
          '予約やプロフィールの質問に混ぜず、専用のフォロー経路へ分ける。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Academy Disputes などの受講者カード / 異議申し立て画面を使います。',
          '可能なら問題のあるカードから始めてください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '異議申し立てを出してもカードは即時修正されません。',
          'audit logs のようなオーナー専用レビューは、受講者異議申し立てフローには含まれません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、異議申し立ては道場側のフォロー項目になります。',
          '道場レビューが終わるまでは、見えているカード状態が変わらないことがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'カード', to: '/help-v3/member/cards' },
          { label: '出席記録', to: '/help-v3/member/attendance-records' }
        ]
      },
      online_learning: {
        badge: '受講者',
        title: 'オンライン学習を使う',
        intro: '受講者アカウントにオンライン学習アクセスがあり、カリキュラム閲覧、レッスン表示、動画視聴、宿題提出をしたいときに使います。',
        what_title: 'できること',
        what_items: [
          'アクセスがあるとき、受講者ダッシュボードから Online を開く。',
          'カリキュラム、catalog、レッスン階層を閲覧する。',
          '指導クリップや関連 tip 動画を見る。',
          '所属レッスンの流れから宿題を開いて提出する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Online Home、Curriculum、Catalog、Lesson、Video、Homework 画面を使います。',
          '見たいクリップまでカリキュラムから順に辿ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'Online タイルはアクセス権があるときだけ表示されます。',
          'ここでの Expo Online は受講者利用面であり、オンライン管理面ではありません。',
          '宿題と tip 動画は所属レッスンとスライスに紐づき、独立した学院全体フィードにはなりません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          'アクセスがあると、ダッシュボードに Online 入口が現れます。',
          '宿題や tip は、それぞれのレッスンとスライスに留まり、独立して浮いた内容にはなりません。',
          'アクセスがない場合は、空の画面ではなく入口自体が見えないのが正しい期待です。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'イベント', to: '/help-v3/member/events' },
          { label: 'Broadcast', to: '/help-v3/member/broadcasts' }
        ]
      },
      events: {
        badge: '受講者',
        title: 'イベントと申込を確認する',
        intro: '競技イベントの閲覧、競技プロフィールの維持、イベント申込手順の管理をしたいときは Events を使います。',
        what_title: 'できること',
        what_items: [
          '参加可能な競技イベントを閲覧する。',
          '申込前にイベント詳細を開く。',
          '競技プロフィールを作成または更新する。',
          'イベントが対応している場合は申込と支払い手順を管理する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'イベント一覧、詳細、プロフィール、申込画面を使います。',
          '一部のイベントは連盟サイトやイベントサイトなど外部提供者へ引き継がれます。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '外部提供者フローは DojoMate app 内に完全には留まりません。',
          '申込状態は通常の道場会員フロー以外のイベント固有要件にも左右されます。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると競技プロフィールや申込状態が更新されます。',
          '外部提供者を使うイベントでは、完全なアプリ内フォームではなく引き継ぎが発生します。',
          '競技プロフィール更新は、後のイベント申込準備の一部として使われることがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '会員資格', to: '/help-v3/member/memberships' },
          { label: 'システム通知', to: '/help-v3/member/system-alerts' }
        ]
      }
    },
    admin: {
      home: {
        badge: '管理',
        title: '管理とスタッフのガイド',
        intro: '道場の管理ダッシュボードからメンバー、カード、スケジュール、代理予約、Broadcast を扱うときはこのガイドを使ってください。',
        areas_title: '管理トピック',
        links: [
          {
            title: '道場コンテキストとメンバー',
            body: '先に正しい道場が選ばれていることを確認してから、メンバーや役割の作業に進みます。',
            links: [
              { label: '道場コンテキスト', to: '/help-v3/admin/academy-context' },
              { label: 'メンバー管理', to: '/help-v3/admin/members' }
            ]
          },
          {
            title: '日常運営',
            body: 'カード、セッション負債、レッスンテンプレート、スケジュール、代理予約を扱います。',
            links: [
              { label: 'カード管理', to: '/help-v3/admin/cards' },
              { label: 'セッション負債', to: '/help-v3/admin/session-debt' },
              { label: 'レッスンテンプレート', to: '/help-v3/admin/lessons' },
              { label: 'スケジュール', to: '/help-v3/admin/schedule' },
              { label: '代理予約', to: '/help-v3/admin/admin-booking' }
            ]
          },
          {
            title: '通知と支援ツール',
            body: 'Broadcast 発行、通知、QR ツールを使います。',
            links: [
              { label: 'Broadcast 発行', to: '/help-v3/admin/broadcasts' },
              { label: '通知と QR ツール', to: '/help-v3/admin/alerts-qr' }
            ]
          }
        ]
      },
      cards: {
        badge: '管理',
        title: 'カードを作成して発行する',
        intro: 'カードテンプレート作成、有効カード発行、現在のカード確認、または道場メンバー向けカード状態の変更が必要なときに管理側 Cards を使います。',
        what_title: 'できること',
        what_items: [
          'カードテンプレートを作成する。',
          '既存テンプレートを確認する。',
          '有効カードをメンバーへ発行する。',
          '有効カードを確認し、画面で許可されている範囲で一時停止関連の状態を扱う。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'テンプレート作成、テンプレート一覧、発行、Active Cards などの画面を使います。',
          '受講者予約の問題が実はカード不備なら、ここに戻って確認します。',
          'オンボーディング中は、最初のカードのマイルストーンが道場作成の一部なので、アプリが直接 Cards に案内することがあります。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'カードテンプレートと有効カードは別の層です。',
          'audit logs のようなオーナー専用レビューは、通常の管理側 Cards ガイドには含めません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、カードに関係する管理側と受講者側のフローが更新されます。',
          '正しい道場コンテキストにカード更新が反映されると、予約適格性も変わることがあります。',
          'このカードがオンボーディングやスタッフテスト専用でも、正式課金準備とは別にマイルストーンとして数えられます。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'セッション負債', to: '/help-v3/admin/session-debt' },
          { label: '代理予約', to: '/help-v3/admin/admin-booking' }
        ]
      },
      academy_context: {
        badge: '管理',
        title: '今どの道場を管理しているか確認する',
        intro: '複数の道場を扱っている、または正しい管理コンテキストにいない可能性があるときは、先に academy context を確認してください。',
        what_title: 'できること',
        what_items: [
          '現在読み込まれている道場を確認する。',
          'メンバー、カード、スケジュール、Broadcast を触る前に正しい道場へ切り替える。',
          'いま自分が Admin なのか Business / Owner 側なのかを見分ける。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '道場切り替えと管理入口フローを使います。',
          '別の道場から戻った直後は、作業再開前にここで再確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '管理 / スタッフ操作は現在選択中の道場に紐づきます。',
          'オーナーや Business 側の設定作業を、通常の admin 機能と混同しないでください。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '正しい道場を確認できれば、以後の管理画面は対応するデータを読み込みます。',
          '道場が違うと、メンバー、カード、スケジュールが欠けているように見えることがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'メンバー管理', to: '/help-v3/admin/members' },
          { label: 'カード管理', to: '/help-v3/admin/cards' }
        ]
      },
      members: {
        badge: '管理',
        title: 'メンバーを管理する',
        intro: '保留中、承認済み、拒否済み、または禁止中の道場メンバーを確認し、道場内での参加状態を把握したいときに Members を使います。',
        what_title: 'できること',
        what_items: [
          '保留中と承認済みの会員状態を確認する。',
          '画面で許可されている範囲で、拒否、禁止、または状態更新を行う。',
          'メンバープロフィールや出席関連の情報を開く。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Pending、Accepted、Rejected、Banned などの状態画面を使います。',
          '管理側のメンバー領域から詳細や出席情報を開きます。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'メンバー、インストラクター、管理アクセスは同じ概念ではありません。',
          'インストラクター扱いの承認済み成人行は、通常の成人メンバー行として説明すべきではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、その人は正しい可視状態へ移動します。',
          '関連する管理画面も新しい状態に合わせて更新されます。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'カード管理', to: '/help-v3/admin/cards' },
          { label: '代理予約', to: '/help-v3/admin/admin-booking' }
        ]
      },
      session_debt: {
        badge: '管理',
        title: 'セッション負債を精算する',
        intro: 'カードや予約履歴によって、スタッフ側で解消すべき負債状態が発生したときに使います。',
        what_title: 'できること',
        what_items: [
          '未解消のセッション負債を確認する。',
          '現在の管理側精算フローで負債を処理する。',
          '負債処理を受講者異議申し立てやオーナー監督と分ける。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '現在のカード機能に属する管理側 debt / card-debt 画面を使います。',
          'メンバープロフィール想定からではなく、カード運用側から入ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '負債処理は受講者側の異議申し立てとは別です。',
          'オーナーレビュー画面は、この日常的な管理精算フローとは別です。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '精算後、負債状態と関連カード文脈が更新されます。',
          '根本レコード自体が争点なら、単なる未払いではなく正しい異議申し立てや監督経路へ切り替えてください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'カード管理', to: '/help-v3/admin/cards' },
          { label: 'メンバー管理', to: '/help-v3/admin/members' }
        ]
      },
      lessons: {
        badge: '管理',
        title: 'レッスンテンプレートを管理する',
        intro: 'レッスンを実際のスケジュールに公開する前に、テンプレートを作成、編集、削除したいときに使います。',
        what_title: 'できること',
        what_items: [
          'レッスンテンプレートを作成する。',
          'テンプレート内の指導内容やスケジュール詳細を編集する。',
          '不要になったテンプレートを削除する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'lesson-day、create lesson、edit lesson などのテンプレート画面を使います。',
          '実際の schedule に公開する前に、まずここでテンプレート作業を終えます。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'レッスンテンプレートは、すでに公開済みの予定レッスンとは別です。',
          'schedule 層に進む前のテンプレート変更だけでは、公開済みスケジュール結果すべてを自動で説明しません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、そのテンプレートを後続のスケジュール公開に使えます。',
          '実際のイベントがすでに存在する場合は、schedule 側の編集が別途必要になることがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'スケジュール', to: '/help-v3/admin/schedule' },
          { label: '代理予約', to: '/help-v3/admin/admin-booking' }
        ]
      },
      schedule: {
        badge: '管理',
        title: 'スケジュールを公開・管理する',
        intro: 'レッスン公開、予定レッスン編集、キャンセル、または実際の道場スケジュールからの削除が必要なときに使います。',
        what_title: 'できること',
        what_items: [
          'テンプレートから予定レッスンを公開する。',
          '予定レッスンを編集またはキャンセルする。',
          '予定レッスン詳細と参加名簿状態を確認する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'schedule layout と create/edit event フローを使います。',
          '現在状態を確認したい場合は、その予定レッスン詳細を直接開いてください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'キャンセル済みや処理済みのレッスンも、レビューのために参照可能であるべきです。',
          '実際の予約操作だけが、必要時にガードでブロックされるべきです。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、道場スケジュールが現在の予定レッスン状態を反映して更新されます。',
          'レッスンがキャンセル済みでも、詳細画面は後続レビューに役立つことがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'レッスンテンプレート', to: '/help-v3/admin/lessons' },
          { label: '代理予約', to: '/help-v3/admin/admin-booking' }
        ]
      },
      admin_booking: {
        badge: '管理',
        title: '受講者やメンバーの代わりに予約する',
        intro: 'スタッフが管理側スケジュールから、メンバーの代わりに予約作成や削除を行う必要があるときに使います。',
        what_title: 'できること',
        what_items: [
          '管理側から予定レッスンを開く。',
          '対象メンバーと有効なカードを選ぶ。',
          '現在の予約アクションフローで予約を作成または削除する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Admin Booking と関連カード選択フローを使います。',
          '一般メンバー検索からではなく、扱っている予定レッスンから始めてください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '管理側では匿名予約は作成できません。',
          '予約可能かどうかは backend booking guard codes が引き続き決めます。',
          '名簿詳細が見えていても、想定外失敗時には更新して再試行が必要になることがあります。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功するとレッスン名簿と予約状態が更新されます。',
          '動作がブロックされた場合、画面はガード条件を説明すべきで、レッスンが消えたように見せるべきではありません。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'スケジュール', to: '/help-v3/admin/schedule' },
          { label: 'メンバー管理', to: '/help-v3/admin/members' }
        ]
      },
      broadcasts: {
        badge: '管理',
        title: 'Broadcast を公開する',
        intro: 'アプリから道場更新やトレーニング投稿を出したいときは、現在の管理側 Broadcast フローを使います。',
        what_title: 'できること',
        what_items: [
          'テキストと画像を含む Broadcast を作成する。',
          'テキストと単一の MP4 動画を含む Broadcast を作成する。',
          '現在選択中の道場のフィードへすぐに公開する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '管理側 Members 領域にある Broadcast 公開画面を使います。',
          '公開前に、正しい選択道場コンテキストにいることを確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '現在は下書き保存フローはありません。',
          'アプリは単一動画のみ対応で、画像と動画の混在投稿はできません。',
          '権限は引き続き道場ロールと access に依存します。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '作成に成功すると、Broadcast はすぐ公開されます。',
          'メディアや権限が不正な場合は、隠し下書きではなく作成失敗になります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '通知と QR ツール', to: '/help-v3/admin/alerts-qr' },
          { label: '道場コンテキスト', to: '/help-v3/admin/academy-context' }
        ]
      },
      alerts_qr: {
        badge: '管理',
        title: '通知と QR ツールを使う',
        intro: '現在の道場コンテキストに関わる通知、QR 操作、または復帰操作が必要なときは、これらの管理側支援ツールを使います。',
        what_title: 'できること',
        what_items: [
          '道場に属する管理または business 通知を確認する。',
          'QR 関連ツールを開く。',
          '復帰や切り替えが必要なときに道場コンテキスト支援フローを使う。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '道場側メニューの通知画面と QR 入口を使います。',
          '現在の道場が違う場合は、道場スイッチャーへ戻ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'これらのフローは道場作業を支援しますが、オーナー専用の business 管理を置き換えるものではありません。',
          '一部の復帰操作は、通常メニューではなく bootstrap や settings の広い経路に属します。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '正しい通知または QR 操作は、次の関連する道場フローへ進めます。',
          '問題がオーナー専用の business 設定である場合、次はオーナー側領域に移ることになります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '道場コンテキスト', to: '/help-v3/admin/academy-context' },
          { label: 'Broadcast 発行', to: '/help-v3/admin/broadcasts' }
        ]
      }
    },
    owner: {
      home: {
        badge: 'オーナー',
        title: 'オーナーと運営のガイド',
        intro: '道場作成、オンボーディング、オーナー専用設定、運営や監督レビューが必要なときはこのガイドを使ってください。',
        areas_title: 'オーナートピック',
        links: [
          {
            title: '道場作成とオンボーディング',
            body: '最初の道場を作成し、マイルストーン主導のオンボーディングを進めます。',
            links: [
              { label: '道場を作成する', to: '/help-v3/owner/create-academy' },
              { label: 'オンボーディング', to: '/help-v3/owner/onboarding' }
            ]
          },
          {
            title: 'オーナー業務管理',
            body: '道場情報、インストラクター、管理アクセスを管理します。',
            links: [
              { label: 'ビジネス管理', to: '/help-v3/owner/business-management' },
              { label: 'インストラクター', to: '/help-v3/owner/instructors' },
              { label: 'アクセス権', to: '/help-v3/owner/access' }
            ]
          },
          {
            title: '運営と監督',
            body: '分析、勤怠と給与、監督レビュー、ツールを使います。',
            links: [
              { label: '運営分析', to: '/help-v3/owner/operations-analytics' },
              { label: '勤怠と給与', to: '/help-v3/owner/timesheets-salaries' },
              { label: '監督レビュー', to: '/help-v3/owner/oversight' },
              { label: 'ツール', to: '/help-v3/owner/tools' }
            ]
          }
        ]
      },
      access: {
        badge: 'オーナー',
        title: 'アクセス権と権限を管理する',
        intro: '現在の道場の管理側に入れる承認済み成人メンバーを決めたいときは Access を使います。',
        what_title: 'できること',
        what_items: [
          '条件を満たす承認済み成人メンバーに道場管理アクセスを付与する。',
          '道場単位の permission row を更新または削除する。',
          '管理アクセスを教える役割と切り分ける。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'オーナー側の permissions または Access 画面を使います。',
          '幅の狭いメニューではボタンが `Access` と短く表示されることがあります。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '一つの道場の permission row を外しても、その人の他道場での broader admin role が自動で消えるわけではありません。',
          'この画面は道場管理アクセスを扱うもので、インストラクター身分を扱うものではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、その人が現在の道場でどの管理機能を開けるかが変わります。',
          'その人に教える役割も必要なら、別途 Instructors を使います。',
          '他の道場にも属している場合、その別道場側の broader admin role は残ることがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'インストラクター', to: '/help-v3/owner/instructors' },
          { label: '運営分析', to: '/help-v3/owner/operations-analytics' }
        ]
      },
      onboarding: {
        badge: 'オーナー',
        title: '最初の道場オンボーディングを進める',
        intro: '道場作成後に、最初の道場向けオンボーディングが現在どのように進むのかを理解したいときに使います。',
        steps_title: 'マイルストーン順序',
        steps_items: [
          '道場を作成する。',
          '最初のインストラクターを追加するか、オーナー自身がヘッドインストラクターになるか決める。',
          '最初のカードテンプレートを作成する。',
          '最初の有効カードを発行する。',
          '最初の予定レッスンを作成する。',
          '最初の管理側予約を完了する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'ガイド付きダッシュボードと全画面オンボーディング画面に従います。',
          'アプリが次のマイルストーンとして強調表示している領域を使います。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'オンボーディングはマイルストーン駆動で、永続的な usage-history 状態に基づきます。',
          '完了のために実在の有料生徒やオンライン決済設定は必須ではありません。',
          'オンボーディング完了は請求や集金準備完了と同じ意味ではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '各マイルストーン完了後に、アプリが次の推奨セクションを開示します。',
          'オンボーディング完了後は、より広い管理ダッシュボードが使えるようになり、権限次第で追加ツールも現れます。',
          'このチュートリアルは、実在の有料メンバーがいなくても、自分やスタッフのテストフローで完了できます。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'インストラクター', to: '/help-v3/owner/instructors' },
          { label: 'アクセス権', to: '/help-v3/owner/access' }
        ]
      },
      create_academy: {
        badge: 'オーナー',
        title: '新しい道場を作成する',
        intro: '最初の道場、または追加の道場を作成したいときは、道場作成フローを使います。',
        steps_title: 'できること',
        steps_items: [
          '新しい道場を作成する。',
          '複数の立場や複数の道場がある場合に作成モードへ切り替える。',
          '作成後、そのままオンボーディングへ進む。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Business の作成フローと関連する bootstrap / gate 画面を使います。',
          '最初に経路選択画面が出る場合は、既存管理に入るのではなく新規作成が目的か確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '作成可能な道場数は現在のプランや academy slots の影響を受けることがあります。',
          '作成モードをキャンセルすると、設定完了にはならず管理入口へ戻ります。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると新しい道場が選択され、そのまま後続オンボーディングへ進みます。',
          '途中でキャンセルした場合は、admin / business の選択入口へ戻ります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'オンボーディング', to: '/help-v3/owner/onboarding' },
          { label: 'ビジネス管理', to: '/help-v3/owner/business-management' }
        ]
      },
      business_management: {
        badge: 'オーナー',
        title: '道場のビジネス設定を管理する',
        intro: '道場そのものの情報、メディア、オーナーレベル設定を維持したいときは Business Management を使います。',
        what_title: 'できること',
        what_items: [
          '道場の基本情報を更新する。',
          'logo、banner、gallery などの道場メディアを管理する。',
          'オーナーレベルの道場設定やライフサイクル操作を行う。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Business 関連の編集、削除、メディア、オーナー設定画面を使います。',
          '日常の admin 作業ではなく、道場そのものを調整する仕事ならここへ戻ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'ここはオーナー範囲の academy-management 機能であり、通常スタッフ権限ではありません。',
          '道場情報を更新しても、管理アクセス権や運営分析権限が自動で変わるわけではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると道場情報と関連するオーナー画面に新しい内容が反映されます。',
          '次に誰へ管理アクセスを与えるかを扱うなら、Access に進んでください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'アクセス権', to: '/help-v3/owner/access' },
          { label: 'インストラクター', to: '/help-v3/owner/instructors' }
        ]
      },
      instructors: {
        badge: 'オーナー',
        title: 'インストラクターを管理する',
        intro: '道場スタッフのうち、教える側の身分を管理したいときは Instructors を使います。',
        what_title: 'できること',
        what_items: [
          '道場内のインストラクター身分を追加または維持する。',
          'オンボーディングや後続の道場運営で、ヘッドインストラクターと教員体制を整える。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'オーナー側の Business Instructors 画面を使います。',
          '問題が管理アクセスではなく教える身分にあるなら、ここへ戻ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'インストラクター身分は学園管理アクセスとは別です。',
          'インストラクター身分は給与や報酬の権限とも別です。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          'インストラクター設定が成功すると、オンボーディングや人員配置に必要な教える身分が満たされます。',
          '誰が管理できるかの問題なら、Instructors ではなく Access を使ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'アクセス権', to: '/help-v3/owner/access' },
          { label: 'オンボーディング', to: '/help-v3/owner/onboarding' }
        ]
      },
      operations_analytics: {
        badge: 'オーナー',
        title: '運営と分析を使う',
        intro: '通常の管理作業ではなく、オーナー向けの指標、即時レポート、推移、月次報告が必要なときは Operations を使います。',
        what_title: 'できること',
        what_items: [
          'リアルタイムと要約の道場指標を確認する。',
          'insights、trends、monthly reporting 画面を開く。',
          '高次のレポート確認では、通常 admin ダッシュボードではなくオーナー側の運営ビューを使う。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'オーナー側の運営ダッシュボードとレポート画面を使います。',
          '特定道場の分析を見るときは、現在選択中のオーナー道場コンテキストを維持してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '運営と分析はオーナー / operations 領域であり、一般 admin / staff 領域ではありません。',
          '分析はインストラクター身分やアクセス身分とは別の概念です。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          'アクセスに成功すると、選択中道場のオーナー向けレポートと運営文脈が読み込まれます。',
          '画面が見当たらない場合、原因はロールや権限であって、道場データの誤りとは限りません。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '勤怠と給与', to: '/help-v3/owner/timesheets-salaries' },
          { label: '監督レビュー', to: '/help-v3/owner/oversight' }
        ]
      },
      timesheets_salaries: {
        badge: 'オーナー',
        title: '勤怠と給与を管理する',
        intro: 'スタッフの勤怠を追跡したり、報酬データを管理したいときは、このオーナー運営ツールを使います。',
        what_title: 'できること',
        what_items: [
          'スタッフの出退勤記録を扱う、または記録済み時間を確認する。',
          '給与や報酬に関するデータを確認、管理する。',
          '報酬の問題をインストラクター身分や管理アクセスから切り分ける。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'staff time、staff salaries などのオーナー運営画面を使います。',
          '問題が報酬であり、教える身分ではないならここへ戻ります。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '報酬画面は誰がインストラクターかを定義するものではありません。',
          '報酬画面は access や permissions 管理の代わりにもなりません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '更新に成功すると、オーナー側の勤怠や報酬データが変わります。',
          'スタッフの問題が実際には役割割当なら、Instructors または Access に戻ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '運営分析', to: '/help-v3/owner/operations-analytics' },
          { label: 'アクセス権', to: '/help-v3/owner/access' }
        ]
      },
      oversight: {
        badge: 'オーナー',
        title: 'オーナー監督レビューを使う',
        intro: 'オーナー専用の issue records、delete records、audit logs を確認したいときは Oversight を使います。',
        what_title: 'できること',
        what_items: [
          'issue records を確認する。',
          'delete records を確認する。',
          'オーナー専用の監督領域で audit logs を確認する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '通常の管理ダッシュボードではなく、オーナー運営側の oversight 領域を使います。',
          '問題が履歴または運営レビューに属するときだけ、これらのツールを開きます。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'これらの画面はオーナー専用の監督ツールです。',
          '通常の管理側 Cards フローではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '監督レビューによって、履歴上または運営上で実際に何が起きたかを確認できます。',
          '後続アクションが必要なら、通常は正しい管理または受講者フローへ戻ります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '運営分析', to: '/help-v3/owner/operations-analytics' },
          { label: 'ツール', to: '/help-v3/owner/tools' }
        ]
      },
      tools: {
        badge: 'オーナー',
        title: 'オーナーツールと制限機能を使う',
        intro: '任意のオーナーツールが何をするか、そしてアクセスがあるときどこに現れるかを理解したいときに使います。',
        what_title: 'できること',
        what_items: [
          '現在の道場ワークフローに合うオーナーツールや制限機能を開く。',
          'オーナーツールを道場の基本ワークフローの上に重ねて使い、置き換えにはしない。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'アクセスが有効になった後、対応するオーナー / 運営ダッシュボード入口を使います。',
          '本当にツールが欠けていると判断する前に、現在選択中の道場を確認してください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'ヘルプは、ツールの目的とワークフローを説明すべきで、古い購入仕組みを説明すべきではありません。',
          '古い bundle 前提は、もはや製品事実として扱うべきではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '必要なアクセスがあると、そのツールは独自のワークフロー画面を開きます。',
          'ツールが見えない場合、通常はロールや entitlement の問題であり、ルート破損ではありません。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '運営分析', to: '/help-v3/owner/operations-analytics' },
          { label: 'ビジネス管理', to: '/help-v3/owner/business-management' }
        ]
      }
    },
    account: {
      home: {
        badge: 'アカウント',
        title: 'アカウントと設定のガイド',
        intro: 'サインイン、パスワード再設定、プロフィール更新、設定変更、セッション終了が必要なときはこのガイドを使ってください。',
        areas_title: 'アカウントトピック',
        links: [
          {
            title: 'アカウントに入る',
            body: 'サインイン、アカウント作成、またはパスワード再設定からアクセスを回復します。',
            links: [
              { label: 'サインイン', to: '/help-v3/account/sign-in' },
              { label: 'アカウント作成', to: '/help-v3/account/create-account' },
              { label: 'パスワード再設定', to: '/help-v3/account/reset-password' },
              { label: 'パスワード変更', to: '/help-v3/account/change-password' }
            ]
          },
          {
            title: 'プロフィールと関連付け',
            body: '大人アカウントの情報と子どもアカウントの関連付けを管理します。',
            links: [
              { label: 'プロフィール', to: '/help-v3/account/profile' },
              { label: '子どもアカウント', to: '/help-v3/account/child-accounts' }
            ]
          },
          {
            title: '設定と終了',
            body: 'プライバシー、設定、ログアウト、アカウント削除を扱います。',
            links: [
              { label: 'プライバシーと進捗', to: '/help-v3/account/privacy-progression' },
              { label: '設定', to: '/help-v3/account/preferences' },
              { label: 'アカウント削除', to: '/help-v3/account/delete-account' },
              { label: 'ログアウト', to: '/help-v3/account/logout' }
            ]
          }
        ]
      },
      create_account: {
        badge: 'アカウント',
        title: 'アカウントを作成する',
        intro: 'まだ DojoMate アカウントがなく、受講者または管理の正しい導線を始める必要があるときに使います。',
        what_title: 'できること',
        what_items: [
          '新しい DojoMate アカウントを作成する。',
          '実際に必要な役割導線を選ぶ。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          '認証入口フローの account creation 画面から始めます。',
          '自分が参加してトレーニングする側なのか、道場を作成・管理する側なのかを最初に決めます。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '最初に役割導線を間違えると、後でどのガイドを見るべきか混乱しやすくなります。',
          'メールアドレスがすでに既存アカウントに使われている場合は、再作成ではなくサインインかパスワード再設定を使います。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アプリは受講者または管理の対応する導線へ進みます。',
          '登録失敗時は、古い曖昧な文言ではなく現在の正規化された認証処理が使われるべきです。',
          '次の実用ステップは、道場参加や道場セットアップ開始など、役割に応じたものになります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'サインイン', to: '/help-v3/account/sign-in' },
          { label: '道場に参加する', to: '/help-v3/member/join-academy' }
        ]
      },
      reset_password: {
        badge: 'アカウント',
        title: 'パスワードを再設定する',
        intro: 'パスワードを忘れてアカウントへのアクセスを取り戻したいときは、パスワード再設定フローを使ってください。',
        steps_title: 'できること',
        steps_items: [
          'パスワード再設定メールの送信を依頼する。',
          '通常のサインインでは入れないときに、アクセス回復フローへ進む。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Sign In 画面からパスワード再設定へ進みます。',
          '単なるログイン失敗ではなく、パスワード忘れが問題ならここから始めてください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'これは紛失したパスワードを取り戻すためのフローであり、サインイン後の変更ではありません。',
          '登録メールアドレス自体が違っている場合、再設定メールは正しく届きません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功するとパスワード再設定メールが送られます。',
          'メールが届かない場合は、すぐ別アカウントを作るのではなく受信箱確認と再試行を行ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'サインイン', to: '/help-v3/account/sign-in' },
          { label: 'アカウント作成', to: '/help-v3/account/create-account' }
        ]
      },
      change_password: {
        badge: 'アカウント',
        title: 'パスワードを変更する',
        intro: 'すでにサインインしていて、現在のアカウントのパスワードを更新したいときに使います。',
        what_title: 'できること',
        what_items: [
          'サインイン済み状態でアカウントのパスワードを変更する。',
          '現在のアカウント導線を維持したままセキュリティを高める。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'サインイン済みアカウント設定の change password 画面を使います。',
          '問題がパスワード忘れではなく、能動的な更新ならここから始めてください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'これはパスワード再設定フローとは別です。',
          '通常は現在のパスワード確認が必要です。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アカウントに新しいパスワードが保存されます。',
          '現在の端末セッションは維持される一方、他端末セッションが失効することがあります。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'パスワード再設定', to: '/help-v3/account/reset-password' },
          { label: 'ログアウト', to: '/help-v3/account/logout' }
        ]
      },
      sign_in: {
        badge: 'アカウント',
        title: 'サインイン',
        intro: 'アカウントがすでに存在し、通常の DojoMate セッションを始めたいときに使います。',
        what_title: 'できること',
        what_items: [
          '既存の認証情報でサインインする。',
          '通常の受講者、管理者、またはオーナーのセッションを開始する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'Sign In 画面を主な入口として使います。',
          '問題が単なるサインイン失敗ではなくパスワード紛失なら、パスワード再設定の方を見てください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '現在の認証結果は、古いエラーテキストではなく新しい正規化ルールで扱われます。',
          '一部のアカウント整合性問題は、単なるパスワード誤りではなくサポートや復旧フローです。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アプリが現在のユーザーセッションを開始します。',
          '通常どおり開始できない場合、アプリは単なる資格情報エラーではなく、復旧やサポートに案内することがあります。',
          'その後の保護されたリクエストは、旧互換パスではなく現在の refresh-token フローに依存します。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'パスワード再設定', to: '/help-v3/account/reset-password' },
          { label: 'アカウント作成', to: '/help-v3/account/create-account' }
        ]
      },
      preferences: {
        badge: 'アカウント',
        title: '設定を調整する',
        intro: '言語、通貨、テーマ、その他の個人設定を変更したいときは、この設定トピックを使ってください。',
        what_title: 'できること',
        what_items: [
          'アプリ言語や表示設定を調整する。',
          'アカウント体験に関わる個人設定を変更する。',
          '道場の business 設定を変えずに、自分の app 体験を整える。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'アカウント設定と設定関連画面を使います。',
          '変えたいのが個人の app 体験であり、道場情報ではないならここに留まってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '設定を変えても道場の business 設定は変わりません。',
          '即時反映されるものもあれば、完全反映に次回更新が必要なものもあります。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功するとアプリ表示やアカウント体験が新しい設定に合わせて更新されます。',
          '現在のセッションを終えたい場合は、ここで削除を探すのではなく Logout を使ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'プライバシーと進捗', to: '/help-v3/account/privacy-progression' },
          { label: 'ログアウト', to: '/help-v3/account/logout' }
        ]
      },
      profile: {
        badge: 'アカウント',
        title: 'プロフィールを編集する',
        intro: '成人アカウント自体の情報を確認または更新したいときは Profile を使います。',
        what_title: 'できること',
        what_items: [
          '成人アカウントに紐づくプロフィール詳細を確認する。',
          'サインイン済みのアカウントフローからプロフィール項目を更新する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'profile user と edit-profile 関連画面を使います。',
          '道場会員情報ではなくアカウント身分情報が間違っているときは、ここへ戻ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'プロフィール編集は道場会員判断の代わりにはなりません。',
          '子どもアカウント関係は別フローです。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アカウントプロフィールに最新保存値が反映されます。',
          '問題が子ども関係や会員関係にあるなら、正しいトピックへ切り替えてください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '子どもアカウント', to: '/help-v3/account/child-accounts' },
          { label: 'プライバシーと進捗', to: '/help-v3/account/privacy-progression' }
        ]
      },
      child_accounts: {
        badge: 'アカウント',
        title: '子どもアカウントを管理する',
        intro: '成人アカウントに紐づく子どもアカウントを扱う必要があるときは Child Accounts を使います。',
        what_title: 'できること',
        what_items: [
          '現在の成人アカウントに紐づく子どもアカウントを確認する。',
          '子どもの情報と成人アカウントの関係を理解する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'サインイン済みアカウント経路の child account 関連画面を使います。',
          '問題が保護者、子ども、または管理関係にあるならここへ戻ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '子どもアカウント関係は、通常の成人プロフィール編集とは別です。',
          '道場メンバー承認状態とも別です。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アカウントに最新の子ども関連状態が表示されます。',
          '問題が実際には道場メンバー資格なら、メンバー関連トピックに戻ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'プロフィール', to: '/help-v3/account/profile' },
          { label: '道場に参加する', to: '/help-v3/member/join-academy' }
        ]
      },
      privacy_progression: {
        badge: 'アカウント',
        title: 'プライバシーと進捗設定を管理する',
        intro: '可視性、ランク参加、プロフィール公開、またはアカウントレベルのプライバシー設定が問題のときに使います。',
        what_title: 'できること',
        what_items: [
          'プライバシー関連のアカウント設定を確認する。',
          'アプリが公開している範囲で、進捗やプロフィール可視性設定を調整する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'サインイン済みアカウント経路の settings privacy / progression 画面を使います。',
          '名簿や予約ロジックではなく可視性が問題なら、ここへ戻ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          '匿名予約はプライバシー設定そのものではありません。',
          '道場側のメンバー可視性とアカウントプライバシーは関連していますが同一ではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アプリは最新のプライバシーまたは進捗設定を使います。',
          '問題が予約名簿の匿名表示そのものなら Booking を使ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: '予約', to: '/help-v3/member/booking' },
          { label: '設定', to: '/help-v3/account/preferences' }
        ]
      },
      delete_account: {
        badge: 'アカウント',
        title: 'アカウントを削除する',
        intro: '一つの道場を離れるのではなく、DojoMate アカウント全体を永久に削除したいときに使います。',
        what_title: 'できること',
        what_items: [
          'アカウント全体の永久削除フローを開始する。',
          '削除前に、アカウント削除と単一道場の会員関係解除を区別する。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'アカウントのプライバシーまたは削除関連画面を使います。',
          '目的が現在のセッション停止だけなら Logout を使ってください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'アカウント全体の削除は、一つの道場を離れることとは別です。',
          'これはより強い永続操作であり、通常のログアウトと混同すべきではありません。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、アカウント全体へのアクセスが削除されます。',
          '特定の道場関係だけを外したい場合は、メンバーまたは道場関連フローへ戻ってください。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'ログアウト', to: '/help-v3/account/logout' },
          { label: 'プライバシーと進捗', to: '/help-v3/account/privacy-progression' }
        ]
      },
      logout: {
        badge: 'アカウント',
        title: 'ログアウトする',
        intro: '現在の端末セッションを終了し、サインイン状態をきれいに抜けたいときは Logout を使います。',
        what_title: 'できること',
        what_items: [
          '現在のサインイン済みアプリセッションを終了する。',
          '別アカウントや後日の再利用に備える。'
        ],
        where_title: 'どこで行うか',
        where_items: [
          'サインイン済みのアカウント設定領域を使います。',
          '現在のセッションを止めたいだけなら、アカウント削除ではなくログアウトを選んでください。'
        ],
        limits_title: '重要な制限',
        limits_items: [
          'ログアウトは現在のセッションを終えるだけで、アカウント削除ではありません。',
          'パスワード自体を変えたいなら Change Password を使ってください。'
        ],
        results_title: 'その後どうなるか',
        results_items: [
          '成功すると、この端末上の現在のサインイン状態が消去されます。',
          '後で同じアカウントまたは別アカウントで再度サインインできます。',
          'パスワード変更や削除ほど強いアカウント効果が不要なとき、Logout は安全なセッション終了手段です。'
        ],
        next_title: '次のトピック',
        next_links: [
          { label: 'サインイン', to: '/help-v3/account/sign-in' },
          { label: 'アカウント作成', to: '/help-v3/account/create-account' }
        ]
      }
    }
  },
  help_v2: {
    support: {
      heading: 'さらにサポートが必要ですか？',
      default_description: 'アプリや連携するウェブ導線に関する質問、特殊なケース、追加サポートは、Source Combatives の DojoMate ヘルプ掲示板をご利用ください。',
      default_button: 'DojoMate ヘルプ掲示板を開く'
    },
    layout: {
      preview_badge: 'ヘルプ v2',
      intro: 'オーナーと管理者向けの、作業起点のガイドです。v1 はこの v2 の構築中も公開されたままです。',
      open_v1: 'ヘルプ v1 を開く',
      search_placeholder: 'ヘルプを検索',
      search_no_results: '結果が見つかりません',
      nav: {
        start_here: 'ここから開始',
        owner_setup: 'オーナー設定',
        student: '受講者',
        account_profile: 'アカウントとプロフィール',
        business: 'ビジネス',
        portal: 'ポータル',
        schedule: 'スケジュール',
        cards: 'カード',
        members: 'メンバー',
        tools: 'ツール',
        home: 'ヘルプ v2 ホーム',
        owner: '道場を運営している',
        admin: '運営を手伝っている',
        student_home: '道場でトレーニングしている',
        getting_started_owner: 'オーナー向けスタートガイド',
        create_academy: '道場を作成する',
        academy_basics: '道場の基本設定',
        academy_qr: '道場 QR',
        delete_academy: '道場を削除する',
        join_academy: '道場に参加する',
        memberships: '会員資格を管理する',
        booking: '予約',
        system_alerts: 'システム通知',
        broadcast: 'お知らせ配信',
        attendance_records: '出席記録',
        sign_in: 'サインイン',
        create_account: 'アカウント作成',
        reset_password: 'パスワード再設定',
        account_troubleshooting: 'アカウントのトラブル対応',
        change_password: 'パスワード変更',
        language: '言語',
        currency: '通貨',
        privacy: 'プライバシー',
        delete_account: 'アカウント削除',
        logout: 'ログアウト',
        edit_profile: 'プロフィール編集',
        child_accounts: '子どもアカウント',
        business_overview: 'ビジネス概要',
        compare_business_pages: 'ビジネスページを比較する',
        choose_who_can_teach: '教えられる人を決める',
        choose_who_can_manage: '管理できる人を決める',
        track_pay_and_performance: '報酬と実績を確認する',
        affiliate_portal: 'アフィリエイトポータル',
        portal_register: 'ポータル登録',
        portal_members: 'ポータルメンバー',
        portal_ranks: 'ポータルランク',
        portal_cards: 'ポータルカード',
        portal_reports: 'ポータルレポート',
        schedule_overview: 'スケジュール概要',
        create_a_lesson: 'レッスンを作成する',
        edit_or_cancel_a_lesson: 'レッスンを編集またはキャンセルする',
        book_for_students: '受講者の代わりに予約する',
        cards_overview: 'カード概要',
        how_cards_work: 'カードの仕組み',
        create_a_card_template: 'カードテンプレートを作成する',
        issue_cards: 'カードを発行する',
        edit_templates: 'テンプレートを編集する',
        delete_templates: 'テンプレートを削除する',
        delete_cards: 'カードを削除する',
        card_records: '異議申し立て',
        members_overview: 'メンバー概要',
        add_a_member_directly: 'メンバーを直接追加する',
        enrollment_vs_applications: '直接登録と申請の比較',
        review_applications: '申請を確認する',
        reject_or_ban_members: 'メンバーを拒否または禁止する',
        tools_overview: 'ツール概要',
        activate_tools_and_premium: 'ツール状況を確認する',
        timetable: '時間割',
        pause_cards: 'カードを一時停止する'
      }
    },
    welcome: {
      badge: 'プレビュー',
      title: 'ヘルプガイド v2',
      intro: 'このバージョンは、ユーザーが今どの画面にいるかではなく、DojoMate を使う人を中心に作り直しています。',
      who_title: 'まず自分の立場から始める',
      owner_title: '道場を運営している',
      owner_body: '道場オーナーとして、初期設定、チーム、カード、スケジュール、ツールの案内が必要ならここから始めてください。',
      owner_link: 'オーナー向けを開く',
      admin_title: '道場運営を手伝っている',
      admin_body: 'レッスン、メンバー、カード、日々の運営を支えるスタッフならここから始めてください。',
      admin_link: '管理者向けを開く',
      student_title: '道場でトレーニングしている',
      student_body: '受講者、保護者、または道場メンバーとして、アカウント、予約、会員資格の案内が必要ならここから始めてください。',
      student_link: '受講者向けを開く',
      jobs_title: 'または作業から直接選ぶ',
      cards_title: '会員カードを設定する',
      cards_body: 'カードが予約をどう支えるかを理解してから、テンプレートを作成して発行します。',
      cards_link: 'カード概要を開く',
      members_title: 'メンバーを追加・管理する',
      members_body: '道場に人を迎え入れ、申請を確認し、ステータス変更を管理します。',
      members_link: 'メンバー概要を開く',
      tools_title: '有料ツールを使う',
      tools_body: '基本ワークフローが整ってから、定期スケジュールやカード一時停止ツールを追加し、必要に応じて機能ページからプレミアムを有効化します。',
      tools_link: 'ツール概要を開く',
      difference_title: 'v2 の違い',
      difference_body: 'v2 は人とその人が終わらせたい仕事を軸に整理されているので、次に何をすべきか判断しやすくなっています。',
      difference_v1: '検索つきの従来ガイドを使いたい場合は、ヘルプ v1 を開く',
      difference_start: 'ここから開始'
    },
    owner_home: {
      badge: 'オーナー',
      title: '道場を運営している',
      intro: 'この導線は、道場の設定、チーム作り、日々の運営を行うオーナー向けです。',
      start_title: '最初に見るべき場所',
      start_body: '新しい道場を立ち上げるなら、まずオーナー向けのスタート導線から始めてください。後続の機能が理解しやすい順番になっています。',
      start_primary: 'オーナー向けスタートガイド',
      start_secondary: '道場を作成する',
      setup_title: '道場のセットアップ',
      setup_create_title: 'まず道場を作成する',
      setup_create_body: 'メンバーを迎えたりレッスンを作ったりする前に、まず道場自体を整えます。',
      setup_review_title: '基本情報と QR を確認する',
      setup_review_body: '道場情報を正確に保ち、素早く参加させたいときは QR 参加を使います。',
      setup_lifecycle_title: '道場のライフサイクル',
      setup_lifecycle_body: '道場自体を残す必要がなくなったときだけ、削除ガイドを使ってください。',
      jobs_title: '主な仕事',
      jobs_team_title: 'チームを整える',
      jobs_team_body: '誰が教え、誰が道場を管理し、報酬ツールをどう使うかを決めます。',
      jobs_team_link: 'ビジネスを開く',
      jobs_schedule_title: 'レッスンと予約を回す',
      jobs_schedule_body: 'レッスンを作成し、変更に対応し、必要に応じて予約を支援します。',
      jobs_schedule_link: 'Schedule を開く',
      jobs_cards_title: 'カードとメンバーを整える',
      jobs_cards_body: '人を道場に迎え、カードを発行し、予約によって正しく回数が消化される状態を作ります。',
      portal_title: 'ポータルの作業',
      portal_body: '一部の作業は、日常の DojoMate アプリ画面ではなく、Source Combatives Affiliate Portal で行います。',
      portal_link: 'アフィリエイトポータルガイドを開く',
      paid_title: '有料機能',
      paid_body: '時間割、カード一時停止、スタッフアクセス、分析は利用権限で管理されます。ツールの有効化やプレミアム開始が必要なら、機能ページのガイドを確認してください。',
      paid_link: 'ツールとプレミアムを有効化する'
    },
    owner_setup: {
      getting_started: {
        badge: 'スタートガイド',
        title: '正しい順番で道場を整える',
        intro: '新しく始めるなら、このページが最もわかりやすい順番を示します。後続の機能も理解しやすくなります。',
        order_title: 'おすすめの順番',
        order_items: [
          '道場を作成する。',
          'メンバーを道場に迎え入れる。',
          '会員カードテンプレートを作成する。',
          'アクティブなメンバーにカードを発行する。',
          '講師とスタッフ権限を設定する。',
          '最初のレッスンを作成する。',
          '準備ができたら有料ツールを追加する。アフィリエイトポータルには、すべてのツールが使える 90 日間の無料プレミアムトライアルがあります。'
        ],
        why_title: 'この順番が役立つ理由',
        why_items: [
          'カードを発行する前に、まずメンバーが存在している必要があります。',
          '予約を正しく機能させるには、先にカードが必要です。',
          'レッスン作成を始める前に講師を整えておくべきです。',
          '有料ツールは、道場の基本ワークフローが動き始めてから追加するのが最も効果的です。'
        ],
        start_title: '迷ったらここから',
        create_link: '道場を作成する',
        members_link: 'メンバーを迎え入れる',
        cards_link: 'カードを設定する'
      },
      create: {
        badge: 'オーナー',
        title: '道場を作成する',
        intro: 'これはオーナーの最初のステップです。メンバーを迎えたり、カードを発行したり、レッスン作成を始める前に、まず道場を作成します。',
        before_title: '作成前に',
        before_items: [
          '重複作成を避けるため、道場がすでに存在していないか確認する。',
          '最初から正しい通貨を選べるようにしておく。'
        ],
        steps_title: '手順',
        steps_items: [
          '道場作成フローを開く。',
          '道場の詳細を丁寧に入力する。',
          '正しい通貨を選ぶ。',
          'フォームを送信して道場を作成する。'
        ],
        next_title: '次のステップ',
        next_body: '道場ができた後のよくある次の作業は、基本情報を確認し、その後で人を道場に迎え入れることです。',
        back_link: 'オーナー導線に戻る',
        next_link: '道場の基本設定へ進む'
      },
      basics: {
        badge: 'オーナー',
        title: '道場の基本情報を更新する',
        intro: 'このページを使って道場プロフィールを正確に保ち、メンバーやスタッフに正しい道場情報を見せましょう。',
        use_title: 'こんなときに使う',
        use_items: [
          '道場情報を修正または更新する必要がある',
          '道場向けの表示情報が変わった',
          'メンバーにどう見えているかを確認したい'
        ],
        know_title: '知っておくこと',
        know_items: [
          'メンバーやカードを拡大する前に、オーナーは道場の基本情報を最新に保つべきです。',
          'メンバーが道場メッセージや入門フローから参加するなら、正確な道場情報が重要です。'
        ],
        next_title: '次のステップ',
        back_link: '道場作成に戻る',
        next_link: '道場 QR へ進む'
      },
      qr: {
        badge: 'オーナー',
        title: '道場の QR コードを共有する',
        intro: '手動検索をさせずに、より速く参加してもらいたいときに道場 QR を使います。',
        use_title: '特に役立つ場面',
        use_items: [
          '道場での対面オンボーディング',
          'イベント、体験クラス、忙しい登録日',
          '複数人が素早く参加する必要がある場面'
        ],
        know_title: '知っておくこと',
        know_items: [
          'QR の導線は、手動で検索してもらうより速いことがほとんどです。',
          'オンボーディング中の参加ミスを減らしたいときに特に有効です。'
        ],
        next_title: '次のステップ',
        back_link: '道場の基本設定に戻る',
        next_link: 'メンバーを迎え入れる'
      },
      delete: {
        badge: 'オーナー',
        title: '道場の削除は慎重に',
        intro: 'これは道場ライフサイクル上のステップであり、日常作業ではありません。本当に道場を削除すべきときだけ使ってください。',
        before_title: '実行前に',
        before_items: [
          'まず前提条件を確認する。',
          '現在のメンバーに何が起きるかを理解しておく。',
          '通常の整理の近道として道場削除を使わない。'
        ],
        meaning_title: 'これはどういう意味か',
        meaning_body: '道場削除は重大なオーナー操作です。道場そのものをもう残すべきでないときにだけ行うべきです。',
        help_title: '先に相談が必要ですか？',
        help_body: '削除が本当に正しいか迷う場合は、最終ステップを行う前に DojoMate ヘルプ掲示板で確認してください。',
        help_link: 'DojoMate ヘルプ掲示板を開く',
        back_link: 'オーナー導線に戻る'
      }
    },
    admin_home: {
      badge: '管理者',
      title: '道場運営を手伝っている',
      intro: 'この導線は、オーナーが道場設定を済ませた後の日常運営を支えるスタッフ向けです。',
      jobs_title: 'よくある管理作業',
      schedule_title: 'スケジュール業務を行う',
      schedule_body: 'レッスンを作成し、変更を編集し、必要に応じて受講者や保護者の予約を手伝います。',
      schedule_link: 'Schedule を開く',
      members_title: 'メンバーとカードを管理する',
      members_body: '申請を確認し、メンバーを直接登録し、カードを発行します。',
      delegated_title: '委譲された権限を使う',
      delegated_body: 'オーナーから管理権限が付与されていれば、日常業務にスケジュール、メンバー、カード、場合によってはツールも含まれます。',
      delegated_link: 'スタッフアクセスを確認する',
      know_title: '知っておくこと',
      know_items: [
        '管理者向けの多くの内容はオーナー向け導線と重なるため、完全に別の wiki ツリーは必要ありません。',
        'アカウントに機能が見当たらない場合、オーナーが権限付与や必要ツールの有効化を行う必要があるかもしれません。'
      ],
      compare_link: 'Business ページを比較する',
      tools_link: 'ツール状況を確認する'
    },
    business: {
      overview: {
        badge: 'Business',
        paid_badge: '有料',
        title: '道場の運営側を進める',
        intro: 'Business エリアでは、チーム設定、誰が道場を管理できるかの決定、報酬や実績ツールの確認を行います。',
        start_title: 'やりたい仕事から始める',
        cards: [
          {
            title: '誰が教えられるか決める',
            body: '講師設定を使って、誰をレッスンに割り当てられるかを決めます。',
            cta: '講師設定ガイドを開く',
            link: '/help-v2/business/instructors'
          },
          {
            title: '誰が道場を管理できるか決める',
            body: 'スタッフアクセスを使って管理者権限を付与または更新します。',
            cta: 'スタッフアクセスガイドを開く',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: '報酬、時間、実績を確認する',
            body: 'Analytics を使って報酬、レポート、タイムシート、給与関連ツールを扱います。',
            cta: 'Analytics ガイドを開く',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        know_title: '知っておくこと',
        know_items: [
          'これらの Business ページはそれぞれ異なる仕事を支えるので、やりたいことに合ったページを選ぶのが大切です。',
          '新しい道場を立ち上げるなら、まず誰が教えるかを決めるところから始めてください。',
          'どこから始めるべきか迷うなら、チーム設定の最初の一歩としては講師設定が最適で、その次がスタッフアクセス、最後が Analytics です。'
        ],
        compare_link: 'ビジネスページを比較する',
        next_title: '次のステップ',
        next_body: '教えるチームを設定するなら、まず「誰が教えられるか決める」から始めてください。',
        next_link: '「誰が教えられるか決める」へ進む'
      },
      compare: {
        badge: 'Business',
        paid_badge: '有料',
        title: '講師設定、スタッフアクセス、Analytics',
        intro: 'この 3 つの Business ページはそれぞれ異なる仕事を支えます。どれが今の作業に合うか迷うときにこのページを使ってください。',
        pick_title: '仕事からページを選ぶ',
        cards: [
          {
            title: '講師設定',
            body: '誰がレッスンを教えられるかを決めたいときに使います。',
            items: [
              'スタッフに追加する',
              '講師ステータスを有効にする',
              'スケジュール用に教えるチームを整える'
            ],
            cta: '講師設定を開く',
            link: '/help-v2/business/instructors'
          },
          {
            title: 'スタッフアクセス',
            body: '誰かに道場運営を手伝ってもらうときに使います。',
            items: [
              'メンバーを管理者に昇格する',
              'アクセス範囲を確認する',
              '後で管理者権限を外す'
            ],
            cta: 'スタッフアクセスを開く',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: 'Analytics',
            body: '経営数値、報酬設定、時間記録を確認したいときに使います。',
            items: [
              'レポートを確認する',
              '報酬を設定する',
              'タイムシートや給与関連ツールを確認する'
            ],
            cta: 'Analytics を開く',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        rules_title: '簡単なルール',
        rules_items: [
          'Analytics で報酬を変更しても、その人が講師になるわけではありません。',
          '誰かに管理者権限を与えても、その人が講師になるわけではありません。',
          '教えることと管理することの両方を任せたい場合は、複数の Business ページで設定が必要になることがあります。'
        ],
        start_title: 'まだ迷うならここから',
        start_body: '「この人は教えられるのか？」が疑問なら講師設定から始めます。「この人は道場を管理できるのか？」ならスタッフアクセスへ。「報酬やレポートはどこで見るのか？」なら Analytics へ進みます。',
        instructors_link: '講師設定',
        staff_access_link: 'スタッフアクセス',
        analytics_link: 'Analytics'
      },
      instructors: {
        badge: 'Business',
        title: '誰が教えられるか決める',
        intro: 'Business → 講師設定を使って、誰をレッスンに割り当てられるかを決めます。',
        before_title: '始める前に',
        before_items: [
          'レッスンを作成する前に、少なくとも 1 人の講師が必要です。',
          'オーナー自身も教えるなら、まず自分を追加するケースが多いです。',
          'その人はすでに道場のメンバーとして存在している必要があります。'
        ],
        steps_title: '手順',
        steps_items: [
          'Business → 講師設定を開きます。',
          'Choose Member を押します。',
          '追加したい人を選びます。',
          'Add to Staff を押します。',
          'その人がレッスンを教えるなら、instructor トグルをオンにします。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '追加した人はスタッフ一覧に表示されます。',
          'instructor トグルをオフのままにすると、その人は補助講師としてのみ利用できます。',
          'Analytics で報酬を変更しても、その人が講師になるわけではありません。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: 'その人に道場管理も任せたい場合は、別の設定手順が必要です。教える権限と管理者権限は同じではありません。',
        compare_link: 'Business ページを比較する',
        next_title: '次のステップ',
        next_body: '教えるチームの設定が終わったら、次によく行うのは誰に管理者権限も付与するかを決めることです。',
        back_link: 'Business 概要へ戻る',
        next_link: 'スタッフアクセスへ進む'
      },
      staff_access: {
        badge: 'Business',
        paid_badge: '有料ツール',
        title: '誰が道場を管理できるか決める',
        intro: 'Business → 権限設定を使って、チームに管理者権限を付与または更新します。',
        use_title: 'このページを使う場面',
        use_items: [
          '誰かがレッスン、メンバー、カード、timetable 作業を手伝うとき',
          'メンバーを管理者に昇格したいとき',
          '管理者権限を確認または外したいとき'
        ],
        steps_title: '手順',
        steps_items: [
          'Business → 権限設定を開きます。',
          '更新したい人を探します。',
          'Member と表示されているなら、その行を押して Confirm を押し、管理者にします。',
          'その管理者をもう一度押してアクセス設定を確認します。',
          '必要なアクセス設定を選び、Confirm を押します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'バッジは Member と Admin の 2 種類です。',
          '権限設定は管理者権限を制御します。誰が教えるかを決めるページではありません。',
          '現在のアクセス領域は Schedule、メンバー、Cards、Timetable です。',
          'この機能は entitlement で制御されます。ツールが無効な場合、委譲したスタッフ権限は有効になりません。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: '教える役割を与えることと管理者権限を与えることは別の設定です。教える役割には講師設定、管理者役割には権限設定を使います。',
        compare_link: 'Business ページを比較する',
        remove_title: '管理者権限を外す',
        remove_body: 'その人がもう道場を管理しない場合は、Remove Admin を使って Member に戻します。',
        next_title: '次のステップ',
        next_body: 'チームの役割設定が終わったら、次によく行うのは Analytics で報酬やレポート系ツールを確認することです。',
        back_link: '講師設定に戻る',
        activate_link: 'ツール状況を確認する',
        compare_pages_link: 'ページを比較する',
        next_link: 'Analytics へ進む'
      },
      analytics: {
        badge: 'Business',
        paid_badge: '有料ツール',
        title: '報酬、時間、実績を確認する',
        intro: 'Business → Analytics を使って、報酬、レポート、タイムシート、給与関連ツールを扱います。',
        use_title: 'このページを使う場面',
        use_items: [
          '道場の指標やレポートを確認したいとき',
          '報酬情報を入力または更新したいとき',
          'タイムシートやスタッフの打刻活動を確認したいとき'
        ],
        covers_title: 'Analytics が扱う内容',
        cards: [
          {
            title: 'レポート',
            body: 'リアルタイムの数値、週次サマリー、財務レポート、月次の出席関連レポートを確認します。'
          },
          {
            title: '報酬',
            body: '給与、時給、個人レッスン報酬を設定して、コストをより正確に追跡できるようにします。'
          },
          {
            title: '時間と給与ツール',
            body: '打刻カード、オフィス時間、時間ベースのスタッフ記録に対する承認フローを確認します。'
          }
        ],
        know_title: '知っておくこと',
        know_items: [
          'Analytics で報酬を変更しても、その人が講師になるわけではありません。',
          'その人が教える必要があるなら、講師設定でその役割を追加します。',
          'その人が道場を管理する必要があるなら、権限設定で権限を付与します。',
          '一部の Analytics 画面は完全にロックされることがあり、別の画面は見えたままアップグレード案内が表示される場合があります。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: 'Analytics は教える役割や管理者役割を決める場所ではありません。経営指標を確認し、報酬関連ツールを管理する場所です。',
        compare_link: 'ビジネスページを比較する',
        next_title: '次のステップ',
        next_body: 'まだチーム設定中なら、先に教える役割と管理者役割の設定を終えてください。チームがすでに整っているなら、次によく行うのはレッスンを作り、日々の動きは予約に任せることです。',
        activate_link: 'ツール状況を確認する',
        instructors_link: '講師設定',
        staff_access_link: 'スタッフアクセス',
        next_link: 'スケジュールへ進む'
      }
    },
    schedule: {
      overview: {
        badge: 'スケジュール',
        title: 'レッスンを計画し、運用し、管理する',
        intro: 'スケジュールエリアでは、レッスン作成、レッスン詳細の調整、必要時の予約補助を行います。',
        start_title: 'やるべき仕事から始める',
        cards: [
          {
            title: 'レッスンを作成する',
            body: 'レッスン時間、講師、利用可能カード、予約ルールを設定します。',
            cta: 'Create Lesson ガイドを開く',
            link: '/help-v2/schedule/create-lesson'
          },
          {
            title: 'レッスンを編集・キャンセル・削除する',
            body: 'レッスン詳細を更新したり、予約できない状態にしたりします。',
            cta: 'Manage Lesson ガイドを開く',
            link: '/help-v2/schedule/manage-lesson'
          },
          {
            title: '受講者の代わりに予約する',
            body: '受講者や保護者が自分で予約を完了できないときに代わりに対応します。',
            cta: 'Booking ガイドを開く',
            link: '/help-v2/schedule/book-for-students'
          }
        ],
        know_title: '知っておくこと',
        know_items: [
          'レッスン作成は通常、最初のスケジュール作業です。',
          '編集、キャンセル、削除には時間ルールがあるため、それぞれ専用ガイドが必要です。',
          '管理者による予約代行は、受講者や保護者が自分で予約できないときの補助として使うのが最適です。'
        ],
        before_title: '始める前に',
        before_body: 'レッスン作成時に正しい講師が選べるよう、教えるチームがすでに設定されていることを確認してください。',
        before_link: '講師設定を確認する'
      },
      create: {
        badge: 'スケジュール',
        title: 'レッスンを作成する',
        intro: '受講者に予約してほしい日にレッスンを追加するにはスケジュールを使います。',
        before_title: '始める前に',
        before_items: [
          'レッスン作成前に少なくとも 1 人の講師が選ばれている必要があります。',
          'スケジュールは初期状態で今日の日付を開くので、まず正しい日付を選んでください。',
          'このレッスンを予約できる Membership カードを決めておいてください。'
        ],
        steps_title: '手順',
        steps_items: [
          'Schedule を開き、希望の日付へ移動します。',
          'Create Lesson を押します。',
          'レッスン名、日付、開始/終了時間を入力します。',
          'レッスン種別と利用可能な Membership カードを選びます。',
          '少なくとも 1 人の講師を選び、必要なら補助講師も追加します。',
          '定員、最少人数、予約締切などのルールを設定します。',
          'Create Lesson を押します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '予約に使うカードは、グループやプライベートなどレッスン種別に一致している必要があります。',
          '時間が重なるレッスンを組む場合、教室設定が重要になります。',
          '管理者は通常、定員や締切に関して受講者より柔軟に予約できますが、受講者は引き続き締切と定員ルールに従います。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: '予約締切が短すぎると、レッスンが直前にキャンセルされたときに受講者が混乱しやすくなります。よりスムーズな案内をしたいなら、締切を長めにしてください。',
        next_title: '次のステップ',
        next_body: 'レッスンが作成された後によく行うのは、レッスン詳細の調整や受講者の予約補助です。',
        manage_link: 'レッスンを編集またはキャンセルする',
        booking_link: '受講者の代わりに予約する'
      },
      manage: {
        badge: 'Schedule',
        title: 'レッスンを編集・キャンセル・削除する',
        intro: 'レッスン詳細画面を使ってレッスン情報を更新したり、予約できない状態にしたりします。',
        open_title: 'レッスンの開き方',
        open_items: [
          'Schedule を開きます。',
          '正しい日付を選びます。',
          '予約ボタンではなく、レッスン自体を押します。'
        ],
        actions_title: '各操作でできること',
        actions_items: [
          'Edit: レッスン詳細を更新して保存します。',
          'Cancel: 現在の予約者を予約解除し、新規予約を止めます。',
          'Delete: レッスンをキャンセルした後で完全に削除します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '予約締切後はレッスンを編集できません。',
          'すでに開始したレッスンはキャンセルも削除もできません。',
          '誤って作成したレッスンは、まずキャンセルしてから削除してください。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: '編集やキャンセルをしたいのに、予約フローを開いてしまう人がよくいます。レッスンを編集またはキャンセルしたいなら、レッスンカード自体を開いてください。',
        next_title: '次のステップ',
        next_body: 'レッスンを引き続き有効にするなら、次によく行うのは受講者の予約補助です。',
        back_link: 'Create Lesson に戻る',
        next_link: 'Booking へ進む'
      },
      booking: {
        badge: 'Schedule',
        title: '必要に応じて受講者の代わりに予約する',
        intro: '受講者や保護者が自分で予約するのが理想ですが、忘れた、締切を過ぎた、助けが必要な場合には管理者が代わりに対応できます。',
        steps_title: '手順',
        steps_items: [
          'Schedule を開いてレッスン日を選びます。',
          'レッスンを開き、Booking に進みます。',
          'メンバー追加を押します。',
          '予約したいメンバーを選びます。',
          'その人が使える有効なカードを 1 つ選びます。',
          'Confirm を押します。'
        ],
        unbook_title: '受講者の予約を外すには',
        unbook_items: [
          'そのレッスンの出席一覧を開きます。',
          '予約済みのメンバーを押します。',
          '青い予約済みカードが灰色になるまで押します。',
          'Confirm を押します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '管理者は通常、特に締切や定員ルールの周辺で受講者より柔軟に予約できます。',
          'そのメンバーは、そのレッスンで利用可能な有効カードをまだ持っている必要があります。',
          '終了したレッスンは予約も予約解除もできません。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: '正しいカードが表示されない場合、そのレッスンで許可されているカード種別と、メンバーが現在持っている有効カード種別が一致していない可能性があります。',
        next_title: '次のステップ',
        next_body: '予約ルールが問題を起こしているなら、何度も上書きするのではなく、レッスン設定を見直してレッスン側を調整してください。',
        create_link: 'Create Lesson を確認する',
        manage_link: 'Manage Lesson を確認する'
      }
    },
    cards: {
      overview: {
        badge: 'カード',
        title: '予約を支えるためにカードを使う',
        intro: 'カードの基本フローはシンプルです。カードを作成し、発行し、その後は予約に合わせて自動でレッスンが差し引かれます。',
        start_title: 'やるべき仕事から始める',
        cards: [
          {
            title: '予約フローを理解する',
            body: 'カードが予約、レッスン差し引き、レポートにどう関わるかを確認します。',
            cta: '予約フローガイドを開く',
            link: '/help-v2/cards/how-booking-works'
          },
          {
            title: 'カードテンプレートを作成する',
            body: 'カード名、料金、回数、有効期限、レッスン種別を設定します。',
            cta: 'Create Template ガイドを開く',
            link: '/help-v2/cards/create-template'
          },
          {
            title: 'メンバーにカードを発行する',
            body: 'テンプレートの 1 つを使って有効な Membership カードを割り当てます。',
            cta: 'カード発行ガイドを開く',
            link: '/help-v2/cards/issue-cards'
          }
        ],
        know_title: '知っておくこと',
        know_items: [
          'まずテンプレートが必要です。カードテンプレートが存在しないとカードは発行できません。',
          'カードは主に予約と自動レッスン差し引きを支えるために存在します。',
          'カードを使い切った、または有効期限が切れたら、次のカードを発行する前に現在の有効カードを削除してください。',
          '例外的なケースでは有効カードを手動調整することもできます。最もよくあるのは有効期限の延長で、特にカード一時停止を使っていない場合です。'
        ],
        support_title: '補助ワークフロー',
        support_templates_title: 'テンプレートを編集または引退させる',
        support_templates_body: 'テンプレートの修正が必要なとき、または今後使わない状態にしたいときにこれらのページを使います。',
        edit_templates_link: 'Edit Templates',
        delete_templates_link: 'Delete Templates',
        support_cleanup_title: '終了したカードを整理する',
        support_cleanup_body: '使い切った、期限切れの、または入れ替え対象の有効カードを削除またはキャンセルします。',
        delete_cards_link: 'カードを削除する',
        support_records_title: 'カード履歴を確認する',
        support_records_body: '履歴確認、状態確認、異常なカード状態の追跡が必要なときに records を使います。',
        records_link: 'カード記録'
      },
      flow: {
        badge: 'カード',
        title: 'カードが予約とどう連動するか',
        intro: 'Membership カードは主にレッスン予約のためにあります。受講者が予約するとレッスンは自動で差し引かれ、システムは実際の予約活動に基づいて計算します。',
        normal_title: '通常の流れ',
        normal_items: [
          'カードテンプレートを作成する。',
          'メンバーにカードを発行する。',
          'メンバーがそのカードでレッスンを予約する。',
          'レッスンは予約を通じて差し引かれる。',
          'カードの残回数が 0 になるか有効期限が切れたら、有効カードを削除する。',
          'メンバーが更新したら新しいカードを発行する。'
        ],
        why_title: 'なぜこれが大事か',
        why_items: [
          'カードはレッスン予約を明確かつ予測しやすく支えるべきです。',
          '予約によって差し引かれたレッスンだけが Analytics の財務レポートに反映されます。',
          '同じテンプレートの有効カードを、1 人のメンバーが同時に 2 枚持つことはできません。'
        ],
        next_title: '次のステップ',
        create_link: 'カードテンプレートを作成する',
        issue_link: 'カードを発行する'
      },
      create_template: {
        badge: 'カード',
        title: 'Membership カードテンプレートを作成する',
        intro: 'カード → カードテンプレート作成 を使って、道場で発行するカード種別を作成します。',
        before_title: '始める前に',
        before_items: [
          'このカードがグループレッスン用かプライベートレッスン用かを決めてください。',
          'カードに含めるレッスン回数を決めてください。',
          '回数無制限カードを作りたい場合は、まず期間を決めてください。無制限カードにも有効期限枠があります。',
          '道場で既に使っている授業料と通貨の考え方に合わせてください。'
        ],
        steps_title: '手順',
        steps_items: [
          'カード → カードテンプレート作成 を開きます。',
          'メンバーと管理者の両方が分かりやすく識別できるカード名を入力します。',
          '料金と任意の説明を入力します。',
          '総回数と有効日数を設定します。',
          '無制限カードの場合、Total Sessions は 0 ではなく -1 で保存します。',
          'そのカードが Group レッスン用か Private レッスン用かを選びます。',
          'テンプレートを保存します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'レッスン種別が、そのカードで予約できるレッスンを決めます。',
          'Total Sessions = -1 で保存したカードは、有効期間中は無制限に予約できます。',
          'Group と Private は 1 回あたりの料金が違うことが多く、講師報酬も異なる場合があります。',
          'カード名は予約時やカード割当時に後で見返されるので、分かりやすく安定した名前にしておくべきです。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: '予約時にカードが表示されない場合は、カード種別とレッスン種別が一致しているか確認してください。これは意図的な仕様で、Group カードが誤って Private レッスンに使われたり、その逆が起きたりしないようにしています。',
        next_title: '次のステップ',
        next_body: 'テンプレートができたら、次によく行うのはそのカードを 1 人以上のメンバーに発行することです。',
        back_link: 'カード概要へ戻る',
        next_link: 'カード発行へ進む'
      },
      issue: {
        badge: 'カード',
        title: 'Membership カードを発行する',
        intro: 'カード → カード発行 を使って、1 人以上のメンバーに有効カードを付与します。',
        steps_title: '手順',
        steps_items: [
          'カード → カード発行 を開きます。',
          '発行したいカードテンプレートを選びます。',
          '1 人以上のメンバーを選びます。',
          '選択したメンバーを確認します。',
          'Confirm を押してカードを発行します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '新しく承認されたメンバーは、発行しやすいよう上の方に表示されることがあります。',
          '同じテンプレートの有効カードをすでに持っているメンバーは、重複に気づけるよう別の見え方になります。',
          '同じテンプレートの有効カードを、1 人のメンバーが同時に 2 枚持つことはできません。'
        ],
        mistake_title: 'よくある間違い',
        mistake_body: '同じカードの更新であれば、先に古い有効カードを削除してから新しいカードを発行してください。',
        next_title: '次のステップ',
        next_body: 'カードを発行した後の通常の次のステップは、そのカードでレッスンを予約することです。',
        back_link: 'Templates に戻る',
        next_link: 'カードの仕組み'
      },
      edit_template: {
        badge: 'カード',
        title: 'カードテンプレートを編集する',
        intro: 'テンプレートがすでに存在し、今後の利用に向けて設定を更新する必要があるときに使います。',
        use_title: 'このページを使う場面',
        use_items: [
          'テンプレート設定を修正する必要がある',
          '料金、回数、有効期限、レッスン種別の設定を変更する必要がある',
          'まだ新しいテンプレートを作らずに今後の発行挙動を調整したい'
        ],
        know_title: '知っておくこと',
        know_items: [
          'テンプレート名は作成後に固定されます。',
          '変更は今後のテンプレート挙動に影響するので慎重に保存してください。',
          '変更内容が別の商品と言えるほど大きいなら、新しいテンプレートを作ったほうが分かりやすい場合があります。'
        ],
        next_title: '次のステップ',
        back_link: 'Create Template に戻る',
        next_link: 'カードを発行する'
      },
      delete_template: {
        badge: 'カード',
        title: 'カードテンプレートを削除する',
        intro: 'テンプレートがもう存在すべきでなく、かつ有効カードにまだ紐づいていないときに使います。',
        before_title: '削除前に',
        before_items: [
          'そのテンプレートがまだ有効カードに紐づいていないか確認してください。',
          '有効カードがまだ依存している場合は、先に整理が必要です。'
        ],
        know_title: '知っておくこと',
        know_body: 'テンプレート削除は整理のためのワークフローです。1 人のメンバーが更新するだけで使うのではなく、その Membership 商品自体を本当に終了させるときに使うべきです。',
        next_title: '次のステップ',
        back_link: 'Templates に戻る',
        next_link: 'カード概要'
      },
      delete_card: {
        badge: 'カード',
        title: '有効カードを削除またはキャンセルする',
        intro: '有効カードが寿命の終わりに達した、またはそのメンバーに対してもう有効であるべきでない場合に使います。',
        use_title: '最もよくある用途',
        use_items: [
          'カードが期限切れまたは使い切りになった',
          'メンバーが更新中で、新しい有効カードを発行する必要がある',
          'そのカードを正しくキャンセル記録してから次に進む必要がある'
        ],
        know_title: '知っておくこと',
        know_items: [
          '期限切れカードは通常、既定の整理手順として削除されます。',
          '同じテンプレートの有効カードを、1 人のメンバーが同時に 2 枚持つことはできません。',
          'カードをキャンセルする場合は必要な理由を入力し、履歴が見える状態を保ってください。'
        ],
        next_title: '次のステップ',
        next_body: '整理後は、そのメンバーが新しい有効な Membership を継続する場合にのみ次のカードを発行してください。',
        back_link: 'カード発行に戻る',
        next_link: 'カード概要'
      },
      disputes: {
        badge: 'カード',
        title: 'カード記録を確認する',
        intro: '履歴確認、状態の見える化、異常なカード状態の追跡が必要なときに card records を使います。',
        review_title: '確認できるもの',
        review_items: [
          '現在のカード',
          '発行済みカード',
          'キャンセル済みカード',
          '未払い関連のカード状態'
        ],
        when_title: '特に役立つ場面',
        when_items: [
          '特定のカードに何が起きたのかを把握したい',
          'カードがキャンセル、精算、またはクリア済みかを確認している',
          '未払いまたは記録の不一致を追っている'
        ],
        know_title: '知っておくこと',
        know_body: 'Card records は主に確認と監査のためのワークフローです。日常の通常フローは、テンプレート作成、カード発行、レッスン予約、そして終了時の整理です。'
      }
    },
    members: {
      overview: {
        badge: 'メンバー',
        title: '人を道場に迎え入れ、メンバー状態を管理する',
        intro: 'メンバーエリアは、人に関する側面を扱います。メンバー追加、申請確認、承認済み・拒否済み・禁止済み状態の管理に使います。',
        start_title: 'やるべき仕事から始める',
        cards: [
          {
            title: 'メンバーを直接追加する',
            body: '通常の申請フローを待たずに直接登録したいときは quick enrollment を使います。',
            cta: 'クイック登録を開く',
            link: '/help-v2/members/quick-enrollment'
          },
          {
            title: '道場への申請を確認する',
            body: 'Join Academy 経由で申請してきた人を承認または拒否します。',
            cta: '学院申請を開く',
            link: '/help-v2/members/applications'
          },
          {
            title: '誰かを拒否または BAN する',
            body: 'そのメンバーを今後アクティブにすべきでない場合の状態変更を管理します。',
            cta: '拒否または禁止管理を開く',
            link: '/help-v2/members/reject-or-ban'
          }
        ],
        know_title: '知っておくこと',
        know_items: [
          'クイック登録と学院申請は、道場に入るための別々の入口です。',
          '道場全体をオンボードするには時間がかかるので、長期的にはメンバー自身にアカウントを作成して道場を追加してもらうのが最も楽な方法であることが多いです。',
          'メンバーがアクティブになった後によく行う次の作業は、DojoMate で Membership カードを発行することです。',
          '子どもアカウントは、特に保護者アカウントが関係する場合、追加の確認手順が必要になることがあります。'
        ],
        compare_title: 'どの経路を選ぶか迷っていますか？',
        compare_body: '自分でアカウントを作るか、メンバー自身に申請してもらうか迷うなら、まず比較ページを見てください。',
        compare_link: '2 つのメンバーフローを比較する'
      },
      quick: {
        badge: 'メンバー',
        title: 'メンバーを直接追加する',
        intro: '通常の Join Academy 申請フローを待たずに直接登録したいときはクイック登録を使います。',
        when_title: 'この方法を使う場面',
        when_items: [
          '対面でオンボードしているとき',
          '自分で直接アカウントを作成したいとき',
          '保護者を登録し、同じ流れの中で複数の子どもアカウントも作りたいとき',
          'そのメンバーがテクノロジーに不慣れで、代わりにアカウントを作ってあげたいとき',
          '既存の DojoMate アカウントをメールで追加したいとき'
        ],
        path_title: 'まずは一番楽な方法から',
        path_body_1: '道場が成長しているなら、長期的に最も楽なのは、メンバー自身にアカウントを作って道場を追加してもらう方法であることが多いです。',
        path_body_2: 'クイック登録は、追加の助けが必要な人や、自力で設定を完了しそうにない人に向いています。',
        steps_title: '手順',
        steps_items: [
          'Affiliate Portal を開き、DojoMate のメールアドレスとパスワードでサインインします。',
          'Register を開きます。',
          'メンバーの実際のメールアドレスを入力し、仮パスワードを作成します。',
          'そのアカウントが学生用か保護者用かを選びます。',
          '保護者を選んだ場合は、子どもアカウント設定フローに進みます。',
          '内容を確認し、Confirm を押します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'クイック登録は通常の保留中 / 承認済み申請フローを通りません。',
          'このフローは特に保護者に便利で、1 回の登録操作で複数の子どもアカウントを作成できます。',
          'アカウント作成時に簡単な仮パスワードを設定できます。メンバーは後でサインインして変更できます。',
          '中には自分でログインしないメンバーもいますが、あなたがそのアカウントを管理しているならそれでも問題ありません。',
          '新しく登録されたメンバーも、設定後にアプリ経由で Membership カードを受け取れます。',
          'その人がすでに DojoMate アカウントを持っているなら、重複アカウントを作るのではなくメールで追加してください。'
        ],
        compare_title: 'この流れを使うか迷っていますか？',
        compare_link: 'クイック登録と申請を比較する',
        next_title: '次のステップ',
        next_body: 'アカウントが道場に入った後によく行う次の作業は Membership カードの発行です。',
        back_link: 'メンバー概要に戻る',
        next_link: 'カード発行へ進む'
      },
      compare: {
        badge: 'メンバー',
        title: 'クイック登録と申請のどちらを使うか選ぶ',
        intro: 'どちらのフローでも人を道場に入れられますが、向いている状況は異なります。',
        quick_title: 'クイック登録を使うのはこんなとき',
        quick_items: [
          '自分でアカウントを作成したい',
          'その人が設定の助けを必要としている',
          'その人がテクノロジーに不慣れ',
          '保護者を登録し、複数の子どもアカウントも一緒に作る'
        ],
        quick_link: 'クイック登録を開く',
        apps_title: '申請を使うのはこんなとき',
        apps_items: [
          'メンバー自身にアカウントを作ってほしい',
          'オーナーが 1 人ずつ手で作らなくても道場を拡大したい',
          'そのメンバーが Join Academy フローを自分で進められる'
        ],
        apps_link: '学院申請を開く',
        rule_title: 'シンプルなルール',
        rule_body: '可能な限りメンバー自身に作成してもらってください。追加の助けが必要なとき、または登録をこちらで直接処理したいときにクイック登録を使います。'
      },
      applications: {
        badge: 'メンバー',
        title: '道場への申請を確認する',
        intro: '誰かが Join Academy 経由で申請し、あなたが承認または拒否する必要があるときにこのフローを使います。',
        steps_title: '手順',
        steps_items: [
          'メンバー → 追加 / 拒否メンバー を開きます。',
          '保留中の申請一覧を確認します。',
          '申請者に対して Accept または Reject を押します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '保留中アカウントが表示されない場合、その人は正しく申請していない可能性があります。',
          '道場 QR コードをもう一度読み取るか、道場名を再検索してもらう必要があるかもしれません。',
          'リンクされた子どもアカウントは、保護者プロフィール経由で追加の承認手順が必要になることがあります。'
        ],
        why_title: 'なぜ applications を使うのか？',
        whyBody: 'メンバー自身にアカウントを作り、自分で道場を追加してもらいたいなら、長期的にはこちらの方が良い経路です。',
        compare_link: '申請とクイック登録を比較する',
        mistake_title: 'よくある間違い',
        mistake_body: '子どもアカウントがすぐに表示されない場合、それらがまだ正しく作成されていないか、一覧が古い可能性があります。保護者に子ども設定を完了してもらうか、アプリ表示を更新してください。',
        next_title: '次のステップ',
        next_body: '誰かを道場に承認した後によく行う次の作業は、その人の Membership カード発行です。',
        back_link: 'メンバー概要に戻る',
        next_link: 'カード発行へ進む'
      },
      reject: {
        badge: 'メンバー',
        title: '必要に応じてメンバーを拒否または BAN する',
        intro: 'その人を今後道場のアクティブメンバーとして残すべきでない場合にこのフローを使います。',
        reject_title: '拒否の流れ',
        reject_items: [
          'メンバー → メンバー一覧 からそのメンバーのプロフィールを開きます。',
          'Reject を押して道場から外します。',
          '有効カードを持つメンバーは、拒否前に先に整理する必要があります。'
        ],
        ban_title: 'BAN の流れ',
        ban_items: [
          '拒否されたメンバーはメンバー → 拒否済み一覧に表示されます。',
          'そこから再承認するか、BAN するかを選べます。',
          'BAN されたメンバーは Join Academy から再申請できません。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '有効カードを先に外すのは、拒否前の通常の整理手順の一部です。',
          '後で BAN を解除したい場合は、Banned List に行って Remove Ban を使います。'
        ],
        next_title: '次のステップ',
        back_link: 'メンバー概要に戻る',
        next_link: 'Cards ワークフローを確認する'
      }
    },
    account: {
      sign_in: {
        badge: 'アカウント',
        title: 'アカウントにサインインする',
        intro: 'アカウントがすでに存在し、道場、予約、カード、記録にアクセスしたいときに使います。',
        need_title: '必要なもの',
        need_items: ['メールアドレス', 'パスワード'],
        trouble_title: 'サインインできない場合',
        trouble_items: [
          'メールアドレスとパスワードが正しいか確認する',
          '必要ならパスワード再設定を使う',
          '画面が見慣れない場合は言語設定を確認する'
        ],
        next_title: '次のステップ',
        back_link: '受講者導線に戻る',
        next_link: 'パスワード再設定'
      },
      create: {
        badge: 'アカウント',
        title: 'アカウントを作成する',
        intro: '道場参加、クラス予約、その他のアプリ利用の前にアカウントを作成します。',
        path_title: '正しい経路を選ぶ',
        path_items: [
          '道場で練習したり参加したりするなら member/student 経路',
          '道場を設定または管理するなら admin/owner 経路'
        ],
        need_title: '必要なもの',
        need_items: ['有効なメールアドレス', 'アプリの条件を満たすパスワード'],
        next_title: '次のステップ',
        back_link: 'サインインに戻る',
        next_link: '道場に参加する'
      },
      reset: {
        badge: 'アカウント',
        title: 'パスワードをリセットする',
        intro: 'パスワードを思い出せない、または今のパスワードが使えないときに使います。',
        how_title: '流れ',
        how_items: [
          'サインイン画面からリセットを申請する',
          'DojoMate ログインに紐づいたメールを確認する',
          '届いたリセットリンクを開く'
        ],
        email_title: 'メールが届かない場合',
        email_items: [
          '迷惑メールを確認する',
          '正しいメールアドレスを入力したか確認する',
          'もう一度リセットを送る'
        ]
      },
      troubleshooting: {
        badge: 'アカウント',
        title: 'アカウントのトラブル対応',
        intro: 'よくあるサインインや登録の問題でアカウントに入れないときにこのページを使います。',
        signin_title: 'サインインできない',
        signin_items: [
          'メールアドレスとパスワードを慎重に確認する',
          '必要ならパスワードをリセットする',
          '端末がオンラインか確認する'
        ],
        email_title: 'メールがすでに使われている',
        email_body: '通常これはアカウントがすでに存在することを意味します。2 つ目のアカウントを作るのではなく、サインインまたはパスワードリセットを行ってください。',
        role_title: '役割の混乱',
        role_body: '役割が変わった、またはアカウントの挙動が想定と違う場合は、まず正しいアカウントと道場の会員資格を使っているか確認してください。'
      }
    },
    settings: {
      password: {
        badge: '設定',
        title: 'パスワードを変更する',
        intro: '現在のパスワードをまだ知っていて、アカウント設定内から更新したいときに使います。',
        know_title: '知っておくこと',
        know_items: [
          'これはパスワードリセットとは別です。変更はすでにアカウントへアクセスできる前提です。',
          'まったくサインインできない場合はパスワード再設定を使ってください。'
        ]
      },
      language: {
        badge: '設定',
        title: 'アプリの言語を変更する',
        intro: 'アプリを別の対応言語で表示したいときに言語設定を使います。',
        know_title: '知っておくこと',
        know_body: '画面が理解しづらいと感じたら、言語設定を確認するのが最も早い解決の一つです。'
      },
      currency: {
        badge: '設定',
        title: '通貨表示を選ぶ',
        intro: 'アプリ内のお金の表示方法を通貨設定で調整します。',
        know_title: '知っておくこと',
        know_items: [
          'メンバーは主に金額が正しく分かりやすく見えることを重視します。',
          'オーナーは道場側の財務設定や一貫性も気にする場合があります。'
        ]
      },
      privacy: {
        badge: '設定',
        title: 'プライバシー設定を確認する',
        intro: '通知、マーケティング、ランキング、公開プロフィール、予約、分析関連データがどう扱われるかを理解し、管理するためにプライバシー設定を使います。',
        main_title: '主なプライバシー領域',
        main_items: [
          '通知',
          'マーケティング',
          'ランキング参加',
          '公開プロフィールアクセス',
          '予約関連設定',
          '出席と集計分析データ'
        ],
        progression_title: '進捗関連のコントロール',
        progression_items: [
          'ランキング参加と公開プロフィールアクセスは別々の設定です。',
          'ランキング参加をオフにすると、そのアカウントはランキングから除外されます。',
          '公開プロフィールアクセスをオフにしても、すべての許可された表示面から自動で消えるわけではありません。',
          'マーケティング設定は進捗、ランキング、公開プロフィール設定とは別です。'
        ],
        child_title: '子どもと扶養アカウント',
        child_body: '子どもと扶養アカウントの記録は、進捗への参加、ランキングへの参加、公開進捗プロフィール、個別マーケティングから除外されます。',
        know_title: '知っておくこと',
        know_body: 'このページは、単にメッセージをオンオフすることではなく、プライバシーの選択を理解し管理するためのものです。'
      },
      delete: {
        badge: '設定',
        title: 'アカウント削除は慎重に',
        intro: 'アカウント削除は重大な操作です。1 つの道場を離れたいだけではなく、本当にアカウント自体を閉じたい場合にだけ使ってください。',
        before_title: '実行前に',
        before_items: [
          'まず検証ルールを確認する',
          '削除を妨げる条件を確認する',
          '子どもアカウントとそれに紐づくカード関係を考慮する'
        ],
        know_title: '知っておくこと',
        knowBody: 'アカウント全体を削除することと、1 つの道場の会員資格を離れることは同じではありません。アカウントを残すべきなら会員資格の導線を使ってください。'
      },
      logout: {
        badge: '設定',
        title: 'ログアウトする',
        intro: '現在の端末での利用を終えたとき、または別のアカウントに切り替えたいときに使います。'
      }
    },
    profile: {
      edit: {
        badge: 'プロフィール',
        title: 'プロフィールを編集する',
        intro: '個人プロフィール情報を更新する必要があるときに使います。',
        know_title: '知っておくこと',
        know_items: [
          'アカウントの使われ方によって、役割に関連する文脈が表示される場合があります。',
          '変更後はフォームを送信して更新を保存してください。'
        ]
      },
      children: {
        badge: 'プロフィール',
        title: '子どもアカウントを管理する',
        intro: '保護者やガーディアンが子どものアカウントを作成、編集、管理する必要があるときに使います。',
        do_title: 'できること',
        do_items: [
          '子どもアカウントを作成する',
          '子どもアカウント情報を編集する',
          '必要に応じて子どもアカウントを削除する'
        ],
        know_title: '知っておくこと',
        know_body: '保護者管理のアカウント関係は、道場参加や会員資格の処理など他の流れにも影響します。'
      }
    },
    student: {
      join: {
        badge: '受講者',
        title: '道場に参加する',
        intro: 'アカウントを道場に接続し、その道場をアプリ内で使い始めたいときにこの流れを使います。',
        find_title: '道場を探す方法',
        find_items: [
          '道場を見つける を使ってアプリ内で道場を探す',
          '直接検索したい、または道場 QR を読み取りたい場合は 道場を検索 を使う'
        ],
        steps_title: '手順',
        steps_items: [
          '道場セクションから 道場を見つける を開く。',
          '道場一覧を閲覧する。',
          '道場を開いて詳細を見る。',
          '道場情報とギャラリーを確認する。',
          '思っている道場か確認する。',
          '参加申請する。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '参加前に道場を比較したいときは 道場を見つける が便利です。',
          '道場を検索 は検索と QR 読み取りのための直接経路です。',
          '保護者は参加時に子どもアカウントも考慮する必要がある場合があります。'
        ],
        next_title: '次のステップ',
        back_link: '受講者導線に戻る',
        next_link: '会員資格を管理する'
      },
      home: {
        badge: '受講者',
        title: '道場でトレーニングしている',
        intro: 'この導線は、アカウント、予約、会員資格の案内が必要な受講者、保護者、道場メンバー向けです。',
        section_1: '道場に参加し、アクセスを管理する',
        join_link: '道場に参加する',
        memberships_link: '会員資格を管理する',
        section_2: '予約、記録、道場からの更新',
        booking_link: '予約',
        attendance_link: '出席記録',
        broadcast_link: 'Broadcast',
        alerts_link: 'システム通知',
        section_3: 'アカウントの案内',
        sign_in_link: 'サインイン',
        create_account_link: 'アカウント作成',
        reset_password_link: 'パスワード再設定',
        troubleshooting_link: 'アカウントのトラブル対応',
        change_password_link: 'パスワード変更',
        child_accounts_link: '子どもアカウント',
        still_need_title: '他の内容が必要ですか？',
        still_need_body: 'さらに専門的な一部テーマは、受講者向け導線の再構築が進むまでヘルプ v1 に残っている場合があります。',
        still_need_link: 'ヘルプ v1 を開く'
      },
      broadcast: {
        badge: '受講者',
        title: 'アプリで道場の Broadcast を読む',
        intro: 'アプリの Broadcast を使うと、道場からの更新やトレーニング投稿を読めます。これは閲覧中心の道場向け配信フィードであり、チャット、コメント、返信ではありません。',
        where_title: '見つける場所',
        where_items: [
          'メンバー側で Academy メニューを開き、Broadcast を押します。',
          '現在のアイコンはメガホンです。',
          'Broadcast は選択中の道場に紐づくため、先に道場を選択してください。'
        ],
        actions_title: 'できること',
        actions_items: [
          'Updates と Training のタブを切り替える。',
          'プルしてフィードを更新する。',
          'Broadcast の本文と画像キャプションを読む。',
          '画像をタップして全画面で開き、外側をタップして閉じる。'
        ],
        screen_title: '画面に表示されるもの',
        screen_items: [
          'タイトル: Broadcast',
          '上部に選択中の道場名',
          'タブ: Updates と Training',
          '各カードには著者名、または代替として Academy Admin が表示されることがあります',
          '公開日時',
          '本文、画像サムネイル、任意の画像キャプション'
        ],
        limits_title: '空状態と現在の制限',
        limits_items: [
          '道場が未選択の場合は、Select an academy first. と表示されることがあります。',
          'フィードが空の場合は、Updates coming soon または No visible broadcasts are available in this stream yet. と表示されることがあります。',
          '現在のメンバー向け Broadcast フィードは読み取り専用です。',
          'いいね、コメント、返信、リアクション、共有、メンバー投稿はありません。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'Broadcast が現在の正式な製品名です。以前の Newsfeed という表現は古くなっています。',
          'コンテンツは Affiliate 側で作成され、アプリで表示されます。',
          'フィード取得に失敗した場合、現在のアプリは専用エラー表示ではなく空リストにフォールバックします。',
          'Expo の管理者側作成画面はまだ準備段階であり、現行の主ワークフローとして扱うべきではありません。'
        ],
        join_link: '道場に参加する',
        alerts_link: 'システム通知'
      },
      memberships: {
        badge: '受講者',
        title: '道場の会員資格を管理する',
        intro: 'アカウントが複数の道場に属している場合や、どの道場の会員資格で動くかを切り替えたい場合に使います。',
        when_title: '重要になる場面',
        when_items: [
          '複数の道場に所属している',
          '今どの道場の中で動いているか選ぶ必要がある',
          'アプリで現在選ばれている道場が違う'
        ],
        know_title: '知っておくこと',
        know_items: [
          '複数道場のメンバーは、予約や記録確認の前に正しい道場を選ぶ必要があります。',
          '何かが見当たらない場合、単に別の道場が選ばれているだけかもしれません。'
        ],
        next_title: '次のステップ',
        back_link: 'Join Academy に戻る',
        next_link: '予約'
      },
      booking: {
        badge: '受講者',
        title: 'レッスンを予約する',
        intro: '予約ではレッスンを選び、使えるカードを選択し、枠を確保します。',
        steps_title: '手順',
        steps_items: [
          'スケジュールを開く。',
          '受けたいレッスンを選ぶ。',
          '予約条件を満たしているか確認する。',
          '使いたいカードを選ぶ。',
          '予約を確定する。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '複数の道場に所属している場合は、先に正しい道場を選ぶ必要があるかもしれません。',
          'カードが表示されない場合、レッスンとカードが適合していない可能性があります。',
          'ルールが許す間は予約解除もできます。'
        ],
        next_title: '次のステップ',
        back_link: '会員資格',
        next_link: '出席記録'
      },
      alerts: {
        badge: '受講者',
        title: 'システム通知を読む',
        intro: 'システム通知は、道場からの更新やアカウント・会員資格に関する重要情報を把握するのに役立ちます。',
        see_title: '表示されることがあるもの',
        see_items: [
          '道場の更新',
          '会員資格に関するお知らせ',
          '道場利用に紐づくその他のシステム生成通知'
        ],
        know_title: '知っておくこと',
        know_body: 'これは通常のチャットやメッセージスレッドではなく、システム通知の画面です。重要なアカウント情報・道場情報として扱ってください。'
      },
      attendance: {
        badge: '受講者',
        title: '出席記録を確認する',
        intro: 'トレーニング履歴を見返し、指定期間に何が起きたかを確認したいときに使います。',
        help_title: 'このページでできること',
        help_items: [
          '最近の出席をすばやく確認する',
          'より長い期間を見返す',
          'クラスが期待どおりに記録されたかを確認する'
        ],
        know_title: '知っておくこと',
        know_items: [
          '日付範囲の操作で長期間の確認がしやすくなります。',
          'このページは主に記録確認用であり、変更するためのものではありません。'
        ]
      }
    },
    account: {
      sign_in: {
        badge: 'アカウント',
        title: 'アカウントにサインインする',
        intro: 'アカウントがすでに存在し、道場、予約、カード、記録にアクセスしたいときに使います。',
        need_title: '必要なもの',
        need_items: ['メールアドレス', 'パスワード'],
        trouble_title: 'サインインできない場合',
        trouble_items: [
          'メールアドレスとパスワードが正しいか確認する',
          '必要ならパスワード再設定を使う',
          '画面がわかりにくい場合は言語設定を確認する'
        ],
        next_title: '次のステップ',
        back_link: '受講者導線に戻る',
        next_link: 'パスワード再設定'
      },
      create: {
        badge: 'アカウント',
        title: 'アカウントを作成する',
        intro: '道場に参加したり、クラスを予約したり、他の機能を使う前にアカウントを作成します。',
        path_title: '正しい導線を選ぶ',
        path_items: [
          'トレーニングや道場参加が目的ならメンバー/受講者導線',
          '道場の設定や管理が目的なら管理者/オーナー導線'
        ],
        need_title: '必要なもの',
        need_items: ['有効なメールアドレス', 'アプリのルールを満たすパスワード'],
        next_title: '次のステップ',
        back_link: 'サインインに戻る',
        next_link: '道場に参加する'
      },
      reset: {
        badge: 'アカウント',
        title: 'パスワードを再設定する',
        intro: 'パスワードを忘れたときや、今のパスワードが使えなくなったときに使います。',
        how_title: '流れ',
        how_items: [
          'サインイン画面から再設定をリクエストする',
          'DojoMate ログインに紐づくメールを確認する',
          '届いたリンクを開いて再設定する'
        ],
        email_title: 'メールが届かない場合',
        email_items: [
          '迷惑メールを確認する',
          '正しいメールアドレスを入力したか確認する',
          'もう一度再設定メールを送る'
        ]
      },
      troubleshooting: {
        badge: 'アカウント',
        title: 'アカウントのトラブル対応',
        intro: 'よくあるサインインや登録の問題でアクセスできないときに使うページです。',
        signin_title: 'サインインできない',
        signin_items: [
          'メールアドレスとパスワードを丁寧に確認する',
          '必要ならパスワードを再設定する',
          '端末がオンラインか確認する'
        ],
        email_title: 'メールアドレスがすでに使われている',
        email_body: '通常は、すでにそのアカウントが存在するという意味です。2つ目を作るのではなく、サインインかパスワード再設定を行ってください。',
        role_title: '役割の混乱',
        role_body: '役割が変わった、または期待どおりに動かない場合は、まず正しいアカウントと道場メンバーシップを使っているか確認してください。'
      }
    },
    settings: {
      password: {
        badge: '設定',
        title: 'パスワードを変更する',
        intro: '現在のパスワードを知っていて、アカウント設定の中から更新したいときに使います。',
        know_title: '知っておくこと',
        know_items: [
          'これはパスワード再設定とは別です。変更は、すでにアカウントにアクセスできる前提です。',
          'まったくサインインできない場合は、代わりにパスワード再設定を使ってください。'
        ]
      },
      language: {
        badge: '設定',
        title: 'アプリの言語を変更する',
        intro: 'アプリを別の対応言語で表示したいときに言語設定を使います。',
        know_title: '知っておくこと',
        know_body: '画面がわかりにくいと感じたら、まず言語設定を確認するのが最も早い解決策のひとつです。'
      },
      currency: {
        badge: '設定',
        title: '通貨表示を選ぶ',
        intro: '通貨設定を使って、アプリ内で金額をどう表示するかを決めます。',
        know_title: '知っておくこと',
        know_items: [
          'メンバーにとっては、金額が正しく読みやすく表示されることが大切です。',
          'オーナーは、道場側の金額設定や整合性も気にすることがあります。'
        ]
      },
      privacy: {
        badge: '設定',
        title: 'プライバシー設定を確認する',
        intro: '通知、マーケティング、ランキング、公開プロフィール、予約、分析関連データの扱いを理解し管理するためにプライバシー設定を使います。',
        main_title: '主なプライバシー領域',
        main_items: [
          '通知',
          'マーケティング',
          'ランキング参加',
          '公開プロフィールへのアクセス',
          '予約に関する設定',
          '出席と集計分析データ'
        ],
        progression_title: '進捗関連のコントロール',
        progression_items: [
          'ランキング参加と公開プロフィールアクセスは別々の設定です。',
          'ランキング参加をオフにすると、ランキングから除外されます。',
          '公開プロフィールアクセスをオフにしても、許可されたすべての表示面から自動的に消えるわけではありません。',
          'マーケティング設定は進捗、ランキング、公開プロフィール設定とは別です。'
        ],
        child_title: '子ども・扶養アカウント',
        child_body: '子どもと扶養アカウントの記録は、進捗への参加、ランキングへの参加、公開進捗プロフィール、個別マーケティングの対象外です。',
        know_title: '知っておくこと',
        know_body: 'このページは、単にメッセージをオンオフするだけでなく、プライバシーの選択肢を理解して管理するためのものです。'
      },
      delete: {
        badge: '設定',
        title: 'アカウント削除は慎重に',
        intro: 'アカウント削除は大きな操作です。1つの道場を離れたいだけではなく、本当にアカウント自体を閉じたいときだけ使ってください。',
        before_title: '実行前に',
        before_items: [
          'まず検証ルールを確認する',
          '削除を妨げる条件を確認する',
          '子どもアカウントと関連カードの関係を考慮する'
        ],
        know_title: '知っておくこと',
        know_body: 'アカウント全体を削除することは、1つの道場メンバーシップを離れることとは違います。アカウントを残すべきなら、メンバーシップの導線を使ってください。'
      },
      logout: {
        badge: '設定',
        title: 'ログアウトする',
        intro: '現在の端末での利用を終えるときや、別のアカウントに切り替えたいときに使います。'
      }
    },
    profile: {
      edit: {
        badge: 'プロフィール',
        title: 'プロフィールを編集する',
        intro: '個人プロフィール情報を更新したいときに使います。',
        know_title: '知っておくこと',
        know_items: [
          'アカウントの使われ方によって、役割に関連する文脈が表示されることがあります。',
          '変更後はフォームを送信して保存してください。'
        ]
      },
      children: {
        badge: 'プロフィール',
        title: '子どもアカウントを管理する',
        intro: '保護者が子どものアカウントを作成、編集、管理したいときに使います。',
        do_title: 'できること',
        do_items: [
          '子どもアカウントを作成する',
          '子どもアカウント情報を編集する',
          '必要に応じて子どもアカウントを削除する'
        ],
        know_title: '知っておくこと',
        know_body: '保護者が管理するアカウント関係は、道場参加やメンバーシップ処理など他の導線にも影響することがあります。'
      }
    },
    tools: {
      overview: {
        badge: 'ツール',
        title: '有料ツールで道場運営を拡張する',
        intro: '有料ツールは、基本の道場ワークフローに加えて、定期スケジュール、カード一時停止、スタッフ権限、分析、Broadcast などの機能を追加します。',
        start_badge: '有料ツール',
        start_title: '必要なツールから始める',
        timetable_title: '定期スケジュールを作る',
        timetable_body: '毎週繰り返すレッスンを、一つずつ作り直さずに運用したい場合は Timetable を使います。',
        timetable_link: 'Timetable を開く',
        pause_title: '有効なカードを一時停止する',
        pause_body: 'カード期間を一時的に止めたい場合はカード一時停止を使います。',
        pause_link: 'カード一時停止を開く',
        broadcast_title: 'メンバーに Broadcast を送る',
        broadcast_body: 'Affiliate Portal からメンバーへ一方向の更新やトレーニング投稿を配信したい場合は Broadcast を使います。',
        broadcast_link: 'Broadcast を開く',
        know_title: '知っておくこと',
        know_items: [
          '有料ツールは、ビジネス、スケジュール、カード、メンバーで使っている基本ワークフローを拡張するものです。',
          'ツールは個別に提供される場合もあれば、プレミアムパッケージに含まれる場合もあります。',
          '道場オーナーが有効化すれば、他の役割でも利用できることが多いです。',
          '通常は先に基本ワークフローを理解してから、有料ツールを重ねるほうが分かりやすいです。'
        ],
        activate_link: 'ツール状況を確認する'
      },
      activate: {
        badge: 'ツール',
        paid_badge: '有料ツール',
        title: 'ツールとプレミアムを有効化する',
        intro: 'Affiliate Portal の機能ページで、ツールグループの確認、無料トライアル開始、パッケージ購入、道場で有効なパッケージツールの管理を行います。',
        where_title: '移動先',
        where_body: 'Affiliate Portal で 機能 を開きます。ここが現在の Rails 管理下にある、ツール有効化、パッケージ状態、トライアル状態の入口です。',
        organized_title: 'ページの構成',
        organized_items: [
          'ツールは個別でも利用できます。',
          '機能ページでは、基本ツール、高度なツール、各パッケージセクションに分かれています。',
          'プレミアムパッケージには 4 つの生産性ツールが含まれます。',
          '現在の UI にはプロパッケージも表示されます。',
          '初回ユーザーは 90 日間のプレミアムトライアルを開始できます。'
        ],
        groups_title: '現在のツールグループ',
        essential_title: '基本ツール',
        essential_items: ['Timetables', 'Pause Academy'],
        advanced_title: '高度なツール',
        advanced_items: ['スタッフ権限', 'Analytics'],
        packages_title: 'パッケージ',
        packages_body: '現在の UI にはプレミアムパッケージとプロパッケージが含まれます。',
        features_title: '機能ページに表示されるもの',
        features_items: [
          'Start Free Trial',
          'プレミアムパッケージを購入',
          'プロパッケージを購入',
          'プレミアム有効',
          'プレミアムに含まれる',
          'Available in free trial',
          'Included in free trial',
          'Included in your package',
          'Manage'
        ],
        know_title: '知っておくこと',
        know_items: [
          'ツールが無効なとき、完全にロックされる画面もあります。',
          '画面自体は開けても、有料アクションだけがアップグレード案内に置き換わる場合もあります。',
          'この UI での現在の利用者向け名称は Broadcast であり、古い Newsfeed 表記ではありません。',
          'パッケージのトライアル動作は重複を考慮しているため、プロとプレミアムは単純に互いをリセットしません。'
        ],
        guides_title: '有料ツールのガイド',
        staff_access: 'スタッフアクセス',
        analytics: 'Analytics',
        support_desc: '機能ページ、購読、トライアル状態、その他 Affiliate Portal のウェブ導線に関する質問は、Source Combatives の Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      broadcast: {
        badge: 'ツール',
        paid_badge: '有料ツール',
        title: 'メンバーへ一方向の Broadcast を送る',
        intro: 'Affiliate Portal の Broadcasts は、道場の更新やトレーニング投稿をメンバーに公開したいときに使います。これは一方向の配信ツールであり、チャット、返信、ソーシャルフィードではありません。',
        where_title: '場所',
        where_items: [
          'Affiliate Portal のナビゲーションから Broadcasts を開きます。',
          '現在の Affiliate Portal では、Broadcast は実質オーナー専用です。',
          '機能ページでは Broadcast は Pro ツールとして表示されます。'
        ],
        flow_title: '投稿の流れ',
        flow_steps: [
          'Affiliate Portal で Broadcasts を開く。',
          '投稿先の stream タブを選ぶ。',
          'メッセージ本文を書く。',
          '画像を URL 貼り付けまたはファイルアップロードで追加する。',
          'Publish Broadcast を使って道場フィードへ送る。'
        ],
        labels_title: '現在表示されるラベル',
        labels_items: [
          'Broadcasts',
          'Message',
          'Image URLs',
          'Upload Images',
          'Publish Broadcast',
          'Recall',
          'Repost',
          'Delete',
          'Visibility tabs: Visible, Recalled, All'
        ],
        lifecycle_title: 'ライフサイクルのルール',
        lifecycle_items: [
          '表示中の Broadcast は、削除前に Recall する必要があります。',
          'Recall 済みの Broadcast は、再度公開したい場合に Repost できます。',
          '完全削除できるのは Recall 済みの Broadcast だけです。',
          'Recall 済みの Broadcast は一定期間は復元可能で、その後 Repost されなければ自動削除されます。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'ユーザー向けの表記は常に Broadcast を使ってください。古い Newsfeed 表記は古くなっています。',
          'Broadcast は entitlement で管理されており、初期状態では使えません。',
          '画像は URL 貼り付けでもファイルアップロードでも追加できます。',
          'Broadcast は Affiliate Portal で作成され、その後アプリで閲覧されます。'
        ],
        features_link: '機能',
        student_link: 'アプリで Broadcast を読む',
        support_desc: 'Broadcast ツール、公開・Recall・Repost の問題、または Affiliate 上の entitlement に関する質問は、Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      timetable: {
        badge: 'ツール',
        paid_badge: '有料ツール',
        title: '毎週繰り返すスケジュールを作る',
        intro: 'Timetable は、レッスンテンプレートを一度作成し、それを時間をかけてカレンダーに反映したいときに使います。',
        use_title: 'こんなときに使う',
        use_items: [
          '毎週同じクラスを行っている',
          '各レッスンを手動で作り直さず、もっと先まで計画したい',
          '準備ができた段階でカレンダーにレッスンを公開したい'
        ],
        steps_title: '手順',
        steps_items: [
          'Timetable を開く。',
          '希望する曜日を選ぶ。',
          'Create Lesson を押す。',
          '通常の Schedule 画面と同じようにレッスンフォームを入力する。',
          '繰り返しテンプレートの開始日と終了日を設定する。',
          'テンプレートを保存する。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'テンプレートは公開するまで実際のカレンダーレッスンにはなりません。',
          '将来の日付を終了日に使うことで、安全に先の予定まで組めます。',
          '作成後は曜日ページに戻って、そこでテンプレートを編集できます。'
        ],
        publish_title: '公開',
        publish_body_1: '未公開のレッスンはまず Schedule ページに表示されます。管理者は予約可能にする準備ができた時点で公開できます。',
        publish_body_2: 'メンバーは未公開レッスンを将来予定として見ることはできますが、まだ予約はできません。',
        mistake_title: 'よくある間違い',
        mistake_body: '繰り返しレッスンが祝日に当たっても、通常は timetable を作り直す必要はありません。その回を公開しないだけで大丈夫です。',
        activate_link: 'ツール状況を確認する'
      },
      pause: {
        badge: 'ツール',
        paid_badge: '有料ツール',
        title: '必要なときにアクティブなカードを一時停止する',
        intro: 'カード一時停止は、カードの有効期限を通常どおり進めるのではなく、一時的に止めたいときに使います。',
        modes_title: 'カードを止める2つの方法',
        modes_items: [
          '個別停止: そのメンバーのプロフィールから1人分のカードを停止または再開する。',
          '道場全体停止: オーナーは道場全体のカードを停止できます。'
        ],
        know_title: '知っておくこと',
        know_items: [
          '停止中のカードは予約に使えません。',
          '必要なら、カードテンプレートごとに道場全体停止から除外できます。',
          '道場全体停止の前に個別停止されていたメンバーは、道場全体停止が終わった後も停止状態のままです。'
        ],
        common_title: '最もよくある使い方',
        common_body: 'オーナーは、期限を1枚ずつ手動で延長することなく、メンバーの時間を保護したいときによくこのツールを使います。',
        next_title: '次のステップ',
        back_tools: 'ツール概要に戻る',
        activate_link: 'ツール状況を確認する',
        back_cards: 'Cards に戻る'
      }
    },
    portal: {
      overview: {
        badge: 'ポータル',
        title: 'Affiliate Portal を使う',
        intro: 'Affiliate Portal は Source Combatives のウェブ画面です。通常の日常アプリ画面より重いオーナー向け作業、特に登録、審査、ランク、カード、レポート、パッケージ有効化に使います。',
        workflows_title: '主な Affiliate Portal ワークフロー',
        register_title: '登録とオンボーディング',
        register_body: '登録ウィザードを使って大人や保護者アカウントを作成し、必要に応じて子どもを追加し、中断したオンボーディングを後から再開できます。',
        members_title: 'メンバーステータスを管理する',
        members_body: '保留、承認済み、拒否済み、禁止済みユーザーを確認し、既存アカウントをメールで紐付けたり、保護者のオンボーディングを再開したりできます。',
        ranks_title: 'ランクプログラムを管理する',
        ranks_body: 'ランクプログラムを設定し、プログラムごとにメンバーを登録し、現在の確認フローを通じてランク変更を確定します。',
        cards_title: 'Affiliate Portal でカードを管理する',
        cards_body: 'Templates、Assign、Active、History を使って、カード設定、発行、有効カード作業、一時停止、監査確認を行います。',
        reports_title: 'レポートとツールを確認する',
        reports_body: 'レポートは主に読み取り専用なので軽めの導線です。機能ページではパッケージやトライアル状態を管理します。',
        know_title: '知っておくこと',
        know_items: [
          '多くの Affiliate Portal ページは実質オーナー専用です。',
          '主な例外は月次レポートで、レポート権限が付与されていれば非オーナースタッフも確認できます。',
          'Affiliate Portal での変更は、メンバーステータス、カード、ランクデータ、ツール有効化などを通じてアプリに直接反映されることが多いです。'
        ],
        support_desc: 'アフィリエイトポータル、初期設定、その他 Affiliate Portal のウェブワークフローに関する質問は、Source Combatives の Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      register: {
        badge: 'ポータル',
        title: 'アフィリエイトポータルで登録する',
        intro: 'Affiliate Portal の Register は、ポータルから新しい道場メンバーを作成したいときに使います。これは 1 画面フォームではなく、複数ステップのウィザードです。',
        flow_title: '流れ',
        flow_steps: [
          'Affiliate Portal で Register を開き、最初に保護者または大人の情報を入力します。',
          '保護者として登録する場合は、子どもステップで子どもアカウントを追加します。',
          '内容を確認し、Confirm & Create で完了します。',
          '作成後は、引き続き作業するならもう 1 人登録またはメンバーへ移動を使います。'
        ],
        labels_title: '現在表示されるラベル',
        labels_items: ['登録', '次へ', '戻る', '確認して作成', 'もう 1 人登録', 'メンバーへ移動', '登録を再開'],
        know_title: '知っておくこと',
        know_items: [
          '保護者と成人受講者は完全に同じ導線ではありません。',
          '保護者が受講者として登録する場合、子どもステップはスキップされます。',
          '保護者は Pending のまま残り、後からメンバーで再開できます。',
          'ここで作成したアカウントは通常の DojoMate ユーザーとなり、アプリが使う道場メンバーデータにも現れます。'
        ],
        next_title: '次のステップ',
        members_link: 'メンバー',
        cards_link: 'Cards',
        support_desc: '登録ウィザード、Pending 保護者の再開、その他 Affiliate オンボーディングの問題は Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      members: {
        badge: 'ポータル',
        title: 'ポータルのメンバーを管理する',
        intro: 'Affiliate Portal のメンバーは、道場メンバーのステータスを審査するために使います。これは単なる一覧ではなく、ステータス中心の画面です。',
        jobs_title: '主な仕事',
        jobs_items: [
          'Pending Users、Recently Accepted、保護者アカウント、成人メンバー、拒否済みユーザー、禁止済みユーザーを確認する。',
          '審査作業には Accept、Reject、Ban を使う。',
          '既存アカウントをメールで紐付けるにはメールでメンバー追加を使う。',
          '保留中の保護者フローを再開するには登録を再開を使う。'
        ],
        labels_title: '現在表示されるラベル',
        labels_items: ['メンバー', 'メンバー一覧', 'メールでメンバー追加', '承認', '拒否', '禁止', '登録を再開', '保留中, 承認済み, 拒否済み, 禁止済み'],
        confusion_title: 'よくある混乱',
        confusion_items: [
          'メールでメンバー追加は、すでに存在するアカウントにしか使えません。',
          '子どもアカウントがまだ承認済みだと、保護者の Reject がブロックされる場合があります。',
          'アクティブなカードが残っている場合も Reject がブロックされることがあります。',
          'このページは単なる審査画面ではなく、中断した登録を再開する場所でもあります。'
        ],
        next_title: '次のステップ',
        register_link: '登録',
        cards_link: 'カード',
        support_desc: 'メンバーステータス、保護者・子どもの審査、既存アカウントのメール紐付けに関する問題は Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      ranks: {
        badge: 'ポータル',
        title: 'ランクとプログラムを管理する',
        intro: 'Affiliate Portal の Ranks では、道場のランクプログラムを設定し、メンバーの進捗を更新します。これは単一のグローバル設定ではなく、複数プログラムのワークフローです。',
        jobs_title: '主な仕事',
        jobs_items: [
          '必要なら最初にオーナーのメンバープロフィールを作成する。',
          'Add Program と Save Systems を使って武道プログラムとランク制度を設定する。',
          'Enroll Member と Remove from Program で、各プログラムの所属を管理する。',
          'ランクや stripe を更新し、review モーダルが出たら変更を確定する。'
        ],
        labels_title: '現在表示されるラベル',
        labels_items: ['Ranks', 'Create profile', 'Add Program', 'Save Systems', 'Remove Program', 'Enroll Member', 'Remove from Program', 'Save', 'Review Change', 'Confirm Change'],
        know_title: '知っておくこと',
        know_items: [
          'ここに表示されるのは承認済みメンバーだけです。',
          'プログラムごとの roster は、武道トラックごとに異なる場合があります。',
          '一部のランク変更は、保存前に change type と notes を含む review ステップが必要です。',
          'ここでの変更は、アプリが読む進捗データに反映されます。'
        ],
        next_title: '次のステップ',
        members_link: 'メンバー',
        analytics_link: 'Analytics',
        support_desc: 'ランクプログラム設定、roster 登録、Ranks の review モーダルに関する問題は Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      cards: {
        badge: 'ポータル',
        title: 'ポータルのカードを使う',
        intro: 'Affiliate Portal のカードは、テンプレート、発行、有効カード管理、一時停止、履歴まで含むフルのウェブカード導線が必要なときに使います。',
        areas_title: '主なカード領域',
        areas_items: [
          'Templates ではカードテンプレートの作成、編集、削除を行う。',
          'Assign では承認済みメンバーにカードを発行する。',
          'Active では現在のカード状態、一時停止、削除や Expire 操作を扱う。',
          'History では発行、削除、監査履歴を確認する。'
        ],
        labels_title: '現在表示されるラベル',
        labels_items: [
          'Templates, Assign, Active, History',
          'New Template, Create, Update',
          'Issue Card, Manage, Delete',
          'Pause Academy, Unpause Academy, Pause Member, Unpause Member',
          'View Plans'
        ],
        know_title: '知っておくこと',
        know_items: [
          'アクティブなカードが残っているテンプレートは削除できません。',
          '道場全体が一時停止中の場合、個別カード管理はロックされます。',
          'Pause と Unpause の操作には有料の Pause ツールが必要です。',
          'カード削除には Expire と Cancel があり、Cancel では理由が必要になることがあります。',
          'Affiliate Portal で発行したカードは、アプリの予約、出席・回数消化、メンバーカード状態に使われる実運用カードです。'
        ],
        next_title: '次のステップ',
        members_link: 'メンバー',
        pause_link: 'カード一時停止',
        app_cards_link: 'アプリのカード',
        support_desc: 'Affiliate Cards 内のテンプレート、発行、有効カード、一時停止、履歴に関する質問は Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      },
      reports: {
        badge: 'ポータル',
        title: 'ポータルのレポートを確認する',
        intro: 'Affiliate Portal のレポートは、システムで生成済みの月次財務レポートを確認するために使います。このページは読み取り専用です。',
        flow_title: '使い方',
        flow_items: [
          '複数の道場にアクセスできる場合は、最初に道場を選択します。',
          'year filter を使って Apply を押します。',
          '月ごとのレポートカードを開いて、生成済みデータを確認します。'
        ],
        access_title: 'アクセスと entitlement',
        access_items: [
          '通常はオーナーがレポートにアクセスできます。',
          '非オーナースタッフは、レポート権限が付与されている場合のみアクセスできます。',
          'Analytics entitlement が無効な場合、このページはレポートではなくロック状態を表示します。'
        ],
        know_title: '知っておくこと',
        know_items: [
          'この画面で Affiliate Portal がレポートをリアルタイム計算しているわけではありません。',
          'レポートデータは、より広い分析データとシステムパイプラインから来ています。',
          'ロック状態が表示される場合は機能ページに移動してください。'
        ],
        support_desc: 'レポートアクセス、Analytics のロック状態、Affiliate 月次レポートに関する質問は Affiliate Portal 掲示板をご利用ください。',
        support_button: 'Affiliate Portal 掲示板を開く'
      }
    }
  }
}
