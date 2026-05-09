export default {
  help_v3: {
    support: {
      heading: '還需要更多幫助？',
      default_description: '如有後續問題、特殊情況或跨產品流程需要說明，請前往 Source Combatives 上的 DojoMate 幫助版塊。',
      default_button: '打開 DojoMate 幫助版塊'
    },
    layout: {
      badge: '幫助 v3',
      intro: '依照目前 DojoMate 儀表板與角色分組的工作流程指南。',
      open_v2: '打開幫助 v2',
      search_placeholder: '搜尋幫助 v3',
      search_no_results: '找不到結果',
      nav: {
        start_here: '從這裡開始',
        home: '幫助 v3 首頁',
        member_home: '學員指南',
        admin_home: '管理指南',
        owner_home: '館主指南',
        account_home: '帳號指南',
        member: '學員',
        admin: '管理 / 員工',
        owner: '館主 / 營運',
        account: '帳號 / 設定',
        join_academy: '加入學院',
        memberships: '會員資格',
        member_cards: '會員卡',
        card_disputes: '會員卡爭議',
        booking: '預約課程',
        attendance_records: '出勤記錄',
        system_alerts: '系統提醒',
        broadcasts: '公告廣播',
        online_learning: '線上學習',
        events: '活動賽事',
        academy_context: '學院情境',
        admin_members: '成員管理',
        admin_cards: '會員卡管理',
        session_debt: '課次債務',
        lessons: '課程模板',
        schedule: '課表安排',
        admin_booking: '代訂課程',
        admin_broadcasts: '發佈廣播',
        alerts_qr: '提醒與 QR 工具',
        create_academy: '建立學院',
        onboarding: '新館主引導',
        business_management: '學院業務管理',
        instructors: '教練管理',
        access: '權限存取',
        operations_analytics: '營運分析',
        timesheets_salaries: '工時與薪資',
        oversight: '監督審查',
        owner_tools: '工具功能',
        sign_in: '登入',
        create_account: '建立帳號',
        reset_password: '重設密碼',
        change_password: '更改密碼',
        profile: '個人資料',
        child_accounts: '兒童帳號',
        privacy_progression: '隱私與進度',
        preferences: '偏好設定',
        delete_account: '刪除帳號',
        logout: '登出'
      }
    },
    welcome: {
      badge: '幫助 v3',
      title: '目前工作流程指南',
      intro: '當你需要依照目前 DojoMate 角色與儀表板來查找操作說明時，請使用幫助 v3。',
      areas_title: '選擇符合你工作的區域',
      member_title: '學員',
      member_body: '加入學院、會員卡、預約、提醒、公告、線上學習與活動賽事。',
      member_link: '打開學員指南',
      admin_title: '管理 / 員工',
      admin_body: '成員管理、會員卡、課表、代訂課程、公告與學院日常管理。',
      admin_link: '打開管理指南',
      owner_title: '館主 / 營運',
      owner_body: '建立學院、引導流程、館主專屬業務設定、權限與營運工作流程。',
      owner_link: '打開館主指南',
      account_title: '帳號 / 設定',
      account_body: '登入、密碼協助、個人資料、隱私設定、偏好設定與登出。',
      account_link: '打開帳號指南',
      note_title: 'v3 的差異',
      note_body: 'v3 依照目前產品中的角色與儀表板責任劃分來整理內容，比混合式的 v2 更適合查找與後續助理擷取。',
      note_button: '查看幫助 v2'
    },
    member: {
      home: {
        badge: '學員',
        title: '學員指南',
        intro: '當你在學院訓練，並需要加入、會員資格、會員卡、預約、提醒、公告、線上學習或活動方面的幫助時，請使用此指南。',
        areas_title: '學員主題',
        links: [
          {
            title: '學院與會員資格',
            body: '加入正確的學院，並確認目前選定的學院情境。',
            links: [
              { label: '加入學院', to: '/help-v3/member/join-academy' },
              { label: '會員資格', to: '/help-v3/member/memberships' }
            ]
          },
          {
            title: '會員卡與課程',
            body: '查看會員卡、提出爭議、預約課程，並確認出勤紀錄。',
            links: [
              { label: '會員卡', to: '/help-v3/member/cards' },
              { label: '會員卡爭議', to: '/help-v3/member/card-disputes' },
              { label: '預約課程', to: '/help-v3/member/booking' },
              { label: '出勤記錄', to: '/help-v3/member/attendance-records' }
            ]
          },
          {
            title: '學院內容與更新',
            body: '閱讀系統提醒、公告、線上學習內容與活動資訊。',
            links: [
              { label: '系統提醒', to: '/help-v3/member/system-alerts' },
              { label: '公告廣播', to: '/help-v3/member/broadcasts' },
              { label: '線上學習', to: '/help-v3/member/online-learning' },
              { label: '活動賽事', to: '/help-v3/member/events' }
            ]
          }
        ]
      },
      join_academy: {
        badge: '學員',
        title: '加入學院',
        intro: '當你想把帳號連接到使用 DojoMate 的學院時，請使用這個流程。',
        what_title: '你可以做什麼',
        what_items: [
          '在 Discover 中瀏覽學院。',
          '用學院名稱搜尋。',
          '掃描學院提供的 QR code。',
          '在決定加入之前先打開學院詳細資訊。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '如果你想先比較不同學院，請使用 Discover Academy。',
          '如果你已經知道學院，或想直接掃描 QR code，請使用 Academy Search。',
          '先用學院詳細頁確認是否找對學院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '送出加入動作後，學院仍可能需要先接受你。',
          '家長管理的帳號或兒童帳號連結，可能會讓後續步驟更多一些。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，學院會出現在你的 academy list 或 pending 狀態中。',
          '如果學院尚未接受你，後續學員功能仍可能保持受限。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員資格', to: '/help-v3/member/memberships' },
          { label: '會員卡', to: '/help-v3/member/cards' }
        ]
      },
      memberships: {
        badge: '學員',
        title: '管理會員資格與學院情境',
        intro: '當你屬於一間或多間學院，並需要確認目前作用中的學院時，請使用這個主題。',
        what_title: '你可以做什麼',
        what_items: [
          '查看和帳號連結的學院。',
          '在使用會員卡、預約或公告前切換選定學院。',
          '在某些內容看起來缺失時，先確認你目前是否處於正確的學院。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用已加入的 academy list 和學員端的 academy context 畫面。',
          '在判斷卡片或課程不存在之前，先重新確認目前選定的學院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '選錯學院，會讓卡片、課表和公告看起來像是不存在。',
          '會員資格狀態仍可能受到學院接受流程或兒童帳號連結影響。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '選定正確學院後，後續學員畫面會載入該學院的資料。',
          '如果仍停留在錯的學院，預約和會員卡相關內容會繼續顯得不一致。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員卡', to: '/help-v3/member/cards' },
          { label: '預約課程', to: '/help-v3/member/booking' }
        ]
      },
      cards: {
        badge: '學員',
        title: '查看會員卡與待付款項目',
        intro: '當你想確認目前有哪些可用會員卡、查看待付款卡片，或理解為什麼無法預約時，請使用這個主題。',
        what_title: '你可以做什麼',
        what_items: [
          '查看目前選定學院中的可用會員卡。',
          '檢查是否有待付款的卡片流程。',
          '在預約失敗時先確認是否真的是卡片問題。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用學員端會員卡畫面與待付款卡片流程。',
          '當預約提示沒有符合條件的卡片時，先回到這裡確認。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '學員會員卡會跟目前選定的學院綁定。',
          '這裡不是館主或管理員的稽核審查區域。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '待付款成功後，卡片可能會進入可使用狀態。',
          '如果付款或發卡更新後卡片仍然看起來不正確，請改用爭議流程。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員卡爭議', to: '/help-v3/member/card-disputes' },
          { label: '預約課程', to: '/help-v3/member/booking' }
        ]
      },
      booking: {
        badge: '學員',
        title: '預約或取消預約課程',
        intro: '當你想打開學院課表、查看課程、選擇可用會員卡並確認名額時，請使用預約流程。',
        steps_title: '常見步驟',
        steps_items: [
          '打開目前選定學院的課表。',
          '選擇一堂已排定的課程並查看詳細資訊。',
          '打開會員卡選擇，挑選符合條件的卡，並決定是否要在學員名單中匿名。',
          '確認預約或取消預約。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Academy Schedule、Academy Booking 和 Academy Card Selection。',
          '如果課程或會員卡看起來不對，先回去確認目前選定的學院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '預約使用目前的 scheduled-lesson 預約流程，不是一般課程編輯。',
          '會員卡是否符合資格，以及預約保護規則，都由後端決定。',
          '匿名預約只會對其他學員隱藏身分，學院工作人員仍會看到真實預約資料。',
          '就算預約動作被封鎖，已取消或已處理的課程仍可能保留可閱讀的詳細畫面。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，預約狀態和可見名單會更新。',
          '預期中的保護規則失敗會說明為何動作被封鎖，例如預約已關閉或課程已開始。',
          '如果系統無法確認請求是否成功，可能需要重新整理再試一次。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '出勤記錄', to: '/help-v3/member/attendance-records' },
          { label: '系統提醒', to: '/help-v3/member/system-alerts' }
        ]
      },
      attendance_records: {
        badge: '學員',
        title: '查看出勤記錄',
        intro: '當你想確認過去的課程是否有正確記錄出勤時，請使用出勤記錄。',
        what_title: '你可以做什麼',
        what_items: [
          '查看目前選定學院的歷史出勤資料。',
          '確認某堂課是否出現在你的記錄中。',
          '把這些記錄當成預約與上課之後的確認。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用學員端出勤或 academy records 畫面。',
          '當你想確認先前預約或到課結果時，先從這裡開始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '出勤記錄只能查看，不能由學員自行修改。',
          '如果記錄有誤，必須由學院端更正。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '正常的記錄代表該堂課已被成功登記。',
          '若記錄缺失或不正確，應改走學院後續處理，而不是自行修正。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '預約課程', to: '/help-v3/member/booking' },
          { label: '會員卡爭議', to: '/help-v3/member/card-disputes' }
        ]
      },
      system_alerts: {
        badge: '學員',
        title: '查看系統提醒',
        intro: '當你需要查看與帳號、學院或相關學員流程有關的重要更新時，請使用系統提醒。',
        what_title: '你可以做什麼',
        what_items: [
          '查看系統自動產生的重要帳號或學院更新。',
          '當推播通知無法直接打開精確畫面時，把提醒當成安全的回退頁面。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用學員端提醒畫面，例如 Academy Alerts。',
          '如果通知點開後無法進入特定頁面，應用可能會先帶你到這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '系統提醒不是聊天工具。',
          '並不是所有通知類型都已經有完整的精準深連結。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '閱讀後，提醒的已讀狀態可能會更新。',
          '如果提醒本身指向某個流程，接下來應該前往該流程，而不是停留在提醒頁。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '公告廣播', to: '/help-v3/member/broadcasts' },
          { label: '預約課程', to: '/help-v3/member/booking' }
        ]
      },
      broadcasts: {
        badge: '學員',
        title: '閱讀學院公告廣播',
        intro: '使用 Broadcast 閱讀目前選定學院的貼文。學員端的公告流是唯讀的，主要用來顯示學院更新與訓練貼文。',
        what_title: '你可以做什麼',
        what_items: [
          '在 Updates 和 Training 兩個分類之間切換。',
          '閱讀文字、圖片和學院公告貼文。',
          '打開圖片放大查看，並在不離開學員儀表板的情況下瀏覽內容。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用和目前選定學院綁定的學員 Broadcast 畫面。',
          '如果看到的是錯的內容流，先回去確認學院選擇。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '學員端 Broadcast 是唯讀的。',
          '這裡沒有留言、回覆、按讚或學員自行發文功能。',
          '空內容流不代表功能壞掉，也可能只是學院目前還沒有可見貼文。',
          'Broadcast 內容由學院端工作人員或館主建立，不是由學員端發文。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功載入後，會顯示目前選定學院的內容流。',
          '如果你想看的是帳號或系統狀態，請改看 System Alerts。',
          '如果學院也有線上學習權限，Broadcast 和 Online 仍然是分開的兩個內容區。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '系統提醒', to: '/help-v3/member/system-alerts' },
          { label: '線上學習', to: '/help-v3/member/online-learning' }
        ]
      },
      card_disputes: {
        badge: '學員',
        title: '提出會員卡爭議',
        intro: '當卡片、刪卡或卡片相關變更從學員端看起來有問題，且需要學院後續處理時，請使用會員卡爭議。',
        what_title: '你可以做什麼',
        what_items: [
          '建立一筆和卡片問題綁定的爭議紀錄。',
          '從學員角度說明哪裡看起來不正確。',
          '把問題放進專門的後續流程，而不是混在預約或個人資料問題裡。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用學員端的卡片與爭議畫面，例如 Academy Disputes。',
          '可以的話，從看起來有問題的卡片本身開始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '提出爭議不會立刻修正卡片。',
          '像 audit logs 這類館主專屬審查工具，不屬於學員端爭議流程。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，爭議會成為學院端需要跟進的項目。',
          '在學院完成審查前，你可能仍需等待卡片狀態改變。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員卡', to: '/help-v3/member/cards' },
          { label: '出勤記錄', to: '/help-v3/member/attendance-records' }
        ]
      },
      online_learning: {
        badge: '學員',
        title: '使用線上學習',
        intro: '當你的學員帳號有線上學習權限，且你想瀏覽課綱、打開課程、觀看片段並完成作業時，請使用 Online。',
        what_title: '你可以做什麼',
        what_items: [
          '在具備權限時，從學員儀表板打開 Online。',
          '瀏覽課綱、catalog 與課程層級。',
          '觀看教學片段和附加的 tips 影片。',
          '從所屬課程流程中打開並提交作業。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Online Home、Curriculum、Catalog、Lesson、Video 和 Homework 畫面。',
          '從課綱一路跟進到你要觀看的課程片段。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '只有在權限允許時，Online tile 才會出現。',
          '這裡的 Expo Online 是學員消費端，不是線上管理後台。',
          '作業與 tips 影片會綁定在所屬課程與切片，而不是獨立的學院全域內容流。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '有權限時，儀表板會顯示 Online 入口。',
          '作業與 tips 內容會留在各自的課程與切片之下，而不是變成漂浮的獨立內容。',
          '如果沒有權限，正確預期是根本看不到 Online 入口，而不是看到一個半空的畫面。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '活動賽事', to: '/help-v3/member/events' },
          { label: '公告廣播', to: '/help-v3/member/broadcasts' }
        ]
      },
      events: {
        badge: '學員',
        title: '瀏覽活動與報名',
        intro: '當你想瀏覽競賽活動、維護競賽資料，或管理活動報名步驟時，請使用 Events。',
        what_title: '你可以做什麼',
        what_items: [
          '瀏覽可參加的競賽活動。',
          '在報名前先打開活動詳細資訊。',
          '建立或更新你的競賽資料。',
          '在活動支援的情況下管理報名與付款步驟。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用活動列表、詳細、資料與報名畫面。',
          '有些活動流程會交給聯盟或活動網站等外部提供者，而不完全留在 app 內。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '外部提供者流程不會完全停留在 DojoMate app 裡。',
          '報名狀態可能取決於一般學院會員資格流程之外的活動專屬要求。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，你的競賽資料或報名狀態會更新。',
          '如果活動使用外部提供者，預期會被帶往外部流程，而不是完整 app 內表單。',
          '競賽資料更新可能會成為後續活動報名準備的一部分，而不是只停留在單一畫面。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員資格', to: '/help-v3/member/memberships' },
          { label: '系統提醒', to: '/help-v3/member/system-alerts' }
        ]
      }
    },
    admin: {
      home: {
        badge: '管理',
        title: '管理與員工指南',
        intro: '當你從學院管理儀表板協助處理成員、會員卡、課表、代訂或公告時，請使用此指南。',
        areas_title: '管理主題',
        links: [
          {
            title: '學院情境與成員',
            body: '先確認目前選定的是正確學院，再處理成員與身分相關工作。',
            links: [
              { label: '學院情境', to: '/help-v3/admin/academy-context' },
              { label: '成員管理', to: '/help-v3/admin/members' }
            ]
          },
          {
            title: '日常營運工作',
            body: '管理會員卡、課次債務、課程模板、課表與代訂流程。',
            links: [
              { label: '會員卡管理', to: '/help-v3/admin/cards' },
              { label: '課次債務', to: '/help-v3/admin/session-debt' },
              { label: '課程模板', to: '/help-v3/admin/lessons' },
              { label: '課表安排', to: '/help-v3/admin/schedule' },
              { label: '代訂課程', to: '/help-v3/admin/admin-booking' }
            ]
          },
          {
            title: '公告與支援工具',
            body: '使用目前的廣播發佈流程、提醒訊息與 QR 工具。',
            links: [
              { label: '發佈廣播', to: '/help-v3/admin/broadcasts' },
              { label: '提醒與 QR 工具', to: '/help-v3/admin/alerts-qr' }
            ]
          }
        ]
      },
      cards: {
        badge: '管理',
        title: '建立並發放會員卡',
        intro: '當你需要建立會員卡模板、發出有效會員卡、查看目前卡片，或改變學院成員可用的卡片狀態時，請使用管理端 Cards。',
        what_title: '你可以做什麼',
        what_items: [
          '建立會員卡模板。',
          '查看既有模板。',
          '將有效會員卡發給成員。',
          '查看有效卡片，並在畫面允許時處理暫停相關狀態。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用建立模板、模板列表、發卡和 Active Cards 等畫面。',
          '如果學員預約失敗其實是因為卡片不對，請回到這裡檢查。',
          '在 onboarding 階段，應用可能會直接把你帶到 Cards，因為第一張卡的里程碑就屬於學院建立流程。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '卡片模板和有效卡片是兩個不同層次。',
          '館主專屬的審查工具，例如 audit logs，不屬於一般管理端 Cards 指南。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，與卡片有關的管理和學員流程都會刷新。',
          '卡片更新進入正確學院情境之後，預約資格也可能隨之改變。',
          '如果這張卡只是 onboarding 或員工測試用途，它仍然可以計入里程碑，而不代表正式收費流程已經準備完成。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '課次債務', to: '/help-v3/admin/session-debt' },
          { label: '代訂課程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      academy_context: {
        badge: '管理',
        title: '確認目前管理的是哪一間學院',
        intro: '當你同時接觸多間學院，或擔心自己目前不在正確的管理情境中時，請先確認 academy context。',
        what_title: '你可以做什麼',
        what_items: [
          '確認目前載入的是哪一間學院。',
          '在進行成員、會員卡、課表或公告操作前，先切換到正確的學院。',
          '分辨自己現在處於 Admin 還是 Business / Owner 路徑。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用學院切換與管理入口流程。',
          '如果你剛從其他學院回來，先在這裡重新確認再繼續工作。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '管理與員工操作都會綁定到目前選定的學院。',
          '館主或 Business 側的設定工作不應該被誤認為一般 admin 功能。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '確認正確學院後，後續管理畫面會載入對應的資料。',
          '如果學院選錯，成員、卡片或課表看起來就可能像是缺失或不一致。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '成員管理', to: '/help-v3/admin/members' },
          { label: '會員卡管理', to: '/help-v3/admin/cards' }
        ]
      },
      members: {
        badge: '管理',
        title: '管理成員',
        intro: '當你需要查看待處理、已接受、已拒絕或已封鎖的學院成員，並檢查成員在學院中的參與狀態時，請使用 Members。',
        what_title: '你可以做什麼',
        what_items: [
          '查看待審核和已接受的會員資格。',
          '在畫面允許時，拒絕、封鎖或更新會員資格狀態。',
          '打開成員資料與出勤相關內容。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Pending、Accepted、Rejected 和 Banned 等成員狀態畫面。',
          '從管理端的成員區域打開成員詳細資料或出勤資訊。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '成員、教練和管理權限不是同一個概念。',
          '被標記為教練的已接受成人列，不應被當成一般成人成員列來理解。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功更新後，該人會移到正確的可見成員狀態。',
          '相關的管理畫面會依照新的成員狀態刷新。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員卡管理', to: '/help-v3/admin/cards' },
          { label: '代訂課程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      session_debt: {
        badge: '管理',
        title: '處理課次債務',
        intro: '當卡片或預約歷史產生需要由員工端結清的債務狀態時，請使用課次債務流程。',
        what_title: '你可以做什麼',
        what_items: [
          '查看未結清的課次債務項目。',
          '透過目前管理端的結清流程處理債務。',
          '把債務處理和學員爭議或館主監督分開。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用屬於目前卡片工具的管理端 debt 或 card-debt 畫面。',
          '應從卡片營運流程進入，而不是從成員資料假設一路跳進來。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '債務處理不是學員端爭議流程。',
          '館主審查工具仍然獨立於這個日常管理結清流程。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '結清後，債務狀態和相關卡片情境都應更新。',
          '如果底層紀錄本身是爭議問題，而不只是欠次數，應改走正確的爭議或監督路徑。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '會員卡管理', to: '/help-v3/admin/cards' },
          { label: '成員管理', to: '/help-v3/admin/members' }
        ]
      },
      lessons: {
        badge: '管理',
        title: '管理課程模板',
        intro: '當你需要在課程發布到實際課表之前建立、編輯或移除課程模板時，請使用 Lessons。',
        what_title: '你可以做什麼',
        what_items: [
          '建立課程模板。',
          '編輯模板中的教學與排程細節。',
          '刪除不再需要發布的模板。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 lesson-day、create lesson 和 edit lesson 等模板畫面。',
          '在進入實際課表發布前，先在這裡完成模板工作。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '課程模板不等於已發布的已排定課程。',
          '沒有進入 schedule 層之前，模板變更不會自動解釋所有已發布課表結果。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，模板可供後續課表使用。',
          '如果實際活動已存在，schedule 編輯仍可能是另外一步。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '課表安排', to: '/help-v3/admin/schedule' },
          { label: '代訂課程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      schedule: {
        badge: '管理',
        title: '發布與管理課表',
        intro: '當你需要發布課程、編輯已排定課程、取消或從實際課表中刪除它時，請使用課表工具。',
        what_title: '你可以做什麼',
        what_items: [
          '從模板發布已排定課程。',
          '編輯或取消已排定課程。',
          '查看已排定課程的詳細與名單狀態。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 schedule layout 和 create/edit event 流程。',
          '當你需要檢查目前狀態時，直接打開那堂已排定課程的詳細畫面。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '已取消或已處理的課程應該仍可供檢視，而不是從檢查流程中完全消失。',
          '只有實際的預約動作本身應在保護規則要求時被封鎖。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，學院課表會刷新，反映目前的已排定課程狀態。',
          '如果課程已取消，即使預約已關閉，詳細畫面仍可能對後續檢查有用。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '課程模板', to: '/help-v3/admin/lessons' },
          { label: '代訂課程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      admin_booking: {
        badge: '管理',
        title: '替學員或成員代訂課程',
        intro: '當員工需要從管理端課表代表某位成員建立或移除預約時，請使用 admin booking。',
        what_title: '你可以做什麼',
        what_items: [
          '從管理端打開某堂已排定課程。',
          '選擇目標成員與符合條件的卡片。',
          '使用目前的預約動作流程建立或移除預約。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Admin Booking 和相關的卡片選擇流程。',
          '應從你正在處理的那堂已排定課程開始，而不是先做一般成員搜尋。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '管理端不能建立匿名預約。',
          '後端的 booking guard codes 仍會決定是否允許預約。',
          '即使名單詳細還在，若發生非預期失敗，仍可能需要重新整理後再試一次。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，課程名單和預約狀態會更新。',
          '如果動作被封鎖，畫面應說明保護條件，而不是讓課程看起來像憑空消失。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '課表安排', to: '/help-v3/admin/schedule' },
          { label: '成員管理', to: '/help-v3/admin/members' }
        ]
      },
      broadcasts: {
        badge: '管理',
        title: '發佈廣播',
        intro: '當你想從 app 發布學院更新或訓練貼文時，請使用目前的管理端 Broadcast 流程。',
        what_title: '你可以做什麼',
        what_items: [
          '建立含文字與圖片的 Broadcast。',
          '建立含文字與單一 MP4 影片的 Broadcast。',
          '立即發布到目前選定學院的內容流。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用管理端 Members 區域中的 Broadcast 發佈畫面。',
          '發布前請先確認你在正確的選定學院情境中。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '目前沒有草稿儲存分流。',
          'app 只支援單支影片，且不能混合圖片加影片貼文。',
          '授權仍取決於學院角色與 access。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功建立後，Broadcast 會立即發布。',
          '如果媒體或授權不正確，建立動作應失敗，而不是產生隱藏草稿。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '提醒與 QR 工具', to: '/help-v3/admin/alerts-qr' },
          { label: '學院情境', to: '/help-v3/admin/academy-context' }
        ]
      },
      alerts_qr: {
        badge: '管理',
        title: '使用提醒與 QR 工具',
        intro: '當你需要與目前學院情境相關的提醒、QR 動作或恢復操作時，請使用這些管理端支援工具。',
        what_title: '你可以做什麼',
        what_items: [
          '查看屬於學院的管理或 business 提醒。',
          '打開 QR 相關工具。',
          '在需要恢復或切換時，使用學院情境支援流程。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用學院側選單中的提醒畫面和 QR 入口。',
          '如果目前學院不正確，回到學院切換器。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '這些流程支援學院工作，但不取代館主專屬的 business 管理。',
          '有些恢復動作屬於更廣的 bootstrap 或 settings 路徑，而不是一般日常選單。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '正確的提醒或 QR 動作會把你帶往下一個相關學院流程。',
          '如果問題其實屬於館主專屬 business 設定，下一步通常要改到館主側區域。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '學院情境', to: '/help-v3/admin/academy-context' },
          { label: '發佈廣播', to: '/help-v3/admin/broadcasts' }
        ]
      }
    },
    owner: {
      home: {
        badge: '館主',
        title: '館主與營運指南',
        intro: '當你需要建立學院、完成引導流程、管理館主專屬設定，或處理營運與監督工作時，請使用此指南。',
        areas_title: '館主主題',
        links: [
          {
            title: '學院建立與引導',
            body: '建立第一間學院，並完成以里程碑為主的引導流程。',
            links: [
              { label: '建立學院', to: '/help-v3/owner/create-academy' },
              { label: '新館主引導', to: '/help-v3/owner/onboarding' }
            ]
          },
          {
            title: '館主業務管理',
            body: '管理學院資訊、教練與學院管理權限。',
            links: [
              { label: '學院業務管理', to: '/help-v3/owner/business-management' },
              { label: '教練管理', to: '/help-v3/owner/instructors' },
              { label: '權限存取', to: '/help-v3/owner/access' }
            ]
          },
          {
            title: '營運與監督',
            body: '使用分析、工時薪資、監督審查與館主工具。',
            links: [
              { label: '營運分析', to: '/help-v3/owner/operations-analytics' },
              { label: '工時與薪資', to: '/help-v3/owner/timesheets-salaries' },
              { label: '監督審查', to: '/help-v3/owner/oversight' },
              { label: '工具功能', to: '/help-v3/owner/tools' }
            ]
          }
        ]
      },
      access: {
        badge: '館主',
        title: '管理權限與存取',
        intro: '當你需要決定哪些已接受的成人成員可以進入目前學院的管理端時，請使用 Access。',
        what_title: '你可以做什麼',
        what_items: [
          '把學院管理權限授予符合條件的已接受成人成員。',
          '更新或移除學院層級的 permission row。',
          '把管理權限與教學身分分開處理。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用館主端的 permissions 或 Access 畫面。',
          '在版面較窄的選單中，這個按鈕可能會簡短顯示為 `Access`。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '移除某一間學院的 permission row，不會自動移除這個人在其他學院的 broader admin role。',
          '這個畫面管理的是學院管理權限，不是教練身分。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，該人能否打開目前學院的管理功能會隨之改變。',
          '如果這個人同時還需要教學身分，請另外使用 Instructors。',
          '如果此人同時屬於其他學院，他在其他學院的 broader admin role 狀態仍可能保留。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '教練管理', to: '/help-v3/owner/instructors' },
          { label: '營運分析', to: '/help-v3/owner/operations-analytics' }
        ]
      },
      onboarding: {
        badge: '館主',
        title: '完成第一間學院的引導流程',
        intro: '如果你想了解建立學院後，第一間學院的引導教學目前如何推進，請使用這個主題。',
        steps_title: '里程碑順序',
        steps_items: [
          '建立學院。',
          '加入第一位教練，或決定館主是否自己擔任總教練。',
          '建立第一個會員卡模板。',
          '發出第一張有效會員卡。',
          '建立第一堂已排定課程。',
          '完成第一個管理端代訂動作。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '依照引導中的儀表板提示和全螢幕 onboarding 畫面進行。',
          '使用應用程式目前高亮的區塊來完成下一個里程碑。'
        ],
        limits_title: '重要限制',
        limits_items: [
          'Onboarding 是由里程碑驅動，並依賴持久的 usage-history 狀態。',
          '完成教學不需要真實付費學生，也不代表已完成線上付款設定。',
          'Onboarding 完成不等於學院已經達到帳單或收款就緒狀態。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '每完成一個里程碑，應用會揭露下一個建議區塊。',
          '完成 onboarding 之後，完整的管理儀表板會打開，並依照權限顯示更多工具。',
          '教學流程可以用館主自己或員工的測試流程完成，不需要先有真實付費成員。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '教練管理', to: '/help-v3/owner/instructors' },
          { label: '權限存取', to: '/help-v3/owner/access' }
        ]
      },
      create_academy: {
        badge: '館主',
        title: '建立新學院',
        intro: '當你需要建立第一間或新增另一間學院時，請使用建立學院流程。',
        what_title: '你可以做什麼',
        what_items: [
          '建立新的學院。',
          '在有多個身分或多間學院時，切換到建立模式。',
          '建立後直接進入後續引導。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Business 建立流程與相關的 bootstrap / gate 畫面。',
          '如果應用先顯示選擇路徑畫面，先確認你要的是建立新學院，而不是進入既有管理情境。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '可建立的學院數量仍可能受目前方案或 academy slots 影響。',
          '取消建立模式會返回到管理入口，而不是完成任何設定。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，新學院會被選定，並進入後續引導流程。',
          '如果中途取消，應用會回到 admin / business 的選擇入口。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '新館主引導', to: '/help-v3/owner/onboarding' },
          { label: '學院業務管理', to: '/help-v3/owner/business-management' }
        ]
      },
      business_management: {
        badge: '館主',
        title: '管理學院業務設定',
        intro: '當你需要維護學院本身的資料、媒體與館主層級設定時，請使用 Business Management。',
        what_title: '你可以做什麼',
        what_items: [
          '更新學院基本資料。',
          '管理 logo、banner、gallery 或其他學院媒體。',
          '處理館主層級的學院設定與生命週期操作。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Business 相關的編輯、刪除、媒體與館主設定畫面。',
          '當工作是調整學院本身，而不是日常 admin 任務時，應回到這一區。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '這些是館主範圍的 academy-management 功能，不是一般員工權限。',
          '更新學院資料不會自動改變管理員存取權或營運分析權限。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，學院資料與相關館主畫面會顯示新內容。',
          '如果接下來是處理誰能進入管理端，請改到 Access。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '權限存取', to: '/help-v3/owner/access' },
          { label: '教練管理', to: '/help-v3/owner/instructors' }
        ]
      },
      instructors: {
        badge: '館主',
        title: '管理教練',
        intro: '當你需要管理學院人員中的教學身分層面時，請使用 Instructors。',
        what_title: '你可以做什麼',
        what_items: [
          '加入或維護學院中的教練身分。',
          '在 onboarding 與後續學院管理中，支援總教練和教學人員設定。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用館主端學院區域中的 Business Instructors 畫面。',
          '當問題是教學身分，而不是管理存取權時，請回到這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '教練身分不等於學院管理存取權。',
          '教練身分也不等於薪資或薪酬所有權。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功的教練設定會滿足 onboarding 與學院人員配置中的教學身分需求。',
          '如果問題是誰可以管理學院，而不是誰負責授課，請改用 Access。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '權限存取', to: '/help-v3/owner/access' },
          { label: '新館主引導', to: '/help-v3/owner/onboarding' }
        ]
      },
      operations_analytics: {
        badge: '館主',
        title: '使用營運與分析',
        intro: '當你需要館主層級的指標、即時學院報表、趨勢或月度報表，而不是一般學院管理工作時，請使用 Operations。',
        what_title: '你可以做什麼',
        what_items: [
          '查看即時與摘要學院指標。',
          '打開 insights、trends 與 monthly reporting 畫面。',
          '使用館主端營運視角，而不是一般 admin 儀表板做高層報表判讀。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用館主營運儀表板與報表畫面。',
          '在解讀特定學院分析時，保持在館主端目前選定學院情境中。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '營運與分析屬於館主或 operations 範圍，不是一般管理 / 員工範圍。',
          '分析和教練身分或存取身分是不同概念。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功存取後，會載入目前選定學院的館主報表與營運內容。',
          '如果畫面不存在，原因可能是角色或權限，而不是學院資料錯誤。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '工時與薪資', to: '/help-v3/owner/timesheets-salaries' },
          { label: '監督審查', to: '/help-v3/owner/oversight' }
        ]
      },
      timesheets_salaries: {
        badge: '館主',
        title: '管理工時與薪資',
        intro: '當你需要追蹤員工工時或管理薪酬相關資料時，請使用這些館主營運工具。',
        what_title: '你可以做什麼',
        what_items: [
          '讓員工打卡上下班，或查看已記錄的工時。',
          '查看與管理薪資或薪酬相關資料。',
          '把薪酬問題和教練身分或管理存取權分開。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 staff time、staff salaries 等館主營運畫面。',
          '當問題是薪酬，而不是教學身分時，請回到這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '薪酬畫面不定義誰是教練。',
          '薪酬畫面也不取代 access 或 permissions 管理。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功更新後，館主側的工時或薪酬資料會改變。',
          '如果員工問題其實是角色分配，請改回 Instructors 或 Access。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '營運分析', to: '/help-v3/owner/operations-analytics' },
          { label: '權限存取', to: '/help-v3/owner/access' }
        ]
      },
      oversight: {
        badge: '館主',
        title: '使用館主監督審查',
        intro: '當你需要館主專屬的 issue records、delete records 或 audit logs 審查工具時，請使用 Oversight。',
        what_title: '你可以做什麼',
        what_items: [
          '查看 issue records。',
          '查看 delete records。',
          '在館主專屬監督區域中查看 audit logs。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用館主營運中的 oversight 區域，而不是一般管理儀表板。',
          '只有在問題屬於歷史或營運審查時，才打開這些工具。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '這些畫面是館主專屬的監督工具。',
          '它們不是一般管理端的 Cards 工作流程。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '監督審查有助於館主確認歷史或營運上到底發生了什麼。',
          '若需要後續動作，通常會再回到正確的管理或學員流程。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '營運分析', to: '/help-v3/owner/operations-analytics' },
          { label: '工具功能', to: '/help-v3/owner/tools' }
        ]
      },
      tools: {
        badge: '館主',
        title: '使用館主工具與受限功能',
        intro: '當你需要理解可選的館主工具做什麼，以及在可用之後這些工作流程會出現在哪裡時，請使用這個主題。',
        what_title: '你可以做什麼',
        what_items: [
          '打開和目前學院工作流程相符的館主工具或受限功能。',
          '把館主工具建立在核心學院流程之上使用，而不是取代它。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '在權限可用後，使用對應的館主或營運儀表板入口。',
          '先確認目前選定學院，再判斷工具是否真的缺失。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '幫助內容應說明工具用途與工作流程，而不是過時的購買機制。',
          '舊的 bundle 假設不應再被當成產品事實。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '一旦相關權限存在，工具就會打開自己的工作流程畫面。',
          '如果工具缺失，通常是角色或 entitlement 問題，而不是路由壞掉。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '營運分析', to: '/help-v3/owner/operations-analytics' },
          { label: '學院業務管理', to: '/help-v3/owner/business-management' }
        ]
      }
    },
    account: {
      home: {
        badge: '帳號',
        title: '帳號與設定指南',
        intro: '當你需要登入、重設密碼、修改個人資料、調整偏好或結束工作階段時，請使用此指南。',
        areas_title: '帳號主題',
        links: [
          {
            title: '進入帳號',
            body: '登入、建立帳號，或從忘記密碼流程恢復存取。',
            links: [
              { label: '登入', to: '/help-v3/account/sign-in' },
              { label: '建立帳號', to: '/help-v3/account/create-account' },
              { label: '重設密碼', to: '/help-v3/account/reset-password' },
              { label: '更改密碼', to: '/help-v3/account/change-password' }
            ]
          },
          {
            title: '個人資料與關聯',
            body: '管理成人帳號資料，以及兒童帳號關聯。',
            links: [
              { label: '個人資料', to: '/help-v3/account/profile' },
              { label: '兒童帳號', to: '/help-v3/account/child-accounts' }
            ]
          },
          {
            title: '設定與離開',
            body: '調整隱私、偏好設定，或進行登出與刪除帳號。',
            links: [
              { label: '隱私與進度', to: '/help-v3/account/privacy-progression' },
              { label: '偏好設定', to: '/help-v3/account/preferences' },
              { label: '刪除帳號', to: '/help-v3/account/delete-account' },
              { label: '登出', to: '/help-v3/account/logout' }
            ]
          }
        ]
      },
      create_account: {
        badge: '帳號',
        title: '建立帳號',
        intro: '如果你還沒有 DojoMate 帳號，並且需要開始正確的學員或管理流程，請使用建立帳號。',
        what_title: '你可以做什麼',
        what_items: [
          '建立新的 DojoMate 帳號。',
          '選擇符合實際需求的角色路徑。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '從驗證入口流程中的 account creation 畫面開始。',
          '先決定自己是要加入並訓練，還是要建立和管理學院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '如果一開始走錯角色路徑，後面會更容易對該看哪個指南感到混亂。',
          '如果 email 已經屬於既有帳號，請登入或重設密碼，不要重複建立。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，應用會進入對應的學員或管理工作流程。',
          '如果註冊失敗，應用應該使用目前標準化的驗證處理，而不是舊的模糊錯誤說法。',
          '下一步通常會是角色相關流程，例如加入學院或開始學院設定。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '登入', to: '/help-v3/account/sign-in' },
          { label: '加入學院', to: '/help-v3/member/join-academy' }
        ]
      },
      reset_password: {
        badge: '帳號',
        title: '重設密碼',
        intro: '如果你忘記密碼，且需要重新取得帳號存取權，請使用重設密碼流程。',
        what_title: '你可以做什麼',
        what_items: [
          '要求系統寄送密碼重設郵件。',
          '在無法正常登入時改走找回存取權路徑。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '從 Sign In 畫面進入密碼重設流程。',
          '當問題是忘記密碼，而不是一般登入失敗時，請從這裡開始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '這是找回遺失密碼的流程，不是登入後修改密碼。',
          '如果郵件地址本身有誤，重設郵件就不會送到正確信箱。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，系統會寄送重設密碼郵件。',
          '如果信件沒有到達，應先檢查信箱與重試，而不是直接重新建立帳號。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '登入', to: '/help-v3/account/sign-in' },
          { label: '建立帳號', to: '/help-v3/account/create-account' }
        ]
      },
      change_password: {
        badge: '帳號',
        title: '更改密碼',
        intro: '當你已經登入，並想在不走重設郵件流程的情況下替換目前密碼時，請使用 Change Password。',
        what_title: '你可以做什麼',
        what_items: [
          '從帳號設定提交目前密碼和新密碼。',
          '在目前合約允許時，保留目前裝置並撤銷其他工作階段。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用已登入的帳號設定畫面。',
          '保持在目前工作階段中，而不是先回到 Sign In。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '需要提供目前密碼。',
          '如果無法保留目前工作階段，應用可能會清除本機工作階段。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，目前工作階段可繼續保留，而其他工作階段會被撤銷。',
          '如果目前密碼錯誤，應用應顯示目前結構化的失敗行為。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '偏好設定', to: '/help-v3/account/preferences' },
          { label: '登出', to: '/help-v3/account/logout' }
        ]
      },
      sign_in: {
        badge: '帳號',
        title: '登入',
        intro: '當帳號已經存在，且你想正常開始一個 DojoMate 工作階段時，請使用登入。',
        what_title: '你可以做什麼',
        what_items: [
          '用既有帳號憑證登入。',
          '開始一般的學員、管理或館主工作階段。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 Sign In 畫面作為主要入口。',
          '如果問題是忘記密碼，而不是一般登入失敗，請改看重設密碼主題。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '目前的驗證結果會依照新的標準化規則處理，而不是依賴舊的錯誤文字。',
          '某些帳號完整性問題屬於支援或恢復流程，不只是密碼錯誤。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，應用會開始目前使用者的工作階段。',
          '如果無法正常開始工作階段，應用可能會導向恢復或支援流程，而不是只顯示一般登入錯誤。',
          '之後的受保護請求會依賴目前的 refresh-token 流程，而不是舊的相容路徑。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '重設密碼', to: '/help-v3/account/reset-password' },
          { label: '建立帳號', to: '/help-v3/account/create-account' }
        ]
      },
      preferences: {
        badge: '帳號',
        title: '調整偏好設定',
        intro: '當你需要調整語言、貨幣、主題或其他個人化設定時，請使用偏好設定。',
        what_title: '你可以做什麼',
        what_items: [
          '調整應用語言與顯示偏好。',
          '修改與帳號體驗相關的個人設定。',
          '在不改動學院業務設定的前提下，調整自己的 app 使用體驗。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用帳號設定與偏好設定相關畫面。',
          '如果你要改的是個人 app 體驗，而不是學院資料，請停留在這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '偏好設定不會改變學院的 business 設定。',
          '有些設定會立即生效，有些則可能要到下一次重新整理才完全反映。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，應用呈現或帳號體驗會依照新設定更新。',
          '如果你想結束目前工作階段，接下來應使用 Logout，而不是在這裡尋找刪除帳號。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '隱私與進度', to: '/help-v3/account/privacy-progression' },
          { label: '登出', to: '/help-v3/account/logout' }
        ]
      },
      profile: {
        badge: '帳號',
        title: '編輯個人資料',
        intro: '當成人帳號本身的資料需要檢查或更新時，請使用 Profile。',
        what_title: '你可以做什麼',
        what_items: [
          '查看和成人帳號綁定的個人資料。',
          '從已登入的帳號流程更新個人欄位。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 profile user 和 edit-profile 相關畫面。',
          '如果不正確的是帳號身分資料，而不是學院會員資格，請回到這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '個人資料編輯不能取代學院會員資格決策。',
          '兒童帳號關係是另一條獨立流程。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，帳號個人資料會反映最新儲存的值。',
          '如果實際問題其實是兒童或會員資格關係，請切換到正確主題。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '兒童帳號', to: '/help-v3/account/child-accounts' },
          { label: '隱私與進度', to: '/help-v3/account/privacy-progression' }
        ]
      },
      child_accounts: {
        badge: '帳號',
        title: '管理兒童帳號',
        intro: '當家長或監護人需要建立、編輯或移除兒童連結帳號關係時，請使用 Child Accounts。',
        what_title: '你可以做什麼',
        what_items: [
          '建立兒童帳號。',
          '編輯兒童帳號。',
          '在關係不再需要時移除兒童帳號。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用已登入帳號路徑中的兒童帳號資料與管理畫面。',
          '如果家長管理帳號關係影響到加入學院或會員資格，請回到這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '兒童帳號關係會影響加入學院和會員資格行為。',
          '這是帳號關係流程，不是一般學院名單編輯。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，家長管理的帳號關係會更新，供後續學員流程使用。',
          '如果學院會員資格仍然不對，請再前往對應的學員或管理主題。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '加入學院', to: '/help-v3/member/join-academy' },
          { label: '會員資格', to: '/help-v3/member/memberships' }
        ]
      },
      privacy_progression: {
        badge: '帳號',
        title: '管理隱私與進度設定',
        intro: '當問題和可見性、排名參與、資料曝光或帳號層級隱私選項有關時，請使用隱私與進度設定。',
        what_title: '你可以做什麼',
        what_items: [
          '查看與隱私有關的帳號設定。',
          '在應用有提供時，控制進度或個人資料可見度相關設定。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用已登入帳號路徑中的 settings privacy 和 progression 畫面。',
          '當問題是可見性而不是名單或預約邏輯時，請回到這裡。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '匿名預約和隱私設定不是同一件事。',
          '學院端的成員可見性與帳號隱私彼此相關，但不是完全相同的概念。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，應用會使用最新儲存的隱私或進度設定。',
          '如果問題其實是預約名單的匿名顯示，請改看 Booking。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '預約課程', to: '/help-v3/member/booking' },
          { label: '偏好設定', to: '/help-v3/account/preferences' }
        ]
      },
      delete_account: {
        badge: '帳號',
        title: '刪除帳號',
        intro: '只有在你打算刪除整個帳號，而不是離開單一學院或改變單一會員資格關係時，才使用刪除帳號。',
        what_title: '你可以做什麼',
        what_items: [
          '從已登入設定路徑啟動刪除帳號流程。',
          '重新確認刪除帳號是否真的是你想做的動作。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用 delete-account 設定畫面，而不是學院名單工具。',
          '送出刪除前，請再次確認目標。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '刪除整個帳號不等於離開單一學院。',
          '如果你只需要調整會員資格，應改用學院或成員流程。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，帳號本身的存取權會被移除。',
          '如果真正需求只是改變某一段學院關係，刪除帳號就太廣了。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '登出', to: '/help-v3/account/logout' },
          { label: '會員資格', to: '/help-v3/member/memberships' }
        ]
      },
      logout: {
        badge: '帳號',
        title: '登出',
        intro: '當你想結束目前裝置上的工作階段，並乾淨地離開已登入狀態時，請使用 Logout。',
        what_title: '你可以做什麼',
        what_items: [
          '結束目前已登入的 app 工作階段。',
          '為其他帳號或之後重新進入做好準備。'
        ],
        where_title: '在哪裡操作',
        where_items: [
          '使用已登入的帳號設定區域。',
          '如果你只是想停止使用目前工作階段，請登出，而不是刪除帳號。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '登出只會結束目前工作階段，不會刪除帳號。',
          '如果需要改的是密碼本身，請改用 Change Password。'
        ],
        results_title: '接下來會發生什麼',
        results_items: [
          '成功後，應用會清除這台裝置上的目前已登入狀態。',
          '之後你可以用相同或不同帳號重新登入。',
          '當你不需要變更密碼或刪除帳號時，Logout 是最安全的結束會話方式。'
        ],
        next_title: '下一個主題',
        next_links: [
          { label: '登入', to: '/help-v3/account/sign-in' },
          { label: '建立帳號', to: '/help-v3/account/create-account' }
        ]
      }
    }
  },
  help_v2: {
    support: {
      heading: '還需要更多幫助？',
      default_description: '如有問題、特殊情況或後續幫助需求，請前往 Source Combatives 上的 DojoMate 幫助版塊。',
      default_button: '打開 DojoMate 幫助版塊'
    },
    layout: {
      preview_badge: '幫助 v2',
      intro: '這是一個以任務為中心的指南，面向館主和管理員。v1 仍然保持在線，v2 會繼續完善。',
      open_v1: '打開幫助 v1',
      search_placeholder: '搜尋幫助',
      search_no_results: '找不到結果',
      nav: {
        start_here: '從這裡開始',
        owner_setup: '館主設定',
        student: '學員',
        account_profile: '帳號與資料',
        business: '業務',
        portal: '入口網站',
        schedule: '課程安排',
        cards: '會員卡',
        members: '成員',
        tools: '工具',
        home: '幫助 v2 首頁',
        owner: '我運營學院',
        admin: '我協助管理',
        student_home: '我在學院訓練',
        getting_started_owner: '館主快速開始',
        create_academy: '建立學院',
        academy_basics: '學院基礎設定',
        academy_qr: '學院 QR 碼',
        delete_academy: '刪除學院',
        join_academy: '加入學院',
        memberships: '管理會員資格',
        booking: '預約課程',
        system_alerts: '系統提醒',
        broadcast: '公告廣播',
        attendance_records: '出勤記錄',
        sign_in: '登入',
        create_account: '建立帳號',
        reset_password: '重設密碼',
        account_troubleshooting: '帳號疑難排解',
        change_password: '修改密碼',
        language: '語言',
        currency: '貨幣',
        privacy: '隱私',
        delete_account: '刪除帳號',
        logout: '登出',
        edit_profile: '編輯資料',
        child_accounts: '兒童帳號',
        business_overview: '業務總覽',
        compare_business_pages: '比較業務頁面',
        choose_who_can_teach: '選擇誰可以授課',
        choose_who_can_manage: '選擇誰可以管理',
        track_pay_and_performance: '追蹤薪酬與表現',
        affiliate_portal: 'Affiliate 入口網站',
        portal_register: '入口網站註冊',
        portal_members: '入口網站成員',
        portal_ranks: '入口網站段位',
        portal_cards: '入口網站會員卡',
        portal_reports: '入口網站報表',
        schedule_overview: '課程總覽',
        create_a_lesson: '建立課程',
        edit_or_cancel_a_lesson: '編輯或取消課程',
        book_for_students: '代學員預約',
        cards_overview: '會員卡總覽',
        how_cards_work: '會員卡如何運作',
        create_a_card_template: '建立卡模板',
        issue_cards: '發卡',
        edit_templates: '編輯模板',
        delete_templates: '刪除模板',
        delete_cards: '刪除會員卡',
        card_records: '卡片記錄',
        members_overview: '成員總覽',
        add_a_member_directly: '直接新增成員',
        enrollment_vs_applications: '快速註冊 vs 申請',
        review_applications: '審核申請',
        reject_or_ban_members: '拒絕或封禁成員',
        tools_overview: '工具總覽',
        activate_tools_and_premium: '啟用工具與進階方案',
        timetable: '時間表',
        pause_cards: '暫停會員卡'
      }
    },
    welcome: {
      badge: '預覽',
      title: '幫助指南 v2',
      intro: '這個版本圍繞使用 DojoMate 的人來重建，而不只是圍繞他們所在的某個介面。',
      who_title: '先從你的身分開始',
      owner_title: '我運營學院',
      owner_body: '如果你是館主，需要查看設定、團隊、會員卡、課程安排或工具幫助，請從這裡開始。',
      owner_link: '打開館主路徑',
      admin_title: '我協助管理學院',
      admin_body: '如果你是協助處理課程、成員、會員卡或日常運營的員工，請從這裡開始。',
      admin_link: '打開管理員路徑',
      student_title: '我在學院訓練',
      student_body: '如果你是學員、家長或學院成員，正在尋找帳號、預約或會員資格幫助，請從這裡開始。',
      student_link: '打開學員路徑',
      jobs_title: '或直接進入任務',
      cards_title: '設定會員卡',
      cards_body: '先了解會員卡如何支援預約，再建立模板並發卡。',
      cards_link: '打開會員卡總覽',
      members_title: '新增和管理成員',
      members_body: '把人帶進學院，審核申請，並處理狀態變化。',
      members_link: '打開成員總覽',
      tools_title: '使用付費工具',
      tools_body: '在核心流程穩定後再加入重複排課、暫停會員卡等工具，並在需要時透過功能頁面啟用進階方案。',
      tools_link: '打開工具總覽',
      difference_title: 'v2 有什麼不同',
      difference_body: 'v2 按照「人」和「要完成的任務」來組織，因此更容易判斷下一步該做什麼。',
      difference_v1: '如果你偏好帶搜尋的經典指南，請打開幫助 v1',
      difference_start: '從這裡開始'
    },
    owner_home: {
      badge: '館主',
      title: '我運營學院',
      intro: '這一路徑適合正在設定學院、建立團隊並處理日常運營的館主。',
      start_title: '最好的起點',
      start_body: '如果你正在設定一個新學院，請先從館主設定路徑開始。它按最實用的順序組織，能讓應用後續流程更容易理解。',
      start_primary: '館主快速開始',
      start_secondary: '建立學院',
      setup_title: '學院設定',
      setup_create_title: '建立學院',
      setup_create_body: '先把學院本身建立好，再去引入成員或建立課程。',
      setup_review_title: '檢查基礎資訊和 QR 碼',
      setup_review_body: '保持學院資料準確，並在想要更快入門時使用 QR 碼加入。',
      setup_lifecycle_title: '學院生命週期',
      setup_lifecycle_body: '只有在學院本身不再需要保留時，才使用刪除指南。',
      jobs_title: '主要任務',
      jobs_team_title: '設定你的團隊',
      jobs_team_body: '決定誰負責授課、誰可以管理學院，以及薪酬工具如何配合使用。',
      jobs_team_link: '打開業務',
      jobs_schedule_title: '執行課程與預約',
      jobs_schedule_body: '建立課程、處理變更，並在需要時協助預約。',
      jobs_schedule_link: '打開 Schedule',
      jobs_cards_title: '設定會員卡與成員',
      jobs_cards_body: '把人帶進學院、發卡，並讓預約正確扣減課次。',
      portal_title: '入口網站工作流',
      portal_body: '有些流程發生在 Source Combatives Affiliate Portal，而不是日常 DojoMate 應用介面裡。',
      portal_link: '打開 Affiliate 入口網站指南',
      paid_title: '付費功能',
      paid_body: '時間表、暫停會員卡、員工存取和分析都受權限控制。如果你需要啟用工具或開始進階方案，請查看功能頁面指南。',
      paid_link: '啟用工具與進階方案'
    },
    owner_setup: {
      getting_started: {
        badge: '快速開始',
        title: '按正確順序設定你的學院',
        intro: '如果你是從零開始，這個頁面會給你最簡單的順序，讓後續流程更容易理解。',
        order_title: '建議順序',
        order_items: [
          '建立你的學院。',
          '把成員帶進學院。',
          '建立會員卡模板。',
          '發卡給活躍成員。',
          '設定講師與員工存取權。',
          '建立第一堂課。',
          '準備好之後再加入付費工具。Affiliate 入口網站提供 90 天免費進階方案試用，所有工具都會解鎖。'
        ],
        why_title: '為什麼這個順序有幫助',
        why_items: [
          '成員必須先存在，你才能發卡給他們。',
          '卡片必須先存在，預約才能正常運作。',
          '在開始建立課程之前，應先把講師設定好。',
          '在學院核心流程已經跑起來之後，再加入付費工具效果最好。'
        ],
        start_title: '如果你不確定，就從這裡開始',
        create_link: '建立學院',
        members_link: '帶入成員',
        cards_link: '設定會員卡'
      },
      create: {
        badge: '館主',
        title: '建立你的學院',
        intro: '這是館主的第一步。在你帶入成員、發卡或開始建立課程之前，先建立學院。',
        before_title: '建立之前',
        before_items: [
          '先確認學院是否已經存在，避免建立重複項目。',
          '一開始就準備好選擇正確的學院貨幣。'
        ],
        steps_title: '步驟',
        steps_items: [
          '打開建立學院流程。',
          '仔細輸入學院資訊。',
          '選擇正確的貨幣。',
          '提交表單以建立學院。'
        ],
        next_title: '下一步',
        next_body: '學院建立後，下一項常見工作是檢查學院基本資訊，然後把人帶進學院。',
        back_link: '返回館主路徑',
        next_link: '前往學院基本設定'
      },
      basics: {
        badge: '館主',
        title: '更新學院基本資訊',
        intro: '使用這個頁面保持學院資料準確，讓成員與員工看到正確的學院資訊。',
        use_title: '在這些情況下使用',
        use_items: [
          '學院資訊需要修正或更新',
          '面向學院的資訊已經改變',
          '你想檢查學院對成員的呈現方式'
        ],
        know_title: '需要知道的事',
        know_items: [
          '在擴大成員和會員卡規模之前，館主應先保持學院基本資訊為最新。',
          '如果成員透過學院訊息或入門流程加入，準確的學院資訊就很重要。'
        ],
        next_title: '下一步',
        back_link: '返回建立學院',
        next_link: '前往學院 QR'
      },
      qr: {
        badge: '館主',
        title: '分享你的學院 QR code',
        intro: '當你希望人們不必手動搜尋學院、能更快加入時，請使用學院 QR。',
        use_title: '最有幫助的情況',
        use_items: [
          '在學院現場入門時',
          '活動、體驗課或繁忙報名日',
          '需要讓多人快速加入的情況'
        ],
        know_title: '需要知道的事',
        know_items: [
          'QR 路徑通常比要求大家手動搜尋更快。',
          '當你想減少入門期間的加入錯誤時，它特別有用。'
        ],
        next_title: '下一步',
        back_link: '返回學院基本設定',
        next_link: '帶入成員'
      },
      delete: {
        badge: '館主',
        title: '謹慎刪除學院',
        intro: '這是學院生命週期中的一步，不是日常任務。只有當學院確實應該被移除時才使用。',
        before_title: '執行之前',
        before_items: [
          '先檢查前置條件。',
          '確認你了解這會對目前成員造成什麼影響。',
          '不要把刪除學院當作一般清理工作的捷徑。'
        ],
        meaning_title: '這代表什麼',
        meaning_body: '刪除學院是嚴肅的館主操作。只有當學院本身不應再繼續保持活躍時才應該這樣做。',
        help_title: '需要先求助嗎？',
        help_body: '如果你不確定刪除是否是正確做法，請在執行最後一步前先到 DojoMate 幫助版提問。',
        help_link: '打開 DojoMate 幫助版',
        back_link: '返回館主路徑'
      }
    },
    admin_home: {
      badge: '管理員',
      title: '我協助管理學院',
      intro: '這一路徑適合在館主已經完成學院基礎設定後，協助處理日常運營的員工。',
      jobs_title: '最常見的管理員任務',
      schedule_title: '處理課程任務',
      schedule_body: '建立課程、編輯變更，並在需要時幫助學員或家長預約。',
      schedule_link: '打開 Schedule',
      members_title: '管理成員和會員卡',
      members_body: '審核申請、直接註冊成員，並發放會員卡。',
      delegated_title: '使用委派權限',
      delegated_body: '如果館主已經為你啟用管理員權限，你的日常任務可能包括課程、成員、會員卡，有時還包括工具。',
      delegated_link: '查看員工存取',
      know_title: '需要知道的事',
      know_items: [
        '大多數管理員主題都與館主流程重疊，因此你不需要一棵完全獨立的 wiki 樹。',
        '如果你的帳號裡缺少某項功能，館主可能需要先授予存取權限或啟用所需工具。'
      ],
      compare_link: '比較 Business 頁面',
      tools_link: '啟用工具與 Premium'
    },
    business: {
      overview: {
        badge: 'Business',
        paid_badge: '付費',
        title: '處理學院的業務側工作',
        intro: 'Business 區域幫助你設定團隊、決定誰可以管理學院，並查看薪酬與表現工具。',
        start_title: '先從你要完成的工作開始',
        cards: [
          {
            title: '選擇誰可以授課',
            body: '使用講師設定決定哪些人可以被安排到課程中。',
            cta: '打開講師設定指南',
            link: '/help-v2/business/instructors'
          },
          {
            title: '選擇誰可以管理學院',
            body: '使用員工存取授予或更新管理員存取權限。',
            cta: '打開員工存取指南',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: '追蹤薪酬、時間與表現',
            body: '使用 Analytics 處理薪酬、報表、工時單和與薪資相關的工具。',
            cta: '打開 Analytics 指南',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '這些 Business 頁面支援不同工作，因此最好先選擇與你目標最匹配的頁面。',
          '如果你正在設定一所新學院，先從決定誰來授課開始。',
          '如果你不確定從哪裡開始，團隊設定的最佳第一步是講師設定，接著是員工存取，最後是 Analytics。'
        ],
        compare_link: '比較 Business 頁面',
        next_title: '下一步',
        next_body: '如果你正在設定教學團隊，就先從「選擇誰可以授課」開始。',
        next_link: '前往選擇誰可以授課'
      },
      compare: {
        badge: 'Business',
        paid_badge: '付費',
        title: '講師設定、員工存取和 Analytics',
        intro: '這三個 Business 頁面支援不同工作。當你不確定哪一個最適合目前任務時，就使用這個頁面。',
        pick_title: '按工作選擇頁面',
        cards: [
          {
            title: '講師設定',
            body: '當你需要決定誰可以授課時，請使用這個頁面。',
            items: [
              '把某人加入員工列表',
              '開啟講師狀態',
              '為排課準備教學團隊'
            ],
            cta: '打開講師設定',
            link: '/help-v2/business/instructors'
          },
          {
            title: '員工存取',
            body: '當某人需要幫助管理學院時，請使用這個頁面。',
            items: [
              '把成員提升為管理員',
              '查看存取範圍',
              '之後移除管理員權限'
            ],
            cta: '打開員工存取',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: 'Analytics',
            body: '當你想查看業務數據、薪酬設定或時間記錄時，請使用這個頁面。',
            items: [
              '查看報表',
              '設定薪酬',
              '檢查工時單和薪資相關工具'
            ],
            cta: '打開 Analytics',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        rules_title: '快速規則',
        rules_items: [
          '在 Analytics 中修改薪酬並不會讓某人成為講師。',
          '給某人管理員權限同樣不會讓他們成為講師。',
          '如果某人既要授課又要管理，你可能需要在多個 Business 頁面中設定他。'
        ],
        start_title: '如果你還在判斷，從這裡開始',
        start_body: '如果你的問題是「這個人能授課嗎？」，先看講師設定。若問題是「這個人能管理學院嗎？」，去員工存取。若問題是「我去哪裡查看薪酬或報表？」，去 Analytics。',
        instructors_link: '講師設定',
        staff_access_link: '員工存取',
        analytics_link: 'Analytics'
      },
      instructors: {
        badge: 'Business',
        title: '選擇誰可以授課',
        intro: '使用 Business → 講師設定決定哪些人可以被安排到課程中。',
        before_title: '開始前',
        before_items: [
          '在你建立課程之前，至少需要一名講師。',
          '如果館主自己也授課，大多數人會先把自己加進去。',
          '這個人應該已經作為學院成員存在。'
        ],
        steps_title: '步驟',
        steps_items: [
          '打開 Business → 講師設定。',
          '點擊 Choose Member。',
          '選擇你想添加的人。',
          '點擊 Add to Staff。',
          '如果這個人要授課，就打開 instructor 開關。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '添加後，被選中的人會出現在員工列表中。',
          '如果 instructor 開關保持關閉，這個人只能作為助教可用。',
          '在 Analytics 中修改薪酬並不會讓某人成為講師。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '如果某人還需要管理學院，那是另一個單獨的設定步驟。授課權限和管理員權限不是一回事。',
        compare_link: '比較 Business 頁面',
        next_title: '下一步',
        next_body: '在教學團隊設定好之後，下一個常見任務就是決定誰還應該擁有管理員權限。',
        back_link: '返回 Business 總覽',
        next_link: '前往員工存取'
      },
      staff_access: {
        badge: 'Business',
        paid_badge: '付費工具',
        title: '選擇誰可以管理學院',
        intro: '使用 Business → 權限設定為團隊授予或更新管理員存取權限。',
        use_title: '在以下情況使用這個頁面',
        use_items: [
          '某人需要幫助管理課程、成員、會員卡或 timetable 工作',
          '你需要把成員提升為管理員',
          '你想查看或移除管理員權限'
        ],
        steps_title: '步驟',
        steps_items: [
          '打開 Business → 權限設定。',
          '找到你想更新的人。',
          '如果他們顯示為 Member，點擊該行並按 Confirm，使其成為管理員。',
          '再次點擊這個管理員來查看存取設定。',
          '選擇你想要的存取設定，然後按 Confirm。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '兩個徽章分別是 Member 和 Admin。',
          '權限設定控制的是管理員存取。它並不決定誰可以授課。',
          '目前存取區域包括 Schedule、成員、Cards 和 Timetable。',
          '這個功能受 entitlement 控制。如果工具未啟用，委派給員工的權限不會生效。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '授予某人教學職責和授予某人管理員權限是兩個獨立步驟。教學角色用講師設定，管理員角色用權限設定。',
        compare_link: '比較 Business 頁面',
        remove_title: '移除管理員權限',
        remove_body: '如果某人不再需要管理學院，使用 Remove Admin 把他們恢復為 Member。',
        next_title: '下一步',
        next_body: '團隊角色設定完成後，下一個常見任務是到 Analytics 中查看薪酬和報表工具。',
        back_link: '返回講師設定',
        activate_link: '啟用工具與 Premium',
        compare_pages_link: '比較頁面',
        next_link: '前往 Analytics'
      },
      analytics: {
        badge: 'Business',
        paid_badge: '付費工具',
        title: '追蹤薪酬、時間與表現',
        intro: '使用 Business → Analytics 處理薪酬、報表、工時單和與薪資相關的工具。',
        use_title: '在以下情況使用這個頁面',
        use_items: [
          '你想查看學院指標和報表',
          '你需要輸入或更新薪酬資訊',
          '你需要查看工時單或員工打卡活動'
        ],
        covers_title: 'Analytics 涵蓋的內容',
        cards: [
          {
            title: '報表',
            body: '查看即時數據、每週摘要、財務報表和與月度出勤相關的報表。'
          },
          {
            title: '薪酬',
            body: '設定薪資、時薪和私教課薪酬細節，讓成本追蹤更準確。'
          },
          {
            title: '時間與薪資工具',
            body: '查看打卡卡片、辦公時長和基於時間的員工記錄審批流程。'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '在 Analytics 中修改薪酬並不會讓某人成為講師。',
          '如果某人需要授課，請在講師設定中添加該角色。',
          '如果某人需要管理學院，請在權限設定中授予該權限。',
          '某些 Analytics 畫面可能會被完全鎖定，而另一些仍然可見，但會顯示升級提示。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: 'Analytics 不是決定授課角色或管理員角色的地方。它是查看業務數據和管理薪酬相關工具的地方。',
        compare_link: '比較 Business 頁面',
        next_title: '下一步',
        next_body: '如果你還在設定團隊，先完成授課角色和管理員角色設定。如果團隊已經就緒，下一個常見任務就是建立課程，並讓預約承擔日常工作。',
        activate_link: '啟用工具與 Premium',
        instructors_link: '講師設定',
        staff_access_link: '員工存取',
        next_link: '前往 Schedule'
      }
    },
    schedule: {
      overview: {
        badge: 'Schedule',
        title: '規劃、執行並管理課程',
        intro: '使用 Schedule 區域建立課程、調整課程細節，並在需要時幫助學員預約。',
        start_title: '先從你要完成的工作開始',
        cards: [
          {
            title: '建立課程',
            body: '設定課程時間、講師、可用會員卡和預約規則。',
            cta: '打開建立課程指南',
            link: '/help-v2/schedule/create-lesson'
          },
          {
            title: '編輯、取消或刪除課程',
            body: '更新課程細節，或讓課程停止可預約狀態。',
            cta: '打開管理課程指南',
            link: '/help-v2/schedule/manage-lesson'
          },
          {
            title: '代學員預約',
            body: '當學員或家長無法自己完成預約時，由管理員介入。',
            cta: '打開預約指南',
            link: '/help-v2/schedule/book-for-students'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '建立課程通常是排課的第一項任務。',
          '編輯、取消和刪除都有時間規則，因此這些任務需要單獨指南。',
          '管理員代預約最適合作為學員或家長無法自行完成預約時的備援方案。'
        ],
        before_title: '開始前',
        before_body: '確保你的教學團隊已經設定好，這樣在建立課程時正確的講師才會可用。',
        before_link: '查看講師設定'
      },
      create: {
        badge: 'Schedule',
        title: '建立課程',
        intro: '使用 Schedule 在你希望學員預約的那一天添加課程。',
        before_title: '開始前',
        before_items: [
          '在建立課程之前，你至少需要選擇一名講師。',
          '先選擇正確的日期，因為 Schedule 預設打開的是今天。',
          '決定哪些會員卡應該被允許預約這節課。'
        ],
        steps_title: '步驟',
        steps_items: [
          '打開 Schedule 並移動到你想要的日期。',
          '點擊 Create Lesson。',
          '輸入課程名稱、日期和開始/結束時間。',
          '選擇課程類型和允許的會員卡。',
          '至少選擇一名講師，如有需要再添加助教講師。',
          '設定容量、最低開課人數和預約截止時間等規則。',
          '點擊 Create Lesson。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '預約使用的會員卡必須匹配課程類型，例如團課或私教課。',
          '如果你安排了重疊課程，教室就會變得重要。',
          '管理員通常比學員更容易突破一般限制進行預約，但學員仍然受截止時間和容量規則限制。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '如果預約截止時間設定得太短，當課程臨時取消時容易讓學員感到困惑。如果你想要更順暢的溝通，請設定更長的截止窗口。',
        next_title: '下一步',
        next_body: '課程建立完成後，接下來最常見的工作是調整課程細節或幫助學員預約進入課程。',
        manage_link: '編輯或取消課程',
        booking_link: '代學員預約'
      },
      manage: {
        badge: 'Schedule',
        title: '編輯、取消或刪除課程',
        intro: '使用課程詳情頁面更新課程資訊，或讓課程停止可預約狀態。',
        open_title: '如何打開課程',
        open_items: [
          '打開 Schedule。',
          '選擇正確的日期。',
          '點擊課程本身，而不是預約按鈕。'
        ],
        actions_title: '每個操作的作用',
        actions_items: [
          'Edit：更新課程細節，然後保存更改。',
          'Cancel：取消目前成員的預約，並阻止新的預約。',
          'Delete：在課程已取消後，將其徹底刪除。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '一旦超過預約截止時間，你就不能再編輯課程。',
          '已經開始的課程不能被取消或刪除。',
          '如果課程是誤建立的，先取消，再刪除。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '人們經常點進預約流程，而實際上他們需要的是課程詳情頁面。如果你想編輯或取消課程，請打開課程卡片本身。',
        next_title: '下一步',
        next_body: '如果課程仍然保持有效，接下來最常見的任務就是幫助學員預約進去。',
        back_link: '返回建立課程',
        next_link: '前往預約'
      },
      booking: {
        badge: 'Schedule',
        title: '在需要時代學員預約',
        intro: '最理想的是由學員或家長自行預約，但如果有人忘記、錯過截止時間或需要幫助，管理員可以介入。',
        steps_title: '步驟',
        steps_items: [
          '打開 Schedule 並選擇課程日期。',
          '打開課程，然後進入 Booking。',
          '點擊添加成員。',
          '選擇你想預約的成員。',
          '從他們可用的有效會員卡中選擇一張。',
          '按 Confirm。'
        ],
        unbook_title: '為學員取消預約',
        unbook_items: [
          '打開該課程的出勤列表。',
          '點擊已預約的成員。',
          '點擊藍色的已預約卡片，直到它變成灰色。',
          '按 Confirm。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '管理員通常比學員擁有更大的預約自由度，尤其在截止時間或容量規則方面。',
          '成員仍然必須擁有一張對此課程有效且被允許的活動會員卡。',
          '已經結束的課程不能被預約或取消預約。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '如果正確的會員卡沒有出現，可能是這節課限制了不同的卡類型，而該成員目前持有的是其他活動卡。',
        next_title: '下一步',
        next_body: '如果預約規則不斷引發問題，請回頭檢查課程設定並調整課程，而不是反覆手動覆蓋。',
        create_link: '查看建立課程',
        manage_link: '查看管理課程'
      }
    },
    cards: {
      overview: {
        badge: '會員卡',
        title: '使用會員卡支援預約',
        intro: '主要的卡片流程很簡單：建立卡、發卡，然後讓預約自動扣減課次。',
        start_title: '先從你要完成的工作開始',
        cards: [
          {
            title: '了解預約流程',
            body: '了解會員卡如何參與預約、課次扣減和報表。',
            cta: '打開預約流程指南',
            link: '/help-v2/cards/how-booking-works'
          },
          {
            title: '建立卡模板',
            body: '設定卡名稱、費用、課次數、到期時間和課程類型。',
            cta: '打開建立模板指南',
            link: '/help-v2/cards/create-template'
          },
          {
            title: '為成員發卡',
            body: '使用你的模板為成員分配一張有效會員卡。',
            cta: '打開發卡指南',
            link: '/help-v2/cards/issue-cards'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '模板在前。卡模板存在之前，你不能發卡。',
          '會員卡的主要作用是支援預約和自動扣課。',
          '當卡用完或過期時，在發下一張卡前先刪除目前有效卡。',
          '偶爾遇到特殊情況時，你可以手動調整有效卡。最常見的用法是延長到期時間，尤其是在你沒有使用會員卡暫停的情況下。'
        ],
        support_title: '支援性工作流',
        support_templates_title: '編輯或停用模板',
        support_templates_body: '當模板需要修正，或不再應繼續提供時，請使用這些頁面。',
        edit_templates_link: '編輯模板',
        delete_templates_link: '刪除模板',
        support_cleanup_title: '清理已結束的卡',
        support_cleanup_body: '當有效卡已用完、已過期或即將被替換時，刪除或取消它。',
        delete_cards_link: '刪除卡',
        support_records_title: '查看卡片歷史',
        support_records_body: '當你需要查看歷史、狀態，或跟進異常卡狀態時，請使用記錄頁面。',
        records_link: '卡片記錄'
      },
      flow: {
        badge: '會員卡',
        title: '會員卡如何與預約協作',
        intro: '會員卡主要用於預約課程。學員預約後，課次會自動扣減，系統也會根據真實預約活動進行計算。',
        normal_title: '正常流程',
        normal_items: [
          '建立卡模板。',
          '把卡發給成員。',
          '成員使用這張卡預約課程。',
          '課次透過預約課程自動扣減。',
          '當卡的課次歸零或到期時間結束時，刪除目前有效卡。',
          '成員續費時再發新卡。'
        ],
        why_title: '為什麼這很重要',
        why_items: [
          '會員卡應該清晰且可預測地支援課程預約。',
          '只有透過預約課程扣減的課次，才會計入 Analytics 財務報表。',
          '同一成員不能同時持有同一模板的兩張有效卡。'
        ],
        next_title: '下一步',
        create_link: '建立卡模板',
        issue_link: '發卡'
      },
      create_template: {
        badge: '會員卡',
        title: '建立會員卡模板',
        intro: '使用會員卡 → 建立會員卡模板建立你的學院會發放的會員卡類型。',
        before_title: '開始前',
        before_items: [
          '先決定這張卡是用於團課還是私教課。',
          '決定卡內應包含多少節課。',
          '如果你想要無限次會員卡，先規劃好時間週期。無限次卡仍然使用到期時段。',
          '沿用學院現有的學費和貨幣邏輯。'
        ],
        steps_title: '步驟',
        steps_items: [
          '打開會員卡 → 建立會員卡模板。',
          '輸入成員和管理員都能輕鬆識別的卡名稱。',
          '輸入費用和可選描述。',
          '設定總課次數和到期天數。',
          '如果是無限次卡，把 Total Sessions 保存為 -1，而不是 0。',
          '選擇這張卡適用於 Group 課程還是 Private 課程。',
          '保存模板。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '課程類型決定這張卡能預約哪些課程。',
          '保存為 Total Sessions = -1 的卡，在有效期內可以無限預約。',
          '團課和私教課通常每節價格不同，講師薪酬也可能不同。',
          '卡名稱應該保持清晰穩定，因為之後預約和發卡時人們還會看到它。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '如果預約時這張卡沒有出現，請檢查卡類型是否與課程類型匹配。這是有意設計的，這樣團課卡不會誤用於私教課，私教卡也不會誤用於團課。',
        next_title: '下一步',
        next_body: '模板建立好之後，下一個常見任務就是把這張卡發給一位或多位成員。',
        back_link: '返回會員卡總覽',
        next_link: '前往發卡'
      },
      issue: {
        badge: '會員卡',
        title: '發放會員卡',
        intro: '使用會員卡 → 發放會員卡為一位或多位成員發放一張有效卡。',
        steps_title: '步驟',
        steps_items: [
          '打開會員卡 → 發放會員卡。',
          '選擇你要發放的卡模板。',
          '選擇一位或多位成員。',
          '檢查已選成員。',
          '按 Confirm 發卡。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '新近被接受的成員可能會排在更靠前的位置，方便發卡。',
          '已經持有該模板有效卡的成員會以不同方式顯示，方便你發現重複。',
          '同一成員不能同時持有同一模板的兩張有效卡。'
        ],
        mistake_title: '常見錯誤',
        mistake_body: '如果成員是在續同一張卡，先刪除舊的有效卡，再發新的。',
        next_title: '下一步',
        next_body: '發卡後，正常的下一步就是使用這張卡去預約課程。',
        back_link: '返回模板',
        next_link: '會員卡如何運作'
      },
      edit_template: {
        badge: '會員卡',
        title: '編輯卡模板',
        intro: '當模板已經存在，而你需要更新它未來使用的設定時，請使用這個頁面。',
        use_title: '在以下情況使用這個頁面',
        use_items: [
          '模板設定需要被修正',
          '費用、課次數、到期時間或課程類型設定需要變更',
          '你想在不建立新模板的情況下調整未來發卡行為'
        ],
        know_title: '需要知道的事',
        know_items: [
          '模板名稱在建立後會被鎖定。',
          '變更應謹慎保存，因為它們會影響模板之後的行為。',
          '如果變化已經大到足以代表一個完全不同的會員產品，那麼新建一個模板通常會更清晰。'
        ],
        next_title: '下一步',
        back_link: '返回建立模板',
        next_link: '發卡'
      },
      delete_template: {
        badge: '會員卡',
        title: '刪除卡模板',
        intro: '當模板不應再存在，並且不再與有效卡綁定時，請使用這個頁面。',
        before_title: '刪除前',
        before_items: [
          '檢查模板是否仍然與有效卡綁定。',
          '如果仍有有效卡依賴它，就需要先完成清理。'
        ],
        know_title: '需要知道的事',
        know_body: '刪除模板是一種清理工作流。它應該用於某個會員產品真正退役時，而不是因為單個成員正在續費。',
        next_title: '下一步',
        back_link: '返回模板',
        next_link: '會員卡總覽'
      },
      delete_card: {
        badge: '會員卡',
        title: '刪除或取消一張有效卡',
        intro: '當一張有效卡已經走到生命周期末尾，或不應再對該成員保持有效時，請使用這個頁面。',
        use_title: '最常見的用途',
        use_items: [
          '卡已過期或已完全用完',
          '成員正在續費，需要發一張新的有效卡',
          '這張卡需要被取消並正確記錄，然後再繼續下一步'
        ],
        know_title: '需要知道的事',
        know_items: [
          '過期卡通常會按預設清理路徑被刪除。',
          '同一成員不能同時持有同一模板的兩張有效卡。',
          '如果你取消一張卡，請填寫所需原因，並讓卡片歷史保持可見。'
        ],
        next_title: '下一步',
        next_body: '清理完成後，只有當成員確實繼續新的有效會員資格時，才發下一張卡。',
        back_link: '返回發卡',
        next_link: '會員卡總覽'
      },
      disputes: {
        badge: '會員卡',
        title: '查看卡片記錄',
        intro: '當你需要歷史、狀態可見性，或跟進異常卡狀態時，請使用卡片記錄。',
        review_title: '你可以查看的內容',
        review_items: [
          '目前卡',
          '已發卡',
          '已取消卡',
          '與欠費相關的卡狀態'
        ],
        when_title: '什麼時候最有幫助',
        when_items: [
          '你需要弄清某一張卡發生了什麼',
          '你正在檢查一張卡是否被取消、結清或清理',
          '你正在跟進一筆債務或記錄差異'
        ],
        know_title: '需要知道的事',
        know_body: '卡片記錄主要是查看和審計工作流。正常的日常卡流程仍然是：建立模板、發卡、預約課程，然後在卡結束時清理它。'
      }
    },
    members: {
      overview: {
        badge: '成員',
        title: '讓人加入你的學院並管理成員狀態',
        intro: '使用成員區域處理系統中的「人」這一面：添加成員、審核申請，以及管理已接受、已拒絕或已封禁狀態。',
        start_title: '先從你要完成的工作開始',
        cards: [
          {
            title: '直接添加成員',
            body: '當你想直接為某人註冊，而不是等待正常申請流程時，使用 quick enrollment。',
            cta: '打開快速註冊',
            link: '/help-v2/members/quick-enrollment'
          },
          {
            title: '審核學院申請',
            body: '接受或拒絕透過 Join Academy 提交申請的人。',
            cta: '打開學院申請',
            link: '/help-v2/members/applications'
          },
          {
            title: '拒絕或封禁某人',
            body: '當某位成員不應再繼續保持活躍狀態時，管理其狀態變化。',
            cta: '打開拒絕或封禁成員',
            link: '/help-v2/members/reject-or-ban'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '快速註冊和學院申請是進入學院的兩條不同路徑。',
          '為整個學院完成入駐需要時間，因此從長期看，最輕鬆的方式通常是讓成員自己建立帳號並自行添加你的學院。',
          '一旦成員處於活躍狀態，下一步最常見的工作就是在 DojoMate 中發放會員卡。',
          '兒童帳號可能需要額外審核步驟，尤其當涉及家長帳號時。'
        ],
        compare_title: '不確定該選哪條路徑？',
        compare_body: '如果你在猶豫是自己建立帳號，還是讓成員自己申請加入，請先查看比較頁面。',
        compare_link: '比較兩種成員流程'
      },
      quick: {
        badge: '成員',
        title: '直接添加成員',
        intro: '當你想直接為某人註冊，而不是等待正常的 Join Academy 申請流程時，請使用快速註冊。',
        when_title: '何時使用',
        when_items: [
          '你正在現場為某人辦理入駐',
          '你想直接建立帳號',
          '你正在為家長註冊，並希望在同一流程中建立多個兒童帳號',
          '成員不擅長技術，你想替他們設定帳號',
          '你想透過電子郵件添加一個已有的 DojoMate 帳號'
        ],
        path_title: '先選最輕鬆的路徑',
        path_body_1: '如果你的學院正在成長，長期來看，最輕鬆的方式通常是讓成員自己建立帳號並自行添加你的學院。',
        path_body_2: '快速註冊最適合那些需要額外幫助，或不太可能自己完成設定的人。',
        steps_title: '步驟',
        steps_items: [
          '打開 Affiliate Portal，並使用你的 DojoMate 電子郵件和密碼登入。',
          '打開 Register。',
          '輸入成員的真實電子郵件，並建立一個臨時密碼。',
          '選擇該帳號是學員帳號還是家長帳號。',
          '如果你選擇家長，繼續進入兒童帳號設定流程。',
          '檢查資訊並按 Confirm。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '快速註冊會跳過正常的待處理和已接受申請流程。',
          '這個流程對家長特別有用，因為你可以在同一次註冊操作中建立多個兒童帳號。',
          '建立帳號時可以保存一個簡單的臨時密碼。成員之後可以登入並修改它。',
          '有些成員可能永遠不會自己登入，如果你在代管他們的帳號，這也沒有問題。',
          '新註冊完成的成員在設定好之後，仍然可以透過 app 獲得會員卡。',
          '如果這個人已經有 DojoMate 帳號，請透過電子郵件添加，而不是建立重複帳號。'
        ],
        compare_title: '需要幫助決定是否使用這個流程？',
        compare_link: '比較快速註冊和申請',
        next_title: '下一步',
        next_body: '當帳號進入學院後，下一步最常見的工作就是發放會員卡。',
        back_link: '返回成員總覽',
        next_link: '前往發卡'
      },
      compare: {
        badge: '成員',
        title: '在快速註冊和申請之間選擇',
        intro: '這兩條流程都會把人帶入學院，但它們適用於不同的情境。',
        quick_title: '在這些情況下使用快速註冊',
        quick_items: [
          '你想自己建立帳號',
          '這個人需要幫助完成設定',
          '這個人不擅長技術',
          '你正在為一位家長和多個兒童帳號一起註冊'
        ],
        quick_link: '打開快速註冊',
        apps_title: '在這些情況下使用申請',
        apps_items: [
          '你希望成員自己建立帳號',
          '你希望學院在不由館主手動建立每一個帳號的情況下也能擴展',
          '成員可以自己完成 Join Academy 流程'
        ],
        apps_link: '打開學院申請',
        rule_title: '簡單規則',
        rule_body: '只要可能，就讓成員自己建立帳號。當他們需要額外幫助，或者你想直接處理註冊時，再使用快速註冊。'
      },
      applications: {
        badge: '成員',
        title: '審核學院申請',
        intro: '當有人透過 Join Academy 申請加入，而你需要接受或拒絕他們時，使用這個流程。',
        steps_title: '步驟',
        steps_items: [
          '打開成員 → 添加 / 拒絕成員。',
          '查看待處理申請列表。',
          '在申請人上按 Accept 或 Reject。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '如果沒有出現待處理帳號，這個人可能沒有正確提交申請。',
          '他們可能需要重新掃描學院 QR 碼，或重新搜尋你的學院名稱。',
          '關聯的兒童帳號可能需要透過家長資料頁完成額外的接受步驟。'
        ],
        why_title: '為什麼使用 applications？',
        why_body: '當你希望成員自己建立帳號並自行添加你的學院時，這是一條更適合長期使用的路徑。',
        compare_link: '比較申請和快速註冊',
        mistake_title: '常見錯誤',
        mistake_body: '如果兒童帳號沒有馬上出現，要麼是它們還沒有被正確建立，要麼列表沒有刷新。讓家長完成兒童設定，或刷新 app 視圖。',
        next_title: '下一步',
        next_body: '當你接受某人進入學院後，下一步最常見的工作就是發放他們的會員卡。',
        back_link: '返回成員總覽',
        next_link: '前往發卡'
      },
      reject: {
        badge: '成員',
        title: '在需要時拒絕或封禁成員',
        intro: '當某人不應再繼續作為學院活躍成員時，請使用這個流程。',
        reject_title: '拒絕如何運作',
        reject_items: [
          '從成員 → 成員列表打開該成員的資料。',
          '按 Reject 將他們從學院中移除。',
          '如果成員仍有有效卡，就必須先清理後才能拒絕。'
        ],
        ban_title: '封禁如何運作',
        ban_items: [
          '被拒絕的成員會出現在成員 → 已拒絕列表中。',
          '從那裡你可以重新接受他們，或將他們封禁。',
          '被封禁的成員不能再透過 Join Academy 重新申請。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '先移除有效卡，是拒絕之前正常清理流程的一部分。',
          '如果你之後想撤銷封禁，請前往 Banned List 並使用 Remove Ban。'
        ],
        next_title: '下一步',
        back_link: '返回成員總覽',
        next_link: '查看 Cards 工作流'
      }
    },
    account: {
      sign_in: {
        badge: '帳號',
        title: '登入你的帳號',
        intro: '當你的帳號已經存在，並且你想存取學院、預約、會員卡和記錄時，請使用登入。',
        need_title: '你需要什麼',
        need_items: ['你的電子郵件地址', '你的密碼'],
        trouble_title: '如果無法登入',
        trouble_items: [
          '檢查電子郵件和密碼是否正確',
          '需要時使用重設密碼',
          '如果介面看起來不熟悉，檢查語言選擇器'
        ],
        next_title: '下一步',
        back_link: '返回學員路徑',
        next_link: '重設密碼'
      },
      create: {
        badge: '帳號',
        title: '建立帳號',
        intro: '在加入學院、預約課程或使用應用其餘功能之前，請先建立帳號。',
        path_title: '選擇正確的路徑',
        path_items: [
          '如果你是在訓練或加入學院，選擇 member/student 路徑',
          '如果你是在設定或管理學院，選擇 admin/owner 路徑'
        ],
        need_title: '你需要什麼',
        need_items: ['一個有效電子郵件地址', '一個符合應用規則的密碼'],
        next_title: '下一步',
        back_link: '返回登入',
        next_link: '加入學院'
      },
      reset: {
        badge: '帳號',
        title: '重設密碼',
        intro: '當你記不起密碼，或目前密碼已不再可用時，請使用這個流程。',
        how_title: '它如何運作',
        how_items: [
          '從登入介面發起重設',
          '檢查與你的 DojoMate 登入綁定的電子郵件',
          '郵件到達後，打開重設連結'
        ],
        email_title: '如果郵件沒有到達',
        email_items: [
          '檢查垃圾郵件或廣告郵件',
          '確認你輸入的是正確電子郵件',
          '再次發送重設請求'
        ]
      },
      troubleshooting: {
        badge: '帳號',
        title: '帳號疑難排解',
        intro: '當常見的登入或註冊問題阻止你進入帳號時，請使用這個頁面。',
        signin_title: '無法登入',
        signin_items: [
          '仔細檢查電子郵件和密碼',
          '必要時重設密碼',
          '確認裝置已連網'
        ],
        email_title: '電子郵件已被使用',
        email_body: '這通常表示帳號已經存在，你應該登入或重設密碼，而不是建立第二個帳號。',
        role_title: '角色混淆',
        role_body: '如果你的角色發生變化，或者帳號表現和預期不一致，請先檢查你是否使用了正確帳號和學院身份。'
      }
    },
    settings: {
      password: {
        badge: '設定',
        title: '修改密碼',
        intro: '當你仍然知道目前密碼，並想在帳號設定中更新它時，請使用這個頁面。',
        know_title: '需要知道的事',
        know_items: [
          '這和重設密碼不同。修改密碼表示你已經能進入帳號。',
          '如果你完全無法登入，請改用重設密碼。'
        ]
      },
      language: {
        badge: '設定',
        title: '更改應用語言',
        intro: '當你希望應用以另一種受支援語言顯示時，請使用語言設定。',
        know_title: '需要知道的事',
        know_body: '如果某個介面很難理解，檢查語言設定通常是最快的修復方式之一。'
      },
      currency: {
        badge: '設定',
        title: '選擇貨幣顯示方式',
        intro: '使用貨幣設定來控制應用中金額的顯示方式。',
        know_title: '需要知道的事',
        know_items: [
          '成員最關心的是能清楚地看到正確金額。',
          '館主也可能會關心學院側財務設定和一致性。'
        ]
      },
      privacy: {
        badge: '設定',
        title: '查看隱私設定',
        intro: '使用隱私設定來理解並控制通知、行銷、排行榜、公開資料、預約和分析相關資料是如何被處理的。',
        main_title: '主要隱私區域',
        main_items: [
          '通知',
          '行銷',
          '排行榜參與',
          '公開資料存取',
          '與預約相關的設定',
          '出勤和彙總分析資料'
        ],
        progression_title: '與進度相關的控制',
        progression_items: [
          '排行榜參與和公開資料存取是分開的控制項。',
          '關閉排行榜參與會把帳號排除在排名之外。',
          '關閉公開資料存取並不會自動把帳號從所有允許的展示面移除。',
          '行銷控制與進度、排行榜和公開資料控制是分開的。'
        ],
        child_title: '兒童與受扶養帳號',
        child_body: '兒童和受扶養記錄不會參與進度、排行榜、公開進度資料以及個人化行銷。',
        know_title: '需要知道的事',
        know_body: '這個頁面的重點是理解和管理隱私選擇，而不只是打開或關閉訊息。'
      },
      delete: {
        badge: '設定',
        title: '謹慎刪除你的帳號',
        intro: '刪除帳號是一個嚴肅操作。只有當你真的想關閉整個帳號時才這樣做，而不是只是離開一所學院。',
        before_title: '在你這樣做之前',
        before_items: [
          '先檢查驗證規則',
          '查看哪些情況會阻止刪除',
          '考慮兒童帳號以及相關兒童會員卡關係'
        ],
        know_title: '需要知道的事',
        know_body: '刪除整個帳號和離開一項學院會員資格不是一回事。如果帳號仍應保持活躍，請使用會員資格相關流程。'
      },
      logout: {
        badge: '設定',
        title: '登出',
        intro: '當你在目前裝置上已經使用完應用，或想切換到另一個帳號時，請使用登出。'
      }
    },
    profile: {
      edit: {
        badge: '個人資料',
        title: '編輯你的資料',
        intro: '當你的個人資料資訊需要更新時，請使用這個頁面。',
        know_title: '需要知道的事',
        know_items: [
          '根據帳號的使用方式，不同使用者可能會看到與角色相關的上下文。',
          '修改完成後，請提交表單以保存更新。'
        ]
      },
      children: {
        badge: '個人資料',
        title: '管理兒童帳號',
        intro: '當父母或監護人需要為兒童建立、編輯或管理帳號時，請使用兒童帳號功能。',
        do_title: '你可以做什麼',
        do_items: [
          '建立兒童帳號',
          '編輯兒童帳號資訊',
          '在適當的時候移除兒童帳號'
        ],
        know_title: '需要知道的事',
        know_body: '由父母管理的帳號關係會影響其他流程，例如加入學院和會員資格處理。'
      }
    },
    student: {
      join: {
        badge: '學員',
        title: '加入學院',
        intro: '當你想把帳號連接到某個學院，並開始在應用中使用該學院時，請使用這個流程。',
        find_title: '尋找學院的方式',
        find_items: [
          '使用 Discover Academy 在應用內瀏覽學院',
          '如果你想直接搜尋或掃描學院 QR 碼，請使用 Search Academy'
        ],
        steps_title: '步驟',
        steps_items: [
          '從 Academy 區域打開 Discover Academy。',
          '瀏覽學院列表。',
          '打開某個學院查看詳情。',
          '查看學院資訊和圖片集。',
          '確認這就是你要找的學院。',
          '申請加入。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '當你想先比較幾所學院再加入時，Discover Academy 很有用。',
          'Search Academy 是用於搜尋和 QR 掃描的直接入口。',
          '家長在加入時可能還需要考慮兒童帳號。'
        ],
        next_title: '下一步',
        back_link: '返回學員路徑',
        next_link: '管理會員資格'
      },
      home: {
        badge: '學員',
        title: '我在學院訓練',
        intro: '這一路徑適合需要帳號、預約和會員資格幫助的學員、家長和學院成員。',
        section_1: '加入學院並管理存取',
        join_link: '加入學院',
        memberships_link: '管理會員資格',
        section_2: '預約、記錄與學院更新',
        booking_link: '預約課程',
        attendance_link: '出勤記錄',
        broadcast_link: 'Broadcast',
        alerts_link: '系統提醒',
        section_3: '帳號幫助',
        sign_in_link: '登入',
        create_account_link: '建立帳號',
        reset_password_link: '重設密碼',
        troubleshooting_link: '帳號疑難排解',
        change_password_link: '修改密碼',
        child_accounts_link: '兒童帳號',
        still_need_title: '還需要別的幫助？',
        still_need_body: '部分更專門的主題在學員路徑繼續重建期間，可能仍然保留在幫助 v1 中。',
        still_need_link: '打開幫助 v1'
      },
      broadcast: {
        badge: '學員',
        title: '在應用中閱讀學院 Broadcast',
        intro: '在應用中使用 Broadcast 閱讀學院更新和訓練貼文。這是一個以閱讀為主的學院溝通資訊流，不是聊天、評論或回覆。',
        where_title: '在哪裡找到它',
        where_items: [
          '在成員端打開學院選單，然後點擊 Broadcast。',
          '目前圖示是喇叭。',
          'Broadcast 會跟隨目前選定的學院，因此請先選擇學院。'
        ],
        actions_title: '你可以做什麼',
        actions_items: [
          '在 Updates 和 Training 標籤之間切換。',
          '下拉重新整理資訊流。',
          '閱讀廣播文字和圖片說明。',
          '點擊圖片可全螢幕查看，點擊空白處關閉。'
        ],
        screen_title: '畫面上會看到什麼',
        screen_items: [
          '標題：Broadcast',
          '頂部顯示目前選定學院名稱',
          '標籤：Updates 和 Training',
          '每張卡片可顯示作者名稱，或回退為 Academy Admin',
          '發布日期和時間',
          '正文、縮圖和可選圖片說明'
        ],
        limits_title: '空狀態與目前限制',
        limits_items: [
          '如果尚未選擇學院，你可能會看到 Select an academy first。',
          '空資訊流可能顯示 Updates coming soon 或 No visible broadcasts are available in this stream yet.',
          '目前成員端 Broadcast 資訊流是唯讀的。',
          '沒有按讚、評論、回覆、表情、分享或成員發文功能。'
        ],
        know_title: '需要知道的事',
        know_items: [
          'Broadcast 是目前正式使用的產品名稱，舊的 Newsfeed 說法已經過時。',
          '內容由 Affiliate 建立，並由應用展示。',
          '如果取得資訊流失敗，應用目前會回退為空列表，而不是顯示單獨的錯誤狀態。',
          'Expo 中管理員側的建立介面仍處於預備階段，不應被視為目前主流程。'
        ],
        join_link: '加入學院',
        alerts_link: '系統提醒'
      },
      memberships: {
        badge: '學員',
        title: '管理學院會員資格',
        intro: '當你的帳號屬於多所學院，或你需要在不同學院會員資格之間切換時，請使用這個頁面。',
        when_title: '什麼時候重要',
        when_items: [
          '你屬於多所學院',
          '你需要選擇目前正在哪所學院裡操作',
          '應用目前選中的學院不對'
        ],
        know_title: '需要知道的事',
        know_items: [
          '屬於多所學院的成員，在預約或查看記錄前需要先選擇正確學院。',
          '如果有內容看起來缺失，可能只是目前啟用的是錯誤學院。'
        ],
        next_title: '下一步',
        back_link: '返回加入學院',
        next_link: '預約課程'
      },
      booking: {
        badge: '學員',
        title: '預約課程',
        intro: '使用預約功能來選擇課程、挑選可用卡片並確認你的名額。',
        steps_title: '步驟',
        steps_items: [
          '打開課表。',
          '選擇你想上的課程。',
          '檢查你是否符合預約條件。',
          '選擇你想使用的卡片。',
          '確認預約。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '如果你屬於多所學院，可能需要先選擇正確學院。',
          '如果卡片沒有出現，課程和卡片可能不相容。',
          '在規則仍然允許時，你也可以取消預約。'
        ],
        next_title: '下一步',
        back_link: '會員資格',
        next_link: '出勤記錄'
      },
      alerts: {
        badge: '學員',
        title: '閱讀系統提醒',
        intro: '系統提醒幫助你跟進學院更新，以及其他重要的帳號或會員資格資訊。',
        see_title: '你可能看到的內容',
        see_items: [
          '學院更新',
          '與會員資格相關的通知',
          '其他與你使用學院相關的系統生成提醒'
        ],
        know_title: '需要知道的事',
        know_body: '這是一種系統提醒介面，不是普通聊天或訊息串。請把它看作重要的帳號和學院資訊。'
      },
      attendance: {
        badge: '學員',
        title: '查看出勤記錄',
        intro: '當你想查看訓練歷史，並確認某個日期範圍內發生了什麼時，請使用出勤記錄。',
        help_title: '這個頁面能幫助什麼',
        help_items: [
          '快速查看近期出勤',
          '查看更長的日期範圍',
          '確認課程是否按你預期被記錄'
        ],
        know_title: '需要知道的事',
        know_items: [
          '日期範圍控件讓長時間段查看更容易。',
          '這個頁面主要用於查看記錄，而不是修改它們。'
        ]
      }
    },
    account: {
      sign_in: {
        badge: '帳號',
        title: '登入你的帳號',
        intro: '當你的帳號已經存在，並且你想存取學院、預約、會員卡與紀錄時，請使用登入。',
        need_title: '你需要準備',
        need_items: ['你的電子郵件地址', '你的密碼'],
        trouble_title: '如果無法登入',
        trouble_items: [
          '檢查電子郵件和密碼是否正確',
          '需要時使用重設密碼',
          '如果畫面看起來不熟悉，先檢查語言設定'
        ],
        next_title: '下一步',
        back_link: '返回學員路徑',
        next_link: '重設密碼'
      },
      create: {
        badge: '帳號',
        title: '建立帳號',
        intro: '在加入學院、預約課程或使用其他功能之前，先建立帳號。',
        path_title: '選擇正確的路徑',
        path_items: [
          '如果你要訓練或加入學院，請走成員/學員路徑',
          '如果你要設定或管理學院，請走管理員/館主路徑'
        ],
        need_title: '你需要準備',
        need_items: ['有效的電子郵件地址', '符合應用規則的密碼'],
        next_title: '下一步',
        back_link: '返回登入',
        next_link: '加入學院'
      },
      reset: {
        badge: '帳號',
        title: '重設密碼',
        intro: '當你不記得密碼，或目前的密碼已經無法使用時，請使用這個流程。',
        how_title: '流程如何運作',
        how_items: [
          '在登入畫面提出重設請求',
          '檢查綁定 DojoMate 登入的電子郵件信箱',
          '收到信件後開啟重設連結'
        ],
        email_title: '如果信件沒有收到',
        email_items: [
          '檢查垃圾郵件',
          '確認你輸入的是正確的電子郵件',
          '再次送出重設請求'
        ]
      },
      troubleshooting: {
        badge: '帳號',
        title: '帳號疑難排解',
        intro: '當常見的登入或註冊問題阻礙你存取帳號時，請使用這個頁面。',
        signin_title: '無法登入',
        signin_items: [
          '仔細檢查電子郵件和密碼',
          '需要時重設密碼',
          '確認裝置已連線'
        ],
        email_title: '電子郵件已被使用',
        email_body: '這通常表示帳號已經存在，你應該登入或重設密碼，而不是建立第二個帳號。',
        role_title: '角色混淆',
        role_body: '如果你的角色改變了，或帳號行為和預期不一致，先確認你是否使用了正確的帳號與正確的學院關係。'
      }
    },
    settings: {
      password: {
        badge: '設定',
        title: '更改密碼',
        intro: '當你仍然知道目前密碼，並想從帳號設定裡更新它時，請使用這個流程。',
        know_title: '需要知道的事',
        know_items: [
          '這和重設密碼不同。更改密碼的前提是你已經可以登入帳號。',
          '如果你完全無法登入，請改用重設密碼。'
        ]
      },
      language: {
        badge: '設定',
        title: '更改應用語言',
        intro: '當你想讓應用顯示成另一種支援語言時，請使用語言設定。',
        know_title: '需要知道的事',
        know_body: '如果某個畫面難以理解，先檢查語言設定通常是最快的修正方式之一。'
      },
      currency: {
        badge: '設定',
        title: '選擇貨幣顯示',
        intro: '使用貨幣設定來控制應用中的金額顯示方式。',
        know_title: '需要知道的事',
        know_items: [
          '成員主要在意金額是否清楚好讀。',
          '館主也可能在意學院端的財務設定和一致性。'
        ]
      },
      privacy: {
        badge: '設定',
        title: '查看隱私設定',
        intro: '使用隱私設定來了解並控制通知、行銷、排行榜、公開個人頁面、預約以及與分析相關的資料處理方式。',
        main_title: '主要隱私區域',
        main_items: [
          '通知',
          '行銷',
          '排行榜參與',
          '公開個人頁面存取',
          '與預約相關的設定',
          '出勤與彙總分析資料'
        ],
        progression_title: '與進度相關的控制',
        progression_items: [
          '排行榜參與和公開個人頁面存取是兩個獨立控制項。',
          '關閉排行榜參與會把帳號排除在排名之外。',
          '關閉公開個人頁面存取，並不會自動把帳號從所有允許顯示的介面中移除。',
          '行銷控制與進度、排行榜和公開個人頁面控制是分開的。'
        ],
        child_title: '兒童與受扶養帳號',
        child_body: '兒童與受扶養紀錄不會參與進度、排行榜、公開進度個人頁面或個人化行銷。',
        know_title: '需要知道的事',
        know_body: '這個頁面的重點是理解並管理隱私選擇，而不只是開啟或關閉訊息。'
      },
      delete: {
        badge: '設定',
        title: '謹慎刪除帳號',
        intro: '刪除帳號是一個嚴肅操作。只有在你確實想關閉整個帳號時才使用，而不是只是離開某一間學院。',
        before_title: '執行之前',
        before_items: [
          '先檢查驗證規則',
          '確認哪些情況會阻止刪除',
          '考慮兒童帳號以及相關會員卡關係'
        ],
        know_title: '需要知道的事',
        know_body: '刪除整個帳號，不等於離開某一個學院成員關係。如果帳號仍應保留，請使用成員關係相關流程。'
      },
      logout: {
        badge: '設定',
        title: '登出',
        intro: '當你已經在目前裝置上使用完畢，或想切換到另一個帳號時，請使用登出。'
      }
    },
    profile: {
      edit: {
        badge: '個人資料',
        title: '編輯你的個人資料',
        intro: '當你的個人資料資訊需要更新時，請使用這個頁面。',
        know_title: '需要知道的事',
        know_items: [
          '某些使用者可能會依照帳號用途看到與角色相關的內容。',
          '修改完成後，請提交表單以儲存更新。'
        ]
      },
      children: {
        badge: '個人資料',
        title: '管理兒童帳號',
        intro: '當家長或監護人需要為孩子建立、編輯或管理帳號時，請使用兒童帳號功能。',
        do_title: '你可以做什麼',
        do_items: [
          '建立兒童帳號',
          '編輯兒童帳號資料',
          '在適當時移除兒童帳號'
        ],
        know_title: '需要知道的事',
        know_body: '由家長管理的帳號關係，可能會影響加入學院和處理會員資格等其他流程。'
      }
    },
    tools: {
      overview: {
        badge: '工具',
        title: '使用付費工具擴展學院工作流',
        intro: '付費工具會在學院核心流程之上增加額外系統，例如重複排課、會員卡暫停、員工權限、分析和 Broadcast。',
        start_badge: '付費工具',
        start_title: '從你需要的工具開始',
        timetable_title: '建立重複課程表',
        timetable_body: '如果你希望每週課程重複生成，而不是一節一節重建，請使用 Timetable。',
        timetable_link: '打開 Timetable',
        pause_title: '暫停有效會員卡',
        pause_body: '如果你需要暫時停止會員卡時間，請使用會員卡暫停。',
        pause_link: '打開會員卡暫停',
        broadcast_title: '向成員發送 Broadcast',
        broadcast_body: '如果你想從 Affiliate 入口網站向成員發布單向更新或訓練貼文，請使用 Broadcast。',
        broadcast_link: '打開 Broadcast',
        know_title: '需要知道的事',
        know_items: [
          '付費工具是在你已經使用的業務、課程安排、會員卡和成員核心流程之上擴展出來的。',
          '工具可以單獨提供，也可以透過進階方案套裝獲得。',
          '學院館主啟用工具後，其他角色通常也可以使用它們。',
          '通常先學會基礎流程，再疊加付費工具，會更容易。'
        ],
        activate_link: '啟用工具與進階方案'
      },
      activate: {
        badge: '工具',
        paid_badge: '付費工具',
        title: '啟用工具與進階方案',
        intro: '在 Affiliate 入口網站的功能頁面查看工具分組、開始免費試用、購買方案，並管理學院目前已啟用的方案工具。',
        where_title: '前往哪裡',
        where_body: '在 Affiliate 入口網站打開功能。這是目前由 Rails 管理的工具啟用、方案狀態和試用狀態入口。',
        organized_title: '頁面如何組織',
        organized_items: [
          '工具可以單獨提供。',
          '功能頁面會把工具歸類到基本工具、高階工具和方案區域。',
          '進階方案套裝包含四個生產力工具。',
          '目前介面也會顯示專業方案套裝。',
          '首次使用者可以開始 90 天進階方案試用。'
        ],
        groups_title: '目前工具分組',
        essential_title: '基本工具',
        essential_items: ['Timetables', 'Pause Academy'],
        advanced_title: '高階工具',
        advanced_items: ['員工權限', 'Analytics'],
        packages_title: '方案',
        packages_body: '目前介面包含進階方案套裝和專業方案套裝。',
        features_title: '你可能在功能頁面看到的內容',
        features_items: [
          'Start Free Trial',
          '購買進階方案套裝',
          '購買專業方案套裝',
          '進階方案已啟用',
          '已包含在進階方案內',
          'Available in free trial',
          'Included in free trial',
          'Included in your package',
          'Manage'
        ],
        know_title: '需要知道的事',
        know_items: [
          '當工具未啟用時，有些畫面會被完全鎖定。',
          '有些畫面仍可打開，但付費操作會變成升級提示。',
          'Broadcast 是目前使用者可見的名稱，舊的 Newsfeed 說法已經過時。',
          '方案試用邏輯會處理重疊情況，因此專業方案和進階方案不會簡單地互相重置。'
        ],
        guides_title: '付費指南',
        staff_access: '員工存取',
        analytics: 'Analytics',
        support_desc: '如果你對功能頁面、訂閱、試用狀態或其他 Affiliate 入口網站流程有問題，請前往 Source Combatives 的 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      broadcast: {
        badge: '工具',
        paid_badge: '付費工具',
        title: '向成員發送單向 Broadcast',
        intro: '當你想在 Affiliate 入口網站中向成員發布學院更新或訓練貼文時，請使用 Broadcasts。這是一個單向發布工具，不是聊天、回覆，也不是社交動態。',
        where_title: '它在哪裡',
        where_items: [
          '在 Affiliate 入口網站的導航中打開 Broadcasts。',
          '按目前 Affiliate 入口網站的行為，Broadcast 實際上是館主專用。',
          '在功能頁面中，Broadcast 被作為 Pro 工具展示。'
        ],
        flow_title: '發布流程如何運作',
        flow_steps: [
          '在 Affiliate 入口網站中打開 Broadcasts。',
          '選擇要發布到的流標籤。',
          '填寫訊息正文。',
          '透過貼上圖片連結或上傳檔案添加圖片。',
          '使用 Publish Broadcast 將內容發送到學院資訊流。'
        ],
        labels_title: '你可能看到的目前標籤',
        labels_items: [
          'Broadcasts',
          'Message',
          'Image URLs',
          'Upload Images',
          'Publish Broadcast',
          'Recall',
          'Repost',
          'Delete',
          '可見性標籤：Visible、Recalled、All'
        ],
        lifecycle_title: '生命週期規則',
        lifecycle_items: [
          '可見中的 broadcast 必須先 Recall，之後才能刪除。',
          '如果你希望它重新上線，可以對已 Recall 的 broadcast 使用 Repost。',
          '只有已 Recall 的 broadcast 才能被永久刪除。',
          '已 Recall 的 broadcast 會在保留視窗內保持可恢復，除非被 Repost，否則之後會被自動刪除。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '面向使用者的幫助文案裡都應使用 Broadcast。舊的 Newsfeed 說法已經過時。',
          'Broadcast 受 entitlement 控制，並不是預設可用。',
          '圖片既可以透過貼上連結添加，也可以透過上傳檔案添加。',
          'Broadcast 在 Affiliate 入口網站中編寫，然後在應用中供成員閱讀。'
        ],
        features_link: '功能',
        student_link: '在應用中閱讀 Broadcast',
        support_desc: '如果你對 Affiliate 入口網站中的 Broadcast 工具、發布/Recall/Repost，或 entitlement 有問題，請前往 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      timetable: {
        badge: '工具',
        paid_badge: '付費工具',
        title: '建立每週重複課表',
        intro: '當你想一次建立課程模板，並在一段時間內把它們發佈到行事曆時，請使用 Timetable。',
        use_title: '適合在這些情況下使用',
        use_items: [
          '你每週都會開相同的課程',
          '你想往更遠的時間規劃，而不是手動反覆建立每堂課',
          '你想在課程準備好時再把它們發佈到行事曆中'
        ],
        steps_title: '步驟',
        steps_items: [
          '打開 Timetable。',
          '選擇你想要的星期幾。',
          '按 Create Lesson。',
          '像在一般 Schedule 畫面上一樣填寫課程表單。',
          '為這個重複模板設定開始日期與結束日期。',
          '儲存模板。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '模板在發佈之前，不會變成真正的行事曆課程。',
          '你可以透過設定未來的結束日期來放心做長期規劃。',
          '建立之後，你可以回到星期頁面並在那裡編輯模板。'
        ],
        publish_title: '發佈',
        publish_body_1: '未發佈的課程會先出現在 Schedule 頁面。管理員可以在它們準備好開放預約時再發佈。',
        publish_body_2: '成員仍然可以把未發佈課程看成未來計畫，但還不能預約。',
        mistake_title: '常見錯誤',
        mistake_body: '如果重複課程遇到假日，通常不需要重建 timetable。只要選擇不要發佈那一堂課即可。',
        activate_link: '啟用工具與 Premium'
      },
      pause: {
        badge: '工具',
        paid_badge: '付費工具',
        title: '在需要時暫停有效會員卡',
        intro: '當你需要暫時停止卡片時間，而不是讓它照常繼續到期時，請使用會員卡暫停。',
        modes_title: '兩種暫停方式',
        modes_items: [
          '個別暫停：在該成員的個人資料中暫停或取消暫停單張會員卡。',
          '全學院暫停：館主可以暫停整個學院範圍內的會員卡。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '被暫停的會員卡不能用來預約。',
          '如果需要，可以把某些卡模板排除在全學院暫停之外。',
          '如果某位成員在全學院暫停前就已被個別暫停，那麼全學院暫停結束後，他們仍會維持暫停。'
        ],
        common_title: '最常見用途',
        common_body: '館主經常在想保護成員時間、又不想一張一張手動延長到期日時使用這個工具。',
        next_title: '下一步',
        back_tools: '返回工具總覽',
        activate_link: '啟用工具與 Premium',
        back_cards: '返回會員卡'
      }
    },
    portal: {
      overview: {
        badge: '入口網站',
        title: '使用 Affiliate 入口網站',
        intro: 'Affiliate 入口網站是 Source Combatives 的網頁介面。它適合處理比日常 DojoMate 應用介面更重的館主工作流，尤其是註冊、成員審核、段位、會員卡、報表和方案啟用。',
        workflows_title: 'Affiliate 入口網站主要工作流',
        register_title: '註冊與入門',
        register_body: '使用註冊精靈建立成人和家長帳號，可選新增兒童，並在之後繼續未完成的入門流程。',
        members_title: '審核成員狀態',
        members_body: '查看待處理、已接受、已拒絕和已封禁使用者，按電子郵件附加現有帳號，或繼續家長入門流程。',
        ranks_title: '管理段位項目',
        ranks_body: '設定段位項目，按項目為成員註冊，並透過目前審核流程確認段位變更。',
        cards_title: '在 Affiliate 入口網站中管理會員卡',
        cards_body: '使用 Templates、Assign、Active 和 History 視圖處理卡模板、發卡、有效卡操作、暫停動作和稽核查看。',
        reports_title: '查看報表和工具',
        reports_body: '報表頁面保持較輕，因為它主要是唯讀的。功能頁面是管理方案和試用狀態的地方。',
        know_title: '需要知道的事',
        know_items: [
          '大多數 Affiliate 入口網站頁面在實際使用中都是館主專用。',
          '月度報表是主要例外：如果授予了報表權限，非館主員工也可以看到它。',
          'Affiliate 入口網站中的變更通常會直接影響應用，包括成員狀態、會員卡、段位資料和工具啟用。'
        ],
        support_desc: '如果你對 Affiliate 入口網站、入口網站設定問題或其他 Affiliate 入口網站專屬流程有疑問，請前往 Source Combatives 的 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      register: {
        badge: '入口網站',
        title: '在 Affiliate 入口網站中註冊',
        intro: '當你想透過 Affiliate 入口網站為學院建立新成員時，請使用 Register。這是一個多步驟精靈，而不是單頁表單。',
        flow_title: '流程如何運作',
        flow_steps: [
          '在 Affiliate 入口網站中打開 Register，並先填寫家長或成人資訊。',
          '如果此人是以家長身分註冊，則在兒童步驟中新增兒童帳號。',
          '查看摘要，然後使用 Confirm & Create 完成。',
          '建立完成後，如需繼續工作，可使用再註冊一位或前往成員。'
        ],
        labels_title: '你可能看到的目前標籤',
        labels_items: ['註冊', '下一步', '返回', '確認並建立', '再註冊一位', '前往成員', '繼續入駐'],
        know_title: '需要知道的事',
        know_items: [
          '家長和成人學員的路徑並不完全相同。',
          '如果家長以學員身分註冊，則會跳過兒童步驟。',
          '家長可以保持在 Pending 狀態，並在之後從成員中繼續。',
          '在這裡建立的帳號會成為正常的 DojoMate 使用者，並出現在應用使用的學院成員資料中。'
        ],
        next_title: '下一步',
        members_link: '成員',
        cards_link: 'Cards',
        support_desc: '如果你對註冊精靈、待處理家長恢復或 Affiliate 中其他入門問題有疑問，請前往 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      members: {
        badge: '入口網站',
        title: '管理入口網站成員',
        intro: '在 Affiliate 入口網站中使用成員來審核學院成員狀態。這裡是按狀態驅動的，不只是一個平鋪名單。',
        jobs_title: '主要任務',
        jobs_items: [
          '查看 Pending Users、Recently Accepted、家長帳號、成人成員、已拒絕使用者和已封禁使用者。',
          '使用 Accept、Reject 和 Ban 處理審核工作。',
          '使用透過電子郵件添加成員附加一個現有帳號。',
          '使用繼續入駐繼續一個停留在待處理狀態的家長流程。'
        ],
        labels_title: '你可能看到的目前標籤',
        labels_items: ['成員', '成員列表', '透過電子郵件添加成員', '接受', '拒絕', '封禁', '繼續入駐', '待處理、已接受、已拒絕、已封禁'],
        confusion_title: '常見混淆',
        confusion_items: [
          '透過電子郵件添加成員只適用於已經存在的帳號。',
          '如果受扶養帳號仍處於已接受狀態，拒絕家長可能會被阻止。',
          '如果帳號仍有有效會員卡，拒絕也可能會被阻止。',
          '這個頁面也是中斷註冊後的恢復入口，而不僅僅是審核介面。'
        ],
        next_title: '下一步',
        register_link: '註冊',
        cards_link: '會員卡',
        support_desc: '如果你對成員狀態、家長/受扶養人審核，或透過電子郵件附加現有帳號有疑問，請前往 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      ranks: {
        badge: '入口網站',
        title: '管理段位與項目',
        intro: '在 Affiliate 入口網站中使用 Ranks 配置學院段位項目並更新成員進度。它現在是一個多項目流程，而不是單一的全局段位設定。',
        jobs_title: '主要任務',
        jobs_items: [
          '如果館主成員資料尚不存在，先建立它。',
          '使用 Add Program 和 Save Systems 配置武術項目和段位系統。',
          '使用 Enroll Member 和 Remove from Program 控制成員屬於哪個項目名冊。',
          '更新段位和槓數，並在出現審核彈窗時確認變更。'
        ],
        labels_title: '你可能看到的目前標籤',
        labels_items: ['Ranks', 'Create profile', 'Add Program', 'Save Systems', 'Remove Program', 'Enroll Member', 'Remove from Program', 'Save', 'Review Change', 'Confirm Change'],
        know_title: '需要知道的事',
        know_items: [
          '這裡只有已接受的成員會出現。',
          '同一名成員在不同武術項目中的名冊歸屬可能不同。',
          '某些段位變更在儲存前需要經過帶有變更類型和備註的審核步驟。',
          '這裡寫入的變更會進入應用讀取和顯示的進度資料。'
        ],
        next_title: '下一步',
        members_link: '成員',
        analytics_link: 'Analytics',
        support_desc: '如果你對段位項目設定、名冊註冊或 Ranks 中的審核彈窗有問題，請前往 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      cards: {
        badge: '入口網站',
        title: '使用入口網站會員卡',
        intro: '當你需要完整的網頁會員卡流程時，請在 Affiliate 入口網站中使用 Cards：模板、發卡、有效卡管理、暫停控制和歷史記錄都在這裡。',
        areas_title: '主要卡片區域',
        areas_items: [
          'Templates：建立、編輯和刪除卡模板。',
          'Assign：向已接受的成員發卡。',
          'Active：處理有效卡狀態、暫停操作以及刪除或過期動作。',
          'History：查看發卡、刪除和稽核記錄。'
        ],
        labels_title: '你可能看到的目前標籤',
        labels_items: [
          'Templates、Assign、Active、History',
          'New Template、Create、Update',
          'Issue Card、Manage、Delete',
          'Pause Academy、Unpause Academy、Pause Member、Unpause Member',
          'View Plans'
        ],
        know_title: '需要知道的事',
        know_items: [
          '如果某模板下仍有有效卡，就不能刪除該模板。',
          '如果學院處於暫停狀態，單個會員卡管理會被鎖定。',
          '暫停和取消暫停控制需要付費的 Pause 工具。',
          '刪除會員卡時，Expire 和 Cancel 的行為不同，而 Cancel 可能需要填寫原因。',
          '在 Affiliate 入口網站中發出的會員卡，就是應用用於預約、出勤/課次扣減和成員卡狀態的真實會員卡。'
        ],
        next_title: '下一步',
        members_link: '成員',
        pause_link: '會員卡暫停',
        app_cards_link: '應用中的會員卡',
        support_desc: '如果你對 Affiliate Cards 區域中的模板、發卡、有效卡、暫停或歷史記錄有疑問，請前往 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      },
      reports: {
        badge: '入口網站',
        title: '查看入口網站報表',
        intro: '在 Affiliate 入口網站中使用報表查看系統已生成的月度財務報表。這個頁面是唯讀的。',
        flow_title: '如何使用',
        flow_items: [
          '如果你可以存取多個學院，請先選擇學院。',
          '使用年份篩選器，然後按 Apply。',
          '打開月度報表卡片查看生成好的報表資料。'
        ],
        access_title: '存取與 entitlement',
        access_items: [
          '館主通常可以存取報表。',
          '非館主員工只有在被授予報表權限時才能存取報表。',
          '如果 Analytics entitlement 關閉，這個頁面會顯示鎖定狀態，而不是報表資料。'
        ],
        know_title: '需要知道的事',
        know_items: [
          'Affiliate 入口網站並不會在這個頁面中即時計算報表。',
          '報表資料來自更廣泛的分析資料和系統流程。',
          '如果看到鎖定狀態，請前往功能頁面。'
        ],
        support_desc: '如果你對報表存取、Analytics 鎖定狀態，或 Affiliate 月報有疑問，請前往 Affiliate 版塊。',
        support_button: '打開 Affiliate 版塊'
      }
    }
  }
}
