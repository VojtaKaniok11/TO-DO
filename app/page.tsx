'use client';

import { TodoList } from '@/components/todo-list';
import { use } from 'react';

export default function Home() {
  const testuj = () => {
    alert('Tlačítko funguje!');
  };
  return (
    <main className='min-h-screen bg-background py-12 px-4'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8 text-foreground'>
          Můj TO-DO List
        </h1>
        <TodoList />
      </div>
    </main>
  );
}
