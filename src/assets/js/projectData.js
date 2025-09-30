import auditLogs from '../img/audit-logs.png'
import POS from '../img/POS-page.png'
import productsPage from '../img/product-page.png'
import dashboardPage from '../img/dashboard-page.png'
import salesLog from '../img/sales-log.png'
import ragpresCampaign from '../img/ragpres-campaign.png'
import ragpresDashboard from '../img/ragpres-dashboard.png'
import ragpresRanking from '../img/ragpres-ranking.png'
import ragpresSales from '../img/ragpres-sales.png'
import ragpresShop from '../img/ragpres-shop.png'
import metricsAccount from '../img/metrics-account.png'
import metricsDashboard from '../img/metrics-dashboard.png'
import metricsInfo from '../img/metrics-info.png'
import metricsLogin from '../img/metrics-login.png'
import metricsTeacher from '../img/metrics-teacher.png'
import fretmusScales from '../img/fretmuse-scales.png'
import fretmuseSpeech from '../img/fretmuse-speech.png'
import fretmuse from '../img/fretmuse.png'
import gymLogin from '../img/gym-login.png'
import gymDashboard from '../img/gym-dashboard.png'
import gymMonthly from '../img/gym-monthly.png'
import gymDaily from '../img/gym-daily.png'
import gymProducts from '../img/gym-products.png'
import schedulerConfig from '../img/scheduler-config.png'
import schedulerEvent from '../img/scheduler-event.png'
import schedulerResolve from '../img/scheduler-resolve.png'
import schedulerSched from '../img/scheduler-schedules.png'
import schedulerSms from '../img/scheduler-sms.png'

export const projects = [
    {
        title: 'Rosejing Secure Inventory & Semi-POS Management System',
        imgPaths: [dashboardPage, productsPage, POS, auditLogs, salesLog],
        alt: 'Inventory POS System',
        style: 'w-full h-full object-cover'
    },
    {
        title: 'SCSHS Web Based Scheduler System with Automated Conflict Resolution',
        imgPaths: [schedulerEvent, schedulerResolve, schedulerSms, schedulerSched],
        alt: 'Scheduler System',
        style: 'w-full h-full object-cover'
    },
    {
        title: 'Recycled and Greenery - Points Reward Exchanged System',
        imgPaths: [ragpresDashboard, ragpresCampaign, ragpresRanking, ragpresSales, ragpresShop],
        alt: 'Barangay Community System',
        style: 'w-full h-full object-cover'
    },
    {
        title: 'Student Performance Metrics Management System',
        imgPaths: [metricsLogin, metricsDashboard, metricsInfo, metricsTeacher, metricsAccount],
        alt: 'School System',
        style: 'w-full h-full object-cover'
    },
    {
        title: 'Fret Muse',
        imgPaths: [fretmuse, fretmuseSpeech, fretmusScales],
        alt: 'Guitar Mastery Website',
        style: 'w-full h-full object-cover'
    },
    {
        title: 'Muscle Hub',
        imgPaths: [gymLogin, gymDashboard, gymMonthly, gymDaily, gymProducts],
        alt: 'Gym Website',
        style: 'w-full h-full object-cover'
    },
]