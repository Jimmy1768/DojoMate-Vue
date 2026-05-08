import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Privacy from '../pages/Privacy.vue'
import Deletion from '../pages/Deletion.vue'
import Progression from '../pages/Progression.vue'
import HelpLayout from '../components/HelpLayout.vue'
import HelpLayoutV2 from '../components/HelpLayoutV2.vue'
import HelpLayoutV3 from '../components/HelpLayoutV3.vue'
import HelpWelcome from '../pages/HelpWelcome.vue'
import HelpWelcomeV2 from '../pages/HelpWelcomeV2.vue'
import HelpWelcomeV3 from '../pages/HelpWelcomeV3.vue'
import RoleHubV3 from '../pages/help-v3/RoleHubV3.vue'
import TopicPageV3 from '../pages/help-v3/TopicPageV3.vue'
import OwnerHomeV2 from '../pages/help-v2/OwnerHomeV2.vue'
import AdminHomeV2 from '../pages/help-v2/AdminHomeV2.vue'
import StudentHomeV2 from '../pages/help-v2/StudentHomeV2.vue'
import SignInV2 from '../pages/help-v2/SignInV2.vue'
import CreateAccountV2 from '../pages/help-v2/CreateAccountV2.vue'
import ResetPasswordV2 from '../pages/help-v2/ResetPasswordV2.vue'
import TroubleshootingV2 from '../pages/help-v2/TroubleshootingV2.vue'
import ChangePasswordV2 from '../pages/help-v2/ChangePasswordV2.vue'
import LanguageV2 from '../pages/help-v2/LanguageV2.vue'
import CurrencyV2 from '../pages/help-v2/CurrencyV2.vue'
import PrivacySettingsV2 from '../pages/help-v2/PrivacySettingsV2.vue'
import DeleteAccountSettingsV2 from '../pages/help-v2/DeleteAccountSettingsV2.vue'
import LogoutV2 from '../pages/help-v2/LogoutV2.vue'
import EditProfileV2 from '../pages/help-v2/EditProfileV2.vue'
import ChildAccountsV2 from '../pages/help-v2/ChildAccountsV2.vue'
import JoinAcademyV2 from '../pages/help-v2/JoinAcademyV2.vue'
import MembershipsV2 from '../pages/help-v2/MembershipsV2.vue'
import BookingStudentV2 from '../pages/help-v2/BookingStudentV2.vue'
import SystemAlertsV2 from '../pages/help-v2/SystemAlertsV2.vue'
import StudentBroadcastV2 from '../pages/help-v2/StudentBroadcastV2.vue'
import AttendanceRecordsStudentV2 from '../pages/help-v2/AttendanceRecordsStudentV2.vue'
import BusinessOverviewV2 from '../pages/help-v2/BusinessOverviewV2.vue'
import BusinessComparisonV2 from '../pages/help-v2/BusinessComparisonV2.vue'
import InstructorsV2 from '../pages/help-v2/InstructorsV2.vue'
import StaffAccessV2 from '../pages/help-v2/StaffAccessV2.vue'
import AnalyticsV2 from '../pages/help-v2/AnalyticsV2.vue'
import ScheduleOverviewV2 from '../pages/help-v2/ScheduleOverviewV2.vue'
import CreateLessonV2 from '../pages/help-v2/CreateLessonV2.vue'
import ManageLessonV2 from '../pages/help-v2/ManageLessonV2.vue'
import BookForStudentsV2 from '../pages/help-v2/BookForStudentsV2.vue'
import CardsOverviewV2 from '../pages/help-v2/CardsOverviewV2.vue'
import CardsBookingFlowV2 from '../pages/help-v2/CardsBookingFlowV2.vue'
import CreateCardTemplateV2 from '../pages/help-v2/CreateCardTemplateV2.vue'
import IssueCardsV2 from '../pages/help-v2/IssueCardsV2.vue'
import EditCardTemplatesV2 from '../pages/help-v2/EditCardTemplatesV2.vue'
import DeleteCardTemplatesV2 from '../pages/help-v2/DeleteCardTemplatesV2.vue'
import DeleteCardsV2 from '../pages/help-v2/DeleteCardsV2.vue'
import CardDisputesV2 from '../pages/help-v2/CardDisputesV2.vue'
import MembersOverviewV2 from '../pages/help-v2/MembersOverviewV2.vue'
import QuickEnrollmentV2 from '../pages/help-v2/QuickEnrollmentV2.vue'
import ApplicationsV2 from '../pages/help-v2/ApplicationsV2.vue'
import RejectOrBanMembersV2 from '../pages/help-v2/RejectOrBanMembersV2.vue'
import ToolsOverviewV2 from '../pages/help-v2/ToolsOverviewV2.vue'
import ActivateToolsV2 from '../pages/help-v2/ActivateToolsV2.vue'
import TimetableV2 from '../pages/help-v2/TimetableV2.vue'
import PauseCardsV2 from '../pages/help-v2/PauseCardsV2.vue'
import BroadcastV2 from '../pages/help-v2/BroadcastV2.vue'
import GettingStartedOwnerV2 from '../pages/help-v2/GettingStartedOwnerV2.vue'
import EnrollmentVsApplicationsV2 from '../pages/help-v2/EnrollmentVsApplicationsV2.vue'
import PortalOverviewV2 from '../pages/help-v2/PortalOverviewV2.vue'
import PortalRegisterV2 from '../pages/help-v2/PortalRegisterV2.vue'
import PortalMembersV2 from '../pages/help-v2/PortalMembersV2.vue'
import PortalRanksV2 from '../pages/help-v2/PortalRanksV2.vue'
import PortalCardsV2 from '../pages/help-v2/PortalCardsV2.vue'
import PortalReportsV2 from '../pages/help-v2/PortalReportsV2.vue'
import PortalCloudUsageV2 from '../pages/help-v2/PortalCloudUsageV2.vue'
import PortalPayoutsV2 from '../pages/help-v2/PortalPayoutsV2.vue'
import CreateAcademyV2 from '../pages/help-v2/CreateAcademyV2.vue'
import AcademyBasicsV2 from '../pages/help-v2/AcademyBasicsV2.vue'
import AcademyQRV2 from '../pages/help-v2/AcademyQRV2.vue'
import DeleteAcademyV2 from '../pages/help-v2/DeleteAcademyV2.vue'

