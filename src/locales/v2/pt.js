export default {
  help_v3: {
    support: {
      heading: 'Precisa de mais ajuda?',
      default_description: 'Use o fórum de ajuda do DojoMate no Source Combatives para dúvidas extras, casos especiais ou fluxos que continuam fora do app.',
      default_button: 'Abrir o fórum de ajuda do DojoMate'
    },
    layout: {
      badge: 'Ajuda v3',
      intro: 'Guia de fluxos organizado pelos dashboards e papéis atuais do DojoMate.',
      open_v2: 'Abrir Ajuda v2',
      search_placeholder: 'Buscar ajuda v3',
      search_no_results: 'Nenhum resultado encontrado',
      nav: {
        start_here: 'Comece aqui',
        home: 'Página inicial da Ajuda v3',
        member_home: 'Guia do aluno',
        admin_home: 'Guia do admin',
        owner_home: 'Guia do dono',
        account_home: 'Guia da conta',
        member: 'Aluno',
        admin: 'Admin / equipe',
        owner: 'Dono / operações',
        account: 'Conta / configurações',
        join_academy: 'Entrar em uma academia',
        memberships: 'Memberships',
        member_cards: 'Cartões',
        card_disputes: 'Disputas de cartões',
        booking: 'Reservas',
        attendance_records: 'Registros de presença',
        system_alerts: 'Alertas do sistema',
        broadcasts: 'Broadcasts',
        online_learning: 'Aprendizado online',
        events: 'Eventos',
        academy_context: 'Contexto da academia',
        admin_members: 'Membros',
        admin_cards: 'Cartões',
        session_debt: 'Dívida de sessões',
        lessons: 'Modelos de aula',
        schedule: 'Agenda',
        admin_booking: 'Reserva pelo admin',
        admin_broadcasts: 'Publicar broadcasts',
        alerts_qr: 'Alertas e QR',
        create_academy: 'Criar academia',
        onboarding: 'Onboarding',
        business_management: 'Gestão da academia',
        instructors: 'Instrutores',
        access: 'Acesso',
        operations_analytics: 'Análises de operações',
        timesheets_salaries: 'Ponto e salários',
        oversight: 'Supervisão',
        owner_tools: 'Ferramentas',
        sign_in: 'Entrar',
        create_account: 'Criar conta',
        reset_password: 'Redefinir senha',
        change_password: 'Mudar senha',
        profile: 'Perfil',
        child_accounts: 'Contas infantis',
        privacy_progression: 'Privacidade e progressão',
        preferences: 'Preferências',
        delete_account: 'Excluir conta',
        logout: 'Sair'
      }
    },
    welcome: {
      badge: 'Ajuda v3',
      title: 'Guia atual de fluxos',
      intro: 'Use a Ajuda v3 quando quiser seguir as tarefas conforme os papéis e dashboards atuais do DojoMate.',
      areas_title: 'Escolha a área que combina com seu trabalho',
      member_title: 'Aluno',
      member_body: 'Entrar na academia, cartões, reservas, alertas, broadcasts, aprendizado online e eventos.',
      member_link: 'Abrir guia do aluno',
      admin_title: 'Admin / equipe',
      admin_body: 'Membros, cartões, agenda, reservas para alunos, broadcasts e trabalho diário da academia.',
      admin_link: 'Abrir guia do admin',
      owner_title: 'Dono / operações',
      owner_body: 'Criação da academia, onboarding, configuração exclusiva do dono, acesso e fluxos operacionais.',
      owner_link: 'Abrir guia do dono',
      account_title: 'Conta / configurações',
      account_body: 'Entrar, ajuda com senha, perfil, privacidade, preferências e sair.',
      account_link: 'Abrir guia da conta',
      note_title: 'O que muda na v3',
      note_body: 'A v3 organiza o conteúdo de acordo com os papéis e responsabilidades atuais do produto, o que facilita a busca e também a futura extração por assistentes.',
      note_button: 'Ver Ajuda v2'
    },
    member: {
      home: {
        badge: 'Aluno',
        title: 'Guia do aluno',
        intro: 'Use este guia quando você treina em uma academia e precisa de ajuda com entrada, memberships, cartões, reservas, alertas, broadcasts, aprendizado online ou eventos.',
        areas_title: 'Tópicos do aluno',
        links: [
          {
            title: 'Academia e memberships',
            body: 'Entrar na academia correta e confirmar o contexto da academia selecionada.',
            links: [
              { label: 'Entrar em uma academia', to: '/help-v3/member/join-academy' },
              { label: 'Memberships', to: '/help-v3/member/memberships' }
            ]
          },
          {
            title: 'Cartões e aulas',
            body: 'Revisar cartões, abrir disputas, reservar aulas e conferir registros de presença.',
            links: [
              { label: 'Cartões', to: '/help-v3/member/cards' },
              { label: 'Disputas de cartões', to: '/help-v3/member/card-disputes' },
              { label: 'Reservas', to: '/help-v3/member/booking' },
              { label: 'Registros de presença', to: '/help-v3/member/attendance-records' }
            ]
          },
          {
            title: 'Atualizações da academia',
            body: 'Ler alertas do sistema, broadcasts, conteúdo online e informações de eventos.',
            links: [
              { label: 'Alertas do sistema', to: '/help-v3/member/system-alerts' },
              { label: 'Broadcasts', to: '/help-v3/member/broadcasts' },
              { label: 'Aprendizado online', to: '/help-v3/member/online-learning' },
              { label: 'Eventos', to: '/help-v3/member/events' }
            ]
          }
        ]
      },
      join_academy: {
        badge: 'Aluno',
        title: 'Entrar em uma academia',
        intro: 'Use este fluxo quando quiser conectar sua conta a uma academia que usa DojoMate.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Explorar academias no Discover.',
          'Pesquisar pelo nome da academia.',
          'Escanear um QR code fornecido pela academia.',
          'Abrir os detalhes da academia antes de decidir entrar.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Se você quer comparar academias primeiro, use Discover Academy.',
          'Se já sabe qual academia quer ou quer escanear um QR, use Academy Search.',
          'Primeiro confirme nos detalhes da academia se é realmente a academia correta.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Depois de enviar o pedido, a academia ainda pode precisar aceitá-lo.',
          'Contas geridas por responsáveis ou vínculos com contas infantis podem exigir etapas extras.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, a academia aparece na sua academy list ou em estado pendente.',
          'Se a academia ainda não tiver aceitado você, recursos seguintes do lado do aluno podem continuar limitados.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Memberships', to: '/help-v3/member/memberships' },
          { label: 'Cartões', to: '/help-v3/member/cards' }
        ]
      },
      memberships: {
        badge: 'Aluno',
        title: 'Gerenciar memberships e contexto da academia',
        intro: 'Use este tópico quando você pertence a uma ou mais academias e precisa confirmar qual academia está ativa agora.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar as academias ligadas à sua conta.',
          'Trocar a academia selecionada antes de usar cartões, reservas ou broadcasts.',
          'Confirmar se você está na academia correta quando algo parecer ausente.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a academy list das academias em que você entrou e as superfícies de contexto da academia do aluno.',
          'Antes de concluir que um cartão ou aula sumiu, confirme novamente a academia atualmente selecionada.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Selecionar a academia errada pode fazer cartões, agenda e Broadcast parecerem indisponíveis.',
          'O estado da membership ainda pode depender da aceitação da academia ou do vínculo com conta infantil.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois de escolher a academia correta, as próximas telas do aluno carregam os dados daquela academia.',
          'Se a academia errada continuar selecionada, reservas e cartões podem continuar parecendo inconsistentes.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Cartões', to: '/help-v3/member/cards' },
          { label: 'Reservas', to: '/help-v3/member/booking' }
        ]
      },
      cards: {
        badge: 'Aluno',
        title: 'Revisar cartões e pagamentos pendentes',
        intro: 'Use este tópico quando quiser confirmar quais cartões estão disponíveis, revisar um cartão com pagamento pendente ou entender se um bloqueio de reserva está ligado ao cartão.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Ver os cartões disponíveis na academia atualmente selecionada.',
          'Verificar se existe um fluxo de pagamento pendente para cartão.',
          'Confirmar primeiro se uma falha de reserva realmente é um problema de cartão.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as telas de cartões do aluno e qualquer fluxo de pagamento pendente de cartão.',
          'Volte para cá primeiro quando a reserva disser que você não tem um cartão elegível.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Os cartões do aluno são vinculados à academia atualmente selecionada.',
          'Esta não é a área de revisão de auditoria do dono ou do admin.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois que um pagamento pendente dá certo, o cartão pode passar para um estado utilizável.',
          'Se o cartão continuar parecendo errado depois do pagamento ou de mudanças de emissão, use o fluxo de disputa.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Disputas de cartão', to: '/help-v3/member/card-disputes' },
          { label: 'Reservas', to: '/help-v3/member/booking' }
        ]
      },
      booking: {
        badge: 'Aluno',
        title: 'Reservar ou cancelar uma aula',
        intro: 'Use o fluxo de reservas quando quiser abrir a agenda da academia, revisar a aula, escolher um cartão válido e confirmar sua vaga.',
        steps_title: 'Passos comuns',
        steps_items: [
          'Abra a agenda da academia atualmente selecionada.',
          'Escolha uma aula agendada e veja os detalhes.',
          'Abra a seleção de cartões, escolha um cartão elegível e decida se a reserva deve aparecer como anônima para outros membros.',
          'Confirme a reserva ou o cancelamento.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use Academy Schedule, Academy Booking e Academy Card Selection.',
          'Se a aula ou o cartão parecer errado, primeiro confirme qual academia está selecionada.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'A reserva usa o fluxo atual de scheduled lessons, e não uma edição genérica de aula.',
          'A elegibilidade do cartão e as regras de bloqueio da reserva vêm do backend.',
          'A reserva anônima esconde a identidade apenas de outros membros; a equipe da academia continua vendo a reserva real.',
          'Mesmo quando a ação de reservar é bloqueada, detalhes de aulas canceladas ou processadas podem continuar visíveis.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, o estado da reserva e a lista visível são atualizados.',
          'Falhas esperadas de guarda explicam por que a ação foi bloqueada, como reserva encerrada ou aula já iniciada.',
          'Se o app não conseguir confirmar se a solicitação foi concluída, pode ser necessário atualizar a tela e tentar novamente.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Registros de presença', to: '/help-v3/member/attendance-records' },
          { label: 'Alertas do sistema', to: '/help-v3/member/system-alerts' }
        ]
      },
      attendance_records: {
        badge: 'Aluno',
        title: 'Revisar registros de presença',
        intro: 'Use os registros de presença quando quiser confirmar se uma aula passada foi registrada da forma esperada.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar presença passada da academia atualmente selecionada.',
          'Conferir se uma aula aparece no seu histórico.',
          'Usar o registro como confirmação depois da reserva e do treino.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as superfícies de presença do aluno ou academy records.',
          'Comece por aqui quando quiser confirmar o resultado de uma reserva ou visita anterior.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Os registros de presença são para consulta, não para edição pelo aluno.',
          'Se um registro estiver errado, a academia precisa corrigi-lo.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Um registro normal confirma que a aula foi lançada.',
          'Um registro ausente ou incorreto deve levar você ao acompanhamento com a academia, e não a uma correção por conta própria.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Reservas', to: '/help-v3/member/booking' },
          { label: 'Disputas de cartão', to: '/help-v3/member/card-disputes' }
        ]
      },
      system_alerts: {
        badge: 'Aluno',
        title: 'Ler alertas do sistema',
        intro: 'Use os alertas do sistema quando precisar ler atualizações importantes ligadas à sua conta, à academia ou a fluxos relacionados do aluno.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Ler atualizações importantes geradas pelo sistema sobre conta ou academia.',
          'Usar alertas como superfície de fallback segura quando uma notificação push não consegue abrir uma tela mais específica.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use telas de alertas do aluno, como Academy Alerts.',
          'Se um toque na notificação não conseguir abrir o destino exato, o app pode levar você para cá.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'System Alerts não é chat.',
          'Nem todo tipo de notificação já tem um deep link preciso.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois da leitura, o estado de lido pode ser atualizado.',
          'Se o alerta aponta para outro fluxo, vá para aquela área do app em vez de ficar parado nos alertas.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Broadcasts', to: '/help-v3/member/broadcasts' },
          { label: 'Reservas', to: '/help-v3/member/booking' }
        ]
      },
      broadcasts: {
        badge: 'Aluno',
        title: 'Ler broadcasts da academia',
        intro: 'Use Broadcast para ler posts da academia atualmente selecionada. O feed do lado do aluno é somente leitura e serve para atualizações e posts de treino da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Alternar entre Updates e Training.',
          'Ler texto, imagens e posts de Broadcast da academia.',
          'Abrir imagens em tamanho maior sem sair do painel do aluno.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as telas de Broadcast do aluno ligadas à academia atualmente selecionada.',
          'Se o feed parecer errado, volte e confirme a academia escolhida.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'O Broadcast do aluno é somente leitura.',
          'Não há comentários, respostas, curtidas nem postagens de membros nesse fluxo.',
          'Um feed vazio não significa necessariamente erro; a academia pode simplesmente ainda não ter posts visíveis.',
          'O conteúdo de Broadcast é criado por equipe ou dono da academia, não por membros.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando o carregamento dá certo, o feed da academia selecionada aparece.',
          'Se você quer ver estado da conta ou do sistema, use System Alerts.',
          'Mesmo quando a academia também oferece Online, Broadcast e Online continuam sendo superfícies separadas.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Alertas do sistema', to: '/help-v3/member/system-alerts' },
          { label: 'Aprendizado online', to: '/help-v3/member/online-learning' }
        ]
      },
      card_disputes: {
        badge: 'Aluno',
        title: 'Abrir uma disputa de cartão',
        intro: 'Use disputas de cartão quando um cartão, uma exclusão de cartão ou uma mudança relacionada ao cartão parecer errada do lado do aluno e exigir acompanhamento da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Criar um registro de disputa ligado ao problema de cartão que você percebeu.',
          'Explicar o que parece errado do lado do aluno.',
          'Manter o problema em um caminho dedicado de acompanhamento em vez de misturá-lo com reservas ou perguntas de perfil.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use telas de cartões e disputas do aluno, como Academy Disputes.',
          'Quando possível, comece pelo cartão que parece errado.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Uma disputa não corrige o cartão na hora.',
          'Ferramentas de revisão exclusivas do dono, como audit logs, não fazem parte do fluxo de disputa do aluno.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, a disputa vira um item de acompanhamento para o lado da academia.',
          'Você ainda pode precisar esperar a revisão da academia antes de ver mudança no estado do cartão.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Cartões', to: '/help-v3/member/cards' },
          { label: 'Registros de presença', to: '/help-v3/member/attendance-records' }
        ]
      },
      online_learning: {
        badge: 'Aluno',
        title: 'Usar aprendizado online',
        intro: 'Use Online quando sua conta de aluno tiver acesso online e você quiser navegar pelo currículo, abrir aulas, assistir clipes e concluir tarefas.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Abrir Online pelo dashboard do aluno quando o acesso existir.',
          'Navegar por curriculum, catalog e camadas de aula.',
          'Assistir clipes de ensino e vídeos de tips vinculados.',
          'Abrir e enviar tarefas a partir do fluxo da aula dona do conteúdo.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use Online Home, Curriculum, Catalog, Lesson, Video e Homework.',
          'Siga o fluxo da aula desde o currículo até o trecho que você quer assistir.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'O tile Online aparece apenas quando a permissão libera o acesso.',
          'Aqui o Expo Online é uma superfície de consumo, não uma área de administração online.',
          'Tarefas e vídeos de tips continuam ligados à aula e ao slice de origem, em vez de virarem um feed solto da academia.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando o acesso existe, o dashboard revela a entrada Online.',
          'Tarefas e tips continuam ligadas à aula e ao slice de origem, em vez de virarem conteúdo separado e solto.',
          'Se o acesso faltar, a expectativa correta é não ver a entrada Online, e não um estado vazio parcialmente funcional.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Eventos', to: '/help-v3/member/events' },
          { label: 'Broadcasts', to: '/help-v3/member/broadcasts' }
        ]
      },
      events: {
        badge: 'Aluno',
        title: 'Explorar eventos e inscrições',
        intro: 'Use Events quando quiser explorar eventos de competição, manter seu perfil de competição ou gerenciar etapas de inscrição de um evento.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Explorar eventos de competição disponíveis.',
          'Abrir o detalhe do evento antes da inscrição.',
          'Criar ou atualizar seu perfil de competição.',
          'Gerenciar etapas de inscrição e pagamento quando o evento oferecer isso.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use telas de lista de eventos, detalhe, perfil e inscrição.',
          'Alguns fluxos de evento passam para provedores externos, como sites de federação ou do próprio evento.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Fluxos com provedores externos não ficam totalmente dentro do app DojoMate.',
          'O estado da inscrição pode depender de exigências específicas do evento fora do fluxo comum de membership da academia.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, seu perfil ou estado de inscrição é atualizado.',
          'Se o evento usar provedor externo, espere um handoff em vez de um formulário totalmente interno ao app.',
          'Atualizações do perfil de competição podem virar parte da preparação para inscrições futuras, em vez de ficar isoladas em uma tela.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Memberships', to: '/help-v3/member/memberships' },
          { label: 'Alertas do sistema', to: '/help-v3/member/system-alerts' }
        ]
      }
    },
    admin: {
      home: {
        badge: 'Admin',
        title: 'Guia do admin e da equipe',
        intro: 'Use este guia quando você trabalha no dashboard administrativo da academia com membros, cartões, agenda, reservas ou broadcasts.',
        areas_title: 'Tópicos do admin',
        links: [
          {
            title: 'Contexto da academia e membros',
            body: 'Confirme primeiro que a academia correta está selecionada antes de alterar membros ou papéis.',
            links: [
              { label: 'Contexto da academia', to: '/help-v3/admin/academy-context' },
              { label: 'Membros', to: '/help-v3/admin/members' }
            ]
          },
          {
            title: 'Operação diária',
            body: 'Gerencie cartões, dívidas de sessões, modelos de aula, agenda e reservas pelo admin.',
            links: [
              { label: 'Cartões', to: '/help-v3/admin/cards' },
              { label: 'Dívida de sessões', to: '/help-v3/admin/session-debt' },
              { label: 'Modelos de aula', to: '/help-v3/admin/lessons' },
              { label: 'Agenda', to: '/help-v3/admin/schedule' },
              { label: 'Reserva pelo admin', to: '/help-v3/admin/admin-booking' }
            ]
          },
          {
            title: 'Alertas e ferramentas',
            body: 'Use o fluxo atual de broadcasts, alertas administrativos e ferramentas de QR.',
            links: [
              { label: 'Publicar broadcasts', to: '/help-v3/admin/broadcasts' },
              { label: 'Alertas e QR', to: '/help-v3/admin/alerts-qr' }
            ]
          }
        ]
      },
      cards: {
        badge: 'Admin',
        title: 'Criar e emitir cartões',
        intro: 'Use Cards no admin quando precisar criar modelos de cartão, emitir cartões ativos, revisar cartões atuais ou mudar o estado dos cartões disponíveis para membros da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Criar modelos de cartão.',
          'Revisar modelos existentes.',
          'Emitir cartões ativos para membros.',
          'Revisar cartões ativos e lidar com estados ligados a pausa quando a tela permitir.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as telas de criação de modelo, lista de modelos, emissão e Active Cards.',
          'Se um problema de reserva do aluno na verdade for um problema de cartão, volte para cá e revise.',
          'Durante o onboarding, o app pode levar você direto para Cards porque o primeiro marco de cartão faz parte da criação da academia.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Modelo de cartão e cartão ativo são camadas diferentes.',
          'Ferramentas exclusivas do dono, como audit logs, não fazem parte do guia normal de Cards no admin.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, os fluxos administrativos e do aluno ligados a cartões são atualizados.',
          'Quando a atualização do cartão entra no contexto correto da academia, a elegibilidade de reservas também pode mudar.',
          'Mesmo que esse cartão exista só para onboarding ou teste interno, ele ainda pode contar para o marco sem significar que a cobrança real já está pronta.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Dívida de sessões', to: '/help-v3/admin/session-debt' },
          { label: 'Reserva pelo admin', to: '/help-v3/admin/admin-booking' }
        ]
      },
      academy_context: {
        badge: 'Admin',
        title: 'Confirmar qual academia você está administrando agora',
        intro: 'Quando você trabalha com várias academias, ou suspeita que não está no contexto administrativo correto, confirme primeiro o academy context.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Confirmar qual academia está carregada agora.',
          'Trocar para a academia correta antes de mexer em membros, cartões, agenda ou broadcasts.',
          'Distinguir se você está no caminho Admin ou no caminho Business / Owner.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use o fluxo de troca de academia e a entrada administrativa.',
          'Se você acabou de voltar de outra academia, confirme aqui antes de continuar o trabalho.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'As ações de admin e de equipe são vinculadas à academia atualmente selecionada.',
          'Trabalhos de configuração do dono ou do lado Business não devem ser tratados como recursos admin comuns.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois de confirmar a academia correta, as telas administrativas seguintes carregam os dados correspondentes.',
          'Se a academia estiver errada, membros, cartões ou agenda podem parecer ausentes ou inconsistentes.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Membros', to: '/help-v3/admin/members' },
          { label: 'Cartões', to: '/help-v3/admin/cards' }
        ]
      },
      members: {
        badge: 'Admin',
        title: 'Gerenciar membros',
        intro: 'Use Members quando precisar revisar membros pendentes, aceitos, rejeitados ou banidos e entender como a pessoa está participando da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar memberships pendentes e aceitas.',
          'Rejeitar, banir ou atualizar o estado quando a tela permitir.',
          'Abrir perfil do membro e contexto de presença.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use telas de estado como Pending, Accepted, Rejected e Banned.',
          'Abra detalhes do membro ou presença a partir da área administrativa de membros.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Membro, instrutor e acesso administrativo não são a mesma coisa.',
          'Linhas de adultos marcados como instrutor não devem ser tratadas como linhas comuns de membros adultos.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, a pessoa passa para o estado visível correto.',
          'As telas administrativas relacionadas também se atualizam com o novo estado.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Cartões', to: '/help-v3/admin/cards' },
          { label: 'Reserva pelo admin', to: '/help-v3/admin/admin-booking' }
        ]
      },
      session_debt: {
        badge: 'Admin',
        title: 'Quitar dívida de sessões',
        intro: 'Use o fluxo de dívida de sessões quando o histórico de cartão ou reserva tiver criado um estado de dívida que precisa ser resolvido pela equipe.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar itens de dívida de sessões em aberto.',
          'Quitar a dívida pelo fluxo administrativo atual.',
          'Manter a quitação separada de disputas de membros e de supervisão do dono.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a superfície de debt ou card-debt do admin ligada às ferramentas atuais de cartões.',
          'Abra isso a partir das operações de cartões do admin, e não a partir de suposições de perfil de membro.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Quitar dívida não é o mesmo que uma disputa do lado do aluno.',
          'Ferramentas de revisão do dono continuam separadas deste fluxo administrativo do dia a dia.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois da quitação, o estado da dívida e o contexto relacionado do cartão devem ser atualizados.',
          'Se o registro de base estiver em disputa, e não apenas em débito, mude para o caminho correto de disputa ou supervisão.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Cartões', to: '/help-v3/admin/cards' },
          { label: 'Membros', to: '/help-v3/admin/members' }
        ]
      },
      lessons: {
        badge: 'Admin',
        title: 'Gerenciar modelos de aula',
        intro: 'Use Lessons quando precisar criar, editar ou remover modelos de aula antes de publicá-los na agenda real.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Criar modelos de aula.',
          'Editar detalhes de ensino e agenda dentro do modelo.',
          'Excluir modelos que não precisam mais ser publicados.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use telas de template como lesson-day, create lesson e edit lesson.',
          'Conclua o trabalho de template aqui antes de seguir para a publicação real no schedule.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Modelos de aula não são a mesma coisa que aulas agendadas já publicadas.',
          'Mudar o template antes da camada de schedule não explica automaticamente todos os resultados já publicados na agenda.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, o template fica disponível para a agenda posterior.',
          'Se o evento real já existir, a edição do schedule ainda pode ser um passo separado.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Agenda', to: '/help-v3/admin/schedule' },
          { label: 'Reserva pelo admin', to: '/help-v3/admin/admin-booking' }
        ]
      },
      schedule: {
        badge: 'Admin',
        title: 'Publicar e gerenciar a agenda',
        intro: 'Use as ferramentas de agenda quando precisar publicar uma aula, editar uma aula agendada, cancelá-la ou removê-la da agenda ao vivo da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Publicar aulas agendadas a partir de templates.',
          'Editar ou cancelar aulas agendadas.',
          'Revisar o detalhe da aula agendada e o estado da lista.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use o schedule layout e os fluxos de create/edit event.',
          'Abra o detalhe específico da aula agendada quando precisar inspecionar o estado atual.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Aulas canceladas ou processadas devem continuar revisáveis em vez de desaparecerem do fluxo de revisão.',
          'Apenas a ação de reservar em si deve ser bloqueada quando as regras de guarda exigirem isso.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, a agenda da academia é atualizada para refletir o estado atual da aula agendada.',
          'Se a aula estiver cancelada, o detalhe ainda pode ser útil para revisão, mesmo sem reserva aberta.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Modelos de aula', to: '/help-v3/admin/lessons' },
          { label: 'Reserva pelo admin', to: '/help-v3/admin/admin-booking' }
        ]
      },
      admin_booking: {
        badge: 'Admin',
        title: 'Reservar para um aluno ou membro',
        intro: 'Use admin booking quando a equipe precisar criar ou remover uma reserva em nome de um membro a partir do lado administrativo da agenda.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Abrir uma aula agendada pelo lado admin.',
          'Selecionar um membro-alvo e um cartão válido.',
          'Criar ou remover a reserva usando o fluxo atual de ação de reserva.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use Admin Booking e o fluxo relacionado de seleção de cartão.',
          'Comece pela aula agendada que você está atendendo, e não por uma busca genérica de membros.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'O admin não pode criar reservas anônimas.',
          'Os backend booking guard codes continuam controlando se a reserva é permitida.',
          'Mesmo quando o detalhe da lista continua visível, falhas inesperadas podem exigir atualização e nova tentativa.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, a lista da aula e o estado da reserva são atualizados.',
          'Se a ação for bloqueada, a tela deve explicar a condição de guarda em vez de parecer que a aula desapareceu.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Agenda', to: '/help-v3/admin/schedule' },
          { label: 'Membros', to: '/help-v3/admin/members' }
        ]
      },
      broadcasts: {
        badge: 'Admin',
        title: 'Publicar broadcasts',
        intro: 'Use o fluxo administrativo atual de Broadcast quando quiser publicar atualizações da academia ou posts de treino pelo app.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Criar um Broadcast com texto e imagens.',
          'Criar um Broadcast com texto e um único vídeo MP4.',
          'Publicar imediatamente no feed da academia atualmente selecionada.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a tela de publicação de Broadcast dentro da área Members do lado admin.',
          'Confirme o contexto correto da academia selecionada antes de publicar.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'No momento não existe fluxo de rascunho salvo.',
          'O app suporta apenas um vídeo, e não permite misturar imagens com vídeo no mesmo post.',
          'A autorização continua dependendo do papel da academia e do access.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando a criação dá certo, o Broadcast é publicado imediatamente.',
          'Se mídia ou autorização estiverem erradas, a criação deve falhar, e não virar um rascunho oculto.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Alertas e QR', to: '/help-v3/admin/alerts-qr' },
          { label: 'Contexto da academia', to: '/help-v3/admin/academy-context' }
        ]
      },
      alerts_qr: {
        badge: 'Admin',
        title: 'Usar alertas e ferramentas de QR',
        intro: 'Use essas ferramentas de apoio do admin quando precisar lidar com alertas, ações de QR ou retomadas ligadas ao contexto atual da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar alertas administrativos ou business ligados à academia.',
          'Abrir ferramentas relacionadas a QR.',
          'Usar fluxos de apoio ao contexto da academia quando precisar retomar ou trocar.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a tela de alertas e a entrada de QR no menu da academia.',
          'Se a academia atual estiver errada, volte ao seletor de academias.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Esses fluxos apoiam o trabalho da academia, mas não substituem a gestão business exclusiva do dono.',
          'Algumas retomadas pertencem ao caminho mais amplo de bootstrap ou settings, e não ao menu diário comum.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'O alerta correto ou a ação de QR leva você para o próximo fluxo relevante da academia.',
          'Se a questão for realmente uma configuração business exclusiva do dono, o próximo passo costuma ser mudar para a área do dono.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Contexto da academia', to: '/help-v3/admin/academy-context' },
          { label: 'Publicar broadcasts', to: '/help-v3/admin/broadcasts' }
        ]
      }
    },
    owner: {
      home: {
        badge: 'Dono',
        title: 'Guia do dono e de operações',
        intro: 'Use este guia quando você precisa criar academias, concluir o onboarding, gerenciar configurações exclusivas do dono ou trabalhar com operações e supervisão.',
        areas_title: 'Tópicos do dono',
        links: [
          {
            title: 'Criação da academia e onboarding',
            body: 'Criar a primeira academia e seguir o onboarding baseado em marcos.',
            links: [
              { label: 'Criar academia', to: '/help-v3/owner/create-academy' },
              { label: 'Onboarding', to: '/help-v3/owner/onboarding' }
            ]
          },
          {
            title: 'Gestão do dono',
            body: 'Gerenciar dados da academia, instrutores e acesso administrativo.',
            links: [
              { label: 'Gestão da academia', to: '/help-v3/owner/business-management' },
              { label: 'Instrutores', to: '/help-v3/owner/instructors' },
              { label: 'Acesso', to: '/help-v3/owner/access' }
            ]
          },
          {
            title: 'Operações e supervisão',
            body: 'Usar análises, ponto e salários, supervisão e ferramentas.',
            links: [
              { label: 'Análises de operações', to: '/help-v3/owner/operations-analytics' },
              { label: 'Ponto e salários', to: '/help-v3/owner/timesheets-salaries' },
              { label: 'Supervisão', to: '/help-v3/owner/oversight' },
              { label: 'Ferramentas', to: '/help-v3/owner/tools' }
            ]
          }
        ]
      },
      access: {
        badge: 'Dono',
        title: 'Gerenciar acesso e permissões',
        intro: 'Use Access quando quiser decidir quais membros adultos já aceitos podem entrar no lado administrativo da academia atual.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Conceder acesso administrativo da academia a membros adultos aceitos e elegíveis.',
          'Atualizar ou remover permission rows no nível da academia.',
          'Separar acesso administrativo da identidade de instrutor.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a superfície de permissions ou Access do lado do dono.',
          'Em menus estreitos, o botão pode aparecer de forma reduzida como `Access`.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Remover a permission row de uma academia não remove automaticamente o broader admin role dessa pessoa em outras academias.',
          'Essa superfície gerencia acesso administrativo da academia, e não identidade de instrutor.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, muda quais recursos administrativos essa pessoa consegue abrir na academia atual.',
          'Se a pessoa também precisa da identidade de instrutor, use Instructors separadamente.',
          'Se ela pertence a outras academias, o broader admin role nessas outras academias ainda pode continuar existindo.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Instrutores', to: '/help-v3/owner/instructors' },
          { label: 'Análises de operações', to: '/help-v3/owner/operations-analytics' }
        ]
      },
      onboarding: {
        badge: 'Dono',
        title: 'Concluir o onboarding da primeira academia',
        intro: 'Use este tópico quando quiser entender como o tutorial atual da primeira academia avança depois da criação da academia.',
        steps_title: 'Ordem dos marcos',
        steps_items: [
          'Criar a academia.',
          'Adicionar o primeiro instrutor ou decidir se o próprio dono será o instrutor principal.',
          'Criar o primeiro modelo de cartão.',
          'Emitir o primeiro cartão ativo.',
          'Criar a primeira aula agendada.',
          'Concluir a primeira reserva pelo lado admin.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Siga o dashboard guiado e as telas de onboarding em tela cheia.',
          'Use a seção destacada pelo app como próximo marco.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'O onboarding é guiado por marcos e usa um estado durável de usage history.',
          'Concluir o tutorial não exige um aluno pagante real nem prova que pagamentos online já foram configurados.',
          'Completar o onboarding não é a mesma coisa que estar pronto para cobrança ou recebimento.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois de cada marco, o app revela a próxima seção recomendada.',
          'Depois da conclusão do onboarding, o dashboard administrativo mais amplo é liberado e mais ferramentas podem aparecer conforme o acesso.',
          'O tutorial pode ser concluído com fluxos de teste do próprio dono ou da equipe, sem depender de um membro pagante real.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Instrutores', to: '/help-v3/owner/instructors' },
          { label: 'Acesso', to: '/help-v3/owner/access' }
        ]
      },
      create_academy: {
        badge: 'Dono',
        title: 'Criar uma nova academia',
        intro: 'Use o fluxo de criação de academia quando precisar criar a primeira academia ou adicionar outra academia.',
        steps_title: 'O que você pode fazer',
        steps_items: [
          'Criar uma nova academia.',
          'Entrar em modo de criação quando você tiver vários papéis ou várias academias.',
          'Seguir direto para o onboarding depois da criação.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use o fluxo de criação do Business e as telas relacionadas de bootstrap / gate.',
          'Se o app mostrar primeiro uma escolha de caminho, confirme que você quer criar uma academia nova, e não entrar em um contexto administrativo existente.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'A quantidade de academias que você pode criar ainda pode depender do plano atual ou de academy slots.',
          'Cancelar o modo de criação leva você de volta à entrada administrativa, sem concluir nenhuma configuração.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, a nova academia fica selecionada e o fluxo continua para o onboarding seguinte.',
          'Se você cancelar no meio, o app volta para a escolha de entrada admin / business.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Onboarding', to: '/help-v3/owner/onboarding' },
          { label: 'Gestão da academia', to: '/help-v3/owner/business-management' }
        ]
      },
      business_management: {
        badge: 'Dono',
        title: 'Gerenciar a configuração de negócio da academia',
        intro: 'Use Business Management quando precisar manter os dados da própria academia, mídia e configurações de nível dono.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Atualizar dados básicos da academia.',
          'Gerenciar logo, banner, gallery e outras mídias da academia.',
          'Executar configurações de nível dono e ações de ciclo de vida da academia.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as telas relacionadas a Business para editar, excluir, mídia e configuração do dono.',
          'Se o trabalho é ajustar a própria academia, e não uma tarefa administrativa do dia a dia, volte para esta área.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Esses são recursos de academy-management do dono, e não permissões normais da equipe.',
          'Atualizar os dados da academia não muda automaticamente acesso admin nem permissões de analytics.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, os dados da academia e as telas do dono relacionadas passam a mostrar o novo conteúdo.',
          'Se o próximo trabalho é decidir quem pode abrir o admin, vá para Access.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Acesso', to: '/help-v3/owner/access' },
          { label: 'Instrutores', to: '/help-v3/owner/instructors' }
        ]
      },
      instructors: {
        badge: 'Dono',
        title: 'Gerenciar instrutores',
        intro: 'Use Instructors quando precisar gerenciar o lado de identidade de ensino da equipe da academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Adicionar ou manter a identidade de instrutor na academia.',
          'Dar suporte à configuração de head instructor e equipe de ensino durante o onboarding e depois.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a superfície Business Instructors do lado do dono.',
          'Volte para cá quando a questão for identidade de ensino, e não acesso administrativo.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Identidade de instrutor não é o mesmo que acesso admin da academia.',
          'Identidade de instrutor também não é o mesmo que folha de pagamento ou dono da compensação.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando a configuração dá certo, a parte de identidade de ensino do onboarding e da equipe fica satisfeita.',
          'Se a pergunta for sobre quem pode gerenciar a academia, use Access em vez de Instructors.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Acesso', to: '/help-v3/owner/access' },
          { label: 'Onboarding', to: '/help-v3/owner/onboarding' }
        ]
      },
      operations_analytics: {
        badge: 'Dono',
        title: 'Usar operações e analytics',
        intro: 'Use Operations quando você precisar de métricas de nível dono, relatórios em tempo real, tendências ou relatórios mensais, em vez de trabalho administrativo comum.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar métricas em tempo real e métricas resumidas da academia.',
          'Abrir superfícies de insights, trends e monthly reporting.',
          'Usar visões operacionais do dono em vez do dashboard admin comum para leitura de alto nível.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use dashboards operacionais e superfícies de relatório do dono.',
          'Mantenha o contexto da academia selecionada do lado do dono ao interpretar analytics específicos da academia.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Operações e analytics são território de dono / operations, não de admin / staff comum.',
          'Analytics é separado de identidade de instrutor e de identidade de acesso.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando o acesso dá certo, carregam o contexto operacional e de relatório do dono para a academia selecionada.',
          'Se a superfície estiver ausente, o motivo pode ser papel ou entitlement, e não dados ruins da academia.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Pontos e salários', to: '/help-v3/owner/timesheets-salaries' },
          { label: 'Supervisão', to: '/help-v3/owner/oversight' }
        ]
      },
      timesheets_salaries: {
        badge: 'Dono',
        title: 'Gerenciar ponto e salários',
        intro: 'Use essas ferramentas operacionais do dono quando precisar acompanhar o tempo da equipe ou gerenciar dados ligados à remuneração.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Registrar entrada e saída da equipe ou revisar o tempo já registrado.',
          'Revisar e gerenciar dados ligados a salários ou remuneração.',
          'Separar questões de remuneração da identidade de instrutor ou do acesso administrativo.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use telas operacionais do dono como staff time e staff salaries.',
          'Se a questão for remuneração, e não identidade de ensino, volte para cá.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'As telas de remuneração não definem quem é instrutor.',
          'Elas também não substituem o gerenciamento de access ou permissions.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando a atualização dá certo, os dados de tempo ou remuneração do lado do dono mudam.',
          'Se o problema da equipe for na verdade distribuição de papel, volte para Instructors ou Access.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Análises de operações', to: '/help-v3/owner/operations-analytics' },
          { label: 'Acesso', to: '/help-v3/owner/access' }
        ]
      },
      oversight: {
        badge: 'Dono',
        title: 'Usar supervisão do dono',
        intro: 'Use Oversight quando precisar revisar as ferramentas exclusivas do dono para issue records, delete records e audit logs.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar issue records.',
          'Revisar delete records.',
          'Revisar audit logs na área exclusiva de supervisão do dono.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a área de oversight do lado operacional do dono, e não o dashboard administrativo comum.',
          'Abra essas ferramentas apenas quando a questão pertencer à revisão histórica ou operacional.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Essas telas são ferramentas de supervisão exclusivas do dono.',
          'Elas não fazem parte do fluxo comum de Cards do lado admin.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'A supervisão ajuda o dono a confirmar o que realmente aconteceu no histórico ou na operação.',
          'Se houver ação de seguimento, normalmente você volta para o fluxo correto de admin ou de aluno.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Análises de operações', to: '/help-v3/owner/operations-analytics' },
          { label: 'Ferramentas', to: '/help-v3/owner/tools' }
        ]
      },
      tools: {
        badge: 'Dono',
        title: 'Usar ferramentas do dono e recursos bloqueados',
        intro: 'Use este tópico quando precisar entender o que fazem as ferramentas opcionais do dono e onde esses fluxos aparecem quando o acesso está disponível.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Abrir a ferramenta do dono ou o recurso bloqueado que corresponde ao fluxo da academia de que você precisa.',
          'Usar ferramentas do dono em cima do fluxo principal da academia, e não no lugar dele.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a entrada correspondente do dashboard do dono ou de operações depois que o acesso existir.',
          'Mantenha a academia selecionada em mente antes de assumir que uma ferramenta está ausente.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'A ajuda deve explicar propósito e fluxo da ferramenta, e não mecânicas antigas de compra.',
          'Suposições antigas de bundle não devem ser tratadas como verdade do produto.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando o acesso relevante existir, a ferramenta abre sua própria superfície de fluxo.',
          'Se o acesso estiver faltando, a ausência costuma estar ligada a papel ou entitlement, e não a uma rota quebrada.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Operações e analytics', to: '/help-v3/owner/operations-analytics' },
          { label: 'Gestão da academia', to: '/help-v3/owner/business-management' }
        ]
      }
    },
    account: {
      home: {
        badge: 'Conta',
        title: 'Guia da conta e das configurações',
        intro: 'Use este guia quando precisar entrar, redefinir senha, atualizar perfil, ajustar preferências ou encerrar a sessão.',
        areas_title: 'Tópicos da conta',
        links: [
          {
            title: 'Acessar a conta',
            body: 'Entrar, criar conta ou recuperar o acesso pelo fluxo de redefinição de senha.',
            links: [
              { label: 'Entrar', to: '/help-v3/account/sign-in' },
              { label: 'Criar conta', to: '/help-v3/account/create-account' },
              { label: 'Redefinir senha', to: '/help-v3/account/reset-password' },
              { label: 'Mudar senha', to: '/help-v3/account/change-password' }
            ]
          },
          {
            title: 'Perfil e vínculos',
            body: 'Gerenciar dados da conta adulta e vínculos com contas infantis.',
            links: [
              { label: 'Perfil', to: '/help-v3/account/profile' },
              { label: 'Contas infantis', to: '/help-v3/account/child-accounts' }
            ]
          },
          {
            title: 'Configurações e saída',
            body: 'Ajustar privacidade, preferências, logout e exclusão da conta.',
            links: [
              { label: 'Privacidade e progressão', to: '/help-v3/account/privacy-progression' },
              { label: 'Preferências', to: '/help-v3/account/preferences' },
              { label: 'Excluir conta', to: '/help-v3/account/delete-account' },
              { label: 'Sair', to: '/help-v3/account/logout' }
            ]
          }
        ]
      },
      create_account: {
        badge: 'Conta',
        title: 'Criar conta',
        intro: 'Use a criação de conta quando você ainda não tem uma conta DojoMate e precisa começar o fluxo correto de aluno ou de administração.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Criar uma nova conta DojoMate.',
          'Escolher o caminho de papel que corresponde ao que você realmente precisa.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Comece pela tela de criação de conta no fluxo de entrada de autenticação.',
          'Decida primeiro se você vai entrar para treinar ou se vai criar e gerenciar uma academia.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Escolher o caminho de papel errado logo no começo pode confundir ainda mais qual guia você deve seguir depois.',
          'Se o email já pertence a uma conta existente, use entrar ou redefinir senha em vez de criar outra conta.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, o app segue para o fluxo correspondente de aluno ou admin.',
          'Se o cadastro falhar, o app deve usar o tratamento de autenticação normalizado atual em vez de mensagens antigas e vagas.',
          'O próximo passo útil costuma ser algo ligado ao papel, como entrar em uma academia ou começar a configuração da academia.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Entrar', to: '/help-v3/account/sign-in' },
          { label: 'Entrar em uma academia', to: '/help-v3/member/join-academy' }
        ]
      },
      reset_password: {
        badge: 'Conta',
        title: 'Redefinir senha',
        intro: 'Use a redefinição de senha quando você tiver esquecido a senha e precisar recuperar o acesso à conta.',
        steps_title: 'O que você pode fazer',
        steps_items: [
          'Solicitar o envio do email de redefinição de senha.',
          'Entrar no fluxo de recuperação de acesso quando o login normal não resolve.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Entre no fluxo de redefinição a partir da tela Sign In.',
          'Se o problema for senha esquecida, e não um simples erro de login, comece por aqui.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Este é o fluxo para recuperar uma senha perdida, não para mudar a senha depois de entrar.',
          'Se o endereço de email estiver errado, o email de redefinição não vai para a caixa correta.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, o sistema envia um email de redefinição.',
          'Se o email não chegar, verifique a caixa de entrada e tente novamente antes de criar outra conta.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Entrar', to: '/help-v3/account/sign-in' },
          { label: 'Criar conta', to: '/help-v3/account/create-account' }
        ]
      },
      change_password: {
        badge: 'Conta',
        title: 'Alterar senha',
        intro: 'Use este fluxo quando já estiver com sessão iniciada e quiser atualizar a senha da conta atual.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Alterar a senha da conta enquanto já está com login ativo.',
          'Melhorar a segurança sem sair do caminho atual da conta.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a tela de change password nas configurações da conta com sessão iniciada.',
          'Se o problema não for senha esquecida, e sim uma atualização deliberada, comece por aqui.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Esse fluxo é diferente da redefinição de senha.',
          'Normalmente ainda será necessária a senha atual para confirmar a mudança.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, a nova senha passa a valer para a conta.',
          'A sessão deste dispositivo pode continuar, enquanto outras sessões podem ser revogadas.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Redefinir senha', to: '/help-v3/account/reset-password' },
          { label: 'Sair', to: '/help-v3/account/logout' }
        ]
      },
      sign_in: {
        badge: 'Conta',
        title: 'Entrar',
        intro: 'Use Entrar quando a conta já existe e você quer iniciar uma sessão normal no DojoMate.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Entrar com credenciais de uma conta existente.',
          'Iniciar uma sessão normal de aluno, admin ou dono.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a tela Sign In como ponto principal de entrada.',
          'Se o problema for senha esquecida, e não uma falha comum de login, veja o tópico de redefinição de senha.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Os resultados atuais de autenticação seguem as regras normalizadas novas, e não os textos antigos de erro.',
          'Alguns problemas de integridade da conta são fluxos de suporte ou recuperação, e não apenas senha errada.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, o app inicia a sessão atual do usuário.',
          'Se a sessão não puder começar normalmente, o app pode levar você para recuperação ou suporte em vez de mostrar apenas um erro genérico de credenciais.',
          'As próximas requisições protegidas passam a depender do fluxo atual de refresh token, e não do caminho antigo de compatibilidade.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Redefinir senha', to: '/help-v3/account/reset-password' },
          { label: 'Criar conta', to: '/help-v3/account/create-account' }
        ]
      },
      preferences: {
        badge: 'Conta',
        title: 'Ajustar preferências',
        intro: 'Use Preferências quando precisar mudar idioma, moeda, tema ou outras configurações pessoais.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Ajustar idioma do app e preferências de exibição.',
          'Mudar configurações pessoais ligadas à experiência da conta.',
          'Ajustar sua experiência no app sem mexer nas configurações de business da academia.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as telas relacionadas a configurações da conta e preferências.',
          'Se o que você quer mudar é a experiência pessoal no app, e não os dados da academia, permaneça aqui.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Preferências não mudam as configurações de business da academia.',
          'Algumas mudanças aparecem na hora, e outras podem depender da próxima atualização para refletir totalmente.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, a apresentação do app ou a experiência da conta é atualizada com as novas escolhas.',
          'Se você quer encerrar a sessão atual, o próximo passo é usar Logout, e não procurar exclusão de conta aqui.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Privacidade e progressão', to: '/help-v3/account/privacy-progression' },
          { label: 'Sair', to: '/help-v3/account/logout' }
        ]
      },
      profile: {
        badge: 'Conta',
        title: 'Editar seu perfil',
        intro: 'Use Profile quando os detalhes da própria conta adulta precisarem ser revisados ou atualizados.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar detalhes do perfil ligados à conta adulta.',
          'Atualizar campos do perfil a partir do fluxo de conta com sessão iniciada.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as superfícies de profile user e edit-profile.',
          'Volte para cá quando o problema estiver nos detalhes de identidade da conta, e não na membership da academia.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Edições de perfil não substituem decisões de membership da academia.',
          'Relações com child accounts são um fluxo separado.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, o perfil da conta reflete os valores salvos mais recentes.',
          'Se o problema verdadeiro for uma relação de child account ou membership, mude para o tópico correto.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Contas infantis', to: '/help-v3/account/child-accounts' },
          { label: 'Privacidade e progressão', to: '/help-v3/account/privacy-progression' }
        ]
      },
      child_accounts: {
        badge: 'Conta',
        title: 'Gerenciar contas infantis',
        intro: 'Use Child Accounts quando precisar lidar com contas infantis vinculadas à conta adulta.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar as contas infantis ligadas à conta adulta atual.',
          'Entender a relação entre os dados da criança e a conta adulta.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as telas relacionadas a child account dentro do caminho de conta com sessão iniciada.',
          'Se a questão envolver responsável, criança ou relação de gerenciamento, volte para cá.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'A relação com contas infantis é diferente da edição comum do perfil adulto.',
          'Também é diferente do estado de aprovação de membros da academia.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, a conta mostra o estado mais recente dos vínculos infantis.',
          'Se o problema for na verdade membership da academia, volte para um tópico de membros.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Perfil', to: '/help-v3/account/profile' },
          { label: 'Entrar em uma academia', to: '/help-v3/member/join-academy' }
        ]
      },
      privacy_progression: {
        badge: 'Conta',
        title: 'Gerenciar privacidade e configurações de progressão',
        intro: 'Use este tópico quando a questão for visibilidade, participação em ranking, exposição do perfil ou escolhas de privacidade em nível de conta.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Revisar configurações de conta ligadas à privacidade.',
          'Controlar configurações de progressão ou visibilidade de perfil quando o app as expõe.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use as superfícies de settings privacy e progression dentro do caminho de conta com sessão iniciada.',
          'Volte para cá quando a questão for visibilidade, e não lógica de lista ou reserva.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Reserva anônima não é a mesma coisa que configurações de privacidade.',
          'Visibilidade de membros do lado da academia e privacidade da conta são ideias relacionadas, mas não idênticas.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, o app usa as configurações salvas mais recentes de privacidade ou progressão.',
          'Se o problema for especificamente anonimato na lista de reservas, use Booking em vez disso.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Reservas', to: '/help-v3/member/booking' },
          { label: 'Preferências', to: '/help-v3/account/preferences' }
        ]
      },
      delete_account: {
        badge: 'Conta',
        title: 'Excluir conta',
        intro: 'Use o fluxo de exclusão quando quiser apagar permanentemente toda a conta DojoMate, e não apenas sair de uma academia.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Iniciar o fluxo de exclusão permanente da conta inteira.',
          'Distinguir exclusão de conta de remoção de membership de uma academia específica.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a tela de privacidade da conta ou a tela relacionada à exclusão.',
          'Se seu objetivo for apenas encerrar a sessão atual, use Logout.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Excluir a conta inteira é diferente de sair de uma academia.',
          'Esta é uma ação permanente mais forte e não deve ser confundida com um logout comum.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Quando dá certo, o acesso à conta inteira é removido.',
          'Se você só quer remover a relação com uma academia específica, volte para os fluxos de membro ou da academia.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Sair', to: '/help-v3/account/logout' },
          { label: 'Privacidade e progressão', to: '/help-v3/account/privacy-progression' }
        ]
      },
      logout: {
        badge: 'Conta',
        title: 'Sair',
        intro: 'Use Logout quando quiser encerrar a sessão atual do dispositivo e sair do estado autenticado de forma limpa.',
        what_title: 'O que você pode fazer',
        what_items: [
          'Encerrar a sessão atual do app com login ativo.',
          'Preparar o dispositivo para outra conta ou para voltar depois.'
        ],
        where_title: 'Onde fazer isso',
        where_items: [
          'Use a área de configurações da conta com sessão iniciada.',
          'Escolha sair em vez de excluir a conta quando quiser apenas parar de usar a sessão atual.'
        ],
        limits_title: 'Limites importantes',
        limits_items: [
          'Logout encerra a sessão atual, mas não exclui a conta.',
          'Se a senha em si precisa mudar, use Change Password.'
        ],
        results_title: 'O que acontece depois',
        results_items: [
          'Depois do sucesso, o app limpa o estado atual de login neste dispositivo.',
          'Você pode voltar a entrar depois com a mesma conta ou com outra.',
          'Logout é o caminho seguro para encerrar sessão quando você não precisa dos efeitos mais fortes de mudar senha ou excluir a conta.'
        ],
        next_title: 'Próximo tópico',
        next_links: [
          { label: 'Entrar', to: '/help-v3/account/sign-in' },
          { label: 'Criar conta', to: '/help-v3/account/create-account' }
        ]
      }
    }
  },
  help_v2: {
    support: {
      heading: 'Precisa de mais ajuda?',
      default_description: 'Use o fórum de ajuda do DojoMate no Source Combatives para dúvidas, casos especiais e suporte de acompanhamento no app e nos fluxos web conectados.',
      default_button: 'Abrir o fórum de ajuda do DojoMate'
    },
    layout: {
      preview_badge: 'Ajuda v2',
      intro: 'Um guia orientado por tarefas para donos e administradores. A v1 continua ativa enquanto esta versão está sendo construída.',
      open_v1: 'Abrir Ajuda v1',
      search_placeholder: 'Buscar ajuda',
      search_no_results: 'Nenhum resultado encontrado',
      nav: {
        start_here: 'Comece aqui',
        owner_setup: 'Configuração do Dono',
        student: 'Aluno',
        account_profile: 'Conta e Perfil',
        business: 'Gestão',
        portal: 'Portal de Afiliados',
        schedule: 'Agenda',
        cards: 'Cartões',
        members: 'Membros',
        tools: 'Ferramentas',
        home: 'Página inicial da Ajuda v2',
        owner: 'Eu administro a academia',
        admin: 'Eu ajudo a administrar',
        student_home: 'Eu treino em uma academia',
        getting_started_owner: 'Primeiros passos para o dono',
        create_academy: 'Criar academia',
        academy_basics: 'Informações básicas da academia',
        academy_qr: 'QR da academia',
        delete_academy: 'Excluir academia',
        join_academy: 'Entrar em uma academia',
        memberships: 'Gerenciar assinaturas',
        booking: 'Reservas',
        system_alerts: 'Alertas do sistema',
        broadcast: 'Comunicados',
        attendance_records: 'Registros de presença',
        sign_in: 'Entrar',
        create_account: 'Criar conta',
        reset_password: 'Redefinir senha',
        account_troubleshooting: 'Problemas de conta',
        change_password: 'Alterar senha',
        language: 'Idioma',
        currency: 'Moeda',
        privacy: 'Privacidade',
        delete_account: 'Excluir conta',
        logout: 'Sair',
        edit_profile: 'Editar perfil',
        child_accounts: 'Contas de crianças',
        business_overview: 'Visão geral da gestão',
        compare_business_pages: 'Comparar páginas de gestão',
        choose_who_can_teach: 'Escolher quem pode ensinar',
        choose_who_can_manage: 'Escolher quem pode gerenciar',
        track_pay_and_performance: 'Acompanhar pagamento e desempenho',
        affiliate_portal: 'Portal de Afiliados',
        portal_register: 'Registro no portal',
        portal_members: 'Membros do portal',
        portal_ranks: 'Graduações do portal',
        portal_cards: 'Cartões do portal',
        portal_reports: 'Relatórios do portal',
        schedule_overview: 'Visão geral da agenda',
        create_a_lesson: 'Criar uma aula',
        edit_or_cancel_a_lesson: 'Editar ou cancelar uma aula',
        book_for_students: 'Reservar para alunos',
        cards_overview: 'Visão geral dos cartões',
        how_cards_work: 'Como os cartões funcionam',
        create_a_card_template: 'Criar um modelo de cartão',
        issue_cards: 'Emitir cartões',
        edit_templates: 'Editar modelos',
        delete_templates: 'Excluir modelos',
        delete_cards: 'Excluir cartões',
        card_records: 'Disputas',
        members_overview: 'Visão geral dos membros',
        add_a_member_directly: 'Adicionar um membro diretamente',
        enrollment_vs_applications: 'Cadastro direto vs solicitações',
        review_applications: 'Revisar solicitações',
        reject_or_ban_members: 'Recusar ou banir membros',
        tools_overview: 'Visão geral das ferramentas',
        activate_tools_and_premium: 'Revisar status das ferramentas',
        timetable: 'Horários',
        pause_cards: 'Pausar cartões'
      }
    },
    welcome: {
      badge: 'Prévia',
      title: 'Guia de Ajuda v2',
      intro: 'Esta versão está sendo reconstruída em torno da pessoa que usa o DojoMate, e não apenas da tela em que ela está.',
      who_title: 'Comece pela sua função',
      owner_title: 'Eu administro a academia',
      owner_body: 'Comece aqui se você é dono da academia e precisa de ajuda com configuração, equipe, cartões, agenda ou ferramentas.',
      owner_link: 'Abrir o caminho do dono',
      admin_title: 'Eu ajudo a administrar a academia',
      admin_body: 'Comece aqui se você é da equipe e ajuda com aulas, membros, cartões ou operações do dia a dia.',
      admin_link: 'Abrir o caminho do administrador',
      student_title: 'Eu treino em uma academia',
      student_body: 'Comece aqui se você é aluno, responsável ou membro da academia e precisa de ajuda com conta, reserva ou assinatura.',
      student_link: 'Abrir o caminho do aluno',
      jobs_title: 'Ou vá direto para uma tarefa',
      cards_title: 'Configurar cartões de assinatura',
      cards_body: 'Entenda como os cartões apoiam as reservas, depois crie modelos e emita cartões.',
      cards_link: 'Abrir visão geral dos cartões',
      members_title: 'Adicionar e gerenciar membros',
      members_body: 'Traga pessoas para a academia, revise solicitações e gerencie mudanças de status.',
      members_link: 'Abrir visão geral dos membros',
      tools_title: 'Usar ferramentas pagas',
      tools_body: 'Adicione agenda recorrente e ferramentas de pausa de cartões depois que o fluxo principal já estiver funcionando, e use a página de recursos para ativar o plano Premium quando precisar.',
      tools_link: 'Abrir visão geral das ferramentas',
      difference_title: 'Como a v2 é diferente',
      difference_body: 'A v2 é organizada em torno das pessoas e do que elas estão tentando concluir, então fica mais fácil decidir o que fazer em seguida.',
      difference_v1: 'Se você preferir o guia clássico com busca, abra a Ajuda v1',
      difference_start: 'Comece aqui'
    },
    owner_home: {
      badge: 'Dono',
      title: 'Eu administro a academia',
      intro: 'Este caminho é para donos de academia configurando a academia, montando a equipe e conduzindo as operações diárias.',
      start_title: 'Melhor lugar para começar',
      start_body: 'Se você está configurando uma academia nova, comece primeiro pelo caminho do dono. Ele segue a ordem mais útil para que o restante do app faça sentido.',
      start_primary: 'Primeiros passos para o dono',
      start_secondary: 'Criar academia',
      setup_title: 'Configuração da academia',
      setup_create_title: 'Criar a academia',
      setup_create_body: 'Comece pela academia em si antes de trazer membros ou montar aulas.',
      setup_review_title: 'Revisar informações básicas e QR',
      setup_review_body: 'Mantenha os dados da academia corretos e use entrada por QR quando quiser um onboarding mais rápido.',
      setup_lifecycle_title: 'Ciclo de vida da academia',
      setup_lifecycle_body: 'Use o guia de exclusão apenas quando a academia em si não deve mais continuar ativa.',
      jobs_title: 'Principais tarefas',
      jobs_team_title: 'Montar sua equipe',
      jobs_team_body: 'Defina quem ensina, quem pode gerenciar a academia e como as ferramentas de compensação entram nisso.',
      jobs_team_link: 'Abrir gestão',
      jobs_schedule_title: 'Conduzir aulas e reservas',
      jobs_schedule_body: 'Crie aulas, gerencie mudanças e ajude nas reservas quando necessário.',
      jobs_schedule_link: 'Abrir Schedule',
      jobs_cards_title: 'Configurar cartões e membros',
      jobs_cards_body: 'Traga pessoas para a academia, emita cartões e deixe as reservas descontarem aulas corretamente.',
      portal_title: 'Fluxos do portal',
      portal_body: 'Alguns fluxos acontecem no Source Combatives Affiliate Portal, e não nas telas do app DojoMate do dia a dia.',
      portal_link: 'Abrir guia do Portal de Afiliados',
      paid_title: 'Recursos pagos',
      paid_body: 'Horários, pausar cartões, acesso da equipe e análises são controlados por permissões. Use o guia da página de recursos se precisar ativar ferramentas ou iniciar o plano Premium.',
      paid_link: 'Ativar ferramentas e plano Premium'
    },
    owner_setup: {
      getting_started: {
        badge: 'Primeiros Passos',
        title: 'Configure sua academia na ordem certa',
        intro: 'Se você está começando do zero, esta página mostra a ordem mais simples para que o restante do app faça sentido.',
        order_title: 'Ordem recomendada',
        order_items: [
          'Crie sua academia.',
          'Traga membros para a academia.',
          'Crie modelos de cartões de assinatura.',
          'Emita cartões para membros ativos.',
          'Configure instrutores e acesso da equipe.',
          'Crie sua primeira aula.',
          'Adicione ferramentas pagas quando estiver pronto. O Portal de Afiliados inclui um teste gratuito do plano Premium por 90 dias com todas as ferramentas desbloqueadas.'
        ],
        why_title: 'Por que essa ordem ajuda',
        why_items: [
          'Os membros precisam existir antes que você possa emitir cartões para eles.',
          'Os cartões precisam existir antes que as reservas funcionem corretamente.',
          'Os instrutores devem estar prontos antes de você começar a criar aulas.',
          'Ferramentas pagas funcionam melhor depois que o fluxo principal da academia já está rodando.'
        ],
        start_title: 'Comece aqui se não tiver certeza',
        create_link: 'Criar Academia',
        members_link: 'Trazer Membros',
        cards_link: 'Configurar Cartões'
      },
      create: {
        badge: 'Dono',
        title: 'Crie sua academia',
        intro: 'Este é o primeiro passo do dono. Crie a academia antes de trazer membros, emitir cartões ou começar a montar aulas.',
        before_title: 'Antes de criar',
        before_items: [
          'Verifique se a academia já existe para não criar uma duplicata.',
          'Esteja pronto para escolher a moeda correta da academia desde o início.'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra o fluxo de criação da academia.',
          'Preencha os dados da academia com cuidado.',
          'Escolha a moeda correta.',
          'Envie o formulário para criar a academia.'
        ],
        next_title: 'Próximo passo',
        next_body: 'Depois que a academia existir, o próximo trabalho comum é revisar as informações básicas da academia e então trazer pessoas para a academia.',
        back_link: 'Voltar para o caminho do dono',
        next_link: 'Ir para Academy Basics'
      },
      basics: {
        badge: 'Dono',
        title: 'Atualize os dados básicos da academia',
        intro: 'Use esta página para manter o perfil da academia correto, para que membros e equipe vejam as informações certas.',
        use_title: 'Use esta página quando',
        use_items: [
          'os dados da academia precisam ser corrigidos ou atualizados',
          'as informações visíveis da academia mudaram',
          'você quer revisar como a academia se apresenta aos membros'
        ],
        know_title: 'O que saber',
        know_items: [
          'Donos devem manter os dados básicos da academia atualizados antes de ampliar membros e cartões.',
          'Se membros entram por mensagens da academia ou fluxos de onboarding, dados corretos da academia fazem diferença.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para Criar Academia',
        next_link: 'Ir para Academy QR'
      },
      qr: {
        badge: 'Dono',
        title: 'Compartilhe o QR da academia',
        intro: 'Use o QR da academia quando quiser que as pessoas entrem mais rápido sem pesquisar manualmente pela academia.',
        use_title: 'Quando isso ajuda mais',
        use_items: [
          'onboarding presencial na academia',
          'eventos, aulas introdutórias ou dias de matrícula movimentados',
          'situações em que várias pessoas precisam entrar rapidamente'
        ],
        know_title: 'O que saber',
        know_items: [
          'O caminho por QR normalmente é mais rápido do que pedir que as pessoas pesquisem manualmente.',
          'Ele é especialmente útil quando você quer reduzir erros de entrada durante o onboarding.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para Academy Basics',
        next_link: 'Trazer Membros'
      },
      delete: {
        badge: 'Dono',
        title: 'Exclua uma academia com cuidado',
        intro: 'Este é um passo do ciclo de vida da academia, não uma tarefa diária normal. Use apenas quando a academia realmente deve ser removida.',
        before_title: 'Antes de fazer isso',
        before_items: [
          'Revise primeiro as pré-condições.',
          'Tenha certeza de que entende o que acontece com os membros atuais.',
          'Não trate a exclusão da academia como atalho para uma limpeza comum.'
        ],
        meaning_title: 'O que isso significa',
        meaning_body: 'Excluir uma academia é uma ação séria do dono. Só deve acontecer quando a própria academia não deve mais permanecer ativa.',
        help_title: 'Precisa de ajuda antes?',
        help_body: 'Se você não tiver certeza de que excluir é a decisão correta, pergunte no fórum de ajuda do DojoMate antes de dar o passo final.',
        help_link: 'Abrir o fórum de ajuda do DojoMate',
        back_link: 'Voltar para o caminho do dono'
      }
    },
    admin_home: {
      badge: 'Administrador',
      title: 'Eu ajudo a administrar a academia',
      intro: 'Este caminho é para membros da equipe que ajudam nas operações diárias depois que o dono já configurou a academia.',
      jobs_title: 'Tarefas administrativas mais comuns',
      schedule_title: 'Cuidar da agenda',
      schedule_body: 'Crie aulas, edite mudanças e ajude alunos ou responsáveis a reservar quando necessário.',
      schedule_link: 'Abrir Schedule',
      members_title: 'Gerenciar membros e cartões',
      members_body: 'Revise solicitações, cadastre membros diretamente e emita cartões.',
      delegated_title: 'Usar acesso delegado',
      delegated_body: 'Se o dono ativou acesso de administrador para você, suas tarefas diárias podem incluir agenda, membros, cartões e às vezes ferramentas.',
      delegated_link: 'Revisar acesso da equipe',
      know_title: 'O que saber',
      know_items: [
        'A maioria dos temas de administrador se sobrepõe ao fluxo do dono, então você não precisa de uma árvore de wiki totalmente separada.',
        'Se algo estiver faltando na sua conta, talvez o dono precise conceder acesso ou ativar a ferramenta necessária primeiro.'
      ],
      compare_link: 'Comparar páginas do Business',
      tools_link: 'Revisar status das ferramentas'
    },
    business: {
      overview: {
        badge: 'Business',
        paid_badge: 'Pago',
        title: 'Cuidar do lado operacional da academia',
        intro: 'A área Business ajuda você a montar sua equipe, decidir quem pode gerenciar a academia e revisar ferramentas de pagamento e desempenho.',
        start_title: 'Comece pela tarefa que você precisa fazer',
        cards: [
          {
            title: 'Escolher quem pode ensinar',
            body: 'Use Instrutores para decidir quais pessoas podem ser atribuídas às aulas.',
            cta: 'Abrir o guia de Instrutores',
            link: '/help-v2/business/instructors'
          },
          {
            title: 'Escolher quem pode gerenciar a academia',
            body: 'Use Acesso da equipe para conceder ou atualizar acesso administrativo.',
            cta: 'Abrir o guia de Acesso da equipe',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: 'Acompanhar pagamento, tempo e desempenho',
            body: 'Use Analytics para compensação, relatórios, timesheets e ferramentas relacionadas à folha de pagamento.',
            cta: 'Abrir o guia de Analytics',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        know_title: 'O que saber',
        know_items: [
          'Estas páginas do Business apoiam trabalhos diferentes, então ajuda escolher a página que combina com o que você quer fazer.',
          'Se você está configurando uma academia nova, comece decidindo primeiro quem ensina.',
          'Se não souber por onde começar, o guia de Instrutores é o melhor primeiro passo para configurar a equipe, seguido por Acesso da equipe e depois Analytics.'
        ],
        compare_link: 'Comparar páginas de gestão',
        next_title: 'Próximo passo',
        next_body: 'Comece por Escolher quem pode ensinar se você estiver montando sua equipe de ensino.',
        next_link: 'Ir para Escolher quem pode ensinar'
      },
      compare: {
        badge: 'Business',
        paid_badge: 'Pago',
        title: 'Instrutores, Acesso da equipe e Analytics',
        intro: 'Estas três páginas do Business apoiam trabalhos diferentes. Use esta página quando não tiver certeza de qual delas combina com o que você precisa fazer.',
        pick_title: 'Escolha a página pelo trabalho',
        cards: [
          {
            title: 'Instrutores',
            body: 'Use esta página quando precisar decidir quem pode dar aulas.',
            items: [
              'adicionar alguém à equipe',
              'ativar o status de instructor',
              'preparar sua equipe de ensino para a agenda'
            ],
            cta: 'Abrir Instrutores',
            link: '/help-v2/business/instructors'
          },
          {
            title: 'Acesso da equipe',
            body: 'Use esta página quando alguém deve ajudar a gerenciar a academia.',
            items: [
              'promover um membro a administrador',
              'revisar áreas de acesso',
              'remover o acesso administrativo depois'
            ],
            cta: 'Abrir Acesso da equipe',
            link: '/help-v2/business/staff-access',
            paid: true
          },
          {
            title: 'Analytics',
            body: 'Use esta página quando quiser números do negócio, configurações de pagamento ou registros de tempo.',
            items: [
              'revisar relatórios',
              'definir compensação',
              'verificar timesheets e ferramentas relacionadas à folha'
            ],
            cta: 'Abrir Analytics',
            link: '/help-v2/business/analytics',
            paid: true
          }
        ],
        rules_title: 'Regras rápidas',
        rules_items: [
          'Alterar compensação no Analytics não transforma alguém em instructor.',
          'Dar acesso administrativo a alguém também não transforma essa pessoa em instructor.',
          'Se alguém deve tanto ensinar quanto gerenciar, talvez você precise configurá-lo em mais de uma página do Business.'
        ],
        start_title: 'Comece aqui se ainda estiver decidindo',
        start_body: 'Se a pergunta é “Essa pessoa pode ensinar?”, comece por Instrutores. Se a pergunta é “Essa pessoa pode gerenciar a academia?”, vá para Acesso da equipe. Se a pergunta é “Onde vejo pagamento ou relatórios?”, vá para Analytics.',
        instructors_link: 'Instrutores',
        staff_access_link: 'Acesso da equipe',
        analytics_link: 'Analytics'
      },
      instructors: {
        badge: 'Business',
        title: 'Escolher quem pode ensinar',
        intro: 'Use Business → Instrutores para decidir quais pessoas podem ser atribuídas às aulas.',
        before_title: 'Antes de começar',
        before_items: [
          'Você precisa de pelo menos um instructor antes de poder criar aulas.',
          'A maioria dos donos se adiciona primeiro se também for ensinar.',
          'A pessoa já deve estar disponível como membro da sua academia.'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra Business → Instrutores.',
          'Toque em Choose Member.',
          'Selecione a pessoa que deseja adicionar.',
          'Toque em Add to Staff.',
          'Ative o toggle de instructor se essa pessoa deve dar aulas.'
        ],
        know_title: 'O que saber',
        know_items: [
          'As pessoas selecionadas aparecem na lista de equipe depois que você as adiciona.',
          'Se o toggle de instructor ficar desligado, a pessoa pode permanecer disponível apenas como assistente de instructor.',
          'Alterar compensação no Analytics não transforma alguém em instructor.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Se alguém também deve poder gerenciar a academia, isso é uma etapa separada. Acesso de ensino e acesso administrativo não são a mesma coisa.',
        compare_link: 'Comparar páginas do Business',
        next_title: 'Próximo passo',
        next_body: 'Depois que sua equipe de ensino estiver definida, a próxima tarefa comum é decidir quem também deve ter acesso administrativo.',
        back_link: 'Voltar para a visão geral do Business',
        next_link: 'Ir para Acesso da equipe'
      },
      staff_access: {
        badge: 'Business',
        paid_badge: 'Ferramenta paga',
        title: 'Escolher quem pode gerenciar a academia',
        intro: 'Use Business → Permissões para conceder ou atualizar acesso administrativo da sua equipe.',
        use_title: 'Use esta página quando',
        use_items: [
          'alguém deve ajudar a gerenciar aulas, membros, cartões ou trabalho de timetable',
          'você precisa promover um membro a administrador',
          'você quer revisar ou remover acesso administrativo'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra Business → Permissões.',
          'Encontre a pessoa que você quer atualizar.',
          'Se ela aparecer como Member, toque na linha e pressione Confirm para torná-la administradora.',
          'Toque no administrador novamente para revisar os valores de acesso.',
          'Escolha as configurações de acesso desejadas e depois pressione Confirm.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Os dois badges são Member e Admin.',
          'Permissões controla o acesso administrativo. Não decide quem pode ensinar.',
          'As áreas atuais de acesso são Schedule, Membros, Cards e Timetable.',
          'Este recurso é controlado por entitlement. Se a ferramenta estiver inativa, as permissões delegadas à equipe não entrarão em vigor.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Dar responsabilidade de ensino a alguém e dar acesso administrativo são etapas separadas. Use Instrutores para funções de ensino e Permissões para funções administrativas.',
        compare_link: 'Comparar páginas do Business',
        remove_title: 'Remover acesso administrativo',
        remove_body: 'Se alguém não deve mais gerenciar a academia, use Remove Admin para devolvê-lo ao status Member.',
        next_title: 'Próximo passo',
        next_body: 'Depois que as funções da equipe estiverem definidas, a próxima tarefa comum é revisar ferramentas de compensação e relatórios no Analytics.',
        back_link: 'Voltar para Instrutores',
        activate_link: 'Revisar status das ferramentas',
        compare_pages_link: 'Comparar páginas',
        next_link: 'Ir para Analytics'
      },
      analytics: {
        badge: 'Business',
        paid_badge: 'Ferramenta paga',
        title: 'Acompanhar pagamento, tempo e desempenho',
        intro: 'Use Business → Analytics para compensação, relatórios, timesheets e ferramentas relacionadas à folha de pagamento.',
        use_title: 'Use esta página quando',
        use_items: [
          'você quiser revisar métricas e relatórios da academia',
          'você precisar inserir ou atualizar detalhes de compensação',
          'você precisar revisar timesheets ou atividade de punch-card da equipe'
        ],
        covers_title: 'O que o Analytics cobre',
        cards: [
          {
            title: 'Relatórios',
            body: 'Revise números em tempo real, resumos semanais, relatórios financeiros e relatórios mensais relacionados à presença.'
          },
          {
            title: 'Compensação',
            body: 'Defina salário, valor por hora e detalhes de pagamento de aulas particulares para que os custos possam ser acompanhados com mais precisão.'
          },
          {
            title: 'Ferramentas de tempo e folha',
            body: 'Revise punch cards, horas de escritório e fluxos de aprovação para registros da equipe baseados em tempo.'
          }
        ],
        know_title: 'O que saber',
        know_items: [
          'Alterar compensação no Analytics não transforma alguém em instructor.',
          'Se alguém deve ensinar, adicione esse papel em Instrutores.',
          'Se alguém deve gerenciar a academia, conceda esse acesso em Permissões.',
          'Algumas telas do Analytics podem ficar totalmente bloqueadas, enquanto outras continuam visíveis e mostram avisos de upgrade.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Analytics não é o lugar para decidir funções de ensino ou de administração. É o lugar para revisar métricas do negócio e gerenciar ferramentas relacionadas a pagamento.',
        compare_link: 'Comparar páginas do Business',
        next_title: 'Próximo passo',
        next_body: 'Se você ainda está montando sua equipe, termine primeiro as etapas de função de ensino e função administrativa. Se a equipe já estiver pronta, a próxima tarefa comum é criar aulas e deixar as reservas fazerem o trabalho diário.',
        activate_link: 'Revisar status das ferramentas',
        instructors_link: 'Instrutores',
        staff_access_link: 'Acesso da equipe',
        next_link: 'Ir para Agenda'
      }
    },
    schedule: {
      overview: {
        badge: 'Agenda',
        title: 'Planejar, conduzir e gerenciar aulas',
        intro: 'Use a área de agenda para criar aulas, ajustar detalhes das aulas e ajudar alunos a reservar quando necessário.',
        start_title: 'Comece pela tarefa que você precisa fazer',
        cards: [
          {
            title: 'Criar uma aula',
            body: 'Defina o horário da aula, os instructors, os cartões permitidos e as regras de reserva.',
            cta: 'Abrir o guia de Create Lesson',
            link: '/help-v2/schedule/create-lesson'
          },
          {
            title: 'Editar, cancelar ou excluir uma aula',
            body: 'Atualize os detalhes da aula ou faça com que ela deixe de poder ser reservada.',
            cta: 'Abrir o guia de Manage Lesson',
            link: '/help-v2/schedule/manage-lesson'
          },
          {
            title: 'Reservar para alunos',
            body: 'Intervenha quando um aluno ou responsável não conseguir concluir a reserva sozinho.',
            cta: 'Abrir o guia de Booking',
            link: '/help-v2/schedule/book-for-students'
          }
        ],
        know_title: 'O que saber',
        know_items: [
          'Criar aulas costuma ser a primeira tarefa de agenda.',
          'Editar, cancelar e excluir têm regras de tempo, então essas tarefas precisam de seus próprios guias.',
          'A reserva administrativa funciona melhor como apoio quando alunos ou responsáveis não conseguem concluir a reserva sozinhos.'
        ],
        before_title: 'Antes de começar',
        before_body: 'Garanta que sua equipe de ensino já esteja configurada para que os instructors corretos estejam disponíveis quando você criar aulas.',
        before_link: 'Revisar Instrutores'
      },
      create: {
        badge: 'Agenda',
        title: 'Criar uma aula',
        intro: 'Use a agenda para adicionar uma aula no dia em que você quer que os alunos possam reservar.',
        before_title: 'Antes de começar',
        before_items: [
          'Você precisa ter pelo menos um instructor selecionado antes de criar uma aula.',
          'Escolha a data correta primeiro, porque a agenda abre em hoje por padrão.',
          'Decida quais cartões de assinatura devem poder reservar essa aula.'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra Schedule e vá para a data desejada.',
          'Toque em Create Lesson.',
          'Digite o nome da aula, a data e o horário de início/fim.',
          'Escolha o tipo de aula e os cartões de assinatura permitidos.',
          'Selecione pelo menos um instructor e depois adicione um assistant instructor se necessário.',
          'Defina regras de reserva como capacidade, capacidade mínima e horário limite de reserva.',
          'Toque em Create Lesson.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Os cartões usados na reserva precisam combinar com o tipo de aula, como grupo ou particular.',
          'Se você agenda aulas sobrepostas, a sala passa a ser importante.',
          'Administradores conseguem reservar além dos limites normais com mais facilidade do que alunos, mas os alunos continuam seguindo regras de corte e capacidade.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Um corte de reserva muito curto pode gerar confusão para os alunos quando uma aula é cancelada tarde. Se você quiser uma comunicação mais suave, use uma janela de corte maior.',
        next_title: 'Próximo passo',
        next_body: 'Depois que a aula existir, as próximas tarefas mais comuns são ajustar os detalhes da aula ou ajudar alunos a entrarem nela.',
        manage_link: 'Editar ou cancelar uma aula',
        booking_link: 'Reservar para alunos'
      },
      manage: {
        badge: 'Schedule',
        title: 'Editar, cancelar ou excluir uma aula',
        intro: 'Use a tela de detalhes da aula para atualizar informações ou fazer a aula deixar de ser reservável.',
        open_title: 'Como abrir a aula',
        open_items: [
          'Abra Schedule.',
          'Selecione a data correta.',
          'Toque na própria aula, não no botão de reserva.'
        ],
        actions_title: 'O que cada ação faz',
        actions_items: [
          'Edit: atualiza os detalhes da aula e salva as mudanças.',
          'Cancel: cancela a reserva dos membros atuais e impede novas reservas.',
          'Delete: remove a aula completamente depois que ela já foi cancelada.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Você não pode editar uma aula depois do horário limite de reserva.',
          'Você não pode cancelar ou excluir uma aula que já começou.',
          'Se uma aula foi criada por engano, cancele primeiro e depois exclua.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'As pessoas frequentemente entram no fluxo de reserva quando na verdade precisam da tela de detalhes da aula. Se você quer editar ou cancelar a aula, abra o cartão da aula em si.',
        next_title: 'Próximo passo',
        next_body: 'Se a aula continuar ativa, a próxima tarefa comum é ajudar alunos a reservar nela.',
        back_link: 'Voltar para Create Lesson',
        next_link: 'Ir para Booking'
      },
      booking: {
        badge: 'Schedule',
        title: 'Reservar para alunos quando necessário',
        intro: 'O ideal é que alunos ou responsáveis façam a própria reserva, mas administradores podem intervir quando alguém esqueceu, perdeu o corte ou precisa de ajuda.',
        steps_title: 'Passos',
        steps_items: [
          'Abra Schedule e escolha a data da aula.',
          'Abra a aula e depois vá para Booking.',
          'Toque em Adicionar membros.',
          'Escolha o membro que você quer reservar.',
          'Selecione um dos cartões ativos permitidos dessa pessoa.',
          'Pressione Confirm.'
        ],
        unbook_title: 'Para cancelar a reserva de um aluno',
        unbook_items: [
          'Abra a lista de presença da aula.',
          'Toque no membro reservado.',
          'Toque no cartão azul de reservado até ele ficar cinza.',
          'Pressione Confirm.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Administradores geralmente conseguem reservar com mais liberdade do que alunos, especialmente em torno de regras de corte ou capacidade.',
          'O membro ainda precisa ter um cartão ativo permitido para aquela aula.',
          'Aulas concluídas não podem ser reservadas nem ter reserva cancelada.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Se o cartão correto não aparecer, a aula pode estar limitada a tipos de cartão diferentes dos que o membro tem ativos no momento.',
        next_title: 'Próximo passo',
        next_body: 'Se as regras de reserva estão causando problemas, revise a configuração da aula e ajuste a aula em vez de ficar sobrescrevendo repetidamente.',
        create_link: 'Revisar Create Lesson',
        manage_link: 'Revisar Manage Lesson'
      }
    },
    cards: {
      overview: {
        badge: 'Cartões',
        title: 'Usar cartões para apoiar as reservas',
        intro: 'O fluxo principal de cartões é simples: criar o cartão, emiti-lo e depois deixar que as reservas descontem as aulas automaticamente.',
        start_title: 'Comece pela tarefa que você precisa fazer',
        cards: [
          {
            title: 'Entender o fluxo de reservas',
            body: 'Aprenda como os cartões entram na reserva, no desconto de aulas e nos relatórios.',
            cta: 'Abrir o guia do fluxo de reservas',
            link: '/help-v2/cards/how-booking-works'
          },
          {
            title: 'Criar um modelo de cartão',
            body: 'Defina nome do cartão, valor, quantidade de sessões, validade e tipo de aula.',
            cta: 'Abrir o guia de Create Template',
            link: '/help-v2/cards/create-template'
          },
          {
            title: 'Emitir um cartão para um membro',
            body: 'Atribua um cartão de assinatura ativo usando um dos seus modelos.',
            cta: 'Abrir o guia de emissão de cartões',
            link: '/help-v2/cards/issue-cards'
          }
        ],
        know_title: 'O que saber',
        know_items: [
          'Os modelos vêm primeiro. Você não pode emitir um cartão até que o modelo já exista.',
          'Os cartões existem principalmente para apoiar reservas e o desconto automático de aulas.',
          'Quando um cartão for totalmente usado ou expirar, exclua o cartão ativo antes de emitir o próximo.',
          'Para exceções ocasionais, você pode ajustar um cartão ativo manualmente. O uso mais comum é estender o prazo de validade, especialmente se você não estiver usando pausa de cartões.'
        ],
        support_title: 'Fluxos de apoio',
        support_templates_title: 'Editar ou aposentar modelos',
        support_templates_body: 'Use essas páginas quando um modelo precisar de correção ou não deva mais ficar disponível.',
        edit_templates_link: 'Edit Templates',
        delete_templates_link: 'Delete Templates',
        support_cleanup_title: 'Limpar cartões finalizados',
        support_cleanup_body: 'Exclua ou cancele cartões ativos quando estiverem totalmente usados, expirados ou sendo substituídos.',
        delete_cards_link: 'Excluir cartões',
        support_records_title: 'Revisar histórico de cartões',
        support_records_body: 'Use records quando precisar de histórico, revisão de status ou acompanhamento de estados incomuns de cartões.',
        records_link: 'Registros de cartões'
      },
      flow: {
        badge: 'Cartões',
        title: 'Como os cartões funcionam com reservas',
        intro: 'Cartões de assinatura servem principalmente para reservar aulas. Os alunos reservam, as aulas são descontadas automaticamente e o sistema calcula com base na atividade real de reservas.',
        normal_title: 'Fluxo normal',
        normal_items: [
          'Criar um modelo de cartão.',
          'Emitir o cartão para um membro.',
          'O membro reserva aulas usando esse cartão.',
          'As aulas são descontadas por meio das aulas reservadas.',
          'Quando o cartão chegar a 0 aulas ou o prazo de validade acabar, exclua o cartão ativo.',
          'Emita um novo cartão quando o membro renovar.'
        ],
        why_title: 'Por que isso importa',
        why_items: [
          'Os cartões devem apoiar a reserva de aulas de forma clara e previsível.',
          'Somente aulas descontadas por meio de reservas contam para os relatórios financeiros do Analytics.',
          'Um membro não pode ter dois cartões ativos do mesmo modelo ao mesmo tempo.'
        ],
        next_title: 'Próximo passo',
        create_link: 'Criar um modelo de cartão',
        issue_link: 'Emitir cartões'
      },
      create_template: {
        badge: 'Cartões',
        title: 'Criar um modelo de cartão de assinatura',
        intro: 'Use Cartões → Criar modelo de cartão para montar os tipos de cartão que a sua academia vai emitir.',
        before_title: 'Antes de começar',
        before_items: [
          'Decida se este cartão é para aulas em grupo ou aulas particulares.',
          'Decida quantas aulas o cartão deve incluir.',
          'Se você quiser um cartão de assinatura ilimitado, planeje primeiro o período. Cartões ilimitados ainda usam um prazo de validade.',
          'Use a mesma lógica de mensalidade e moeda que sua academia já utiliza.'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra Cartões → Criar modelo de cartão.',
          'Digite um nome de cartão que membros e administradores reconheçam facilmente.',
          'Digite o valor e uma descrição opcional.',
          'Defina o total de sessões e os dias de validade.',
          'Para um cartão ilimitado, salve Total Sessions como -1, não 0.',
          'Escolha se o cartão é para aulas Group ou Private.',
          'Salve o modelo.'
        ],
        know_title: 'O que saber',
        know_items: [
          'O tipo de aula controla quais aulas o cartão pode reservar.',
          'Um cartão salvo com Total Sessions = -1 permite reservas ilimitadas durante seu período ativo.',
          'Aulas Group e Private geralmente têm valores por aula diferentes, e o pagamento do instructor também pode ser diferente.',
          'Os nomes dos cartões devem permanecer claros e estáveis, porque as pessoas verão esses nomes depois durante reservas e atribuição de cartões.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Se o cartão não aparecer durante a reserva, verifique se o tipo de cartão corresponde ao tipo de aula. Isso é intencional, para que cartões Group não sejam usados em aulas Private por engano, e cartões Private não sejam usados em aulas Group por engano.',
        next_title: 'Próximo passo',
        next_body: 'Depois que o modelo existir, a próxima tarefa comum é emitir esse cartão para um ou mais membros.',
        back_link: 'Voltar para a visão geral de cartões',
        next_link: 'Ir para emitir cartões'
      },
      issue: {
        badge: 'Cartões',
        title: 'Emitir um cartão de assinatura',
        intro: 'Use Cartões → Emitir cartões para dar um cartão ativo a um ou mais membros.',
        steps_title: 'Passos',
        steps_items: [
          'Abra Cartões → Emitir cartões.',
          'Escolha o modelo de cartão que você quer emitir.',
          'Escolha um ou mais membros.',
          'Revise os membros selecionados.',
          'Pressione Confirm para emitir os cartões.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Membros recém-aceitos podem aparecer perto do topo para facilitar a emissão.',
          'Membros que já têm um cartão ativo desse modelo aparecem de forma diferente para que você identifique duplicidades.',
          'Um membro não pode ter dois cartões ativos do mesmo modelo ao mesmo tempo.'
        ],
        mistake_title: 'Erro comum',
        mistake_body: 'Se o membro estiver renovando o mesmo cartão, exclua primeiro o cartão ativo antigo e depois emita o novo.',
        next_title: 'Próximo passo',
        next_body: 'Depois que um cartão é emitido, o próximo passo normal é usar esse cartão para reservar aulas.',
        back_link: 'Voltar para Templates',
        next_link: 'Como os cartões funcionam'
      },
      edit_template: {
        badge: 'Cartões',
        title: 'Editar um modelo de cartão',
        intro: 'Use isso quando um modelo já existe e você precisa atualizar suas configurações para uso futuro.',
        use_title: 'Use esta página quando',
        use_items: [
          'uma configuração do modelo precisa ser corrigida',
          'o valor, a quantidade de sessões, a validade ou o tipo de aula precisam mudar',
          'você quer ajustar o comportamento de futuras emissões sem ainda criar um novo modelo'
        ],
        know_title: 'O que saber',
        know_items: [
          'O nome do modelo fica travado depois da criação.',
          'As mudanças devem ser salvas com cuidado porque afetam o comportamento futuro do modelo.',
          'Se a mudança for grande o bastante para representar um produto de assinatura diferente, pode ser mais limpo criar um novo modelo.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para criar modelo',
        next_link: 'Emitir cartões'
      },
      delete_template: {
        badge: 'Cartões',
        title: 'Excluir um modelo de cartão',
        intro: 'Use isso quando um modelo não deve mais existir e já não está ligado a cartões ativos.',
        before_title: 'Antes de excluir',
        before_items: [
          'Verifique se o modelo ainda está ligado a cartões ativos.',
          'Se cartões ativos ainda dependem dele, a limpeza precisa acontecer primeiro.'
        ],
        know_title: 'O que saber',
        know_body: 'A exclusão de modelo é um fluxo de limpeza. Deve ser usada quando uma oferta de assinatura foi realmente aposentada, e não apenas porque um membro está renovando.',
        next_title: 'Próximo passo',
        back_link: 'Voltar para modelos',
        next_link: 'Visão geral de cartões'
      },
      delete_card: {
        badge: 'Cartões',
        title: 'Excluir ou cancelar um cartão ativo',
        intro: 'Use isso quando um cartão ativo chegou ao fim da sua vida útil ou não deve mais permanecer ativo para aquele membro.',
        use_title: 'Uso mais comum',
        use_items: [
          'o cartão expirou ou foi totalmente usado',
          'o membro está renovando e precisa de um novo cartão ativo',
          'o cartão deve ser cancelado e registrado corretamente antes de seguir em frente'
        ],
        know_title: 'O que saber',
        know_items: [
          'Cartões expirados normalmente são excluídos como caminho padrão de limpeza.',
          'Um membro não pode ter dois cartões ativos do mesmo modelo ao mesmo tempo.',
          'Se você cancelar um cartão, forneça o motivo exigido e deixe o histórico do cartão continuar visível.'
        ],
        next_title: 'Próximo passo',
        next_body: 'Depois da limpeza, emita o próximo cartão apenas se o membro realmente for continuar com uma nova assinatura ativa.',
        back_link: 'Voltar para emitir cartões',
        next_link: 'Visão geral de cartões'
      },
      disputes: {
        badge: 'Cartões',
        title: 'Revisar registros de cartões',
        intro: 'Use os registros de cartões quando precisar de histórico, visibilidade de status ou acompanhamento de estados incomuns de cartões.',
        review_title: 'O que você pode revisar',
        review_items: [
          'cartões atuais',
          'cartões emitidos',
          'cartões cancelados',
          'estados de cartões ligados a dívida'
        ],
        when_title: 'Quando isso mais ajuda',
        when_items: [
          'você precisa entender o que aconteceu com um cartão específico',
          'você está verificando se um cartão foi cancelado, quitado ou resolvido',
          'você está acompanhando uma dívida ou divergência de registro'
        ],
        know_title: 'O que saber',
        know_body: 'Os registros de cartões servem principalmente para revisão e auditoria. O fluxo diário normal de cartões continua sendo: criar o modelo, emitir o cartão, reservar aulas e depois limpar o cartão quando ele termina.'
      }
    },
    members: {
      overview: {
        badge: 'Membros',
        title: 'Trazer pessoas para a academia e gerenciar o status de membros',
        intro: 'Use a área de membros para o lado humano do sistema: adicionar membros, revisar solicitações e gerenciar status aceito, rejeitado ou banido.',
        start_title: 'Comece pela tarefa que você precisa fazer',
        cards: [
          {
            title: 'Adicionar um membro diretamente',
            body: 'Use quick enrollment quando quiser registrar alguém diretamente em vez de esperar o fluxo normal de solicitação.',
            cta: 'Abrir cadastro rápido',
            link: '/help-v2/members/quick-enrollment'
          },
          {
            title: 'Revisar solicitações da academia',
            body: 'Aceite ou recuse pessoas que se candidataram pelo Join Academy.',
            cta: 'Abrir solicitações da academia',
            link: '/help-v2/members/applications'
          },
          {
            title: 'Recusar ou banir alguém',
            body: 'Gerencie mudanças de status quando um membro não deve mais permanecer ativo na academia.',
            cta: 'Abrir recusar ou banir membros',
            link: '/help-v2/members/reject-or-ban'
          }
        ],
        know_title: 'O que saber',
        know_items: [
          'Cadastro rápido e solicitações da academia são caminhos de entrada diferentes para a academia.',
          'Leva tempo para colocar uma academia inteira para dentro, então a abordagem de longo prazo mais fácil costuma ser deixar que os membros criem suas próprias contas e adicionem sua academia por conta própria.',
          'Depois que os membros estão ativos, o próximo passo comum é emitir cartões de assinatura no DojoMate.',
          'Contas infantis podem exigir etapas extras de revisão, especialmente quando uma conta de responsável está envolvida.'
        ],
        compare_title: 'Não tem certeza de qual caminho escolher?',
        compare_body: 'Se você está decidindo entre criar a conta por conta própria ou deixar o membro se candidatar sozinho, use primeiro a página de comparação.',
        compare_link: 'Comparar os dois fluxos de membros'
      },
      quick: {
        badge: 'Membros',
        title: 'Adicionar um membro diretamente',
        intro: 'Use cadastro rápido quando quiser registrar alguém diretamente em vez de esperar o fluxo normal de solicitação do Join Academy.',
        when_title: 'Quando usar isso',
        when_items: [
          'você está fazendo onboarding de alguém pessoalmente',
          'você quer criar a conta diretamente',
          'você está registrando um responsável e quer criar várias contas de crianças no mesmo fluxo',
          'o membro tem resistência à tecnologia e você quer configurar a conta para ele',
          'você quer adicionar uma conta DojoMate existente por email'
        ],
        path_title: 'Comece pelo caminho mais fácil',
        path_body_1: 'Se sua academia está crescendo, a abordagem de longo prazo mais fácil costuma ser deixar que os membros criem suas próprias contas e adicionem sua academia por conta própria.',
        path_body_2: 'Cadastro rápido funciona melhor para pessoas que precisam de ajuda extra ou que provavelmente não vão concluir a configuração sozinhas.',
        steps_title: 'Passos',
        steps_items: [
          'Abra o Affiliate Portal e entre com seu email e senha do DojoMate.',
          'Abra Register.',
          'Digite o email real do membro e crie uma senha temporária.',
          'Escolha se a conta é para um aluno ou um responsável.',
          'Se você escolher responsável, continue para o fluxo de configuração de contas infantis.',
          'Revise os detalhes e pressione Confirm.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Cadastro rápido pula o fluxo normal de solicitação pendente e aceita.',
          'Esse fluxo é especialmente útil para responsáveis, porque você pode criar várias contas de crianças como parte da mesma ação de registro.',
          'Você pode salvar uma senha temporária simples ao criar a conta. O membro pode entrar depois e alterá-la.',
          'Alguns membros talvez nunca entrem por conta própria, e isso continua sendo aceitável se você estiver gerenciando a conta para eles.',
          'Membros recém-cadastrados ainda podem receber cartões de assinatura pelo app depois da configuração.',
          'Se a pessoa já tiver uma conta DojoMate, adicione-a por email em vez de criar uma conta duplicada.'
        ],
        compare_title: 'Precisa de ajuda para escolher este fluxo?',
        compare_link: 'Comparar cadastro rápido e solicitações',
        next_title: 'Próximo passo',
        next_body: 'Depois que a conta estiver na academia, a próxima tarefa comum é emitir um cartão de assinatura.',
        back_link: 'Voltar para a visão geral de membros',
        next_link: 'Ir para emitir cartões'
      },
      compare: {
        badge: 'Membros',
        title: 'Escolher entre cadastro rápido e solicitações',
        intro: 'Ambos os fluxos trazem pessoas para a academia, mas foram feitos para situações diferentes.',
        quick_title: 'Use cadastro rápido quando',
        quick_items: [
          'você quer criar a conta por conta própria',
          'a pessoa precisa de ajuda com a configuração',
          'a pessoa tem resistência à tecnologia',
          'você está registrando um responsável e várias contas de crianças juntas'
        ],
        quick_link: 'Abrir cadastro rápido',
        apps_title: 'Use solicitações quando',
        apps_items: [
          'você quer que os membros criem suas próprias contas',
          'você quer que a academia cresça sem que o dono crie cada conta manualmente',
          'o membro consegue seguir o fluxo Join Academy sozinho'
        ],
        apps_link: 'Abrir solicitações da academia',
        rule_title: 'A regra simples',
        rule_body: 'Deixe os membros criarem as próprias contas sempre que possível. Use cadastro rápido quando eles precisarem de ajuda extra ou quando você quiser lidar com o registro diretamente.'
      },
      applications: {
        badge: 'Membros',
        title: 'Revisar solicitações da academia',
        intro: 'Use este fluxo quando alguém se candidata pelo Join Academy e você precisa aceitá-lo ou recusá-lo.',
        steps_title: 'Passos',
        steps_items: [
          'Abra Membros → Adicionar / Recusar membros.',
          'Revise a lista de solicitações pendentes.',
          'Pressione Accept ou Reject no candidato.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Se nenhuma conta pendente aparecer, a pessoa talvez não tenha se candidatado corretamente.',
          'Ela pode precisar escanear o QR da academia novamente ou pesquisar o nome da academia outra vez.',
          'Contas infantis vinculadas podem exigir etapas extras de aceite pelo perfil do responsável.'
        ],
        why_title: 'Por que usar applications?',
        why_body: 'Este é o melhor caminho de longo prazo quando você quer que os membros criem suas próprias contas e adicionem sua academia por conta própria.',
        compare_link: 'Comparar solicitações e cadastro rápido',
        mistake_title: 'Erro comum',
        mistake_body: 'Se as contas infantis não aparecerem imediatamente, ou elas ainda não foram criadas corretamente ou a lista está desatualizada. Peça ao responsável para concluir a configuração das crianças ou atualize a visualização do app.',
        next_title: 'Próximo passo',
        next_body: 'Depois que você aceita alguém na academia, a próxima tarefa comum é emitir o cartão de assinatura dessa pessoa.',
        back_link: 'Voltar para a visão geral de membros',
        next_link: 'Ir para emitir cartões'
      },
      reject: {
        badge: 'Membros',
        title: 'Recusar ou banir um membro quando necessário',
        intro: 'Use este fluxo quando alguém não deve mais permanecer ativo na academia.',
        reject_title: 'Como a recusa funciona',
        reject_items: [
          'Abra o perfil do membro em Membros → Lista de membros.',
          'Pressione Reject para removê-lo da academia.',
          'Um membro com cartões ativos precisa ser limpo antes que a recusa possa acontecer.'
        ],
        ban_title: 'Como o ban funciona',
        ban_items: [
          'Membros recusados aparecem em Membros → Lista de recusados.',
          'A partir dali você pode aceitá-los novamente ou bani-los.',
          'Membros banidos não podem se candidatar novamente pelo Join Academy.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Remover cartões ativos primeiro faz parte do processo normal de limpeza antes da recusa.',
          'Se você quiser desfazer um ban depois, vá para Banned List e use Remove Ban.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para a visão geral de membros',
        next_link: 'Revisar fluxo de Cards'
      }
    },
    account: {
      sign_in: {
        badge: 'Conta',
        title: 'Entrar na sua conta',
        intro: 'Use sign in quando sua conta já existe e você quer acessar sua academia, reservas, cartões e registros.',
        need_title: 'O que você precisa',
        need_items: ['seu endereço de email', 'sua senha'],
        trouble_title: 'Se o login não funcionar',
        trouble_items: [
          'verifique se o email e a senha estão corretos',
          'use Redefinir Senha se necessário',
          'verifique o seletor de idioma se a tela parecer estranha'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para o caminho do aluno',
        next_link: 'Redefinir Senha'
      },
      create: {
        badge: 'Conta',
        title: 'Criar uma conta',
        intro: 'Crie uma conta antes de entrar em uma academia, reservar aulas ou usar o restante do app.',
        path_title: 'Escolha o caminho certo',
        path_items: [
          'caminho member/student se você está treinando ou entrando em uma academia',
          'caminho admin/owner se você está configurando ou gerenciando uma academia'
        ],
        need_title: 'O que você precisa',
        need_items: ['um endereço de email válido', 'uma senha que atenda às regras do app'],
        next_title: 'Próximo passo',
        back_link: 'Voltar para Entrar',
        next_link: 'Entrar em uma academia'
      },
      reset: {
        badge: 'Conta',
        title: 'Redefinir sua senha',
        intro: 'Use isso quando você não lembrar sua senha ou quando sua senha atual não estiver mais funcionando.',
        how_title: 'Como funciona',
        how_items: [
          'solicite a redefinição pela tela de sign-in',
          'verifique a conta de email ligada ao seu login do DojoMate',
          'siga o link de redefinição quando ele chegar'
        ],
        email_title: 'Se o email não chegar',
        email_items: [
          'verifique spam ou lixo eletrônico',
          'confirme que você digitou o email correto',
          'tente enviar a redefinição novamente'
        ]
      },
      troubleshooting: {
        badge: 'Conta',
        title: 'Problemas de conta',
        intro: 'Use esta página quando o acesso à conta estiver bloqueado por um problema comum de login ou cadastro.',
        signin_title: 'Não consegue entrar',
        signin_items: [
          'verifique seu email e sua senha com cuidado',
          'redefina a senha se necessário',
          'confirme que o dispositivo está online'
        ],
        email_title: 'Email já em uso',
        email_body: 'Isso normalmente significa que a conta já existe e que você deve entrar ou redefinir a senha em vez de criar uma segunda conta.',
        role_title: 'Confusão de função',
        role_body: 'Se sua função mudou ou a conta não está se comportando como você espera, verifique primeiro se você está usando a conta e a associação corretas da academia.'
      }
    },
    settings: {
      password: {
        badge: 'Configurações',
        title: 'Alterar sua senha',
        intro: 'Use isso quando você ainda souber sua senha atual e quiser atualizá-la dentro das configurações da conta.',
        know_title: 'O que saber',
        know_items: [
          'Isso é diferente de reset password. Alterar senha assume que você já consegue acessar a conta.',
          'Se você não consegue entrar de jeito nenhum, use Redefinir Senha.'
        ]
      },
      language: {
        badge: 'Configurações',
        title: 'Alterar o idioma do app',
        intro: 'Use a configuração de idioma quando quiser que o app apareça em outro idioma compatível.',
        know_title: 'O que saber',
        know_body: 'Se uma tela parecer difícil de entender, verificar a configuração de idioma é uma das correções mais rápidas.'
      },
      currency: {
        badge: 'Configurações',
        title: 'Escolher a visualização de moeda',
        intro: 'Use a configuração de moeda para controlar como os valores em dinheiro aparecem no app.',
        know_title: 'O que saber',
        know_items: [
          'Os membros se importam principalmente em ler os valores corretos com clareza.',
          'Os donos também podem se importar com configuração financeira da academia e consistência.'
        ]
      },
      privacy: {
        badge: 'Configurações',
        title: 'Revisar configurações de privacidade',
        intro: 'Use as configurações de privacidade para entender e controlar como dados ligados a notificações, marketing, ranking, perfil público, reservas e análises são tratados.',
        main_title: 'Áreas principais de privacidade',
        main_items: [
          'notificações',
          'marketing',
          'participação em rankings',
          'acesso a perfil público',
          'configurações ligadas a reservas',
          'presença e dados agregados de análises'
        ],
        progression_title: 'Controles ligados à progressão',
        progression_items: [
          'Participação em rankings e acesso a perfil público são controles separados.',
          'Desligar a participação em rankings exclui a conta dos rankings.',
          'Desligar o acesso ao perfil público não remove automaticamente a conta de toda superfície permitida.',
          'Os controles de marketing são separados dos controles de progressão, ranking e perfil público.'
        ],
        child_title: 'Contas de crianças e dependentes',
        child_body: 'Registros de crianças e dependentes ficam excluídos da participação em progressão, em rankings, em perfis públicos de progressão e em marketing personalizado.',
        know_title: 'O que saber',
        know_body: 'Esta página trata de entender e gerenciar escolhas de privacidade, não apenas de ligar ou desligar mensagens.'
      },
      delete: {
        badge: 'Configurações',
        title: 'Excluir sua conta com cuidado',
        intro: 'Excluir a conta é uma ação séria. Use isso apenas quando você realmente quiser fechar a conta inteira, e não apenas sair de uma academia.',
        before_title: 'Antes de fazer isso',
        before_items: [
          'verifique primeiro as regras de validação',
          'revise o que pode bloquear a exclusão',
          'considere contas infantis e qualquer vínculo de cartão infantil'
        ],
        know_title: 'O que saber',
        know_body: 'Excluir a conta inteira não é o mesmo que sair da associação com uma academia. Use os fluxos de associação quando a conta deve continuar ativa.'
      },
      logout: {
        badge: 'Configurações',
        title: 'Sair',
        intro: 'Use logout quando terminar de usar o app neste dispositivo ou quando quiser trocar para outra conta.'
      }
    },
    profile: {
      edit: {
        badge: 'Perfil',
        title: 'Editar seu perfil',
        intro: 'Use esta página quando suas informações pessoais de perfil precisarem ser atualizadas.',
        know_title: 'O que saber',
        know_items: [
          'Alguns usuários podem ver contexto ligado à função dependendo de como a conta é usada.',
          'Depois de fazer mudanças, envie o formulário para salvar as atualizações.'
        ]
      },
      children: {
        badge: 'Perfil',
        title: 'Gerenciar contas infantis',
        intro: 'Use child accounts quando um pai, mãe ou responsável precisar criar, editar ou gerenciar contas de crianças.',
        do_title: 'O que você pode fazer',
        do_items: [
          'criar contas infantis',
          'editar detalhes das contas infantis',
          'remover contas infantis quando apropriado'
        ],
        know_title: 'O que saber',
        know_body: 'Relações de contas gerenciadas por responsáveis podem afetar outros fluxos, como entrar em academias e lidar com associações.'
      }
    },
    student: {
      join: {
        badge: 'Aluno',
        title: 'Entrar em uma academia',
        intro: 'Use este fluxo quando quiser conectar sua conta a uma academia e começar a usar essa academia dentro do app.',
        find_title: 'Formas de encontrar uma academia',
        find_items: [
          'use Descobrir academias para navegar por academias dentro do app',
          'use Buscar academia se quiser pesquisar diretamente ou escanear o QR de uma academia'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra Descobrir academias na seção Academia.',
          'Navegue pela lista de academias.',
          'Abra a academia para ver seus detalhes.',
          'Revise as informações da academia e a galeria.',
          'Confirme que é a academia que você espera.',
          'Solicite entrada.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Descobrir academias é útil quando você quer comparar academias antes de entrar.',
          'Buscar academia é o caminho direto para busca e leitura de QR.',
          'Pais e mães talvez precisem considerar contas infantis como parte da entrada.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para o caminho do aluno',
        next_link: 'Gerenciar associações'
      },
      home: {
        badge: 'Aluno',
        title: 'Eu treino em uma academia',
        intro: 'Este caminho é para alunos, responsáveis e membros da academia que precisam de ajuda com conta, reservas e assinaturas.',
        section_1: 'Entrar na academia e gerenciar acesso',
        join_link: 'Entrar em uma academia',
        memberships_link: 'Gerenciar assinaturas',
        section_2: 'Reservas, registros e atualizações da academia',
        booking_link: 'Reservas',
        attendance_link: 'Registros de presença',
        broadcast_link: 'Broadcast',
        alerts_link: 'Alertas do sistema',
        section_3: 'Ajuda com a conta',
        sign_in_link: 'Entrar',
        create_account_link: 'Criar conta',
        reset_password_link: 'Redefinir senha',
        troubleshooting_link: 'Problemas de conta',
        change_password_link: 'Alterar senha',
        child_accounts_link: 'Contas de crianças',
        still_need_title: 'Ainda precisa de outra coisa?',
        still_need_body: 'Alguns tópicos mais especializados ainda podem estar na Ajuda v1 enquanto o caminho do aluno continua sendo reconstruído.',
        still_need_link: 'Abrir Ajuda v1'
      },
      broadcast: {
        badge: 'Aluno',
        title: 'Ler Broadcasts da academia no app',
        intro: 'Use o Broadcast no app para ler atualizações e posts de treino da academia. Este é um feed de comunicação voltado para leitura, não é chat, comentários nem respostas.',
        where_title: 'Onde encontrar',
        where_items: [
          'No lado do membro, abra o menu Academy e toque em Broadcast.',
          'O ícone atual é um megafone.',
          'O Broadcast segue a academia selecionada, então escolha uma academia primeiro.'
        ],
        actions_title: 'O que você pode fazer',
        actions_items: [
          'Alternar entre as abas Updates e Training.',
          'Puxar para atualizar o feed.',
          'Ler o texto do broadcast e as legendas das imagens.',
          'Tocar em uma imagem para abrir em tela cheia e tocar fora para fechar.'
        ],
        screen_title: 'O que pode aparecer na tela',
        screen_items: [
          'Título: Broadcast',
          'O nome da academia selecionada no topo',
          'Abas: Updates e Training',
          'Cada cartão pode mostrar o nome do autor, ou Academy Admin como fallback',
          'Data e hora de publicação',
          'Texto, miniaturas de imagens e legendas opcionais'
        ],
        limits_title: 'Estados vazios e limites atuais',
        limits_items: [
          'Se nenhuma academia estiver selecionada, você pode ver Select an academy first.',
          'Um feed vazio pode mostrar Updates coming soon ou No visible broadcasts are available in this stream yet.',
          'O feed Broadcast voltado a membros é atualmente somente leitura.',
          'Não há curtidas, comentários, respostas, reações, compartilhamentos nem postagem por membros.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Broadcast é o termo oficial atual do produto. A antiga linguagem Newsfeed está desatualizada.',
          'O conteúdo é criado no Affiliate Portal e exibido no app.',
          'Se a busca do feed falhar, o app atualmente volta para uma lista vazia em vez de mostrar um estado de erro separado.',
          'A tela de criação do lado administrativo no Expo ainda está em preparação e não deve ser tratada como o fluxo principal atual.'
        ],
        join_link: 'Entrar em uma academia',
        alerts_link: 'Alertas do sistema'
      },
      memberships: {
        badge: 'Aluno',
        title: 'Gerenciar associações da academia',
        intro: 'Use esta página quando sua conta pertence a mais de uma academia ou quando você precisa alternar entre associações de academias.',
        when_title: 'Quando isso importa',
        when_items: [
          'você pertence a mais de uma academia',
          'você precisa escolher em qual academia está atuando',
          'a academia errada está atualmente selecionada no app'
        ],
        know_title: 'O que saber',
        know_items: [
          'Membros de várias academias precisam escolher a academia correta antes de reservar ou verificar registros.',
          'Se algo parecer ausente, talvez a academia ativa seja apenas a errada.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para Join Academy',
        next_link: 'Reservas'
      },
      booking: {
        badge: 'Aluno',
        title: 'Reservar uma aula',
        intro: 'Use booking para escolher uma aula, selecionar um cartão elegível e reservar sua vaga.',
        steps_title: 'Passos',
        steps_items: [
          'Abra a agenda.',
          'Escolha a aula que você quer.',
          'Verifique se você pode reservá-la.',
          'Selecione o cartão que quer usar.',
          'Confirme a reserva.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Talvez você precise escolher primeiro a academia correta se fizer parte de mais de uma.',
          'Se um cartão não aparecer, a aula e o cartão podem não ser compatíveis.',
          'Você também pode cancelar a reserva quando as regras ainda permitirem.'
        ],
        next_title: 'Próximo passo',
        back_link: 'Associações',
        next_link: 'Registros de presença'
      },
      alerts: {
        badge: 'Aluno',
        title: 'Ler alertas do sistema',
        intro: 'Alertas do sistema ajudam você a acompanhar atualizações da academia e outras informações importantes sobre conta ou associação.',
        see_title: 'O que você pode ver',
        see_items: [
          'atualizações da academia',
          'avisos ligados à associação',
          'outros alertas gerados pelo sistema ligados ao seu uso da academia'
        ],
        know_title: 'O que saber',
        know_body: 'Esta é uma superfície de alertas do sistema, não um chat normal ou uma conversa de mensagens. Trate isso como informação importante sobre conta e academia.'
      },
      attendance: {
        badge: 'Aluno',
        title: 'Revisar registros de presença',
        intro: 'Use attendance records quando quiser revisar seu histórico de treino e verificar o que aconteceu em um intervalo de datas escolhido.',
        help_title: 'No que esta página ajuda',
        help_items: [
          'verificar presença recente rapidamente',
          'revisar um intervalo maior de datas',
          'confirmar se uma aula foi registrada da forma que você espera'
        ],
        know_title: 'O que saber',
        know_items: [
          'Os controles de intervalo de datas facilitam revisões mais longas.',
          'Esta página é principalmente para revisar registros, não para alterá-los.'
        ]
      }
    },
    account: {
      sign_in: {
        badge: 'Conta',
        title: 'Entrar na sua conta',
        intro: 'Use o login quando sua conta já existe e você quer acessar sua academia, reservas, cartões e registros.',
        need_title: 'O que você precisa',
        need_items: ['seu endereço de email', 'sua senha'],
        trouble_title: 'Se o login não funcionar',
        trouble_items: [
          'confirme se o email e a senha estão corretos',
          'use Redefinir Senha se necessário',
          'verifique o seletor de idioma se a tela parecer estranha'
        ],
        next_title: 'Próximo passo',
        back_link: 'Voltar para o caminho do aluno',
        next_link: 'Redefinir Senha'
      },
      create: {
        badge: 'Conta',
        title: 'Criar uma conta',
        intro: 'Crie uma conta antes de entrar em uma academia, reservar aulas ou usar o restante do app.',
        path_title: 'Escolha o caminho certo',
        path_items: [
          'caminho de membro/aluno se você vai treinar ou entrar em uma academia',
          'caminho de admin/dono se você vai configurar ou gerenciar uma academia'
        ],
        need_title: 'O que você precisa',
        need_items: ['um endereço de email válido', 'uma senha que siga as regras do app'],
        next_title: 'Próximo passo',
        back_link: 'Voltar para Entrar',
        next_link: 'Entrar em uma Academia'
      },
      reset: {
        badge: 'Conta',
        title: 'Redefinir sua senha',
        intro: 'Use isto quando você não lembrar sua senha ou quando a senha atual não funcionar mais.',
        how_title: 'Como funciona',
        how_items: [
          'solicite a redefinição pela tela de login',
          'verifique o email vinculado ao seu login do DojoMate',
          'abra o link de redefinição quando ele chegar'
        ],
        email_title: 'Se o email não chegar',
        email_items: [
          'verifique spam ou lixo eletrônico',
          'confirme se você digitou o email correto',
          'tente enviar a redefinição novamente'
        ]
      },
      troubleshooting: {
        badge: 'Conta',
        title: 'Solução de problemas da conta',
        intro: 'Use esta página quando o acesso à conta estiver bloqueado por um problema comum de login ou cadastro.',
        signin_title: 'Não consegue entrar',
        signin_items: [
          'confirme seu email e senha com cuidado',
          'redefina a senha se necessário',
          'garanta que o dispositivo esteja online'
        ],
        email_title: 'Email já em uso',
        email_body: 'Isso normalmente significa que a conta já existe e que você deve entrar ou redefinir a senha, em vez de criar uma segunda conta.',
        role_title: 'Confusão de função',
        role_body: 'Se sua função mudou ou a conta não está se comportando como esperado, primeiro confirme se você está usando a conta certa e a associação correta com a academia.'
      }
    },
    settings: {
      password: {
        badge: 'Configurações',
        title: 'Mudar sua senha',
        intro: 'Use isto quando você ainda sabe sua senha atual e quer atualizá-la dentro das configurações da conta.',
        know_title: 'O que saber',
        know_items: [
          'Isso é diferente de redefinir senha. Mudar a senha assume que você já consegue acessar a conta.',
          'Se você não consegue entrar de jeito nenhum, use Redefinir Senha.'
        ]
      },
      language: {
        badge: 'Configurações',
        title: 'Mudar o idioma do app',
        intro: 'Use a configuração de idioma quando quiser que o app apareça em outro idioma compatível.',
        know_title: 'O que saber',
        know_body: 'Se alguma tela estiver difícil de entender, verificar o idioma costuma ser uma das soluções mais rápidas.'
      },
      currency: {
        badge: 'Configurações',
        title: 'Escolher a visualização de moeda',
        intro: 'Use a configuração de moeda para controlar como os valores em dinheiro aparecem no app.',
        know_title: 'O que saber',
        know_items: [
          'Membros querem principalmente ver os valores corretos de forma clara.',
          'Donos também podem se importar com a configuração financeira da academia e com consistência.'
        ]
      },
      privacy: {
        badge: 'Configurações',
        title: 'Revisar configurações de privacidade',
        intro: 'Use as configurações de privacidade para entender e controlar como dados de notificações, marketing, ranking, perfil público, reservas e análises são tratados.',
        main_title: 'Principais áreas de privacidade',
        main_items: [
          'notificações',
          'marketing',
          'participação em rankings',
          'acesso ao perfil público',
          'configurações relacionadas a reservas',
          'dados de presença e análises agregadas'
        ],
        progression_title: 'Controles ligados à progressão',
        progression_items: [
          'Participação em rankings e acesso ao perfil público são controles separados.',
          'Desativar a participação em rankings exclui a conta dos rankings.',
          'Desativar o acesso ao perfil público não remove automaticamente a conta de todas as superfícies permitidas.',
          'Controles de marketing são separados de progressão, ranking e perfil público.'
        ],
        child_title: 'Contas infantis e dependentes',
        child_body: 'Registros de crianças e dependentes são excluídos da participação em progressão, de rankings, de perfis públicos de progressão e de marketing personalizado.',
        know_title: 'O que saber',
        know_body: 'Esta página é para entender e gerenciar escolhas de privacidade, não apenas para ligar ou desligar mensagens.'
      },
      delete: {
        badge: 'Configurações',
        title: 'Excluir sua conta com cuidado',
        intro: 'Excluir a conta é uma ação séria. Use isso apenas quando você realmente quiser encerrar a conta inteira, e não apenas sair de uma academia.',
        before_title: 'Antes de fazer isso',
        before_items: [
          'verifique primeiro as regras de validação',
          'revise o que pode bloquear a exclusão',
          'considere contas infantis e relações com cartões infantis'
        ],
        know_title: 'O que saber',
        know_body: 'Excluir a conta inteira não é a mesma coisa que sair de uma única academia. Use os fluxos de associação quando a conta ainda deve continuar ativa.'
      },
      logout: {
        badge: 'Configurações',
        title: 'Sair',
        intro: 'Use sair quando terminar de usar o app neste dispositivo ou quando quiser trocar para outra conta.'
      }
    },
    profile: {
      edit: {
        badge: 'Perfil',
        title: 'Editar seu perfil',
        intro: 'Use esta página quando suas informações pessoais de perfil precisarem ser atualizadas.',
        know_title: 'O que saber',
        know_items: [
          'Alguns usuários podem ver contexto relacionado à função, dependendo de como a conta é usada.',
          'Depois de fazer mudanças, envie o formulário para salvar as atualizações.'
        ]
      },
      children: {
        badge: 'Perfil',
        title: 'Gerenciar contas infantis',
        intro: 'Use contas infantis quando um responsável precisar criar, editar ou gerenciar contas para crianças.',
        do_title: 'O que você pode fazer',
        do_items: [
          'criar contas infantis',
          'editar dados da conta infantil',
          'remover contas infantis quando apropriado'
        ],
        know_title: 'O que saber',
        know_body: 'Relações de contas gerenciadas por responsáveis podem afetar outros fluxos, como entrar em academias e lidar com memberships.'
      }
    },
    tools: {
      overview: {
        badge: 'Ferramentas',
        title: 'Use ferramentas pagas para ampliar o fluxo da academia',
        intro: 'Ferramentas pagas adicionam sistemas extras em cima do fluxo principal da academia, como agenda recorrente, pausa de cartões, acesso de equipe, análises e Broadcast.',
        start_badge: 'Ferramenta paga',
        start_title: 'Comece pela ferramenta de que você precisa',
        timetable_title: 'Criar uma agenda recorrente',
        timetable_body: 'Use Timetable quando quiser aulas semanais repetidas sem recriá-las uma por uma.',
        timetable_link: 'Abrir Timetable',
        pause_title: 'Pausar cartões ativos',
        pause_body: 'Use pausa de cartões quando precisar interromper temporariamente o tempo do cartão.',
        pause_link: 'Abrir pausa de cartões',
        broadcast_title: 'Enviar Broadcasts para membros',
        broadcast_body: 'Use Broadcast quando quiser publicar atualizações ou posts de treino em mão única para membros a partir do Affiliate.',
        broadcast_link: 'Abrir Broadcast',
        know_title: 'O que saber',
        know_items: [
          'Ferramentas pagas ampliam os fluxos principais que você já usa em Business, Schedule, Cards e Membros.',
          'As ferramentas podem estar disponíveis individualmente ou dentro do pacote Premium.',
          'Outras funções geralmente podem usar as ferramentas depois que o dono da academia as ativa.',
          'Normalmente é mais fácil aprender primeiro o fluxo básico e depois adicionar as ferramentas pagas.'
        ],
        activate_link: 'Revisar status das ferramentas'
      },
      activate: {
        badge: 'Ferramentas',
        paid_badge: 'Ferramenta paga',
        title: 'Ativar ferramentas e plano Premium',
        intro: 'Use a página de recursos no Affiliate Portal para revisar grupos de ferramentas, iniciar teste grátis, comprar pacote e gerenciar ferramentas ativas de pacote na sua academia.',
        where_title: 'Para onde ir',
        where_body: 'Abra Recursos no Affiliate Portal. Este é o ponto de entrada atual, gerenciado pelo Rails, para ativação de ferramentas, status de pacote e status de teste.',
        organized_title: 'Como a página é organizada',
        organized_items: [
          'As ferramentas estão disponíveis individualmente.',
          'A página de recursos agrupa ferramentas em ferramentas básicas, ferramentas avançadas e seções de pacotes.',
          'O pacote Premium inclui as quatro ferramentas de produtividade.',
          'O pacote Pro também aparece na interface atual.',
          'Usuários de primeira vez podem iniciar um teste Premium de 90 dias.'
        ],
        groups_title: 'Grupos atuais de ferramentas',
        essential_title: 'Ferramentas básicas',
        essential_items: ['Timetables', 'Pause Academy'],
        advanced_title: 'Ferramentas avançadas',
        advanced_items: ['Permissões da equipe', 'Analytics'],
        packages_title: 'Pacotes',
        packages_body: 'A interface atual inclui o pacote Premium e o pacote Pro.',
        features_title: 'O que você pode ver na página de recursos',
        features_items: [
          'Start Free Trial',
          'Comprar pacote Premium',
          'Comprar pacote Pro',
          'Premium ativo!',
          'Incluído no Premium',
          'Available in free trial',
          'Included in free trial',
          'Included in your package',
          'Manage'
        ],
        know_title: 'O que saber',
        know_items: [
          'Algumas telas ficam totalmente bloqueadas quando uma ferramenta está inativa.',
          'Algumas telas ainda carregam, mas trocam as ações pagas por prompts de upgrade.',
          'Broadcast é o termo atual visível ao usuário nesta interface, não o antigo Newsfeed.',
          'O comportamento do teste de pacotes considera sobreposição, então Pro e Premium não simplesmente reiniciam um ao outro.'
        ],
        guides_title: 'Guias pagos',
        staff_access: 'Acesso da equipe',
        analytics: 'Analytics',
        support_desc: 'Use o fórum do Affiliate Portal no Source Combatives para dúvidas sobre a página de recursos, assinaturas, status de teste ou outros fluxos web do Affiliate Portal.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      broadcast: {
        badge: 'Ferramentas',
        paid_badge: 'Ferramenta paga',
        title: 'Enviar Broadcasts de mão única para membros',
        intro: 'Use Broadcasts no Affiliate Portal quando quiser publicar atualizações da academia ou posts de treino para membros. Esta é uma ferramenta de publicação em mão única, não é chat, nem respostas, nem feed social.',
        where_title: 'Onde fica',
        where_items: [
          'Abra Broadcasts pela navegação do Affiliate Portal.',
          'No comportamento atual do Affiliate Portal, Broadcast é na prática só para o dono.',
          'Broadcast aparece como uma ferramenta Pro na página de recursos.'
        ],
        flow_title: 'Como o fluxo de publicação funciona',
        flow_steps: [
          'Abra Broadcasts no Affiliate Portal.',
          'Escolha a aba de stream em que deseja publicar.',
          'Escreva o corpo da mensagem.',
          'Adicione imagens por URL colada ou por upload de arquivo.',
          'Use Publish Broadcast para enviar ao feed da academia.'
        ],
        labels_title: 'Rótulos atuais que você pode ver',
        labels_items: [
          'Broadcasts',
          'Message',
          'Image URLs',
          'Upload Images',
          'Publish Broadcast',
          'Recall',
          'Repost',
          'Delete',
          'Abas de visibilidade: Visible, Recalled, All'
        ],
        lifecycle_title: 'Regras do ciclo de vida',
        lifecycle_items: [
          'Um broadcast visível precisa primeiro ser Recalled antes de poder ser excluído.',
          'Broadcasts já Recalled podem ser Reposted se você quiser publicá-los novamente.',
          'Somente broadcasts Recalled podem ser excluídos permanentemente.',
          'Broadcasts Recalled continuam recuperáveis por uma janela de retenção e depois são excluídos automaticamente, a menos que sejam repostados.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Use Broadcast em toda a cópia voltada ao usuário. A antiga linguagem Newsfeed está desatualizada.',
          'Broadcast é controlado por entitlement e não fica disponível por padrão.',
          'Imagens podem ser adicionadas tanto por URL colada quanto por upload de arquivo.',
          'Os Broadcasts são criados no Affiliate Portal e depois consumidos no app.'
        ],
        features_link: 'Recursos',
        student_link: 'Ler Broadcast no app',
        support_desc: 'Use o fórum do Affiliate Portal para dúvidas sobre a ferramenta Broadcast, problemas de publish/recall/repost ou questões de entitlement no Affiliate Portal.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      timetable: {
        badge: 'Ferramentas',
        paid_badge: 'Ferramenta paga',
        title: 'Montar uma agenda semanal recorrente',
        intro: 'Use Timetable quando quiser criar modelos de aula uma vez e publicá-los no calendário ao longo do tempo.',
        use_title: 'Quando usar isso',
        use_items: [
          'você oferece as mesmas aulas toda semana',
          'você quer planejar mais à frente sem recriar cada aula manualmente',
          'você quer publicar aulas no calendário quando estiverem prontas'
        ],
        steps_title: 'Passos',
        steps_items: [
          'Abra Timetable.',
          'Selecione o dia da semana desejado.',
          'Pressione Create Lesson.',
          'Preencha o formulário da aula da mesma forma que faria na tela normal de Schedule.',
          'Defina a data de início e a data de fim do modelo recorrente.',
          'Salve o modelo.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Os modelos não viram aulas reais do calendário até serem publicados.',
          'Você pode planejar com segurança para bem à frente usando uma data de fim futura.',
          'Depois da criação, você pode voltar para a página do dia da semana e editar o modelo ali.'
        ],
        publish_title: 'Publicação',
        publish_body_1: 'Aulas não publicadas aparecem primeiro na página Schedule. Admins podem publicá-las quando estiverem prontas para reserva.',
        publish_body_2: 'Os membros ainda podem ver aulas não publicadas como planos futuros, mas ainda não podem reservá-las.',
        mistake_title: 'Erro comum',
        mistake_body: 'Se uma aula recorrente cair em um feriado, normalmente você não precisa refazer o timetable. Basta escolher não publicar aquela aula.',
        activate_link: 'Revisar status das ferramentas'
      },
      pause: {
        badge: 'Ferramentas',
        paid_badge: 'Ferramenta paga',
        title: 'Pausar cartões ativos quando necessário',
        intro: 'Use pausa de cartões quando precisar interromper o tempo do cartão temporariamente, em vez de deixar o cartão continuar expirando normalmente.',
        modes_title: 'Duas formas de pausar cartões',
        modes_items: [
          'Pausa individual: pausar ou retomar o cartão de um membro pelo perfil desse membro.',
          'Pausa de toda a academia: donos podem pausar cartões em toda a academia.'
        ],
        know_title: 'O que saber',
        know_items: [
          'Cartões pausados não podem ser usados para reservar.',
          'Cada modelo de cartão pode ser excluído da pausa de toda a academia, se necessário.',
          'Se um membro já estava pausado individualmente antes de uma pausa geral da academia, ele continuará pausado depois que a pausa geral terminar.'
        ],
        common_title: 'Uso mais comum',
        common_body: 'Donos costumam usar essa ferramenta quando querem proteger o tempo do membro sem estender manualmente a validade de um cartão por vez.',
        next_title: 'Próximo passo',
        back_tools: 'Voltar para visão geral das ferramentas',
        activate_link: 'Revisar status das ferramentas',
        back_cards: 'Voltar para Cards'
      }
    },
    portal: {
      overview: {
        badge: 'Portal',
        title: 'Usar o Portal de Afiliados',
        intro: 'O Portal de Afiliados é a superfície web da Source Combatives para fluxos de dono mais pesados do que as telas normais do app do dia a dia, especialmente registro, moderação, graduações, cartões, relatórios e ativação de pacotes.',
        workflows_title: 'Principais fluxos do Portal de Afiliados',
        register_title: 'Registrar e fazer onboarding',
        register_body: 'Use o assistente de registro para criar contas de adultos e responsáveis, adicionar crianças opcionalmente e retomar depois um onboarding interrompido.',
        members_title: 'Moderar status de membros',
        members_body: 'Revise usuários pendentes, aceitos, rejeitados e banidos, vincule uma conta existente por email ou retome o fluxo de onboarding de um responsável.',
        ranks_title: 'Gerenciar programas de graduação',
        ranks_body: 'Configure programas de graduação, inscreva membros por programa e confirme mudanças de faixa/grau pelo fluxo atual de revisão.',
        cards_title: 'Gerenciar cartões no Portal de Afiliados',
        cards_body: 'Use as visões Templates, Assign, Active e History para configuração de cartões, emissão, trabalho com cartões ativos, ações de pausa e revisão de auditoria.',
        reports_title: 'Revisar relatórios e ferramentas',
        reports_body: 'Relatórios continua mais leve porque é principalmente somente leitura. A página de recursos é onde o status de pacotes e de testes é gerenciado.',
        know_title: 'O que saber',
        know_items: [
          'Na prática, a maioria das páginas do Portal de Afiliados é exclusiva do dono.',
          'Relatórios mensais é a principal exceção: funcionários não donos podem vê-los se tiverem acesso a relatórios.',
          'Mudanças feitas no Portal de Afiliados costumam alimentar diretamente o app, incluindo status de membros, cartões, dados de graduação e ativação de ferramentas.'
        ],
        support_desc: 'Use o fórum do Affiliate Portal no Source Combatives para dúvidas sobre o Portal de Afiliados, problemas de configuração do portal e outros fluxos web do Affiliate Portal.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      register: {
        badge: 'Portal',
        title: 'Registrar no Portal de Afiliados',
        intro: 'Use Register no Portal de Afiliados quando quiser criar um novo membro da academia pelo portal. Este é um assistente de várias etapas, não um formulário de uma única tela.',
        flow_title: 'Como o fluxo funciona',
        flow_steps: [
          'Abra Register no Portal de Afiliados e preencha primeiro os dados do responsável ou do adulto.',
          'Se a pessoa estiver se registrando como responsável, adicione as contas das crianças na etapa de crianças.',
          'Revise o resumo e use Confirm & Create para concluir.',
          'Depois da criação, use Registrar mais um ou Ir para membros se precisar continuar trabalhando.'
        ],
        labels_title: 'Rótulos atuais que você pode ver',
        labels_items: ['Registrar', 'Próximo', 'Voltar', 'Confirmar e criar', 'Registrar mais um', 'Ir para membros', 'Retomar cadastro'],
        know_title: 'O que saber',
        know_items: [
          'Responsáveis e alunos adultos não seguem exatamente o mesmo caminho.',
          'Se um responsável estiver se registrando como aluno, a etapa de crianças é ignorada.',
          'Um responsável pode permanecer em Pending e ser retomado depois a partir de Membros.',
          'As contas criadas aqui viram usuários normais do DojoMate e aparecem nos dados de membros da academia usados pelo app.'
        ],
        next_title: 'Próximo passo',
        members_link: 'Membros',
        cards_link: 'Cards',
        support_desc: 'Use o fórum do Affiliate Portal para dúvidas sobre o assistente de registro, recuperação de responsável pendente ou outros problemas de onboarding no Portal de Afiliados.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      members: {
        badge: 'Portal',
        title: 'Gerenciar membros do portal',
        intro: 'Use membros no Portal de Afiliados para moderar o status dos membros da academia. Esta área é orientada por status, não apenas uma lista simples.',
        jobs_title: 'Principais tarefas',
        jobs_items: [
          'Revisar Pending Users, Recently Accepted, contas de responsáveis, membros adultos, usuários rejeitados e usuários banidos.',
          'Usar Accept, Reject e Ban para o trabalho de moderação.',
          'Usar adicionar membro por email para vincular uma conta existente por email.',
          'Usar retomar cadastro para continuar um fluxo de responsável que ficou pendente.'
        ],
        labels_title: 'Rótulos atuais que você pode ver',
        labels_items: ['Membros', 'Lista de membros', 'Adicionar membro por email', 'Aceitar', 'Recusar', 'Banir', 'Retomar cadastro', 'Pendente, Aceito, Rejeitado, Banido'],
        confusion_title: 'Confusões comuns',
        confusion_items: [
          'Adicionar membro por email só funciona para uma conta que já existe.',
          'Recusar um responsável pode ser bloqueado se contas dependentes ainda estiverem aceitas.',
          'A recusa também pode ser bloqueada se a conta ainda tiver um cartão ativo.',
          'Esta página também é o ponto de recuperação para um registro interrompido, não apenas uma tela de moderação.'
        ],
        next_title: 'Próximo passo',
        register_link: 'Registrar',
        cards_link: 'Cartões',
        support_desc: 'Use o fórum do Affiliate Portal para dúvidas sobre status de membros, moderação de responsáveis/dependentes ou problemas ao vincular uma conta existente por email.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      ranks: {
        badge: 'Portal',
        title: 'Gerenciar graduações e programas',
        intro: 'Use Ranks no Portal de Afiliados para configurar programas de graduação da academia e atualizar a progressão dos membros. Agora este é um fluxo com vários programas, não uma única configuração global de graduação.',
        jobs_title: 'Principais tarefas',
        jobs_items: [
          'Crie primeiro o perfil de membro do dono se ele ainda não existir.',
          'Use Add Program e Save Systems para configurar programas de artes marciais e sistemas de graduação.',
          'Use Enroll Member e Remove from Program para controlar quem pertence a cada programa.',
          'Atualize graduação e stripes, depois confirme as mudanças quando o modal de revisão aparecer.'
        ],
        labels_title: 'Rótulos atuais que você pode ver',
        labels_items: ['Ranks', 'Create profile', 'Add Program', 'Save Systems', 'Remove Program', 'Enroll Member', 'Remove from Program', 'Save', 'Review Change', 'Confirm Change'],
        know_title: 'O que saber',
        know_items: [
          'Apenas membros aceitos aparecem aqui.',
          'A participação em roster pode variar de um programa de arte marcial para outro.',
          'Algumas mudanças de graduação exigem uma etapa de revisão com tipo de mudança e notas antes de serem salvas.',
          'As mudanças registradas aqui alimentam os dados de progressão que o app lê e exibe.'
        ],
        next_title: 'Próximo passo',
        members_link: 'Membros',
        analytics_link: 'Analytics',
        support_desc: 'Use o fórum do Affiliate Portal para dúvidas sobre configuração de programas de graduação, problemas de inscrição em roster ou problemas com o modal de revisão em Ranks.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      cards: {
        badge: 'Portal',
        title: 'Usar cartões no portal',
        intro: 'Use cartões no Portal de Afiliados quando precisar do fluxo web completo de cartões: modelos, atribuição, gestão de cartões ativos, controles de pausa e histórico.',
        areas_title: 'Principais áreas de cartões',
        areas_items: [
          'Templates para criar, editar e excluir modelos de cartões.',
          'Assign para emitir um cartão a um membro aceito.',
          'Active para estado do cartão ao vivo, trabalho de pausa e ações de exclusão ou expiração.',
          'History para revisar emissão, exclusão e auditoria.'
        ],
        labels_title: 'Rótulos atuais que você pode ver',
        labels_items: [
          'Templates, Assign, Active, History',
          'New Template, Create, Update',
          'Issue Card, Manage, Delete',
          'Pause Academy, Unpause Academy, Pause Member, Unpause Member',
          'View Plans'
        ],
        know_title: 'O que saber',
        know_items: [
          'Você não pode excluir um modelo que ainda tenha cartões ativos.',
          'Se a academia estiver pausada, a gestão individual de cartões fica bloqueada.',
          'Os controles de pausa e retomada exigem a ferramenta paga Pause.',
          'Excluir um cartão tem comportamentos diferentes para Expire e Cancel, e Cancel pode exigir um motivo.',
          'Os cartões emitidos no Portal de Afiliados são os cartões reais usados pelo app em reservas, desconto de presença/sessão e estado do cartão do membro.'
        ],
        next_title: 'Próximo passo',
        members_link: 'Membros',
        pause_link: 'Pausa de cartões',
        app_cards_link: 'Cartões no app',
        support_desc: 'Use o fórum do Affiliate Portal para dúvidas sobre modelos, emissão, cartões ativos, pausa ou histórico na seção Cards do Portal de Afiliados.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      },
      reports: {
        badge: 'Portal',
        title: 'Revisar relatórios do portal',
        intro: 'Use Relatórios no Portal de Afiliados para revisar relatórios financeiros mensais que já foram gerados pelo sistema. Esta página é somente leitura.',
        flow_title: 'Como funciona',
        flow_items: [
          'Se você puder acessar mais de uma academia, escolha primeiro a academia.',
          'Use o filtro de ano e pressione Apply.',
          'Abra os cartões mensais de relatório para revisar os dados gerados.'
        ],
        access_title: 'Acesso e entitlement',
        access_items: [
          'Donos normalmente podem acessar Relatórios.',
          'Funcionários que não são donos só podem acessar Relatórios se tiverem recebido acesso a relatórios.',
          'Se o entitlement de Analytics estiver desligado, esta página mostra um estado bloqueado em vez dos dados.'
        ],
        know_title: 'O que saber',
        know_items: [
          'O Portal de Afiliados não está calculando os relatórios ao vivo nesta tela.',
          'Os dados do relatório vêm do pipeline mais amplo de análises e do sistema.',
          'Se você vir um estado bloqueado, vá para a página de recursos.'
        ],
        support_desc: 'Use o fórum do Affiliate Portal para problemas de acesso a relatórios, estados bloqueados de Analytics ou dúvidas sobre relatórios mensais do Portal de Afiliados.',
        support_button: 'Abrir o fórum do Affiliate Portal'
      }
    }
  }
}
