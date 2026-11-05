import { SearchIcon } from './Icons';

interface SearchFieldProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function SearchField({
  id,
  value,
  onChange,
  placeholder = 'Search skills, prompts, and templates…',
  label = 'Search resources',
}: SearchFieldProps) {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-600" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="min-h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-ink-900 shadow-card outline-none transition placeholder:text-slate-500 focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  );
}
