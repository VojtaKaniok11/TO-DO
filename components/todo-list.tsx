'use client';

import React from 'react';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Plus } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem('moje-ukoly');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Failed to parse todos:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('moje-ukoly', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      },
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className='w-full max-w-md mx-auto'>
      <div className='flex gap-2 mb-6'>
        <Input
          type='text'
          placeholder='Napište nový úkol...'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          className='flex-1'
        />
        <Button onClick={addTodo} size='icon'>
          <Plus className='h-4 w-4' />
          <span className='sr-only'>Přidat úkol</span>
        </Button>
      </div>

      <div className='space-y-2'>
        {todos.length === 0 ? (
          <p className='text-center text-muted-foreground py-8'>
            Zatím nemáte žádné úkoly. Přidejte první!
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className='flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                id={`todo-${todo.id}`}
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`flex-1 cursor-pointer select-none ${todo.completed
                    ? 'line-through text-muted-foreground'
                    : 'text-foreground'
                  }`}
              >
                {todo.text}
              </label>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => deleteTodo(todo.id)}
                className='h-8 w-8 text-muted-foreground hover:text-destructive'
              >
                <Trash2 className='h-4 w-4' />
                <span className='sr-only'>Smazat úkol</span>
              </Button>
            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <p className='text-sm text-muted-foreground mt-4 text-center'>
          {todos.filter((t) => t.completed).length} z {todos.length} úkolů
          splněno
        </p>
      )}
    </div>
  );
}
