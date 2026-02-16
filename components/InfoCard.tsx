interface Props {
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, children }: Props) {
  return (
    <div className='rounded-xl border border-emerald-400 bg-emerald-50 p-4 shadow-sm'>
      <h2 className='text-lg font-bold text-emerald-900 mb-3'>{title}</h2>

      <div className='space-y-2 text-sm text-gray-800 leading-relaxed'>
        {children}
      </div>
    </div>
  );
}