// Account pages
import SignIn from '../pages/account/SignIn.vue'
import CreateAccount from '../pages/account/CreateAccount.vue'
import ResetPassword from '../pages/account/ResetPassword.vue'
import Troubleshooting from '../pages/account/Troubleshooting.vue'

// Settings pages
import ChangePassword from '../pages/settings/ChangePassword.vue'
import Language from '../pages/settings/Language.vue'
import Currency from '../pages/settings/Currency.vue'
import Logout from '../pages/settings/Logout.vue'
import PrivacySettings from '../pages/settings/PrivacySettings.vue'
import DeleteAccount from '../pages/settings/DeleteAccount.vue'

// Profile pages
import EditProfile from '../pages/profile/EditProfile.vue'
import ChildAccounts from '../pages/profile/ChildAccounts.vue'

// Academy (Member) pages
import JoinAcademy from '../pages/academy/JoinAcademy.vue'
import ManagingMemberships from '../pages/academy/ManagingMemberships.vue'
import Booking from '../pages/academy/Booking.vue'
import SystemMessages from '../pages/academy/SystemMessages.vue'
import AttendanceRecords from '../pages/academy/AttendanceRecords.vue'

// Business (Owner) pages
import CreateAcademy from '../pages/business/CreateAcademy.vue'
import AcademyBasics from '../pages/business/AcademyBasics.vue'
import AcademyQR from '../pages/business/AcademyQR.vue'
import DeleteAcademy from '../pages/business/DeleteAcademy.vue'
import AddInstructor from '../pages/business/AddInstructor.vue'
import PortalPrologue from '../pages/portal/Prologue.vue'
import PortalCards from '../pages/portal/Cards.vue'
import PortalMembers from '../pages/portal/Members.vue'
import PortalRanks from '../pages/portal/Ranks.vue'
import PortalReports from '../pages/portal/Reports.vue'
import PortalRegister from '../pages/portal/Register.vue'

// Cards (Admin) pages
import CreateTemplate from '../pages/cards/CreateTemplate.vue'
import EditTemplates from '../pages/cards/EditTemplates.vue'
import DeleteTemplates from '../pages/cards/DeleteTemplates.vue'
import IssueCards from '../pages/cards/IssueCards.vue'
import ManageCards from '../pages/cards/ManageCards.vue'
import DeleteCards from '../pages/cards/DeleteCards.vue'
import CardRecords from '../pages/cards/CardRecords.vue'

// Members (Admin) pages
import Enrollment from '../pages/members/Enrollment.vue'
import Applications from '../pages/members/Applications.vue'
import Rejection from '../pages/members/Rejection.vue'
import MemberRecords from '../pages/members/Records.vue'

// Schedule pages
import CreateLesson from '../pages/schedule/CreateLesson.vue'
import ManageLesson from '../pages/schedule/ManageLesson.vue'
import BookForStudents from '../pages/schedule/BookForStudents.vue'

