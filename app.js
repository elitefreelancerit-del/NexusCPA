/**
 * ApexCPA Network - Performance Marketing Platform Application Engine
 * Vanilla JavaScript Architecture & Local Demo Store
 */

(function () {
  'use strict';

  // Demo Initial Storage Keys
  const STORAGE_KEY = 'apexcpa_store_v1';
  const THEME_KEY = 'apexcpa_theme_pref';

  const defaultData = {
    user: {
      id: 'AFF-84920',
      name: 'John Sterling',
      email: 'j.sterling@apexaffiliates.io',
      role: 'affiliate', // 'affiliate' | 'admin'
      company: 'Sterling Performance Media LLC',
      skype: 'live:sterling_cpa',
      telegram: '@john_sterling_cpa',
      country: 'United States',
      balance: 842.10,
      totalEarnings: 1248.50,
      clicks: 24850,
      conversions: 386,
      epc: 0.32,
      conversionRate: 1.55,
      payoutMethod: 'USDT (TRC-20)',
      payoutDetails: 'TJz4B8g...3f91Kx',
      minThreshold: 100,
      taxStatus: 'Verified (W-8BEN)',
      manager: {
        name: 'Alex Rivera',
        email: 'alex@apexcpa.network',
        skype: 'live:arivera_apexcpa',
        telegram: '@alex_apexcpa'
      },
      twoFactorEnabled: false,
      loginHistory: [
        { date: '2026-09-28 09:14:22', ip: '198.51.100.42', location: 'San Francisco, US', browser: 'Chrome 128 (macOS)', status: 'Success' },
        { date: '2026-09-27 18:22:05', ip: '198.51.100.89', location: 'San Francisco, US', browser: 'Mobile Safari (iOS)', status: 'Success' },
        { date: '2026-09-26 11:05:40', ip: '185.220.101.5', location: 'Frankfurt, DE', browser: 'Tor Browser', status: 'Blocked (Suspicious)' }
      ],
      sessions: [
        { id: 's1', device: 'Chrome / macOS Sonoma', ip: '198.51.100.42', location: 'San Francisco, US', active: true, lastActive: 'Current Session' },
        { id: 's2', device: 'Safari / iPhone 16 Pro', ip: '198.51.100.89', location: 'San Francisco, US', active: false, lastActive: '4 hours ago' },
        { id: 's3', device: 'Firefox / Windows 11', ip: '203.0.113.19', location: 'Austin, US', active: false, lastActive: '3 days ago' }
      ],
      blockList: ['185.220.101.0/24', 'fraud_botnet_subid_89', 'datacenter_proxy_range']
    },
    offers: [
      {
        id: 1042,
        name: 'NordShield VPN Pro - Global Security',
        category: 'Software',
        geo: 'US, CA, UK, AU',
        payout: 42.00,
        payoutType: 'CPA',
        epc: 1.18,
        conversionType: 'CPA (Sale)',
        trafficType: 'Social, Native, Search, Display',
        status: 'Active',
        featured: true,
        description: 'Industry-leading VPN suite with high conversion funnels and clean recurring renewal upside.',
        previewUrl: 'https://preview.nordshieldvpn.demo/lp/special',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=1042&aff_id=84920',
        terms: 'No adult, no spam, no incent traffic. Brand bidding strictly prohibited.',
        manager: 'Alex Rivera'
      },
      {
        id: 2189,
        name: 'Quantum Flow AI Auto-Trading System',
        category: 'Finance',
        geo: 'UK, DE, FR, IT, AU',
        payout: 450.00,
        payoutType: 'CPA',
        epc: 3.85,
        conversionType: 'CPA (FTD)',
        trafficType: 'Search, Native, Email',
        status: 'Active',
        featured: true,
        description: 'Ultra-high payout financial fintech auto-trader software with premium multilingual sales copy.',
        previewUrl: 'https://preview.quantumflow-ai.demo',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=2189&aff_id=84920',
        terms: 'Strict compliance required. Minimum user deposit $250. No misleading guaranteed returns claims.',
        manager: 'Alex Rivera'
      },
      {
        id: 3051,
        name: 'KetoMax Burn Diet Drops (Direct SS)',
        category: 'Nutra',
        geo: 'US',
        payout: 64.00,
        payoutType: 'CPA',
        epc: 1.42,
        conversionType: 'CPA (Trial/Buy)',
        trafficType: 'Social, Native, Push, Email',
        status: 'Active',
        featured: true,
        description: 'Top-converting dietary supplement formula with high average order value and celebrity advertorials.',
        previewUrl: 'https://preview.ketomaxdiet.demo/checkout',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=3051&aff_id=84920',
        terms: 'No false endorsements. Suppression list must be cleaned weekly.',
        manager: 'Sarah Jenkins'
      },
      {
        id: 4120,
        name: 'PlayQuest: Dragon Slayer Mobile RPG',
        category: 'Gaming',
        geo: 'Global (Tier 1 & 2)',
        payout: 3.80,
        payoutType: 'CPI',
        epc: 0.24,
        conversionType: 'CPI (Install + Tutorial)',
        trafficType: 'Social, In-App, Push',
        status: 'Active',
        featured: false,
        description: 'Immersive action RPG with high app store rankings and frictionless onboarding.',
        previewUrl: 'https://preview.dragon-slayer-rpg.demo',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=4120&aff_id=84920',
        terms: 'User must complete level 1 in-game tutorial for payout trigger.',
        manager: 'David Chen'
      },
      {
        id: 5504,
        name: 'Tesla Model 3 Mystery Sweepstakes',
        category: 'Sweepstakes',
        geo: 'US, CA',
        payout: 2.40,
        payoutType: 'CPL',
        epc: 0.38,
        conversionType: 'CPL (SOI)',
        trafficType: 'Push, Native, Pop, Social',
        status: 'Active',
        featured: false,
        description: 'Viral single opt-in sweepstakes lead generation page with high viral coefficient.',
        previewUrl: 'https://preview.tesla-rewards-giveaway.demo',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=5504&aff_id=84920',
        terms: 'SOI verification required. Bot traffic and duplicate submissions filtered by fraud detection.',
        manager: 'Alex Rivera'
      },
      {
        id: 6712,
        name: 'Apex Wealth Credit Score Builder',
        category: 'Lead Gen',
        geo: 'US',
        payout: 28.00,
        payoutType: 'CPL',
        epc: 0.94,
        conversionType: 'CPL (Lead Form)',
        trafficType: 'Search, Native, Display',
        status: 'Active',
        featured: false,
        description: 'Consumer finance lead gen offer providing personalized credit score analysis.',
        previewUrl: 'https://preview.apexcreditbuilder.demo',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=6712&aff_id=84920',
        terms: 'Must pass valid SSN match and phone verification in real-time.',
        manager: 'Sarah Jenkins'
      },
      {
        id: 7890,
        name: 'LuxeGlow Collagen Anti-Aging Elixir',
        category: 'E-Commerce',
        geo: 'US, UK, CA',
        payout: 55.00,
        payoutType: 'CPS',
        epc: 1.10,
        conversionType: 'CPS (RevShare 25%)',
        trafficType: 'Social, Influencer, Native',
        status: 'Active',
        featured: false,
        description: 'Premium skincare direct-to-consumer brand with high repeat purchases.',
        previewUrl: 'https://preview.luxeglow-serum.demo',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=7890&aff_id=84920',
        terms: 'Clean creative assets only. No fake doctor quotes.',
        manager: 'Alex Rivera'
      },
      {
        id: 8931,
        name: 'SafeDrive Auto Insurance Quotes',
        category: 'Lead Gen',
        geo: 'US',
        payout: 18.50,
        payoutType: 'CPL',
        epc: 0.62,
        conversionType: 'CPL (Zip + Vehicle)',
        trafficType: 'Search, Native, Display',
        status: 'Active',
        featured: false,
        description: 'Auto insurance comparison engine with high match rates across all 50 states.',
        previewUrl: 'https://preview.safedrivequotes.demo',
        trackingUrl: 'https://track.apexcpa.network/click?offer_id=8931&aff_id=84920',
        terms: 'Legitimate US drivers only. No incentivized clicks.',
        manager: 'David Chen'
      }
    ],
    notifications: [
      { id: 'n1', type: 'Conversion', title: 'New Conversion Recorded!', message: 'NordShield VPN Pro - Payout $42.00 credited to balance (Sub1: fb_ad_04).', time: '12m ago', read: false },
      { id: 'n2', type: 'New Offer', title: 'New High-EPC Offer Added', message: 'Quantum Flow AI Auto-Trading ($450.00 CPA) is now open for approved traffic.', time: '1h ago', read: false },
      { id: 'n3', type: 'Payment', title: 'Payment Sent #PAY-9921', message: '$406.40 sent via USDT-TRC20 (Tx: 0x8a92...3f12).', time: '1d ago', read: true },
      { id: 'n4', type: 'Withdrawal', title: 'Withdrawal Request Approved', message: 'Your withdrawal request of $406.40 was approved by finance.', time: '2d ago', read: true },
      { id: 'n5', type: 'Offer Approved', title: 'Offer Access Approved', message: 'You have been approved to run KetoMax Burn Diet Drop (US).', time: '3d ago', read: true },
      { id: 'n6', type: 'Security', title: 'New Login From San Francisco', message: 'New session started from Chrome on macOS (IP: 198.51.100.42).', time: '4d ago', read: true },
      { id: 'n7', type: 'Account', title: 'Tier 1 Publisher Milestone', message: 'Congratulations! Your account reached Tier 1 status. EPC boost unlocked.', time: '5d ago', read: true },
      { id: 'n8', type: 'System', title: 'Scheduled Tracking Upgrade', message: 'Core postback engines upgraded with sub-millisecond redirect latency.', time: '1w ago', read: true }
    ],
    tickets: [
      {
        id: 'TCK-4819',
        subject: 'Postback tracking parameter not triggering in Voluum',
        status: 'Open',
        priority: 'High',
        category: 'Tracking & Postback',
        created: '2026-09-28 06:30',
        updated: '2026-09-28 07:15',
        messages: [
          { sender: 'user', name: 'John Sterling', time: '06:30 AM', text: 'Hey Alex! I set up postback URL with {sub1} and {click_id} macro, but conversions are missing in my tracker. Could you check logs?' },
          { sender: 'admin', name: 'Alex Rivera (Support Admin)', time: '07:15 AM', text: 'Hello John! We reviewed your postback logs. It looks like Voluum was expecting {external_id} instead of {click_id}. I have updated the macro mapping on Offer #1042 for you. Please test another click!' }
        ]
      },
      {
        id: 'TCK-3210',
        subject: 'Request higher daily conversion cap on KetoMax Nutra',
        status: 'Pending',
        priority: 'Medium',
        category: 'Caps & Payout',
        created: '2026-09-27 14:10',
        updated: '2026-09-27 16:45',
        messages: [
          { sender: 'user', name: 'John Sterling', time: '02:10 PM', text: 'We are scaling Native Ads on Taboola and hitting the 50 cap by 1 PM EST. Can we increase cap to 150 daily?' },
          { sender: 'admin', name: 'Sarah Jenkins (Affiliate Director)', time: '04:45 PM', text: 'Hey John, your traffic quality score is 94/100 with solid chargeback metrics. Request sent to advertiser for 150 cap.' }
        ]
      },
      {
        id: 'TCK-1980',
        subject: 'Wire transfer swift code update for European account',
        status: 'Resolved',
        priority: 'Urgent',
        category: 'Billing & Payouts',
        created: '2026-09-24 10:00',
        updated: '2026-09-25 11:30',
        messages: [
          { sender: 'user', name: 'John Sterling', time: '10:00 AM', text: 'Updated banking entity details in payment settings. Please confirm verification.' },
          { sender: 'admin', name: 'Finance Desk', time: '11:30 AM', text: 'Verified and confirmed! Next payout batch will route to the new IBAN.' }
        ]
      },
      {
        id: 'TCK-1044',
        subject: 'Creative asset pack for Dragon Slayer Mobile RPG',
        status: 'Closed',
        priority: 'Low',
        category: 'Creatives & Landers',
        created: '2026-09-20 08:00',
        updated: '2026-09-21 09:00',
        messages: [
          { sender: 'user', name: 'John Sterling', time: '08:00 AM', text: 'Do you have localized video ads for Tier 2 GEOs?' },
          { sender: 'admin', name: 'Creative Team', time: '09:00 AM', text: 'Attached zip pack containing 1080x1920 9:16 gameplay clips and banner suite.' }
        ]
      }
    ],
    payments: [
      { id: 'PAY-9921', date: '2026-09-27', amount: 406.40, method: 'USDT (TRC-20)', status: 'Paid', txHash: '0x8a92f038c8213b194f87a32198c', invoice: 'INV-2026-092' },
      { id: 'PAY-8840', date: '2026-09-14', amount: 380.00, method: 'USDT (TRC-20)', status: 'Paid', txHash: '0x3c71a93214bc9123847aa10291e', invoice: 'INV-2026-081' },
      { id: 'PAY-7712', date: '2026-08-31', amount: 462.10, method: 'Wire Transfer', status: 'Paid', txHash: 'WIRE-US-993812', invoice: 'INV-2026-070' }
    ],
    withdrawalRequests: [
      { id: 'WREQ-104', date: '2026-09-28 06:12', user: 'AFF-84920 (John Sterling)', amount: 842.10, method: 'USDT (TRC-20)', destination: 'TJz4B8g...3f91Kx', status: 'Pending Review' },
      { id: 'WREQ-103', date: '2026-09-27 22:45', user: 'AFF-31048 (Elena Rostova)', amount: 1420.00, method: 'Wire Transfer', destination: 'DE89 3704...9921', status: 'Pending Review' },
      { id: 'WREQ-102', date: '2026-09-27 19:15', user: 'AFF-59124 (Marc Dupont)', amount: 520.00, method: 'PayPal', destination: 'marc.dupont.ads@gmail.com', status: 'Pending Review' }
    ],
    campaigns: [
      { id: 'CMP-101', name: 'FB Ads - NordShield Security US', offerId: 1042, clicks: 12400, conv: 198, spend: 3200, revenue: 8316, roi: '+159%', status: 'Active' },
      { id: 'CMP-102', name: 'Taboola Native - KetoMax Nutra', offerId: 3051, clicks: 8120, conv: 114, spend: 3800, revenue: 7296, roi: '+92%', status: 'Active' },
      { id: 'CMP-103', name: 'Google Search - AI Auto Trader UK', offerId: 2189, clicks: 3100, conv: 18, spend: 2800, revenue: 8100, roi: '+189%', status: 'Active' },
      { id: 'CMP-104', name: 'TikTok In-App - Dragon Slayer CPI', offerId: 4120, clicks: 1230, conv: 56, spend: 120, revenue: 212.80, roi: '+77%', status: 'Paused' }
    ],
    referrals: {
      totalInvited: 14,
      activeReferrals: 9,
      commissionRate: '5% Lifetime',
      totalEarned: 318.40,
      referralLink: 'https://apexcpa.network/ref/john84920',
      referredUsers: [
        { name: 'Marcus Vance', joined: '2026-08-12', earnings: '$4,280.00', yourCut: '$214.00', status: 'Active' },
        { name: 'Sarah Lin', joined: '2026-09-02', earnings: '$1,640.00', yourCut: '$82.00', status: 'Active' },
        { name: 'Liam Davies', joined: '2026-09-18', earnings: '$448.00', yourCut: '$22.40', status: 'Active' }
      ]
    },
    adminStats: {
      totalUsers: 4820,
      activeUsers: 3140,
      newUsers: 128,
      totalOffers: 245,
      activeOffers: 182,
      totalClicks: 1842500,
      totalConversions: 48290,
      approvedConversions: 44120,
      pendingConversions: 3180,
      rejectedConversions: 990,
      totalRevenue: 482900.00,
      totalPayout: 362175.00,
      pendingPayments: 24580.00,
      paidPayments: 337595.00,
      openTickets: 14
    },
    affiliateUsers: [
      { id: 'AFF-84920', name: 'John Sterling', email: 'j.sterling@apexaffiliates.io', status: 'Active', tier: 'Tier 1 VIP', earnings: 1248.50, clicks: 24850, conversions: 386, kyc: 'Verified' },
      { id: 'AFF-31048', name: 'Elena Rostova', email: 'elena@rostovamedia.com', status: 'Active', tier: 'Tier 1 VIP', earnings: 14200.00, clicks: 98400, conversions: 1240, kyc: 'Verified' },
      { id: 'AFF-59124', name: 'Marc Dupont', email: 'marc.dupont@adslogic.fr', status: 'Active', tier: 'Standard', earnings: 3840.50, clicks: 42100, conversions: 490, kyc: 'Verified' },
      { id: 'AFF-72019', name: 'CryptoTraffic Guru', email: 'leadgen@cryptotraffic.pro', status: 'Suspended', tier: 'Under Review', earnings: 180.00, clicks: 12000, conversions: 4, kyc: 'Pending' },
      { id: 'AFF-99120', name: 'ScrapeBot Agency', email: 'botmaster@spammer.net', status: 'Blocked', tier: 'Banned', earnings: 0.00, clicks: 45000, conversions: 0, kyc: 'Rejected' }
    ]
  };

  // State Management
  function loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    saveData(defaultData);
    return JSON.parse(JSON.stringify(defaultData));
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save data to LocalStorage:', e);
    }
  }

  const appState = loadData();

  // App Interface Helpers
  const ApexApp = {
    state: appState,

    save() {
      saveData(this.state);
    },

    resetDemo() {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    },

    // Notification System
    getUnreadNotificationsCount() {
      return this.state.notifications.filter(n => !n.read).length;
    },

    markAllNotificationsRead() {
      this.state.notifications.forEach(n => n.read = true);
      this.save();
      this.updateNotificationBadges();
      this.renderNotificationList();
      this.toast('Notifications', 'All notifications marked as read', 'success');
    },

    addNotification(type, title, message) {
      const newNotif = {
        id: 'n_' + Date.now(),
        type: type || 'System',
        title: title || 'Notice',
        message: message || '',
        time: 'Just now',
        read: false
      };
      this.state.notifications.unshift(newNotif);
      this.save();
      this.updateNotificationBadges();
      this.renderNotificationList();
      this.toast(title, message, 'info');
    },

    updateNotificationBadges() {
      const unread = this.getUnreadNotificationsCount();
      document.querySelectorAll('.unread-badge, .icon-badge').forEach(badge => {
        if (unread > 0) {
          badge.textContent = unread;
          badge.style.display = 'flex';
        } else {
          badge.style.display = 'none';
        }
      });
    },

    renderNotificationList(filterType = 'all') {
      const listEl = document.getElementById('notif-list-container');
      if (!listEl) return;

      let filtered = this.state.notifications;
      if (filterType !== 'all') {
        filtered = filtered.filter(n => n.type.toLowerCase() === filterType.toLowerCase());
      }

      if (filtered.length === 0) {
        listEl.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">No notifications found</div>';
        return;
      }

      listEl.innerHTML = filtered.map(item => `
        <div class="notif-item ${item.read ? '' : 'unread'}" onclick="ApexApp.toggleNotifRead('${item.id}')">
          <div style="font-size: 1.1rem; line-height: 1;">
            ${getNotifIcon(item.type)}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--text-main);">${escapeHtml(item.title)}</span>
              <span style="font-size: 0.6875rem; color: var(--text-muted);">${item.time}</span>
            </div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.35;">${escapeHtml(item.message)}</div>
            <div style="font-size: 0.6875rem; color: var(--accent-emerald); margin-top: 0.25rem; font-weight: 600;">Type: ${escapeHtml(item.type)}</div>
          </div>
        </div>
      `).join('');
    },

    toggleNotifRead(id) {
      const item = this.state.notifications.find(n => n.id === id);
      if (item) {
        item.read = !item.read;
        this.save();
        this.updateNotificationBadges();
        this.renderNotificationList();
      }
    },

    // Toast Engine
    toast(title, message, type = 'info') {
      let container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toastEl = document.createElement('div');
      toastEl.className = 'toast';
      
      let borderCol = 'var(--border-subtle)';
      let icon = '📢';
      if (type === 'success') { borderCol = 'var(--accent-emerald)'; icon = '✓'; }
      if (type === 'danger') { borderCol = 'var(--accent-rose)'; icon = '✕'; }
      if (type === 'warning') { borderCol = 'var(--accent-amber)'; icon = '⚠'; }

      toastEl.style.borderLeft = `4px solid ${borderCol}`;
      toastEl.innerHTML = `
        <div style="font-size: 1.1rem; line-height: 1;">${icon}</div>
        <div style="flex: 1;">
          <div style="font-weight: 700; font-size: 0.8125rem; color: var(--text-main);">${escapeHtml(title)}</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${escapeHtml(message)}</div>
        </div>
        <button onclick="this.parentElement.remove()" style="color: var(--text-muted); font-size: 1rem; padding: 0.2rem;">&times;</button>
      `;

      container.appendChild(toastEl);
      setTimeout(() => {
        if (toastEl.parentElement) {
          toastEl.style.opacity = '0';
          toastEl.style.transition = 'opacity 0.25s ease';
          setTimeout(() => toastEl.remove(), 250);
        }
      }, 4000);
    },

    // Modal Helpers
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    // Theme Switcher (Dark / Light)
    initTheme() {
      const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
      this.updateThemeButton();
    },

    toggleTheme() {
      const isLight = document.documentElement.classList.toggle('light-mode');
      localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
      this.updateThemeButton();
      this.toast('Theme Changed', `Switched to ${isLight ? 'Light' : 'Dark'} mode`, 'info');
    },

    updateThemeButton() {
      const isLight = document.documentElement.classList.contains('light-mode');
      document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.innerHTML = isLight 
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      });
    },

    // Mobile Navigation & Drawer
    toggleSidebar() {
      const sidebar = document.querySelector('.app-sidebar');
      if (sidebar) {
        sidebar.classList.toggle('open');
      }
    },

    toggleNotificationDrawer() {
      const drawer = document.getElementById('notification-drawer');
      if (drawer) {
        drawer.classList.toggle('active');
        if (drawer.classList.contains('active')) {
          this.renderNotificationList();
        }
      }
    },

    // Copy to clipboard helper
    copyToClipboard(text, msg = 'Copied to clipboard!') {
      navigator.clipboard.writeText(text).then(() => {
        this.toast('Success', msg, 'success');
      }).catch(() => {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        this.toast('Success', msg, 'success');
      });
    }
  };

  // HTML Escaping
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getNotifIcon(type) {
    switch (type) {
      case 'Conversion': return '💰';
      case 'New Offer': return '🏷️';
      case 'Offer Approved': return '✅';
      case 'Payment': return '💳';
      case 'Withdrawal': return '🏦';
      case 'Account': return '👤';
      case 'System': return '⚙️';
      case 'Security': return '🔐';
      default: return '📢';
    }
  }

  // PWA Support & In-App Prompt Handler
  let deferredPrompt = null;

  function initPWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => {
          console.log('ApexCPA Service Worker registered:', reg.scope);
        })
        .catch(err => {
          console.warn('Service worker registration failed:', err);
        });
    }

    // Capture install prompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const installBtns = document.querySelectorAll('.pwa-install-btn');
      installBtns.forEach(btn => {
        btn.style.display = 'inline-flex';
      });
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      document.querySelectorAll('.pwa-install-btn').forEach(btn => btn.style.display = 'none');
      ApexApp.toast('Installed', 'ApexCPA Network installed successfully!', 'success');
    });

    // Detect iOS Safari
    const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in window.navigator && window.navigator.standalone);

    if (isIOS && !isStandalone) {
      const iosBtns = document.querySelectorAll('.pwa-install-btn');
      iosBtns.forEach(btn => {
        btn.style.display = 'inline-flex';
        btn.onclick = () => {
          ApexApp.openModal('ios-install-guide-modal');
        };
      });
    }

    // Offline / Online status notification
    function updateOnlineStatus() {
      let banner = document.getElementById('offline-status-banner');
      if (!navigator.onLine) {
        if (!banner) {
          banner = document.createElement('div');
          banner.id = 'offline-status-banner';
          banner.className = 'offline-banner';
          banner.innerHTML = `<span style="width: 8px; height: 8px; border-radius: 50%; background: #000; display: inline-block;"></span> Offline Mode — Showing cached offers & performance data.`;
          document.body.appendChild(banner);
        }
      } else {
        if (banner) {
          banner.remove();
          ApexApp.toast('Back Online', 'Reconnected to ApexCPA live tracking servers.', 'success');
        }
      }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  }

  // Trigger Install
  window.triggerPWAInstall = function () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted PWA installation');
        }
        deferredPrompt = null;
      });
    } else {
      const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
      if (isIOS) {
        ApexApp.openModal('ios-install-guide-modal');
      } else {
        ApexApp.toast('Install', 'ApexCPA can be installed directly from your browser menu ("Install App" or "Add to Home Screen").', 'info');
      }
    }
  };

  // Expose Global
  window.ApexApp = ApexApp;

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    ApexApp.initTheme();
    ApexApp.updateNotificationBadges();
    initPWA();

    // Close modals on overlay background click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close sidebar on mobile nav link click
    document.querySelectorAll('.app-sidebar .nav-item a').forEach(link => {
      link.addEventListener('click', () => {
        const sidebar = document.querySelector('.app-sidebar');
        if (sidebar && window.innerWidth <= 1024) {
          sidebar.classList.remove('open');
        }
      });
    });
  });

})();
