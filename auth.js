const SUPABASE_URL = 'https://oikumdcokfhrzuvgmxku.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa3VtZGNva2Zocnp1dmdteGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NzA2NTYsImV4cCI6MjA4ODQ0NjY1Nn0.X_PzXZswIFPKZddV24rcSql6PbVoR0vmuKdn3Xh_qAQ';

const { createClient } = window.supabase;
const sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

const ERRORS = {
  notOnList: [
    "That's not your full first name — lowercase, no spaces. e.g. alex or maryjane",
    "Name not recognized. Enter your first name exactly, lowercase, no spaces.",
    "Check your spelling — use your full first name, lowercase, no spaces."
  ],
  alreadyTaken: [
    "That username is already taken.",
    "Someone already claimed that name. Are you sure that's yours?"
  ],
  emptyFields: [
    "Please fill in all fields.",
    "Don't leave anything blank!"
  ]
};

function randomError(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function initAuth() {
  const { data: { session } } = await sbClient.auth.getSession();
  if (session) {
    currentUser = session.user;
    hideAuthScreen();
  } else {
    showAuthScreen();
  }
  sbClient.auth.onAuthStateChange((event, session) => {
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
  errorEl.style.color = 'var(--crimson)';
  errorEl.textContent = '';
  if (!email || !password) {
    errorEl.textContent = randomError(ERRORS.emptyFields);
    return;
  }
  const { error } = await sbClient.auth.signInWithPassword({ email, password });
  if (error) {
    errorEl.textContent = error.message;
  }
}

async function handleSignup() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value.trim();
  const username = document.getElementById('auth-username').value.trim().toLowerCase();
  const errorEl = document.getElementById('auth-error');
  errorEl.style.color = 'var(--crimson)';
  errorEl.textContent = '';

  if (!email || !password || !username) {
    errorEl.textContent = randomError(ERRORS.emptyFields);
    return;
  }
  if (!email.toLowerCase().endsWith('@gmail.com')) {
    errorEl.textContent = 'Please use your Gmail address (@gmail.com) to sign up.';
    return;
  }
  if (password.length < 6) {
    errorEl.textContent = 'Password must be at least 6 characters.';
    return;
  }

  // Check allowed_usernames via RPC (list stays hidden on server)
  const { data: isAllowed, error: rpcError } = await sbClient.rpc('check_username_allowed', {
    input_username: username
  });

  if (rpcError || !isAllowed) {
    errorEl.textContent = randomError(ERRORS.notOnList);
    return;
  }

  // Check if username already taken in profiles
  const { data: existing } = await sbClient
    .from('profiles')
    .select('id')
    .eq('username', username)
    .maybeSingle();

  if (existing) {
    errorEl.textContent = randomError(ERRORS.alreadyTaken);
    return;
  }

  const { error } = await sbClient.auth.signUp({
    email,
    password,
    options: { data: { full_name: username } }
  });

  if (error) {
    errorEl.textContent = error.message;
  } else {
    errorEl.style.color = 'var(--emerald)';
    errorEl.textContent = 'Account created! Check your Gmail to verify before logging in.';
  }
}

async function handleLogout() {
  await sbClient.auth.signOut();
}

function toggleAuthMode() {
  const usernameField = document.getElementById('auth-username-row');
  const submitBtn = document.getElementById('auth-submit-btn');
  const titleEl = document.getElementById('auth-title');
  const switchEl = document.getElementById('auth-switch-text');
  const isLogin = usernameField.style.display === 'none';
  if (isLogin) {
    usernameField.style.display = 'flex';
    submitBtn.textContent = 'Sign Up';
    titleEl.textContent = 'Create Account';
    switchEl.innerHTML = 'Already have an account? <span onclick="toggleAuthMode()" style="color:var(--gold);cursor:pointer;text-decoration:underline;">Log In</span>';
  } else {
    usernameField.style.display = 'none';
    submitBtn.textContent = 'Log In';
    titleEl.textContent = 'Welcome Back';
    switchEl.innerHTML = 'No account yet? <span onclick="toggleAuthMode()" style="color:var(--gold);cursor:pointer;text-decoration:underline;">Sign Up</span>';
  }
  document.getElementById('auth-error').textContent = '';
}
