import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/Home.vue')
const Privacy = () => import('../pages/Privacy.vue')
const Deletion = () => import('../pages/Deletion.vue')
const Progression = () => import('../pages/Progression.vue')
const HelpLayout = () => import('../components/HelpLayout.vue')
const HelpLayoutV2 = () => import('../components/HelpLayoutV2.vue')
const HelpLayoutV3 = () => import('../components/HelpLayoutV3.vue')
const HelpWelcome = () => import('../pages/HelpWelcome.vue')
const HelpWelcomeV2 = () => import('../pages/HelpWelcomeV2.vue')
const HelpWelcomeV3 = () => import('../pages/HelpWelcomeV3.vue')
const RoleHubV3 = () => import('../pages/help-v3/RoleHubV3.vue')
const TopicPageV3 = () => import('../pages/help-v3/TopicPageV3.vue')
const OwnerHomeV2 = () => import('../pages/help-v2/OwnerHomeV2.vue')
const AdminHomeV2 = () => import('../pages/help-v2/AdminHomeV2.vue')
const StudentHomeV2 = () => import('../pages/help-v2/StudentHomeV2.vue')
const SignInV2 = () => import('../pages/help-v2/SignInV2.vue')
const CreateAccountV2 = () => import('../pages/help-v2/CreateAccountV2.vue')
const ResetPasswordV2 = () => import('../pages/help-v2/ResetPasswordV2.vue')
const TroubleshootingV2 = () => import('../pages/help-v2/TroubleshootingV2.vue')
const ChangePasswordV2 = () => import('../pages/help-v2/ChangePasswordV2.vue')
const LanguageV2 = () => import('../pages/help-v2/LanguageV2.vue')
const CurrencyV2 = () => import('../pages/help-v2/CurrencyV2.vue')
const PrivacySettingsV2 = () => import('../pages/help-v2/PrivacySettingsV2.vue')
const DeleteAccountSettingsV2 = () => import('../pages/help-v2/DeleteAccountSettingsV2.vue')
const LogoutV2 = () => import('../pages/help-v2/LogoutV2.vue')
const EditProfileV2 = () => import('../pages/help-v2/EditProfileV2.vue')
const ChildAccountsV2 = () => import('../pages/help-v2/ChildAccountsV2.vue')
const JoinAcademyV2 = () => import('../pages/help-v2/JoinAcademyV2.vue')
const MembershipsV2 = () => import('../pages/help-v2/MembershipsV2.vue')
const BookingStudentV2 = () => import('../pages/help-v2/BookingStudentV2.vue')
const SystemAlertsV2 = () => import('../pages/help-v2/SystemAlertsV2.vue')
const StudentBroadcastV2 = () => import('../pages/help-v2/StudentBroadcastV2.vue')
const AttendanceRecordsStudentV2 = () => import('../pages/help-v2/AttendanceRecordsStudentV2.vue')
const BusinessOverviewV2 = () => import('../pages/help-v2/BusinessOverviewV2.vue')
const BusinessComparisonV2 = () => import('../pages/help-v2/BusinessComparisonV2.vue')
const InstructorsV2 = () => import('../pages/help-v2/InstructorsV2.vue')
const StaffAccessV2 = () => import('../pages/help-v2/StaffAccessV2.vue')
const AnalyticsV2 = () => import('../pages/help-v2/AnalyticsV2.vue')
const ScheduleOverviewV2 = () => import('../pages/help-v2/ScheduleOverviewV2.vue')
const CreateLessonV2 = () => import('../pages/help-v2/CreateLessonV2.vue')
const ManageLessonV2 = () => import('../pages/help-v2/ManageLessonV2.vue')
const BookForStudentsV2 = () => import('../pages/help-v2/BookForStudentsV2.vue')
const CardsOverviewV2 = () => import('../pages/help-v2/CardsOverviewV2.vue')
const CardsBookingFlowV2 = () => import('../pages/help-v2/CardsBookingFlowV2.vue')
const CreateCardTemplateV2 = () => import('../pages/help-v2/CreateCardTemplateV2.vue')
const IssueCardsV2 = () => import('../pages/help-v2/IssueCardsV2.vue')
const EditCardTemplatesV2 = () => import('../pages/help-v2/EditCardTemplatesV2.vue')
const DeleteCardTemplatesV2 = () => import('../pages/help-v2/DeleteCardTemplatesV2.vue')
const DeleteCardsV2 = () => import('../pages/help-v2/DeleteCardsV2.vue')
const CardDisputesV2 = () => import('../pages/help-v2/CardDisputesV2.vue')
const MembersOverviewV2 = () => import('../pages/help-v2/MembersOverviewV2.vue')
const QuickEnrollmentV2 = () => import('../pages/help-v2/QuickEnrollmentV2.vue')
const ApplicationsV2 = () => import('../pages/help-v2/ApplicationsV2.vue')
const RejectOrBanMembersV2 = () => import('../pages/help-v2/RejectOrBanMembersV2.vue')
const ToolsOverviewV2 = () => import('../pages/help-v2/ToolsOverviewV2.vue')
const ActivateToolsV2 = () => import('../pages/help-v2/ActivateToolsV2.vue')
const TimetableV2 = () => import('../pages/help-v2/TimetableV2.vue')
const PauseCardsV2 = () => import('../pages/help-v2/PauseCardsV2.vue')
const BroadcastV2 = () => import('../pages/help-v2/BroadcastV2.vue')
const GettingStartedOwnerV2 = () => import('../pages/help-v2/GettingStartedOwnerV2.vue')
const EnrollmentVsApplicationsV2 = () => import('../pages/help-v2/EnrollmentVsApplicationsV2.vue')
const PortalOverviewV2 = () => import('../pages/help-v2/PortalOverviewV2.vue')
const PortalRegisterV2 = () => import('../pages/help-v2/PortalRegisterV2.vue')
const PortalMembersV2 = () => import('../pages/help-v2/PortalMembersV2.vue')
const PortalRanksV2 = () => import('../pages/help-v2/PortalRanksV2.vue')
const PortalCardsV2 = () => import('../pages/help-v2/PortalCardsV2.vue')
const PortalReportsV2 = () => import('../pages/help-v2/PortalReportsV2.vue')
const PortalCloudUsageV2 = () => import('../pages/help-v2/PortalCloudUsageV2.vue')
const PortalPayoutsV2 = () => import('../pages/help-v2/PortalPayoutsV2.vue')
const CreateAcademyV2 = () => import('../pages/help-v2/CreateAcademyV2.vue')
const AcademyBasicsV2 = () => import('../pages/help-v2/AcademyBasicsV2.vue')
const AcademyQRV2 = () => import('../pages/help-v2/AcademyQRV2.vue')
const DeleteAcademyV2 = () => import('../pages/help-v2/DeleteAcademyV2.vue')
import { v3RoleHubs, v3TopicRoutes } from '../help-v3/routes'

