const SUPABASE_URL = 'https://oikumdcokfhrzuvgmxku.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa3VtZGNva2Zocnp1dmdteGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NzA2NTYsImV4cCI6MjA4ODQ0NjY1Nn0.X_PzXZswIFPKZddV24rcSql6PbVoR0vmuKdn3Xh_qAQ';

const { createClient } = window.supabase;
const sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    currentUser = session.user;
    hideAuthScreen();
  } else {
    showAuthScreen();
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      currentUser = session.user;
      hideAuthScreen();
    } else {
      currentUser = null;
      showAuthScreen();
    }
  });
}

function showAuthScreen() {
  document.getElementById('auth-overlay').style.display = 'flex';
}

function hideAuthScreen() {
  document.getElementById('auth-overlay').style.display = 'none';
}

async function handleLogin() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value.trim();
  const errorEl = document.getElementById('auth-error');
  errorEl.textContent = '';

  if (!email || !password) {
    errorEl.textContent = 'Please fill in all fields.';
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    errorEl.textContent = error.message;
  }
}

async function handleSignup() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value.trim();
  const name = document.getElementById('auth-name').value.trim();
  const errorEl = document.getElementById('auth-error');
  errorEl.textContent = '';

  if (!email || !password || !name) {
    errorEl.textContent = 'Please fill in all fields.';
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = 'Password must be at least 6 characters.';
    return;
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } }
  });

  if (error) {
    errorEl.textContent = error.message;
  } else {
    document.getElementById('auth-error').style.color = 'var(--emerald)';
    errorEl.textContent = 'Account created! You are now logged in.';
  }
}

async function handleLogout() {
  await supabase.auth.signOut();
}

function toggleAuthMode() {
  const nameField = document.getElementById('auth-name-row');
  const toggleBtn = document.getElementById('auth-toggle-btn');
  const submitBtn = document.getElementById('auth-submit-btn');
  const titleEl = document.getElementById('auth-title');
  const switchEl = document.getElementById('auth-switch-text');

  const isLogin = nameField.style.display === 'none';
  if (isLogin) {
    nameField.style.display = 'flex';
    submitBtn.textContent = 'Sign Up';
    titleEl.textContent = 'Create Account';
    switchEl.innerHTML = 'Already have an account? <span onclick="toggleAuthMode()">Log In</span>';
  } else {
    nameField.style.display = 'none';
    submitBtn.textContent = 'Log In';
    titleEl.textContent = 'Welcome Back';
    switchEl.innerHTML = 'No account yet? <span onclick="toggleAuthMode()">Sign Up</span>';
  }
  document.getElementById('auth-error').textContent = '';
}
