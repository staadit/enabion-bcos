/* eslint-disable react/jsx-no-bind */
'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  password: '',
};

type StatusState =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'success' }
  | { type: 'error'; message: string; field?: keyof FormState };

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<StatusState>({ type: 'idle' });

  const updateField = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = (): string | null => {
    if (!form.firstName.trim() || !form.lastName.trim() || !form.companyName.trim()) {
      return 'All fields are required.';
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email.trim().toLowerCase())) {
      return 'Please enter a valid email.';
    }
    if (form.password.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    return null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    setStatus({ type: 'submitting' });

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ type: 'success' });
        return;
      }

      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      if (response.status === 409) {
        setStatus({ type: 'error', message: data?.error || 'An account with this email already exists.' });
      } else if (response.status === 400) {
        setStatus({ type: 'error', message: data?.error || 'Please check the form and try again.' });
      } else {
        setStatus({ type: 'error', message: 'Unexpected error. Please try again.' });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Network error';
      setStatus({ type: 'error', message });
    }
  };

  const isSubmitting = status.type === 'submitting';

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Create your organization</h1>
      <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
        Set up organization X and the first admin user. No SSO yet &mdash; just email and password.
      </p>

      {status.type === 'success' ? (
        <div
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            background: '#ecfdf3',
            color: '#166534',
            border: '1px solid #bbf7d0',
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>Registration successful.</p>
          <p style={{ margin: '0.25rem 0 0 0' }}>You can proceed to sign in once auth flow is wired.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>
              First name
              <input
                type="text"
                value={form.firstName}
                onChange={updateField('firstName')}
                required
                style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: '0.375rem' }}
              />
            </label>
            <label style={{ fontWeight: 600 }}>
              Last name
              <input
                type="text"
                value={form.lastName}
                onChange={updateField('lastName')}
                required
                style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: '0.375rem' }}
              />
            </label>
            <label style={{ fontWeight: 600 }}>
              Company name
              <input
                type="text"
                value={form.companyName}
                onChange={updateField('companyName')}
                required
                style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: '0.375rem' }}
              />
            </label>
            <label style={{ fontWeight: 600 }}>
              Work email
              <input
                type="email"
                value={form.email}
                onChange={updateField('email')}
                required
                style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: '0.375rem' }}
              />
            </label>
            <label style={{ fontWeight: 600 }}>
              Password
              <input
                type="password"
                value={form.password}
                onChange={updateField('password')}
                required
                minLength={8}
                style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: '0.375rem' }}
              />
            </label>
          </div>

          {status.type === 'error' ? (
            <div
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                background: '#fef2f2',
                color: '#991b1b',
                border: '1px solid #fecdd3',
              }}
            >
              {status.message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: isSubmitting ? '#9ca3af' : '#111827',
              color: '#fff',
              fontWeight: 600,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Creating...' : 'Create organization'}
          </button>
        </form>
      )}
    </main>
  );
}
