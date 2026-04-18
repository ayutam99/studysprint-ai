'use client';

import { UploadCloud } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export function UploadNotes() {
  const [fileName, setFileName] = useState<string>('No file selected yet');

  return (
    <label className="block cursor-pointer rounded-2xl border border-dashed border-neonPurple/60 bg-neonPurple/10 p-6 text-center transition hover:border-neonBlue hover:bg-neonBlue/10">
      <UploadCloud className="mx-auto mb-2" />
      <p className="font-medium">Drag & drop notes (PDF, DOCX, TXT)</p>
      <p className="mt-2 text-sm text-slate-300">{fileName}</p>
      <input
        type="file"
        className="hidden"
        accept=".pdf,.docx,.txt"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFileName(file.name);
            toast.success(`${file.name} ready for analysis`);
          }
        }}
      />
    </label>
  );
}
