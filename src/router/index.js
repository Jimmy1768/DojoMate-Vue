import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HelpLayout from '../components/HelpLayout.vue'
import HelpWelcome from '../pages/HelpWelcome.vue'

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

// Cards (Admin) pages
import CreateTemplate from '../pages/cards/CreateTemplate.vue'
import EditTemplates from '../pages/cards/EditTemplates.vue'
import DeleteTemplates from '../pages/cards/DeleteTemplates.vue'
import IssueCards from '../pages/cards/IssueCards.vue'
import ManageCards from '../pages/cards/ManageCards.vue'
import DeleteCards from '../pages/cards/DeleteCards.vue'
import CardRecords from '../pages/cards/CardRecords.vue'

// Members (Admin) pages
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

    {
      path: '/help',
      name: 'help',
      component: HelpLayout,
      children: [
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

        // Cards (Admin)
        { path: 'cards/create-template', component: CreateTemplate },
        { path: 'cards/edit-templates', component: EditTemplates },
        { path: 'cards/delete-templates', component: DeleteTemplates },
        { path: 'cards/issue-cards', component: IssueCards },
        { path: 'cards/manage-cards', component: ManageCards },
        { path: 'cards/delete-cards', component: DeleteCards },
        { path: 'cards/records', component: CardRecords },

        // Members (Admin)
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
    },

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router