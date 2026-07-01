import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type HealthResponse } from '@studyforge/shared-types';

const apiUrl = import.meta.env.VITE_API_URL || '';

async function fetchHealth(): Promise<HealthResponse> {
  const { data } = await axios.get<HealthResponse>(`${apiUrl}/api/health`);
  return data;
}

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-gray-900 p-8 shadow-xl shadow-black/40 ring-1 ring-white/10">
        {/* Logo / wordmark */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
            S
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">StudyForge</span>
        </div>

        <h1 className="mb-1 text-sm font-medium uppercase tracking-widest text-gray-500">
          API Status
        </h1>

        {isLoading && (
          <p className="mt-2 text-lg font-semibold text-gray-400 animate-pulse">Checking…</p>
        )}

        {isError && (
          <p className="mt-2 text-lg font-semibold text-red-400">
            ✗ Could not reach API
          </p>
        )}

        {data && (
          <p className="mt-2 text-lg font-semibold text-emerald-400">
            ✓ Status: {data.status}
          </p>
        )}

        <p className="mt-6 text-xs text-gray-600">
          GET /api/health — Phase 0 skeleton
        </p>
      </div>
    </main>
  );
}