// Account pages
const SignIn = () => import('../pages/account/SignIn.vue')
const CreateAccount = () => import('../pages/account/CreateAccount.vue')
const ResetPassword = () => import('../pages/account/ResetPassword.vue')
const Troubleshooting = () => import('../pages/account/Troubleshooting.vue')

// Settings pages
const ChangePassword = () => import('../pages/settings/ChangePassword.vue')
const Language = () => import('../pages/settings/Language.vue')
const Currency = () => import('../pages/settings/Currency.vue')
const Logout = () => import('../pages/settings/Logout.vue')
const PrivacySettings = () => import('../pages/settings/PrivacySettings.vue')
const DeleteAccount = () => import('../pages/settings/DeleteAccount.vue')

// Profile pages
const EditProfile = () => import('../pages/profile/EditProfile.vue')
const ChildAccounts = () => import('../pages/profile/ChildAccounts.vue')

// Academy (Member) pages
const JoinAcademy = () => import('../pages/academy/JoinAcademy.vue')
const ManagingMemberships = () => import('../pages/academy/ManagingMemberships.vue')
const Booking = () => import('../pages/academy/Booking.vue')
const SystemMessages = () => import('../pages/academy/SystemMessages.vue')
const AttendanceRecords = () => import('../pages/academy/AttendanceRecords.vue')