// Paid Tools pages
import Prologue from '../pages/tools/Prologue.vue'
import Timetable from '../pages/tools/Timetable.vue'
import PauseCards from '../pages/tools/PauseCards.vue'
import StaffPermissions from '../pages/tools/StaffPermissions.vue'
import AnalyticsOverview from '../pages/tools/AnalyticsOverview.vue'
import AnalyticsWages from '../pages/tools/AnalyticsWages.vue'
import AnalyticsPunchCards from '../pages/tools/AnalyticsPunchCards.vue'

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

const v3RoleHubs = [
  { path: 'member', icon: 'members', baseKey: 'help_v3.member.home' },
  { path: 'admin', icon: 'access', baseKey: 'help_v3.admin.home' },
  { path: 'owner', icon: 'business', baseKey: 'help_v3.owner.home' },
  { path: 'account', icon: 'members', baseKey: 'help_v3.account.home' }
]

const v3TopicRoutes = [
  { path: 'member/join-academy', icon: 'members', baseKey: 'help_v3.member.join_academy' },
  { path: 'member/memberships', icon: 'members', baseKey: 'help_v3.member.memberships' },
  { path: 'member/cards', icon: 'cards', baseKey: 'help_v3.member.cards' },
  { path: 'member/card-disputes', icon: 'cards', baseKey: 'help_v3.member.card_disputes' },
  { path: 'member/booking', icon: 'schedule', baseKey: 'help_v3.member.booking' },
  { path: 'member/attendance-records', icon: 'members', baseKey: 'help_v3.member.attendance_records' },
  { path: 'member/system-alerts', icon: 'members', baseKey: 'help_v3.member.system_alerts' },
  { path: 'member/broadcasts', icon: 'broadcast', baseKey: 'help_v3.member.broadcasts' },
  { path: 'member/online-learning', icon: 'tools', baseKey: 'help_v3.member.online_learning' },
  { path: 'member/events', icon: 'schedule', baseKey: 'help_v3.member.events' },
  { path: 'admin/academy-context', icon: 'access', baseKey: 'help_v3.admin.academy_context' },
  { path: 'admin/members', icon: 'members', baseKey: 'help_v3.admin.members' },
  { path: 'admin/cards', icon: 'cards', baseKey: 'help_v3.admin.cards' },
  { path: 'admin/session-debt', icon: 'cards', baseKey: 'help_v3.admin.session_debt' },
  { path: 'admin/lessons', icon: 'schedule', baseKey: 'help_v3.admin.lessons' },
  { path: 'admin/schedule', icon: 'schedule', baseKey: 'help_v3.admin.schedule' },
  { path: 'admin/admin-booking', icon: 'schedule', baseKey: 'help_v3.admin.admin_booking' },
  { path: 'admin/broadcasts', icon: 'broadcast', baseKey: 'help_v3.admin.broadcasts' },
  { path: 'admin/alerts-qr', icon: 'members', baseKey: 'help_v3.admin.alerts_qr' },
  { path: 'owner/create-academy', icon: 'business', baseKey: 'help_v3.owner.create_academy' },
  { path: 'owner/onboarding', icon: 'getting-started', baseKey: 'help_v3.owner.onboarding' },
  { path: 'owner/business-management', icon: 'business', baseKey: 'help_v3.owner.business_management' },
  { path: 'owner/instructors', icon: 'instructors', baseKey: 'help_v3.owner.instructors' },
  { path: 'owner/access', icon: 'access', baseKey: 'help_v3.owner.access' },
  { path: 'owner/operations-analytics', icon: 'analytics', baseKey: 'help_v3.owner.operations_analytics' },
  { path: 'owner/timesheets-salaries', icon: 'analytics', baseKey: 'help_v3.owner.timesheets_salaries' },
  { path: 'owner/oversight', icon: 'cards', baseKey: 'help_v3.owner.oversight' },
  { path: 'owner/tools', icon: 'tools', baseKey: 'help_v3.owner.tools' },
  { path: 'account/sign-in', icon: 'members', baseKey: 'help_v3.account.sign_in' },
  { path: 'account/create-account', icon: 'members', baseKey: 'help_v3.account.create_account' },
  { path: 'account/reset-password', icon: 'members', baseKey: 'help_v3.account.reset_password' },
  { path: 'account/change-password', icon: 'members', baseKey: 'help_v3.account.change_password' },
  { path: 'account/profile', icon: 'members', baseKey: 'help_v3.account.profile' },
  { path: 'account/child-accounts', icon: 'members', baseKey: 'help_v3.account.child_accounts' },
  { path: 'account/privacy-progression', icon: 'members', baseKey: 'help_v3.account.privacy_progression' },
  { path: 'account/preferences', icon: 'members', baseKey: 'help_v3.account.preferences' },
  { path: 'account/delete-account', icon: 'members', baseKey: 'help_v3.account.delete_account' },
  { path: 'account/logout', icon: 'members', baseKey: 'help_v3.account.logout' }
]

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
