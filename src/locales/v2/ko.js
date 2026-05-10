export default {
  help_v3: {
    support: {
      heading: '도움이 더 필요하신가요?',
      default_description: '추가 질문, 예외 상황, 또는 앱 밖으로 이어지는 흐름 설명이 필요하면 Source Combatives의 DojoMate 도움말 게시판을 이용하세요.',
      default_button: 'DojoMate 도움말 게시판 열기'
    },
    layout: {
      badge: '도움말 v3',
      intro: '현재 DojoMate의 대시보드와 역할에 맞춰 정리한 워크플로 가이드입니다.',
      open_v2: '도움말 v2 열기',
      search_placeholder: '도움말 v3 검색',
      search_no_results: '검색 결과가 없습니다',
      nav: {
        start_here: '여기서 시작',
        home: '도움말 v3 홈',
        member_home: '학생 가이드',
        admin_home: '관리 가이드',
        owner_home: '오너 가이드',
        account_home: '계정 가이드',
        member: '학생',
        admin: '관리 / 스태프',
        owner: '오너 / 운영',
        account: '계정 / 설정',
        join_academy: '도장 가입',
        memberships: '회원 자격',
        member_cards: '카드',
        card_disputes: '카드 이의 제기',
        booking: '예약',
        attendance_records: '출석 기록',
        system_alerts: '시스템 알림',
        broadcasts: 'Broadcast',
        online_learning: '온라인 학습',
        events: '이벤트',
        academy_context: '도장 컨텍스트',
        admin_members: '멤버 관리',
        admin_cards: '카드 관리',
        session_debt: '세션 부채',
        lessons: '수업 템플릿',
        schedule: '일정',
        admin_booking: '대리 예약',
        admin_broadcasts: 'Broadcast 발행',
        alerts_qr: '알림 및 QR 도구',
        create_academy: '도장 만들기',
        onboarding: '온보딩',
        business_management: '비즈니스 관리',
        instructors: '강사 관리',
        access: '접근 권한',
        operations_analytics: '운영 분석',
        timesheets_salaries: '근태 및 급여',
        oversight: '감사 및 검토',
        owner_tools: '도구',
        sign_in: '로그인',
        create_account: '계정 만들기',
        reset_password: '비밀번호 재설정',
        change_password: '비밀번호 변경',
        profile: '프로필',
        child_accounts: '아동 계정',
        privacy_progression: '개인정보 및 진행도',
        preferences: '환경설정',
        delete_account: '계정 삭제',
        logout: '로그아웃'
      }
    },
    welcome: {
      badge: '도움말 v3',
      title: '현재 워크플로 가이드',
      intro: '현재 DojoMate 역할과 대시보드 기준으로 작업 방법을 찾고 싶을 때는 도움말 v3를 사용하세요.',
      areas_title: '내 작업에 맞는 영역 선택',
      member_title: '학생',
      member_body: '도장 가입, 카드, 예약, 알림, Broadcast, 온라인 학습, 이벤트.',
      member_link: '학생 가이드 열기',
      admin_title: '관리 / 스태프',
      admin_body: '멤버, 카드, 일정, 대리 예약, Broadcast, 도장 운영 업무.',
      admin_link: '관리 가이드 열기',
      owner_title: '오너 / 운영',
      owner_body: '도장 생성, 온보딩, 오너 전용 설정, 접근 권한, 운영 워크플로.',
      owner_link: '오너 가이드 열기',
      account_title: '계정 / 설정',
      account_body: '로그인, 비밀번호 지원, 프로필, 개인정보, 환경설정, 로그아웃.',
      account_link: '계정 가이드 열기',
      note_title: 'v3가 다른 점',
      note_body: 'v3는 현재 제품의 역할과 대시보드 책임에 맞춰 정리되어 있어서, 섞여 보이기 쉬운 v2보다 찾기 쉽고 이후 어시스턴트 추출에도 더 적합합니다.',
      note_button: '도움말 v2 보기'
    },
    member: {
      home: {
        badge: '학생',
        title: '학생 가이드',
        intro: '도장에서 수련하며 가입, 회원 자격, 카드, 예약, 알림, Broadcast, 온라인 학습, 이벤트에 대한 도움이 필요할 때 이 가이드를 사용하세요.',
        areas_title: '학생 주제',
        links: [
          {
            title: '도장 가입과 회원 자격',
            body: '올바른 도장에 가입하고 현재 선택된 도장 컨텍스트를 확인합니다.',
            links: [
              { label: '도장 가입', to: '/help-v3/member/join-academy' },
              { label: '회원 자격', to: '/help-v3/member/memberships' }
            ]
          },
          {
            title: '카드와 수업',
            body: '카드를 확인하고, 이의를 제기하고, 예약하고, 출석 기록을 확인합니다.',
            links: [
              { label: '카드', to: '/help-v3/member/cards' },
              { label: '카드 이의 제기', to: '/help-v3/member/card-disputes' },
              { label: '예약', to: '/help-v3/member/booking' },
              { label: '출석 기록', to: '/help-v3/member/attendance-records' }
            ]
          },
          {
            title: '도장 업데이트',
            body: '시스템 알림, Broadcast, 온라인 학습, 이벤트 정보를 확인합니다.',
            links: [
              { label: '시스템 알림', to: '/help-v3/member/system-alerts' },
              { label: 'Broadcast', to: '/help-v3/member/broadcasts' },
              { label: '온라인 학습', to: '/help-v3/member/online-learning' },
              { label: '이벤트', to: '/help-v3/member/events' }
            ]
          }
        ]
      },
      join_academy: {
        badge: '학생',
        title: '도장 가입',
        intro: 'DojoMate를 사용하는 도장에 계정을 연결하고 싶을 때 이 흐름을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          'Discover에서 도장을 둘러봅니다.',
          '도장 이름으로 검색합니다.',
          '도장에서 제공한 QR 코드를 스캔합니다.',
          '가입을 결정하기 전에 도장 상세를 엽니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '여러 도장을 먼저 비교하고 싶다면 Discover Academy를 사용합니다.',
          '이미 도장을 알고 있거나 QR을 바로 스캔하려면 Academy Search를 사용합니다.',
          '먼저 도장 상세 페이지에서 정말 올바른 도장인지 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '가입 요청을 보낸 뒤에도 도장에서 먼저 승인해야 할 수 있습니다.',
          '부모 관리 계정이나 아동 계정 연결 때문에 추가 단계가 생길 수 있습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 그 도장이 academy list 또는 pending 상태로 나타납니다.',
          '아직 승인이 나지 않았다면 이후 학생 기능은 일부 제한될 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '회원 자격', to: '/help-v3/member/memberships' },
          { label: '카드', to: '/help-v3/member/cards' }
        ]
      },
      memberships: {
        badge: '학생',
        title: '회원 자격과 도장 컨텍스트 관리',
        intro: '한 개 또는 여러 개의 도장에 속해 있고, 현재 어떤 도장이 활성화되어 있는지 확인하고 싶을 때 이 주제를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '계정에 연결된 도장들을 확인합니다.',
          '카드, 예약, Broadcast를 사용하기 전에 현재 선택된 도장을 바꿉니다.',
          '무언가가 없다고 느껴질 때 먼저 올바른 도장에 있는지 확인합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '가입된 academy list와 학생용 academy context 화면을 사용합니다.',
          '카드나 수업이 없다고 판단하기 전에 현재 선택된 도장을 다시 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '도장을 잘못 선택하면 카드, 일정, Broadcast가 없는 것처럼 보일 수 있습니다.',
          '회원 자격 상태는 도장 승인이나 아동 계정 연결의 영향도 받을 수 있습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '올바른 도장을 선택하면 이후 학생 화면들이 그 도장 데이터를 불러옵니다.',
          '잘못된 도장에 머물러 있으면 예약과 카드 관련 내용이 계속 어긋나 보일 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '카드', to: '/help-v3/member/cards' },
          { label: '예약', to: '/help-v3/member/booking' }
        ]
      },
      cards: {
        badge: '학생',
        title: '카드와 보류 중 결제 확인',
        intro: '현재 사용할 수 있는 카드, 보류 중인 카드 결제, 또는 예약이 되지 않는 이유가 카드 때문인지 확인하고 싶을 때 이 주제를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '현재 선택된 도장에서 사용할 수 있는 카드를 확인합니다.',
          '보류 중인 카드 결제 흐름이 있는지 확인합니다.',
          '예약 실패가 실제 카드 문제인지 먼저 분리해서 봅니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '학생용 카드 화면과 보류 중 카드 결제 흐름을 사용합니다.',
          '예약 화면에서 사용할 수 있는 카드가 없다고 나오면 먼저 여기로 돌아와 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '학생 카드는 현재 선택된 도장에 묶입니다.',
          '이곳은 오너나 관리 측 감사 검토 화면이 아닙니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '보류 중 결제가 성공하면 카드가 사용 가능한 상태로 바뀔 수 있습니다.',
          '결제나 발급 변경 후에도 카드가 여전히 이상해 보이면 분쟁 흐름을 사용하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '카드 분쟁', to: '/help-v3/member/card-disputes' },
          { label: '예약', to: '/help-v3/member/booking' }
        ]
      },
      booking: {
        badge: '학생',
        title: '수업 예약 또는 예약 취소',
        intro: '도장 일정표를 열고, 수업을 확인하고, 사용할 카드를 고른 뒤 자리를 확정하고 싶을 때 예약 흐름을 사용하세요.',
        steps_title: '일반적인 단계',
        steps_items: [
          '현재 선택된 도장의 일정표를 엽니다.',
          '예정된 수업 하나를 선택하고 상세 정보를 확인합니다.',
          '카드 선택 화면을 열어 사용할 수 있는 카드를 고르고, 멤버 명단에서 익명으로 보일지 결정합니다.',
          '예약 또는 예약 취소를 확정합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Academy Schedule, Academy Booking, Academy Card Selection을 사용합니다.',
          '수업이나 카드가 이상해 보이면 먼저 현재 선택된 도장을 다시 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '예약은 현재 scheduled-lesson 예약 흐름을 사용하며, 일반적인 수업 편집이 아닙니다.',
          '카드 사용 가능 여부와 예약 가드 규칙은 백엔드가 결정합니다.',
          '익명 예약은 다른 멤버에게만 신원을 숨기며, 도장 직원은 실제 예약 정보를 계속 봅니다.',
          '예약 동작이 막혀도 취소되었거나 처리된 수업 상세는 계속 읽을 수 있는 경우가 있습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 예약 상태와 보이는 명단이 업데이트됩니다.',
          '예상된 가드 실패는 왜 막혔는지 설명하며, 예를 들어 예약이 마감되었거나 수업이 이미 시작되었음을 알려줍니다.',
          '요청이 실제로 처리되었는지 앱이 확인하지 못하면 새로고침 후 다시 확인해야 할 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '출석 기록', to: '/help-v3/member/attendance-records' },
          { label: '시스템 알림', to: '/help-v3/member/system-alerts' }
        ]
      },
      attendance_records: {
        badge: '학생',
        title: '출석 기록 확인',
        intro: '지난 수업이 기대한 대로 기록되었는지 확인하고 싶을 때 출석 기록을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '현재 선택된 도장의 지난 출석 기록을 확인합니다.',
          '특정 수업이 내 기록에 나타나는지 확인합니다.',
          '예약과 수련 이후의 확인 자료로 기록을 사용합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '학생용 출석 화면이나 academy records 화면을 사용합니다.',
          '이전 예약이나 방문 결과를 확인하고 싶을 때 먼저 여기서 시작하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '출석 기록은 확인용이며, 학생이 직접 수정하는 화면이 아닙니다.',
          '기록이 잘못되었다면 도장 측에서 수정해야 합니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '정상 기록이 있으면 해당 수업이 등록되었음을 확인할 수 있습니다.',
          '기록이 없거나 잘못되었다면 직접 고치려 하지 말고 도장 후속 처리로 넘어가야 합니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '예약', to: '/help-v3/member/booking' },
          { label: '카드 분쟁', to: '/help-v3/member/card-disputes' }
        ]
      },
      system_alerts: {
        badge: '학생',
        title: '시스템 알림 읽기',
        intro: '계정, 도장, 또는 관련 학생 흐름에 연결된 중요한 업데이트를 확인해야 할 때 시스템 알림을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '시스템이 생성한 중요한 계정 또는 도장 업데이트를 읽습니다.',
          '푸시 알림이 정확한 화면으로 이동하지 못할 때 안전한 대체 화면으로 사용합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Academy Alerts 같은 학생용 알림 화면을 사용합니다.',
          '알림 탭으로 특정 화면에 들어가지 못하면 앱이 먼저 이곳으로 보낼 수 있습니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '시스템 알림은 채팅이 아닙니다.',
          '모든 알림 유형에 완전한 딥링크가 준비된 것은 아닙니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '읽으면 읽음 상태가 업데이트될 수 있습니다.',
          '알림이 다른 흐름을 가리키고 있다면 알림 화면에 머무르지 말고 그 흐름으로 이동하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: 'Broadcast', to: '/help-v3/member/broadcasts' },
          { label: '예약', to: '/help-v3/member/booking' }
        ]
      },
      broadcasts: {
        badge: '학생',
        title: '도장 Broadcast 읽기',
        intro: 'Broadcast를 사용해 현재 선택된 도장의 게시물을 읽습니다. 학생 쪽 피드는 읽기 전용이며 도장 공지와 훈련 게시물을 보는 용도입니다.',
        what_title: '할 수 있는 일',
        what_items: [
          'Updates와 Training 사이를 전환합니다.',
          '텍스트, 이미지, 도장 Broadcast 게시물을 읽습니다.',
          '학생 대시보드를 벗어나지 않고 이미지를 크게 열어 봅니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '현재 선택된 도장에 연결된 학생용 Broadcast 화면을 사용합니다.',
          '잘못된 피드가 보이면 먼저 도장 선택부터 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '학생용 Broadcast는 읽기 전용입니다.',
          '댓글, 답글, 좋아요, 학생 게시 기능은 없습니다.',
          '피드가 비어 있어도 기능이 고장 난 것은 아닐 수 있으며, 단순히 공개된 게시물이 아직 없을 수 있습니다.',
          'Broadcast 내용은 도장 직원이나 오너가 작성합니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '정상적으로 불러오면 현재 선택된 도장의 피드가 표시됩니다.',
          '계정 상태나 시스템 상태를 보고 싶다면 System Alerts를 사용하세요.',
          '도장에 온라인 학습 권한이 있더라도 Broadcast와 Online은 서로 다른 영역입니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '시스템 알림', to: '/help-v3/member/system-alerts' },
          { label: '온라인 학습', to: '/help-v3/member/online-learning' }
        ]
      },
      card_disputes: {
        badge: '학생',
        title: '카드 분쟁 제기',
        intro: '카드, 카드 삭제, 또는 카드 관련 변경이 학생 입장에서 잘못된 것처럼 보이고 도장 후속 처리가 필요할 때 카드 분쟁을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '발견한 카드 문제에 연결된 분쟁 기록을 만듭니다.',
          '학생 입장에서 무엇이 잘못 보이는지 설명합니다.',
          '문제를 예약이나 프로필 질문에 섞지 말고 전용 후속 경로로 분리합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Academy Disputes 같은 학생용 카드 / 분쟁 화면을 사용합니다.',
          '가능하면 문제가 보이는 카드에서 바로 시작하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '분쟁을 제기해도 카드가 즉시 수정되지는 않습니다.',
          'audit logs 같은 오너 전용 검토 도구는 학생 분쟁 흐름에 포함되지 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 분쟁이 도장 측의 후속 처리 항목이 됩니다.',
          '도장 검토가 끝나기 전까지는 보이는 카드 상태가 바뀌지 않을 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '카드', to: '/help-v3/member/cards' },
          { label: '출석 기록', to: '/help-v3/member/attendance-records' }
        ]
      },
      online_learning: {
        badge: '학생',
        title: '온라인 학습 사용',
        intro: '학생 계정에 온라인 학습 접근 권한이 있고, 커리큘럼 탐색, 수업 열기, 영상 시청, 숙제 제출을 하고 싶을 때 Online을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '접근 권한이 있을 때 학생 대시보드에서 Online을 엽니다.',
          '커리큘럼, catalog, 수업 계층을 탐색합니다.',
          '지도용 클립과 연결된 tip 영상을 봅니다.',
          '소속 수업 흐름에서 숙제를 열고 제출합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Online Home, Curriculum, Catalog, Lesson, Video, Homework 화면을 사용합니다.',
          '보고 싶은 클립까지 커리큘럼에서 단계별로 내려가세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          'Online 타일은 접근 권한이 있을 때만 나타납니다.',
          '여기서의 Expo Online은 학생 소비용 화면이지 온라인 관리 화면이 아닙니다.',
          '숙제와 tip 영상은 소속 수업과 슬라이스에 묶이며, 독립적인 도장 전체 피드가 아닙니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '접근 권한이 있으면 대시보드에 Online 진입점이 보입니다.',
          '숙제와 tip 내용은 각 수업과 슬라이스에 남아 있으며, 떠다니는 별도 콘텐츠가 되지 않습니다.',
          '권한이 없으면 빈 화면이 아니라 Online 진입점 자체가 보이지 않는 것이 정상입니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '이벤트', to: '/help-v3/member/events' },
          { label: 'Broadcast', to: '/help-v3/member/broadcasts' }
        ]
      },
      events: {
        badge: '학생',
        title: '이벤트와 등록 보기',
        intro: '대회 이벤트를 둘러보고, 대회 프로필을 유지하거나, 이벤트 등록 단계를 관리하고 싶을 때 Events를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '참가 가능한 대회 이벤트를 둘러봅니다.',
          '등록 전에 이벤트 상세를 엽니다.',
          '대회 프로필을 만들거나 업데이트합니다.',
          '이벤트가 지원하면 등록과 결제 단계를 관리합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '이벤트 목록, 상세, 프로필, 등록 화면을 사용합니다.',
          '일부 이벤트 흐름은 연맹 사이트나 이벤트 사이트 같은 외부 제공자로 넘어갑니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '외부 제공자 흐름은 DojoMate app 안에 완전히 머무르지 않습니다.',
          '등록 상태는 일반적인 도장 회원 흐름 밖의 이벤트 전용 요구사항에도 좌우될 수 있습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 대회 프로필이나 등록 상태가 업데이트됩니다.',
          '외부 제공자를 쓰는 이벤트는 완전한 앱 내 양식이 아니라 외부로의 인계가 발생합니다.',
          '대회 프로필 업데이트는 이후 이벤트 등록 준비의 일부가 될 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '회원 자격', to: '/help-v3/member/memberships' },
          { label: '시스템 알림', to: '/help-v3/member/system-alerts' }
        ]
      }
    },
    admin: {
      home: {
        badge: '관리',
        title: '관리 및 스태프 가이드',
        intro: '도장 관리 대시보드에서 멤버, 카드, 일정, 대리 예약, Broadcast를 다룰 때 이 가이드를 사용하세요.',
        areas_title: '관리 주제',
        links: [
          {
            title: '도장 컨텍스트와 멤버',
            body: '먼저 올바른 도장이 선택되었는지 확인한 뒤 멤버와 역할 관련 작업을 진행합니다.',
            links: [
              { label: '도장 컨텍스트', to: '/help-v3/admin/academy-context' },
              { label: '멤버 관리', to: '/help-v3/admin/members' }
            ]
          },
          {
            title: '일상 운영',
            body: '카드, 세션 부채, 수업 템플릿, 일정, 대리 예약을 처리합니다.',
            links: [
              { label: '카드 관리', to: '/help-v3/admin/cards' },
              { label: '세션 부채', to: '/help-v3/admin/session-debt' },
              { label: '수업 템플릿', to: '/help-v3/admin/lessons' },
              { label: '일정', to: '/help-v3/admin/schedule' },
              { label: '대리 예약', to: '/help-v3/admin/admin-booking' }
            ]
          },
          {
            title: '알림 및 도구',
            body: 'Broadcast 발행, 알림, QR 도구를 사용합니다.',
            links: [
              { label: 'Broadcast 발행', to: '/help-v3/admin/broadcasts' },
              { label: '알림 및 QR 도구', to: '/help-v3/admin/alerts-qr' }
            ]
          }
        ]
      },
      cards: {
        badge: '관리',
        title: '카드 만들기와 발급',
        intro: '카드 템플릿을 만들고, 활성 카드를 발급하고, 현재 카드 상태를 확인하거나, 도장 멤버가 사용할 수 있는 카드 상태를 바꾸고 싶을 때 관리용 Cards를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '카드 템플릿을 만듭니다.',
          '기존 템플릿을 확인합니다.',
          '활성 카드를 멤버에게 발급합니다.',
          '활성 카드를 확인하고, 화면에서 허용하는 범위에서 일시정지 관련 상태를 다룹니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '템플릿 생성, 템플릿 목록, 발급, Active Cards 화면을 사용합니다.',
          '학생 예약 문제가 사실 카드 문제라면 여기로 돌아와 확인하세요.',
          '온보딩 중에는 첫 카드 마일스톤이 도장 생성 흐름에 속하므로 앱이 직접 Cards로 안내할 수 있습니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '카드 템플릿과 활성 카드는 서로 다른 층위입니다.',
          'audit logs 같은 오너 전용 검토 도구는 일반 관리용 Cards 안내에 포함되지 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 카드와 관련된 관리 및 학생 흐름이 갱신됩니다.',
          '카드 업데이트가 올바른 도장 컨텍스트에 반영되면 예약 가능 여부도 달라질 수 있습니다.',
          '이 카드가 온보딩이나 직원 테스트 용도라 해도 정식 수금 준비와는 별개로 마일스톤으로 인정될 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '세션 부채', to: '/help-v3/admin/session-debt' },
          { label: '대리 예약', to: '/help-v3/admin/admin-booking' }
        ]
      },
      academy_context: {
        badge: '관리',
        title: '현재 어떤 도장을 관리 중인지 확인',
        intro: '여러 도장을 오가거나, 현재 올바른 관리 컨텍스트에 있는지 확신이 없을 때 먼저 academy context를 확인하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '현재 어떤 도장이 로드되어 있는지 확인합니다.',
          '멤버, 카드, 일정, Broadcast를 다루기 전에 올바른 도장으로 전환합니다.',
          '지금 내가 Admin인지 Business / Owner 경로인지 구분합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '도장 전환과 관리 진입 흐름을 사용합니다.',
          '다른 도장에서 막 돌아왔다면 작업을 계속하기 전에 여기서 다시 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '관리와 스태프 작업은 현재 선택된 도장에 묶입니다.',
          '오너나 Business 쪽 설정 작업을 일반 admin 기능으로 오해하면 안 됩니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '올바른 도장을 확인하면 이후 관리 화면이 해당 데이터를 불러옵니다.',
          '도장을 잘못 선택하면 멤버, 카드, 일정이 누락되거나 어긋나 보일 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '멤버 관리', to: '/help-v3/admin/members' },
          { label: '카드 관리', to: '/help-v3/admin/cards' }
        ]
      },
      members: {
        badge: '관리',
        title: '멤버 관리',
        intro: '대기 중, 승인됨, 거절됨, 또는 차단된 도장 멤버를 확인하고 도장 내 참여 상태를 살펴봐야 할 때 Members를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '대기 중이거나 승인된 멤버십 상태를 확인합니다.',
          '화면이 허용하는 범위에서 거절, 차단, 또는 상태 업데이트를 수행합니다.',
          '멤버 프로필과 출석 관련 정보를 엽니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Pending, Accepted, Rejected, Banned 같은 상태 화면을 사용합니다.',
          '관리 쪽 멤버 영역에서 상세나 출석 정보를 엽니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '멤버, 강사, 관리 접근 권한은 같은 개념이 아닙니다.',
          '강사로 표시된 승인된 성인 행은 일반 성인 멤버 행으로 설명하면 안 됩니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 해당 사람은 올바른 멤버 상태로 이동합니다.',
          '관련 관리 화면도 새 상태에 맞춰 갱신됩니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '카드 관리', to: '/help-v3/admin/cards' },
          { label: '대리 예약', to: '/help-v3/admin/admin-booking' }
        ]
      },
      session_debt: {
        badge: '관리',
        title: '세션 부채 정리',
        intro: '카드나 예약 기록 때문에 스태프 쪽에서 정리해야 하는 부채 상태가 생겼을 때 이 흐름을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '열려 있는 세션 부채 항목을 검토합니다.',
          '현재 관리 측 정리 흐름으로 부채를 해결합니다.',
          '부채 처리를 학생 분쟁이나 오너 감독과 분리합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '현재 카드 도구에 속한 관리 측 debt 또는 card-debt 화면을 사용합니다.',
          '멤버 프로필 가정에서가 아니라 카드 운영 흐름에서 여세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '부채 처리는 학생 측 분쟁과 같은 흐름이 아닙니다.',
          '오너 검토 도구는 이 일상적인 관리 정산 흐름과 별개입니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '정산 후 부채 상태와 관련 카드 문맥이 업데이트됩니다.',
          '기본 기록 자체가 분쟁 대상이라면 단순 미지급이 아니라 올바른 분쟁 또는 감독 경로로 전환해야 합니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '카드 관리', to: '/help-v3/admin/cards' },
          { label: '멤버 관리', to: '/help-v3/admin/members' }
        ]
      },
      lessons: {
        badge: '관리',
        title: '수업 템플릿 관리',
        intro: '수업을 실제 일정에 게시하기 전에 템플릿을 만들거나 수정하거나 제거해야 할 때 Lessons를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '수업 템플릿을 만듭니다.',
          '템플릿 안의 지도 내용과 일정 세부사항을 수정합니다.',
          '더 이상 게시할 필요가 없는 템플릿을 삭제합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'lesson-day, create lesson, edit lesson 같은 템플릿 화면을 사용합니다.',
          '실제 schedule 게시로 넘어가기 전에 여기서 템플릿 작업을 끝냅니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '수업 템플릿은 이미 게시된 예정 수업과 같은 개념이 아닙니다.',
          'schedule 단계로 들어가기 전의 템플릿 변경만으로는 이미 게시된 일정 결과 전체가 자동으로 설명되지 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 이후 일정 게시에서 템플릿을 사용할 수 있습니다.',
          '실제 이벤트가 이미 존재하면 schedule 쪽 편집이 따로 필요할 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '일정', to: '/help-v3/admin/schedule' },
          { label: '대리 예약', to: '/help-v3/admin/admin-booking' }
        ]
      },
      schedule: {
        badge: '관리',
        title: '일정 게시 및 관리',
        intro: '수업을 게시하고, 예정 수업을 수정하거나 취소하거나, 실제 도장 일정에서 제거해야 할 때 일정 도구를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '템플릿에서 예정 수업을 게시합니다.',
          '예정 수업을 수정하거나 취소합니다.',
          '예정 수업 상세와 명단 상태를 검토합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'schedule layout과 create/edit event 흐름을 사용합니다.',
          '현재 상태를 확인해야 할 때는 해당 예정 수업 상세를 직접 여세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '취소되었거나 처리된 수업도 검토를 위해 계속 볼 수 있어야 합니다.',
          '실제 예약 동작 자체만 가드 규칙에 따라 막혀야 합니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 도장 일정이 현재 예정 수업 상태를 반영하도록 새로고침됩니다.',
          '수업이 취소되었더라도 상세 화면은 후속 검토에 여전히 유용할 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '수업 템플릿', to: '/help-v3/admin/lessons' },
          { label: '대리 예약', to: '/help-v3/admin/admin-booking' }
        ]
      },
      admin_booking: {
        badge: '관리',
        title: '학생이나 멤버 대신 예약하기',
        intro: '스태프가 관리 측 일정에서 멤버 대신 예약을 만들거나 제거해야 할 때 admin booking을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '관리 측에서 예정 수업을 엽니다.',
          '대상 멤버와 유효한 카드를 선택합니다.',
          '현재 예약 동작 흐름으로 예약을 만들거나 제거합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Admin Booking과 관련 카드 선택 흐름을 사용합니다.',
          '일반 멤버 검색이 아니라 지금 다루는 예정 수업에서 시작하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '관리 측은 익명 예약을 만들 수 없습니다.',
          '예약 허용 여부는 backend booking guard codes가 계속 결정합니다.',
          '명단 상세가 보이더라도 예상치 못한 실패 때는 새로고침 후 재시도가 필요할 수 있습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 수업 명단과 예약 상태가 업데이트됩니다.',
          '동작이 막히면 화면은 가드 조건을 설명해야 하며, 수업이 사라진 것처럼 보여서는 안 됩니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '일정', to: '/help-v3/admin/schedule' },
          { label: '멤버 관리', to: '/help-v3/admin/members' }
        ]
      },
      broadcasts: {
        badge: '관리',
        title: 'Broadcast 발행',
        intro: '앱에서 도장 업데이트나 훈련 게시물을 내보내고 싶을 때 현재의 관리 측 Broadcast 흐름을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '텍스트와 이미지를 포함한 Broadcast를 만듭니다.',
          '텍스트와 단일 MP4 영상을 포함한 Broadcast를 만듭니다.',
          '현재 선택된 도장의 콘텐츠 피드에 즉시 게시합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '관리 측 Members 영역의 Broadcast 발행 화면을 사용합니다.',
          '게시 전 올바른 선택 도장 컨텍스트에 있는지 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '현재는 임시저장 분기가 없습니다.',
          '앱은 단일 영상만 지원하며 이미지와 영상 혼합 게시물은 만들 수 없습니다.',
          '권한은 계속 도장 역할과 access에 따라 결정됩니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '생성에 성공하면 Broadcast가 바로 게시됩니다.',
          '미디어나 권한이 맞지 않으면 숨은 초안이 아니라 생성 실패가 되어야 합니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '알림 및 QR 도구', to: '/help-v3/admin/alerts-qr' },
          { label: '도장 컨텍스트', to: '/help-v3/admin/academy-context' }
        ]
      },
      alerts_qr: {
        badge: '관리',
        title: '알림 및 QR 도구 사용',
        intro: '현재 도장 컨텍스트와 관련된 알림, QR 동작, 또는 복귀 동작이 필요할 때 이 관리 측 지원 도구를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '도장에 속한 관리 또는 business 알림을 검토합니다.',
          'QR 관련 도구를 엽니다.',
          '복귀나 전환이 필요할 때 도장 컨텍스트 지원 흐름을 사용합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '도장 측 메뉴의 알림 화면과 QR 진입점을 사용합니다.',
          '현재 도장이 틀리다면 도장 전환기로 돌아가세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '이 흐름은 도장 작업을 지원하지만 오너 전용 business 관리를 대체하지는 않습니다.',
          '일부 복귀 동작은 일반 일상 메뉴가 아니라 더 넓은 bootstrap 또는 settings 경로에 속합니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '올바른 알림 또는 QR 동작은 다음 관련 도장 흐름으로 이동시킵니다.',
          '문제가 실제로 오너 전용 business 설정이라면 다음 단계는 오너 쪽 영역으로 이동하는 것입니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '도장 컨텍스트', to: '/help-v3/admin/academy-context' },
          { label: 'Broadcast 발행', to: '/help-v3/admin/broadcasts' }
        ]
      }
    },
    owner: {
      home: {
        badge: '오너',
        title: '오너 및 운영 가이드',
        intro: '도장 생성, 온보딩, 오너 전용 설정, 운영과 검토 업무가 필요할 때 이 가이드를 사용하세요.',
        areas_title: '오너 주제',
        links: [
          {
            title: '도장 생성과 온보딩',
            body: '첫 도장을 만들고 마일스톤 기반 온보딩을 진행합니다.',
            links: [
              { label: '도장 만들기', to: '/help-v3/owner/create-academy' },
              { label: '온보딩', to: '/help-v3/owner/onboarding' }
            ]
          },
          {
            title: '오너 비즈니스 관리',
            body: '도장 정보, 강사, 관리 접근 권한을 관리합니다.',
            links: [
              { label: '비즈니스 관리', to: '/help-v3/owner/business-management' },
              { label: '강사 관리', to: '/help-v3/owner/instructors' },
              { label: '접근 권한', to: '/help-v3/owner/access' }
            ]
          },
          {
            title: '운영과 검토',
            body: '분석, 근태와 급여, 감사 검토, 도구를 사용합니다.',
            links: [
              { label: '운영 분석', to: '/help-v3/owner/operations-analytics' },
              { label: '근태 및 급여', to: '/help-v3/owner/timesheets-salaries' },
              { label: '감사 및 검토', to: '/help-v3/owner/oversight' },
              { label: '도구', to: '/help-v3/owner/tools' }
            ]
          }
        ]
      },
      access: {
        badge: '오너',
        title: '접근 권한과 퍼미션 관리',
        intro: '현재 도장의 관리 화면에 들어올 수 있는 승인된 성인 멤버를 정하고 싶을 때 Access를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '조건을 충족하는 승인된 성인 멤버에게 도장 관리 접근 권한을 부여합니다.',
          '도장 단위 permission row를 업데이트하거나 제거합니다.',
          '관리 접근 권한을 강사 역할과 분리해서 관리합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '오너 측 permissions 또는 Access 화면을 사용합니다.',
          '좁은 메뉴에서는 버튼이 `Access`로 짧게 보일 수 있습니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '한 도장의 permission row를 제거해도 그 사람의 다른 도장 broader admin role이 자동으로 없어지지는 않습니다.',
          '이 화면은 도장 관리 접근 권한을 다루며, 강사 신분을 다루는 화면이 아닙니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 그 사람이 현재 도장에서 어떤 관리 기능을 열 수 있는지가 달라집니다.',
          '그 사람이 강사 역할도 필요하다면 Instructors를 별도로 사용하세요.',
          '다른 도장에도 속해 있다면, 그 다른 도장 쪽 broader admin role은 계속 남아 있을 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '강사 관리', to: '/help-v3/owner/instructors' },
          { label: '운영 분석', to: '/help-v3/owner/operations-analytics' }
        ]
      },
      onboarding: {
        badge: '오너',
        title: '첫 도장 온보딩 진행하기',
        intro: '도장을 만든 뒤 첫 도장 온보딩이 현재 어떻게 진행되는지 이해하고 싶을 때 이 주제를 사용하세요.',
        steps_title: '마일스톤 순서',
        steps_items: [
          '도장을 만듭니다.',
          '첫 강사를 추가하거나 오너가 직접 헤드 강사가 될지 결정합니다.',
          '첫 카드 템플릿을 만듭니다.',
          '첫 활성 카드를 발급합니다.',
          '첫 예약 수업을 만듭니다.',
          '첫 관리 측 예약 동작을 완료합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '가이드형 대시보드와 전체 화면 온보딩 안내를 따릅니다.',
          '앱이 다음 마일스톤으로 강조해 주는 구역을 사용합니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '온보딩은 마일스톤 기반이며, 지속되는 usage-history 상태를 기준으로 합니다.',
          '완료를 위해 실제 유료 학생이나 온라인 결제 설정이 필수는 아닙니다.',
          '온보딩 완료가 곧 청구 또는 수금 준비 완료를 의미하지는 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '각 마일스톤을 마치면 앱이 다음 권장 구역을 열어 줍니다.',
          '온보딩이 끝나면 더 넓은 관리 대시보드가 열리고, 권한이 있으면 추가 도구도 나타납니다.',
          '이 튜토리얼은 실제 유료 멤버가 없어도 본인이나 스태프 테스트 흐름으로 완료할 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '강사 관리', to: '/help-v3/owner/instructors' },
          { label: '접근 권한', to: '/help-v3/owner/access' }
        ]
      },
      create_academy: {
        badge: '오너',
        title: '새 도장 만들기',
        intro: '첫 도장을 만들거나 추가 도장을 새로 만들고 싶을 때 도장 생성 흐름을 사용하세요.',
        steps_title: '할 수 있는 일',
        steps_items: [
          '새 도장을 만듭니다.',
          '여러 역할이나 여러 도장이 있을 때 생성 모드로 전환합니다.',
          '생성 후 바로 다음 온보딩으로 이어집니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Business 생성 흐름과 관련 bootstrap / gate 화면을 사용합니다.',
          '앱이 먼저 경로 선택 화면을 보여주면, 기존 관리로 들어가는 것이 아니라 새 도장 생성이 목적임을 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '생성 가능한 도장 수는 현재 플랜이나 academy slots의 영향을 받을 수 있습니다.',
          '생성 모드를 취소하면 어떤 설정도 완료되지 않고 관리 진입점으로 돌아갑니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 새 도장이 선택되고, 이후 온보딩으로 진행됩니다.',
          '중간에 취소하면 앱이 admin / business 선택 진입점으로 돌아갑니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '온보딩', to: '/help-v3/owner/onboarding' },
          { label: '비즈니스 관리', to: '/help-v3/owner/business-management' }
        ]
      },
      business_management: {
        badge: '오너',
        title: '도장 비즈니스 설정 관리',
        intro: '도장 자체의 정보, 미디어, 오너 레벨 설정을 유지해야 할 때 Business Management를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '도장 기본 정보를 업데이트합니다.',
          'logo, banner, gallery 등 도장 미디어를 관리합니다.',
          '오너 레벨의 도장 설정과 라이프사이클 작업을 처리합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Business 관련 편집, 삭제, 미디어, 오너 설정 화면을 사용합니다.',
          '일상 admin 작업이 아니라 도장 자체를 조정하는 일이라면 이 영역으로 돌아오세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '이 영역은 오너 범위의 academy-management 기능이며, 일반 스태프 권한이 아닙니다.',
          '도장 정보를 업데이트해도 admin 접근 권한이나 운영 분석 권한이 자동으로 바뀌지는 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 도장 정보와 관련 오너 화면에 새 내용이 반영됩니다.',
          '다음으로 누가 관리 화면에 들어갈 수 있는지 다루려면 Access로 이동하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '접근 권한', to: '/help-v3/owner/access' },
          { label: '강사 관리', to: '/help-v3/owner/instructors' }
        ]
      },
      instructors: {
        badge: '오너',
        title: '강사 관리',
        intro: '도장 인력 중에서 가르치는 정체성 측면을 관리해야 할 때 Instructors를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '도장 안의 강사 정체성을 추가하거나 유지합니다.',
          '온보딩과 이후 도장 운영에서 헤드 강사와 teaching staff 구성을 지원합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '오너 쪽 Business Instructors 화면을 사용합니다.',
          '문제가 관리 접근이 아니라 가르치는 정체성에 관한 것이라면 여기로 돌아오세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '강사 정체성은 도장 관리 접근 권한과 다릅니다.',
          '강사 정체성은 급여나 보상 소유와도 다릅니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '강사 설정이 성공하면 온보딩과 인력 구성에 필요한 teaching identity가 충족됩니다.',
          '문제가 누가 도장을 관리하느냐라면 Access를 사용하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '접근 권한', to: '/help-v3/owner/access' },
          { label: '온보딩', to: '/help-v3/owner/onboarding' }
        ]
      },
      operations_analytics: {
        badge: '오너',
        title: '운영과 분석 사용',
        intro: '일반 관리 작업이 아니라 오너 수준의 지표, 실시간 리포트, 추세, 월간 보고가 필요할 때 Operations를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '실시간 및 요약 도장 지표를 확인합니다.',
          'insights, trends, monthly reporting 화면을 엽니다.',
          '상위 수준 리포트 해석에는 일반 admin 대시보드가 아니라 오너 운영 뷰를 사용합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '오너 운영 대시보드와 리포트 화면을 사용합니다.',
          '특정 도장 분석을 읽을 때는 현재 선택된 오너 도장 컨텍스트를 유지하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '운영과 분석은 오너 / operations 영역이지 일반 admin / staff 영역이 아닙니다.',
          '분석은 강사 정체성이나 접근 정체성과 별개입니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '접근에 성공하면 현재 선택된 도장의 오너 리포트와 운영 문맥이 로드됩니다.',
          '화면이 없으면 원인이 역할이나 권한일 수 있으며, 도장 데이터 오류만은 아닙니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '근태와 급여', to: '/help-v3/owner/timesheets-salaries' },
          { label: '감독 검토', to: '/help-v3/owner/oversight' }
        ]
      },
      timesheets_salaries: {
        badge: '오너',
        title: '근태 및 급여 관리',
        intro: '스태프 근태를 추적하거나 보수 관련 데이터를 관리해야 할 때 이 오너 운영 도구를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '스태프 출퇴근 기록을 다루거나 기록된 시간을 검토합니다.',
          '급여 또는 보수 관련 데이터를 검토하고 관리합니다.',
          '보수 문제를 강사 신분이나 관리 접근 권한과 분리합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'staff time, staff salaries 같은 오너 운영 화면을 사용합니다.',
          '문제가 보수이지 가르치는 신분이 아니라면 여기로 돌아오세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '보수 화면이 누가 강사인지를 정의하지는 않습니다.',
          '보수 화면이 access 또는 permissions 관리를 대체하지도 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '업데이트에 성공하면 오너 측 근태 또는 보수 데이터가 바뀝니다.',
          '스태프 문제가 실제로 역할 배정이라면 Instructors 또는 Access로 돌아가세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '운영 분석', to: '/help-v3/owner/operations-analytics' },
          { label: '접근 권한', to: '/help-v3/owner/access' }
        ]
      },
      oversight: {
        badge: '오너',
        title: '오너 감사 및 검토 사용',
        intro: '오너 전용 issue records, delete records, audit logs 검토 도구가 필요할 때 Oversight를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          'issue records를 검토합니다.',
          'delete records를 검토합니다.',
          '오너 전용 감사 영역에서 audit logs를 검토합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '일반 관리 대시보드가 아니라 오너 운영 측 oversight 영역을 사용합니다.',
          '문제가 기록 이력 또는 운영 검토에 속할 때만 이 도구를 엽니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '이 화면은 오너 전용 감사 도구입니다.',
          '일반 관리 측 Cards 흐름이 아닙니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '감사 및 검토를 통해 이력이나 운영에서 실제로 무엇이 일어났는지 확인할 수 있습니다.',
          '후속 조치가 필요하면 보통 올바른 관리 또는 학생 흐름으로 돌아갑니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '운영 분석', to: '/help-v3/owner/operations-analytics' },
          { label: '도구', to: '/help-v3/owner/tools' }
        ]
      },
      tools: {
        badge: '오너',
        title: '오너 도구와 제한 기능 사용',
        intro: '선택형 오너 도구가 무엇을 하는지, 그리고 접근이 생기면 어디에 나타나는지 이해하고 싶을 때 이 주제를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '현재 도장 흐름에 맞는 오너 도구나 제한 기능을 엽니다.',
          '오너 도구를 핵심 도장 흐름 위에 얹어 쓰고, 이를 대체하지는 않습니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '접근 권한이 생긴 뒤 해당 오너 / 운영 대시보드 진입점을 사용합니다.',
          '도구가 정말 없는지 판단하기 전에 현재 선택된 도장을 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '도움말은 도구의 목적과 흐름을 설명해야 하며, 오래된 구매 메커니즘을 설명하면 안 됩니다.',
          '오래된 bundle 가정은 더 이상 제품 사실로 다루면 안 됩니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '관련 접근 권한이 있으면 도구가 자체 워크플로 화면을 엽니다.',
          '도구가 보이지 않으면 보통은 라우트 고장이 아니라 역할이나 entitlement 문제입니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '운영 분석', to: '/help-v3/owner/operations-analytics' },
          { label: '비즈니스 관리', to: '/help-v3/owner/business-management' }
        ]
      }
    },
    account: {
      home: {
        badge: '계정',
        title: '계정 및 설정 가이드',
        intro: '로그인, 비밀번호 재설정, 프로필 수정, 환경설정 조정, 세션 종료가 필요할 때 이 가이드를 사용하세요.',
        areas_title: '계정 주제',
        links: [
          {
            title: '계정에 들어가기',
            body: '로그인, 계정 만들기, 또는 비밀번호 재설정으로 접근을 복구합니다.',
            links: [
              { label: '로그인', to: '/help-v3/account/sign-in' },
              { label: '계정 만들기', to: '/help-v3/account/create-account' },
              { label: '비밀번호 재설정', to: '/help-v3/account/reset-password' },
              { label: '비밀번호 변경', to: '/help-v3/account/change-password' }
            ]
          },
          {
            title: '프로필과 연결',
            body: '성인 계정 정보와 아동 계정 연결을 관리합니다.',
            links: [
              { label: '프로필', to: '/help-v3/account/profile' },
              { label: '아동 계정', to: '/help-v3/account/child-accounts' }
            ]
          },
          {
            title: '설정과 종료',
            body: '개인정보, 환경설정, 로그아웃, 계정 삭제를 처리합니다.',
            links: [
              { label: '개인정보 및 진행도', to: '/help-v3/account/privacy-progression' },
              { label: '환경설정', to: '/help-v3/account/preferences' },
              { label: '계정 삭제', to: '/help-v3/account/delete-account' },
              { label: '로그아웃', to: '/help-v3/account/logout' }
            ]
          }
        ]
      },
      create_account: {
        badge: '계정',
        title: '계정 만들기',
        intro: '아직 DojoMate 계정이 없고, 올바른 학생 또는 관리 흐름을 시작해야 할 때 계정 만들기를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '새로운 DojoMate 계정을 만듭니다.',
          '실제 필요에 맞는 역할 경로를 선택합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '인증 진입 흐름의 account creation 화면에서 시작합니다.',
          '내가 훈련을 위해 가입하는지, 아니면 도장을 만들고 관리하려는지 먼저 결정합니다.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '처음부터 역할 경로를 잘못 고르면 이후 어떤 가이드를 봐야 하는지 더 헷갈릴 수 있습니다.',
          '이메일이 이미 기존 계정에 속한다면, 새로 만들지 말고 로그인이나 비밀번호 재설정을 사용하세요.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 앱이 학생 또는 관리에 맞는 흐름으로 이어집니다.',
          '등록 실패 시에는 예전의 모호한 오류 문구가 아니라 현재 정규화된 인증 처리 규칙을 사용해야 합니다.',
          '다음 실질적 단계는 도장 가입이나 도장 설정 시작처럼 역할에 따라 달라집니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '로그인', to: '/help-v3/account/sign-in' },
          { label: '도장 가입', to: '/help-v3/member/join-academy' }
        ]
      },
      reset_password: {
        badge: '계정',
        title: '비밀번호 재설정',
        intro: '비밀번호를 잊었고 계정 접근 권한을 다시 얻어야 할 때 비밀번호 재설정 흐름을 사용하세요.',
        steps_title: '할 수 있는 일',
        steps_items: [
          '비밀번호 재설정 이메일 발송을 요청합니다.',
          '정상 로그인 대신 접근 복구 흐름으로 들어갑니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Sign In 화면에서 비밀번호 재설정 흐름으로 들어갑니다.',
          '문제가 단순 로그인 실패가 아니라 비밀번호 분실이라면 여기서 시작하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '이 흐름은 잃어버린 비밀번호를 되찾기 위한 것이며, 로그인 후 변경하는 기능이 아닙니다.',
          '이메일 주소 자체가 잘못되어 있으면 재설정 메일은 올바른 받은편지함으로 가지 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 비밀번호 재설정 이메일이 발송됩니다.',
          '메일이 오지 않으면 새 계정을 만들기 전에 받은편지함 확인과 재시도를 먼저 하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '로그인', to: '/help-v3/account/sign-in' },
          { label: '계정 만들기', to: '/help-v3/account/create-account' }
        ]
      },
      change_password: {
        badge: '계정',
        title: '비밀번호 변경',
        intro: '이미 로그인한 상태에서 현재 계정 비밀번호를 업데이트하고 싶을 때 이 흐름을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '로그인된 상태에서 계정 비밀번호를 변경합니다.',
          '현재 계정 흐름을 유지한 채 보안을 강화합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '로그인된 계정 설정의 change password 화면을 사용합니다.',
          '문제가 비밀번호 분실이 아니라 능동적인 갱신이라면 여기서 시작하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '이 흐름은 비밀번호 재설정과 다릅니다.',
          '일반적으로 현재 비밀번호 확인이 필요합니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 계정에 새 비밀번호가 저장됩니다.',
          '현재 기기 세션은 유지되면서 다른 기기 세션은 해제될 수 있습니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '비밀번호 재설정', to: '/help-v3/account/reset-password' },
          { label: '로그아웃', to: '/help-v3/account/logout' }
        ]
      },
      sign_in: {
        badge: '계정',
        title: '로그인',
        intro: '계정이 이미 존재하고 정상적인 DojoMate 세션을 시작하고 싶을 때 로그인 흐름을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '기존 계정 자격 증명으로 로그인합니다.',
          '일반적인 학생, 관리자, 또는 오너 세션을 시작합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'Sign In 화면을 기본 진입점으로 사용합니다.',
          '문제가 단순 로그인 실패가 아니라 비밀번호 분실이라면 비밀번호 재설정 주제를 확인하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '현재 인증 결과는 오래된 오류 문구가 아니라 새로운 정규화 규칙에 따라 처리됩니다.',
          '일부 계정 무결성 문제는 단순 비밀번호 오류가 아니라 지원 또는 복구 흐름입니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 앱이 현재 사용자 세션을 시작합니다.',
          '세션을 정상적으로 시작할 수 없으면 앱이 단순 로그인 오류 대신 복구나 지원 흐름으로 보낼 수 있습니다.',
          '이후 보호된 요청은 예전 호환 경로가 아니라 현재 refresh-token 흐름을 사용합니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '비밀번호 재설정', to: '/help-v3/account/reset-password' },
          { label: '계정 만들기', to: '/help-v3/account/create-account' }
        ]
      },
      preferences: {
        badge: '계정',
        title: '환경설정 조정',
        intro: '언어, 통화, 테마, 기타 개인 설정을 바꾸고 싶을 때 환경설정을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '앱 언어와 표시 환경설정을 조정합니다.',
          '계정 경험과 관련된 개인 설정을 바꿉니다.',
          '도장의 business 설정을 건드리지 않고 내 app 사용 경험만 조정합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '계정 설정과 환경설정 관련 화면을 사용합니다.',
          '바꾸려는 것이 개인 app 경험이지 도장 정보가 아니라면 이곳에 머무르세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '환경설정은 도장의 business 설정을 바꾸지 않습니다.',
          '즉시 반영되는 항목도 있고, 완전히 반영되려면 다음 새로고침이 필요한 항목도 있습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 앱 표시나 계정 경험이 새 설정에 맞게 업데이트됩니다.',
          '현재 세션을 끝내고 싶다면 여기서 계정 삭제를 찾지 말고 Logout을 사용하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '개인정보 및 진행도', to: '/help-v3/account/privacy-progression' },
          { label: '로그아웃', to: '/help-v3/account/logout' }
        ]
      },
      profile: {
        badge: '계정',
        title: '프로필 수정',
        intro: '성인 계정 자체의 정보가 검토되거나 업데이트되어야 할 때 Profile을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '성인 계정에 묶인 프로필 세부정보를 확인합니다.',
          '로그인된 계정 흐름에서 프로필 필드를 업데이트합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          'profile user와 edit-profile 관련 화면을 사용합니다.',
          '도장 회원 정보가 아니라 계정 정체성 정보가 잘못되었다면 여기로 돌아오세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '프로필 수정이 도장 회원 결정 자체를 대신하지는 않습니다.',
          '아동 계정 관계는 별도 흐름입니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 계정 프로필에 최신 저장값이 반영됩니다.',
          '실제 문제가 아동 관계나 회원 관계라면 올바른 주제로 전환하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '아동 계정', to: '/help-v3/account/child-accounts' },
          { label: '개인정보 및 진행도', to: '/help-v3/account/privacy-progression' }
        ]
      },
      child_accounts: {
        badge: '계정',
        title: '아동 계정 관리',
        intro: '성인 계정에 연결된 아동 계정을 다뤄야 할 때 Child Accounts를 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '현재 성인 계정에 연결된 아동 계정을 검토합니다.',
          '아동 정보와 성인 계정 사이의 관계를 이해합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '로그인된 계정 경로의 child account 관련 화면을 사용합니다.',
          '문제가 보호자, 아동, 또는 관리 관계라면 여기로 돌아오세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '아동 계정 관계는 일반 성인 프로필 수정과 다릅니다.',
          '도장 멤버 승인 상태와도 다른 흐름입니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 계정에 최신 아동 연결 상태가 표시됩니다.',
          '문제가 실제로 도장 멤버십이라면 멤버 관련 주제로 돌아가세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '프로필', to: '/help-v3/account/profile' },
          { label: '도장 가입', to: '/help-v3/member/join-academy' }
        ]
      },
      privacy_progression: {
        badge: '계정',
        title: '개인정보 및 진행도 설정 관리',
        intro: '가시성, 랭크 참여, 프로필 노출, 또는 계정 수준 개인정보 선택이 문제일 때 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '개인정보 관련 계정 설정을 검토합니다.',
          '앱이 노출하는 범위에서 진행도나 프로필 가시성 설정을 조정합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '로그인된 계정 경로의 settings privacy / progression 화면을 사용합니다.',
          '문제가 명단이나 예약 로직이 아니라 가시성이라면 여기로 돌아오세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '익명 예약은 개인정보 설정 자체와 같은 개념이 아닙니다.',
          '도장 측 멤버 가시성과 계정 개인정보는 관련은 있지만 동일하지 않습니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 앱이 최신 개인정보 또는 진행도 설정을 사용합니다.',
          '문제가 예약 명단의 익명 표시 그 자체라면 Booking을 사용하세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '예약', to: '/help-v3/member/booking' },
          { label: '환경설정', to: '/help-v3/account/preferences' }
        ]
      },
      delete_account: {
        badge: '계정',
        title: '계정 삭제',
        intro: '한 도장을 떠나는 것이 아니라 DojoMate 계정 전체를 영구 삭제하고 싶을 때 이 삭제 흐름을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '계정 전체의 영구 삭제 흐름을 시작합니다.',
          '삭제 전에 계정 삭제와 단일 도장 멤버십 제거를 구분합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '계정 개인정보 또는 삭제 관련 화면을 사용합니다.',
          '목표가 현재 세션만 멈추는 것이라면 Logout을 사용하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '계정 전체 삭제는 한 도장을 떠나는 것과 다릅니다.',
          '이것은 더 강한 영구 동작이며 일반 로그아웃과 혼동하면 안 됩니다.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 계정 전체 접근이 제거됩니다.',
          '특정 도장 관계만 정리하려는 것이라면 멤버 또는 도장 관련 흐름으로 돌아가세요.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '로그아웃', to: '/help-v3/account/logout' },
          { label: '개인정보 및 진행도', to: '/help-v3/account/privacy-progression' }
        ]
      },
      logout: {
        badge: '계정',
        title: '로그아웃',
        intro: '현재 기기 세션을 끝내고 로그인 상태를 깔끔하게 벗어나고 싶을 때 Logout을 사용하세요.',
        what_title: '할 수 있는 일',
        what_items: [
          '현재 로그인된 앱 세션을 종료합니다.',
          '다른 계정이나 나중의 재진입을 준비합니다.'
        ],
        where_title: '어디에서 하는가',
        where_items: [
          '로그인된 계정 설정 영역을 사용합니다.',
          '현재 세션 사용만 멈추고 싶다면 계정 삭제가 아니라 로그아웃을 선택하세요.'
        ],
        limits_title: '중요한 제한',
        limits_items: [
          '로그아웃은 현재 세션만 끝내며 계정을 삭제하지는 않습니다.',
          '비밀번호 자체를 바꾸고 싶다면 Change Password를 사용하세요.'
        ],
        results_title: '그 다음에는',
        results_items: [
          '성공하면 이 기기의 현재 로그인 상태가 지워집니다.',
          '나중에 같은 계정이나 다른 계정으로 다시 로그인할 수 있습니다.',
          '비밀번호 변경이나 삭제 같은 더 강한 계정 효과가 필요 없을 때 Logout은 안전한 세션 종료 경로입니다.'
        ],
        next_title: '다음 주제',
        next_links: [
          { label: '로그인', to: '/help-v3/account/sign-in' },
          { label: '계정 만들기', to: '/help-v3/account/create-account' }
        ]
      }
    }
  },
  help_v2: {
    support: {
      heading: '도움이 더 필요하신가요?',
      default_description: '앱과 연결된 웹 흐름 전반의 질문, 예외 상황, 후속 지원은 Source Combatives의 DojoMate 도움말 게시판을 이용하세요.',
      default_button: 'DojoMate 도움말 게시판 열기'
    },
    layout: {
      preview_badge: '도움말 v2',
      intro: '오너와 관리자 중심의 작업형 가이드입니다. v2를 만드는 동안에도 v1은 계속 공개됩니다.',
      open_v1: '도움말 v1 열기',
      search_placeholder: '도움말 검색',
      search_no_results: '검색 결과가 없습니다',
      nav: {
        start_here: '여기서 시작',
        owner_setup: '오너 설정',
        student: '학생',
        account_profile: '계정 및 프로필',
        business: '비즈니스',
        portal: '포털',
        schedule: '일정',
        cards: '카드',
        members: '멤버',
        tools: '도구',
        home: '도움말 v2 홈',
        owner: '도장을 운영합니다',
        admin: '운영을 돕습니다',
        student_home: '도장에서 수련합니다',
        getting_started_owner: '오너 시작 가이드',
        create_academy: '도장 만들기',
        academy_basics: '도장 기본 설정',
        academy_qr: '도장 QR',
        delete_academy: '도장 삭제',
        join_academy: '도장 가입',
        memberships: '회원 자격 관리',
        booking: '예약',
        system_alerts: '시스템 알림',
        broadcast: '공지 배포',
        attendance_records: '출석 기록',
        sign_in: '로그인',
        create_account: '계정 만들기',
        reset_password: '비밀번호 재설정',
        account_troubleshooting: '계정 문제 해결',
        change_password: '비밀번호 변경',
        language: '언어',
        currency: '통화',
        privacy: '개인정보',
        delete_account: '계정 삭제',
        logout: '로그아웃',
        edit_profile: '프로필 수정',
        child_accounts: '자녀 계정',
        business_overview: '비즈니스 개요',
        compare_business_pages: '비즈니스 페이지 비교',
        choose_who_can_teach: '누가 가르칠지 정하기',
        choose_who_can_manage: '누가 관리할지 정하기',
        track_pay_and_performance: '보수와 성과 보기',
        affiliate_portal: '제휴 포털',
        portal_register: '포털 등록',
        portal_members: '포털 멤버',
        portal_ranks: '포털 랭크',
        portal_cards: '포털 카드',
        portal_reports: '포털 리포트',
        schedule_overview: '일정 개요',
        create_a_lesson: '수업 만들기',
        edit_or_cancel_a_lesson: '수업 수정 또는 취소',
        book_for_students: '학생 대신 예약하기',
        cards_overview: '카드 개요',
        how_cards_work: '카드 작동 방식',
        create_a_card_template: '카드 템플릿 만들기',
        issue_cards: '카드 발급',
        edit_templates: '템플릿 수정',
        delete_templates: '템플릿 삭제',
        delete_cards: '카드 삭제',
        card_records: '분쟁',
        members_overview: '멤버 개요',
        add_a_member_directly: '멤버 직접 추가',
        enrollment_vs_applications: '직접 등록 vs 신청',
        review_applications: '신청 검토',
        reject_or_ban_members: '멤버 거절 또는 차단',
        tools_overview: '도구 개요',
        activate_tools_and_premium: '도구 상태 확인',
        timetable: '시간표',
        pause_cards: '카드 일시정지'
      }
    },
    welcome: {
      badge: '미리보기',
      title: '도움말 가이드 v2',
      intro: '이 버전은 사용자가 어떤 화면에 있는지가 아니라 DojoMate를 사용하는 사람을 중심으로 다시 구성하고 있습니다.',
      who_title: '먼저 내 역할부터 선택하세요',
      owner_title: '도장을 운영합니다',
      owner_body: '도장 오너로서 설정, 팀, 카드, 일정, 도구 안내가 필요하다면 여기서 시작하세요.',
      owner_link: '오너 경로 열기',
      admin_title: '도장 운영을 돕습니다',
      admin_body: '수업, 멤버, 카드, 일상 운영을 돕는 스태프라면 여기서 시작하세요.',
      admin_link: '관리자 경로 열기',
      student_title: '도장에서 수련합니다',
      student_body: '학생, 보호자, 도장 멤버로서 계정, 예약, 멤버십 안내가 필요하다면 여기서 시작하세요.',
      student_link: '학생 경로 열기',
      jobs_title: '또는 바로 작업으로 이동',
      cards_title: '멤버십 카드 설정',
      cards_body: '카드가 예약을 어떻게 지원하는지 이해한 뒤 템플릿을 만들고 카드를 발급하세요.',
      cards_link: '카드 개요 열기',
      members_title: '멤버 추가 및 관리',
      members_body: '사람을 도장에 등록하고, 신청을 검토하고, 상태 변경을 관리하세요.',
      members_link: '멤버 개요 열기',
      tools_title: '유료 도구 사용',
      tools_body: '핵심 흐름이 자리 잡은 뒤 반복 일정, 카드 일시정지 같은 도구를 추가하고 필요할 때 기능 페이지에서 프리미엄을 활성화하세요.',
      tools_link: '도구 개요 열기',
      difference_title: 'v2가 다른 점',
      difference_body: 'v2는 사람과 그 사람이 끝내려는 작업을 중심으로 구성되어, 다음에 무엇을 해야 하는지 더 쉽게 판단할 수 있습니다.',
      difference_v1: '검색이 있는 기존 가이드를 원하면 도움말 v1 열기',
      difference_start: '여기서 시작'
    },
    owner_home: {
      badge: '오너',
      title: '도장을 운영합니다',
      intro: '이 경로는 도장을 설정하고 팀을 만들고 일상 운영을 관리하는 오너를 위한 것입니다.',
      start_title: '가장 좋은 시작점',
      start_body: '새 도장을 설정하는 중이라면 먼저 오너 설정 경로부터 시작하세요. 이후 흐름이 이해되기 쉬운 순서로 정리되어 있습니다.',
      start_primary: '오너 시작 가이드',
      start_secondary: '도장 만들기',
      setup_title: '도장 설정',
      setup_create_title: '도장 먼저 만들기',
      setup_create_body: '멤버를 들이거나 수업을 만들기 전에 먼저 도장 자체를 준비하세요.',
      setup_review_title: '기본 정보와 QR 확인',
      setup_review_body: '도장 정보를 정확하게 유지하고, 빠른 등록이 필요할 때는 QR 가입을 사용하세요.',
      setup_lifecycle_title: '도장 수명 주기',
      setup_lifecycle_body: '도장 자체를 더 이상 유지하지 않을 때만 삭제 가이드를 사용하세요.',
      jobs_title: '주요 작업',
      jobs_team_title: '팀 구성하기',
      jobs_team_body: '누가 가르치고, 누가 도장을 관리하며, 보수 도구를 어떻게 사용할지 정하세요.',
      jobs_team_link: '비즈니스 열기',
      jobs_schedule_title: '수업과 예약 운영하기',
      jobs_schedule_body: '수업을 만들고 변경을 처리하고 필요할 때 예약을 도와주세요.',
      jobs_schedule_link: 'Schedule 열기',
      jobs_cards_title: '카드와 멤버 설정하기',
      jobs_cards_body: '사람을 도장에 등록하고 카드를 발급하여 예약 시 수업 차감이 올바르게 이루어지게 하세요.',
      portal_title: '포털 작업 흐름',
      portal_body: '일부 작업은 일상적인 DojoMate 앱 화면이 아니라 Source Combatives Affiliate Portal에서 진행됩니다.',
      portal_link: '제휴 포털 가이드 열기',
      paid_title: '유료 기능',
      paid_body: '시간표, 카드 일시정지, 스태프 접근, 분석은 권한으로 제어됩니다. 도구를 활성화하거나 프리미엄을 시작해야 하면 기능 페이지 가이드를 확인하세요.',
      paid_link: '도구와 프리미엄 활성화'
    },
    owner_setup: {
      getting_started: {
        badge: '시작 가이드',
        title: '올바른 순서로 도장을 설정하세요',
        intro: '처음부터 시작한다면 이 페이지가 가장 단순한 순서를 보여 주므로 이후 앱 흐름도 더 이해하기 쉬워집니다.',
        order_title: '추천 순서',
        order_items: [
          '도장을 만드세요.',
          '멤버를 도장에 들이세요.',
          '멤버십 카드 템플릿을 만드세요.',
          '활성 멤버에게 카드를 발급하세요.',
          '강사와 스태프 접근 권한을 설정하세요.',
          '첫 수업을 만드세요.',
          '준비가 되면 유료 도구를 추가하세요. Affiliate Portal에는 모든 도구가 열리는 90일 무료 Premium 체험이 포함됩니다.'
        ],
        why_title: '이 순서가 도움이 되는 이유',
        why_items: [
          '카드를 발급하려면 먼저 멤버가 존재해야 합니다.',
          '예약이 제대로 작동하려면 먼저 카드가 있어야 합니다.',
          '수업을 만들기 전에 강사가 준비되어 있어야 합니다.',
          '유료 도구는 도장의 기본 워크플로우가 이미 돌아간 뒤에 추가할 때 가장 효과적입니다.'
        ],
        start_title: '확신이 없다면 여기서 시작하세요',
        create_link: '도장 만들기',
        members_link: '멤버 들이기',
        cards_link: '카드 설정'
      },
      create: {
        badge: '오너',
        title: '도장 만들기',
        intro: '이것은 오너의 첫 단계입니다. 멤버를 들이고, 카드를 발급하고, 수업 만들기를 시작하기 전에 먼저 도장을 만드세요.',
        before_title: '만들기 전에',
        before_items: [
          '도장이 이미 존재하는지 확인해 중복 생성을 피하세요.',
          '처음부터 올바른 통화를 선택할 준비를 하세요.'
        ],
        steps_title: '단계',
        steps_items: [
          '도장 생성 흐름을 엽니다.',
          '도장 정보를 신중하게 입력합니다.',
          '올바른 통화를 선택합니다.',
          '폼을 제출해 도장을 생성합니다.'
        ],
        next_title: '다음 단계',
        next_body: '도장이 생긴 뒤의 일반적인 다음 작업은 기본 도장 정보를 검토한 뒤 사람들을 도장에 들이는 것입니다.',
        back_link: '오너 경로로 돌아가기',
        next_link: '도장 기본 정보로 이동'
      },
      basics: {
        badge: '오너',
        title: '도장 기본 정보 업데이트',
        intro: '이 페이지를 사용해 도장 프로필을 정확하게 유지하면 멤버와 스태프가 올바른 도장 정보를 보게 됩니다.',
        use_title: '이 페이지를 사용하는 경우',
        use_items: [
          '도장 정보가 수정되거나 새로고침되어야 할 때',
          '도장에 표시되는 정보가 바뀌었을 때',
          '멤버에게 도장이 어떻게 보이는지 검토하고 싶을 때'
        ],
        know_title: '알아둘 점',
        know_items: [
          '멤버와 카드를 확장하기 전에 오너는 도장 기본 정보를 최신 상태로 유지해야 합니다.',
          '멤버가 도장 메시지나 온보딩 흐름을 통해 가입한다면 정확한 도장 정보가 중요합니다.'
        ],
        next_title: '다음 단계',
        back_link: '도장 만들기로 돌아가기',
        next_link: '도장 QR로 이동'
      },
      qr: {
        badge: '오너',
        title: '도장 QR 코드 공유',
        intro: '사람들이 도장을 직접 검색하지 않고 더 빠르게 가입하길 원할 때 도장 QR을 사용하세요.',
        use_title: '가장 도움이 되는 경우',
        use_items: [
          '도장에서 직접 온보딩할 때',
          '이벤트, 체험 수업, 바쁜 등록일',
          '여러 사람이 빠르게 가입해야 하는 상황'
        ],
        know_title: '알아둘 점',
        know_items: [
          'QR 경로는 직접 검색하게 하는 것보다 보통 더 빠릅니다.',
          '온보딩 중 가입 실수를 줄이고 싶을 때 특히 유용합니다.'
        ],
        next_title: '다음 단계',
        back_link: '도장 기본 정보로 돌아가기',
        next_link: '멤버 들이기'
      },
      delete: {
        badge: '오너',
        title: '도장 삭제는 신중하게',
        intro: '이것은 도장 라이프사이클 단계이지 일상 작업이 아닙니다. 도장을 정말로 제거해야 할 때만 사용하세요.',
        before_title: '실행하기 전에',
        before_items: [
          '먼저 선행 조건을 검토하세요.',
          '현재 멤버에게 어떤 일이 생기는지 이해하세요.',
          '일반 정리를 위한 지름길로 도장 삭제를 사용하지 마세요.'
        ],
        meaning_title: '이 의미는',
        meaning_body: '도장 삭제는 중대한 오너 작업입니다. 도장 자체가 더 이상 활성 상태로 남아 있지 않아야 할 때만 이뤄져야 합니다.',
        help_title: '먼저 도움이 필요하신가요?',
        help_body: '삭제가 맞는 결정인지 확신이 없다면 마지막 단계를 하기 전에 DojoMate 도움 게시판에서 먼저 물어보세요.',
        help_link: 'DojoMate 도움 게시판 열기',
        back_link: '오너 경로로 돌아가기'
      }
    },
    admin_home: {
      badge: '관리자',
      title: '도장 운영을 돕습니다',
      intro: '이 경로는 오너가 기본 설정을 마친 뒤 일상 운영을 돕는 스태프를 위한 것입니다.',
      jobs_title: '가장 흔한 관리자 작업',
      schedule_title: '일정 작업 처리',
      schedule_body: '수업을 만들고 변경을 수정하며 필요할 때 학생이나 보호자의 예약을 도와주세요.',
      schedule_link: 'Schedule 열기',
      members_title: '멤버와 카드 관리',
      members_body: '신청을 검토하고 멤버를 직접 등록하고 카드를 발급하세요.',
      delegated_title: '위임된 권한 사용',
      delegated_body: '오너가 관리자 접근 권한을 켜 두었다면, 일상 작업에 일정, 멤버, 카드, 때로는 도구까지 포함될 수 있습니다.',
      delegated_link: '팀 접근 권한 검토',
      know_title: '알아둘 점',
      know_items: [
        '관리자 관련 주제는 오너 흐름과 많이 겹치므로 완전히 별도의 위키 트리가 필요하지 않습니다.',
        '계정에서 어떤 기능이 보이지 않는다면 오너가 접근 권한을 부여하거나 필요한 도구를 먼저 활성화해야 할 수 있습니다.'
      ],
      compare_link: 'Business 페이지 비교',
      tools_link: '도구 상태 확인'
    },
    business: {
      overview: {
        badge: 'Business',
        paid_badge: '유료',
        title: '도장의 운영 측면 관리하기',
        intro: 'Business 영역은 팀을 구성하고, 누가 도장을 관리할지 정하고, 보수와 성과 도구를 검토하는 데 사용합니다.',
        start_title: '해야 할 일부터 시작하세요',
        cards: [
          {
            title: '누가 가르칠지 정하기',
            body: '강사 설정을 사용해 누가 수업에 배정될 수 있는지 결정합니다.',
            cta: '강사 설정 가이드 열기',
            link: '/help-v2/business/instructors'
          },
          {
            title: '누가 도장을 관리할지 정하기',
            body: '팀 접근 권한을 사용해 관리자 접근 권한을 부여하거나 업데이트합니다.',
            cta: '팀 접근 권한 가이드 열기',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: '보수, 시간, 성과 확인하기',
            body: 'Analytics를 사용해 보수, 리포트, 타임시트, 급여 관련 도구를 다룹니다.',
            cta: 'Analytics 가이드 열기',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        know_title: '알아둘 점',
        know_items: [
          '이 Business 페이지들은 서로 다른 작업을 지원하므로, 하려는 일과 맞는 페이지를 고르는 것이 좋습니다.',
          '새 도장을 설정하는 중이라면 먼저 누가 가르칠지 정하는 것부터 시작하세요.',
          '어디서 시작해야 할지 모르겠다면 팀 설정의 첫 단계로는 강사 설정이 가장 적합하고, 그다음이 팀 접근 권한, 마지막이 Analytics입니다.'
        ],
        compare_link: '비즈니스 페이지 비교',
        next_title: '다음 단계',
        next_body: '가르치는 팀을 설정하는 중이라면 먼저 “누가 가르칠지 정하기”부터 시작하세요.',
        next_link: '“누가 가르칠지 정하기”로 이동'
      },
      compare: {
        badge: 'Business',
        paid_badge: '유료',
        title: '강사 설정, 팀 접근 권한, Analytics',
        intro: '이 세 가지 Business 페이지는 서로 다른 작업을 지원합니다. 지금 해야 할 일에 어떤 페이지가 맞는지 확실하지 않을 때 이 페이지를 사용하세요.',
        pick_title: '작업에 따라 페이지 고르기',
        cards: [
          {
            title: '강사 설정',
            body: '누가 수업을 가르칠 수 있는지 정해야 할 때 이 페이지를 사용합니다.',
            items: [
              '누군가를 스태프에 추가하기',
              '강사 상태 켜기',
              '일정 운영을 위한 강사진 준비하기'
            ],
            cta: '강사 설정 열기',
            link: '/help-v2/business/instructors'
          },
          {
            title: '팀 접근 권한',
            body: '누군가가 도장 운영을 도와야 할 때 이 페이지를 사용합니다.',
            items: [
              '멤버를 관리자(Admin)로 승격하기',
              '접근 영역 검토하기',
              '나중에 관리자 권한 제거하기'
            ],
            cta: '팀 접근 권한 열기',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: 'Analytics',
            body: '운영 수치, 보수 설정, 시간 기록을 보고 싶을 때 이 페이지를 사용합니다.',
            items: [
              '리포트 검토하기',
              '보수 설정하기',
              '타임시트와 급여 관련 도구 확인하기'
            ],
            cta: 'Analytics 열기',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        rules_title: '빠른 규칙',
        rules_items: [
          'Analytics에서 보수를 바꿔도 그 사람이 강사가 되는 것은 아닙니다.',
          '누군가에게 관리자 접근 권한을 줘도 그 사람이 강사가 되는 것은 아닙니다.',
          '누군가가 가르치기도 하고 관리도 해야 한다면, 하나 이상의 Business 페이지에서 설정해야 할 수 있습니다.'
        ],
        start_title: '아직도 헷갈린다면 여기부터',
        start_body: '질문이 “이 사람이 가르칠 수 있나?”라면 강사 설정부터 시작하세요. “이 사람이 도장을 관리할 수 있나?”라면 팀 접근 권한으로 가세요. “보수나 리포트는 어디서 보나?”라면 Analytics로 가세요.',
        instructors_link: '강사 설정',
        staff_access_link: '팀 접근 권한',
        analytics_link: 'Analytics'
      },
      instructors: {
        badge: 'Business',
        title: '누가 가르칠지 정하기',
        intro: 'Business → 강사 설정을 사용해 누가 수업에 배정될 수 있는지 결정합니다.',
        before_title: '시작하기 전에',
        before_items: [
          '수업을 만들기 전에 최소 한 명의 강사가 필요합니다.',
          '오너도 가르친다면 보통은 먼저 자기 자신을 추가합니다.',
          '그 사람은 이미 도장의 멤버로 등록되어 있어야 합니다.'
        ],
        steps_title: '단계',
        steps_items: [
          'Business → 강사 설정을 엽니다.',
          'Choose Member를 누릅니다.',
          '추가할 사람을 선택합니다.',
          'Add to Staff를 누릅니다.',
          '그 사람이 수업을 가르쳐야 한다면 instructor 토글을 켭니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '추가한 사람은 스태프 목록에 나타납니다.',
          'instructor 토글을 끈 채 두면 그 사람은 보조 강사로만 남을 수 있습니다.',
          'Analytics에서 보수를 변경해도 그 사람이 강사가 되는 것은 아닙니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '그 사람이 도장 관리도 해야 한다면 그것은 별도의 설정 단계입니다. 가르치는 접근 권한과 관리자 접근 권한은 같은 것이 아닙니다.',
        compare_link: 'Business 페이지 비교',
        next_title: '다음 단계',
        next_body: '강사진 구성이 끝나면 다음으로 자주 하는 작업은 누가 관리자 접근 권한도 가져야 하는지 정하는 것입니다.',
        back_link: 'Business 개요로 돌아가기',
        next_link: '팀 접근 권한으로 이동'
      },
      staff_access: {
        badge: 'Business',
        paid_badge: '유료 도구',
        title: '누가 도장을 관리할지 정하기',
        intro: 'Business → 권한 설정을 사용해 팀에 관리자 접근 권한을 부여하거나 업데이트합니다.',
        use_title: '이 페이지를 사용하는 경우',
        use_items: [
          '누군가가 수업, 멤버, 카드 또는 timetable 작업을 도와야 할 때',
          '멤버를 관리자(Admin)로 승격해야 할 때',
          '관리자 접근 권한을 검토하거나 제거하고 싶을 때'
        ],
        steps_title: '단계',
        steps_items: [
          'Business → 권한 설정을 엽니다.',
          '업데이트할 사람을 찾습니다.',
          'Member로 표시된다면 해당 행을 누르고 Confirm을 눌러 관리자로 만듭니다.',
          '그 관리자를 다시 눌러 접근 설정을 검토합니다.',
          '원하는 접근 설정을 선택하고 Confirm을 누릅니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '배지는 Member와 Admin 두 가지입니다.',
          '권한 설정은 관리자 접근 권한을 제어합니다. 누가 가르치는지는 여기서 정하지 않습니다.',
          '현재 접근 영역은 Schedule, 멤버, Cards, Timetable입니다.',
          '이 기능은 entitlement로 제어됩니다. 도구가 비활성 상태면 위임된 스태프 권한은 적용되지 않습니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '누군가에게 가르치는 책임을 주는 것과 관리자 접근 권한을 주는 것은 별도의 설정입니다. 가르치는 역할은 강사 설정, 관리자 역할은 권한 설정을 사용하세요.',
        compare_link: 'Business 페이지 비교',
        remove_title: '관리자 접근 권한 제거',
        remove_body: '그 사람이 더 이상 도장을 관리하지 않아야 한다면 Remove Admin을 사용해 Member로 되돌리세요.',
        next_title: '다음 단계',
        next_body: '팀 역할이 정리되면 다음으로 자주 하는 작업은 Analytics에서 보수 및 리포트 도구를 검토하는 것입니다.',
        back_link: '강사 설정으로 돌아가기',
        activate_link: '도구 상태 확인',
        compare_pages_link: '페이지 비교',
        next_link: 'Analytics로 이동'
      },
      analytics: {
        badge: 'Business',
        paid_badge: '유료 도구',
        title: '보수, 시간, 성과 확인하기',
        intro: 'Business → Analytics를 사용해 보수, 리포트, 타임시트, 급여 관련 도구를 다룹니다.',
        use_title: '이 페이지를 사용하는 경우',
        use_items: [
          '도장 지표와 리포트를 검토하고 싶을 때',
          '보수 정보를 입력하거나 업데이트해야 할 때',
          '타임시트나 스태프 출퇴근 활동을 검토해야 할 때'
        ],
        covers_title: 'Analytics에서 다루는 내용',
        cards: [
          {
            title: '리포트',
            body: '실시간 수치, 주간 요약, 재무 리포트, 월간 출석 관련 리포트를 검토합니다.'
          },
          {
            title: '보수',
            body: '급여, 시급, 개인 레슨 보수를 설정해 비용을 더 정확히 추적할 수 있게 합니다.'
          },
          {
            title: '시간 및 급여 도구',
            body: '시간 기반 스태프 기록을 위한 펀치 카드, 오피스 시간, 승인 흐름을 검토합니다.'
          }
        ],
        know_title: '알아둘 점',
        know_items: [
          'Analytics에서 보수를 바꿔도 그 사람이 강사가 되는 것은 아닙니다.',
          '그 사람이 가르쳐야 한다면 강사 설정에서 그 역할을 추가하세요.',
          '그 사람이 도장을 관리해야 한다면 권한 설정에서 해당 접근 권한을 부여하세요.',
          '일부 Analytics 화면은 완전히 잠길 수 있고, 다른 화면은 보인 채로 업그레이드 안내가 표시될 수 있습니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: 'Analytics는 강사 역할이나 관리자 역할을 정하는 곳이 아닙니다. 운영 지표를 검토하고 보수 관련 도구를 관리하는 곳입니다.',
        compare_link: 'Business 페이지 비교',
        next_title: '다음 단계',
        next_body: '아직 팀을 설정 중이라면 먼저 강사 역할과 관리자 역할 설정을 마무리하세요. 팀 설정이 끝났다면 다음으로 자주 하는 작업은 수업을 만들고 일상 운영은 예약이 처리하도록 두는 것입니다.',
        activate_link: '도구 상태 확인',
        instructors_link: '강사 설정',
        staff_access_link: '팀 접근 권한',
        next_link: '일정으로 이동'
      }
    },
    schedule: {
      overview: {
        badge: '일정',
        title: '수업을 계획하고 운영하고 관리하기',
        intro: '일정 영역을 사용해 수업을 만들고, 수업 세부 정보를 조정하고, 필요할 때 학생 예약을 도와줍니다.',
        start_title: '해야 할 일부터 시작하세요',
        cards: [
          {
            title: '수업 만들기',
            body: '수업 시간, 강사, 허용 카드, 예약 규칙을 설정합니다.',
            cta: 'Create Lesson 가이드 열기',
            link: '/help-v2/schedule/create-lesson'
          },
          {
            title: '수업 수정, 취소 또는 삭제',
            body: '수업 세부 정보를 업데이트하거나 더 이상 예약되지 않도록 만듭니다.',
            cta: 'Manage Lesson 가이드 열기',
            link: '/help-v2/schedule/manage-lesson'
          },
          {
            title: '학생 대신 예약하기',
            body: '학생이나 보호자가 직접 예약을 마치지 못할 때 대신 처리합니다.',
            cta: 'Booking 가이드 열기',
            link: '/help-v2/schedule/book-for-students'
          }
        ],
        know_title: '알아둘 점',
        know_items: [
          '수업 만들기는 보통 일정 작업의 첫 단계입니다.',
          '수정, 취소, 삭제에는 시간 규칙이 있으므로 각각 별도의 가이드가 필요합니다.',
          '관리자 예약 대행은 학생이나 보호자가 직접 예약을 마치지 못할 때의 보조 수단으로 사용하는 것이 가장 좋습니다.'
        ],
        before_title: '시작하기 전에',
        before_body: '수업을 만들 때 올바른 강사를 선택할 수 있도록, 강사진이 이미 설정되어 있는지 확인하세요.',
        before_link: '강사 설정 검토'
      },
      create: {
        badge: '일정',
        title: '수업 만들기',
        intro: '학생이 예약하길 원하는 날짜에 수업을 추가하려면 일정을 사용하세요.',
        before_title: '시작하기 전에',
        before_items: [
          '수업을 만들기 전에 최소 한 명의 강사가 선택되어 있어야 합니다.',
          '일정은 기본으로 오늘 날짜를 열기 때문에 먼저 올바른 날짜를 선택하세요.',
          '이 수업을 예약할 수 있도록 허용할 멤버십 카드를 정하세요.'
        ],
        steps_title: '단계',
        steps_items: [
          'Schedule을 열고 원하는 날짜로 이동합니다.',
          'Create Lesson을 누릅니다.',
          '수업 이름, 날짜, 시작/종료 시간을 입력합니다.',
          '수업 유형과 허용되는 멤버십 카드를 선택합니다.',
          '최소 한 명의 강사를 선택하고, 필요하면 보조 강사를 추가합니다.',
          '정원, 최소 인원, 예약 마감 시간 같은 예약 규칙을 설정합니다.',
          'Create Lesson을 누릅니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '예약되는 카드는 그룹 또는 개인 수업처럼 수업 유형과 맞아야 합니다.',
          '겹치는 수업을 배치한다면 교실 설정이 중요해집니다.',
          '관리자는 보통 학생보다 정원이나 마감 시간 제한을 더 유연하게 넘어서 예약할 수 있지만, 학생은 여전히 마감과 정원 규칙을 따릅니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '예약 마감 시간이 너무 짧으면 수업이 늦게 취소될 때 학생이 혼란스러울 수 있습니다. 더 부드러운 안내를 원한다면 마감 시간을 더 길게 설정하세요.',
        next_title: '다음 단계',
        next_body: '수업이 만들어진 뒤 다음으로 자주 하는 일은 수업 세부 정보를 조정하거나 학생 예약을 도와주는 것입니다.',
        manage_link: '수업 수정 또는 취소',
        booking_link: '학생 대신 예약하기'
      },
      manage: {
        badge: 'Schedule',
        title: '수업 수정, 취소 또는 삭제',
        intro: '수업 상세 화면을 사용해 수업 정보를 업데이트하거나 더 이상 예약되지 않도록 만듭니다.',
        open_title: '수업 여는 방법',
        open_items: [
          'Schedule을 엽니다.',
          '올바른 날짜를 선택합니다.',
          '예약 버튼이 아니라 수업 자체를 누릅니다.'
        ],
        actions_title: '각 작업이 하는 일',
        actions_items: [
          'Edit: 수업 세부 정보를 업데이트하고 저장합니다.',
          'Cancel: 현재 예약된 멤버를 예약 해제하고 새 예약을 막습니다.',
          'Delete: 수업이 취소된 뒤 완전히 제거합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '예약 마감 시간이 지나면 수업을 수정할 수 없습니다.',
          '이미 시작한 수업은 취소하거나 삭제할 수 없습니다.',
          '실수로 만든 수업이라면 먼저 취소한 다음 삭제하세요.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '수업을 수정하거나 취소해야 하는데 예약 흐름을 여는 경우가 많습니다. 수정이나 취소를 원한다면 수업 카드 자체를 여세요.',
        next_title: '다음 단계',
        next_body: '수업이 계속 활성 상태라면, 다음으로 자주 하는 작업은 학생 예약을 도와주는 것입니다.',
        back_link: 'Create Lesson으로 돌아가기',
        next_link: 'Booking으로 이동'
      },
      booking: {
        badge: 'Schedule',
        title: '필요할 때 학생 대신 예약하기',
        intro: '학생이나 보호자가 직접 예약하는 것이 가장 좋지만, 누군가가 잊었거나 마감을 놓쳤거나 도움이 필요하면 관리자가 대신 처리할 수 있습니다.',
        steps_title: '단계',
        steps_items: [
          'Schedule을 열고 수업 날짜를 선택합니다.',
          '수업을 열고 Booking으로 이동합니다.',
          '멤버 추가를 누릅니다.',
          '예약할 멤버를 선택합니다.',
          '그 멤버가 사용할 수 있는 활성 카드 중 하나를 선택합니다.',
          'Confirm을 누릅니다.'
        ],
        unbook_title: '학생 예약 취소하기',
        unbook_items: [
          '해당 수업의 출석 목록을 엽니다.',
          '예약된 멤버를 누릅니다.',
          '파란 예약 카드가 회색이 될 때까지 누릅니다.',
          'Confirm을 누릅니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '관리자는 보통 학생보다 더 자유롭게 예약할 수 있으며, 특히 마감 시간이나 정원 규칙 주변에서 그렇습니다.',
          '그 멤버는 해당 수업에 허용되는 활성 카드를 여전히 가지고 있어야 합니다.',
          '종료된 수업은 예약하거나 예약 취소할 수 없습니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '올바른 카드가 보이지 않는다면, 그 수업이 허용하는 카드 유형과 멤버가 현재 가지고 있는 활성 카드 유형이 다를 수 있습니다.',
        next_title: '다음 단계',
        next_body: '예약 규칙 때문에 문제가 생긴다면 반복해서 덮어쓰기보다 수업 설정을 검토하고 수업 자체를 조정하세요.',
        create_link: 'Create Lesson 검토',
        manage_link: 'Manage Lesson 검토'
      }
    },
    cards: {
      overview: {
        badge: '카드',
        title: '예약을 지원하기 위해 카드를 사용하기',
        intro: '카드의 기본 흐름은 간단합니다. 카드를 만들고, 발급하고, 그다음에는 예약이 수업을 자동으로 차감하도록 두면 됩니다.',
        start_title: '해야 할 일부터 시작하세요',
        cards: [
          {
            title: '예약 흐름 이해하기',
            body: '카드가 예약, 수업 차감, 리포트에 어떻게 연결되는지 확인하세요.',
            cta: '예약 흐름 가이드 열기',
            link: '/help-v2/cards/how-booking-works'
          },
          {
            title: '카드 템플릿 만들기',
            body: '카드 이름, 요금, 세션 수, 만료, 수업 유형을 설정합니다.',
            cta: 'Create Template 가이드 열기',
            link: '/help-v2/cards/create-template'
          },
          {
            title: '멤버에게 카드 발급하기',
            body: '템플릿 중 하나를 사용해 활성 멤버십 카드를 배정합니다.',
            cta: '카드 발급 가이드 열기',
            link: '/help-v2/cards/issue-cards'
          }
        ],
        know_title: '알아둘 점',
        know_items: [
          '템플릿이 먼저입니다. 카드 템플릿이 존재하기 전에는 카드를 발급할 수 없습니다.',
          '카드는 주로 예약과 자동 수업 차감을 지원하기 위해 존재합니다.',
          '카드를 다 쓰거나 만료되면 다음 카드를 발급하기 전에 현재 활성 카드를 삭제하세요.',
          '가끔 예외 상황에서는 활성 카드를 수동으로 조정할 수 있습니다. 가장 흔한 용도는 만료 시간을 연장하는 것이며, 특히 카드 일시중지를 사용하지 않을 때 그렇습니다.'
        ],
        support_title: '보조 워크플로',
        support_templates_title: '템플릿 수정 또는 종료',
        support_templates_body: '템플릿에 수정이 필요하거나 더 이상 사용하면 안 될 때 이 페이지들을 사용하세요.',
        edit_templates_link: 'Edit Templates',
        delete_templates_link: 'Delete Templates',
        support_cleanup_title: '끝난 카드 정리하기',
        support_cleanup_body: '완전히 사용했거나 만료되었거나 교체 중인 활성 카드를 삭제하거나 취소합니다.',
        delete_cards_link: '카드 삭제',
        support_records_title: '카드 기록 검토하기',
        support_records_body: '기록, 상태 검토, 비정상 카드 상태 후속 확인이 필요할 때 카드 기록을 사용하세요.',
        records_link: '카드 기록'
      },
      flow: {
        badge: '카드',
        title: '카드가 예약과 함께 작동하는 방식',
        intro: '멤버십 카드는 주로 수업 예약을 위한 것입니다. 학생이 예약하면 수업이 자동으로 차감되고, 시스템은 실제 예약 활동을 바탕으로 계산합니다.',
        normal_title: '정상 흐름',
        normal_items: [
          '카드 템플릿을 만듭니다.',
          '멤버에게 카드를 발급합니다.',
          '멤버가 그 카드로 수업을 예약합니다.',
          '수업은 예약된 수업을 통해 차감됩니다.',
          '카드 잔여 횟수가 0이 되거나 만료 시간이 지나면 활성 카드를 삭제합니다.',
          '멤버가 갱신할 때 새 카드를 발급합니다.'
        ],
        why_title: '왜 이것이 중요한가',
        why_items: [
          '카드는 수업 예약을 명확하고 예측 가능하게 지원해야 합니다.',
          '예약된 수업을 통해 차감된 레슨만 Analytics 재무 리포트에 반영됩니다.',
          '한 멤버가 같은 템플릿의 활성 카드를 두 장 동시에 가질 수는 없습니다.'
        ],
        next_title: '다음 단계',
        create_link: '카드 템플릿 만들기',
        issue_link: '카드 발급'
      },
      create_template: {
        badge: '카드',
        title: '멤버십 카드 템플릿 만들기',
        intro: '카드 → 카드 템플릿 만들기를 사용해 도장에서 발급할 카드 유형을 만드세요.',
        before_title: '시작하기 전에',
        before_items: [
          '이 카드가 그룹 수업용인지 개인 수업용인지 결정하세요.',
          '카드에 몇 번의 수업이 포함될지 결정하세요.',
          '무제한 멤버십 카드를 원한다면 먼저 기간을 계획하세요. 무제한 카드도 여전히 만료 기간을 사용합니다.',
          '도장이 이미 사용하는 수강료와 통화 기준을 그대로 따르세요.'
        ],
        steps_title: '단계',
        steps_items: [
          '카드 → 카드 템플릿 만들기를 엽니다.',
          '멤버와 관리자 모두 쉽게 알아볼 수 있는 카드 이름을 입력합니다.',
          '요금과 선택 설명을 입력합니다.',
          '총 세션 수와 만료 일수를 설정합니다.',
          '무제한 카드의 경우 Total Sessions를 0이 아니라 -1로 저장합니다.',
          '카드가 Group 수업용인지 Private 수업용인지 선택합니다.',
          '템플릿을 저장합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '수업 유형이 카드로 예약할 수 있는 수업을 결정합니다.',
          'Total Sessions = -1로 저장된 카드는 활성 기간 동안 무제한 예약이 가능합니다.',
          'Group과 Private 수업은 보통 수업당 가격이 다르고, 강사 보수도 다를 수 있습니다.',
          '카드 이름은 나중에 예약과 카드 배정 시 계속 보이므로 명확하고 안정적으로 유지해야 합니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '예약 중 카드가 보이지 않는다면 카드 유형이 수업 유형과 일치하는지 확인하세요. 이는 의도된 동작으로, Group 카드를 Private 수업에, Private 카드를 Group 수업에 실수로 쓰지 못하게 하기 위한 것입니다.',
        next_title: '다음 단계',
        next_body: '템플릿이 만들어지면 다음으로 자주 하는 일은 그 카드를 한 명 이상의 멤버에게 발급하는 것입니다.',
        back_link: '카드 개요로 돌아가기',
        next_link: '카드 발급으로 이동'
      },
      issue: {
        badge: '카드',
        title: '멤버십 카드 발급하기',
        intro: '카드 → 카드 발급을 사용해 한 명 이상의 멤버에게 활성 카드를 부여합니다.',
        steps_title: '단계',
        steps_items: [
          '카드 → 카드 발급을 엽니다.',
          '발급할 카드 템플릿을 선택합니다.',
          '한 명 이상의 멤버를 선택합니다.',
          '선택한 멤버를 검토합니다.',
          'Confirm을 눌러 카드를 발급합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '새로 승인된 멤버는 발급하기 쉽도록 상단에 보일 수 있습니다.',
          '이미 그 템플릿의 활성 카드를 가진 멤버는 중복을 알아보기 쉽도록 다르게 표시됩니다.',
          '한 멤버가 같은 템플릿의 활성 카드를 두 장 동시에 가질 수는 없습니다.'
        ],
        mistake_title: '자주 하는 실수',
        mistake_body: '멤버가 같은 카드를 갱신하는 경우라면 먼저 기존 활성 카드를 삭제한 다음 새 카드를 발급하세요.',
        next_title: '다음 단계',
        next_body: '카드를 발급한 뒤의 일반적인 다음 단계는 그 카드로 수업을 예약하는 것입니다.',
        back_link: 'Templates로 돌아가기',
        next_link: '카드 작동 방식'
      },
      edit_template: {
        badge: '카드',
        title: '카드 템플릿 수정하기',
        intro: '템플릿이 이미 존재하고 앞으로의 사용을 위해 설정을 업데이트해야 할 때 사용합니다.',
        use_title: '이 페이지를 사용하는 경우',
        use_items: [
          '템플릿 설정을 수정해야 할 때',
          '요금, 세션 수, 만료, 수업 유형 설정을 바꿔야 할 때',
          '새 템플릿을 아직 만들지 않고도 향후 발급 동작을 조정하고 싶을 때'
        ],
        know_title: '알아둘 점',
        know_items: [
          '템플릿 이름은 생성 후 잠깁니다.',
          '변경 사항은 앞으로의 템플릿 동작에 영향을 주므로 신중하게 저장해야 합니다.',
          '변경 규모가 다른 멤버십 상품을 의미할 정도로 크다면, 새 템플릿을 만드는 것이 더 깔끔할 수 있습니다.'
        ],
        next_title: '다음 단계',
        back_link: 'Create Template으로 돌아가기',
        next_link: '카드 발급'
      },
      delete_template: {
        badge: '카드',
        title: '카드 템플릿 삭제하기',
        intro: '템플릿이 더 이상 존재할 필요가 없고 아직 활성 카드와 연결되어 있지 않을 때 사용합니다.',
        before_title: '삭제하기 전에',
        before_items: [
          '템플릿이 아직 활성 카드와 연결되어 있는지 확인하세요.',
          '활성 카드가 여전히 그것에 의존한다면 먼저 정리가 필요합니다.'
        ],
        know_title: '알아둘 점',
        know_body: '템플릿 삭제는 정리용 워크플로입니다. 한 명의 멤버가 갱신하는 경우가 아니라, 멤버십 상품 자체를 정말로 종료할 때 사용해야 합니다.',
        next_title: '다음 단계',
        back_link: 'Templates로 돌아가기',
        next_link: 'Cards 개요'
      },
      delete_card: {
        badge: '카드',
        title: '활성 카드 삭제 또는 취소하기',
        intro: '활성 카드의 수명이 끝났거나 해당 멤버에게 더 이상 활성 상태로 두어서는 안 될 때 사용합니다.',
        use_title: '가장 흔한 사용 사례',
        use_items: [
          '카드가 만료되었거나 완전히 사용되었을 때',
          '멤버가 갱신 중이라 새로운 활성 카드를 발급해야 할 때',
          '다음 단계로 넘어가기 전에 카드를 취소하고 올바르게 기록해야 할 때'
        ],
        know_title: '알아둘 점',
        know_items: [
          '만료된 카드는 보통 기본 정리 경로로 삭제됩니다.',
          '한 멤버가 같은 템플릿의 활성 카드를 두 장 동시에 가질 수는 없습니다.',
          '카드를 취소한다면 필요한 사유를 입력하고 카드 이력이 보이는 상태를 유지하세요.'
        ],
        next_title: '다음 단계',
        next_body: '정리 후에는 그 멤버가 새로운 활성 멤버십을 계속 이어갈 때만 다음 카드를 발급하세요.',
        back_link: '카드 발급으로 돌아가기',
        next_link: 'Cards 개요'
      },
      disputes: {
        badge: '카드',
        title: '카드 기록 검토하기',
        intro: '기록, 상태 가시성, 비정상 카드 상태 후속 확인이 필요할 때 card records를 사용하세요.',
        review_title: '검토할 수 있는 내용',
        review_items: [
          '현재 카드',
          '발급된 카드',
          '취소된 카드',
          '부채 관련 카드 상태'
        ],
        when_title: '특히 도움이 되는 경우',
        when_items: [
          '특정 카드에 무슨 일이 있었는지 이해해야 할 때',
          '카드가 취소, 정산 또는 정리되었는지 확인할 때',
          '부채나 기록 불일치를 추적할 때'
        ],
        know_title: '알아둘 점',
        know_body: 'Card records는 주로 검토와 감사용 워크플로입니다. 일상적인 정상 카드 흐름은 여전히 템플릿 생성, 카드 발급, 수업 예약, 종료 시 카드 정리입니다.'
      }
    },
    members: {
      overview: {
        badge: '멤버',
        title: '사람들을 도장으로 받아들이고 멤버 상태를 관리하기',
        intro: '멤버 영역은 사람 관련 작업을 다룹니다. 멤버 추가, 신청 검토, 승인됨, 거절됨, 차단됨 상태 관리를 여기서 합니다.',
        start_title: '해야 할 일부터 시작하세요',
        cards: [
          {
            title: '멤버를 직접 추가하기',
            body: '일반 신청 흐름을 기다리지 않고 직접 등록하고 싶을 때 quick enrollment를 사용하세요.',
            cta: '빠른 등록 열기',
            link: '/help-v2/members/quick-enrollment'
          },
          {
            title: '도장 신청 검토하기',
            body: 'Join Academy를 통해 신청한 사람을 승인하거나 거절합니다.',
            cta: '도장 신청 열기',
            link: '/help-v2/members/applications'
          },
          {
            title: '누군가를 거절하거나 차단하기',
            body: '멤버가 더 이상 도장에서 활성 상태로 남아 있으면 안 될 때 상태를 관리합니다.',
            cta: '거절 또는 차단 관리 열기',
            link: '/help-v2/members/reject-or-ban'
          }
        ],
        know_title: '알아둘 점',
        know_items: [
          '빠른 등록과 도장 신청은 도장에 들어오는 서로 다른 진입 경로입니다.',
          '도장 전체를 온보딩하는 데는 시간이 걸리므로, 장기적으로 가장 쉬운 방법은 보통 멤버가 스스로 계정을 만들고 도장을 직접 추가하도록 하는 것입니다.',
          '멤버가 활성 상태가 되면 다음으로 자주 하는 작업은 DojoMate에서 멤버십 카드를 발급하는 것입니다.',
          '자녀 계정은 특히 부모 계정이 관련될 때 추가 검토 단계가 필요할 수 있습니다.'
        ],
        compare_title: '어떤 경로를 선택해야 할지 모르겠나요?',
        compare_body: '직접 계정을 만들지, 아니면 멤버가 스스로 신청하게 둘지 결정 중이라면 먼저 비교 페이지를 보세요.',
        compare_link: '두 멤버 흐름 비교하기'
      },
      quick: {
        badge: '멤버',
        title: '멤버를 직접 추가하기',
        intro: '일반 Join Academy 신청 흐름을 기다리지 않고 직접 등록하고 싶을 때 빠른 등록을 사용하세요.',
        when_title: '이 방법을 사용하는 경우',
        when_items: [
          '대면으로 누군가를 온보딩하고 있을 때',
          '직접 계정을 만들고 싶을 때',
          '부모를 등록하면서 같은 흐름 안에서 여러 자녀 계정을 만들고 싶을 때',
          '그 멤버가 기술에 익숙하지 않아 대신 계정을 만들어 주고 싶을 때',
          '기존 DojoMate 계정을 이메일로 추가하고 싶을 때'
        ],
        path_title: '가장 쉬운 경로부터 시작하세요',
        path_body_1: '도장이 성장 중이라면 장기적으로 가장 쉬운 방식은 보통 멤버가 스스로 계정을 만들고 도장을 직접 추가하게 두는 것입니다.',
        path_body_2: '빠른 등록은 추가 도움이 필요한 사람이나 스스로 설정을 마치기 어려운 사람에게 가장 잘 맞습니다.',
        steps_title: '단계',
        steps_items: [
          'Affiliate Portal을 열고 DojoMate 이메일과 비밀번호로 로그인합니다.',
          'Register를 엽니다.',
          '멤버의 실제 이메일을 입력하고 임시 비밀번호를 만듭니다.',
          '계정이 학생용인지 부모용인지 선택합니다.',
          '부모를 선택했다면 자녀 계정 설정 흐름으로 계속 진행합니다.',
          '내용을 검토하고 Confirm을 누릅니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '빠른 등록은 일반 보류/승인 신청 흐름을 건너뜁니다.',
          '이 흐름은 특히 부모에게 유용한데, 한 번의 등록 작업으로 여러 자녀 계정을 만들 수 있기 때문입니다.',
          '계정을 만들 때 간단한 임시 비밀번호를 저장할 수 있습니다. 멤버는 나중에 로그인해서 바꿀 수 있습니다.',
          '일부 멤버는 스스로 로그인하지 않을 수도 있지만, 당신이 계정을 관리한다면 그것도 괜찮습니다.',
          '새로 등록된 멤버도 설정 후 앱을 통해 멤버십 카드를 받을 수 있습니다.',
          '이미 DojoMate 계정이 있는 사람이라면 중복 계정을 만들지 말고 이메일로 추가하세요.'
        ],
        compare_title: '이 흐름을 고를지 도움이 필요하신가요?',
        compare_link: '빠른 등록과 신청 비교하기',
        next_title: '다음 단계',
        next_body: '계정이 도장에 들어오면 다음으로 자주 하는 작업은 멤버십 카드를 발급하는 것입니다.',
        back_link: '멤버 개요로 돌아가기',
        next_link: '카드 발급으로 이동'
      },
      compare: {
        badge: '멤버',
        title: '빠른 등록과 신청 중 선택하기',
        intro: '두 흐름 모두 사람을 도장에 들이지만, 서로 다른 상황을 위한 것입니다.',
        quick_title: '이럴 때 빠른 등록 사용',
        quick_items: [
          '계정을 직접 만들고 싶을 때',
          '그 사람이 설정 도움을 필요로 할 때',
          '그 사람이 기술에 익숙하지 않을 때',
          '부모 한 명과 여러 자녀 계정을 함께 등록할 때'
        ],
        quick_link: '빠른 등록 열기',
        apps_title: '이럴 때 신청 사용',
        apps_items: [
          '멤버가 스스로 계정을 만들길 원할 때',
          '오너가 모든 계정을 직접 만들지 않아도 도장이 확장되길 원할 때',
          '그 멤버가 Join Academy 흐름을 스스로 따라갈 수 있을 때'
        ],
        apps_link: '도장 신청 열기',
        rule_title: '간단한 규칙',
        rule_body: '가능하면 멤버가 스스로 만들게 두세요. 추가 도움이 필요하거나 등록을 직접 처리하고 싶을 때 빠른 등록을 사용하세요.'
      },
      applications: {
        badge: '멤버',
        title: '도장 신청 검토하기',
        intro: '누군가가 Join Academy를 통해 신청했고 당신이 승인 또는 거절해야 할 때 이 흐름을 사용하세요.',
        steps_title: '단계',
        steps_items: [
          '멤버 → 추가 / 거절 멤버를 엽니다.',
          '보류 중인 신청 목록을 검토합니다.',
          '신청자에게 Accept 또는 Reject를 누릅니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '보류 중인 계정이 보이지 않는다면 그 사람이 제대로 신청하지 않았을 수 있습니다.',
          '도장 QR 코드를 다시 스캔하거나 도장 이름을 다시 검색해야 할 수 있습니다.',
          '연결된 자녀 계정은 부모 프로필을 통해 추가 승인 단계가 필요할 수 있습니다.'
        ],
        why_title: '왜 applications를 쓰나요?',
        why_body: '멤버가 스스로 계정을 만들고 도장을 직접 추가하도록 하려면, 이것이 장기적으로 더 좋은 경로입니다.',
        compare_link: '신청과 빠른 등록 비교하기',
        mistake_title: '자주 하는 실수',
        mistake_body: '자녀 계정이 바로 보이지 않는다면 아직 제대로 만들어지지 않았거나 목록이 오래되었을 수 있습니다. 부모가 자녀 설정을 끝내게 하거나 앱 화면을 새로고침하세요.',
        next_title: '다음 단계',
        next_body: '누군가를 도장에 받아들인 뒤 다음으로 자주 하는 작업은 그 사람의 멤버십 카드를 발급하는 것입니다.',
        back_link: '멤버 개요로 돌아가기',
        next_link: '카드 발급으로 이동'
      },
      reject: {
        badge: '멤버',
        title: '필요할 때 멤버를 거절하거나 차단하기',
        intro: '누군가가 더 이상 도장에서 활성 상태로 남아 있으면 안 될 때 이 흐름을 사용하세요.',
        reject_title: '거절 방식',
        reject_items: [
          '멤버 → 멤버 목록에서 멤버 프로필을 엽니다.',
          'Reject를 눌러 그 사람을 도장에서 제거합니다.',
          '활성 카드를 가진 멤버는 거절 전에 먼저 정리되어야 합니다.'
        ],
        ban_title: '차단 방식',
        ban_items: [
          '거절된 멤버는 멤버 → 거절 목록에 나타납니다.',
          '거기서 다시 받아들이거나 차단할 수 있습니다.',
          '차단된 멤버는 Join Academy를 통해 다시 신청할 수 없습니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '활성 카드를 먼저 제거하는 것은 거절 전의 정상적인 정리 과정 일부입니다.',
          '나중에 차단을 해제하고 싶다면 Banned List로 가서 Remove Ban을 사용하세요.'
        ],
        next_title: '다음 단계',
        back_link: '멤버 개요로 돌아가기',
        next_link: 'Cards 워크플로 검토'
      }
    },
    account: {
      sign_in: {
        badge: '계정',
        title: '계정에 로그인하기',
        intro: '계정이 이미 존재하고 도장, 예약, 카드, 기록에 접근하고 싶을 때 로그인 기능을 사용합니다.',
        need_title: '필요한 것',
        need_items: ['이메일 주소', '비밀번호'],
        trouble_title: '로그인이 되지 않을 때',
        trouble_items: [
          '이메일과 비밀번호가 맞는지 확인하기',
          '필요하면 비밀번호 재설정 사용하기',
          '화면이 낯설다면 언어 선택기를 확인하기'
        ],
        next_title: '다음 단계',
        back_link: '학생 경로로 돌아가기',
        next_link: '비밀번호 재설정'
      },
      create: {
        badge: '계정',
        title: '계정 만들기',
        intro: '도장에 가입하거나 수업을 예약하거나 앱의 나머지 기능을 쓰기 전에 계정을 만드세요.',
        path_title: '올바른 경로 선택하기',
        path_items: [
          '수련하거나 도장에 가입하는 경우 member/student 경로',
          '도장을 설정하거나 관리하는 경우 admin/owner 경로'
        ],
        need_title: '필요한 것',
        need_items: ['유효한 이메일 주소', '앱 규칙을 충족하는 비밀번호'],
        next_title: '다음 단계',
        back_link: '로그인으로 돌아가기',
        next_link: '도장 가입하기'
      },
      reset: {
        badge: '계정',
        title: '비밀번호 재설정',
        intro: '비밀번호가 기억나지 않거나 현재 비밀번호가 더 이상 동작하지 않을 때 사용합니다.',
        how_title: '작동 방식',
        how_items: [
          '로그인 화면에서 재설정을 요청하기',
          'DojoMate 로그인에 연결된 이메일 계정 확인하기',
          '메일이 오면 재설정 링크 따라가기'
        ],
        email_title: '이메일이 도착하지 않으면',
        email_items: [
          '스팸/정크 메일함 확인하기',
          '올바른 이메일을 입력했는지 확인하기',
          '재설정을 다시 보내기'
        ]
      },
      troubleshooting: {
        badge: '계정',
        title: '계정 문제 해결',
        intro: '일반적인 로그인 또는 가입 문제로 계정 접근이 막혔을 때 이 페이지를 사용하세요.',
        signin_title: '로그인할 수 없음',
        signin_items: [
          '이메일과 비밀번호를 꼼꼼히 확인하기',
          '필요하면 비밀번호 재설정하기',
          '기기가 온라인인지 확인하기'
        ],
        email_title: '이미 사용 중인 이메일',
        email_body: '보통 이것은 계정이 이미 존재한다는 뜻이므로, 두 번째 계정을 만들기보다 로그인하거나 비밀번호를 재설정해야 합니다.',
        role_title: '역할 혼동',
        role_body: '역할이 바뀌었거나 계정 동작이 예상과 다르다면, 먼저 올바른 계정과 도장의 회원 자격을 사용 중인지 확인하세요.'
      }
    },
    settings: {
      password: {
        badge: '설정',
        title: '비밀번호 변경하기',
        intro: '현재 비밀번호를 아직 알고 있고 계정 설정 안에서 업데이트하고 싶을 때 사용하세요.',
        know_title: '알아둘 점',
        know_items: [
          '이것은 비밀번호 재설정과 다릅니다. 비밀번호 변경은 이미 계정에 접근할 수 있다는 전제입니다.',
          '전혀 로그인할 수 없다면 대신 비밀번호 재설정을 사용하세요.'
        ]
      },
      language: {
        badge: '설정',
        title: '앱 언어 바꾸기',
        intro: '앱을 다른 지원 언어로 표시하고 싶을 때 언어 설정을 사용하세요.',
        know_title: '알아둘 점',
        know_body: '화면을 이해하기 어렵게 느껴진다면 언어 설정을 확인하는 것이 가장 빠른 해결책 중 하나입니다.'
      },
      currency: {
        badge: '설정',
        title: '통화 보기 선택하기',
        intro: '통화 설정을 사용해 앱에서 금액이 어떻게 표시될지 조절하세요.',
        know_title: '알아둘 점',
        know_items: [
          '멤버는 주로 금액이 정확하고 분명하게 보이는지를 중요하게 생각합니다.',
          '오너는 도장 쪽 재무 설정과 일관성도 신경 쓸 수 있습니다.'
        ]
      },
      privacy: {
        badge: '설정',
        title: '개인정보 설정 검토하기',
        intro: '개인정보 설정을 사용해 알림, 마케팅, 순위표, 공개 프로필, 예약 및 분석 관련 데이터가 어떻게 처리되는지 이해하고 제어하세요.',
        main_title: '주요 개인정보 영역',
        main_items: [
          '알림',
          '마케팅',
          '순위표 참여',
          '공개 프로필 접근',
          '예약 관련 설정',
          '출석 및 집계 분석 데이터'
        ],
        progression_title: '진행 관련 제어',
        progression_items: [
          '순위표 참여와 공개 프로필 접근은 별도 제어 항목입니다.',
          '순위표 참여를 끄면 계정이 순위에서 제외됩니다.',
          '공개 프로필 접근을 꺼도 계정이 모든 허용된 화면에서 자동으로 사라지는 것은 아닙니다.',
          '마케팅 제어는 진행, 순위표, 공개 프로필 제어와 별개입니다.'
        ],
        child_title: '자녀 및 부양 계정',
        child_body: '자녀 및 부양 기록은 진행 참여, 순위표 참여, 공개 진행 프로필, 개인화 마케팅에서 제외됩니다.',
        know_title: '알아둘 점',
        knowBody: '이 페이지는 메시지를 켜고 끄는 것만이 아니라 개인정보 선택을 이해하고 관리하는 데 목적이 있습니다.'
      },
      delete: {
        badge: '설정',
        title: '계정 삭제는 신중하게',
        intro: '계정 삭제는 중요한 작업입니다. 단순히 한 도장을 떠나는 것이 아니라 계정 자체를 정말 닫고 싶을 때만 사용하세요.',
        before_title: '실행 전에',
        before_items: [
          '먼저 검증 규칙 확인하기',
          '삭제를 막을 수 있는 항목 검토하기',
          '자녀 계정과 관련 자녀 카드 관계 고려하기'
        ],
        know_title: '알아둘 점',
        know_body: '계정 전체 삭제는 한 개의 도장 회원 자격을 떠나는 것과 다릅니다. 계정을 유지해야 한다면 회원 자격 흐름을 사용하세요.'
      },
      logout: {
        badge: '설정',
        title: '로그아웃',
        intro: '현재 기기에서 앱 사용을 마쳤거나 다른 계정으로 전환하고 싶을 때 로그아웃을 사용하세요.'
      }
    },
    profile: {
      edit: {
        badge: '프로필',
        title: '프로필 수정하기',
        intro: '개인 프로필 정보를 업데이트해야 할 때 이 페이지를 사용하세요.',
        know_title: '알아둘 점',
        know_items: [
          '계정이 어떻게 사용되는지에 따라 일부 사용자는 역할 관련 맥락을 볼 수 있습니다.',
          '변경 후에는 폼을 제출해 저장하세요.'
        ]
      },
      children: {
        badge: '프로필',
        title: '자녀 계정 관리하기',
        intro: '부모나 보호자가 자녀 계정을 만들고 수정하고 관리해야 할 때 자녀 계정을 사용하세요.',
        do_title: '할 수 있는 일',
        do_items: [
          '자녀 계정 만들기',
          '자녀 계정 정보 수정하기',
          '필요할 때 자녀 계정 제거하기'
        ],
        know_title: '알아둘 점',
        know_body: '부모가 관리하는 계정 관계는 도장 가입이나 회원 자격 처리 같은 다른 흐름에도 영향을 줄 수 있습니다.'
      }
    },
    student: {
      join: {
        badge: '학생',
        title: '도장 가입하기',
        intro: '계정을 도장에 연결하고 앱 안에서 그 도장을 사용하기 시작하고 싶을 때 이 흐름을 사용하세요.',
        find_title: '도장을 찾는 방법',
        find_items: [
          '도장 찾기를 사용해 앱 안에서 도장을 둘러보기',
          '직접 검색하거나 도장 QR 코드를 스캔하려면 도장 검색 사용하기'
        ],
        steps_title: '단계',
        steps_items: [
          '도장 섹션에서 도장 찾기를 엽니다.',
          '도장 목록을 둘러봅니다.',
          '도장을 열어 상세 정보를 봅니다.',
          '도장 정보와 갤러리를 확인합니다.',
          '원하는 도장이 맞는지 확인합니다.',
          '가입 신청을 합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '가입 전에 여러 도장을 비교하고 싶다면 도장 찾기가 유용합니다.',
          '도장 검색은 검색과 QR 스캔을 위한 직접 경로입니다.',
          '부모는 가입 과정에서 자녀 계정도 함께 고려해야 할 수 있습니다.'
        ],
        next_title: '다음 단계',
        back_link: '학생 경로로 돌아가기',
        next_link: '회원 자격 관리'
      },
      home: {
        badge: '학생',
        title: '도장에서 수련합니다',
        intro: '이 경로는 계정, 예약, 멤버십 안내가 필요한 학생, 보호자, 도장 멤버를 위한 것입니다.',
        section_1: '도장 가입 및 접근 관리',
        join_link: '도장 가입',
        memberships_link: '회원 자격 관리',
        section_2: '예약, 기록, 도장 업데이트',
        booking_link: '예약',
        attendance_link: '출석 기록',
        broadcast_link: 'Broadcast',
        alerts_link: '시스템 알림',
        section_3: '계정 도움말',
        sign_in_link: '로그인',
        create_account_link: '계정 만들기',
        reset_password_link: '비밀번호 재설정',
        troubleshooting_link: '계정 문제 해결',
        change_password_link: '비밀번호 변경',
        child_accounts_link: '자녀 계정',
        still_need_title: '다른 도움이 더 필요하신가요?',
        still_need_body: '학생 경로를 더 다듬는 동안 일부 전문적인 주제는 여전히 도움말 v1에 남아 있을 수 있습니다.',
        still_need_link: '도움말 v1 열기'
      },
      broadcast: {
        badge: '학생',
        title: '앱에서 도장 Broadcast 읽기',
        intro: '앱의 Broadcast에서 도장 공지와 훈련 게시물을 읽을 수 있습니다. 이것은 읽기 중심의 도장 소식 피드이며 채팅, 댓글, 답글이 아닙니다.',
        where_title: '어디에서 찾는지',
        where_items: [
          '멤버 쪽에서 Academy 메뉴를 열고 Broadcast를 누르세요.',
          '현재 아이콘은 메가폰입니다.',
          'Broadcast는 선택한 도장을 기준으로 표시되므로 먼저 도장을 선택해야 합니다.'
        ],
        actions_title: '할 수 있는 것',
        actions_items: [
          'Updates와 Training 탭을 전환합니다.',
          '끌어당겨 새로고침합니다.',
          '게시물 텍스트와 이미지 설명을 읽습니다.',
          '이미지를 눌러 전체 화면으로 보고 바깥을 눌러 닫습니다.'
        ],
        screen_title: '화면에서 보이는 내용',
        screen_items: [
          '제목: Broadcast',
          '상단의 선택된 도장 이름',
          '탭: Updates와 Training',
          '각 카드에는 작성자 이름 또는 기본값으로 Academy Admin이 표시될 수 있습니다',
          '게시 날짜와 시간',
          '본문, 이미지 썸네일, 선택적 이미지 캡션'
        ],
        limits_title: '빈 상태와 현재 제한',
        limits_items: [
          '도장을 선택하지 않았다면 Select an academy first.가 보일 수 있습니다.',
          '빈 스트림에서는 Updates coming soon 또는 No visible broadcasts are available in this stream yet.가 보일 수 있습니다.',
          '현재 멤버용 Broadcast 피드는 읽기 전용입니다.',
          '좋아요, 댓글, 답글, 리액션, 공유, 멤버 게시 기능은 없습니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '현재 사용자 대상 제품명은 Broadcast입니다. 예전 Newsfeed 표현은 오래되었습니다.',
          '콘텐츠는 AFL에서 작성되고 앱에서 표시됩니다.',
          '피드 요청이 실패하면 현재 앱은 별도 오류 상태 대신 빈 목록으로 처리합니다.',
          'Expo의 관리자용 작성 화면은 아직 준비 단계이며 현재의 주된 실사용 흐름으로 보면 안 됩니다.'
        ],
        join_link: '도장 가입',
        alerts_link: '시스템 알림'
      },
      memberships: {
        badge: '학생',
        title: '도장 회원 자격 관리하기',
        intro: '계정이 둘 이상의 도장에 속해 있거나, 어떤 도장의 회원 자격 안에서 행동할지 바꿔야 할 때 이 페이지를 사용하세요.',
        when_title: '이럴 때 중요함',
        when_items: [
          '둘 이상의 도장에 속해 있을 때',
          '지금 어느 도장 안에서 행동하고 있는지 선택해야 할 때',
          '앱에서 현재 선택된 도장이 잘못되었을 때'
        ],
        know_title: '알아둘 점',
        know_items: [
          '여러 도장에 속한 멤버는 예약하거나 기록을 보기 전에 올바른 도장을 선택해야 합니다.',
          '무언가 빠져 보인다면 단순히 잘못된 도장이 활성화된 것일 수 있습니다.'
        ],
        next_title: '다음 단계',
        back_link: 'Join Academy로 돌아가기',
        next_link: '예약'
      },
      booking: {
        badge: '학생',
        title: '수업 예약하기',
        intro: '예약을 사용해 수업을 고르고, 사용할 수 있는 카드를 선택하고, 자리를 확보하세요.',
        steps_title: '단계',
        steps_items: [
          '일정을 엽니다.',
          '원하는 수업을 고릅니다.',
          '예약 자격이 있는지 확인합니다.',
          '사용할 카드를 선택합니다.',
          '예약을 확정합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '여러 도장에 속해 있다면 먼저 올바른 도장을 선택해야 할 수 있습니다.',
          '카드가 보이지 않는다면 수업과 카드가 호환되지 않을 수 있습니다.',
          '규칙이 허용하는 동안에는 예약 취소도 할 수 있습니다.'
        ],
        next_title: '다음 단계',
        back_link: '회원 자격',
        next_link: '출석 기록'
      },
      alerts: {
        badge: '학생',
        title: '시스템 알림 읽기',
        intro: '시스템 알림은 도장 업데이트와 기타 중요한 계정 또는 회원 자격 정보를 따라가는 데 도움이 됩니다.',
        see_title: '볼 수 있는 내용',
        see_items: [
          '도장 업데이트',
          '회원 자격 관련 안내',
          '도장 사용과 관련된 기타 시스템 생성 알림'
        ],
        know_title: '알아둘 점',
        know_body: '이것은 일반 채팅이나 메시지 스레드가 아니라 시스템 알림 화면입니다. 중요한 계정 및 도장 정보로 받아들이세요.'
      },
      attendance: {
        badge: '학생',
        title: '출석 기록 검토하기',
        intro: '훈련 기록을 검토하고 선택한 날짜 범위에서 어떤 일이 있었는지 확인하고 싶을 때 출석 기록을 사용하세요.',
        help_title: '이 페이지가 도움이 되는 것',
        help_items: [
          '최근 출석을 빠르게 확인하기',
          '더 긴 날짜 범위 검토하기',
          '수업이 예상대로 기록되었는지 확인하기'
        ],
        know_title: '알아둘 점',
        know_items: [
          '날짜 범위 제어는 더 긴 기간 검토를 쉽게 해 줍니다.',
          '이 페이지는 주로 기록을 검토하기 위한 것이지 변경하기 위한 것이 아닙니다.'
        ]
      }
    },
    account: {
      sign_in: {
        badge: '계정',
        title: '계정에 로그인하기',
        intro: '이미 계정이 있고 도장, 예약, 카드, 기록에 접근하려면 로그인을 사용하세요.',
        need_title: '필요한 것',
        need_items: ['이메일 주소', '비밀번호'],
        trouble_title: '로그인이 되지 않을 때',
        trouble_items: [
          '이메일과 비밀번호가 맞는지 확인하세요',
          '필요하면 비밀번호 재설정을 사용하세요',
          '화면이 낯설게 보이면 언어 설정을 먼저 확인하세요'
        ],
        next_title: '다음 단계',
        back_link: '학생 경로로 돌아가기',
        next_link: '비밀번호 재설정'
      },
      create: {
        badge: '계정',
        title: '계정 만들기',
        intro: '도장에 가입하거나 수업을 예약하거나 다른 기능을 사용하기 전에 계정을 만드세요.',
        path_title: '올바른 경로 선택',
        path_items: [
          '훈련하거나 도장에 가입하려면 멤버/학생 경로',
          '도장을 설정하거나 관리하려면 관리자/오너 경로'
        ],
        need_title: '필요한 것',
        need_items: ['유효한 이메일 주소', '앱 규칙을 만족하는 비밀번호'],
        next_title: '다음 단계',
        back_link: '로그인으로 돌아가기',
        next_link: '도장 가입하기'
      },
      reset: {
        badge: '계정',
        title: '비밀번호 재설정',
        intro: '비밀번호가 기억나지 않거나 현재 비밀번호가 더 이상 작동하지 않을 때 사용하세요.',
        how_title: '작동 방식',
        how_items: [
          '로그인 화면에서 재설정을 요청하세요',
          'DojoMate 로그인에 연결된 이메일 계정을 확인하세요',
          '메일이 도착하면 재설정 링크를 여세요'
        ],
        email_title: '메일이 오지 않을 때',
        email_items: [
          '스팸함을 확인하세요',
          '올바른 이메일을 입력했는지 확인하세요',
          '재설정 메일을 다시 보내세요'
        ]
      },
      troubleshooting: {
        badge: '계정',
        title: '계정 문제 해결',
        intro: '일반적인 로그인 또는 가입 문제 때문에 계정 접근이 막혔을 때 이 페이지를 사용하세요.',
        signin_title: '로그인할 수 없음',
        signin_items: [
          '이메일과 비밀번호를 다시 확인하세요',
          '필요하면 비밀번호를 재설정하세요',
          '기기가 온라인인지 확인하세요'
        ],
        email_title: '이미 사용 중인 이메일',
        email_body: '보통은 해당 계정이 이미 존재한다는 뜻입니다. 두 번째 계정을 만들기보다 로그인하거나 비밀번호를 재설정하세요.',
        role_title: '역할 혼동',
        role_body: '역할이 바뀌었거나 계정 동작이 기대와 다르면, 먼저 올바른 계정과 올바른 도장 멤버십을 사용하고 있는지 확인하세요.'
      }
    },
    settings: {
      password: {
        badge: '설정',
        title: '비밀번호 변경',
        intro: '현재 비밀번호를 알고 있고 계정 설정 안에서 비밀번호를 바꾸고 싶을 때 사용하세요.',
        know_title: '알아둘 점',
        know_items: [
          '이것은 비밀번호 재설정과 다릅니다. 비밀번호 변경은 이미 계정에 접근할 수 있다는 전제입니다.',
          '아예 로그인할 수 없다면 비밀번호 재설정을 사용하세요.'
        ]
      },
      language: {
        badge: '설정',
        title: '앱 언어 변경',
        intro: '앱을 다른 지원 언어로 표시하고 싶을 때 언어 설정을 사용하세요.',
        know_title: '알아둘 점',
        know_body: '어떤 화면이 이해하기 어렵다면 언어 설정을 확인하는 것이 가장 빠른 해결책 중 하나입니다.'
      },
      currency: {
        badge: '설정',
        title: '통화 표시 선택',
        intro: '앱에서 금액이 어떻게 표시되는지 통화 설정으로 제어하세요.',
        know_title: '알아둘 점',
        know_items: [
          '멤버는 금액이 명확하게 보이는지를 가장 중요하게 생각합니다.',
          '오너는 도장 측 재무 설정과 일관성도 함께 신경 쓸 수 있습니다.'
        ]
      },
      privacy: {
        badge: '설정',
        title: '개인정보 설정 검토',
        intro: '알림, 마케팅, 리더보드, 공개 프로필, 예약, 분석 관련 데이터가 어떻게 처리되는지 이해하고 제어하려면 개인정보 설정을 사용하세요.',
        main_title: '주요 개인정보 영역',
        main_items: [
          '알림',
          '마케팅',
          '순위표 참여',
          '공개 프로필 접근',
          '예약 관련 설정',
          '출석 및 집계 분석 데이터'
        ],
        progression_title: '진행 관련 제어',
        progression_items: [
          '순위표 참여와 공개 프로필 접근은 별도의 설정입니다.',
          '순위표 참여를 끄면 순위에서 제외됩니다.',
          '공개 프로필 접근을 꺼도 허용된 모든 화면에서 자동으로 사라지는 것은 아닙니다.',
          '마케팅 제어는 진행, 순위표, 공개 프로필 제어와 별개입니다.'
        ],
        child_title: '아동 및 부양 계정',
        child_body: '아동 및 부양 기록은 진행 참여, 순위표 참여, 공개 진행 프로필, 개인화 마케팅에서 제외됩니다.',
        know_title: '알아둘 점',
        know_body: '이 페이지는 메시지를 켜고 끄는 것만이 아니라 개인정보 선택을 이해하고 관리하는 데 목적이 있습니다.'
      },
      delete: {
        badge: '설정',
        title: '계정 삭제는 신중하게',
        intro: '계정 삭제는 큰 작업입니다. 한 도장을 떠나는 것이 아니라 계정 자체를 닫고 싶을 때만 사용하세요.',
        before_title: '진행하기 전에',
        before_items: [
          '먼저 검증 규칙을 확인하세요',
          '삭제를 막는 조건을 확인하세요',
          '아동 계정과 관련 카드 관계를 고려하세요'
        ],
        know_title: '알아둘 점',
        know_body: '계정 전체를 삭제하는 것은 한 도장 멤버십을 떠나는 것과 다릅니다. 계정을 유지해야 한다면 멤버십 흐름을 사용하세요.'
      },
      logout: {
        badge: '설정',
        title: '로그아웃',
        intro: '현재 기기에서 사용을 마쳤거나 다른 계정으로 전환하고 싶을 때 로그아웃을 사용하세요.'
      }
    },
    profile: {
      edit: {
        badge: '프로필',
        title: '프로필 편집',
        intro: '개인 프로필 정보를 업데이트해야 할 때 이 페이지를 사용하세요.',
        know_title: '알아둘 점',
        know_items: [
          '일부 사용자는 계정 사용 방식에 따라 역할 관련 맥락을 볼 수 있습니다.',
          '변경 후에는 폼을 제출해 업데이트를 저장하세요.'
        ]
      },
      children: {
        badge: '프로필',
        title: '아동 계정 관리',
        intro: '부모나 보호자가 아이 계정을 생성, 수정, 관리해야 할 때 아동 계정 기능을 사용하세요.',
        do_title: '할 수 있는 일',
        do_items: [
          '아동 계정 생성',
          '아동 계정 정보 수정',
          '필요할 때 아동 계정 제거'
        ],
        know_title: '알아둘 점',
        know_body: '부모가 관리하는 계정 관계는 도장 가입이나 멤버십 처리 같은 다른 흐름에도 영향을 줄 수 있습니다.'
      }
    },
    tools: {
      overview: {
        badge: '도구',
        title: '유료 도구로 도장 운영 확장하기',
        intro: '유료 도구는 핵심 도장 워크플로 위에 반복 일정, 카드 일시정지, 스태프 접근, 분석, Broadcast 같은 추가 기능을 더해 줍니다.',
        start_badge: '유료 도구',
        start_title: '필요한 도구부터 시작',
        timetable_title: '반복 일정 만들기',
        timetable_body: '매주 반복되는 수업을 하나씩 다시 만들지 않고 운영하려면 Timetable을 사용하세요.',
        timetable_link: 'Timetable 열기',
        pause_title: '활성 카드 일시정지',
        pause_body: '카드 기간을 잠시 멈춰야 한다면 카드 일시중지를 사용하세요.',
        pause_link: '카드 일시중지 열기',
        broadcast_title: '멤버에게 Broadcast 보내기',
        broadcast_body: 'AFL에서 멤버에게 일방향 업데이트나 훈련 게시물을 발행하려면 Broadcast를 사용하세요.',
        broadcast_link: 'Broadcast 열기',
        know_title: '알아둘 점',
        know_items: [
          '유료 도구는 이미 사용 중인 Business, Schedule, Cards, Members의 기본 흐름 위에 추가되는 기능입니다.',
          '도구는 개별로 제공될 수도 있고 프리미엄 패키지에 포함될 수도 있습니다.',
          '도장 오너가 활성화하면 다른 역할도 사용할 수 있는 경우가 많습니다.',
          '보통은 먼저 기본 흐름을 익힌 뒤 유료 도구를 얹는 편이 더 쉽습니다.'
        ],
        activate_link: '도구 상태 확인'
      },
      activate: {
        badge: '도구',
        paid_badge: '유료 도구',
        title: '도구와 프리미엄 활성화',
        intro: 'Affiliate Portal의 기능 페이지에서 도구 그룹을 확인하고, 무료 체험을 시작하고, 패키지를 구매하고, 도장에서 활성화된 패키지 도구를 관리합니다.',
        where_title: '이동 위치',
        where_body: 'Affiliate Portal에서 기능을 여세요. 현재 Rails가 관리하는 도구 활성화, 패키지 상태, 체험 상태의 진입점입니다.',
        organized_title: '페이지 구성 방식',
        organized_items: [
          '도구는 개별로도 제공됩니다.',
          '기능 페이지는 기본 도구, 고급 도구, 그리고 패키지 섹션으로 나뉩니다.',
          '프리미엄 패키지에는 4개의 생산성 도구가 포함됩니다.',
          '현재 UI에는 프로 패키지도 표시됩니다.',
          '첫 사용자라면 90일 프리미엄 체험을 시작할 수 있습니다.'
        ],
        groups_title: '현재 도구 그룹',
        essential_title: 'Essential Tools',
        essential_items: ['Timetables', 'Pause Academy'],
        advanced_title: 'Advanced Tools',
        advanced_items: ['직원 권한', 'Analytics'],
        packages_title: '패키지',
        packages_body: '현재 UI에는 Premium Package와 Pro Package가 포함됩니다.',
        features_title: '기능 페이지에서 볼 수 있는 항목',
        features_items: [
          'Start Free Trial',
          '프리미엄 패키지 구매',
          '프로 패키지 구매',
          '프리미엄 활성화됨',
          '프리미엄에 포함됨',
          'Available in free trial',
          'Included in free trial',
          'Included in your package',
          'Manage'
        ],
        know_title: '알아둘 점',
        know_items: [
          '도구가 비활성일 때 완전히 잠기는 화면도 있습니다.',
          '화면은 열리지만 유료 작업만 업그레이드 안내로 대체되는 경우도 있습니다.',
          '이 UI에서 현재 사용자 대상 명칭은 Broadcast이며 예전 Newsfeed 표현이 아닙니다.',
          '패키지 체험 동작은 중복을 고려하므로 프로와 프리미엄이 서로를 단순히 초기화하지는 않습니다.'
        ],
        guides_title: '유료 가이드',
        staff_access: '팀 접근 권한',
        analytics: 'Analytics',
        support_desc: '기능 페이지, 구독, 체험 상태, 기타 Affiliate 전용 웹 흐름 관련 질문은 Source Combatives의 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      broadcast: {
        badge: '도구',
        paid_badge: '유료 도구',
        title: '멤버에게 일방향 Broadcast 보내기',
        intro: 'Affiliate Portal의 Broadcasts는 도장 공지나 훈련 게시물을 멤버에게 발행할 때 사용합니다. 이것은 일방향 발행 도구이며 채팅, 답글, 소셜 피드가 아닙니다.',
        where_title: '위치',
        where_items: [
          'Affiliate 시스템 내비게이션에서 Broadcasts를 엽니다.',
          '현재 Affiliate 기준으로 Broadcast는 사실상 오너 전용입니다.',
          '기능 페이지에서 Broadcast는 Pro 도구로 표시됩니다.'
        ],
        flow_title: '작성 흐름',
        flow_steps: [
          'Affiliate에서 Broadcasts를 엽니다.',
          '게시할 stream 탭을 선택합니다.',
          '메시지 본문을 작성합니다.',
          '이미지를 URL 붙여넣기 또는 파일 업로드로 추가합니다.',
          'Publish Broadcast를 사용해 도장 피드로 보냅니다.'
        ],
        labels_title: '현재 보일 수 있는 라벨',
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
        lifecycle_title: '수명 주기 규칙',
        lifecycle_items: [
          '보이는 Broadcast는 삭제 전에 먼저 Recall 해야 합니다.',
          'Recall된 Broadcast는 다시 공개하고 싶으면 Repost 할 수 있습니다.',
          '영구 삭제는 Recall된 Broadcast만 가능합니다.',
          'Recall된 Broadcast는 일정 기간 복구 가능하며, Repost되지 않으면 이후 자동 삭제됩니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '사용자 대상 문구에서는 항상 Broadcast를 사용하세요. 예전 Newsfeed 표현은 오래되었습니다.',
          'Broadcast는 entitlement로 제어되며 기본 제공 기능이 아닙니다.',
          '이미지는 URL 붙여넣기와 파일 업로드 두 방식 모두 사용할 수 있습니다.',
          'Broadcast는 Affiliate에서 작성되고 이후 앱에서 소비됩니다.'
        ],
        features_link: '기능',
        student_link: '앱에서 Broadcast 읽기',
        support_desc: 'Broadcast 도구, 게시/Recall/Repost 문제, entitlement 이슈는 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      timetable: {
        badge: '도구',
        paid_badge: '유료 도구',
        title: '반복되는 주간 스케줄 만들기',
        intro: 'Timetable은 수업 템플릿을 한 번 만들고, 그것을 시간에 따라 캘린더에 게시하고 싶을 때 사용합니다.',
        use_title: '이럴 때 사용하세요',
        use_items: [
          '매주 같은 수업을 운영할 때',
          '각 수업을 매번 수동으로 다시 만들지 않고 더 멀리까지 계획하고 싶을 때',
          '준비가 되면 수업을 캘린더에 게시하고 싶을 때'
        ],
        steps_title: '단계',
        steps_items: [
          'Timetable을 엽니다.',
          '원하는 요일을 선택합니다.',
          'Create Lesson을 누릅니다.',
          '일반 Schedule 화면에서처럼 수업 폼을 작성합니다.',
          '반복 템플릿의 시작일과 종료일을 설정합니다.',
          '템플릿을 저장합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '템플릿은 게시하기 전까지 실제 캘린더 수업이 되지 않습니다.',
          '미래 종료일을 사용하면 안전하게 더 멀리까지 계획할 수 있습니다.',
          '생성 후에는 요일 페이지로 돌아가 그곳에서 템플릿을 수정할 수 있습니다.'
        ],
        publish_title: '게시',
        publish_body_1: '게시되지 않은 수업은 먼저 Schedule 페이지에 나타납니다. 관리자는 예약 준비가 되었을 때 게시할 수 있습니다.',
        publish_body_2: '멤버는 게시되지 않은 수업도 미래 계획으로 볼 수 있지만 아직 예약할 수는 없습니다.',
        mistake_title: '흔한 실수',
        mistake_body: '반복 수업이 공휴일과 겹치더라도 보통 timetable을 다시 만들 필요는 없습니다. 그 수업만 게시하지 않으면 됩니다.',
        activate_link: '도구 상태 확인'
      },
      pause: {
        badge: '도구',
        paid_badge: '유료 도구',
        title: '필요할 때 활성 카드를 일시정지하세요',
        intro: '카드 일시중지는 카드 시간이 정상적으로 계속 만료되게 두는 대신, 일시적으로 멈추고 싶을 때 사용합니다.',
        modes_title: '카드를 일시정지하는 두 가지 방법',
        modes_items: [
          '개별 일시정지: 해당 멤버의 프로필에서 한 사람의 카드를 일시정지하거나 재개합니다.',
          '도장 전체 일시정지: 오너는 도장 전체의 카드를 일시정지할 수 있습니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '일시정지된 카드는 예약에 사용할 수 없습니다.',
          '필요하다면 카드 템플릿별로 도장 전체 일시정지에서 제외할 수 있습니다.',
          '도장 전체 일시정지 전에 이미 개별로 일시정지된 멤버는, 도장 전체 일시정지가 끝난 뒤에도 계속 일시정지 상태입니다.'
        ],
        common_title: '가장 흔한 사용 사례',
        common_body: '오너는 카드마다 만료일을 수동으로 하나씩 늘리지 않고 멤버 시간을 보호하고 싶을 때 이 도구를 자주 사용합니다.',
        next_title: '다음 단계',
        back_tools: '도구 개요로 돌아가기',
        activate_link: '도구 상태 확인',
        back_cards: '카드로 돌아가기'
      }
    },
    portal: {
      overview: {
        badge: '포털',
        title: 'Affiliate Portal 사용',
        intro: 'Affiliate Portal은 Source Combatives의 웹 화면입니다. 일반적인 일상 앱 화면보다 무거운 오너 작업, 특히 등록, 심사, 랭크, 카드, 리포트, 패키지 활성화에 사용합니다.',
        workflows_title: '주요 Affiliate 워크플로',
        register_title: '등록과 온보딩',
        register_body: '등록 마법사로 성인 또는 보호자 계정을 만들고, 필요하면 자녀를 추가하고, 중단된 온보딩을 나중에 다시 이어갈 수 있습니다.',
        members_title: '멤버 상태 관리',
        members_body: '대기, 승인, 거절, 차단 사용자를 검토하고, 기존 계정을 이메일로 연결하거나, 보호자 온보딩을 다시 시작할 수 있습니다.',
        ranks_title: '랭크 프로그램 관리',
        ranks_body: '랭크 프로그램을 설정하고, 프로그램별로 멤버를 등록하며, 현재 검토 흐름을 통해 랭크 변경을 확정합니다.',
        cards_title: 'AFL에서 카드 관리',
        cards_body: 'Templates, Assign, Active, History를 이용해 카드 설정, 발급, 활성 카드 작업, 일시정지, 감사 검토를 처리합니다.',
        reports_title: '리포트와 도구 확인',
        reports_body: 'Reports는 주로 읽기 전용이므로 더 가볍게 다룹니다. Features에서 패키지와 체험 상태를 관리합니다.',
        know_title: '알아둘 점',
        know_items: [
          '대부분의 Affiliate 페이지는 사실상 오너 전용입니다.',
          '주요 예외는 월간 리포트이며, 리포트 권한이 있으면 비오너 스태프도 볼 수 있습니다.',
          'Affiliate 변경 사항은 멤버 상태, 카드, 랭크 데이터, 도구 활성화 등에서 앱에 직접 반영되는 경우가 많습니다.'
        ],
        support_desc: 'Affiliate Portal, Portal 설정 문제, 기타 Affiliate 전용 웹 워크플로 질문은 Source Combatives의 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      register: {
        badge: '포털',
        title: 'Affiliate Portal에서 등록하기',
        intro: 'Affiliate Portal의 Register는 Portal에서 새 도장 멤버를 만들 때 사용합니다. 이것은 한 화면짜리 폼이 아니라 여러 단계의 마법사입니다.',
        flow_title: '흐름',
        flow_steps: [
          'Affiliate에서 Register를 열고 먼저 보호자 또는 성인 정보를 입력합니다.',
          '보호자로 등록하는 경우 자녀 단계에서 자녀 계정을 추가합니다.',
          '요약을 검토하고 Confirm & Create로 마칩니다.',
          '계속 작업해야 하면 한 명 더 등록 또는 멤버로 이동을 사용합니다.'
        ],
        labels_title: '현재 보일 수 있는 라벨',
        labels_items: ['등록', '다음', '뒤로', '확인 후 생성', '한 명 더 등록', '멤버로 이동', '등록 이어하기'],
        know_title: '알아둘 점',
        know_items: [
          '보호자와 성인 학생은 완전히 같은 경로를 따르지 않습니다.',
          '보호자가 학생으로 등록하는 경우 자녀 단계는 건너뜁니다.',
          '보호자는 Pending 상태로 남을 수 있고 나중에 멤버에서 다시 이어갈 수 있습니다.',
          '여기서 만든 계정은 일반 DojoMate 사용자 계정이 되며 앱이 사용하는 도장 멤버 데이터에도 나타납니다.'
        ],
        next_title: '다음 단계',
        members_link: '멤버',
        cards_link: 'Cards',
        support_desc: '등록 마법사, Pending 보호자 재개, 기타 Affiliate 온보딩 문제는 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      members: {
        badge: '포털',
        title: 'Portal 멤버 관리',
        intro: 'Affiliate Portal의 Members는 도장 멤버 상태를 심사할 때 사용합니다. 단순한 목록이 아니라 상태 중심 영역입니다.',
        jobs_title: '주요 작업',
        jobs_items: [
          'Pending Users, Recently Accepted, 보호자 계정, 성인 멤버, 거절된 사용자, 차단된 사용자를 검토합니다.',
          '심사 작업에는 Accept, Reject, Ban을 사용합니다.',
          '기존 계정을 이메일로 연결하려면 이메일로 멤버 추가를 사용합니다.',
          '대기 중인 보호자 흐름을 이어가려면 등록 이어하기를 사용합니다.'
        ],
        labels_title: '현재 보일 수 있는 라벨',
        labels_items: ['멤버', '멤버 목록', '이메일로 멤버 추가', '수락', '거절', '차단', '등록 이어하기', '대기 중, 승인됨, 거절됨, 차단됨'],
        confusion_title: '자주 헷갈리는 점',
        confusion_items: [
          '이메일로 멤버 추가는 이미 존재하는 계정에만 동작합니다.',
          '자녀 계정이 아직 승인 상태라면 보호자 Reject가 막힐 수 있습니다.',
          '활성 카드가 남아 있어도 Reject가 막힐 수 있습니다.',
          '이 페이지는 단순 심사 화면이 아니라 중단된 등록을 복구하는 지점이기도 합니다.'
        ],
        next_title: '다음 단계',
        register_link: 'Register',
        cards_link: 'Cards',
        support_desc: '멤버 상태, 보호자/자녀 심사, 기존 계정 이메일 연결 문제는 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      ranks: {
        badge: '포털',
        title: '랭크와 프로그램 관리',
        intro: 'Affiliate Portal의 Ranks는 도장 랭크 프로그램을 설정하고 멤버 진행 상태를 업데이트할 때 사용합니다. 이것은 단일 전역 설정이 아니라 다중 프로그램 워크플로입니다.',
        jobs_title: '주요 작업',
        jobs_items: [
          '필요하면 먼저 오너 멤버 프로필을 만듭니다.',
          'Add Program과 Save Systems를 사용해 무술 프로그램과 랭킹 시스템을 설정합니다.',
          'Enroll Member와 Remove from Program으로 각 프로그램 roster를 관리합니다.',
          '랭크와 stripe를 업데이트하고 review 모달이 뜨면 변경을 확정합니다.'
        ],
        labels_title: '현재 보일 수 있는 라벨',
        labels_items: ['Ranks', 'Create profile', 'Add Program', 'Save Systems', 'Remove Program', 'Enroll Member', 'Remove from Program', 'Save', 'Review Change', 'Confirm Change'],
        know_title: '알아둘 점',
        know_items: [
          '여기에는 승인된 멤버만 표시됩니다.',
          '프로그램 roster는 무술 트랙마다 다를 수 있습니다.',
          '일부 랭크 변경은 저장 전에 change type과 notes를 포함한 review 단계가 필요합니다.',
          '여기서 기록한 변경은 앱이 읽고 표시하는 진행 데이터에 반영됩니다.'
        ],
        next_title: '다음 단계',
        members_link: '멤버',
        analytics_link: 'Analytics',
        support_desc: '랭크 프로그램 설정, roster 등록, Ranks review 모달 문제는 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      cards: {
        badge: '포털',
        title: '포털 카드 사용',
        intro: 'Affiliate Portal의 Cards는 템플릿, 발급, 활성 카드 관리, 일시정지 제어, 기록까지 포함하는 전체 웹 카드 워크플로가 필요할 때 사용합니다.',
        areas_title: '주요 카드 영역',
        areas_items: [
          'Templates는 카드 템플릿 생성, 수정, 삭제에 사용합니다.',
          'Assign는 승인된 멤버에게 카드를 발급할 때 사용합니다.',
          'Active는 현재 카드 상태, 일시정지 작업, 삭제 또는 Expire 작업을 다룹니다.',
          'History는 발급, 삭제, 감사 기록 검토에 사용합니다.'
        ],
        labels_title: '현재 보일 수 있는 라벨',
        labels_items: [
          'Templates, Assign, Active, History',
          'New Template, Create, Update',
          'Issue Card, Manage, Delete',
          'Pause Academy, Unpause Academy, Pause Member, Unpause Member',
          'View Plans'
        ],
        know_title: '알아둘 점',
        know_items: [
          '활성 카드가 남아 있는 템플릿은 삭제할 수 없습니다.',
          '도장 전체가 일시정지 상태이면 개별 카드 관리는 잠깁니다.',
          'Pause 및 Unpause 제어에는 유료 Pause 도구가 필요합니다.',
          '카드 삭제에는 Expire와 Cancel이 있고, Cancel에는 사유가 필요할 수 있습니다.',
          'AFL에서 발급한 카드는 앱의 예약, 출석/세션 차감, 멤버 카드 상태에 사용되는 실제 카드입니다.'
        ],
        next_title: '다음 단계',
        members_link: '멤버',
        pause_link: '카드 일시중지',
        app_cards_link: '앱의 카드',
        support_desc: 'Affiliate Cards의 템플릿, 발급, 활성 카드, 일시정지, 기록 관련 질문은 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      },
      reports: {
        badge: '포털',
        title: 'Portal 리포트 검토',
        intro: 'Affiliate Portal의 Reports는 시스템이 이미 생성한 월간 재무 리포트를 검토할 때 사용합니다. 이 페이지는 읽기 전용입니다.',
        flow_title: '사용 방법',
        flow_items: [
          '둘 이상의 도장에 접근할 수 있다면 먼저 도장을 선택합니다.',
          'year filter를 사용하고 Apply를 누릅니다.',
          '월별 리포트 카드를 열어 생성된 데이터를 검토합니다.'
        ],
        access_title: '접근과 entitlement',
        access_items: [
          '보통 오너가 Reports에 접근할 수 있습니다.',
          '비오너 스태프는 리포트 접근 권한이 있을 때만 Reports를 볼 수 있습니다.',
          'Analytics entitlement가 꺼져 있으면 이 페이지는 리포트 대신 잠금 상태를 표시합니다.'
        ],
        know_title: '알아둘 점',
        know_items: [
          '이 화면에서 AFL이 리포트를 실시간 계산하는 것은 아닙니다.',
          '리포트 데이터는 더 넓은 분석 데이터 및 시스템 파이프라인에서 옵니다.',
          '잠금 상태가 보이면 Features로 이동하세요.'
        ],
        support_desc: '리포트 접근 문제, Analytics 잠금 상태, Affiliate 월간 리포트 관련 질문은 Affiliate Portal 게시판을 이용하세요.',
        support_button: 'Affiliate Portal 게시판 열기'
      }
    }
  }
}
