export default {
  help_v3: {
    support: {
      heading: '还需要更多帮助？',
      default_description: '如有后续问题、特殊情况或跨产品流程需要说明，请前往 Source Combatives 上的 DojoMate 帮助版块。',
      default_button: '打开 DojoMate 帮助版块'
    },
    layout: {
      badge: '帮助 v3',
      intro: '按当前 DojoMate 仪表板和角色划分的工作流指南。',
      open_v2: '打开帮助 v2',
      search_placeholder: '搜索帮助 v3',
      search_no_results: '没有找到结果',
      nav: {
        start_here: '从这里开始',
        home: '帮助 v3 首页',
        member_home: '学员指南',
        admin_home: '管理指南',
        owner_home: '馆主指南',
        account_home: '账号指南',
        member: '学员',
        admin: '管理 / 员工',
        owner: '馆主 / 运营',
        account: '账号 / 设置',
        join_academy: '加入学院',
        memberships: '会员资格',
        member_cards: '会员卡',
        card_disputes: '会员卡争议',
        booking: '预约课程',
        attendance_records: '出勤记录',
        system_alerts: '系统提醒',
        broadcasts: '公告广播',
        online_learning: '在线学习',
        events: '活动赛事',
        academy_context: '学院上下文',
        admin_members: '成员管理',
        admin_cards: '会员卡管理',
        session_debt: '课次债务',
        lessons: '课程模板',
        schedule: '课程安排',
        admin_booking: '代订课程',
        admin_broadcasts: '发布广播',
        alerts_qr: '提醒与 QR 工具',
        create_academy: '创建学院',
        onboarding: '新馆主引导',
        business_management: '学院业务管理',
        instructors: '教练管理',
        access: '权限访问',
        operations_analytics: '运营分析',
        timesheets_salaries: '工时与薪资',
        oversight: '监督审查',
        owner_tools: '工具功能',
        sign_in: '登录',
        create_account: '创建账号',
        reset_password: '重置密码',
        change_password: '修改密码',
        profile: '个人资料',
        child_accounts: '儿童账号',
        privacy_progression: '隐私与进度',
        preferences: '偏好设置',
        delete_account: '删除账号',
        logout: '退出登录'
      }
    },
    welcome: {
      badge: '帮助 v3',
      title: '当前工作流指南',
      intro: '当你需要按当前 DojoMate 角色和仪表板来查找操作说明时，请使用帮助 v3。',
      areas_title: '选择与你工作相符的区域',
      member_title: '学员',
      member_body: '加入学院、会员卡、预约、提醒、公告、在线学习和活动赛事。',
      member_link: '打开学员指南',
      admin_title: '管理 / 员工',
      admin_body: '成员管理、会员卡、课表、代订课程、公告和学院日常管理。',
      admin_link: '打开管理指南',
      owner_title: '馆主 / 运营',
      owner_body: '创建学院、引导流程、馆主专属业务设置、权限和运营工作流。',
      owner_link: '打开馆主指南',
      account_title: '账号 / 设置',
      account_body: '登录、密码协助、个人资料、隐私设置、偏好设置和退出登录。',
      account_link: '打开账号指南',
      note_title: 'v3 有什么不同',
      note_body: 'v3 按当前产品中的角色和仪表板职责来组织内容，比混合式的 v2 更适合查找和后续助手提取。',
      note_button: '查看帮助 v2'
    },
    member: {
      home: {
        badge: '学员',
        title: '学员指南',
        intro: '当你在学院训练，并需要加入、会员资格、会员卡、预约、提醒、公告、在线学习或活动方面的帮助时，请使用此指南。',
        areas_title: '学员主题',
        links: [
          {
            title: '学院与会员资格',
            body: '加入正确的学院，并确认当前选中的学院上下文。',
            links: [
              { label: '加入学院', to: '/help-v3/member/join-academy' },
              { label: '会员资格', to: '/help-v3/member/memberships' }
            ]
          },
          {
            title: '会员卡与课程',
            body: '查看会员卡、提出争议、预约课程，并确认出勤记录。',
            links: [
              { label: '会员卡', to: '/help-v3/member/cards' },
              { label: '会员卡争议', to: '/help-v3/member/card-disputes' },
              { label: '预约课程', to: '/help-v3/member/booking' },
              { label: '出勤记录', to: '/help-v3/member/attendance-records' }
            ]
          },
          {
            title: '学院内容与更新',
            body: '阅读系统提醒、公告、在线学习内容和活动信息。',
            links: [
              { label: '系统提醒', to: '/help-v3/member/system-alerts' },
              { label: '公告广播', to: '/help-v3/member/broadcasts' },
              { label: '在线学习', to: '/help-v3/member/online-learning' },
              { label: '活动赛事', to: '/help-v3/member/events' }
            ]
          }
        ]
      },
      join_academy: {
        badge: '学员',
        title: '加入学院',
        intro: '当你想把账号连接到使用 DojoMate 的学院时，请使用这个流程。',
        what_title: '你可以做什么',
        what_items: [
          '在 Discover 中浏览学院。',
          '通过学院名称搜索。',
          '扫描学院提供的二维码。',
          '在决定加入之前先打开学院详情。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '如果你想先比较不同学院，请使用 Discover Academy。',
          '如果你已经知道学院，或者想直接扫描二维码，请使用 Academy Search。',
          '先通过学院详情页确认你找对了学院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '提交加入后，学院仍可能需要先接受你。',
          '家长管理账号或儿童账号关联可能会让后续步骤更多一些。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，学院会出现在你的 academy list 或 pending 状态中。',
          '如果学院还没有接受你，后续学员功能仍可能保持受限。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员资格', to: '/help-v3/member/memberships' },
          { label: '会员卡', to: '/help-v3/member/cards' }
        ]
      },
      memberships: {
        badge: '学员',
        title: '管理会员资格与学院上下文',
        intro: '当你属于一家或多家学院，并需要确认当前生效的学院时，请使用这个主题。',
        what_title: '你可以做什么',
        what_items: [
          '查看与你账号关联的学院。',
          '在使用会员卡、预约或公告前切换当前选定学院。',
          '在某些内容看起来缺失时，先确认你是否处于正确学院。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用已加入的 academy list 和学员端的 academy context 页面。',
          '在判断卡片或课程不存在之前，先重新确认当前选定的学院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '选错学院，会让卡片、课表和公告看起来像是不存在。',
          '会员资格状态仍可能受到学院接受流程或儿童账号关联影响。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '选定正确学院后，后续学员页面会加载该学院的数据。',
          '如果仍停留在错误学院，预约和会员卡相关内容会继续显得不一致。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员卡', to: '/help-v3/member/cards' },
          { label: '预约课程', to: '/help-v3/member/booking' }
        ]
      },
      cards: {
        badge: '学员',
        title: '查看会员卡和待付款项',
        intro: '当你想确认当前有哪些可用会员卡、查看待付款卡片，或理解为什么不能预约时，请使用这个主题。',
        what_title: '你可以做什么',
        what_items: [
          '查看当前选定学院中的可用会员卡。',
          '检查是否有待付款的卡片流程。',
          '在预约失败时先确认是否真的是卡片问题。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用学员端会员卡页面和待付款卡片流程。',
          '当预约提示没有符合条件的卡片时，先回到这里确认。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '学员会员卡与当前选定学院绑定。',
          '这里不是馆主或管理员的审计复核区域。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '待付款成功后，卡片可能进入可用状态。',
          '如果付款或发卡更新后卡片仍然看起来不正确，请改走争议流程。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员卡争议', to: '/help-v3/member/card-disputes' },
          { label: '预约课程', to: '/help-v3/member/booking' }
        ]
      },
      booking: {
        badge: '学员',
        title: '预约或取消预约课程',
        intro: '当你想打开学院课表、查看课程、选择可用会员卡并确认名额时，请使用预约流程。',
        steps_title: '常见步骤',
        steps_items: [
          '打开当前选定学院的课表。',
          '选择一堂已排定的课程并查看详细信息。',
          '打开会员卡选择，挑选符合条件的卡，并决定是否要在学员名单中匿名。',
          '确认预约或取消预约。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Academy Schedule、Academy Booking 和 Academy Card Selection。',
          '如果课程或会员卡看起来不对，先回去确认当前选定的学院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '预约使用当前的 scheduled-lesson 预约流程，不是通用课程编辑。',
          '会员卡是否符合资格以及预约保护规则，都由后端决定。',
          '匿名预约只会对其他学员隐藏身份，学院工作人员仍会看到真实预约资料。',
          '即使预约动作被阻止，已取消或已处理的课程仍可能保留可阅读的详情页面。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，预约状态和可见名单会更新。',
          '预期中的保护规则失败会说明为什么动作被阻止，例如预约已关闭或课程已经开始。',
          '如果系统无法确认请求是否成功，可能需要刷新后重试。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '出勤记录', to: '/help-v3/member/attendance-records' },
          { label: '系统提醒', to: '/help-v3/member/system-alerts' }
        ]
      },
      attendance_records: {
        badge: '学员',
        title: '查看出勤记录',
        intro: '当你想确认过去的课程是否已按预期记录出勤时，请使用出勤记录。',
        what_title: '你可以做什么',
        what_items: [
          '查看当前选定学院的历史出勤数据。',
          '确认某节课是否出现在你的记录里。',
          '把这些记录当作预约和上课后的确认。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用学员端出勤或 academy records 页面。',
          '当你想确认先前预约或到课结果时，先从这里开始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '出勤记录只能查看，不能由学员自行修改。',
          '如果记录有误，需要由学院端更正。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '正常记录说明该课程已经成功登记。',
          '如果记录缺失或不正确，应转到学院后续处理，而不是自己修正。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '预约课程', to: '/help-v3/member/booking' },
          { label: '会员卡争议', to: '/help-v3/member/card-disputes' }
        ]
      },
      system_alerts: {
        badge: '学员',
        title: '查看系统提醒',
        intro: '当你需要查看与账号、学院或相关学员流程有关的重要更新时，请使用系统提醒。',
        what_title: '你可以做什么',
        what_items: [
          '查看系统自动生成的重要账号或学院更新。',
          '当推送通知无法直接打开精确页面时，把提醒当作安全的回退页。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用学员端提醒页面，例如 Academy Alerts。',
          '如果通知点开后不能进入具体页面，应用可能会先带你到这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '系统提醒不是聊天工具。',
          '并不是所有通知类型都已经有完整的精准深链。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '阅读后，提醒的已读状态可能会更新。',
          '如果提醒指向某个流程，下一步应该去那个流程，而不是停留在提醒页。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '公告广播', to: '/help-v3/member/broadcasts' },
          { label: '预约课程', to: '/help-v3/member/booking' }
        ]
      },
      broadcasts: {
        badge: '学员',
        title: '阅读学院公告广播',
        intro: '使用 Broadcast 阅读当前选定学院的贴文。学员端的公告流是只读的，主要用于显示学院更新和训练贴文。',
        what_title: '你可以做什么',
        what_items: [
          '在 Updates 和 Training 两个分类之间切换。',
          '阅读文字、图片和学院公告贴文。',
          '打开图片放大查看，并且不离开学员仪表板地浏览内容。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用与当前选定学院绑定的学员 Broadcast 页面。',
          '如果看到的是错误的内容流，先回去确认学院选择。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '学员端 Broadcast 是只读的。',
          '这里没有评论、回复、点赞或学员自己发帖功能。',
          '空内容流不代表功能损坏，也可能只是学院暂时没有可见贴文。',
          'Broadcast 内容由学院端工作人员或馆主创建，不是由学员端发帖。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功加载后，会显示当前选定学院的内容流。',
          '如果你想查看的是账号或系统状态，请改看 System Alerts。',
          '如果学院也有在线学习权限，Broadcast 和 Online 仍然是两个分开的内容区域。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '系统提醒', to: '/help-v3/member/system-alerts' },
          { label: '在线学习', to: '/help-v3/member/online-learning' }
        ]
      },
      card_disputes: {
        badge: '学员',
        title: '发起会员卡争议',
        intro: '当卡片、删卡或卡片相关变更从学员侧看起来有问题，并需要学院后续处理时，请使用会员卡争议。',
        what_title: '你可以做什么',
        what_items: [
          '创建一条与卡片问题绑定的争议记录。',
          '从学员角度说明哪里看起来不正确。',
          '把问题放进专门的后续路径，而不是混进预约或个人资料问题里。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用学员端的卡片与争议页面，例如 Academy Disputes。',
          '可以的话，从看起来有问题的卡片本身开始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '提出争议不会立刻修正卡片。',
          '像 audit logs 这样的馆主专属审查工具，不属于学员侧争议流程。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，争议会成为学院侧需要跟进的项目。',
          '在学院完成审查前，你可能仍需要等待卡片状态变化。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员卡', to: '/help-v3/member/cards' },
          { label: '出勤记录', to: '/help-v3/member/attendance-records' }
        ]
      },
      online_learning: {
        badge: '学员',
        title: '使用在线学习',
        intro: '当你的学员账号具备在线学习权限，并且你想浏览课程结构、打开课程、观看片段并完成作业时，请使用 Online。',
        what_title: '你可以做什么',
        what_items: [
          '在权限已授予时，从学员仪表板打开 Online。',
          '浏览 curriculum、catalog 和课程层级。',
          '观看教学片段和附带的 tips 视频。',
          '从所属课程流程中打开并提交作业。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Online Home、Curriculum、Catalog、Lesson、Video 和 Homework 页面。',
          '从课程结构一路跟到你想观看的具体片段。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '只有在权限允许时，Online tile 才会出现。',
          '这里的 Expo Online 是学员消费端，不是在线管理后台。',
          '作业和 tips 视频会绑定在所属课程与切片，而不是独立的学院全局内容流。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '有权限时，仪表板会显示 Online 入口。',
          '作业和 tips 内容会保留在各自课程和切片下面，而不是变成漂浮的独立内容。',
          '如果没有权限，正确预期是根本看不到 Online 入口，而不是看到一个半空页面。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '活动赛事', to: '/help-v3/member/events' },
          { label: '公告广播', to: '/help-v3/member/broadcasts' }
        ]
      },
      events: {
        badge: '学员',
        title: '浏览活动与报名',
        intro: '当你想浏览比赛活动、维护比赛资料，或管理活动报名步骤时，请使用 Events。',
        what_title: '你可以做什么',
        what_items: [
          '浏览可参加的比赛活动。',
          '在报名之前打开活动详情。',
          '创建或更新你的比赛资料。',
          '在活动支持的情况下管理报名和付款步骤。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用活动列表、详情、资料和报名页面。',
          '有些活动流程会交给联盟或活动网站等外部提供方，而不会完全留在 app 内。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '外部提供方流程不会完全留在 DojoMate app 里。',
          '报名状态可能取决于普通学院会员流程之外的活动专属要求。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，你的比赛资料或报名状态会更新。',
          '如果活动使用外部提供方，预期会跳转到外部流程，而不是完整的 app 内表单。',
          '比赛资料更新可能会成为后续活动报名准备的一部分，而不是只停留在单一页面。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员资格', to: '/help-v3/member/memberships' },
          { label: '系统提醒', to: '/help-v3/member/system-alerts' }
        ]
      }
    },
    admin: {
      home: {
        badge: '管理',
        title: '管理与员工指南',
        intro: '当你从学院管理仪表板协助处理成员、会员卡、课表、代订或公告时，请使用此指南。',
        areas_title: '管理主题',
        links: [
          {
            title: '学院上下文与成员',
            body: '先确认当前选中的是正确学院，再处理成员和身份相关工作。',
            links: [
              { label: '学院上下文', to: '/help-v3/admin/academy-context' },
              { label: '成员管理', to: '/help-v3/admin/members' }
            ]
          },
          {
            title: '日常运营工作',
            body: '管理会员卡、课次债务、课程模板、课表和代订流程。',
            links: [
              { label: '会员卡管理', to: '/help-v3/admin/cards' },
              { label: '课次债务', to: '/help-v3/admin/session-debt' },
              { label: '课程模板', to: '/help-v3/admin/lessons' },
              { label: '课程安排', to: '/help-v3/admin/schedule' },
              { label: '代订课程', to: '/help-v3/admin/admin-booking' }
            ]
          },
          {
            title: '公告与支持工具',
            body: '使用当前的广播发布流程、提醒消息和 QR 工具。',
            links: [
              { label: '发布广播', to: '/help-v3/admin/broadcasts' },
              { label: '提醒与 QR 工具', to: '/help-v3/admin/alerts-qr' }
            ]
          }
        ]
      },
      cards: {
        badge: '管理',
        title: '创建并发放会员卡',
        intro: '当你需要创建会员卡模板、发出有效会员卡、查看当前卡片，或改变学院成员可用的卡片状态时，请使用管理端 Cards。',
        what_title: '你可以做什么',
        what_items: [
          '创建会员卡模板。',
          '查看现有模板。',
          '把有效会员卡发给成员。',
          '查看有效卡片，并在界面允许时处理暂停相关状态。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用创建模板、模板列表、发卡和 Active Cards 等页面。',
          '如果学员预约失败其实是因为卡片不对，请回到这里检查。',
          '在 onboarding 阶段，应用可能会直接把你带到 Cards，因为第一张卡的里程碑就属于学院创建流程。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '卡片模板和有效卡片是两个不同层次。',
          '馆主专属的审查工具，例如 audit logs，不属于一般管理端 Cards 指南。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，与卡片相关的管理和学员流程都会刷新。',
          '卡片更新进入正确学院上下文后，预约资格也可能随之改变。',
          '如果这张卡只是 onboarding 或员工测试用途，它仍然可以计入里程碑，而不代表正式收费流程已经准备完成。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '课次债务', to: '/help-v3/admin/session-debt' },
          { label: '代订课程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      academy_context: {
        badge: '管理',
        title: '确认当前管理的是哪一家学院',
        intro: '当你同时接触多家学院，或担心自己不在正确的管理上下文中时，请先确认 academy context。',
        what_title: '你可以做什么',
        what_items: [
          '确认当前加载的是哪一家学院。',
          '在处理成员、会员卡、课表或广播前，先切换到正确学院。',
          '区分自己当前是在 Admin 还是 Business / Owner 路径。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用学院切换和管理入口流程。',
          '如果你刚从其他学院返回，先在这里再次确认再继续工作。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '管理和员工操作都绑定到当前选定学院。',
          '馆主或 Business 侧设置工作不应被误认为普通 admin 功能。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '确认正确学院后，后续管理页面会加载对应数据。',
          '如果学院选错，成员、卡片或课表就可能看起来缺失或不一致。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '成员管理', to: '/help-v3/admin/members' },
          { label: '会员卡管理', to: '/help-v3/admin/cards' }
        ]
      },
      members: {
        badge: '管理',
        title: '管理成员',
        intro: '当你需要查看待处理、已接受、已拒绝或已封禁的学院成员，并检查成员在学院中的参与状态时，请使用 Members。',
        what_title: '你可以做什么',
        what_items: [
          '查看待审核和已接受的会员资格。',
          '在界面允许时，拒绝、封禁或更新会员资格状态。',
          '打开成员资料和出勤相关内容。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Pending、Accepted、Rejected 和 Banned 等成员状态页面。',
          '从管理端的成员区域打开成员详情或出勤信息。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '成员、教练和管理权限不是同一个概念。',
          '被标记为教练的已接受成人行，不应被理解成普通成人成员行。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功更新后，此人会移动到正确的可见成员状态。',
          '相关的管理页面会根据新的成员状态刷新。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员卡管理', to: '/help-v3/admin/cards' },
          { label: '代订课程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      session_debt: {
        badge: '管理',
        title: '处理课次债务',
        intro: '当卡片或预约历史产生需要由员工侧结清的债务状态时，请使用课次债务流程。',
        what_title: '你可以做什么',
        what_items: [
          '查看未结清的课次债务条目。',
          '通过当前管理端的结清流程处理债务。',
          '把债务处理和学员争议或馆主监督分开。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用属于当前卡片工具的管理端 debt 或 card-debt 页面。',
          '应从卡片运营流程进入，而不是从成员资料假设一路跳入。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '债务处理不是学员侧争议流程。',
          '馆主审查工具仍独立于这个日常管理结清流程。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '结清后，债务状态和相关卡片上下文都应更新。',
          '如果底层记录本身属于争议问题，而不只是欠次数，应改走正确的争议或监督路径。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '会员卡管理', to: '/help-v3/admin/cards' },
          { label: '成员管理', to: '/help-v3/admin/members' }
        ]
      },
      lessons: {
        badge: '管理',
        title: '管理课程模板',
        intro: '当你需要在课程发布到实际课表之前创建、编辑或移除课程模板时，请使用 Lessons。',
        what_title: '你可以做什么',
        what_items: [
          '创建课程模板。',
          '编辑模板中的教学和排程细节。',
          '删除不再需要发布的模板。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 lesson-day、create lesson 和 edit lesson 等模板页面。',
          '在进入实际课表发布前，先在这里完成模板工作。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '课程模板不等于已发布的已排定课程。',
          '在进入 schedule 层之前，模板变更不会自动解释所有已发布课表结果。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，模板可供后续课表使用。',
          '如果实际活动已经存在，schedule 编辑仍可能是另一独立步骤。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '课程安排', to: '/help-v3/admin/schedule' },
          { label: '代订课程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      schedule: {
        badge: '管理',
        title: '发布与管理课表',
        intro: '当你需要发布课程、编辑已排定课程、取消或从实际课表中删除它时，请使用课表工具。',
        what_title: '你可以做什么',
        what_items: [
          '从模板发布已排定课程。',
          '编辑或取消已排定课程。',
          '查看已排定课程的详情与名单状态。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 schedule layout 和 create/edit event 流程。',
          '当你需要检查当前状态时，直接打开那节已排定课程的详情页面。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '已取消或已处理的课程应保持可查看，而不是从检查流程中完全消失。',
          '只有实际的预约动作本身应在保护规则要求时被阻止。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，学院课表会刷新，反映当前的已排定课程状态。',
          '如果课程已取消，即使预约关闭，详情页面仍可能对后续检查有用。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '课程模板', to: '/help-v3/admin/lessons' },
          { label: '代订课程', to: '/help-v3/admin/admin-booking' }
        ]
      },
      admin_booking: {
        badge: '管理',
        title: '为学员或成员代订课程',
        intro: '当员工需要从管理端课表代表某位成员创建或移除预约时，请使用 admin booking。',
        what_title: '你可以做什么',
        what_items: [
          '从管理端打开某节已排定课程。',
          '选择目标成员和符合条件的卡片。',
          '使用当前的预约动作流程创建或移除预约。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Admin Booking 和相关的卡片选择流程。',
          '应从你正在处理的那节已排定课程开始，而不是先做普通成员搜索。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '管理端不能创建匿名预约。',
          '后端 booking guard codes 仍然决定是否允许预约。',
          '即使名单详情还在，发生非预期失败时仍可能需要刷新后重试。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，课程名单和预约状态会更新。',
          '如果动作被阻止，页面应说明保护条件，而不是让课程看起来像突然消失。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '课表安排', to: '/help-v3/admin/schedule' },
          { label: '成员管理', to: '/help-v3/admin/members' }
        ]
      },
      broadcasts: {
        badge: '管理',
        title: '发布广播',
        intro: '当你想从 app 发布学院更新或训练贴文时，请使用当前的管理端 Broadcast 流程。',
        what_title: '你可以做什么',
        what_items: [
          '创建含文字和图片的 Broadcast。',
          '创建含文字和单个 MP4 视频的 Broadcast。',
          '立即发布到当前选定学院的内容流。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用管理端 Members 区域中的 Broadcast 发布页面。',
          '发布前先确认你处在正确的选定学院上下文。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '当前没有草稿保存分流。',
          'app 只支持单个视频，且不能混合图片加视频贴文。',
          '授权仍取决于学院角色和 access。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功创建后，Broadcast 会立即发布。',
          '如果媒体或授权不正确，创建动作应失败，而不是产生隐藏草稿。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '提醒与 QR 工具', to: '/help-v3/admin/alerts-qr' },
          { label: '学院上下文', to: '/help-v3/admin/academy-context' }
        ]
      },
      alerts_qr: {
        badge: '管理',
        title: '使用提醒与 QR 工具',
        intro: '当你需要与当前学院上下文相关的提醒、QR 动作或恢复操作时，请使用这些管理端支持工具。',
        what_title: '你可以做什么',
        what_items: [
          '查看属于学院的管理或 business 提醒。',
          '打开 QR 相关工具。',
          '在需要恢复或切换时，使用学院上下文支持流程。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用学院侧菜单中的提醒页面和 QR 入口。',
          '如果当前学院不正确，回到学院切换器。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '这些流程支持学院工作，但不取代馆主专属的 business 管理。',
          '有些恢复动作属于更广的 bootstrap 或 settings 路径，而不是普通日常菜单。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '正确的提醒或 QR 动作会把你带到下一个相关学院流程。',
          '如果问题实际上属于馆主专属 business 设置，下一步通常要转到馆主侧区域。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '学院上下文', to: '/help-v3/admin/academy-context' },
          { label: '发布广播', to: '/help-v3/admin/broadcasts' }
        ]
      }
    },
    owner: {
      home: {
        badge: '馆主',
        title: '馆主与运营指南',
        intro: '当你需要创建学院、完成引导流程、管理馆主专属设置，或处理运营与监督工作时，请使用此指南。',
        areas_title: '馆主主题',
        links: [
          {
            title: '学院创建与引导',
            body: '创建第一家学院，并完成以里程碑为主的引导流程。',
            links: [
              { label: '创建学院', to: '/help-v3/owner/create-academy' },
              { label: '新馆主引导', to: '/help-v3/owner/onboarding' }
            ]
          },
          {
            title: '馆主业务管理',
            body: '管理学院信息、教练和学院管理权限。',
            links: [
              { label: '学院业务管理', to: '/help-v3/owner/business-management' },
              { label: '教练管理', to: '/help-v3/owner/instructors' },
              { label: '权限访问', to: '/help-v3/owner/access' }
            ]
          },
          {
            title: '运营与监督',
            body: '使用分析、工时薪资、监督审查和馆主工具。',
            links: [
              { label: '运营分析', to: '/help-v3/owner/operations-analytics' },
              { label: '工时与薪资', to: '/help-v3/owner/timesheets-salaries' },
              { label: '监督审查', to: '/help-v3/owner/oversight' },
              { label: '工具功能', to: '/help-v3/owner/tools' }
            ]
          }
        ]
      },
      access: {
        badge: '馆主',
        title: '管理权限与访问',
        intro: '当你需要决定哪些已接受的成人成员可以进入当前学院的管理端时，请使用 Access。',
        what_title: '你可以做什么',
        what_items: [
          '把学院管理权限授予符合条件的已接受成人成员。',
          '更新或移除学院层级的 permission row。',
          '把管理权限与教学身份分开处理。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用馆主端的 permissions 或 Access 页面。',
          '在布局较窄的菜单中，这个按钮可能会简短显示为 `Access`。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '移除某一家学院的 permission row，不会自动移除这个人在其他学院的 broader admin role。',
          '这个页面管理的是学院管理权限，不是教练身份。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，此人能否打开当前学院的管理功能会随之改变。',
          '如果此人同时还需要教学身份，请另外使用 Instructors。',
          '如果此人同时属于其他学院，他在其他学院的 broader admin role 状态仍可能保留。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '教练管理', to: '/help-v3/owner/instructors' },
          { label: '运营分析', to: '/help-v3/owner/operations-analytics' }
        ]
      },
      onboarding: {
        badge: '馆主',
        title: '完成第一家学院的引导流程',
        intro: '如果你想了解创建学院后，第一家学院的引导教学目前如何推进，请使用这个主题。',
        steps_title: '里程碑顺序',
        steps_items: [
          '创建学院。',
          '加入第一位教练，或决定馆主是否自己担任总教练。',
          '创建第一个会员卡模板。',
          '发出第一张有效会员卡。',
          '创建第一堂已排定课程。',
          '完成第一个管理端代订动作。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '按照引导中的仪表板提示和全屏 onboarding 页面进行。',
          '使用应用当前高亮的区域来完成下一个里程碑。'
        ],
        limits_title: '重要限制',
        limits_items: [
          'Onboarding 由里程碑驱动，并依赖持久的 usage-history 状态。',
          '完成教学不需要真实付费学生，也不代表已经完成在线支付设置。',
          'Onboarding 完成不等于学院已经达到账单或收款就绪状态。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '每完成一个里程碑，应用都会揭示下一个推荐区域。',
          '完成 onboarding 之后，完整的管理仪表板会打开，并根据权限显示更多工具。',
          '教学流程可以使用馆主自己或员工的测试流程完成，不需要先有真实付费成员。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '教练管理', to: '/help-v3/owner/instructors' },
          { label: '权限访问', to: '/help-v3/owner/access' }
        ]
      },
      create_academy: {
        badge: '馆主',
        title: '创建新学院',
        intro: '当你需要创建第一家学院或新增另一家学院时，请使用创建学院流程。',
        steps_title: '你可以做什么',
        steps_items: [
          '创建新的学院。',
          '在有多个身份或多家学院时，切换到创建模式。',
          '创建后直接进入后续引导。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Business 创建流程以及相关 bootstrap / gate 页面。',
          '如果应用先显示选择路径页面，先确认你需要的是创建新学院，而不是进入已有管理上下文。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '可创建学院数量仍可能受当前方案或 academy slots 影响。',
          '取消创建模式会返回管理入口，而不会完成任何设置。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，新学院会被选中，并进入后续引导流程。',
          '如果中途取消，应用会回到 admin / business 的选择入口。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '新馆主引导', to: '/help-v3/owner/onboarding' },
          { label: '学院业务管理', to: '/help-v3/owner/business-management' }
        ]
      },
      business_management: {
        badge: '馆主',
        title: '管理学院业务设置',
        intro: '当你需要维护学院本身的数据、媒体和馆主级设置时，请使用 Business Management。',
        what_title: '你可以做什么',
        what_items: [
          '更新学院基本资料。',
          '管理 logo、banner、gallery 或其他学院媒体。',
          '处理馆主级的学院设置和生命周期操作。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Business 相关的编辑、删除、媒体和馆主设置页面。',
          '当工作是调整学院本身，而不是处理日常 admin 任务时，应回到这一块。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '这些是馆主范围的 academy-management 功能，不是普通员工权限。',
          '更新学院资料不会自动改变管理员访问权限或运营分析权限。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，学院资料和相关馆主页面会显示新内容。',
          '如果下一步是处理谁能进入管理端，请转到 Access。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '权限访问', to: '/help-v3/owner/access' },
          { label: '教练管理', to: '/help-v3/owner/instructors' }
        ]
      },
      instructors: {
        badge: '馆主',
        title: '管理教练',
        intro: '当你需要管理学院人员中的教学身份层面时，请使用 Instructors。',
        what_title: '你可以做什么',
        what_items: [
          '添加或维护学院中的教练身份。',
          '在 onboarding 和后续学院管理中，支持总教练与教学人员设置。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用馆主侧学院区域中的 Business Instructors 页面。',
          '当问题是教学身份，而不是管理访问权时，请回到这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '教练身份不等于学院管理访问权。',
          '教练身份也不等于薪资或薪酬归属。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功的教练设置会满足 onboarding 和学院人员配置里的教学身份需求。',
          '如果问题是由谁管理学院，而不是由谁授课，请改用 Access。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '权限访问', to: '/help-v3/owner/access' },
          { label: '新馆主引导', to: '/help-v3/owner/onboarding' }
        ]
      },
      operations_analytics: {
        badge: '馆主',
        title: '使用运营与分析',
        intro: '当你需要馆主级指标、实时学院报表、趋势或月度报表，而不是普通学院管理工作时，请使用 Operations。',
        what_title: '你可以做什么',
        what_items: [
          '查看实时与汇总学院指标。',
          '打开 insights、trends 和 monthly reporting 页面。',
          '使用馆主侧运营视角，而不是普通 admin 仪表板来做高层报表判断。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用馆主运营仪表板和报表页面。',
          '在解读特定学院分析时，保持在馆主侧当前选定学院上下文中。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '运营与分析属于馆主或 operations 范围，不是普通 admin / 员工范围。',
          '分析和教练身份或访问身份是不同概念。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功访问后，会加载当前选定学院的馆主报表与运营内容。',
          '如果页面不存在，原因可能是角色或权限，而不是学院数据错误。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '工时与薪资', to: '/help-v3/owner/timesheets-salaries' },
          { label: '监督审查', to: '/help-v3/owner/oversight' }
        ]
      },
      timesheets_salaries: {
        badge: '馆主',
        title: '管理工时与薪资',
        intro: '当你需要跟踪员工工时或管理薪酬相关数据时，请使用这些馆主运营工具。',
        what_title: '你可以做什么',
        what_items: [
          '让员工打卡上下班，或查看已记录的工时。',
          '查看和管理薪资或薪酬相关数据。',
          '把薪酬问题和教练身份或管理访问权分开。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 staff time、staff salaries 等馆主运营页面。',
          '当问题是薪酬，而不是教学身份时，回到这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '薪酬页面不定义谁是教练。',
          '薪酬页面也不取代 access 或 permissions 管理。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功更新后，馆主侧的工时或薪酬数据会改变。',
          '如果员工问题实际上是角色分配，请改回 Instructors 或 Access。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '运营分析', to: '/help-v3/owner/operations-analytics' },
          { label: '权限访问', to: '/help-v3/owner/access' }
        ]
      },
      oversight: {
        badge: '馆主',
        title: '使用馆主监督审查',
        intro: '当你需要馆主专属的 issue records、delete records 或 audit logs 审查工具时，请使用 Oversight。',
        what_title: '你可以做什么',
        what_items: [
          '查看 issue records。',
          '查看 delete records。',
          '在馆主专属监督区域中查看 audit logs。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用馆主营运中的 oversight 区域，而不是普通管理仪表板。',
          '只有在问题属于历史或运营审查时，才打开这些工具。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '这些页面是馆主专属的监督工具。',
          '它们不是普通管理端的 Cards 工作流。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '监督审查有助于馆主确认历史或运营上到底发生了什么。',
          '如果需要后续动作，通常会再回到正确的管理或学员流程。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '运营分析', to: '/help-v3/owner/operations-analytics' },
          { label: '工具功能', to: '/help-v3/owner/tools' }
        ]
      },
      tools: {
        badge: '馆主',
        title: '使用馆主工具与受限功能',
        intro: '当你需要理解可选的馆主工具做什么，以及这些流程在可用后会出现在哪里时，请使用这个主题。',
        what_title: '你可以做什么',
        what_items: [
          '打开与当前学院流程相符的馆主工具或受限功能。',
          '把馆主工具建立在核心学院流程之上使用，而不是取代它。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '在权限可用后，使用对应的馆主或运营仪表板入口。',
          '先确认当前选定学院，再判断工具是否真的缺失。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '帮助内容应解释工具用途与流程，而不是过时的购买机制。',
          '旧的 bundle 假设不应再被当作产品事实。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '一旦相关权限存在，工具就会打开自己的工作流页面。',
          '如果工具缺失，通常是角色或 entitlement 问题，而不是路由损坏。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '运营分析', to: '/help-v3/owner/operations-analytics' },
          { label: '学院业务管理', to: '/help-v3/owner/business-management' }
        ]
      }
    },
    account: {
      home: {
        badge: '账号',
        title: '账号与设置指南',
        intro: '当你需要登录、重置密码、修改个人资料、调整偏好或结束会话时，请使用此指南。',
        areas_title: '账号主题',
        links: [
          {
            title: '进入账号',
            body: '登录、创建账号，或通过忘记密码流程恢复访问。',
            links: [
              { label: '登录', to: '/help-v3/account/sign-in' },
              { label: '创建账号', to: '/help-v3/account/create-account' },
              { label: '重置密码', to: '/help-v3/account/reset-password' },
              { label: '修改密码', to: '/help-v3/account/change-password' }
            ]
          },
          {
            title: '个人资料与关联',
            body: '管理成人账号资料，以及儿童账号关联。',
            links: [
              { label: '个人资料', to: '/help-v3/account/profile' },
              { label: '儿童账号', to: '/help-v3/account/child-accounts' }
            ]
          },
          {
            title: '设置与退出',
            body: '调整隐私、偏好设置，或进行退出登录与删除账号。',
            links: [
              { label: '隐私与进度', to: '/help-v3/account/privacy-progression' },
              { label: '偏好设置', to: '/help-v3/account/preferences' },
              { label: '删除账号', to: '/help-v3/account/delete-account' },
              { label: '退出登录', to: '/help-v3/account/logout' }
            ]
          }
        ]
      },
      create_account: {
        badge: '账号',
        title: '创建账号',
        intro: '如果你还没有 DojoMate 账号，并且需要开始正确的学员或管理流程，请使用创建账号。',
        what_title: '你可以做什么',
        what_items: [
          '创建新的 DojoMate 账号。',
          '选择符合真实需求的角色路径。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '从验证入口流程中的 account creation 页面开始。',
          '先决定自己是要加入并训练，还是要创建和管理学院。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '如果一开始走错角色路径，后面会更容易对该看哪个指南感到混乱。',
          '如果邮箱已经属于现有账号，请登录或重置密码，而不是重复创建。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，应用会进入对应的学员或管理工作流。',
          '如果注册失败，应用应使用当前标准化的认证处理，而不是旧的模糊报错说法。',
          '下一步通常会是角色相关流程，例如加入学院或开始学院设置。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '登录', to: '/help-v3/account/sign-in' },
          { label: '加入学院', to: '/help-v3/member/join-academy' }
        ]
      },
      reset_password: {
        badge: '账号',
        title: '重置密码',
        intro: '如果你忘记了密码，并且需要重新取得账号访问权，请使用重置密码流程。',
        steps_title: '你可以做什么',
        steps_items: [
          '请求系统发送密码重置邮件。',
          '在无法正常登录时改走找回访问权路径。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '从 Sign In 页面进入密码重置流程。',
          '当问题是忘记密码，而不是普通登录失败时，从这里开始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '这是找回遗失密码的流程，不是登录后修改密码。',
          '如果邮箱地址本身有误，重置邮件就不会送到正确邮箱。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，系统会发送重置密码邮件。',
          '如果邮件没有到达，应先检查邮箱并重试，而不是直接重新创建账号。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '登录', to: '/help-v3/account/sign-in' },
          { label: '创建账号', to: '/help-v3/account/create-account' }
        ]
      },
      change_password: {
        badge: '账号',
        title: '修改密码',
        intro: '当你已经登录，并且想更新当前账号密码时，请使用修改密码流程。',
        what_title: '你可以做什么',
        what_items: [
          '在已登录状态下修改账号密码。',
          '在保留当前账号路径的同时提升账号安全性。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用已登录账号设置中的 change password 页面。',
          '当问题不是忘记密码，而是主动更新密码时，从这里开始。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '这个流程不同于忘记密码后的重置流程。',
          '通常仍需要当前密码来确认更改。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，账号会保存新密码。',
          '当前设备会话可能保留，而其他设备会话可能被撤销。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '重置密码', to: '/help-v3/account/reset-password' },
          { label: '退出登录', to: '/help-v3/account/logout' }
        ]
      },
      sign_in: {
        badge: '账号',
        title: '登录',
        intro: '当账号已经存在，并且你想正常开始一个 DojoMate 会话时，请使用登录。',
        what_title: '你可以做什么',
        what_items: [
          '使用已有账号凭证登录。',
          '开始普通的学员、管理或馆主会话。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 Sign In 页面作为主要入口。',
          '如果问题是忘记密码而不是普通登录失败，请改看重置密码主题。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '当前的认证结果会按照新的标准化规则处理，而不是依赖旧的错误文字。',
          '某些账号完整性问题属于支持或恢复流程，而不只是密码错误。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，应用会开始当前用户的会话。',
          '如果无法正常开始会话，应用可能会进入恢复或支持流程，而不是只显示普通登录错误。',
          '之后的受保护请求会依赖当前的 refresh-token 流程，而不是旧的兼容路径。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '重置密码', to: '/help-v3/account/reset-password' },
          { label: '创建账号', to: '/help-v3/account/create-account' }
        ]
      },
      preferences: {
        badge: '账号',
        title: '调整偏好设置',
        intro: '当你需要调整语言、货币、主题或其他个人设置时，请使用偏好设置。',
        what_title: '你可以做什么',
        what_items: [
          '调整应用语言和显示偏好。',
          '修改与账号体验相关的个人设置。',
          '在不改变学院业务设置的前提下，调整自己的 app 使用体验。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用账号设置和偏好设置相关页面。',
          '如果你要改的是个人 app 体验，而不是学院资料，请留在这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '偏好设置不会改变学院的 business 设置。',
          '有些设置会立即生效，有些则可能要到下一次刷新才完全反映。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，应用展示或账号体验会按新设置更新。',
          '如果你想结束当前会话，下一步应使用 Logout，而不是在这里寻找删除账号。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '隐私与进度', to: '/help-v3/account/privacy-progression' },
          { label: '退出登录', to: '/help-v3/account/logout' }
        ]
      },
      profile: {
        badge: '账号',
        title: '编辑个人资料',
        intro: '当成人账号本身的资料需要检查或更新时，请使用 Profile。',
        what_title: '你可以做什么',
        what_items: [
          '查看与成人账号绑定的个人资料。',
          '从已登录的账号流程更新个人字段。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用 profile user 和 edit-profile 相关页面。',
          '如果不正确的是账号身份资料，而不是学院会员资格，请回到这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '个人资料编辑不能取代学院会员资格决策。',
          '儿童账号关系是另一条独立流程。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，账号个人资料会反映最新保存的值。',
          '如果实际问题其实是儿童或会员资格关系，请切换到正确主题。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '儿童账号', to: '/help-v3/account/child-accounts' },
          { label: '隐私与进度', to: '/help-v3/account/privacy-progression' }
        ]
      },
      child_accounts: {
        badge: '账号',
        title: '管理儿童账号',
        intro: '当你需要处理与成人账号关联的儿童账号时，请使用 Child Accounts。',
        what_title: '你可以做什么',
        what_items: [
          '查看与当前成人账号关联的儿童账号。',
          '理解儿童资料与成人账号之间的关系。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用已登录账号路径中的 child account 相关页面。',
          '当问题涉及家长、孩子或代管关系时，回到这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '儿童账号关系不同于普通成人个人资料编辑。',
          '它也不同于学院成员审批状态。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，账号会显示最新的儿童关联状态。',
          '如果问题实际上属于学院成员资格，请切换回成员相关主题。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '个人资料', to: '/help-v3/account/profile' },
          { label: '加入学院', to: '/help-v3/member/join-academy' }
        ]
      },
      privacy_progression: {
        badge: '账号',
        title: '管理隐私与进度设置',
        intro: '当问题与可见性、排名参与、资料曝光或账号级隐私选项有关时，请使用隐私与进度设置。',
        what_title: '你可以做什么',
        what_items: [
          '查看与隐私相关的账号设置。',
          '在 app 提供时，控制进度或个人资料可见度相关设置。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用已登录账号路径中的 settings privacy 和 progression 页面。',
          '当问题是可见性而不是名单或预约逻辑时，请回到这里。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '匿名预约和隐私设置不是同一回事。',
          '学院侧成员可见性和账号隐私彼此相关，但不是完全相同的概念。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，app 会使用最新保存的隐私或进度设置。',
          '如果问题其实是预约名单的匿名显示，请改看 Booking。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '预约课程', to: '/help-v3/member/booking' },
          { label: '偏好设置', to: '/help-v3/account/preferences' }
        ]
      },
      delete_account: {
        badge: '账号',
        title: '删除账号',
        intro: '当你想永久删除整个 DojoMate 账号，而不只是离开某一家学院时，请使用删除账号流程。',
        what_title: '你可以做什么',
        what_items: [
          '启动整个账号的永久删除流程。',
          '在删除前区分账号删除和单一学院成员关系移除。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用账号隐私或删除相关页面。',
          '如果你的目标只是停止当前会话，请改用 Logout。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '删除整个账号不同于离开某一家学院。',
          '这是更强的永久动作，不应与普通退出登录混淆。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，整个账号访问会被移除。',
          '如果你只是想移除某个学院关系，应该改走成员或学院相关流程。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '退出登录', to: '/help-v3/account/logout' },
          { label: '隐私与进度', to: '/help-v3/account/privacy-progression' }
        ]
      },
      logout: {
        badge: '账号',
        title: '退出登录',
        intro: '当你想结束当前设备上的会话，并干净地离开已登录状态时，请使用 Logout。',
        what_title: '你可以做什么',
        what_items: [
          '结束当前已登录的 app 会话。',
          '为其他账号或之后重新进入做好准备。'
        ],
        where_title: '在哪里操作',
        where_items: [
          '使用已登录的账号设置区域。',
          '如果你只是想停止使用当前会话，请退出登录，而不是删除账号。'
        ],
        limits_title: '重要限制',
        limits_items: [
          '退出登录只会结束当前会话，不会删除账号。',
          '如果需要改的是密码本身，请改用 Change Password。'
        ],
        results_title: '接下来会发生什么',
        results_items: [
          '成功后，app 会清除这台设备上的当前登录状态。',
          '之后你可以用相同或不同账号重新登录。',
          '当你不需要修改密码或删除账号时，Logout 是最安全的结束会话方式。'
        ],
        next_title: '下一个主题',
        next_links: [
          { label: '登录', to: '/help-v3/account/sign-in' },
          { label: '创建账号', to: '/help-v3/account/create-account' }
        ]
      }
    }
  },
  help_v2: {
    support: {
      heading: '还需要更多帮助？',
      default_description: '如有问题、特殊情况或后续帮助需求，请前往 Source Combatives 上的 DojoMate 帮助版块。',
      default_button: '打开 DojoMate 帮助版块'
    },
    layout: {
      preview_badge: '帮助 v2',
      intro: '这是一个以任务为中心的指南，面向馆主和管理员。v1 仍然保持在线，v2 会继续完善。',
      open_v1: '打开帮助 v1',
      search_placeholder: '搜索帮助',
      search_no_results: '没有找到结果',
      nav: {
        start_here: '从这里开始',
        owner_setup: '馆主设置',
        student: '学员',
        account_profile: '账号与资料',
        business: '业务',
        portal: '入口网站',
        schedule: '课程安排',
        cards: '会员卡',
        members: '成员',
        tools: '工具',
        home: '帮助 v2 首页',
        owner: '我运营学院',
        admin: '我协助管理',
        student_home: '我在学院训练',
        getting_started_owner: '馆主快速开始',
        create_academy: '创建学院',
        academy_basics: '学院基础设置',
        academy_qr: '学院二维码',
        delete_academy: '删除学院',
        join_academy: '加入学院',
        memberships: '管理会员资格',
        booking: '预约课程',
        system_alerts: '系统提醒',
        broadcast: '公告广播',
        attendance_records: '出勤记录',
        sign_in: '登录',
        create_account: '创建账号',
        reset_password: '重置密码',
        account_troubleshooting: '账号故障排查',
        change_password: '修改密码',
        language: '语言',
        currency: '货币',
        privacy: '隐私',
        delete_account: '删除账号',
        logout: '退出登录',
        edit_profile: '编辑资料',
        child_accounts: '儿童账号',
        business_overview: '业务总览',
        compare_business_pages: '比较业务页面',
        choose_who_can_teach: '选择谁可以授课',
        choose_who_can_manage: '选择谁可以管理',
        track_pay_and_performance: '追踪薪酬与表现',
        affiliate_portal: 'Affiliate 入口网站',
        portal_register: '入口网站注册',
        portal_members: '入口网站成员',
        portal_ranks: '入口网站段位',
        portal_cards: '入口网站会员卡',
        portal_reports: '入口网站报表',
        schedule_overview: '课程总览',
        create_a_lesson: '创建课程',
        edit_or_cancel_a_lesson: '编辑或取消课程',
        book_for_students: '代学员预约',
        cards_overview: '会员卡总览',
        how_cards_work: '会员卡如何运作',
        create_a_card_template: '创建卡模板',
        issue_cards: '发卡',
        edit_templates: '编辑模板',
        delete_templates: '删除模板',
        delete_cards: '删除会员卡',
        card_records: '争议',
        members_overview: '成员总览',
        add_a_member_directly: '直接添加成员',
        enrollment_vs_applications: '快速注册 vs 申请',
        review_applications: '审核申请',
        reject_or_ban_members: '拒绝或封禁成员',
        tools_overview: '工具总览',
        activate_tools_and_premium: '查看工具状态',
        timetable: '时间表',
        pause_cards: '暂停会员卡'
      }
    },
    welcome: {
      badge: '预览',
      title: '帮助指南 v2',
      intro: '这个版本围绕使用 DojoMate 的人来重建，而不只是围绕他们所在的某个界面。',
      who_title: '先从你的身份开始',
      owner_title: '我运营学院',
      owner_body: '如果你是馆主，需要查看设置、团队、会员卡、课程安排或工具帮助，请从这里开始。',
      owner_link: '打开馆主路径',
      admin_title: '我协助管理学院',
      admin_body: '如果你是协助处理课程、成员、会员卡或日常运营的员工，请从这里开始。',
      admin_link: '打开管理员路径',
      student_title: '我在学院训练',
      student_body: '如果你是学员、家长或学院成员，正在寻找账号、预约或会员资格帮助，请从这里开始。',
      student_link: '打开学员路径',
      jobs_title: '或直接进入任务',
      cards_title: '设置会员卡',
      cards_body: '先了解会员卡如何支持预约，再创建模板并发卡。',
      cards_link: '打开会员卡总览',
      members_title: '添加和管理成员',
      members_body: '把人带进学院，审核申请，并处理状态变化。',
      members_link: '打开成员总览',
      tools_title: '使用付费工具',
      tools_body: '在核心流程稳定后再加入重复排课、暂停会员卡等工具，并在需要时通过功能页面启用高级方案。',
      tools_link: '打开工具总览',
      difference_title: 'v2 有什么不同',
      difference_body: 'v2 按照“人”和“要完成的任务”来组织，因此更容易判断下一步该做什么。',
      difference_v1: '如果你更喜欢带搜索的经典指南，请打开帮助 v1',
      difference_start: '从这里开始'
    },
    owner_home: {
      badge: '馆主',
      title: '我运营学院',
      intro: '这一路径适合正在设置学院、建立团队并处理日常运营的馆主。',
      start_title: '最好的起点',
      start_body: '如果你正在设置一个新学院，请先从馆主设置路径开始。它按最实用的顺序组织，能让应用后续流程更容易理解。',
      start_primary: '馆主快速开始',
      start_secondary: '创建学院',
      setup_title: '学院设置',
      setup_create_title: '创建学院',
      setup_create_body: '先把学院本身建立好，再去引入成员或创建课程。',
      setup_review_title: '检查基础信息和二维码',
      setup_review_body: '保持学院资料准确，并在想要更快入门时使用二维码加入。',
      setup_lifecycle_title: '学院生命周期',
      setup_lifecycle_body: '只有在学院本身不再需要保留时，才使用删除指南。',
      jobs_title: '主要任务',
      jobs_team_title: '设置你的团队',
      jobs_team_body: '决定谁负责授课、谁可以管理学院，以及薪酬工具如何配合使用。',
      jobs_team_link: '打开业务',
      jobs_schedule_title: '运行课程与预约',
      jobs_schedule_body: '创建课程、处理变更，并在需要时协助预约。',
      jobs_schedule_link: '打开 Schedule',
      jobs_cards_title: '设置会员卡与成员',
      jobs_cards_body: '把人带进学院、发卡，并让预约正确扣减课次。',
      portal_title: '入口网站工作流',
      portal_body: '有些流程发生在 Source Combatives Affiliate Portal，而不是日常 DojoMate 应用界面里。',
      portal_link: '打开 Affiliate 入口网站指南',
      paid_title: '付费功能',
      paid_body: '时间表、暂停会员卡、员工访问和分析都受权限控制。如果你需要启用工具或开始高级方案，请查看功能页面指南。',
      paid_link: '启用工具与高级方案'
    },
    owner_setup: {
      getting_started: {
        badge: '快速开始',
        title: '按正确顺序设置你的学院',
        intro: '如果你是从零开始，这个页面会给你最简单的顺序，让应用后续流程更容易理解。',
        order_title: '推荐顺序',
        order_items: [
          '创建你的学院。',
          '把成员带进学院。',
          '创建会员卡模板。',
          '向活跃成员发卡。',
          '设置讲师和员工访问权限。',
          '创建第一节课程。',
          '准备好之后再添加付费工具。Affiliate 入口网站提供 90 天免费高级方案试用，所有工具都会解锁。'
        ],
        why_title: '为什么这个顺序有帮助',
        why_items: [
          '成员必须先存在，你才能给他们发卡。',
          '卡片必须先存在，预约才能正常运作。',
          '在开始创建课程之前，应先把讲师设置好。',
          '在学院核心流程已经运转后，再加入付费工具效果最好。'
        ],
        start_title: '如果你不确定，就从这里开始',
        create_link: '创建学院',
        members_link: '带入成员',
        cards_link: '设置会员卡'
      },
      create: {
        badge: '馆主',
        title: '创建你的学院',
        intro: '这是馆主的第一步。在你引入成员、发卡或开始创建课程之前，先创建学院。',
        before_title: '创建之前',
        before_items: [
          '先确认学院是否已经存在，避免创建重复项。',
          '从一开始就准备好选择正确的学院货币。'
        ],
        steps_title: '步骤',
        steps_items: [
          '打开创建学院流程。',
          '认真填写学院信息。',
          '选择正确的货币。',
          '提交表单以创建学院。'
        ],
        next_title: '下一步',
        next_body: '学院创建完成后，下一项常见工作是检查学院基础信息，然后把人带进学院。',
        back_link: '返回馆主路径',
        next_link: '前往学院基础设置'
      },
      basics: {
        badge: '馆主',
        title: '更新学院基础信息',
        intro: '使用这个页面保持学院资料准确，让成员和员工看到正确的学院信息。',
        use_title: '在这些情况下使用',
        use_items: [
          '学院信息需要更正或更新',
          '面向学院的信息已经发生变化',
          '你想检查学院对成员的展示方式'
        ],
        know_title: '需要知道的事',
        know_items: [
          '在扩大成员和会员卡规模之前，馆主应先保持学院基础信息是最新的。',
          '如果成员通过学院消息或入驻流程加入，准确的学院信息就很重要。'
        ],
        next_title: '下一步',
        back_link: '返回创建学院',
        next_link: '前往学院二维码'
      },
      qr: {
        badge: '馆主',
        title: '分享学院二维码',
        intro: '当你希望人们无需手动搜索学院、能够更快加入时，请使用学院二维码。',
        use_title: '最适合的场景',
        use_items: [
          '在学院现场入驻时',
          '活动、体验课或繁忙报名日',
          '需要让多人快速加入的场景'
        ],
        know_title: '需要知道的事',
        know_items: [
          '二维码路径通常比让大家手动搜索更快。',
          '当你想减少入驻过程中的加入错误时，它尤其有用。'
        ],
        next_title: '下一步',
        back_link: '返回学院基础设置',
        next_link: '带入成员'
      },
      delete: {
        badge: '馆主',
        title: '谨慎删除学院',
        intro: '这是学院生命周期中的一步，不是日常任务。只有当学院确实应该被移除时才使用。',
        before_title: '执行之前',
        before_items: [
          '先检查前置条件。',
          '确认你理解这会对当前成员产生什么影响。',
          '不要把删除学院当作普通清理工作的捷径。'
        ],
        meaning_title: '这意味着什么',
        meaning_body: '删除学院是一个严肃的馆主操作。只有当学院本身不应再继续保持活跃时才应该这样做。',
        help_title: '需要先求助吗？',
        help_body: '如果你不确定删除是否是正确做法，请在执行最后一步之前先到 DojoMate 帮助版块提问。',
        help_link: '打开 DojoMate 帮助版块',
        back_link: '返回馆主路径'
      }
    },
    admin_home: {
      badge: '管理员',
      title: '我协助管理学院',
      intro: '这一路径适合在馆主已经完成学院基础设置后，协助处理日常运营的员工。',
      jobs_title: '最常见的管理员任务',
      schedule_title: '处理课程任务',
      schedule_body: '创建课程、编辑变更，并在需要时帮助学员或家长预约。',
      schedule_link: '打开 Schedule',
      members_title: '管理成员和会员卡',
      members_body: '审核申请、直接注册成员，并发放会员卡。',
      delegated_title: '使用委派权限',
      delegated_body: '如果馆主已经为你启用管理员权限，你的日常任务可能包括课程、成员、会员卡，有时还包括工具。',
      delegated_link: '查看员工访问',
      know_title: '需要知道的事',
      know_items: [
        '大多数管理员主题都与馆主流程重叠，因此你不需要一棵完全独立的 wiki 树。',
        '如果你的账号里缺少某项功能，馆主可能需要先授予访问权限或启用所需工具。'
      ],
      compare_link: '比较 Business 页面',
      tools_link: '查看工具状态'
    },
    business: {
      overview: {
        badge: 'Business',
        paid_badge: '付费',
        title: '处理学院的业务侧工作',
        intro: 'Business 区域帮助你设置团队、决定谁可以管理学院，并查看薪酬与表现工具。',
        start_title: '先从你要完成的工作开始',
        cards: [
          {
            title: '选择谁可以授课',
            body: '使用讲师设置决定哪些人可以被安排到课程中。',
            cta: '打开讲师设置指南',
            link: '/help-v2/business/instructors'
          },
          {
            title: '选择谁可以管理学院',
            body: '使用员工访问授予或更新管理员访问权限。',
            cta: '打开员工访问指南',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: '追踪薪酬、时间与表现',
            body: '使用 Analytics 处理薪酬、报表、工时单和与工资相关的工具。',
            cta: '打开 Analytics 指南',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '这些 Business 页面处理的是不同工作，因此最好先选择与你目标最匹配的页面。',
          '如果你正在设置一所新学院，先从决定谁来授课开始。',
          '如果你不确定从哪里开始，团队设置的最佳第一步是讲师设置，然后是员工访问，最后是 Analytics。'
        ],
        compare_link: '比较 Business 页面',
        next_title: '下一步',
        next_body: '如果你正在设置教学团队，就先从“选择谁可以授课”开始。',
        next_link: '前往选择谁可以授课'
      },
      compare: {
        badge: 'Business',
        paid_badge: '付费',
        title: '讲师设置、员工访问和 Analytics',
        intro: '这三个 Business 页面支持不同的工作。当你不确定哪一个最适合当前任务时，就使用这个页面。',
        pick_title: '按工作选择页面',
        cards: [
          {
            title: '讲师设置',
            body: '当你需要决定谁可以授课时，请使用这个页面。',
            items: [
              '把某人加入员工列表',
              '开启讲师状态',
              '为排课准备教学团队'
            ],
            cta: '打开讲师设置',
            link: '/help-v2/business/instructors'
          },
          {
            title: '员工访问',
            body: '当某人需要帮助管理学院时，请使用这个页面。',
            items: [
              '把成员提升为管理员',
              '查看访问范围',
              '之后移除管理员权限'
            ],
            cta: '打开员工访问',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: 'Analytics',
            body: '当你想查看业务数据、薪酬设置或时间记录时，请使用这个页面。',
            items: [
              '查看报表',
              '设置薪酬',
              '检查工时单和工资相关工具'
            ],
            cta: '打开 Analytics',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        rules_title: '快速规则',
        rules_items: [
          '在 Analytics 中修改薪酬并不会让某人成为讲师。',
          '给某人管理员权限同样不会让他们成为讲师。',
          '如果某人既要授课又要管理，你可能需要在多个 Business 页面中设置他。'
        ],
        start_title: '如果你还在判断，从这里开始',
        start_body: '如果你的问题是“这个人能授课吗？”，先看讲师设置。若问题是“这个人能管理学院吗？”，去员工访问。若问题是“我去哪里查看薪酬或报表？”，去 Analytics。',
        instructors_link: '讲师设置',
        staff_access_link: '员工访问',
        analytics_link: 'Analytics'
      },
      instructors: {
        badge: 'Business',
        title: '选择谁可以授课',
        intro: '使用 Business → 讲师设置决定哪些人可以被安排到课程中。',
        before_title: '开始前',
        before_items: [
          '在你创建课程之前，至少需要一名讲师。',
          '如果馆主自己也授课，大多数人会先把自己加进去。',
          '这个人应该已经作为学院成员存在。'
        ],
        steps_title: '步骤',
        steps_items: [
          '打开 Business → 讲师设置。',
          '点击 Choose Member。',
          '选择你想添加的人。',
          '点击 Add to Staff。',
          '如果这个人要授课，就打开 instructor 开关。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '添加后，被选中的人会出现在员工列表中。',
          '如果 instructor 开关保持关闭，这个人只能作为助教可用。',
          '在 Analytics 中修改薪酬并不会让某人成为讲师。'
        ],
        mistake_title: '常见错误',
        mistake_body: '如果某人还需要管理学院，那是另一个单独的设置步骤。授课权限和管理员权限不是一回事。',
        compare_link: '比较 Business 页面',
        next_title: '下一步',
        next_body: '在教学团队设置好之后，下一个常见任务就是决定谁还应该拥有管理员权限。',
        back_link: '返回 Business 总览',
        next_link: '前往员工访问'
      },
      staff_access: {
        badge: 'Business',
        paid_badge: '付费工具',
        title: '选择谁可以管理学院',
        intro: '使用 Business → 权限设置为团队授予或更新管理员访问权限。',
        use_title: '在以下情况使用这个页面',
        use_items: [
          '某人需要帮助管理课程、成员、会员卡或 timetable 工作',
          '你需要把成员提升为管理员',
          '你想查看或移除管理员权限'
        ],
        steps_title: '步骤',
        steps_items: [
          '打开 Business → 权限设置。',
          '找到你想更新的人。',
          '如果他们显示为 Member，点击该行并按 Confirm，使其成为管理员。',
          '再次点击这个管理员来查看访问设置。',
          '选择你想要的访问设置，然后按 Confirm。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '两个徽章分别是 Member 和 Admin。',
          '权限设置控制的是管理员访问。它并不决定谁可以授课。',
          '当前访问区域包括 Schedule、成员、Cards 和 Timetable。',
          '这个功能受 entitlement 控制。如果工具未启用，委派给员工的权限不会生效。'
        ],
        mistake_title: '常见错误',
        mistake_body: '授予某人教学职责和授予某人管理员权限是两个独立步骤。教学角色用讲师设置，管理员角色用权限设置。',
        compare_link: '比较 Business 页面',
        remove_title: '移除管理员权限',
        remove_body: '如果某人不再需要管理学院，使用 Remove Admin 把他们恢复为 Member。',
        next_title: '下一步',
        next_body: '团队角色设置完成后，下一个常见任务是到 Analytics 中查看薪酬和报表工具。',
        back_link: '返回讲师设置',
        activate_link: '查看工具状态',
        compare_pages_link: '比较页面',
        next_link: '前往 Analytics'
      },
      analytics: {
        badge: 'Business',
        paid_badge: '付费工具',
        title: '追踪薪酬、时间与表现',
        intro: '使用 Business → Analytics 处理薪酬、报表、工时单和与工资相关的工具。',
        use_title: '在以下情况使用这个页面',
        use_items: [
          '你想查看学院指标和报表',
          '你需要录入或更新薪酬信息',
          '你需要查看工时单或员工打卡活动'
        ],
        covers_title: 'Analytics 涵盖的内容',
        cards: [
          {
            title: '报表',
            body: '查看实时数据、每周汇总、财务报表和与月度出勤相关的报表。'
          },
          {
            title: '薪酬',
            body: '设置薪资、时薪和私教课薪酬明细，让成本追踪更准确。'
          },
          {
            title: '时间和工资工具',
            body: '查看打卡卡片、办公时长和基于时间的员工记录审批流程。'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '在 Analytics 中修改薪酬并不会让某人成为讲师。',
          '如果某人需要授课，请在讲师设置中添加该角色。',
          '如果某人需要管理学院，请在权限设置中授予该权限。',
          '某些 Analytics 界面可能会被完全锁定，而另一些仍然可见，但会显示升级提示。'
        ],
        mistake_title: '常见错误',
        mistake_body: 'Analytics 不是决定授课角色或管理员角色的地方。它是查看业务数据和管理薪酬相关工具的地方。',
        compare_link: '比较 Business 页面',
        next_title: '下一步',
        next_body: '如果你还在设置团队，先完成授课角色和管理员角色设置。如果团队已经就绪，下一个常见任务就是创建课程，并让预约承担日常工作。',
        activate_link: '查看工具状态',
        instructors_link: '讲师设置',
        staff_access_link: '员工访问',
        next_link: '前往 Schedule'
      }
    },
    schedule: {
      overview: {
        badge: 'Schedule',
        title: '规划、运行并管理课程',
        intro: '使用 Schedule 区域创建课程、调整课程细节，并在需要时帮助学员预约。',
        start_title: '先从你要完成的工作开始',
        cards: [
          {
            title: '创建课程',
            body: '设置课程时间、讲师、可用会员卡和预约规则。',
            cta: '打开创建课程指南',
            link: '/help-v2/schedule/create-lesson'
          },
          {
            title: '编辑、取消或删除课程',
            body: '更新课程细节，或让课程停止可预约状态。',
            cta: '打开管理课程指南',
            link: '/help-v2/schedule/manage-lesson'
          },
          {
            title: '代学员预约',
            body: '当学员或家长无法自己完成预约时，由管理员介入。',
            cta: '打开预约指南',
            link: '/help-v2/schedule/book-for-students'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '创建课程通常是排课的第一项任务。',
          '编辑、取消和删除都有时间规则，因此这些任务需要单独指南。',
          '管理员代预约最适合作为学员或家长无法自行完成预约时的后备方案。'
        ],
        before_title: '开始前',
        before_body: '确保你的教学团队已经设置好，这样在创建课程时正确的讲师才会可用。',
        before_link: '查看讲师设置'
      },
      create: {
        badge: 'Schedule',
        title: '创建课程',
        intro: '使用 Schedule 在你希望学员预约的那一天添加课程。',
        before_title: '开始前',
        before_items: [
          '在创建课程之前，你至少需要选择一名讲师。',
          '先选择正确的日期，因为 Schedule 默认打开的是今天。',
          '决定哪些会员卡应该被允许预约这节课。'
        ],
        steps_title: '步骤',
        steps_items: [
          '打开 Schedule 并移动到你想要的日期。',
          '点击 Create Lesson。',
          '输入课程名称、日期和开始/结束时间。',
          '选择课程类型和允许的会员卡。',
          '至少选择一名讲师，如有需要再添加助教讲师。',
          '设置容量、最低开课人数和预约截止时间等规则。',
          '点击 Create Lesson。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '预约使用的会员卡必须匹配课程类型，例如团课或私教课。',
          '如果你安排了重叠课程，教室就会变得重要。',
          '管理员通常比学员更容易突破常规限制进行预约，但学员仍然受截止时间和容量规则限制。'
        ],
        mistake_title: '常见错误',
        mistake_body: '如果预约截止时间设置得太短，当课程临时取消时容易让学员感到困惑。如果你想要更顺畅的沟通，请设置更长的截止窗口。',
        next_title: '下一步',
        next_body: '课程创建完成后，接下来最常见的工作是调整课程细节或帮助学员预约进入课程。',
        manage_link: '编辑或取消课程',
        booking_link: '代学员预约'
      },
      manage: {
        badge: 'Schedule',
        title: '编辑、取消或删除课程',
        intro: '使用课程详情页面更新课程信息，或让课程停止可预约状态。',
        open_title: '如何打开课程',
        open_items: [
          '打开 Schedule。',
          '选择正确的日期。',
          '点击课程本身，而不是预约按钮。'
        ],
        actions_title: '每个操作的作用',
        actions_items: [
          'Edit：更新课程细节，然后保存更改。',
          'Cancel：取消当前成员的预约，并阻止新的预约。',
          'Delete：在课程已取消后，将其彻底删除。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '一旦超过预约截止时间，你就不能再编辑课程。',
          '已经开始的课程不能被取消或删除。',
          '如果课程是误创建的，先取消，再删除。'
        ],
        mistake_title: '常见错误',
        mistake_body: '人们经常点进预约流程，而实际上他们需要的是课程详情页面。如果你想编辑或取消课程，请打开课程卡片本身。',
        next_title: '下一步',
        next_body: '如果课程仍然保持有效，接下来最常见的任务就是帮助学员预约进去。',
        back_link: '返回创建课程',
        next_link: '前往预约'
      },
      booking: {
        badge: 'Schedule',
        title: '在需要时代学员预约',
        intro: '最理想的是由学员或家长自行预约，但如果有人忘记、错过截止时间或需要帮助，管理员可以介入。',
        steps_title: '步骤',
        steps_items: [
          '打开 Schedule 并选择课程日期。',
          '打开课程，然后进入 Booking。',
          '点击添加成员。',
          '选择你想预约的成员。',
          '从他们可用的有效会员卡中选择一张。',
          '按 Confirm。'
        ],
        unbook_title: '为学员取消预约',
        unbook_items: [
          '打开该课程的出勤列表。',
          '点击已预约的成员。',
          '点击蓝色的已预约卡片，直到它变成灰色。',
          '按 Confirm。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '管理员通常比学员拥有更大的预约自由度，尤其是在截止时间或容量规则方面。',
          '成员仍然必须拥有一张对此课程有效且被允许的活动会员卡。',
          '已经结束的课程不能被预约或取消预约。'
        ],
        mistake_title: '常见错误',
        mistake_body: '如果正确的会员卡没有出现，可能是这节课限制了不同的卡类型，而该成员当前持有的是其他活动卡。',
        next_title: '下一步',
        next_body: '如果预约规则不断引发问题，请回头检查课程设置并调整课程，而不是反复手动覆盖。',
        create_link: '查看创建课程',
        manage_link: '查看管理课程'
      }
    },
    cards: {
      overview: {
        badge: '会员卡',
        title: '使用会员卡支持预约',
        intro: '主卡片流程很简单：创建卡、发卡，然后让预约自动扣减课次。',
        start_title: '先从你要完成的工作开始',
        cards: [
          {
            title: '了解预约流程',
            body: '了解会员卡如何参与预约、课次扣减和报表。',
            cta: '打开预约流程指南',
            link: '/help-v2/cards/how-booking-works'
          },
          {
            title: '创建卡模板',
            body: '设置卡名称、费用、课次数、到期时间和课程类型。',
            cta: '打开创建模板指南',
            link: '/help-v2/cards/create-template'
          },
          {
            title: '为成员发卡',
            body: '使用你的模板为成员分配一张有效会员卡。',
            cta: '打开发卡指南',
            link: '/help-v2/cards/issue-cards'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '模板在前。卡模板存在之前，你不能发卡。',
          '会员卡的主要作用是支持预约和自动扣课。',
          '当卡用完或过期时，在发下一张卡前先删除当前有效卡。',
          '偶尔遇到特殊情况时，你可以手动调整有效卡。最常见的用法是延长到期时间，尤其是在你没有使用会员卡暂停的情况下。'
        ],
        support_title: '支持性工作流',
        support_templates_title: '编辑或停用模板',
        support_templates_body: '当模板需要修正，或不再应该继续提供时，请使用这些页面。',
        edit_templates_link: '编辑模板',
        delete_templates_link: '删除模板',
        support_cleanup_title: '清理已结束的卡',
        support_cleanup_body: '当有效卡已用完、已过期或即将被替换时，删除或取消它。',
        delete_cards_link: '删除卡',
        support_records_title: '查看卡片历史',
        support_records_body: '当你需要查看历史、状态，或跟进异常卡状态时，请使用记录页面。',
        records_link: '卡片记录'
      },
      flow: {
        badge: '会员卡',
        title: '会员卡如何与预约协作',
        intro: '会员卡主要用于预约课程。学员预约后，课次会自动扣减，系统也会根据真实预约活动进行计算。',
        normal_title: '正常流程',
        normal_items: [
          '创建卡模板。',
          '把卡发给成员。',
          '成员使用这张卡预约课程。',
          '课次通过预约课程自动扣减。',
          '当卡的课次归零或到期时间结束时，删除当前有效卡。',
          '成员续费时再发新卡。'
        ],
        why_title: '为什么这很重要',
        why_items: [
          '会员卡应该清晰且可预测地支持课程预约。',
          '只有通过预约课程扣减的课次，才会计入 Analytics 财务报表。',
          '同一成员不能同时持有同一模板的两张有效卡。'
        ],
        next_title: '下一步',
        create_link: '创建卡模板',
        issue_link: '发卡'
      },
      create_template: {
        badge: '会员卡',
        title: '创建会员卡模板',
        intro: '使用会员卡 → 创建会员卡模板创建你的学院会发放的会员卡类型。',
        before_title: '开始前',
        before_items: [
          '先决定这张卡是用于团课还是私教课。',
          '决定卡内应包含多少节课。',
          '如果你想要无限次会员卡，先规划好时间周期。无限次卡仍然使用到期时段。',
          '沿用学院现有的学费和货币逻辑。'
        ],
        steps_title: '步骤',
        steps_items: [
          '打开会员卡 → 创建会员卡模板。',
          '输入成员和管理员都能轻松识别的卡名称。',
          '输入费用和可选描述。',
          '设置总课次数和到期天数。',
          '如果是无限次卡，把 Total Sessions 保存为 -1，而不是 0。',
          '选择这张卡适用于 Group 课程还是 Private 课程。',
          '保存模板。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '课程类型决定这张卡能预约哪些课程。',
          '保存为 Total Sessions = -1 的卡，在有效期内可以无限预约。',
          '团课和私教课通常每节价格不同，讲师薪酬也可能不同。',
          '卡名称应该保持清晰稳定，因为之后预约和发卡时人们还会看到它。'
        ],
        mistake_title: '常见错误',
        mistake_body: '如果预约时这张卡没有出现，请检查卡类型是否与课程类型匹配。这是有意设计的，这样团课卡不会误用于私教课，私教卡也不会误用于团课。',
        next_title: '下一步',
        next_body: '模板创建好之后，下一个常见任务就是把这张卡发给一位或多位成员。',
        back_link: '返回会员卡总览',
        next_link: '前往发卡'
      },
      issue: {
        badge: '会员卡',
        title: '发放会员卡',
        intro: '使用会员卡 → 发放会员卡为一位或多位成员发放一张有效卡。',
        steps_title: '步骤',
        steps_items: [
          '打开会员卡 → 发放会员卡。',
          '选择你要发放的卡模板。',
          '选择一位或多位成员。',
          '检查已选成员。',
          '按 Confirm 发卡。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '新近被接受的成员可能会排在更靠前的位置，方便发卡。',
          '已经持有该模板有效卡的成员会以不同方式显示，方便你发现重复。',
          '同一成员不能同时持有同一模板的两张有效卡。'
        ],
        mistake_title: '常见错误',
        mistake_body: '如果成员是在续同一张卡，先删除旧的有效卡，再发新的。',
        next_title: '下一步',
        next_body: '发卡后，正常的下一步就是使用这张卡去预约课程。',
        back_link: '返回模板',
        next_link: '会员卡如何运作'
      },
      edit_template: {
        badge: '会员卡',
        title: '编辑卡模板',
        intro: '当模板已经存在，而你需要更新它未来使用的设置时，请使用这个页面。',
        use_title: '在以下情况使用这个页面',
        use_items: [
          '模板设置需要被修正',
          '费用、课次数、到期时间或课程类型设置需要变更',
          '你想在不新建模板的情况下调整未来发卡行为'
        ],
        know_title: '需要知道的事',
        know_items: [
          '模板名称在创建后会被锁定。',
          '变更应谨慎保存，因为它们会影响模板之后的行为。',
          '如果变化已经大到足以代表一个完全不同的会员产品，那么新建一个模板通常会更清晰。'
        ],
        next_title: '下一步',
        back_link: '返回创建模板',
        next_link: '发卡'
      },
      delete_template: {
        badge: '会员卡',
        title: '删除卡模板',
        intro: '当模板不应再存在，并且不再与有效卡绑定时，请使用这个页面。',
        before_title: '删除前',
        before_items: [
          '检查模板是否仍然与有效卡绑定。',
          '如果仍有有效卡依赖它，就需要先完成清理。'
        ],
        know_title: '需要知道的事',
        know_body: '删除模板是一种清理工作流。它应该用于某个会员产品真正退役时，而不是因为单个成员正在续费。',
        next_title: '下一步',
        back_link: '返回模板',
        next_link: '会员卡总览'
      },
      delete_card: {
        badge: '会员卡',
        title: '删除或取消一张有效卡',
        intro: '当一张有效卡已经走到生命周期末尾，或不应再对该成员保持有效时，请使用这个页面。',
        use_title: '最常见的用途',
        use_items: [
          '卡已过期或已完全用完',
          '成员正在续费，需要发一张新的有效卡',
          '这张卡需要被取消并正确记录，然后再继续下一步'
        ],
        know_title: '需要知道的事',
        know_items: [
          '过期卡通常会按默认清理路径被删除。',
          '同一成员不能同时持有同一模板的两张有效卡。',
          '如果你取消一张卡，请填写所需原因，并让卡片历史保持可见。'
        ],
        next_title: '下一步',
        next_body: '清理完成后，只有当成员确实继续新的有效会员资格时，才发下一张卡。',
        back_link: '返回发卡',
        next_link: '会员卡总览'
      },
      disputes: {
        badge: '会员卡',
        title: '查看卡片记录',
        intro: '当你需要历史、状态可见性，或跟进异常卡状态时，请使用卡片记录。',
        review_title: '你可以查看的内容',
        review_items: [
          '当前卡',
          '已发卡',
          '已取消卡',
          '与欠费相关的卡状态'
        ],
        when_title: '什么时候最有帮助',
        when_items: [
          '你需要弄清某一张卡发生了什么',
          '你正在检查一张卡是否被取消、结清或清理',
          '你正在跟进一笔债务或记录差异'
        ],
        know_title: '需要知道的事',
        know_body: '卡片记录主要是查看和审计工作流。正常的日常卡流程仍然是：创建模板、发卡、预约课程，然后在卡结束时清理它。'
      }
    },
    members: {
      overview: {
        badge: '成员',
        title: '让人加入你的学院并管理成员状态',
        intro: '使用成员区域处理系统中的“人”这一面：添加成员、审核申请，以及管理已接受、已拒绝或已封禁状态。',
        start_title: '先从你要完成的工作开始',
        cards: [
          {
            title: '直接添加成员',
            body: '当你想直接为某人注册，而不是等待正常申请流程时，使用 quick enrollment。',
            cta: '打开快速注册',
            link: '/help-v2/members/quick-enrollment'
          },
          {
            title: '审核学院申请',
            body: '接受或拒绝通过 Join Academy 提交申请的人。',
            cta: '打开学院申请',
            link: '/help-v2/members/applications'
          },
          {
            title: '拒绝或封禁某人',
            body: '当某位成员不应再继续保持活跃状态时，管理其状态变化。',
            cta: '打开拒绝或封禁成员',
            link: '/help-v2/members/reject-or-ban'
          }
        ],
        know_title: '需要知道的事',
        know_items: [
          '快速注册和学院申请是进入学院的两条不同路径。',
          '为整个学院完成入驻需要时间，因此从长期看，最轻松的方式通常是让成员自己创建账号并自行添加你的学院。',
          '一旦成员处于活跃状态，下一步最常见的工作就是在 DojoMate 中发放会员卡。',
          '儿童账号可能需要额外审核步骤，尤其当涉及家长账号时。'
        ],
        compare_title: '不确定该选哪条路径？',
        compare_body: '如果你在犹豫是自己创建账号，还是让成员自己申请加入，请先查看比较页面。',
        compare_link: '比较两种成员流程'
      },
      quick: {
        badge: '成员',
        title: '直接添加成员',
        intro: '当你想直接为某人注册，而不是等待正常的 Join Academy 申请流程时，请使用快速注册。',
        when_title: '何时使用',
        when_items: [
          '你正在现场为某人办理入驻',
          '你想直接创建账号',
          '你正在为家长注册，并希望在同一流程中创建多个儿童账号',
          '成员不擅长技术，你想替他们设置账号',
          '你想通过邮箱添加一个已有的 DojoMate 账号'
        ],
        path_title: '先选最轻松的路径',
        path_body_1: '如果你的学院正在增长，长期来看，最轻松的方式通常是让成员自己创建账号并自行添加你的学院。',
        path_body_2: '快速注册最适合那些需要额外帮助，或不太可能自己完成设置的人。',
        steps_title: '步骤',
        steps_items: [
          '打开 Affiliate Portal，并使用你的 DojoMate 邮箱和密码登录。',
          '打开 Register。',
          '输入成员的真实邮箱，并创建一个临时密码。',
          '选择该账号是学员账号还是家长账号。',
          '如果你选择家长，继续进入儿童账号设置流程。',
          '检查信息并按 Confirm。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '快速注册会跳过正常的待处理和已接受申请流程。',
          '这个流程对家长特别有用，因为你可以在同一次注册操作中创建多个儿童账号。',
          '创建账号时可以保存一个简单的临时密码。成员之后可以登录并修改它。',
          '有些成员可能永远不会自己登录，如果你在代管他们的账号，这也没有问题。',
          '新注册完成的成员在设置好之后，仍然可以通过 app 获得会员卡。',
          '如果这个人已经有 DojoMate 账号，请通过邮箱添加，而不是创建重复账号。'
        ],
        compare_title: '需要帮助决定是否使用这个流程？',
        compare_link: '比较快速注册和申请',
        next_title: '下一步',
        next_body: '当账号进入学院后，下一步最常见的工作就是发放会员卡。',
        back_link: '返回成员总览',
        next_link: '前往发卡'
      },
      compare: {
        badge: '成员',
        title: '在快速注册和申请之间选择',
        intro: '这两条流程都会把人带入学院，但它们适用于不同的场景。',
        quick_title: '在这些情况下使用快速注册',
        quick_items: [
          '你想自己创建账号',
          '这个人需要帮助完成设置',
          '这个人不擅长技术',
          '你正在为一位家长和多个儿童账号一起注册'
        ],
        quick_link: '打开快速注册',
        apps_title: '在这些情况下使用申请',
        apps_items: [
          '你希望成员自己创建账号',
          '你希望学院在不由馆主手动创建每一个账号的情况下也能扩展',
          '成员可以自己完成 Join Academy 流程'
        ],
        apps_link: '打开学院申请',
        rule_title: '简单规则',
        rule_body: '只要可能，就让成员自己创建账号。当他们需要额外帮助，或者你想直接处理注册时，再使用快速注册。'
      },
      applications: {
        badge: '成员',
        title: '审核学院申请',
        intro: '当有人通过 Join Academy 申请加入，而你需要接受或拒绝他们时，使用这个流程。',
        steps_title: '步骤',
        steps_items: [
          '打开成员 → 添加 / 拒绝成员。',
          '查看待处理申请列表。',
          '在申请人上按 Accept 或 Reject。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '如果没有出现待处理账号，这个人可能没有正确提交申请。',
          '他们可能需要重新扫描学院二维码，或重新搜索你的学院名称。',
          '关联的儿童账号可能需要通过家长资料页完成额外的接受步骤。'
        ],
        why_title: '为什么使用 applications？',
        why_body: '当你希望成员自己创建账号并自行添加你的学院时，这是一条更适合长期使用的路径。',
        compare_link: '比较申请和快速注册',
        mistake_title: '常见错误',
        mistake_body: '如果儿童账号没有马上出现，要么是它们还没有被正确创建，要么列表没有刷新。让家长完成儿童设置，或刷新 app 视图。',
        next_title: '下一步',
        next_body: '当你接受某人进入学院后，下一步最常见的工作就是发放他们的会员卡。',
        back_link: '返回成员总览',
        next_link: '前往发卡'
      },
      reject: {
        badge: '成员',
        title: '在需要时拒绝或封禁成员',
        intro: '当某人不应再继续作为学院活跃成员时，请使用这个流程。',
        reject_title: '拒绝如何运作',
        reject_items: [
          '从成员 → 成员列表打开该成员的资料。',
          '按 Reject 将他们从学院中移除。',
          '如果成员仍有有效卡，就必须先清理后才能拒绝。'
        ],
        ban_title: '封禁如何运作',
        ban_items: [
          '被拒绝的成员会出现在成员 → 已拒绝列表中。',
          '从那里你可以重新接受他们，或将他们封禁。',
          '被封禁的成员不能再通过 Join Academy 重新申请。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '先移除有效卡，是拒绝之前正常清理流程的一部分。',
          '如果你之后想撤销封禁，请前往 Banned List 并使用 Remove Ban。'
        ],
        next_title: '下一步',
        back_link: '返回成员总览',
        next_link: '查看 Cards 工作流'
      }
    },
    account: {
      sign_in: {
        badge: '账号',
        title: '登录你的账号',
        intro: '当你的账号已经存在，并且你想访问学院、预约、会员卡和记录时，请使用登录。',
        need_title: '你需要什么',
        need_items: ['你的邮箱地址', '你的密码'],
        trouble_title: '如果无法登录',
        trouble_items: [
          '检查邮箱和密码是否正确',
          '需要时使用重置密码',
          '如果界面看起来不熟悉，检查语言选择器'
        ],
        next_title: '下一步',
        back_link: '返回学员路径',
        next_link: '重置密码'
      },
      create: {
        badge: '账号',
        title: '创建账号',
        intro: '在加入学院、预约课程或使用应用其余功能之前，请先创建账号。',
        path_title: '选择正确的路径',
        path_items: [
          '如果你是在训练或加入学院，选择 member/student 路径',
          '如果你是在设置或管理学院，选择 admin/owner 路径'
        ],
        need_title: '你需要什么',
        need_items: ['一个有效邮箱地址', '一个符合应用规则的密码'],
        next_title: '下一步',
        back_link: '返回登录',
        next_link: '加入学院'
      },
      reset: {
        badge: '账号',
        title: '重置密码',
        intro: '当你记不起密码，或当前密码已不再可用时，请使用这个流程。',
        how_title: '它如何运作',
        how_items: [
          '从登录界面发起重置',
          '检查与你的 DojoMate 登录绑定的邮箱',
          '邮件到达后，打开重置链接'
        ],
        email_title: '如果邮件没有到达',
        email_items: [
          '检查垃圾邮件或广告邮件',
          '确认你输入的是正确邮箱',
          '再发送一次重置请求'
        ]
      },
      troubleshooting: {
        badge: '账号',
        title: '账号故障排查',
        intro: '当常见的登录或注册问题阻止你进入账号时，请使用这个页面。',
        signin_title: '无法登录',
        signin_items: [
          '仔细检查邮箱和密码',
          '必要时重置密码',
          '确认设备已联网'
        ],
        email_title: '邮箱已被使用',
        email_body: '这通常意味着账号已经存在，你应该登录或重置密码，而不是创建第二个账号。',
        role_title: '角色混淆',
        role_body: '如果你的角色发生变化，或者账号表现和预期不一致，请先检查你是否使用了正确的账号和学院身份。'
      }
    },
    settings: {
      password: {
        badge: '设置',
        title: '修改密码',
        intro: '当你仍然知道当前密码，并想在账号设置中更新它时，请使用这个页面。',
        know_title: '需要知道的事',
        know_items: [
          '这和重置密码不同。修改密码意味着你已经能进入账号。',
          '如果你完全无法登录，请改用重置密码。'
        ]
      },
      language: {
        badge: '设置',
        title: '更改应用语言',
        intro: '当你希望应用以另一种受支持语言显示时，请使用语言设置。',
        know_title: '需要知道的事',
        know_body: '如果某个界面很难理解，检查语言设置往往是最快的修复方式之一。'
      },
      currency: {
        badge: '设置',
        title: '选择货币显示方式',
        intro: '使用货币设置来控制应用中金额的显示方式。',
        know_title: '需要知道的事',
        know_items: [
          '成员最关心的是能清楚地看到正确金额。',
          '馆主也可能会关心学院侧财务设置和一致性。'
        ]
      },
      privacy: {
        badge: '设置',
        title: '查看隐私设置',
        intro: '使用隐私设置来理解并控制通知、营销、排行榜、公开资料、预约和分析相关数据是如何被处理的。',
        main_title: '主要隐私区域',
        main_items: [
          '通知',
          '营销',
          '排行榜参与',
          '公开资料访问',
          '与预约相关的设置',
          '出勤和汇总分析数据'
        ],
        progression_title: '与进度相关的控制',
        progression_items: [
          '排行榜参与和公开资料访问是分开的控制项。',
          '关闭排行榜参与会把账号排除在排名之外。',
          '关闭公开资料访问并不会自动把账号从所有允许的展示面移除。',
          '营销控制与进度、排行榜和公开资料控制是分开的。'
        ],
        child_title: '儿童与受抚养账号',
        child_body: '儿童和受抚养记录不会参与进度、排行榜、公开进度资料以及个性化营销。',
        know_title: '需要知道的事',
        know_body: '这个页面的重点是理解和管理隐私选择，而不仅仅是打开或关闭消息。'
      },
      delete: {
        badge: '设置',
        title: '谨慎删除你的账号',
        intro: '删除账号是一个严肃操作。只有当你真的想关闭整个账号时才这样做，而不是仅仅离开一所学院。',
        before_title: '在你这样做之前',
        before_items: [
          '先检查验证规则',
          '查看哪些情况会阻止删除',
          '考虑儿童账号以及相关儿童会员卡关系'
        ],
        know_title: '需要知道的事',
        know_body: '删除整个账号和离开一项学院会员资格不是一回事。如果账号仍应保持活跃，请使用会员资格相关流程。'
      },
      logout: {
        badge: '设置',
        title: '退出登录',
        intro: '当你在当前设备上已经使用完应用，或想切换到另一个账号时，请使用退出登录。'
      }
    },
    profile: {
      edit: {
        badge: '资料',
        title: '编辑你的资料',
        intro: '当你的个人资料信息需要更新时，请使用这个页面。',
        know_title: '需要知道的事',
        know_items: [
          '根据账号的使用方式，不同用户可能会看到与角色相关的上下文。',
          '修改完成后，请提交表单以保存更新。'
        ]
      },
      children: {
        badge: '资料',
        title: '管理儿童账号',
        intro: '当父母或监护人需要为儿童创建、编辑或管理账号时，请使用儿童账号功能。',
        do_title: '你可以做什么',
        do_items: [
          '创建儿童账号',
          '编辑儿童账号信息',
          '在合适的时候移除儿童账号'
        ],
        know_title: '需要知道的事',
        know_body: '由父母管理的账号关系会影响其他流程，例如加入学院和会员资格处理。'
      }
    },
    student: {
      join: {
        badge: '学员',
        title: '加入学院',
        intro: '当你想把账号连接到某个学院，并开始在应用中使用该学院时，请使用这个流程。',
        find_title: '寻找学院的方式',
        find_items: [
          '使用 Discover Academy 在应用内浏览学院',
          '如果你想直接搜索或扫描学院二维码，请使用 Search Academy'
        ],
        steps_title: '步骤',
        steps_items: [
          '从 Academy 区域打开 Discover Academy。',
          '浏览学院列表。',
          '打开某个学院查看详情。',
          '查看学院信息和图片集。',
          '确认这就是你要找的学院。',
          '申请加入。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '当你想先比较几所学院再加入时，Discover Academy 很有用。',
          'Search Academy 是用于搜索和二维码扫描的直接入口。',
          '家长在加入时可能还需要考虑儿童账号。'
        ],
        next_title: '下一步',
        back_link: '返回学员路径',
        next_link: '管理会员资格'
      },
      home: {
        badge: '学员',
        title: '我在学院训练',
        intro: '这一路径适合需要账号、预约和会员资格帮助的学员、家长和学院成员。',
        section_1: '加入学院并管理访问',
        join_link: '加入学院',
        memberships_link: '管理会员资格',
        section_2: '预约、记录与学院更新',
        booking_link: '预约课程',
        attendance_link: '出勤记录',
        broadcast_link: 'Broadcast',
        alerts_link: '系统提醒',
        section_3: '账号帮助',
        sign_in_link: '登录',
        create_account_link: '创建账号',
        reset_password_link: '重置密码',
        troubleshooting_link: '账号故障排查',
        change_password_link: '修改密码',
        child_accounts_link: '儿童账号',
        still_need_title: '还需要别的帮助？',
        still_need_body: '部分更专门的主题在学员路径继续重建期间，可能仍然保留在帮助 v1 中。',
        still_need_link: '打开帮助 v1'
      },
      broadcast: {
        badge: '学员',
        title: '在应用中阅读学院 Broadcast',
        intro: '在应用中使用 Broadcast 阅读学院更新和训练贴文。这是一个以阅读为主的学院沟通信息流，不是聊天、评论或回复。',
        where_title: '在哪里找到它',
        where_items: [
          '在成员端打开学院菜单，然后点击 Broadcast。',
          '当前图标是喇叭。',
          'Broadcast 跟随当前选定的学院，因此请先选择学院。'
        ],
        actions_title: '你可以做什么',
        actions_items: [
          '在 Updates 和 Training 标签之间切换。',
          '下拉刷新信息流。',
          '阅读广播文字和图片说明。',
          '点击图片可全屏查看，点击空白处关闭。'
        ],
        screen_title: '界面上会看到什么',
        screen_items: [
          '标题：Broadcast',
          '顶部显示当前选定学院名称',
          '标签：Updates 和 Training',
          '每张卡片可显示作者名称，或回退为 Academy Admin',
          '发布时间和日期',
          '正文、缩略图和可选图片说明'
        ],
        limits_title: '空状态与当前限制',
        limits_items: [
          '如果尚未选择学院，你可能会看到 Select an academy first。',
          '空信息流可能显示 Updates coming soon 或 No visible broadcasts are available in this stream yet.',
          '当前成员端 Broadcast 信息流是只读的。',
          '没有点赞、评论、回复、表情、分享或成员发帖功能。'
        ],
        know_title: '需要知道的事',
        know_items: [
          'Broadcast 是当前正式使用的产品名称，旧的 Newsfeed 说法已经过时。',
          '内容由 Affiliate 创建，并由应用展示。',
          '如果获取信息流失败，应用目前会回退为空列表，而不是显示单独的错误状态。',
          'Expo 中管理员侧的创建界面仍处于预备阶段，不应被视为当前主流程。'
        ],
        join_link: '加入学院',
        alerts_link: '系统提醒'
      },
      memberships: {
        badge: '学员',
        title: '管理学院会员资格',
        intro: '当你的账号属于多所学院，或你需要在不同学院会员资格之间切换时，请使用这个页面。',
        when_title: '什么时候重要',
        when_items: [
          '你属于多所学院',
          '你需要选择当前正在哪所学院里操作',
          '应用当前选中的学院不对'
        ],
        know_title: '需要知道的事',
        know_items: [
          '属于多所学院的成员，在预约或查看记录前需要先选择正确学院。',
          '如果有内容看起来缺失，可能只是当前激活的是错误学院。'
        ],
        next_title: '下一步',
        back_link: '返回加入学院',
        next_link: '预约课程'
      },
      booking: {
        badge: '学员',
        title: '预约课程',
        intro: '使用预约功能来选择课程、挑选可用卡片并确认你的名额。',
        steps_title: '步骤',
        steps_items: [
          '打开课表。',
          '选择你想上的课程。',
          '检查你是否符合预约条件。',
          '选择你想使用的卡片。',
          '确认预约。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '如果你属于多所学院，可能需要先选择正确学院。',
          '如果卡片没有出现，课程和卡片可能不兼容。',
          '在规则仍然允许时，你也可以取消预约。'
        ],
        next_title: '下一步',
        back_link: '会员资格',
        next_link: '出勤记录'
      },
      alerts: {
        badge: '学员',
        title: '阅读系统提醒',
        intro: '系统提醒帮助你跟进学院更新，以及其他重要的账号或会员资格信息。',
        see_title: '你可能看到的内容',
        see_items: [
          '学院更新',
          '与会员资格相关的通知',
          '其他与你使用学院相关的系统生成提醒'
        ],
        know_title: '需要知道的事',
        know_body: '这是一种系统提醒界面，不是普通聊天或消息线程。请把它看作重要的账号和学院信息。'
      },
      attendance: {
        badge: '学员',
        title: '查看出勤记录',
        intro: '当你想查看训练历史，并确认某个日期范围内发生了什么时，请使用出勤记录。',
        help_title: '这个页面能帮助什么',
        help_items: [
          '快速查看近期出勤',
          '查看更长的日期范围',
          '确认课程是否按你预期被记录'
        ],
        know_title: '需要知道的事',
        know_items: [
          '日期范围控件让长时间段查看更容易。',
          '这个页面主要用于查看记录，而不是修改它们。'
        ]
      }
    },
    account: {
      sign_in: {
        badge: '账号',
        title: '登录你的账号',
        intro: '当你的账号已经存在，并且你想访问学院、预约、会员卡和记录时，请使用登录。',
        need_title: '你需要准备',
        need_items: ['你的邮箱地址', '你的密码'],
        trouble_title: '如果无法登录',
        trouble_items: [
          '检查邮箱和密码是否正确',
          '必要时使用重置密码',
          '如果界面看起来陌生，先检查语言设置'
        ],
        next_title: '下一步',
        back_link: '返回学员路径',
        next_link: '重置密码'
      },
      create: {
        badge: '账号',
        title: '创建账号',
        intro: '在加入学院、预约课程或使用应用其他功能之前，先创建账号。',
        path_title: '选择正确的路径',
        path_items: [
          '如果你要训练或加入学院，请走成员/学员路径',
          '如果你要设置或管理学院，请走管理员/馆主路径'
        ],
        need_title: '你需要准备',
        need_items: ['有效的邮箱地址', '符合应用规则的密码'],
        next_title: '下一步',
        back_link: '返回登录',
        next_link: '加入学院'
      },
      reset: {
        badge: '账号',
        title: '重置密码',
        intro: '当你不记得密码，或当前密码已经无法使用时，请使用这个流程。',
        how_title: '流程如何运作',
        how_items: [
          '在登录页发起重置请求',
          '检查与你的 DojoMate 登录绑定的邮箱',
          '收到邮件后打开重置链接'
        ],
        email_title: '如果邮件没有收到',
        email_items: [
          '检查垃圾邮件或广告邮件箱',
          '确认输入的是正确邮箱',
          '再次发送重置邮件'
        ]
      },
      troubleshooting: {
        badge: '账号',
        title: '账号故障排查',
        intro: '当常见的登录或注册问题阻碍你访问账号时，请使用这个页面。',
        signin_title: '无法登录',
        signin_items: [
          '仔细检查邮箱和密码',
          '必要时重置密码',
          '确认设备已联网'
        ],
        email_title: '邮箱已被使用',
        email_body: '这通常表示账号已经存在，你应该登录或重置密码，而不是再创建第二个账号。',
        role_title: '身份角色混淆',
        role_body: '如果你的角色变了，或账号行为和预期不一致，先检查你是否使用了正确的账号以及正确的学院关系。'
      }
    },
    settings: {
      password: {
        badge: '设置',
        title: '修改密码',
        intro: '当你仍然知道当前密码，并想在账号设置里更新它时，请使用这个流程。',
        know_title: '需要知道的事',
        know_items: [
          '这和重置密码不同。修改密码的前提是你已经可以登录账号。',
          '如果你完全无法登录，请改用重置密码。'
        ]
      },
      language: {
        badge: '设置',
        title: '更改应用语言',
        intro: '当你想让应用显示为另一种受支持的语言时，请使用语言设置。',
        know_title: '需要知道的事',
        know_body: '如果某个界面难以理解，先检查语言设置通常是最快的解决办法之一。'
      },
      currency: {
        badge: '设置',
        title: '选择货币显示',
        intro: '使用货币设置来控制应用中的金额显示方式。',
        know_title: '需要知道的事',
        know_items: [
          '成员最关心的是金额是否清楚易读。',
          '馆主也可能会关心学院端的财务设置和一致性。'
        ]
      },
      privacy: {
        badge: '设置',
        title: '查看隐私设置',
        intro: '使用隐私设置来了解并控制通知、营销、排行榜、公开资料、预约以及与分析相关的数据处理方式。',
        main_title: '主要隐私区域',
        main_items: [
          '通知',
          '营销',
          '排行榜参与',
          '公开资料访问',
          '与预约相关的设置',
          '出勤和汇总分析数据'
        ],
        progression_title: '与进度相关的控制',
        progression_items: [
          '排行榜参与和公开资料访问是两个独立控制项。',
          '关闭排行榜参与会将账号排除在排名之外。',
          '关闭公开资料访问，并不会自动把账号从所有允许显示的界面中移除。',
          '营销控制与进度、排行榜和公开资料控制是分开的。'
        ],
        child_title: '儿童和受抚养账号',
        child_body: '儿童和受抚养记录不会参与进度、排行榜、公开进度资料或个性化营销。',
        know_title: '需要知道的事',
        know_body: '这个页面的重点是理解和管理隐私选择，而不仅仅是打开或关闭消息。'
      },
      delete: {
        badge: '设置',
        title: '谨慎删除账号',
        intro: '删除账号是一个严肃操作。只有在你确实想关闭整个账号时才使用，而不是仅仅离开某个学院。',
        before_title: '执行之前',
        before_items: [
          '先检查验证规则',
          '确认哪些情况会阻止删除',
          '考虑儿童账号以及相关会员卡关系'
        ],
        know_title: '需要知道的事',
        know_body: '删除整个账号，不等于离开某一个学院成员关系。如果账号仍应保留，请使用成员关系相关流程。'
      },
      logout: {
        badge: '设置',
        title: '退出登录',
        intro: '当你已结束在当前设备上的使用，或想切换到另一个账号时，请使用退出登录。'
      }
    },
    profile: {
      edit: {
        badge: '资料',
        title: '编辑你的资料',
        intro: '当你的个人资料信息需要更新时，请使用这个页面。',
        know_title: '需要知道的事',
        know_items: [
          '有些用户会根据账号用途看到与角色相关的上下文。',
          '修改完成后，请提交表单以保存更新。'
        ]
      },
      children: {
        badge: '资料',
        title: '管理儿童账号',
        intro: '当家长或监护人需要为孩子创建、编辑或管理账号时，请使用儿童账号功能。',
        do_title: '你可以做什么',
        do_items: [
          '创建儿童账号',
          '编辑儿童账号资料',
          '在适当时移除儿童账号'
        ],
        know_title: '需要知道的事',
        know_body: '由家长管理的账号关系，可能会影响加入学院和处理会员资格等其他流程。'
      }
    },
    tools: {
      overview: {
        badge: '工具',
        title: '使用付费工具扩展学院工作流',
        intro: '付费工具会在学院核心流程之上增加额外系统，例如重复排课、会员卡暂停、员工权限、分析和 Broadcast。',
        start_badge: '付费工具',
        start_title: '从你需要的工具开始',
        timetable_title: '建立重复课程表',
        timetable_body: '如果你希望每周课程重复生成，而不是一节一节重建，请使用 Timetable。',
        timetable_link: '打开 Timetable',
        pause_title: '暂停有效会员卡',
        pause_body: '如果你需要临时停止会员卡时间，请使用会员卡暂停。',
        pause_link: '打开会员卡暂停',
        broadcast_title: '向成员发送 Broadcast',
        broadcast_body: '如果你想从 Affiliate Portal 向成员发布单向更新或训练贴文，请使用 Broadcast。',
        broadcast_link: '打开 Broadcast',
        know_title: '需要知道的事',
        know_items: [
          '付费工具是在你已经使用的 Business、Schedule、Cards 和成员核心流程之上扩展出来的。',
          '工具可以单独提供，也可以通过高级方案套餐获得。',
          '学院馆主启用工具后，其他角色通常也可以使用它们。',
          '通常先学会基础流程，再叠加付费工具，会更容易。'
        ],
        activate_link: '查看工具状态'
      },
      activate: {
        badge: '工具',
        paid_badge: '付费工具',
        title: '启用工具与高级方案',
        intro: '在 Affiliate 入口网站的功能页面查看工具分组、开始免费试用、购买套餐，并管理学院当前已启用的套餐工具。',
        where_title: '前往哪里',
        where_body: '在 Affiliate 入口网站打开功能。这是当前由 Rails 管理的工具启用、套餐状态和试用状态入口。',
        organized_title: '页面如何组织',
        organized_items: [
          '工具可以单独提供。',
          '功能页面会把工具归类到基础工具、高级工具和套餐区域。',
          '高级方案套餐包含四个生产力工具。',
          '当前界面也会显示专业方案套餐。',
          '首次使用者可以开始 90 天高级方案试用。'
        ],
        groups_title: '当前工具分组',
        essential_title: 'Essential Tools',
        essential_items: ['Timetables', 'Pause Academy'],
        advanced_title: 'Advanced Tools',
        advanced_items: ['员工权限', 'Analytics'],
        packages_title: '套餐',
        packages_body: '当前界面包含 Premium Package 和 Pro Package。',
        features_title: '你可能在功能页面看到的内容',
        features_items: [
          'Start Free Trial',
          '购买高级方案套餐',
          '购买专业方案套餐',
          '高级方案已启用',
          '已包含在高级方案内',
          'Available in free trial',
          'Included in free trial',
          'Included in your package',
          'Manage'
        ],
        know_title: '需要知道的事',
        know_items: [
          '当工具未启用时，有些界面会被完全锁定。',
          '有些界面仍可打开，但付费操作会变成升级提示。',
          'Broadcast 是当前用户可见的名称，旧的 Newsfeed 说法已经过时。',
          '套餐试用逻辑会处理重叠情况，因此专业方案和高级方案不会简单地互相重置。'
        ],
        guides_title: '付费指南',
        staff_access: '员工访问',
        analytics: 'Analytics',
        support_desc: '如果你对功能页面、订阅、试用状态或其他 Affiliate Portal 流程有问题，请前往 Source Combatives 的 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      broadcast: {
        badge: '工具',
        paid_badge: '付费工具',
        title: '向成员发送单向 Broadcast',
        intro: '当你想在 Affiliate 入口网站中向成员发布学院更新或训练贴文时，请使用 Broadcasts。这是一个单向发布工具，不是聊天、回复，也不是社交动态。',
        where_title: '它在哪里',
        where_items: [
          '在 Affiliate 入口网站的导航中打开 Broadcasts。',
          '按当前 Affiliate 入口网站的行为，Broadcast 实际上是馆主专用。',
          '在功能页面中，Broadcast 被作为 Pro 工具展示。'
        ],
        flow_title: '发布流程如何运作',
        flow_steps: [
          '在 Affiliate 入口网站中打开 Broadcasts。',
          '选择要发布到的流标签。',
          '填写消息正文。',
          '通过粘贴图片链接或上传文件添加图片。',
          '使用 Publish Broadcast 将内容发送到学院信息流。'
        ],
        labels_title: '你可能看到的当前标签',
        labels_items: [
          'Broadcasts',
          'Message',
          'Image URLs',
          'Upload Images',
          'Publish Broadcast',
          'Recall',
          'Repost',
          'Delete',
          '可见性标签：Visible、Recalled、All'
        ],
        lifecycle_title: '生命周期规则',
        lifecycle_items: [
          '可见中的 broadcast 必须先 Recall，之后才能删除。',
          '如果你希望它重新上线，可以对已 Recall 的 broadcast 使用 Repost。',
          '只有已 Recall 的 broadcast 才能被永久删除。',
          '已 Recall 的 broadcast 会在保留窗口内保持可恢复，除非被 Repost，否则之后会被自动删除。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '面向用户的帮助文案里都应使用 Broadcast。旧的 Newsfeed 说法已经过时。',
          'Broadcast 受 entitlement 控制，并不是默认可用。',
          '图片既可以通过粘贴链接添加，也可以通过上传文件添加。',
          'Broadcast 在 Affiliate 入口网站中编写，然后在应用中供成员阅读。'
        ],
        features_link: '功能',
        student_link: '在应用中阅读 Broadcast',
        support_desc: '如果你对 Affiliate Portal 中的 Broadcast 工具、发布/Recall/Repost，或 entitlement 有问题，请前往 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      timetable: {
        badge: '工具',
        paid_badge: '付费工具',
        title: '建立每周重复课表',
        intro: '当你想一次创建课程模板，并在一段时间内把它们发布到日历时，请使用 Timetable。',
        use_title: '适合在这些情况下使用',
        use_items: [
          '你每周都会开相同的课程',
          '你想往更远的时间计划，而不是手动反复创建每节课',
          '你想在课程准备好时再把它们发布到日历中'
        ],
        steps_title: '步骤',
        steps_items: [
          '打开 Timetable。',
          '选择你想要的星期几。',
          '按 Create Lesson。',
          '像在普通 Schedule 页面上一样填写课程表单。',
          '为这个重复模板设置开始日期和结束日期。',
          '保存模板。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '模板在被发布之前，不会变成真实的日历课程。',
          '你可以通过设置未来结束日期来放心做长期计划。',
          '创建后，你可以回到星期页面并在那里编辑模板。'
        ],
        publish_title: '发布',
        publish_body_1: '未发布的课程会先出现在 Schedule 页面中。管理员可以在它们准备好预约时再发布。',
        publish_body_2: '成员仍然可以把未发布课程看作未来计划，但他们还不能预约。',
        mistake_title: '常见错误',
        mistake_body: '如果重复课程碰上节假日，通常不需要重建 timetable。只要选择不发布那一节课即可。',
        activate_link: '查看工具状态'
      },
      pause: {
        badge: '工具',
        paid_badge: '付费工具',
        title: '在需要时暂停有效会员卡',
        intro: '当你需要暂时停止卡片时间，而不是让它按正常方式继续到期时，请使用会员卡暂停。',
        modes_title: '两种暂停方式',
        modes_items: [
          '单独暂停：在该成员的资料页中暂停或取消暂停单张会员卡。',
          '全学院暂停：馆主可以暂停整个学院范围内的会员卡。'
        ],
        know_title: '需要知道的事',
        know_items: [
          '被暂停的会员卡不能用于预约。',
          '如果需要，可以把某些卡模板排除在全学院暂停之外。',
          '如果某位成员在全学院暂停前就已经被单独暂停，那么全学院暂停结束后，他们仍然会保持暂停。'
        ],
        common_title: '最常见用途',
        common_body: '馆主经常在想保护成员时间、又不想一张一张手动延长到期日时使用这个工具。',
        next_title: '下一步',
        back_tools: '返回工具总览',
        activate_link: '查看工具状态',
        back_cards: '返回会员卡'
      }
    },
    portal: {
      overview: {
        badge: '门户',
        title: '使用 Affiliate Portal',
        intro: 'Affiliate Portal 是 Source Combatives 的网页界面。它适合处理比日常 DojoMate 应用界面更重的馆主工作流，尤其是注册、成员审核、段位、会员卡、报表和套餐启用。',
        workflows_title: 'Affiliate Portal 主要工作流',
        register_title: '注册与入门',
        register_body: '使用注册向导创建成人和家长账号，可选添加儿童，并在之后继续未完成的入门流程。',
        members_title: '审核成员状态',
        members_body: '查看待处理、已接受、已拒绝和已封禁用户，按邮箱附加现有账号，或继续家长入门流程。',
        ranks_title: '管理段位项目',
        ranks_body: '设置段位项目，按项目为成员注册，并通过当前审核流程确认段位变化。',
        cards_title: '在 Affiliate Portal 中管理会员卡',
        cards_body: '使用 Templates、Assign、Active 和 History 视图处理卡模板、发卡、有效卡操作、暂停动作和审计查看。',
        reports_title: '查看报表和工具',
        reports_body: '报表页面保持较轻，因为它主要是只读的。功能页面是管理套餐和试用状态的地方。',
        know_title: '需要知道的事',
        know_items: [
          '大多数 Affiliate Portal 页面在实际使用中都是馆主专用。',
          '月度报表是主要例外：如果授予了报表权限，非馆主员工也可以看到它。',
          'Affiliate Portal 中的更改通常会直接影响应用，包括成员状态、会员卡、段位数据和工具启用。'
        ],
        support_desc: '如果你对 Affiliate Portal、Portal 设置问题或其他 Affiliate Portal 专属流程有疑问，请前往 Source Combatives 的 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      register: {
        badge: '门户',
        title: '在 Affiliate Portal 中注册',
        intro: '当你想通过 Affiliate Portal 为学院创建新成员时，请使用 Register。这是一个多步骤向导，而不是单屏表单。',
        flow_title: '流程如何运作',
        flow_steps: [
          '在 Affiliate Portal 中打开 Register，并先填写家长或成人信息。',
          '如果此人是以家长身份注册，则在儿童步骤中添加儿童账号。',
          '查看摘要，然后使用 Confirm & Create 完成。',
          '创建完成后，如需继续工作，可使用再注册一位或前往成员。'
        ],
        labels_title: '你可能看到的当前标签',
        labels_items: ['注册', '下一步', '返回', '确认并创建', '再注册一位', '前往成员', '继续入驻'],
        know_title: '需要知道的事',
        know_items: [
          '家长和成人学员的路径并不完全相同。',
          '如果家长以学员身份注册，则会跳过儿童步骤。',
          '家长可以保持在 Pending 状态，并在之后从成员中继续。',
          '在这里创建的账号会成为正常的 DojoMate 用户，并出现在应用使用的学院成员数据中。'
        ],
        next_title: '下一步',
        members_link: '成员',
        cards_link: 'Cards',
        support_desc: '如果你对注册向导、待处理家长恢复或 Affiliate 中其他入门问题有疑问，请前往 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      members: {
        badge: '门户',
        title: '管理门户成员',
        intro: '在 Affiliate Portal 中使用成员来审核学院成员状态。这里是按状态驱动的，不只是一个平铺名单。',
        jobs_title: '主要任务',
        jobs_items: [
          '查看 Pending Users、Recently Accepted、家长账号、成人成员、已拒绝用户和已封禁用户。',
          '使用 Accept、Reject 和 Ban 处理审核工作。',
          '使用通过邮箱添加成员附加一个现有账号。',
          '使用继续入驻继续一个停留在待处理状态的家长流程。'
        ],
        labels_title: '你可能看到的当前标签',
        labels_items: ['成员', '成员列表', '通过邮箱添加成员', '接受', '拒绝', '封禁', '继续入驻', '待处理、已接受、已拒绝、已封禁'],
        confusion_title: '常见混淆',
        confusion_items: [
          '通过邮箱添加成员只适用于已经存在的账号。',
          '如果受抚养账号仍处于已接受状态，拒绝家长可能会被阻止。',
          '如果账号仍有有效会员卡，拒绝也可能会被阻止。',
          '这个页面也是中断注册后的恢复入口，而不仅仅是审核界面。'
        ],
        next_title: '下一步',
        register_link: '注册',
        cards_link: '会员卡',
        support_desc: '如果你对成员状态、家长/受抚养人审核，或通过邮箱附加现有账号有疑问，请前往 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      ranks: {
        badge: '门户',
        title: '管理段位与项目',
        intro: '在 Affiliate Portal 中使用 Ranks 配置学院段位项目并更新成员进度。它现在是一个多项目流程，而不是单一的全局段位设置。',
        jobs_title: '主要任务',
        jobs_items: [
          '如果馆主成员资料尚不存在，先创建它。',
          '使用 Add Program 和 Save Systems 配置武术项目和段位系统。',
          '使用 Enroll Member 和 Remove from Program 控制成员属于哪个项目名册。',
          '更新段位和杠数，并在出现审核弹窗时确认更改。'
        ],
        labels_title: '你可能看到的当前标签',
        labels_items: ['Ranks', 'Create profile', 'Add Program', 'Save Systems', 'Remove Program', 'Enroll Member', 'Remove from Program', 'Save', 'Review Change', 'Confirm Change'],
        know_title: '需要知道的事',
        know_items: [
          '这里只有已接受的成员会出现。',
          '同一名成员在不同武术项目中的名册归属可能不同。',
          '某些段位变更在保存前需要经过带有变更类型和备注的审核步骤。',
          '这里写入的变更会进入应用读取和显示的进度数据。'
        ],
        next_title: '下一步',
        members_link: '成员',
        analytics_link: 'Analytics',
        support_desc: '如果你对段位项目设置、名册注册或 Ranks 中的审核弹窗有问题，请前往 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      cards: {
        badge: '门户',
        title: '使用 portal 会员卡',
        intro: '当你需要完整的网页会员卡流程时，请在 Affiliate Portal 中使用 Cards：模板、发卡、有效卡管理、暂停控制和历史记录都在这里。',
        areas_title: '主要卡片区域',
        areas_items: [
          'Templates：创建、编辑和删除卡模板。',
          'Assign：向已接受的成员发卡。',
          'Active：处理有效卡状态、暂停操作以及删除或过期动作。',
          'History：查看发卡、删除和审计记录。'
        ],
        labels_title: '你可能看到的当前标签',
        labels_items: [
          'Templates、Assign、Active、History',
          'New Template、Create、Update',
          'Issue Card、Manage、Delete',
          'Pause Academy、Unpause Academy、Pause Member、Unpause Member',
          'View Plans'
        ],
        know_title: '需要知道的事',
        know_items: [
          '如果某模板下仍有有效卡，就不能删除该模板。',
          '如果学院处于暂停状态，单个会员卡管理会被锁定。',
          '暂停和取消暂停控制需要付费的 Pause 工具。',
          '删除会员卡时，Expire 和 Cancel 的行为不同，而 Cancel 可能需要填写原因。',
          '在 Affiliate Portal 中发出的会员卡，就是应用用于预约、出勤/课次扣减和成员卡状态的真实会员卡。'
        ],
        next_title: '下一步',
        members_link: '成员',
        pause_link: '会员卡暂停',
        app_cards_link: '应用中的会员卡',
        support_desc: '如果你对 Affiliate Cards 区域中的模板、发卡、有效卡、暂停或历史记录有疑问，请前往 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      },
      reports: {
        badge: '门户',
        title: '查看 portal 报表',
        intro: '在 Affiliate Portal 中使用报表查看系统已生成的月度财务报表。这个页面是只读的。',
        flow_title: '如何使用',
        flow_items: [
          '如果你可以访问多个学院，请先选择学院。',
          '使用年份筛选器，然后按 Apply。',
          '打开月度报表卡片查看生成好的报表数据。'
        ],
        access_title: '访问与 entitlement',
        access_items: [
          '馆主通常可以访问报表。',
          '非馆主员工只有在被授予报表权限时才能访问报表。',
          '如果 Analytics entitlement 关闭，这个页面会显示锁定状态，而不是报表数据。'
        ],
        know_title: '需要知道的事',
        know_items: [
          'Affiliate Portal 并不会在这个页面中实时计算报表。',
          '报表数据来自更广泛的分析数据和系统流程。',
          '如果看到锁定状态，请前往功能页面。'
        ],
        support_desc: '如果你对报表访问、Analytics 锁定状态，或 Affiliate 月报有疑问，请前往 Affiliate 版块。',
        support_button: '打开 Affiliate 版块'
      }
    }
  }
}