// Business (Owner) pages
const CreateAcademy = () => import('../pages/business/CreateAcademy.vue')
const AcademyBasics = () => import('../pages/business/AcademyBasics.vue')
const AcademyQR = () => import('../pages/business/AcademyQR.vue')
const DeleteAcademy = () => import('../pages/business/DeleteAcademy.vue')
const AddInstructor = () => import('../pages/business/AddInstructor.vue')
const PortalPrologue = () => import('../pages/portal/Prologue.vue')
const PortalCards = () => import('../pages/portal/Cards.vue')
const PortalMembers = () => import('../pages/portal/Members.vue')
const PortalRanks = () => import('../pages/portal/Ranks.vue')
const PortalReports = () => import('../pages/portal/Reports.vue')
const PortalRegister = () => import('../pages/portal/Register.vue')

// Cards (Admin) pages
const CreateTemplate = () => import('../pages/cards/CreateTemplate.vue')
const EditTemplates = () => import('../pages/cards/EditTemplates.vue')
const DeleteTemplates = () => import('../pages/cards/DeleteTemplates.vue')
const IssueCards = () => import('../pages/cards/IssueCards.vue')
const ManageCards = () => import('../pages/cards/ManageCards.vue')
const DeleteCards = () => import('../pages/cards/DeleteCards.vue')
const CardRecords = () => import('../pages/cards/CardRecords.vue')

// Members (Admin) pages
const Enrollment = () => import('../pages/members/Enrollment.vue')
const Applications = () => import('../pages/members/Applications.vue')
const Rejection = () => import('../pages/members/Rejection.vue')
const MemberRecords = () => import('../pages/members/Records.vue')

// Schedule pages
const CreateLesson = () => import('../pages/schedule/CreateLesson.vue')
const ManageLesson = () => import('../pages/schedule/ManageLesson.vue')
const BookForStudents = () => import('../pages/schedule/BookForStudents.vue')

// Paid Tools pages
const Prologue = () => import('../pages/tools/Prologue.vue')
const Timetable = () => import('../pages/tools/Timetable.vue')
const PauseCards = () => import('../pages/tools/PauseCards.vue')
const StaffPermissions = () => import('../pages/tools/StaffPermissions.vue')
const AnalyticsOverview = () => import('../pages/tools/AnalyticsOverview.vue')
const AnalyticsWages = () => import('../pages/tools/AnalyticsWages.vue')
const AnalyticsPunchCards = () => import('../pages/tools/AnalyticsPunchCards.vue')

