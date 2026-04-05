// ========== STATE ==========
const state = {
  progress: 1,        // 0-3 meals completed
  currentScreen: 'screen-home',
  challengeComplete: false,
  previousProgress: 0
};

// ========== DOM REFS ==========
const screens = document.querySelectorAll('.screen');
const progressFillHome = document.getElementById('progress-fill-home');
const progressFillDetail = document.getElementById('progress-fill-detail');
const progressFillSuccess = document.getElementById('progress-fill-success');
const progressLabelHome = document.getElementById('progress-label-home');
const detailProgressCount = document.getElementById('detail-progress-count');
const challengeCard = document.getElementById('challenge-card');
const challengeBadge = document.getElementById('challenge-badge');
const challengeSubtitle = document.getElementById('challenge-subtitle');
const successSubtitle = document.getElementById('success-subtitle');
const successProgressLabel = document.getElementById('success-progress-label');
const successCheck = document.getElementById('success-check');
const rewardUnlockIcon = document.getElementById('reward-unlock-icon');
const demoOrderBtn = document.getElementById('demo-order-btn');

// ========== NAVIGATION ==========
function navigateTo(screenId) {
  // Don't navigate from completed card to details
  if (screenId === 'screen-details' && state.challengeComplete) return;

  screens.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  target.classList.add('active');
  state.currentScreen = screenId;

  // Trigger entrance animations based on screen
  if (screenId === 'screen-success') {
    triggerSuccessAnimations();
  } else if (screenId === 'screen-reward') {
    triggerRewardAnimations();
  } else if (screenId === 'screen-details') {
    updateDetailScreen();
  }
}

// ========== PROGRESS HELPERS ==========
function getProgressPercent(progress) {
  return (progress / 3) * 100;
}

function updateHomeProgress(animate) {
  const percent = getProgressPercent(state.progress);

  if (!animate) {
    progressFillHome.classList.add('no-transition');
    progressFillHome.style.width = percent + '%';
    progressFillHome.offsetHeight; // force reflow
    progressFillHome.classList.remove('no-transition');
  } else {
    progressFillHome.style.width = percent + '%';
  }

  if (state.challengeComplete) {
    progressLabelHome.textContent = 'Challenge completed ✓';
    challengeBadge.textContent = 'Completed';
    challengeSubtitle.textContent = 'Free delivery applied to your next order';
    challengeCard.classList.add('completed');
    challengeCard.style.cursor = 'default';
  } else {
    progressLabelHome.textContent = `${state.progress} of 3 meals completed`;
    challengeBadge.textContent = 'Active';
    challengeSubtitle.textContent = 'Order 3 meals this week to unlock free delivery';
    challengeCard.classList.remove('completed');
    challengeCard.style.cursor = 'pointer';
  }
}

function updateDetailScreen() {
  const percent = getProgressPercent(state.progress);
  progressFillDetail.classList.add('no-transition');
  progressFillDetail.style.width = percent + '%';
  progressFillDetail.offsetHeight;
  progressFillDetail.classList.remove('no-transition');
  detailProgressCount.textContent = `${state.progress} / 3`;
}

// ========== CARD ELEVATION MICROINTERACTION ==========
function pulseCard() {
  challengeCard.classList.add('elevated');
  setTimeout(() => {
    challengeCard.classList.remove('elevated');
  }, 300);
}

// ========== SIMULATE ORDER ==========
function simulateOrder() {
  if (state.challengeComplete) return;

  state.previousProgress = state.progress;
  state.progress++;

  if (state.progress >= 3) {
    state.progress = 3;
    state.challengeComplete = true;
    navigateTo('screen-reward');
  } else {
    navigateTo('screen-success');
  }

  updateDemoButton();
}

// ========== SUCCESS SCREEN ANIMATIONS ==========
function triggerSuccessAnimations() {
  // Reset animation state
  successCheck.classList.remove('animate');

  // Update content
  const remaining = 3 - state.progress;
  if (remaining > 0) {
    successSubtitle.textContent = `Nice! You're now ${state.progress} meal${state.progress > 1 ? 's' : ''} closer to free delivery.`;
  } else {
    successSubtitle.textContent = 'You did it! Free delivery is now unlocked.';
  }
  successProgressLabel.textContent = `${state.progress} of 3 meals completed`;

  // Animate progress from previous to current
  const prevPercent = getProgressPercent(state.previousProgress);
  const newPercent = getProgressPercent(state.progress);

  progressFillSuccess.classList.add('no-transition');
  progressFillSuccess.style.width = prevPercent + '%';
  progressFillSuccess.offsetHeight;
  progressFillSuccess.classList.remove('no-transition');

  // Stagger: checkmark first, then progress bar
  setTimeout(() => {
    successCheck.classList.add('animate');
  }, 100);

  setTimeout(() => {
    progressFillSuccess.style.width = newPercent + '%';
  }, 350);
}

// ========== REWARD SCREEN ANIMATIONS ==========
function triggerRewardAnimations() {
  rewardUnlockIcon.classList.remove('animate');
  void rewardUnlockIcon.offsetHeight;
  setTimeout(() => {
    rewardUnlockIcon.classList.add('animate');
  }, 100);
}

// ========== RETURN HOME ==========
function returnHome() {
  navigateTo('screen-home');
  // Animate the progress update on the home card
  setTimeout(() => {
    updateHomeProgress(true);
    pulseCard();
  }, 300);
}

// ========== COMPLETE CHALLENGE ==========
function completeChallenge() {
  navigateTo('screen-home');
  setTimeout(() => {
    updateHomeProgress(true);
  }, 300);
}

// ========== RESET ==========
function resetChallenge() {
  state.progress = 1;
  state.previousProgress = 0;
  state.challengeComplete = false;

  navigateTo('screen-home');
  updateHomeProgress(false);
  updateDemoButton();
}

// ========== DEMO BUTTON STATE ==========
function updateDemoButton() {
  if (state.challengeComplete) {
    demoOrderBtn.disabled = true;
    demoOrderBtn.querySelector('span').textContent = '✓ Challenge Done';
    demoOrderBtn.style.opacity = '0.5';
  } else {
    demoOrderBtn.disabled = false;
    demoOrderBtn.querySelector('span').textContent = `🍽️ Simulate Order (${state.progress + 1}/3)`;
    demoOrderBtn.style.opacity = '1';
  }
}

// ========== INIT ==========
function init() {
  updateHomeProgress(false);
  updateDemoButton();
}

init();
