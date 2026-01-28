'use client';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <input
      type='text'
      placeholder='Keresés jogsértés megnevezésére…'
      className='mb-4 w-full rounded border px-3 py-2 text-sm'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