const helpChildren = [
  { path: '', component: HelpWelcome },

  // Account
  { path: 'account/sign-in', component: SignIn },
  { path: 'account/create-account', component: CreateAccount },
  { path: 'account/reset-password', component: ResetPassword },
  { path: 'account/troubleshooting', component: Troubleshooting },

  // Settings
  { path: 'settings/change-password', component: ChangePassword },
  { path: 'settings/language', component: Language },
  { path: 'settings/currency', component: Currency },
  { path: 'settings/logout', component: Logout },
  { path: 'settings/privacy-settings', component: PrivacySettings },
  { path: 'settings/delete-account', component: DeleteAccount },

  // Profile
  { path: 'profile/edit-profile', component: EditProfile },
  { path: 'profile/child-accounts', component: ChildAccounts },

  // Academy (Member)
  { path: 'academy/join-academy', component: JoinAcademy },
  { path: 'academy/memberships', component: ManagingMemberships },
  { path: 'academy/booking', component: Booking },
  { path: 'academy/messages', component: SystemMessages },
  { path: 'academy/records', component: AttendanceRecords },

  // Business (Owner)
  { path: 'business/create-academy', component: CreateAcademy },
  { path: 'business/academy-basics', component: AcademyBasics },
  { path: 'business/academy-qr', component: AcademyQR },
  { path: 'business/delete-academy', component: DeleteAcademy },
  { path: 'business/add-instructor', component: AddInstructor },

  // Affiliate Portal
  { path: 'portal/prologue', component: PortalPrologue },
  { path: 'portal/register', component: PortalRegister },
  { path: 'portal/members', component: PortalMembers },
  { path: 'portal/ranks', component: PortalRanks },
  { path: 'portal/cards', component: PortalCards },
  { path: 'portal/reports', component: PortalReports },

  // Cards (Admin)
  { path: 'cards/create-template', component: CreateTemplate },
  { path: 'cards/edit-templates', component: EditTemplates },
  { path: 'cards/delete-templates', component: DeleteTemplates },
  { path: 'cards/issue-cards', component: IssueCards },
  { path: 'cards/manage-cards', component: ManageCards },
  { path: 'cards/delete-cards', component: DeleteCards },
  { path: 'cards/records', component: CardRecords },

  // Members (Admin)
  { path: 'members/enrollment', component: Enrollment },
  { path: 'members/applications', component: Applications },
  { path: 'members/rejection', component: Rejection },
  { path: 'members/records', component: MemberRecords },

  // Schedule
  { path: 'schedule/create-lesson', component: CreateLesson },
  { path: 'schedule/manage-lesson', component: ManageLesson },
  { path: 'schedule/book-for-students', component: BookForStudents },

  // Paid Tools
  { path: 'tools/prologue', component: Prologue },
  { path: 'tools/timetable', component: Timetable },
  { path: 'tools/pause-cards', component: PauseCards },
  { path: 'tools/staff-permissions', component: StaffPermissions },
  { path: 'tools/analytics-overview', component: AnalyticsOverview },
  { path: 'tools/analytics-wages', component: AnalyticsWages },
  { path: 'tools/analytics-punch-cards', component: AnalyticsPunchCards },
]

function normalizeLegacyHelpPath(pathMatch) {
  if (Array.isArray(pathMatch)) return pathMatch.join('/')
  return pathMatch || ''
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },

  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/privacy', name: 'privacy', component: Privacy },
    { path: '/deletion', name: 'deletion', component: Deletion },
    { path: '/progression', name: 'progression', component: Progression},
    {
      path: '/help-v1',
      name: 'help-v1',
      component: HelpLayout,
      children: helpChildren
    },
    {
      path: '/help-v2',
      name: 'help-v2',
      component: HelpLayoutV2,
      children: [
        { path: '', component: HelpWelcomeV2 },
        { path: 'owner', component: OwnerHomeV2 },
        { path: 'admin', component: AdminHomeV2 },
        { path: 'student', component: StudentHomeV2 },
        { path: 'account/sign-in', component: SignInV2 },
        { path: 'account/create-account', component: CreateAccountV2 },
        { path: 'account/reset-password', component: ResetPasswordV2 },
        { path: 'account/troubleshooting', component: TroubleshootingV2 },
        { path: 'settings/change-password', component: ChangePasswordV2 },
        { path: 'settings/language', component: LanguageV2 },
        { path: 'settings/currency', component: CurrencyV2 },
        { path: 'settings/privacy-settings', component: PrivacySettingsV2 },
        { path: 'settings/delete-account', component: DeleteAccountSettingsV2 },
        { path: 'settings/logout', component: LogoutV2 },
        { path: 'profile/edit-profile', component: EditProfileV2 },
        { path: 'profile/child-accounts', component: ChildAccountsV2 },
        { path: 'student/join-academy', component: JoinAcademyV2 },
        { path: 'student/memberships', component: MembershipsV2 },
        { path: 'student/booking', component: BookingStudentV2 },
        { path: 'student/system-alerts', component: SystemAlertsV2 },
        { path: 'student/broadcast', component: StudentBroadcastV2 },
        { path: 'student/attendance-records', component: AttendanceRecordsStudentV2 },
        { path: 'getting-started-owner', component: GettingStartedOwnerV2 },
        { path: 'business/create-academy', component: CreateAcademyV2 },
        { path: 'business/academy-basics', component: AcademyBasicsV2 },
        { path: 'business/academy-qr', component: AcademyQRV2 },
        { path: 'business/delete-academy', component: DeleteAcademyV2 },
        { path: 'business', component: BusinessOverviewV2 },
        { path: 'business/compare-pages', component: BusinessComparisonV2 },
        { path: 'business/instructors', component: InstructorsV2 },
        { path: 'business/staff-access', component: StaffAccessV2 },
        { path: 'business/analytics', component: AnalyticsV2 },
        { path: 'portal', component: PortalOverviewV2 },
        { path: 'portal/register', component: PortalRegisterV2 },
        { path: 'portal/members', component: PortalMembersV2 },
        { path: 'portal/ranks', component: PortalRanksV2 },
        { path: 'portal/cards', component: PortalCardsV2 },
        { path: 'portal/reports', component: PortalReportsV2 },
        { path: 'portal/cloud-usage', component: PortalCloudUsageV2 },
        { path: 'portal/payouts', component: PortalPayoutsV2 },
        { path: 'schedule', component: ScheduleOverviewV2 },
        { path: 'schedule/create-lesson', component: CreateLessonV2 },
        { path: 'schedule/manage-lesson', component: ManageLessonV2 },
        { path: 'schedule/book-for-students', component: BookForStudentsV2 },
        { path: 'cards', component: CardsOverviewV2 },
        { path: 'cards/how-booking-works', component: CardsBookingFlowV2 },
        { path: 'cards/create-template', component: CreateCardTemplateV2 },
        { path: 'cards/issue-cards', component: IssueCardsV2 },
        { path: 'cards/edit-templates', component: EditCardTemplatesV2 },
        { path: 'cards/delete-templates', component: DeleteCardTemplatesV2 },
        { path: 'cards/delete-cards', component: DeleteCardsV2 },
        { path: 'cards/disputes', component: CardDisputesV2 },
        { path: 'cards/records', redirect: '/help-v2/cards/disputes' },
        { path: 'members', component: MembersOverviewV2 },
        { path: 'members/quick-enrollment', component: QuickEnrollmentV2 },
        { path: 'members/quick-enrollment-vs-applications', component: EnrollmentVsApplicationsV2 },
        { path: 'members/applications', component: ApplicationsV2 },
        { path: 'members/reject-or-ban', component: RejectOrBanMembersV2 },
        { path: 'tools', component: ToolsOverviewV2 },
        { path: 'tools/activate', component: ActivateToolsV2 },
        { path: 'tools/timetable', component: TimetableV2 },
        { path: 'tools/pause-cards', component: PauseCardsV2 },
        { path: 'tools/broadcast', component: BroadcastV2 }
      ]
    },
    {
      path: '/help-v3',
      name: 'help-v3',
      component: HelpLayoutV3,
      children: [
        { path: '', component: HelpWelcomeV3 },
        ...v3RoleHubs.map((route) => ({
          path: route.path,
          component: RoleHubV3,
          props: {
            baseKey: route.baseKey,
            icon: route.icon
          }
        })),
        ...v3TopicRoutes.map((route) => ({
          path: route.path,
          component: TopicPageV3,
          props: {
            baseKey: route.baseKey,
            icon: route.icon
          }
        }))
      ]
    },
    {
      path: '/help',
      name: 'help',
      redirect: to => ({ path: '/help-v2', query: to.query, hash: to.hash })
    },
    {
      path: '/help/:pathMatch(.*)*',
      redirect: to => {
        const suffix = normalizeLegacyHelpPath(to.params.pathMatch)
        return {
          path: suffix ? `/help-v1/${suffix}` : '/help-v1',
          query: to.query,
          hash: to.hash
        }
      }
    },

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router
